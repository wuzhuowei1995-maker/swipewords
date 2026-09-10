// SwipeWords 词库
// 来源：English_Active_Vocabulary_Master_Review_04(1).docx
// 已加入：词汇与固定搭配、核心句式、程度递进/近义反义、场景25–30新增词汇。
// 未加入：混合场景长段落、双语句子库（避免一张卡片内容过长）。
const VOCABULARY = [
  {
    "type": "word",
    "front": "straightforward",
    "meaning": "简单直接、不复杂",
    "example": "The route is pretty straightforward from here."
  },
  {
    "type": "word",
    "front": "tricky / tricky in places",
    "meaning": "棘手的；有些地方比较难",
    "example": "The descent is tricky in places."
  },
  {
    "type": "word",
    "front": "rough / rough terrain",
    "meaning": "崎岖、难走；崎岖地形",
    "example": "The terrain gets pretty rough further up."
  },
  {
    "type": "word",
    "front": "steep / get pretty steep",
    "meaning": "陡的；逐渐变陡",
    "example": "The trail gets pretty steep after the junction."
  },
  {
    "type": "word",
    "front": "muddy / slippery / rocky / uneven",
    "meaning": "泥泞 / 湿滑 / 多石 / 凹凸不平",
    "example": "The trail is muddy, slippery and uneven."
  },
  {
    "type": "word",
    "front": "narrow / exposed",
    "meaning": "狭窄的 / 暴露感强的",
    "example": "The ridge is narrow and exposed."
  },
  {
    "type": "word",
    "front": "further up / down / along",
    "meaning": "再往上 / 往下 / 沿路更远处",
    "example": "It gets windier further up."
  },
  {
    "type": "word",
    "front": "a bit of a climb",
    "meaning": "有一段挺费劲的爬升",
    "example": "It’s a bit of a climb, but nothing too crazy."
  },
  {
    "type": "word",
    "front": "nothing too crazy / nothing too bad",
    "meaning": "没有特别夸张 / 没那么糟",
    "example": "The next section is steep, but nothing too crazy."
  },
  {
    "type": "word",
    "front": "watch your footing / watch your step",
    "meaning": "注意脚下",
    "example": "Watch your footing on the wet rocks."
  },
  {
    "type": "word",
    "front": "push on / keep going",
    "meaning": "继续向前 / 继续走",
    "example": "We decided to push on for another hour."
  },
  {
    "type": "word",
    "front": "keep a steady pace / pick up the pace",
    "meaning": "保持稳定节奏 / 加快节奏",
    "example": "Keep a steady pace now; we can pick up the pace later."
  },
  {
    "type": "word",
    "front": "slow going",
    "meaning": "行进缓慢",
    "example": "The deep mud made it slow going."
  },
  {
    "type": "word",
    "front": "have ... to go",
    "meaning": "还有……路程 / 时间",
    "example": "I’ve still got eight kilometers to go."
  },
  {
    "type": "word",
    "front": "turn back / head back",
    "meaning": "中止前进掉头 / 开始往回走",
    "example": "If the storm gets worse, we’ll turn back and head back to the hut."
  },
  {
    "type": "word",
    "front": "keep an eye on",
    "meaning": "持续留意",
    "example": "Let’s keep an eye on the weather."
  },
  {
    "type": "word",
    "front": "roll in",
    "meaning": "云、雾等逐渐涌来",
    "example": "Dark clouds are starting to roll in."
  },
  {
    "type": "word",
    "front": "pretty confident I can ...",
    "meaning": "相当有信心能……",
    "example": "I’m pretty confident I can finish the route today."
  },
  {
    "type": "word",
    "front": "adjust to the altitude",
    "meaning": "适应海拔",
    "example": "I needed some time to adjust to the altitude."
  },
  {
    "type": "word",
    "front": "light-headed / dizzy",
    "meaning": "头昏发飘 / 眩晕",
    "example": "I felt a little light-headed from the altitude."
  },
  {
    "type": "word",
    "front": "not worth the risk",
    "meaning": "不值得冒险",
    "example": "The summit isn’t worth the risk in this weather."
  },
  {
    "type": "word",
    "front": "drizzle / light drizzle",
    "meaning": "毛毛雨 / 小雨",
    "example": "It’s only drizzling right now."
  },
  {
    "type": "word",
    "front": "light rain / steady rain / heavy rain / pour",
    "meaning": "小雨 / 持续中等雨势 / 大雨 / 倾盆大雨",
    "example": "The drizzle turned into steady rain and then it started pouring."
  },
  {
    "type": "word",
    "front": "hail / hailstone",
    "meaning": "冰雹 / 一颗冰雹",
    "example": "We turned back when the hail started."
  },
  {
    "type": "word",
    "front": "light breeze / strong wind / gust / gusty",
    "meaning": "微风 / 强风 / 阵风 / 阵风强的",
    "example": "It’s calm here, but it’s gusty on the ridge."
  },
  {
    "type": "word",
    "front": "the wind picks up / eases off",
    "meaning": "风逐渐增强 / 减弱",
    "example": "The wind picked up in the afternoon and eased off after sunset."
  },
  {
    "type": "word",
    "front": "the rain eases off",
    "meaning": "雨势逐渐减弱",
    "example": "The rain should ease off later."
  },
  {
    "type": "word",
    "front": "clear up",
    "meaning": "天气放晴",
    "example": "The sky started to clear up around noon."
  },
  {
    "type": "word",
    "front": "cool / chilly / cold / freezing / bitterly cold",
    "meaning": "凉爽 / 凉飕飕 / 冷 / 非常冷 / 刺骨寒冷",
    "example": "It was chilly in town but bitterly cold on the summit."
  },
  {
    "type": "word",
    "front": "visibility / poor visibility",
    "meaning": "能见度 / 能见度差",
    "example": "Fog rolled in and visibility became poor."
  },
  {
    "type": "word",
    "front": "have time to myself",
    "meaning": "有自己的独处时间",
    "example": "I enjoy having time to myself."
  },
  {
    "type": "word",
    "front": "whenever I want",
    "meaning": "想什么时候就什么时候",
    "example": "I can stop whenever I want."
  },
  {
    "type": "word",
    "front": "if I feel like it / don’t feel like doing",
    "meaning": "如果我想的话 / 不太想做",
    "example": "I’ll sing if I feel like it, but I don’t feel like talking."
  },
  {
    "type": "word",
    "front": "too much hassle",
    "meaning": "太折腾、太麻烦",
    "example": "Camping feels like too much hassle tonight."
  },
  {
    "type": "word",
    "front": "be supposed to",
    "meaning": "按计划/规定本来应该",
    "example": "We were supposed to meet at seven."
  },
  {
    "type": "word",
    "front": "at the last minute",
    "meaning": "临到最后一刻",
    "example": "He cancelled at the last minute."
  },
  {
    "type": "word",
    "front": "something came up",
    "meaning": "突然有事",
    "example": "Sorry, something came up."
  },
  {
    "type": "word",
    "front": "push something back",
    "meaning": "把安排往后推",
    "example": "Can we push dinner back by half an hour?"
  },
  {
    "type": "word",
    "front": "wait around",
    "meaning": "在那儿干等",
    "example": "I don’t want to wait around for two hours."
  },
  {
    "type": "word",
    "front": "end up doing",
    "meaning": "最终做了……",
    "example": "We ended up ordering pizza."
  },
  {
    "type": "word",
    "front": "running late",
    "meaning": "要迟到了",
    "example": "I’m running a little late."
  },
  {
    "type": "word",
    "front": "make it / barely make it",
    "meaning": "赶到、做到 / 勉强赶上",
    "example": "I barely made the train."
  },
  {
    "type": "word",
    "front": "keep to myself",
    "meaning": "自己待着、不太主动社交",
    "example": "I usually keep to myself on long trips."
  },
  {
    "type": "word",
    "front": "strike up a conversation",
    "meaning": "主动聊起来",
    "example": "I struck up a conversation with another hiker."
  },
  {
    "type": "word",
    "front": "see things the same way",
    "meaning": "看法相近",
    "example": "We seem to see things the same way."
  },
  {
    "type": "word",
    "front": "go our separate ways",
    "meaning": "各自离开、分道而行",
    "example": "We talked until we went our separate ways."
  },
  {
    "type": "word",
    "front": "have the whole place to myself",
    "meaning": "整个地方几乎只有自己",
    "example": "I had the whole trail to myself."
  },
  {
    "type": "word",
    "front": "a sense of freedom",
    "meaning": "自由感",
    "example": "The empty valley gave me a real sense of freedom."
  },
  {
    "type": "word",
    "front": "self-conscious",
    "meaning": "因在意别人眼光而不自在",
    "example": "I’m a little self-conscious about singing around other people."
  },
  {
    "type": "word",
    "front": "upbeat",
    "meaning": "轻快、让人兴奋的",
    "example": "I sing something upbeat when I’m in a good mood."
  },
  {
    "type": "word",
    "front": "come to mind",
    "meaning": "浮现在脑海",
    "example": "Sometimes an old song comes to mind."
  },
  {
    "type": "word",
    "front": "stuffy / fresh air",
    "meaning": "闷、不通风 / 新鲜空气",
    "example": "The room was stuffy, so I opened the window to let some fresh air in."
  },
  {
    "type": "word",
    "front": "slam the door",
    "meaning": "砰地关门",
    "example": "Someone kept slamming the door."
  },
  {
    "type": "word",
    "front": "keep someone up",
    "meaning": "让某人睡不着",
    "example": "The noise kept me up for hours."
  },
  {
    "type": "word",
    "front": "soaked / wet / damp / dry",
    "meaning": "湿透 / 湿 / 潮湿 / 干燥",
    "example": "My jacket was damp, but my shoes were completely soaked."
  },
  {
    "type": "word",
    "front": "leak / spill / drip / drain / splatter",
    "meaning": "漏 / 洒 / 滴 / 排走 / 四处飞溅",
    "example": "The bottle leaked, I spilled some water, the tap dripped, the sink drained slowly, and hot oil splattered everywhere."
  },
  {
    "type": "word",
    "front": "drag / bulky / get stuck / squeeze through",
    "meaning": "拖 / 大而笨重 / 卡住 / 挤过去",
    "example": "I dragged my bulky suitcase through the crowd when one wheel got stuck."
  },
  {
    "type": "word",
    "front": "stale / fresh",
    "meaning": "不新鲜 / 新鲜",
    "example": "The bread has gone stale."
  },
  {
    "type": "word",
    "front": "firm / mushy",
    "meaning": "紧实 / 软烂",
    "example": "The peach was firm yesterday but mushy today."
  },
  {
    "type": "word",
    "front": "unripe → ripe → overripe → rotten",
    "meaning": "未熟 → 成熟 → 熟过头 → 腐烂",
    "example": "The bananas went from unripe to ripe, then overripe, and finally rotten."
  },
  {
    "type": "word",
    "front": "rot / go bad / use up",
    "meaning": "腐烂 / 变质 / 用完",
    "example": "Use up the tomatoes before they go bad and start to rot."
  },
  {
    "type": "word",
    "front": "clogged / drain",
    "meaning": "堵塞 / 排水",
    "example": "The sink is clogged and the water won’t drain properly."
  },
  {
    "type": "word",
    "front": "loose / tight",
    "meaning": "松 / 紧",
    "example": "The handle is loose, but the lid is too tight."
  },
  {
    "type": "word",
    "front": "crack / cracked",
    "meaning": "裂缝 / 裂开的",
    "example": "There’s a crack in the wall and my phone screen is cracked."
  },
  {
    "type": "word",
    "front": "get something fixed",
    "meaning": "找人把某物修好",
    "example": "I need to get the sink fixed."
  },
  {
    "type": "word",
    "front": "fit / suit",
    "meaning": "尺寸合身 / 风格颜色适合",
    "example": "The jacket fits well, and the color suits you."
  },
  {
    "type": "word",
    "front": "tight around / loose around",
    "meaning": "某部位勒 / 松",
    "example": "The shirt is tight around the shoulders but loose around the waist."
  },
  {
    "type": "word",
    "front": "stiff / flexible / soft",
    "meaning": "僵硬 / 灵活柔韧 / 柔软",
    "example": "The new boots are stiff, but they should soften up with use."
  },
  {
    "type": "word",
    "front": "wrinkled / smooth",
    "meaning": "皱巴巴 / 平整",
    "example": "The shirt was wrinkled, but it looked smooth after ironing."
  },
  {
    "type": "word",
    "front": "faded / bright",
    "meaning": "褪色 / 鲜亮",
    "example": "The old jacket is faded; the new one is much brighter."
  },
  {
    "type": "word",
    "front": "worn / worn out / brand-new",
    "meaning": "有磨损 / 磨坏 / 崭新",
    "example": "The soles are worn, but not completely worn out yet."
  },
  {
    "type": "word",
    "front": "sore / stiff",
    "meaning": "酸痛 / 僵硬",
    "example": "My legs are sore and stiff after the hike."
  },
  {
    "type": "word",
    "front": "numb / go numb",
    "meaning": "麻木 / 变麻",
    "example": "My fingers started to go numb in the cold."
  },
  {
    "type": "word",
    "front": "blister / heel",
    "meaning": "水泡 / 脚后跟",
    "example": "I’ve got a blister on my heel."
  },
  {
    "type": "word",
    "front": "irritated / swollen / swell up",
    "meaning": "受刺激不适 / 肿的 / 肿起来",
    "example": "The skin is irritated and my ankle has started to swell up."
  },
  {
    "type": "word",
    "front": "take it easy",
    "meaning": "悠着点、休息一下",
    "example": "My knee is sore, so I’m taking it easy today."
  },
  {
    "type": "word",
    "front": "bland / flavorful / rich",
    "meaning": "寡淡 / 有味道 / 味道浓郁",
    "example": "The soup is bland, but the sauce is rich and flavorful."
  },
  {
    "type": "word",
    "front": "tender / tough",
    "meaning": "嫩 / 老、难嚼",
    "example": "The chicken is tender, but the beef is a little tough."
  },
  {
    "type": "word",
    "front": "juicy / dry",
    "meaning": "多汁 / 干柴",
    "example": "The chicken is juicy inside, not dry."
  },
  {
    "type": "word",
    "front": "crispy / soggy",
    "meaning": "酥脆 / 湿软",
    "example": "The fries were crispy at first but turned soggy later."
  },
  {
    "type": "word",
    "front": "greasy",
    "meaning": "油腻的",
    "example": "The burger was too greasy."
  },
  {
    "type": "word",
    "front": "sweet / sour / salty / bitter / spicy",
    "meaning": "甜 / 酸 / 咸 / 苦 / 辣",
    "example": "The sauce is sweet and sour, while the coffee is bitter."
  },
  {
    "type": "word",
    "front": "aftertaste",
    "meaning": "余味",
    "example": "The coffee has a slightly bitter aftertaste."
  },
  {
    "type": "word",
    "front": "decent / excellent / disappointing",
    "meaning": "还不错 / 很棒 / 令人失望",
    "example": "The meal was decent, but not excellent."
  },
  {
    "type": "word",
    "front": "starving / hungry / full / stuffed",
    "meaning": "饿坏了 / 饿 / 饱 / 撑得很饱",
    "example": "I was starving before dinner and absolutely stuffed afterward."
  },
  {
    "type": "word",
    "front": "undercooked → properly cooked → overcooked → burnt",
    "meaning": "没熟透 → 熟得刚好 → 煮过头 → 烧焦",
    "example": "The chicken was undercooked, while the vegetables were overcooked and the toast was burnt."
  },
  {
    "type": "word",
    "front": "chop / slice / dice",
    "meaning": "切块 / 切片 / 切丁",
    "example": "Chop the carrots, slice the tomatoes and dice the onions."
  },
  {
    "type": "word",
    "front": "peel",
    "meaning": "削皮、剥皮",
    "example": "Peel the potatoes first."
  },
  {
    "type": "word",
    "front": "throw something in",
    "meaning": "随手放进去",
    "example": "Throw the onions into the pan."
  },
  {
    "type": "word",
    "front": "stir / give it a quick stir",
    "meaning": "搅拌 / 快速搅几下",
    "example": "Give the sauce a quick stir."
  },
  {
    "type": "word",
    "front": "messy / tidy",
    "meaning": "乱糟糟 / 整齐",
    "example": "The room is messy now, but it’ll be tidy after I clean it."
  },
  {
    "type": "word",
    "front": "scattered all over",
    "meaning": "散落得到处都是",
    "example": "Clothes were scattered all over the floor."
  },
  {
    "type": "word",
    "front": "pile up / a pile of",
    "meaning": "堆积 / 一堆",
    "example": "Laundry is piling up beside the bed."
  },
  {
    "type": "word",
    "front": "stuff something into",
    "meaning": "把某物硬塞进",
    "example": "I stuffed my jacket into my backpack."
  },
  {
    "type": "word",
    "front": "sort out",
    "meaning": "整理好；解决",
    "example": "I need to sort out my room and sort out the booking problem."
  },
  {
    "type": "word",
    "front": "wipe / wipe down / sweep / mop",
    "meaning": "擦 / 整体擦一遍 / 扫 / 拖",
    "example": "Wipe down the counter, sweep the floor, then mop it."
  },
  {
    "type": "word",
    "front": "throw out / throw away",
    "meaning": "扔掉",
    "example": "I threw out a pile of junk."
  },
  {
    "type": "word",
    "front": "random stuff / junk",
    "meaning": "乱七八糟的东西 / 没用的杂物",
    "example": "There’s a bunch of random stuff in the corner."
  },
  {
    "type": "word",
    "front": "act up",
    "meaning": "出毛病、不正常工作",
    "example": "My phone has been acting up lately."
  },
  {
    "type": "word",
    "front": "freeze / frozen",
    "meaning": "卡死 / 卡住的",
    "example": "The screen froze and stopped responding."
  },
  {
    "type": "word",
    "front": "take forever to load",
    "meaning": "加载慢得要命",
    "example": "This page takes forever to load."
  },
  {
    "type": "word",
    "front": "drain the battery",
    "meaning": "耗电",
    "example": "Navigation apps drain the battery quickly."
  },
  {
    "type": "word",
    "front": "respond / stop responding",
    "meaning": "响应 / 没反应",
    "example": "The touchscreen stopped responding."
  },
  {
    "type": "word",
    "front": "restart / turn it off and back on",
    "meaning": "重启 / 关掉再打开",
    "example": "Try restarting it or turning it off and back on."
  },
  {
    "type": "word",
    "front": "wiggle the cable",
    "meaning": "来回晃动线缆",
    "example": "I have to wiggle the cable to make it charge."
  },
  {
    "type": "word",
    "front": "charge / charger / charging cable",
    "meaning": "充电 / 充电器 / 充电线",
    "example": "My charger works, but the charging cable is loose."
  },
  {
    "type": "word",
    "front": "fall asleep / fall back asleep",
    "meaning": "睡着 / 再次睡着",
    "example": "I woke up at three and couldn’t fall back asleep."
  },
  {
    "type": "word",
    "front": "toss and turn",
    "meaning": "翻来覆去",
    "example": "I kept tossing and turning."
  },
  {
    "type": "word",
    "front": "doze off",
    "meaning": "打瞌睡、不知不觉睡着",
    "example": "I dozed off on the bus."
  },
  {
    "type": "word",
    "front": "startle someone awake",
    "meaning": "突然把某人惊醒",
    "example": "A loud bang startled me awake."
  },
  {
    "type": "word",
    "front": "oversleep",
    "meaning": "睡过头",
    "example": "I overslept and missed breakfast."
  },
  {
    "type": "word",
    "front": "rush out the door",
    "meaning": "急匆匆出门",
    "example": "I rushed out the door without coffee."
  },
  {
    "type": "word",
    "front": "soak something in",
    "meaning": "把某物浸泡在……里",
    "example": "Soak the shirt in warm water."
  },
  {
    "type": "word",
    "front": "wring out",
    "meaning": "拧出水",
    "example": "Wring out the excess water."
  },
  {
    "type": "word",
    "front": "hang up to dry / air-dry",
    "meaning": "挂起来晾干 / 自然风干",
    "example": "I hung the shirt up to dry."
  },
  {
    "type": "word",
    "front": "shrink / stretch",
    "meaning": "缩水 / 拉伸、变松",
    "example": "The sweater shrank, but the waistband stretched over time."
  },
  {
    "type": "word",
    "front": "crouch down",
    "meaning": "蹲下",
    "example": "I crouched down to look under the bed."
  },
  {
    "type": "word",
    "front": "reach for / into / underneath",
    "meaning": "伸手去拿 / 伸进 / 伸到下面",
    "example": "I reached into my bag for the charger."
  },
  {
    "type": "word",
    "front": "out of reach / within easy reach",
    "meaning": "够不着 / 很容易够到",
    "example": "Keep your water within easy reach."
  },
  {
    "type": "word",
    "front": "lean forward / lean back / lean against",
    "meaning": "前倾 / 后靠 / 靠着",
    "example": "I leaned against the wall while waiting."
  },
  {
    "type": "word",
    "front": "stretch / stretch my legs",
    "meaning": "伸展 / 活动腿脚",
    "example": "I got off the bus to stretch my legs."
  },
  {
    "type": "word",
    "front": "get hold of",
    "meaning": "抓到、拿到；联系上",
    "example": "I finally got hold of the strap."
  },
  {
    "type": "word",
    "front": "dent / dented",
    "meaning": "凹痕 / 凹陷的",
    "example": "There’s a dent in the bottle."
  },
  {
    "type": "word",
    "front": "crush / crushed",
    "meaning": "压扁、压坏",
    "example": "My sandwich got crushed in my bag."
  },
  {
    "type": "word",
    "front": "peel off",
    "meaning": "翘起、剥落",
    "example": "The paint is peeling off the wall."
  },
  {
    "type": "word",
    "front": "tear open",
    "meaning": "撕开",
    "example": "I tore the package open."
  },
  {
    "type": "word",
    "front": "scratch / scratched",
    "meaning": "划痕 / 被划伤",
    "example": "The case is scratched but not cracked."
  },
  {
    "type": "word",
    "front": "in poor / good / perfect condition",
    "meaning": "状态差 / 良好 / 完好",
    "example": "The bike is old but still in good condition."
  },
  {
    "type": "word",
    "front": "faint / noticeable / loud",
    "meaning": "微弱 / 明显 / 响亮",
    "example": "The faint buzz became noticeably louder."
  },
  {
    "type": "word",
    "front": "buzz / buzzing",
    "meaning": "嗡嗡声",
    "example": "I heard a buzzing sound near the window."
  },
  {
    "type": "word",
    "front": "hum / humming",
    "meaning": "机器低沉持续嗡鸣",
    "example": "The fridge was humming quietly."
  },
  {
    "type": "word",
    "front": "creak",
    "meaning": "吱呀响",
    "example": "The old door creaked open."
  },
  {
    "type": "word",
    "front": "rattle",
    "meaning": "松动物体咔啦响",
    "example": "The window rattled in the wind."
  },
  {
    "type": "word",
    "front": "rustle",
    "meaning": "树叶、纸袋等沙沙响",
    "example": "I heard leaves rustling outside."
  },
  {
    "type": "word",
    "front": "turn out to be",
    "meaning": "结果发现原来是",
    "example": "The strange sound turned out to be the fridge."
  },
  {
    "type": "word",
    "front": "every now and then",
    "meaning": "时不时",
    "example": "Every now and then, the floorboards creak."
  },
  {
    "type": "word",
    "front": "absolutely packed / crowded / empty",
    "meaning": "挤满 / 拥挤 / 空荡",
    "example": "The carriage was absolutely packed, but the next one was almost empty."
  },
  {
    "type": "word",
    "front": "aisle / block the aisle / be in the way",
    "meaning": "过道 / 挡住过道 / 挡路",
    "example": "Your suitcase is blocking the aisle and getting in the way."
  },
  {
    "type": "word",
    "front": "squeeze through / squeeze past",
    "meaning": "从中挤过 / 从某人身边挤过",
    "example": "I squeezed through the crowd and squeezed past two passengers."
  },
  {
    "type": "word",
    "front": "bumpy / smooth",
    "meaning": "颠簸 / 平稳",
    "example": "The first half of the ride was bumpy, but the road became smooth later."
  },
  {
    "type": "word",
    "front": "slide around",
    "meaning": "滑来滑去",
    "example": "The bottle kept sliding around on the seat."
  },
  {
    "type": "word",
    "front": "take a wrong turn / go the wrong way",
    "meaning": "拐错弯 / 走错方向",
    "example": "We took a wrong turn and went the wrong way."
  },
  {
    "type": "word",
    "front": "walk right past / overshoot",
    "meaning": "直接走过头 / 超过目标位置",
    "example": "I walked right past the café and overshot the turn."
  },
  {
    "type": "word",
    "front": "detour / shortcut",
    "meaning": "绕路 / 捷径",
    "example": "We took a detour, then found a shortcut through the park."
  },
  {
    "type": "word",
    "front": "backtrack",
    "meaning": "沿原路折返",
    "example": "We backtracked to the last junction."
  },
  {
    "type": "word",
    "front": "cut through",
    "meaning": "穿过某处抄近路",
    "example": "We cut through a narrow alley."
  },
  {
    "type": "word",
    "front": "get around",
    "meaning": "在某地出行",
    "example": "The city is easy to get around on foot."
  },
  {
    "type": "word",
    "front": "wait in line / queue / cut in line",
    "meaning": "排队 / 排队 / 插队",
    "example": "Someone cut in line while we were waiting."
  },
  {
    "type": "word",
    "front": "tap someone on the shoulder",
    "meaning": "轻拍肩膀",
    "example": "I tapped him on the shoulder."
  },
  {
    "type": "word",
    "front": "step aside / go ahead",
    "meaning": "让到一边 / 你先",
    "example": "He stepped aside and told me to go ahead."
  },
  {
    "type": "word",
    "front": "bump into / bump my head",
    "meaning": "撞到、偶遇 / 撞到头",
    "example": "I bumped into a friend after bumping my head on the shelf."
  },
  {
    "type": "word",
    "front": "stop by",
    "meaning": "顺路去一下",
    "example": "I stopped by the supermarket on my way home."
  },
  {
    "type": "word",
    "front": "pick up / pick out",
    "meaning": "顺手买/拿/接 / 挑选出来",
    "example": "I picked up some fruit and picked out three firm apples."
  },
  {
    "type": "word",
    "front": "grab",
    "meaning": "随手拿、快速拿",
    "example": "I grabbed my keys and left."
  },
  {
    "type": "word",
    "front": "look through",
    "meaning": "翻看、逐个查看",
    "example": "I looked through the apples for a firm one."
  },
  {
    "type": "word",
    "front": "bruise / bruised",
    "meaning": "淤青、碰伤 / 碰伤的",
    "example": "The peach was bruised, and I had a bruise on my knee."
  },
  {
    "type": "word",
    "front": "soft spot",
    "meaning": "软掉的一块",
    "example": "This apple has a soft spot."
  },
  {
    "type": "word",
    "front": "weigh / weight",
    "meaning": "称重 / 重量",
    "example": "I weighed the fruit before checkout."
  },
  {
    "type": "word",
    "front": "stick something on",
    "meaning": "把某物贴上去",
    "example": "Stick the label on the bag."
  },
  {
    "type": "word",
    "front": "wander around",
    "meaning": "随便逛逛",
    "example": "We wandered around the old town for an hour."
  },
  {
    "type": "word",
    "front": "head to",
    "meaning": "朝……去",
    "example": "I headed to the checkout."
  },
  {
    "type": "word",
    "front": "something feels off",
    "meaning": "感觉哪里不对",
    "example": "Something feels off with the bike."
  },
  {
    "type": "word",
    "front": "rub against",
    "meaning": "摩擦、蹭着",
    "example": "The brake is rubbing against the wheel."
  },
  {
    "type": "word",
    "front": "slip / slippery",
    "meaning": "打滑 / 湿滑的",
    "example": "My foot slipped because the rock was slippery."
  },
  {
    "type": "word",
    "front": "pedal",
    "meaning": "蹬自行车；脚踏",
    "example": "I pedaled harder on the climb."
  },
  {
    "type": "word",
    "front": "go flat / flat tire",
    "meaning": "轮胎逐渐瘪 / 瘪胎",
    "example": "The rear tire is going flat."
  },
  {
    "type": "word",
    "front": "pull over",
    "meaning": "靠边停下",
    "example": "I pulled over to check the tire."
  },
  {
    "type": "word",
    "front": "puncture",
    "meaning": "扎破的小孔、爆胎破损",
    "example": "I found a small puncture in the tube."
  },
  {
    "type": "word",
    "front": "pump up / let the air out",
    "meaning": "打气 / 放气",
    "example": "Pump the tire up, then let a little air out if it feels too hard."
  },
  {
    "type": "word",
    "front": "properly / temporary fix",
    "meaning": "妥当地 / 临时修补",
    "example": "This is only a temporary fix; I’ll get it repaired properly later."
  },
  {
    "type": "word",
    "front": "scan / scan the crowd",
    "meaning": "扫视、搜索",
    "example": "I scanned the crowd for my friend."
  },
  {
    "type": "word",
    "front": "spot",
    "meaning": "从环境中发现",
    "example": "I spotted him near the entrance."
  },
  {
    "type": "word",
    "front": "catch sight of / lose sight of",
    "meaning": "突然瞥见 / 从视野中消失",
    "example": "I caught sight of him, then lost sight of him again."
  },
  {
    "type": "word",
    "front": "recognize",
    "meaning": "认出来",
    "example": "I recognized him by his red jacket."
  },
  {
    "type": "word",
    "front": "wave / get someone’s attention",
    "meaning": "挥手 / 引起某人注意",
    "example": "I waved to get his attention."
  },
  {
    "type": "word",
    "front": "make my way through / up / back",
    "meaning": "穿行 / 一路向上 / 一路返回",
    "example": "I made my way through the crowd and back to the station."
  },
  {
    "type": "word",
    "front": "walk up to / come up to",
    "meaning": "走到某人面前 / 朝某人走过来",
    "example": "I walked up to him just as he came up to me."
  },
  {
    "type": "pattern",
    "front": "get + adjective",
    "meaning": "逐渐进入某种状态",
    "example": "The trail gets steep; the room gets stuffy; the food gets soggy."
  },
  {
    "type": "pattern",
    "front": "go + state adjective",
    "meaning": "变成某种状态",
    "example": "Bread goes stale, milk goes bad, and fingers go numb."
  },
  {
    "type": "pattern",
    "front": "keep + -ing",
    "meaning": "持续或反复发生",
    "example": "The phone keeps freezing and the window keeps rattling."
  },
  {
    "type": "pattern",
    "front": "end up + -ing",
    "meaning": "最终做了某事",
    "example": "We ended up backtracking for twenty minutes."
  },
  {
    "type": "pattern",
    "front": "turn out to be + noun/adjective",
    "meaning": "最后发现原来是……",
    "example": "The shortcut turned out to be much steeper."
  },
  {
    "type": "pattern",
    "front": "I was trying to ... when ...",
    "meaning": "正在做 A 时发生 B",
    "example": "I was trying to fall asleep when the wind picked up."
  },
  {
    "type": "pattern",
    "front": "make + object + adjective",
    "meaning": "使……变成某状态",
    "example": "The rain made the trail slippery."
  },
  {
    "type": "pattern",
    "front": "get + object + past participle",
    "meaning": "找人/设法把某物处理好",
    "example": "I need to get my bike fixed properly."
  },
  {
    "type": "pattern",
    "front": "It’s worth / not worth + noun or -ing",
    "meaning": "值得 / 不值得",
    "example": "The view is worth the climb, but the summit isn’t worth the risk today."
  },
  {
    "type": "pattern",
    "front": "I’ve still got ... to go",
    "meaning": "还剩……",
    "example": "I’ve still got another five kilometers to go."
  },
  {
    "type": "pattern",
    "front": "as ... as I can",
    "meaning": "尽可能……",
    "example": "I stretched my arm as far as I could."
  },
  {
    "type": "pattern",
    "front": "rather than",
    "meaning": "而不是",
    "example": "I’d rather backtrack than take a risky shortcut."
  },
  {
    "type": "ladder",
    "front": "unripe → ripe → overripe → rotten",
    "meaning": "未熟 → 成熟 → 熟过头 → 腐烂",
    "example": "These peaches are still unripe; those are ripe; the soft ones are overripe; and the dark one is rotten."
  },
  {
    "type": "ladder",
    "front": "drizzle → light rain → steady rain → heavy rain → pour",
    "meaning": "毛毛雨 → 小雨 → 持续中等雨势 → 大雨 → 倾盆大雨",
    "example": "It started as a drizzle, became steady rain, and was pouring by noon."
  },
  {
    "type": "ladder",
    "front": "calm → light breeze → windy → strong wind → gusty",
    "meaning": "平静无风 → 微风 → 有风 → 强风 → 阵风很强",
    "example": "The valley was calm, but the ridge was windy and extremely gusty."
  },
  {
    "type": "ladder",
    "front": "cool → chilly → cold → freezing → bitterly cold",
    "meaning": "凉爽 → 凉飕飕 → 冷 → 非常冷 → 刺骨寒冷",
    "example": "It was cool in town, chilly in the forest, and bitterly cold above the tree line."
  },
  {
    "type": "ladder",
    "front": "damp → wet → soaked",
    "meaning": "潮湿 → 湿 → 湿透",
    "example": "My sleeves were damp, my trousers were wet, and my shoes were soaked."
  },
  {
    "type": "ladder",
    "front": "quiet/empty → busy → crowded → packed",
    "meaning": "空闲/空荡 → 忙、人多 → 拥挤 → 挤满",
    "example": "The café was quiet at noon, busy at five, crowded at seven and absolutely packed by eight."
  },
  {
    "type": "ladder",
    "front": "undercooked → properly cooked → overcooked → burnt",
    "meaning": "没熟透 → 熟得刚好 → 煮过头 → 烧焦",
    "example": "The center was undercooked, the next piece was perfect, and the last one was burnt."
  },
  {
    "type": "ladder",
    "front": "crispy ↔ soggy; firm ↔ mushy; tender ↔ tough; juicy ↔ dry",
    "meaning": "酥脆 ↔ 湿软；紧实 ↔ 软烂；嫩 ↔ 老；多汁 ↔ 干柴",
    "example": "The fries went from crispy to soggy, while the vegetables went from firm to mushy."
  },
  {
    "type": "ladder",
    "front": "too tight → snug → fits well → loose → too loose",
    "meaning": "太紧 → 贴身但舒适 → 合身 → 松 → 太松",
    "example": "The first jacket is too tight, the second is snug, and the third fits perfectly."
  },
  {
    "type": "ladder",
    "front": "brand-new → like new → in good condition → worn → worn out",
    "meaning": "崭新 → 几乎全新 → 状态良好 → 有磨损 → 磨坏",
    "example": "The boots were brand-new last year; now they’re worn but not worn out."
  },
  {
    "type": "ladder",
    "front": "faint → noticeable → loud → deafening",
    "meaning": "微弱 → 明显 → 响亮 → 震耳欲聋",
    "example": "The faint rattle became loud enough to keep me awake."
  },
  {
    "type": "ladder",
    "front": "straightforward → tricky → rough → technical",
    "meaning": "直接简单 → 棘手 → 崎岖难走 → 技术性强",
    "example": "The lower trail is straightforward, the middle is rough, and the final section is more technical."
  },
  {
    "type": "ladder",
    "front": "a little tired → tired → worn out / a little hungry → hungry → starving",
    "meaning": "有点累 → 累 → 累坏 / 有点饿 → 饿 → 饿坏",
    "example": "I was tired at noon and completely worn out by sunset; I was hungry at first and starving by dinner."
  },
  {
    "type": "ladder",
    "front": "within reach ↔ out of reach; catch sight of ↔ lose sight of",
    "meaning": "够得到 ↔ 够不到；瞥见 ↔ 从视野中消失",
    "example": "The bottle was within reach, but the hiker disappeared behind the ridge and I lost sight of him."
  },
  {
    "type": "ladder",
    "front": "direct route ↔ detour; shortcut ↔ backtrack",
    "meaning": "直接路线 ↔ 绕路；捷径 ↔ 原路折返",
    "example": "The shortcut was blocked, so we backtracked and took a detour."
  },
  {
    "type": "ladder",
    "front": "scratch → dent → crack → crush/break",
    "meaning": "划痕 → 凹陷 → 裂开 → 压坏/破坏",
    "example": "The case was scratched, the corner was dented, but nothing was cracked or crushed."
  },
  {
    "type": "ladder",
    "front": "awake → sleepy → doze off → fall asleep → wake up",
    "meaning": "清醒 → 困倦 → 打盹 → 睡着 → 醒来",
    "example": "I felt sleepy on the bus, dozed off for a few minutes, then fell asleep properly at the hotel."
  },
  {
    "type": "word",
    "front": "soften up / harden",
    "meaning": "逐渐变软 / 变硬",
    "example": "These boots should soften up; wet mud hardens when it dries."
  },
  {
    "type": "word",
    "front": "fade / brighten",
    "meaning": "褪色 / 变亮",
    "example": "The fabric faded in the sun, but the sky brightened after the storm."
  },
  {
    "type": "word",
    "front": "loosen / tighten",
    "meaning": "变松/松开 / 变紧/拧紧",
    "example": "The strap loosened, so I tightened it."
  },
  {
    "type": "word",
    "front": "swell / shrink",
    "meaning": "膨胀、肿 / 收缩、缩水",
    "example": "My ankle swelled up while the wet shirt shrank in the dryer."
  },
  {
    "type": "word",
    "front": "speed up / slow down",
    "meaning": "加速 / 减速",
    "example": "We sped up on the flat section and slowed down on the slippery descent."
  },
  {
    "type": "word",
    "front": "clear / cloudy / overcast",
    "meaning": "晴朗 / 多云 / 阴天",
    "example": "The morning was cloudy, then overcast, and finally cleared up."
  },
  {
    "type": "word",
    "front": "smooth / rough / bumpy",
    "meaning": "平滑 / 粗糙崎岖 / 颠簸",
    "example": "The road changed from smooth pavement to rough gravel and became very bumpy."
  },
  {
    "type": "word",
    "front": "quiet / faint / noisy / loud",
    "meaning": "安静 / 微弱 / 嘈杂 / 响亮",
    "example": "The room was quiet until a faint hum became a loud rattle."
  },
  {
    "type": "word",
    "front": "notice / spot / catch sight of / recognize",
    "meaning": "注意到 / 发现目标 / 突然瞥见 / 认出来",
    "example": "I noticed movement, spotted a person, caught sight of a red jacket and recognized my friend."
  },
  {
    "type": "word",
    "front": "put / grab / pick up / pick out / get hold of",
    "meaning": "放/拿的泛化动作 / 随手抓 / 顺手拿或买 / 从多个中挑 / 终于抓到拿到",
    "example": "I grabbed a bag, picked up some fruit, picked out two apples and finally got hold of the last bottle."
  },
  {
    "type": "word",
    "front": "trip over",
    "meaning": "被……绊到",
    "example": "I tripped over a loose rock."
  },
  {
    "type": "word",
    "front": "loose rock / solid rock",
    "meaning": "松动石块 / 稳固岩石",
    "example": "Test the rock before putting your full weight on it. Loose rock can shift."
  },
  {
    "type": "word",
    "front": "stable / unstable",
    "meaning": "稳定的 / 不稳定的",
    "example": "The ground feels unstable near the edge."
  },
  {
    "type": "word",
    "front": "stumble forward",
    "meaning": "向前踉跄",
    "example": "I stumbled forward but didn’t fall."
  },
  {
    "type": "word",
    "front": "lose / regain your balance",
    "meaning": "失去 / 恢复平衡",
    "example": "I lost my balance, grabbed a branch and regained it."
  },
  {
    "type": "word",
    "front": "instinctively",
    "meaning": "本能地、下意识地",
    "example": "I instinctively reached out for the railing."
  },
  {
    "type": "word",
    "front": "reach out",
    "meaning": "伸出手",
    "example": "She reached out and grabbed my arm."
  },
  {
    "type": "word",
    "front": "steady yourself",
    "meaning": "稳住身体",
    "example": "Use the pole to steady yourself."
  },
  {
    "type": "word",
    "front": "catch yourself",
    "meaning": "在摔倒前及时稳住",
    "example": "I slipped but caught myself on the wall."
  },
  {
    "type": "word",
    "front": "twist / sprain your ankle",
    "meaning": "扭到 / 扭伤脚踝",
    "example": "I twisted my ankle slightly, but luckily I didn’t sprain it."
  },
  {
    "type": "word",
    "front": "turn on / turn off",
    "meaning": "打开 / 关闭",
    "example": "Turn the shower on and let it run."
  },
  {
    "type": "word",
    "front": "let the water run",
    "meaning": "让水流一会儿",
    "example": "Let the water run until it gets warm."
  },
  {
    "type": "word",
    "front": "adjust the temperature",
    "meaning": "调节温度",
    "example": "I adjusted the temperature until it felt comfortable."
  },
  {
    "type": "word",
    "front": "turn up / turn down",
    "meaning": "调高 / 调低",
    "example": "Turn the heat down if the water is too hot."
  },
  {
    "type": "word",
    "front": "steam up",
    "meaning": "充满蒸汽、变得雾气腾腾",
    "example": "The bathroom steamed up quickly."
  },
  {
    "type": "word",
    "front": "fog up",
    "meaning": "镜子、眼镜等起雾",
    "example": "My glasses fogged up as soon as I walked inside."
  },
  {
    "type": "word",
    "front": "rinse out / rinse off",
    "meaning": "从内部冲掉 / 从表面冲掉",
    "example": "Rinse the shampoo out of your hair and the mud off your shoes."
  },
  {
    "type": "word",
    "front": "wipe dry",
    "meaning": "擦干",
    "example": "I grabbed a towel and wiped myself dry."
  },
  {
    "type": "word",
    "front": "lukewarm",
    "meaning": "温吞、不冷不热",
    "example": "The shower was only lukewarm."
  },
  {
    "type": "word",
    "front": "piping hot / scalding hot",
    "meaning": "热气腾腾 / 烫得可能伤人",
    "example": "The soup is piping hot, but the tap water is almost scalding."
  },
  {
    "type": "word",
    "front": "put on / take off",
    "meaning": "穿上 / 脱下",
    "example": "Put your jacket on before you go outside."
  },
  {
    "type": "word",
    "front": "pull on",
    "meaning": "拉着套上",
    "example": "I pulled on my boots and headed outside."
  },
  {
    "type": "word",
    "front": "zip up / unzip",
    "meaning": "拉上 / 拉开拉链",
    "example": "Zip your jacket all the way up."
  },
  {
    "type": "word",
    "front": "all the way up / halfway",
    "meaning": "一直到顶 / 一半",
    "example": "I zipped it all the way up, then unzipped it halfway."
  },
  {
    "type": "word",
    "front": "roll up / roll back down your sleeves",
    "meaning": "卷起 / 放下袖子",
    "example": "I rolled up my sleeves when I got warm."
  },
  {
    "type": "word",
    "front": "stick out",
    "meaning": "伸出、露在外面",
    "example": "A bottle was sticking out of the side pocket."
  },
  {
    "type": "word",
    "front": "tuck in / tuck back in",
    "meaning": "塞进去 / 重新塞好",
    "example": "Tuck your shirt back in."
  },
  {
    "type": "word",
    "front": "tighten / loosen",
    "meaning": "收紧 / 放松",
    "example": "Tighten the straps, then loosen them slightly if they dig in."
  },
  {
    "type": "word",
    "front": "tie / untie",
    "meaning": "系上 / 解开",
    "example": "I tied my shoelaces before leaving."
  },
  {
    "type": "word",
    "front": "come undone",
    "meaning": "自己松开、散开",
    "example": "My shoelaces came undone halfway down the trail."
  },
  {
    "type": "word",
    "front": "just in case",
    "meaning": "以防万一",
    "example": "Take a rain jacket just in case."
  },
  {
    "type": "word",
    "front": "bring something to a boil",
    "meaning": "把液体加热至沸腾",
    "example": "Bring the water to a boil first."
  },
  {
    "type": "word",
    "front": "bubble / start bubbling",
    "meaning": "冒泡 / 开始冒泡",
    "example": "The water started bubbling around the edges."
  },
  {
    "type": "word",
    "front": "boil / simmer",
    "meaning": "沸腾 / 小火慢煮",
    "example": "Once it boils, turn the heat down and let it simmer."
  },
  {
    "type": "word",
    "front": "turn the heat up / down",
    "meaning": "把火调大 / 调小",
    "example": "Turn the heat down before the sauce burns."
  },
  {
    "type": "word",
    "front": "drizzle",
    "meaning": "细细淋上；毛毛雨",
    "example": "Drizzle a little oil over the vegetables."
  },
  {
    "type": "word",
    "front": "brown",
    "meaning": "煎至表面变褐",
    "example": "Let the chicken brown before flipping it."
  },
  {
    "type": "word",
    "front": "flip / flip over",
    "meaning": "翻面、快速翻转",
    "example": "Flip the pancake over carefully."
  },
  {
    "type": "word",
    "front": "sprinkle",
    "meaning": "撒少量颗粒或粉末",
    "example": "Sprinkle some salt on top."
  },
  {
    "type": "word",
    "front": "take off the heat",
    "meaning": "从火上移开",
    "example": "Take the pan off the heat."
  },
  {
    "type": "word",
    "front": "be about to do",
    "meaning": "正要、马上要做",
    "example": "I was about to cross the street when a car appeared."
  },
  {
    "type": "word",
    "front": "come speeding around the corner",
    "meaning": "高速从拐角冲出来",
    "example": "A cyclist came speeding around the corner."
  },
  {
    "type": "word",
    "front": "curb / pavement / sidewalk",
    "meaning": "路缘 / 人行道（英）/ 人行道（美）",
    "example": "I stepped off the curb and onto the road."
  },
  {
    "type": "word",
    "front": "step back",
    "meaning": "往后退一步",
    "example": "I quickly stepped back onto the pavement."
  },
  {
    "type": "word",
    "front": "brake / brake hard / slam on the brakes",
    "meaning": "刹车 / 用力刹车 / 猛踩刹车",
    "example": "The driver slammed on the brakes."
  },
  {
    "type": "word",
    "front": "swerve",
    "meaning": "突然转向躲避",
    "example": "The cyclist swerved around the car."
  },
  {
    "type": "word",
    "front": "avoid / avoid doing",
    "meaning": "避开 / 避免做",
    "example": "We took a detour to avoid walking through the mud."
  },
  {
    "type": "word",
    "front": "nearly / almost",
    "meaning": "差一点、几乎",
    "example": "I nearly lost my balance."
  },
  {
    "type": "word",
    "front": "traffic clears / crowd clears",
    "meaning": "车流散去 / 人群散去",
    "example": "Wait until the traffic clears."
  },
  {
    "type": "word",
    "front": "adjust the straps",
    "meaning": "调整背包带",
    "example": "Take the pack off and adjust the straps."
  },
  {
    "type": "word",
    "front": "dig into",
    "meaning": "勒进、压进身体",
    "example": "The shoulder straps are digging into me."
  },
  {
    "type": "word",
    "front": "fasten / unfasten",
    "meaning": "扣好固定 / 解开",
    "example": "Fasten the waist belt before climbing."
  },
  {
    "type": "word",
    "front": "clip / unclip",
    "meaning": "用夹扣扣上 / 解开夹扣",
    "example": "I clipped a pouch onto the pack."
  },
  {
    "type": "word",
    "front": "strap something to",
    "meaning": "用带子把某物固定在……上",
    "example": "I strapped my jacket to the bottom of the pack."
  },
  {
    "type": "word",
    "front": "tuck away",
    "meaning": "收好、塞到不碍事的位置",
    "example": "Tuck away the loose ends."
  },
  {
    "type": "word",
    "front": "loose ends",
    "meaning": "松散垂下的末端；未处理完的零碎事项",
    "example": "The loose ends were flapping in the wind."
  },
  {
    "type": "word",
    "front": "flap around",
    "meaning": "被风吹得来回甩动",
    "example": "The tent fabric was flapping around in the wind."
  },
  {
    "type": "word",
    "front": "snug",
    "meaning": "贴合、舒适但不松",
    "example": "The waist belt should feel snug, not tight."
  },
  {
    "type": "ladder",
    "front": "solid / stable → slightly unstable → unstable → loose",
    "meaning": "稳固 → 略不稳 → 不稳定 → 松动",
    "example": "The rock looked solid, but the gravel around it was loose and unstable."
  },
  {
    "type": "ladder",
    "front": "trip → stumble → lose balance → fall",
    "meaning": "绊到 → 踉跄 → 失去平衡 → 摔倒",
    "example": "I tripped, stumbled and lost my balance, but caught myself before I fell."
  },
  {
    "type": "ladder",
    "front": "freezing cold → cold → cool → lukewarm → warm → hot → piping hot → scalding hot",
    "meaning": "冰冷 → 冷 → 凉 → 温吞 → 温暖 → 热 → 滚烫 → 烫伤级别",
    "example": "The water went from freezing cold to lukewarm, then suddenly became scalding hot."
  },
  {
    "type": "ladder",
    "front": "put on ↔ take off; zip up ↔ unzip; tie ↔ untie",
    "meaning": "穿上 ↔ 脱下；拉上 ↔ 拉开；系上 ↔ 解开",
    "example": "I put the jacket on, zipped it up, then took it off again."
  },
  {
    "type": "ladder",
    "front": "way too loose → slightly loose → snug → tight → way too tight",
    "meaning": "太松 → 稍松 → 贴合舒适 → 紧 → 太紧",
    "example": "The belt was loose, so I tightened it until it felt snug."
  },
  {
    "type": "ladder",
    "front": "cold → warm → hot → bubbling → boiling → simmering",
    "meaning": "冷 → 温 → 热 → 冒泡 → 沸腾 → 小火微沸",
    "example": "The water heated up, started bubbling, came to a boil, and then simmered gently."
  },
  {
    "type": "ladder",
    "front": "slow down → brake → brake hard → slam on the brakes",
    "meaning": "减速 → 刹车 → 用力刹车 → 急刹",
    "example": "The driver first slowed down, then had to slam on the brakes."
  }
];

window.VOCABULARY = VOCABULARY;
