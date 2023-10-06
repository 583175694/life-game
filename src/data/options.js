const options = {
  0: [
    {
      id: 1,
      text: "父母经常陪伴读绘本",
      mustEvents: [10001, 10002],
      randomEvents: [10003, 10004],
      effects: {
        intelligence: +1,
        happiness: +2,
      },
    },
    {
      id: 2,
      text: "父母忙碌,外祖母照顾",
      mustEvents: [10005, 10006],
      randomEvents: [10007, 10008],
      effects: {
        happiness: -1,
        constitution: +1,
      },
    },
    {
      id: 3,
      text: "父母严格要求,重视学习",
      mustEvents: [10009, 10010],
      randomEvents: [10011, 10012],
      effects: {
        intelligence: +2,
        happiness: -1,
      },
    },
    {
      id: 4,
      text: "父母经常带去游乐场玩",
      mustEvents: [10013, 10014],
      randomEvents: [10015, 10016],
      effects: {
        happiness: +2,
        constitution: +1,
      },
    },
    {
      id: 5,
      text: "经常被带去爬山郊游",
      mustEvents: [10017, 10018],
      randomEvents: [10019, 10020],
      effects: {
        constitution: +2,
        happiness: +1,
      },
    },
    {
      id: 6,
      text: "父母工作繁忙,需要托管",
      mustEvents: [10021, 10022],
      randomEvents: [10023, 10024],
      effects: {
        happiness: -2,
      },
    },
    {
      id: 7,
      text: "家里有保姆长期照看",
      mustEvents: [10025, 10026],
      randomEvents: [10027, 10028],
      effects: {
        happiness: +1,
        constitution: +1,
      },
    },
    {
      id: 8,
      text: "经常生病,需要带看医生",
      mustEvents: [10029, 10030],
      randomEvents: [10031, 10032],
      effects: {
        constitution: -2,
        happiness: -1,
      },
    },
    {
      id: 9,
      text: "父母注重营养,按时添加辅食",
      mustEvents: [10033, 10034],
      randomEvents: [10035, 10036],
      effects: {
        constitution: +2,
      },
    },
    {
      id: 10,
      text: "父母忙碌工作,缺乏陪伴",
      mustEvents: [10037, 10038],
      randomEvents: [10039, 10040],
      effects: {
        happiness: -2,
      },
    },
  ],
  1: [
    {
      id: 1,
      text: "参加绘画、音乐等兴趣班",
      mustEvents: [20001, 20002],
      randomEvents: [20003, 20004],
      effects: {
        intelligence: +1,
        happiness: +1,
      },
    },
    {
      id: 2,
      text: "阅读量大,喜欢看童话故事",
      mustEvents: [20003, 20004],
      randomEvents: [20007, 20008],
      effects: {
        intelligence: +1,
        happiness: +1,
      },
    },
    {
      id: 3,
      text: "成绩优异,老师经常表扬",
      mustEvents: [20005, 20006],
      randomEvents: [20001, 20002],
      effects: {
        intelligence: +2,
        happiness: +1,
      },
    },
    {
      id: 4,
      text: "喜欢运动,经常参加球类活动",
      mustEvents: [20007, 20008],
      randomEvents: [20005, 20006],
      effects: {
        constitution: +1,
        happiness: +1,
      },
    },
    {
      id: 5,
      text: "家长重视教育,报名参加补课",
      mustEvents: [20009, 20010],
      randomEvents: [20009, 20020],
      effects: {
        intelligence: +1,
        happiness: -1,
      },
    },
    {
      id: 6,
      text: "容易交到朋友,有好几个玩伴",
      mustEvents: [20001, 20002],
      randomEvents: [20003, 20004],
      effects: {
        social: +2,
        happiness: +1,
      },
    },
    {
      id: 7,
      text: "喜欢自己玩,不太主动交朋友",
      mustEvents: [20005, 20006],
      randomEvents: [20007, 20008],
      effects: {
        happiness: -1,
      },
    },
    {
      id: 8,
      text: "经常生病请假,体质较弱",
      mustEvents: [20009, 20010],
      randomEvents: [20001, 20002],
      effects: {
        constitution: -1,
        happiness: -1,
      },
    },
    {
      id: 9,
      text: "喜欢role play游戏,发挥想象力",
      mustEvents: [20003, 20004],
      randomEvents: [20005, 20006],
      effects: {
        intelligence: +1,
        happiness: +1,
      },
    },
    {
      id: 10,
      text: "喜欢捣蛋玩笑,给老师添麻烦",
      mustEvents: [20007, 20008],
      randomEvents: [20009, 20010],
      effects: {
        happiness: +1,
        social: +1,
      },
    },
  ],
  2: [
    {
      id: 5,
      text: "选项1 - 大学阶段",
      mustEvents: [40001],
      randomEvents: [40003, 40004],
      effects: {
        intelligence: 2,
        wealth: 1,
      },
    },
    {
      id: 6,
      text: "选项2 - 大学阶段",
      mustEvents: [40002],
      randomEvents: [40007, 40008],
      effects: {
        social: 3,
        constitution: -1,
      },
    },
  ],
  3: [
    {
      id: 7,
      text: "选项1 - 成家立业",

      mustEvents: [50001],
      randomEvents: [50003, 50004],
      effects: {
        happiness: 2,
        wealth: 1,
      },
    },
    {
      id: 8,
      text: "选项2 - 成家立业",
      mustEvents: [50002],
      randomEvents: [50007, 50008],
      effects: {
        wealth: 3,
        constitution: -1,
      },
    },
  ],

  4: [
    {
      id: 9,
      text: "选项1 - 中年到空巢期",
      mustEvents: [60001],
      randomEvents: [60003, 60004],
      effects: {
        happiness: -2,
        constitution: 1,
      },
    },
    {
      id: 10,
      text: "选项2 - 中年到空巢期",
      mustEvents: [60002],
      randomEvents: [60007, 60008],
      effects: {
        wealth: -1,
        social: 2,
      },
    },
  ],
  5: [
    {
      id: 11,
      text: "选项1 - 退休生活",
      mustEvents: [70001],
      randomEvents: [70003, 70004],
      effects: {
        happiness: 2,
        constitution: -1,
      },
    },
    {
      id: 12,
      text: "选项2 - 退休生活",
      mustEvents: [70002],
      randomEvents: [70007, 70008],
      effects: {
        happiness: 1,
        social: 1,
        wealth: -2,
      },
    },
  ],
};

export default options;
