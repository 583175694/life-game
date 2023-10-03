const events = {
  10001: {
    id: 10001,
    event: "你出生了，是个健康的婴儿。",
    relatedEvents: [10002],
  },
  10002: {
    id: 10002,
    event: "你是家中的长子/长女，带来了无限的喜悦。",
    relatedEvents: [10003, 10004, 10005],
  },
  10003: {
    id: 10003,
    event: "你的家庭充满了爱和温馨。",
    relatedEvents: [10006],
  },
  10004: {
    id: 10004,
    event: "你的父母非常疼爱你，给予了你很多关爱。",
    relatedEvents: [10006],
  },
  10005: {
    id: 10005,
    event: "你在家中有个温馨的小摇篮。",
    relatedEvents: [10006],
  },
  10006: {
    id: 10006,
    event: "你在婴儿时期很健康，很少生病。",
    relatedEvents: [10007, 10008],
  },
  10007: {
    id: 10007,
    event: "你的家人经常为你唱儿歌哄你入睡。",
    relatedEvents: [10009, 10010],
  },
  10008: {
    id: 10008,
    event: "你的父母喜欢拍摄你的成长照片。",
    relatedEvents: [10009, 10010],
  },
  10009: {
    id: 10009,
    event: "你在婴儿时期拥有一个可爱的玩具。",
    relatedEvents: [10010],
  },
  10010: {
    id: 10010,
    event: "你在婴儿时期第一次尝到了奶嘴的味道。",
    relatedEvents: [],
  },
  20001: {
    id: 20001,
    event: "你开始上小学，结交了第一个朋友。",
    relatedEvents: [20002],
  },
  20002: {
    id: 20002,
    event: "你喜欢上了学校，每天都期待去上课。",
    relatedEvents: [20003],
  },
  20003: {
    id: 20003,
    event: "你在学校学到了很多有趣的知识。",
    relatedEvents: [20004],
  },
  20004: {
    id: 20004,
    event: "你成绩优秀，老师经常表扬你。",
    relatedEvents: [20005],
  },
  20005: {
    id: 20005,
    event: "你在学校的演出中扮演了主角。",
    relatedEvents: [20006],
  },
  20006: {
    id: 20006,
    event: "你和同学一起组队参加了学校的体育比赛。",
    relatedEvents: [20007],
  },
  20007: {
    id: 20007,
    event: "你在学校的美术比赛中获得了第一名。",
    relatedEvents: [20008],
  },
  20008: {
    id: 20008,
    event: "你的第一个小学老师对你的成绩非常满意。",
    relatedEvents: [20009],
  },
  20009: {
    id: 20009,
    event: "你在小学时期培养了阅读爱好，爱上了书。",
    relatedEvents: [20010],
  },
  20010: {
    id: 20010,
    event: "你和小伙伴们一起度过了快乐的小学时光。",
    relatedEvents: [],
  },
  30001: {
    id: 30001,
    event: "你进入了初中，结交了新的朋友。",
    relatedEvents: [30002],
  },
  30002: {
    id: 30002,
    event: "你喜欢上了学校的社团活动。",
    relatedEvents: [30003],
  },
  30003: {
    id: 30003,
    event: "你在初中学到了更多有挑战性的知识。",
    relatedEvents: [30004],
  },
  30004: {
    id: 30004,
    event: "你在学术方面取得了突破性进展。",
    relatedEvents: [30005],
  },
  30005: {
    id: 30005,
    event: "你和同学一起组队参加了学校的文化节。",
    relatedEvents: [30006],
  },
  30006: {
    id: 30006,
    event: "你在学校的科技比赛中获得了奖项。",
    relatedEvents: [30007],
  },
  30007: {
    id: 30007,
    event: "你的初中老师鼓励你继续努力学习。",
    relatedEvents: [30008],
  },
  30008: {
    id: 30008,
    event: "你在初中时期培养了领导才能。",
    relatedEvents: [30009],
  },
  30009: {
    id: 30009,
    event: "你在学校的音乐比赛中表现出色。",
    relatedEvents: [30010],
  },
  30010: {
    id: 30010,
    event: "你度过了充实而快乐的中学时光。",
    relatedEvents: [],
  },
  40001: {
    id: 40001,
    event: "你进入了大学，面临了新的学习挑战。",
    relatedEvents: [40002],
  },
  40002: {
    id: 40002,
    event: "你在大学里交到了志同道合的朋友。",
    relatedEvents: [40003],
  },
  40003: {
    id: 40003,
    event: "你选择了自己感兴趣的专业。",
    relatedEvents: [40004],
  },
  40004: {
    id: 40004,
    event: "你积极参加大学的社团活动。",
    relatedEvents: [40005],
  },
  40005: {
    id: 40005,
    event: "你在大学里取得了优异的学术成绩。",
    relatedEvents: [40006],
  },
  40006: {
    id: 40006,
    event: "你获得了一份学习方面的奖学金。",
    relatedEvents: [40007],
  },
  40007: {
    id: 40007,
    event: "你在大学里结交了一位特殊的朋友。",
    relatedEvents: [40008],
  },
  40008: {
    id: 40008,
    event: "你参与了大学的社会实践活动。",
    relatedEvents: [40009],
  },
  40009: {
    id: 40009,
    event: "你的大学教授对你的学术成就赞赏有加。",
    relatedEvents: [40010],
  },
  40010: {
    id: 40010,
    event: "你顺利完成了大学学业，迎来了新的人生阶段。",
    relatedEvents: [],
  },
  50001: {
    id: 50001,
    event: "你毕业后找到了一份稳定的工作。",
    relatedEvents: [50002],
  },
  50002: {
    id: 50002,
    event: "你与爱人相识并坠入爱河。",
    relatedEvents: [50003],
  },
  50003: {
    id: 50003,
    event: "你决定步入婚姻殿堂。",
    relatedEvents: [50004],
  },
  50004: {
    id: 50004,
    event: "你在事业上逐渐取得成功。",
    relatedEvents: [50005],
  },
  50005: {
    id: 50005,
    event: "你的第一个孩子出生了。",
    relatedEvents: [50006],
  },
  50006: {
    id: 50006,
    event: "你为了家庭努力工作，有时忽略了自己的兴趣。",
    relatedEvents: [50007],
  },
  50007: {
    id: 50007,
    event: "你和家人度过了一次难忘的假期。",
    relatedEvents: [50008],
  },
  50008: {
    id: 50008,
    event: "你决定升职加薪，提高家庭生活质量。",
    relatedEvents: [50009],
  },
  50009: {
    id: 50009,
    event: "你的家庭逐渐壮大，忙碌而幸福。",
    relatedEvents: [50010],
  },
  50010: {
    id: 50010,
    event: "你在事业和家庭中都取得了一定的成就。",
    relatedEvents: [],
  },
  60001: {
    id: 60001,
    event: "你的孩子们都已经长大，搬出了家。",
    relatedEvents: [60002],
  },
  60002: {
    id: 60002,
    event: "你和配偶开始考虑退休生活的计划。",
    relatedEvents: [60003],
  },
  60003: {
    id: 60003,
    event: "你们计划远足旅行，体验世界各地的文化。",
    relatedEvents: [60004],
  },
  60004: {
    id: 60004,
    event: "你们迎来了退休生活，有更多时间追求兴趣和爱好。",
    relatedEvents: [60005],
  },
  60005: {
    id: 60005,
    event: "你决定为社区服务，做一些志愿工作。",
    relatedEvents: [60006],
  },
  60006: {
    id: 60006,
    event: "你开始享受自由自在的生活，去探索未知的冒险。",
    relatedEvents: [60007],
  },
  60007: {
    id: 60007,
    event: "你偶尔会回忆起过去的人生，回味那段美好的时光。",
    relatedEvents: [60008],
  },
  60008: {
    id: 60008,
    event: "你决定搬到一个安静的小镇，过上宁静的生活。",
    relatedEvents: [60009],
  },
  60009: {
    id: 60009,
    event: "你和配偶一起参加养老院的活动，度过幸福的晚年。",
    relatedEvents: [60010],
  },
  60010: {
    id: 60010,
    event: "你享受着退休生活的每一天，充实而满足。",
    relatedEvents: [],
  },
  70001: {
    id: 70001,
    event: "你和配偶搬到了海边的小屋，每天都可以听海浪声入睡。",
    relatedEvents: [70002],
  },
  70002: {
    id: 70002,
    event: "你决定重新学习一门新技能，比如绘画或乐器演奏。",
    relatedEvents: [70003],
  },
  70003: {
    id: 70003,
    event: "你经常邀请朋友们来小屋做客，享受友情和欢笑。",
    relatedEvents: [70004],
  },
  70004: {
    id: 70004,
    event: "你和配偶一起参加了社交舞班，重新点燃了爱情的激情。",
    relatedEvents: [70005],
  },
  70005: {
    id: 70005,
    event: "你们开始享受养老生活，有时间去世界各地旅行。",
    relatedEvents: [70006],
  },
  70006: {
    id: 70006,
    event: "你加入了退休社团，结交了新的朋友，拓宽了社交圈。",
    relatedEvents: [70007],
  },
  70007: {
    id: 70007,
    event: "你感到生活充满了满足，每天都能够做自己喜欢的事。",
    relatedEvents: [70008],
  },
  70008: {
    id: 70008,
    event: "你和配偶一起种植花园，享受园艺的乐趣。",
    relatedEvents: [70009],
  },
  70009: {
    id: 70009,
    event: "你们定期举办家庭聚会，亲情关系更加亲近。",
    relatedEvents: [70010],
  },
  70010: {
    id: 70010,
    event: "你的退休生活充实而幸福，感慨人生的美好。",
    relatedEvents: [],
  },
};
export default events;
