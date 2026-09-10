// 词库：以后只需要继续往这个数组里追加内容即可。
// type 可写 "word" / "phrase" / "lt"；当前版本不会显示 type，只用于你自己整理。
const VOCABULARY = [
  {
    type: "word",
    front: "run into",
    meaning: "偶然遇到；碰上",
    example: "I ran into an old friend on the way home."
  },
  {
    type: "phrase",
    front: "I'm not really into ...",
    meaning: "我不太喜欢……；我对……没什么兴趣",
    example: "I'm not really into crowded tourist spots."
  },
  {
    type: "word",
    front: "come across",
    meaning: "偶然发现；偶然遇到",
    example: "I came across a quiet hiking trail yesterday."
  },
  {
    type: "phrase",
    front: "It depends on ...",
    meaning: "这取决于……",
    example: "It depends on the weather."
  },
  {
    type: "lt",
    front: "pasukti į kairę",
    meaning: "向左转",
    example: "Pasukite į kairę."
  },
  {
    type: "phrase",
    front: "I'd rather ...",
    meaning: "我宁愿……",
    example: "I'd rather hike alone than join a large group."
  },
  {
    type: "phrase",
    front: "I'm used to ...",
    meaning: "我已经习惯于……",
    example: "I'm used to walking long distances."
  },
  {
    type: "word",
    front: "turn back",
    meaning: "折返；返回",
    example: "If the weather gets worse, I'll turn back."
  }
];

window.VOCABULARY = VOCABULARY;
