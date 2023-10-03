// GameEngine.js
import stages from "../data/stage";
import eventsData from "../data/events";
import options from "../data/options";

class GameEngine {
  constructor() {
    // 初始化玩家属性
    this.playerAttributes = {
      intelligence: 0,
      appearance: 0,
      constitution: 0,
      wealth: 0,
      happiness: 0,
      social: 0,
      income: 0,
    };
    this.stages = stages;
    this.eventsData = eventsData;
    this.options = options; // 新增选项数据
    this.currentEvent = null;
    this.currentStageIndex = 0;
  }

  // 新增方法，根据生活阶段生成事件和选项
  generateEventFromStage(stage) {
    const mustEventIds = stage.mustEvents;
    const randomEventIds = this.getRandomEventIds(stage.randomEvents);

    const events = mustEventIds.map((eventId) => this.eventsData[eventId].event);
    events.push(...randomEventIds.map((eventId) => this.eventsData[eventId].event));

    // 根据选项编号获取选项
    const eventOptions = options[this.currentStageIndex];

    return { events, options: eventOptions };
  }

  // 辅助方法，获取随机事件的ID
  getRandomEventIds(randomEvents) {
    const randomEventIndices = [];
    const maxRandomEvents = 3; // 每个阶段渲染3个随机事件

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
    };

    this.playerAttributes = initialAttributes;

    const initialStage = this.stages[this.currentStageIndex];
    const initialEvent = this.generateEventFromStage(initialStage);
    this.currentEvent = this.formatEvent(initialEvent, initialAttributes);
    return this.currentEvent;
  }

  // 格式化事件以包括属性
  formatEvent(event, attributes) {
    const formattedEvent = { ...event };

    // 更新事件的标题和描述基于出生属性
    formattedEvent.event = event.events.join('\n');
    formattedEvent.description = `你出生在一个${attributes.wealth}的家庭，智力为${attributes.intelligence}，颜值为${attributes.appearance}，体质为${attributes.constitution}。`;

    // 更新事件的选项
    if (formattedEvent.options) {
      formattedEvent.options.forEach((option) => {
        // 根据出生属性调整选项的效果
        option.effects.intelligence = attributes.intelligence;
        option.effects.appearance = attributes.appearance;
        option.effects.constitution = attributes.constitution;
        option.effects.wealth = attributes.wealth;
      });
    }

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
      alert('游戏结束');
      return null;
    }

    // 获取下一个事件
    const currentStage = this.stages[this.currentStageIndex];
    const nextEvent = this.generateEventFromStage(currentStage);

    // 根据新的事件和属性来更新描述
    this.currentEvent = this.formatEvent(nextEvent, this.playerAttributes);

    return this.currentEvent;
  }

  // 用于更新属性的方法
  updateAttributes(effects) {
    for (const attribute in effects) {
      if (Object.hasOwnProperty.call(this.playerAttributes, attribute)) {
        this.playerAttributes[attribute] += effects[attribute];
      }
    }
  }

  // 获取当前属性的方法
  getPlayerAttributes() {
    return { ...this.playerAttributes };
  }
}

export default GameEngine;
