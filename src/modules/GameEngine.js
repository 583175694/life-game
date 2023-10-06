// GameEngine.js
import stages from "../data/stage";
import eventsData from "../data/events";
import optionsData from "../data/options";

class GameEngine {
  constructor() {
    // 初始化玩家属性
    this.playerAttributes = {
      intelligence: 0, // 智力
      appearance: 0, // 颜值
      constitution: 0, // 体质
      wealth: 0, // 家境
      happiness: 0, // 快乐
      social: 0, // 社会
      income: 0, // 收入
    };
    this.stages = stages;
    this.eventsData = eventsData;
    this.optionsData = optionsData;
    this.currentEvent = null;
    this.currentStageIndex = 0;
  }

  getRandomItemsFromArray(arr, numItems) {
    const shuffledArray = arr.slice().sort(() => 0.5 - Math.random()); // 随机排序数组的副本
    return shuffledArray.slice(0, numItems); // 返回前 numItems 项
  }

  // 新增方法，根据生活阶段生成事件和选项
  generateEventFromStage(stage, selectedOption) {
    const mustEventIds =
      (selectedOption && selectedOption.mustEvents) || stage.mustEvents;
    const randomEventIds = this.getRandomEventIds(stage.randomEvents);

    const events = mustEventIds.map(
      (eventId) => this.eventsData[eventId].event
    );
    events.push(
      ...randomEventIds.map((eventId) => this.eventsData[eventId].event)
    );

    // 根据选项编号获取选项
    // const eventOptions = this.optionsData[this.currentStageIndex];

    const eventOptions = this.getCurrentStageOptions();

    return { events, options: eventOptions };
  }

  // 辅助方法，获取随机事件的ID
  getRandomEventIds(randomEvents) {
    let randomEventIndices = [];
    const maxRandomEvents = 3; // 每个阶段渲染3个随机事件
    console.log(this.filterEventsByAttributes(randomEvents));
    randomEventIndices.push(...this.filterEventsByAttributes(randomEvents));

    // 如果大于三项，则随机取三项
    if (randomEventIndices.length > maxRandomEvents) {
      randomEventIndices = this.getRandomItemsFromArray(
        randomEventIndices,
        maxRandomEvents
      );
    }

    while (randomEventIndices.length < maxRandomEvents) {
      const randomIndex = Math.floor(Math.random() * randomEvents.length);
      const eventId = randomEvents[randomIndex];
      if (!randomEventIndices.includes(eventId)) {
        randomEventIndices.push(eventId);
      }
    }

    // 保存随机事件的索引，以便后续使用
    this.randomEventsIndices = randomEventIndices;

    return randomEventIndices;
  }

  // 更新 startGame 方法以使用新的方法生成事件
  startGame() {
    const initialAttributes = {
      intelligence: Math.floor(Math.random() * 11),
      appearance: Math.floor(Math.random() * 11),
      constitution: Math.floor(Math.random() * 11),
      wealth: Math.floor(Math.random() * 11),
      happiness: Math.floor(Math.random() * 11),
    };

    this.playerAttributes = initialAttributes;

    const initialStage = this.stages[this.currentStageIndex];
    const initialEvent = this.generateEventFromStage(initialStage);
    this.currentEvent = this.formatEvent(initialEvent);
    return this.currentEvent;
  }

  // 格式化事件以包括属性
  formatEvent(event) {
    const formattedEvent = { ...event };

    // 更新事件的标题和描述基于出生属性
    formattedEvent.event = event.events.join("\n");

    return formattedEvent;
  }

  // 处理玩家选择的选项
  handleOptionSelection(optionId) {
    // 处理选项选择，更新玩家属性等信息
    const selectedOption = this.currentEvent.options.find(
      (option) => option.id === optionId
    );

    // 更新玩家属性
    for (const attribute in selectedOption.effects) {
      this.playerAttributes[attribute] += selectedOption.effects[attribute];
    }

    // 检查是否需要进入下一个生活阶段
    if (this.currentStageIndex < Object.keys(this.stages).length - 1) {
      this.currentStageIndex++;
    } else {
      alert("游戏结束");
      return null;
    }

    // 获取下一个事件
    const currentStage = this.stages[this.currentStageIndex];
    const nextEvent = this.generateEventFromStage(currentStage, selectedOption);

    // 根据新的事件和属性来更新描述
    this.currentEvent = this.formatEvent(nextEvent);

    return this.currentEvent;
  }

  // 获取当前属性的方法
  getPlayerAttributes() {
    return { ...this.playerAttributes };
  }

  // 辅助方法，根据属性筛选事件
  filterEventsByAttributes(eventIds) {
    return eventIds.filter((eventId) => {
      const event = this.eventsData[eventId];
      if (!event.attributesRequired) {
        // 如果事件没有属性条件，直接返回
        return true;
      }

      // 检查是否满足属性条件
      return Object.keys(event.attributesRequired).every((attribute) => {
        return (
          this.playerAttributes[attribute] >=
          event.attributesRequired[attribute]
        );
      });
    });
  }

  // 获取当前阶段的选项
  getCurrentStageOptions() {
    const currentStageOptions = this.optionsData[this.currentStageIndex] || [];
    return this.getRandomItemsFromArray(currentStageOptions, 3);
  }
}

export default GameEngine;
