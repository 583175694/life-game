const events = {
  10001: {
    id: 10001,
    event: "你出生了,是个健康的婴儿。",
    relatedEvents: [10002],
    attributesRequired: {
      constitution: 6,
    },
  },
  10002: {
    id: 10002,
    event: "你接种了首针疫苗,健康快乐地成长。",
    relatedEvents: [10003],
    attributesRequired: {
      constitution: 6,
    },
  },
  10003: {
    id: 10003,
    event: "你学会了翻身,父母非常兴奋。",
    relatedEvents: [10004],
    attributesRequired: {
      constitution: 5,
    },
  },
  10004: {
    id: 10004,
    event: "你开始咿呀学语,家人们听得津津有味。",
    relatedEvents: [10005],
    attributesRequired: {
      intelligence: 5,
    },
  },
  10005: {
    id: 10005,
    event: "你第一次尝试摇摇爬,努力想要移动。",
    relatedEvents: [10006],
    attributesRequired: {
      constitution: 6,
    },
  },
  10006: {
    id: 10006,
    event: "你第一次尝试食物,对新味道充满好奇。",
    relatedEvents: [10007],
    attributesRequired: {
      constitution: 5,
    },
  },
  10007: {
    id: 10007,
    event: "你学会自己抓住玩具,展现灵活的动作。",
    relatedEvents: [10008],
    attributesRequired: {
      constitution: 6,
    },
  },
  10008: {
    id: 10008,
    event: "你对玲娜贝儿玩具充满兴趣,爱不释手。",
    relatedEvents: [10009],
    attributesRequired: {
      intelligence: 6,
    },
  },
  10009: {
    id: 10009,
    event: "你开始学步,摇摇晃晃走几步又跌倒。",
    relatedEvents: [10010],
    attributesRequired: {
      constitution: 6,
    },
  },
  10010: {
    id: 10010,
    event: "你对镜子里的自己很好奇,经常吹泡泡逗自己开心。",
    relatedEvents: [],
    attributesRequired: {
      intelligence: 5,
    },
  },
  10011: {
    id: 10011,
    event: "你学会自己拍手玩游戏,展现聪明天性。",
    relatedEvents: [10012],
    attributesRequired: {
      intelligence: 6,
    },
  },
  10012: {
    id: 10012,
    event: "你开始学着叫爸爸妈妈,家人听了非常开心。",
    relatedEvents: [10013],
    attributesRequired: {
      intelligence: 6,
    },
  },

  10013: {
    id: 10013,
    event: "你第一次尝试用勺子吃饭,吃得一嘴饭粒。",
    relatedEvents: [10014],
    attributesRequired: {
      constitution: 5,
    },
  },
  10014: {
    id: 10014,
    event: "你开始喜欢听音乐,经常转头找声音。",
    relatedEvents: [10015],
    attributesRequired: {
      intelligence: 6,
    },
  },
  10015: {
    id: 10015,
    event: "你学会坐起来,可以看见更多周围的环境。",
    relatedEvents: [10016],
    attributesRequired: {
      constitution: 6,
    },
  },
  10016: {
    id: 10016,
    event: "你第一次尝试拿书翻页,展现好奇心。",
    relatedEvents: [10017],
    attributesRequired: {
      intelligence: 6,
    },
  },
  10017: {
    id: 10017,
    event: "你开始喜欢玩过家家,展现模仿能力。",
    relatedEvents: [10018],
    attributesRequired: {
      intelligence: 6,
    },
  },
  10018: {
    id: 10018,
    event: "你第一次成功站起来行走几步,父母欣喜若狂。",
    relatedEvents: [10019],
    attributesRequired: {
      constitution: 7,
    },
  },
  10019: {
    id: 10019,
    event: "你学会简单词语,开始与人简单对话。",
    relatedEvents: [10020],
    attributesRequired: {
      intelligence: 7,
    },
  },
  10020: {
    id: 10020,
    event: "你开始学着自己用勺子吃东西,进食越来越独立。",
    relatedEvents: [],
    attributesRequired: {
      constitution: 6,
    },
  },
  10021: {
    id: 10021,

    event: "你需要去托儿所,开始适应和其他小朋友的相处。",
    relatedEvents: [10022],
    attributesRequired: {
      constitution: 5,
    },
  },

  10022: {
    id: 10022,
    event: "你在托儿所经常哭闹,不适应新的环境。",
    relatedEvents: [10023],
    attributesRequired: {
      happiness: 3,
    },
  },

  10023: {
    id: 10023,
    event: "你经常感冒发烧,需要定期看医生。",
    relatedEvents: [10024],
    attributesRequired: {
      constitution: 3,
    },
  },

  10024: {
    id: 10024,
    event: "你需要频繁服药治疗,身体比较虚弱。",
    relatedEvents: [10025],
    attributesRequired: {
      constitution: 4,
    },
  },
  10025: {
    id: 10025,
    event: "你开始患有食物过敏,需要避免某些食物。",
    relatedEvents: [10026],
    attributesRequired: {
      constitution: 4,
    },
  },

  10026: {
    id: 10026,

    event: "你需要定期接受物理治疗,帮助骨骼发育。",
    relatedEvents: [10027],
    attributesRequired: {
      constitution: 5,
    },
  },

  10027: {
    id: 10027,
    event: "你患有哮喘,需要定期使用吸入器。",
    relatedEvents: [10028],
    attributesRequired: {
      constitution: 4,
    },
  },

  10028: {
    id: 10028,
    event: "你患有先天性心脏病,需要小心调养。",
    relatedEvents: [10029],
    attributesRequired: {
      constitution: 3,
    },
  },

  10029: {
    id: 10029,
    event: "你经常吃不下饭,生长发育缓慢。",
    relatedEvents: [10030],
    attributesRequired: {
      constitution: 4,
    },
  },

  10030: {
    id: 10030,
    event: "你抵抗力较差,经常感冒发烧。",
    relatedEvents: [],
    attributesRequired: {
      constitution: 4,
    },
  },
  10031: {
    id: 10031,
    event: "你第一次成功独自站立十秒钟,父母开心地鼓掌。",
    relatedEvents: [10032],
    attributesRequired: {
      constitution: 6,
    },
  },

  10032: {
    id: 10032,
    event: "你开始学走路,但还不太稳,需要人搀扶。",
    relatedEvents: [10033],
    attributesRequired: {
      constitution: 5,
    },
  },

  10033: {
    id: 10033,
    event: "你开始自己用小勺子吃饭,进食能力得到提高。",
    relatedEvents: [10034],
    attributesRequired: {
      constitution: 6,
    },
  },

  10034: {
    id: 10034,
    event: "你能说出几个简单词语,语言能力有所提高。",
    relatedEvents: [10035],
    attributesRequired: {
      intelligence: 6,
    },
  },

  10035: {
    id: 10035,
    event: "你抵抗力较差,需要多补充维生素。",
    relatedEvents: [10036],
    attributesRequired: {
      constitution: 4,
    },
  },

  10036: {
    id: 10036,
    event: "你患有环境过敏,需要避免尘螨接触。",
    relatedEvents: [10037],
    attributesRequired: {
      constitution: 4,
    },
  },

  10037: {
    id: 10037,
    event: "你开始学会自己把玩具拼接,动手能力得到提高。",
    relatedEvents: [10038],
    attributesRequired: {
      intelligence: 6,
    },
  },

  10038: {
    id: 10038,
    event: "你患有湿疹,需要使用特殊身体乳。",
    relatedEvents: [10039],
    attributesRequired: {
      constitution: 4,
    },
  },

  10039: {
    id: 10039,
    event: "你试着模仿大人说话,语言能力进步明显。",
    relatedEvents: [10040],
    attributesRequired: {
      intelligence: 7,
    },
  },

  10040: {
    id: 10040,
    event: "你患有食物过敏,需要避免吃海鲜。",
    relatedEvents: [],
    attributesRequired: {
      constitution: 5,
    },
  },
  20001: {
    id: 20001,
    event: "你开始上小学,结交了第一个朋友。",
    relatedEvents: [20002],
    attributesRequired: { intelligence: 5, social: 5 },
  },
  20002: {
    id: 20002,
    event: "你喜欢上了学校,每天都期待去上课。",
    relatedEvents: [20003],
    attributesRequired: { intelligence: 6, happiness: 6 },
  },
  20003: {
    id: 20003,
    event: "你在学校学到了很多有趣的知识。",
    relatedEvents: [20004],
    attributesRequired: { intelligence: 7, happiness: 7 },
  },
  20004: {
    id: 20004,
    event: "你成绩优秀,老师经常表扬你。",
    relatedEvents: [20005],
    attributesRequired: { intelligence: 8, happiness: 8 },
  },
  20005: {
    id: 20005,
    event: "你在学校的演出中扮演了主角。",
    relatedEvents: [20006],
    attributesRequired: { intelligence: 6, social: 6 },
  },
  20006: {
    id: 20006,
    event: "你和同学一起组队参加了学校的体育比赛。",
    relatedEvents: [20007],
    attributesRequired: { social: 7, constitution: 6 },
  },
  20007: {
    id: 20007,
    event: "你在学校的美术比赛中获得了第一名。",
    relatedEvents: [20008],
    attributesRequired: { intelligence: 7, appearance: 6 },
  },
  20008: {
    id: 20008,
    event: "你的第一个小学老师对你的成绩非常满意。",
    relatedEvents: [20009],
    attributesRequired: { intelligence: 8, social: 6 },
  },
  20009: {
    id: 20009,
    event: "你在小学时期培养了阅读爱好,爱上了书。",
    relatedEvents: [20010],
    attributesRequired: { intelligence: 8, happiness: 7 },
  },
  20010: {
    id: 20010,
    event: "你和小伙伴们一起度过了快乐的小学时光。",
    relatedEvents: [],
    attributesRequired: { happiness: 8, social: 8 },
  },
  30001: {
    id: 30001,
    event: "你进入了初中,结交了新的朋友。",
    relatedEvents: [30002],
    attributesRequired: {
      social: 7,
    },
  },
  30002: {
    id: 30002,
    event: "你喜欢上了学校的社团活动。",
    relatedEvents: [30003],
    attributesRequired: {
      social: 8,
    },
  },
  30003: {
    id: 30003,
    event: "你在初中学到了更多有挑战性的知识。",
    relatedEvents: [30004],
    attributesRequired: {
      intelligence: 8,
    },
  },

  30004: {
    id: 30004,
    event: "你在学术方面取得了突破性进展。",
    relatedEvents: [30005],
    attributesRequired: {
      intelligence: 9,
    },
  },
  30005: {
    id: 30005,
    event: "你和同学一起组队参加了学校的文化节。",
    relatedEvents: [30006],
    attributesRequired: {
      social: 8,
      happiness: 8,
    },
  },
  30006: {
    id: 30006,
    event: "你在学校的科技比赛中获得了奖项。",
    relatedEvents: [30007],
    attributesRequired: {
      intelligence: 9,
    },
  },
  30007: {
    id: 30007,
    event: "你的初中老师鼓励你继续努力学习。",
    relatedEvents: [30008],
    attributesRequired: {
      intelligence: 8,
      social: 7,
    },
  },
  30008: {
    id: 30008,
    event: "你在初中时期培养了领导才能。",
    relatedEvents: [30009],
    attributesRequired: {
      intelligence: 7,
      social: 8,
    },
  },
  30009: {
    id: 30009,
    event: "你在学校的音乐比赛中表现出色。",
    relatedEvents: [30010],
    attributesRequired: {
      intelligence: 6,
      appearance: 7,
    },
  },
  30010: {
    id: 30010,
    event: "你度过了充实而快乐的中学时光。",
    relatedEvents: [],
    attributesRequired: {
      happiness: 9,
      social: 8,
    },
  },

  40001: {
    id: 40001,
    event: "你进入了大学,面临了新的学习挑战。",
    relatedEvents: [40002],
    attributesRequired: {
      intelligence: 8,
    },
  },
  40002: {
    id: 40002,
    event: "你在大学里交到了志同道合的朋友。",
    relatedEvents: [40003],
    attributesRequired: {
      social: 8,
    },
  },
  40003: {
    id: 40003,
    event: "你选择了自己感兴趣的专业。",
    relatedEvents: [40004],
    attributesRequired: {
      intelligence: 7,
      happiness: 7,
    },
  },
  40004: {
    id: 40004,
    event: "你积极参加大学的社团活动。",
    relatedEvents: [40005],
    attributesRequired: {
      social: 8,
      happiness: 7,
    },
  },
  40005: {
    id: 40005,
    event: "你在大学里取得了优异的学术成绩。",
    relatedEvents: [40006],
    attributesRequired: {
      intelligence: 9,
      happiness: 8,
    },
  },
  40006: {
    id: 40006,
    event: "你获得了一份学习方面的奖学金。",
    relatedEvents: [40007],
    attributesRequired: {
      intelligence: 9,
      wealth: 6,
    },
  },
  40007: {
    id: 40007,
    event: "你在大学里结交了一位特殊的朋友。",
    relatedEvents: [40008],
    attributesRequired: {
      social: 8,
      happiness: 9,
    },
  },
  40008: {
    id: 40008,
    event: "你参与了大学的社会实践活动。",
    relatedEvents: [40009],
    attributesRequired: {
      social: 7,
      happiness: 7,
    },
  },
  40009: {
    id: 40009,
    event: "你的大学教授对你的学术成就赞赏有加。",
    relatedEvents: [40010],
    attributesRequired: {
      intelligence: 9,
      social: 7,
    },
  },
  40010: {
    id: 40010,
    event: "你顺利完成了大学学业,迎来了新的人生阶段。",
    relatedEvents: [],
    attributesRequired: {
      intelligence: 8,
      happiness: 9,
    },
  },

  50001: {
    id: 50001,
    event: "你毕业后找到了一份稳定的工作。",
    relatedEvents: [50002],
    attributesRequired: {
      intelligence: 7,
      wealth: 6,
    },
  },
  50002: {
    id: 50002,
    event: "你与爱人相识并坠入爱河。",
    relatedEvents: [50003],
    attributesRequired: {
      social: 8,
      happiness: 9,
    },
  },
  50003: {
    id: 50003,
    event: "你决定步入婚姻殿堂。",
    relatedEvents: [50004],
    attributesRequired: {
      happiness: 10,
    },
  },
  50004: {
    id: 50004,
    event: "你在事业上逐渐取得成功。",
    relatedEvents: [50005],
    attributesRequired: {
      intelligence: 8,
      wealth: 8,
    },
  },
  50005: {
    id: 50005,
    event: "你的第一个孩子出生了。",
    relatedEvents: [50006],
    attributesRequired: {
      happiness: 10,
    },
  },
  50006: {
    id: 50006,
    event: "你为了家庭努力工作,有时忽略了自己的兴趣。",
    relatedEvents: [50007],
    attributesRequired: {
      wealth: 8,
      happiness: 7,
    },
  },
  50007: {
    id: 50007,
    event: "你和家人度过了一次难忘的假期。",
    relatedEvents: [50008],
    attributesRequired: {
      happiness: 9,
      wealth: 7,
    },
  },
  50008: {
    id: 50008,
    event: "你决定升职加薪,提高家庭生活质量。",
    relatedEvents: [50009],
    attributesRequired: {
      wealth: 7,
      happiness: 8,
    },
  },
  50009: {
    id: 50009,
    event: "你的家庭逐渐壮大,忙碌而幸福。",
    relatedEvents: [50010],
    attributesRequired: {
      happiness: 8,
      wealth: 8,
    },
  },
  50010: {
    id: 50010,
    event: "你在事业和家庭中都取得了一定的成就。",
    relatedEvents: [],
    attributesRequired: {
      wealth: 8,
      happiness: 9,
    },
  },

  60001: {
    id: 60001,
    event: "你的孩子们都已经长大,搬出了家。",
    relatedEvents: [60002],
    attributesRequired: {
      happiness: 7,
    },
  },
  60002: {
    id: 60002,
    event: "你和配偶开始考虑退休生活的计划。",
    relatedEvents: [60003],
    attributesRequired: {
      wealth: 7,
    },
  },
  60003: {
    id: 60003,
    event: "你们计划远足旅行,体验世界各地的文化。",
    relatedEvents: [60004],
    attributesRequired: {
      wealth: 8,
      happiness: 8,
    },
  },
  60004: {
    id: 60004,
    event: "你们迎来了退休生活,有更多时间追求兴趣和爱好。",
    relatedEvents: [60005],
    attributesRequired: {
      happiness: 9,
    },
  },
  60005: {
    id: 60005,
    event: "你决定为社区服务,做一些志愿工作。",
    relatedEvents: [60006],
    attributesRequired: {
      social: 7,
      happiness: 8,
    },
  },
  60006: {
    id: 60006,
    event: "你开始享受自由自在的生活,去探索未知的冒险。",
    relatedEvents: [60007],
    attributesRequired: {
      happiness: 9,
    },
  },
  60007: {
    id: 60007,
    event: "你偶尔会回忆起过去的人生,回味那段美好的时光。",
    relatedEvents: [60008],
    attributesRequired: {
      happiness: 8,
    },
  },
  60008: {
    id: 60008,
    event: "你决定搬到一个安静的小镇,过上宁静的生活。",
    relatedEvents: [60009],
    attributesRequired: {
      happiness: 7,
    },
  },
  60009: {
    id: 60009,
    event: "你和配偶一起参加养老院的活动,度过幸福的晚年。",
    relatedEvents: [60010],
    attributesRequired: {
      happiness: 8,
      social: 6,
    },
  },
  60010: {
    id: 60010,
    event: "你享受着退休生活的每一天,充实而满足。",
    relatedEvents: [],
    attributesRequired: {
      happiness: 9,
    },
  },

  70001: {
    id: 70001,
    event: "你和配偶搬到了海边的小屋,每天都可以听海浪声入睡。",
    relatedEvents: [70002],
    attributesRequired: {
      happiness: 8,
      wealth: 6,
    },
  },
  70002: {
    id: 70002,
    event: "你决定重新学习一门新技能,比如绘画或乐器演奏。",
    relatedEvents: [70003],
    attributesRequired: {
      intelligence: 6,
      happiness: 7,
    },
  },
  70003: {
    id: 70003,
    event: "你经常邀请朋友们来小屋做客,享受友情和欢笑。",
    relatedEvents: [70004],
    attributesRequired: {
      social: 8,
      happiness: 8,
    },
  },
  70004: {
    id: 70004,
    event: "你和配偶一起参加了社交舞班,重新点燃了爱情的激情。",
    relatedEvents: [70005],
    attributesRequired: {
      social: 7,
      happiness: 8,
    },
  },
  70005: {
    id: 70005,
    event: "你们开始享受养老生活,有时间去世界各地旅行。",
    relatedEvents: [70006],
    attributesRequired: {
      wealth: 7,
      happiness: 9,
    },
  },
  70006: {
    id: 70006,
    event: "你加入了退休社团,结交了新的朋友,拓宽了社交圈。",
    relatedEvents: [70007],
    attributesRequired: {
      social: 8,
      happiness: 8,
    },
  },
  70007: {
    id: 70007,
    event: "你感到生活充满了满足,每天都能够做自己喜欢的事。",
    relatedEvents: [70008],
    attributesRequired: {
      happiness: 9,
    },
  },
  70008: {
    id: 70008,
    event: "你和配偶一起种植花园,享受园艺的乐趣。",
    relatedEvents: [70009],
    attributesRequired: {
      happiness: 8,
    },
  },
  70009: {
    id: 70009,
    event: "你们定期举办家庭聚会,亲情关系更加亲近。",
    relatedEvents: [70010],
    attributesRequired: {
      happiness: 8,
      social: 7,
    },
  },
  70010: {
    id: 70010,
    event: "你的退休生活充实而幸福,感慨人生的美好。",
    relatedEvents: [],
    attributesRequired: {
      happiness: 10,
    },
  },
};

export default events;
