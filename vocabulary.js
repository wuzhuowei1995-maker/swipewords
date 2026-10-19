// SwipeWords：Review 04、05、06 英语词汇与五十音
// 保留英语单卡中英解释与例句。新增 Review 06 场景 40–60 和动作链，按英文正面去重。
// 抽取权重：英文词库前40%为1倍、后60%为3倍；五十音4倍，冷却50次。
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
  },
  {
    "type": "word",
    "front": "be stuck to",
    "meaning": "粘在……上",
    "example": "Some dried food was stuck to the stove."
  },
  {
    "type": "word",
    "front": "loosen something up",
    "meaning": "把粘紧、僵硬的东西弄松",
    "example": "Soak it in warm water to loosen it up."
  },
  {
    "type": "word",
    "front": "scrub",
    "meaning": "用力刷洗",
    "example": "I scrubbed the pan with a sponge."
  },
  {
    "type": "word",
    "front": "come off",
    "meaning": "从表面脱落、被清除",
    "example": "Most of the dirt came off easily."
  },
  {
    "type": "word",
    "front": "stubborn stain / dirt / mud",
    "meaning": "顽固污渍 / 污垢 / 泥",
    "example": "There were still a few stubborn stains."
  },
  {
    "type": "word",
    "front": "scrape off",
    "meaning": "刮掉",
    "example": "I carefully scraped the dried food off the pan."
  },
  {
    "type": "word",
    "front": "jerk forward / jerk to a stop",
    "meaning": "猛地向前一顿 / 猛地停住",
    "example": "The bus jerked forward when the driver braked."
  },
  {
    "type": "word",
    "front": "throw someone off balance",
    "meaning": "使某人失去平衡",
    "example": "The sudden stop threw me off balance."
  },
  {
    "type": "word",
    "front": "handrail",
    "meaning": "扶手、栏杆",
    "example": "I grabbed the handrail."
  },
  {
    "type": "word",
    "front": "hold on tightly",
    "meaning": "紧紧抓住",
    "example": "Hold on tightly when the bus starts moving."
  },
  {
    "type": "word",
    "front": "come to a stop / come to a complete stop",
    "meaning": "停下来 / 完全停稳",
    "example": "Wait until the bus comes to a complete stop."
  },
  {
    "type": "word",
    "front": "available / a seat becomes available",
    "meaning": "可用的；有座位空出来",
    "example": "When a seat became available, I let the elderly man sit down."
  },
  {
    "type": "word",
    "front": "fallen tree / fallen leaves",
    "meaning": "倒下的树 / 落叶",
    "example": "A fallen tree was blocking the trail."
  },
  {
    "type": "word",
    "front": "get past",
    "meaning": "越过、通过阻碍",
    "example": "We had to figure out how to get past it."
  },
  {
    "type": "word",
    "front": "step over",
    "meaning": "一步跨过较低障碍",
    "example": "Step over the log carefully."
  },
  {
    "type": "word",
    "front": "duck under",
    "meaning": "低头、弯身从下面通过",
    "example": "I ducked under a low branch."
  },
  {
    "type": "word",
    "front": "climb over",
    "meaning": "爬过、翻过",
    "example": "We climbed over the fallen trunk."
  },
  {
    "type": "word",
    "front": "step across",
    "meaning": "跨过沟、缝、水流等间隔",
    "example": "I stepped across a narrow ditch."
  },
  {
    "type": "word",
    "front": "ditch / gully / ravine",
    "meaning": "小沟 / 冲沟 / 深沟谷",
    "example": "The trail crossed a muddy ditch before entering a narrow gully."
  },
  {
    "type": "word",
    "front": "get caught on",
    "meaning": "被……勾住、挂住",
    "example": "My backpack got caught on a branch."
  },
  {
    "type": "word",
    "front": "go around",
    "meaning": "绕过去",
    "example": "The trunk was too high, so my friend went around instead."
  },
  {
    "type": "word",
    "front": "tip over",
    "meaning": "倾倒、翻倒",
    "example": "The bottle tipped over on the rock."
  },
  {
    "type": "word",
    "front": "roll downhill / across",
    "meaning": "滚下坡 / 滚过",
    "example": "It started rolling downhill."
  },
  {
    "type": "word",
    "front": "bounce off",
    "meaning": "撞到……后弹开",
    "example": "The bottle bounced off a rock."
  },
  {
    "type": "word",
    "front": "slide across / slide down",
    "meaning": "滑过 / 滑下",
    "example": "It slid across a patch of wet grass."
  },
  {
    "type": "word",
    "front": "float on the surface",
    "meaning": "漂浮在表面",
    "example": "The bottle floated on the surface."
  },
  {
    "type": "word",
    "front": "sink – sank – sunk",
    "meaning": "下沉",
    "example": "One end slowly sank below the surface."
  },
  {
    "type": "word",
    "front": "surface / below the surface",
    "meaning": "表面、水面 / 表面以下",
    "example": "Something was moving just below the surface."
  },
  {
    "type": "word",
    "front": "drift / drift downstream",
    "meaning": "随水流或风缓慢漂移 / 顺流漂走",
    "example": "A branch drifted downstream."
  },
  {
    "type": "word",
    "front": "upstream / downstream",
    "meaning": "上游方向 / 下游方向",
    "example": "We walked upstream while the bottle drifted downstream."
  },
  {
    "type": "word",
    "front": "won't budge",
    "meaning": "怎么用力也纹丝不动",
    "example": "The window won't budge."
  },
  {
    "type": "word",
    "front": "jammed",
    "meaning": "机械或结构卡死",
    "example": "The zipper seems to be jammed."
  },
  {
    "type": "word",
    "front": "back and forth",
    "meaning": "来来回回、前后反复",
    "example": "I wiggled the handle back and forth."
  },
  {
    "type": "word",
    "front": "come loose",
    "meaning": "原本固定的东西变松",
    "example": "The window finally came loose."
  },
  {
    "type": "word",
    "front": "slide open / swing open",
    "meaning": "滑动打开 / 绕轴摆开",
    "example": "The sliding door slid open, while the front door swung open."
  },
  {
    "type": "word",
    "front": "wide open / halfway open / slightly open",
    "meaning": "完全敞开 / 开一半 / 稍微打开",
    "example": "The wind blew the window wide open."
  },
  {
    "type": "word",
    "front": "firmly",
    "meaning": "稳稳地、较用力地",
    "example": "Push the frame firmly."
  },
  {
    "type": "word",
    "front": "click into place",
    "meaning": "咔哒一声卡到正确位置",
    "example": "Push it until it clicks into place."
  },
  {
    "type": "word",
    "front": "stream / creek",
    "meaning": "溪流；小溪",
    "example": "The trail crossed a shallow stream."
  },
  {
    "type": "word",
    "front": "bank",
    "meaning": "河岸、溪岸",
    "example": "The water was shallow near the bank."
  },
  {
    "type": "word",
    "front": "shallow ↔ deep",
    "meaning": "浅 ↔ 深",
    "example": "The stream gets deeper toward the middle."
  },
  {
    "type": "word",
    "front": "current",
    "meaning": "水流",
    "example": "The current was stronger than it looked."
  },
  {
    "type": "word",
    "front": "gentle / steady / strong / powerful current",
    "meaning": "缓和 / 稳定 / 强 / 很强的水流",
    "example": "We looked for a section with a gentler current."
  },
  {
    "type": "word",
    "front": "stepping stone",
    "meaning": "踏脚石",
    "example": "The stepping stones were wet and slippery."
  },
  {
    "type": "word",
    "front": "wobble / wobbly",
    "meaning": "摇晃 / 摇晃不稳的",
    "example": "One stone wobbled under my foot."
  },
  {
    "type": "word",
    "front": "risk it",
    "meaning": "冒这个险",
    "example": "The current looked too strong, so I decided not to risk it."
  },
  {
    "type": "word",
    "front": "wade across / wade through",
    "meaning": "涉水走过 / 涉水穿过",
    "example": "We waded across a calmer section."
  },
  {
    "type": "word",
    "front": "ankle-deep / knee-deep / waist-deep",
    "meaning": "齐脚踝 / 齐膝 / 齐腰深",
    "example": "The water went from ankle-deep to knee-deep."
  },
  {
    "type": "word",
    "front": "bunch up",
    "meaning": "皱成一团、聚成一堆",
    "example": "The blanket was bunched up at the foot of the bed."
  },
  {
    "type": "word",
    "front": "spread out",
    "meaning": "展开、摊开；分散开",
    "example": "I spread the blanket out across the bed."
  },
  {
    "type": "word",
    "front": "smooth out",
    "meaning": "抚平、弄平",
    "example": "I smoothed out the wrinkles."
  },
  {
    "type": "word",
    "front": "tuck something under",
    "meaning": "把某物掖到……下面",
    "example": "Tuck the sheet under the mattress."
  },
  {
    "type": "word",
    "front": "mattress / sheet / blanket / pillow",
    "meaning": "床垫 / 床单 / 毯子或被子 / 枕头",
    "example": "The sheet had come loose from under the mattress."
  },
  {
    "type": "word",
    "front": "fluff up",
    "meaning": "拍松、抖松",
    "example": "I fluffed up the pillows."
  },
  {
    "type": "word",
    "front": "fold / unfold / fold in half",
    "meaning": "折叠 / 展开 / 对折",
    "example": "Fold the blanket in half."
  },
  {
    "type": "word",
    "front": "lay – laid – laid",
    "meaning": "把某物放置、铺放",
    "example": "I laid the folded blanket across the end of the bed."
  },
  {
    "type": "word",
    "front": "lie down",
    "meaning": "自己躺下",
    "example": "I lay down for a few minutes."
  },
  {
    "type": "word",
    "front": "knock something off",
    "meaning": "不小心把某物碰落",
    "example": "I knocked a glass off the counter."
  },
  {
    "type": "word",
    "front": "shatter",
    "meaning": "碎裂成许多块",
    "example": "The glass shattered into dozens of pieces."
  },
  {
    "type": "word",
    "front": "shard / glass shard",
    "meaning": "尖锐碎片 / 玻璃碎片",
    "example": "A few sharp shards scattered across the floor."
  },
  {
    "type": "word",
    "front": "scatter / scattered",
    "meaning": "四散开 / 散落的",
    "example": "The pieces scattered across the kitchen."
  },
  {
    "type": "word",
    "front": "sweep up",
    "meaning": "把散落的小东西扫起来",
    "example": "I swept up the smaller pieces."
  },
  {
    "type": "word",
    "front": "chip / chipped",
    "meaning": "边缘崩掉一小块 / 有崩口的",
    "example": "One plate was slightly chipped."
  },
  {
    "type": "word",
    "front": "sharp ↔ blunt / dull",
    "meaning": "锋利 ↔ 钝",
    "example": "Be careful—the broken edge is sharp."
  },
  {
    "type": "word",
    "front": "mist / fog",
    "meaning": "薄雾 / 浓雾",
    "example": "There was light mist in the valley but dense fog higher up."
  },
  {
    "type": "word",
    "front": "thin / thick / dense",
    "meaning": "薄、稀 / 厚、浓 / 浓密",
    "example": "A thin layer of mist gradually turned into dense fog."
  },
  {
    "type": "word",
    "front": "thicken / thin out",
    "meaning": "变浓、变厚 / 逐渐变稀",
    "example": "The fog thickened quickly, then began to thin out an hour later."
  },
  {
    "type": "word",
    "front": "drift in / drift across",
    "meaning": "飘入 / 缓慢飘过",
    "example": "Fog drifted across the ridge."
  },
  {
    "type": "word",
    "front": "visibility drops / improves",
    "meaning": "能见度下降 / 改善",
    "example": "Visibility dropped dramatically."
  },
  {
    "type": "word",
    "front": "make out",
    "meaning": "在困难条件下勉强辨认出",
    "example": "I could barely make out the trail ahead."
  },
  {
    "type": "word",
    "front": "clearly / faintly / barely visible",
    "meaning": "清楚可见 / 隐约可见 / 几乎看不见",
    "example": "The waymark was barely visible through the fog."
  },
  {
    "type": "word",
    "front": "waymark / trail marker",
    "meaning": "路线标记",
    "example": "We followed the waymarks through the fog."
  },
  {
    "type": "word",
    "front": "fog lifts",
    "meaning": "雾抬升、散去",
    "example": "The fog started to lift around noon."
  },
  {
    "type": "word",
    "front": "come into view / come back into view",
    "meaning": "进入视野 / 重新进入视野",
    "example": "The ridge gradually came back into view."
  },
  {
    "type": "word",
    "front": "disappear from view",
    "meaning": "从视野中消失",
    "example": "The summit disappeared from view as the fog thickened."
  },
  {
    "type": "ladder",
    "front": "wipe → scrub → scrape off",
    "meaning": "擦 → 用力刷 → 刮掉",
    "example": "The stain wouldn't come off when I wiped it, so I scrubbed it and finally scraped off the dried bits."
  },
  {
    "type": "ladder",
    "front": "brake hard → jerk forward → be thrown off balance → grab → hold on → steady yourself",
    "meaning": "急刹 → 猛地前顿 → 失去平衡 → 抓住 → 抓紧 → 稳住",
    "example": "The bus jerked forward and threw me off balance, so I grabbed the rail and held on tightly."
  },
  {
    "type": "ladder",
    "front": "step over / step across / climb over / duck under / squeeze through / go around",
    "meaning": "跨过低障碍 / 跨过间隔 / 翻过 / 钻过 / 挤过 / 绕过",
    "example": "We stepped over a root, crossed a ditch, ducked under a branch and went around a fallen tree."
  },
  {
    "type": "ladder",
    "front": "tip over → roll → bounce → slide → come to a stop",
    "meaning": "翻倒 → 滚动 → 弹跳 → 滑动 → 停住",
    "example": "The bottle tipped over, rolled downhill, bounced off a rock and slid to a stop."
  },
  {
    "type": "ladder",
    "front": "float → drift → sink",
    "meaning": "漂浮 → 漂移 → 下沉",
    "example": "The branch floated for a while, drifted downstream and eventually sank."
  },
  {
    "type": "ladder",
    "front": "get stuck / get caught on / jammed / won't budge",
    "meaning": "泛指卡住 / 被勾住 / 机械卡死 / 用力也不动",
    "example": "My boot got stuck in mud, my strap got caught on a branch, and the zipper jammed and wouldn't budge."
  },
  {
    "type": "ladder",
    "front": "shallow → ankle-deep → knee-deep → waist-deep → deep",
    "meaning": "浅 → 齐踝 → 齐膝 → 齐腰 → 深",
    "example": "The stream was ankle-deep near the bank but knee-deep in the middle."
  },
  {
    "type": "ladder",
    "front": "gentle → steady → strong → powerful current",
    "meaning": "缓和 → 稳定 → 强 → 很强的水流",
    "example": "The current looked gentle near the bank but became strong toward the middle."
  },
  {
    "type": "ladder",
    "front": "bunch up → spread out → smooth out → fold → tuck away",
    "meaning": "皱成一团 → 展开 → 抚平 → 折叠 → 收好",
    "example": "I spread out the bunched-up blanket, smoothed it out and folded it neatly."
  },
  {
    "type": "ladder",
    "front": "scratch → chip → crack → break → shatter",
    "meaning": "划痕 → 崩口 → 裂纹 → 破损 → 碎裂",
    "example": "The plate was chipped, but the glass fell and shattered completely."
  },
  {
    "type": "ladder",
    "front": "light mist → thick mist → dense fog → visibility drops → fog lifts → visibility improves",
    "meaning": "薄雾 → 浓一些的雾 → 浓雾 → 能见度下降 → 雾散 → 能见度改善",
    "example": "Light mist thickened into dense fog before lifting later in the morning."
  },
  {
    "type": "ladder",
    "front": "clearly visible → faintly visible → barely visible → hidden from view",
    "meaning": "清楚可见 → 隐约可见 → 几乎看不见 → 完全被遮挡",
    "example": "The ridge went from clearly visible to barely visible before disappearing from view."
  },
  {
    "type": "word",
    "front": "trash can / bin / dumpster",
    "meaning": "垃圾桶（美）／垃圾桶 （英）／大型室外垃圾 箱",
    "example": "Put a fresh bag in the bin."
  },
  {
    "type": "word",
    "front": "spill over the top / edge",
    "meaning": "从顶部／边缘溢出",
    "example": "Rubbish was spilling over the top."
  },
  {
    "type": "word",
    "front": "overflow / be overflowing",
    "meaning": "溢出／装满到溢出",
    "example": "The bin is overflowing."
  },
  {
    "type": "word",
    "front": "empty → half full → nearly full → full → overflowing",
    "meaning": "从空到溢出的程度链",
    "example": "The bin is nearly full."
  },
  {
    "type": "word",
    "front": "pull the bag out",
    "meaning": "把袋子拉出来",
    "example": "Pull the trash bag out carefully."
  },
  {
    "type": "word",
    "front": "tie up the bag",
    "meaning": "将袋子扎紧",
    "example": "Tie up the bag before carrying it out."
  },
  {
    "type": "word",
    "front": "leak from the bottom / drip",
    "meaning": "从底部漏液／滴下",
    "example": "Liquid was leaking from the bottom and dripping onto the floor."
  },
  {
    "type": "word",
    "front": "hold something away from",
    "meaning": "让某物远离……",
    "example": "Hold the wet bag away from your clothes."
  },
  {
    "type": "word",
    "front": "smell awful / stink / musty",
    "meaning": "难闻／发臭／有霉味",
    "example": "The rubbish stinks."
  },
  {
    "type": "word",
    "front": "wipe up the spill / drops",
    "meaning": "擦掉洒出的液体／滴液",
    "example": "Wipe up the drops on the floor."
  },
  {
    "type": "word",
    "front": "put a fresh bag in / replace the bag",
    "meaning": "换上新袋",
    "example": "I replaced the trash bag."
  },
  {
    "type": "word",
    "front": "lift something off the ground",
    "meaning": "把某物从地面抬起",
    "example": "Lift your end a little."
  },
  {
    "type": "word",
    "front": "carry something upstairs",
    "meaning": "搬着某物上楼",
    "example": "We carried the cabinet upstairs."
  },
  {
    "type": "word",
    "front": "heavy vs bulky",
    "meaning": "重量重 vs 体积大笨重",
    "example": "It is bulky but not very heavy."
  },
  {
    "type": "word",
    "front": "tilt something toward / slightly",
    "meaning": "朝某方向倾斜／微倾",
    "example": "Tilt the cabinet toward me."
  },
  {
    "type": "word",
    "front": "rotate / turn sideways",
    "meaning": "旋转／侧转",
    "example": "Turn it sideways to fit through."
  },
  {
    "type": "word",
    "front": "doorway vs door",
    "meaning": "门洞／门本身",
    "example": "The cabinet would not fit through the doorway."
  },
  {
    "type": "word",
    "front": "lower something slowly",
    "meaning": "缓慢放低",
    "example": "Lower your end slowly."
  },
  {
    "type": "word",
    "front": "set something down",
    "meaning": "把某物放下来",
    "example": "Let’s set it down for a minute."
  },
  {
    "type": "word",
    "front": "pick something back up",
    "meaning": "把东西重新抬起／拿起",
    "example": "We picked it back up after the break."
  },
  {
    "type": "word",
    "front": "the rest of the way",
    "meaning": "剩下的路程",
    "example": "We carried it the rest of the way."
  },
  {
    "type": "word",
    "front": "checkout / line at checkout",
    "meaning": "结账处／结账队伍",
    "example": "The line at the checkout moved quickly."
  },
  {
    "type": "word",
    "front": "conveyor belt",
    "meaning": "传送带",
    "example": "Put your groceries on the conveyor belt."
  },
  {
    "type": "word",
    "front": "cashier / scan a barcode",
    "meaning": "收银员／扫描条形码",
    "example": "The cashier scanned everything one by one."
  },
  {
    "type": "word",
    "front": "one by one",
    "meaning": "一个接一个",
    "example": "Cross the slippery section one by one."
  },
  {
    "type": "word",
    "front": "tap your card / contactless payment",
    "meaning": "感应刷卡／非接触支付",
    "example": "I tapped my card on the terminal."
  },
  {
    "type": "word",
    "front": "card terminal",
    "meaning": "刷卡终端",
    "example": "Tap your card on the terminal."
  },
  {
    "type": "word",
    "front": "be declined",
    "meaning": "支付被拒绝",
    "example": "My card was declined."
  },
  {
    "type": "word",
    "front": "payment go through / would not go through",
    "meaning": "支付完成／就是不成功",
    "example": "The payment would not go through."
  },
  {
    "type": "word",
    "front": "insert card / enter PIN",
    "meaning": "插卡／输入密码",
    "example": "I inserted my card and entered my PIN."
  },
  {
    "type": "word",
    "front": "receipt / digital receipt",
    "meaning": "小票／电子收据",
    "example": "Do you need a receipt?"
  },
  {
    "type": "word",
    "front": "step aside / move aside",
    "meaning": "让到一旁",
    "example": "I packed my groceries and moved aside."
  },
  {
    "type": "word",
    "front": "snag on a branch / nail",
    "meaning": "被树枝／钉子勾住",
    "example": "My sleeve snagged on a branch."
  },
  {
    "type": "word",
    "front": "tear – tore – torn",
    "meaning": "撕裂的动词变化",
    "example": "The fabric tore near the pocket."
  },
  {
    "type": "word",
    "front": "a rip / rip open",
    "meaning": "裂口／撕开",
    "example": "There is a small rip in my jacket."
  },
  {
    "type": "word",
    "front": "fabric / stiff fabric",
    "meaning": "布料／硬挺布料",
    "example": "The fabric feels stiff."
  },
  {
    "type": "word",
    "front": "loose thread",
    "meaning": "松散线头",
    "example": "Trim the loose threads."
  },
  {
    "type": "word",
    "front": "trim the edges / threads",
    "meaning": "修剪边缘／线头",
    "example": "I trimmed a few loose threads."
  },
  {
    "type": "word",
    "front": "patch a tear / hole / tent",
    "meaning": "修补裂口／洞／帐篷",
    "example": "I patched the tear with repair tape."
  },
  {
    "type": "word",
    "front": "temporary fix / permanent fix",
    "meaning": "临时修补／永久修复",
    "example": "It was only a temporary fix."
  },
  {
    "type": "word",
    "front": "hold together",
    "meaning": "维持完整、不散开",
    "example": "The tape held the jacket together."
  },
  {
    "type": "word",
    "front": "get caught on vs snag on",
    "meaning": "泛指挂住／强调尖锐物勾住织物",
    "example": "The strap got caught on a rock."
  },
  {
    "type": "word",
    "front": "approach a stop / summit",
    "meaning": "接近车站／山顶",
    "example": "The bus was approaching my stop."
  },
  {
    "type": "word",
    "front": "look up from your phone",
    "meaning": "从手机上抬头",
    "example": "I looked up too late."
  },
  {
    "type": "word",
    "front": "pull in",
    "meaning": "驶入停靠点 ↔ 驶离停靠点",
    "example": "The bus pulled away from the stop."
  },
  {
    "type": "word",
    "front": "press the stop button",
    "meaning": "按停车按钮",
    "example": "Press the stop button before your stop."
  },
  {
    "type": "word",
    "front": "miss the bus vs miss my stop",
    "meaning": "错 过 公 交vs车坐过站",
    "example": "I missed my stop and got off at the next one."
  },
  {
    "type": "word",
    "front": "get off at the next stop",
    "meaning": "下一站下车",
    "example": "I got off at the next stop."
  },
  {
    "type": "word",
    "front": "walk back / head back",
    "meaning": "走回去／往回走",
    "example": "I crossed the street and walked back."
  },
  {
    "type": "word",
    "front": "in advance / well in advance",
    "meaning": "提前／提前很久 等……时，……早已",
    "example": "Press the button well in advance."
  },
  {
    "type": "word",
    "front": "by the time + past, had already...",
    "meaning": "等……时，……早已经……",
    "example": "By the time I looked up, the bus had already pulled away."
  },
  {
    "type": "word",
    "front": "rub against / rubbing",
    "meaning": "摩擦／反复蹭 脚后跟／脚趾／脚底／",
    "example": "My boot is rubbing against my heel."
  },
  {
    "type": "word",
    "front": "heel / toe / sole / ankle",
    "meaning": "脚后跟／脚趾／脚底／脚踝",
    "example": "I have a blister on my heel."
  },
  {
    "type": "word",
    "front": "sting vs sore",
    "meaning": "刺痛灼痛 vs 持续酸痛触痛",
    "example": "The skin started to sting."
  },
  {
    "type": "word",
    "front": "a blister starts to form",
    "meaning": "水泡开始形成",
    "example": "A blister was starting to form."
  },
  {
    "type": "word",
    "front": "blister plaster / adhesive bandage",
    "meaning": "水泡贴／创可贴",
    "example": "Cover it with a blister plaster."
  },
  {
    "type": "word",
    "front": "cover the area with",
    "meaning": "用……覆盖该部位",
    "example": "Cover the cut with a clean dressing."
  },
  {
    "type": "word",
    "front": "slide around inside",
    "meaning": "在里面滑来滑去 系好靴子／收紧／放松",
    "example": "My heel kept sliding around inside the boot."
  },
  {
    "type": "word",
    "front": "lace up / tighten / loosen laces",
    "meaning": "系好靴子／收紧／放松鞋带",
    "example": "Tighten the laces slightly."
  },
  {
    "type": "word",
    "front": "stop A from doing B",
    "meaning": "阻止 A 做 B",
    "example": "I adjusted the boots to stop my heel from sliding around."
  },
  {
    "type": "word",
    "front": "keep going vs push on",
    "meaning": "正常继续 vs 克服困难坚持前进",
    "example": "My foot feels fine, so I can keep going."
  },
  {
    "type": "word",
    "front": "slimy / go slimy",
    "meaning": "黏滑的／变得黏滑",
    "example": "The chicken had gone slimy."
  },
  {
    "type": "word",
    "front": "mold / moldy / go moldy",
    "meaning": "霉菌／发霉／变得发霉",
    "example": "The bread has gone moldy."
  },
  {
    "type": "word",
    "front": "stale vs moldy",
    "meaning": "不新鲜变干硬 vs 发霉",
    "example": "The bread was stale but not moldy."
  },
  {
    "type": "word",
    "front": "wilt / wilted",
    "meaning": "萎蔫／萎蔫的",
    "example": "The lettuce has started to wilt."
  },
  {
    "type": "word",
    "front": "turn brown around the edges",
    "meaning": "边缘变褐",
    "example": "The lettuce was turning brown around the edges."
  },
  {
    "type": "word",
    "front": "leftover chicken / leftovers",
    "meaning": "剩下的鸡肉／剩菜",
    "example": "Heat up the leftovers."
  },
  {
    "type": "word",
    "front": "thaw / defrost",
    "meaning": "解冻 到期日／安全食用截止",
    "example": "I left the frozen food to thaw in the fridge."
  },
  {
    "type": "word",
    "front": "expiration date / use-by date",
    "meaning": "到期日／安全食用截止日期",
    "example": "Check the use-by date."
  },
  {
    "type": "word",
    "front": "go off / go bad / spoil",
    "meaning": "（食物）变质",
    "example": "The milk has gone off."
  },
  {
    "type": "word",
    "front": "fresh → wilted / slimy / moldy → spoiled",
    "meaning": "新鲜 → 萎蔫／发黏／发霉 → 变质",
    "example": "I threw out the spoiled food."
  },
  {
    "type": "word",
    "front": "slip out of my pocket / hand",
    "meaning": "从口袋／手中滑出",
    "example": "My phone slipped out of my pocket."
  },
  {
    "type": "word",
    "front": "get soaked / slightly damp → wet → soaked",
    "meaning": "湿透／湿度程度链",
    "example": "The phone got completely soaked."
  },
  {
    "type": "word",
    "front": "excess water / excess moisture",
    "meaning": "多余的水／水分",
    "example": "Remove the excess water."
  },
  {
    "type": "word",
    "front": "shake off the water",
    "meaning": "轻轻抖掉水",
    "example": "I gently shook off the excess water."
  },
  {
    "type": "word",
    "front": "wipe something dry vs let dry out",
    "meaning": "擦干表面 vs 让内部逐渐干透",
    "example": "I wiped it dry and let it dry out."
  },
  {
    "type": "word",
    "front": "good airflow / hardly any airflow",
    "meaning": "通风良好／几乎不通风",
    "example": "Leave it somewhere with good airflow."
  },
  {
    "type": "word",
    "front": "be tempted to do something",
    "meaning": "忍不住想做某事",
    "example": "I was tempted to turn it back on."
  },
  {
    "type": "word",
    "front": "plug in / unplug / charging port",
    "meaning": "插电／拔插头／充电口",
    "example": "Do not plug it in while the port is wet."
  },
  {
    "type": "word",
    "front": "turn something back on",
    "meaning": "重新打开",
    "example": "I waited before turning the phone back on."
  },
  {
    "type": "word",
    "front": "boulder / boulder field",
    "meaning": "巨石／巨石区 小卵石 → 石头 → 岩石",
    "example": "We climbed past a large boulder."
  },
  {
    "type": "word",
    "front": "pebble → stone → rock → boulder",
    "meaning": "小卵石 → 石头 → 岩石 → 巨石",
    "example": "A boulder blocked the trail."
  },
  {
    "type": "word",
    "front": "narrow gap / squeeze through a gap",
    "meaning": "狭窄缝隙／挤过缝隙",
    "example": "I squeezed through a narrow gap."
  },
  {
    "type": "word",
    "front": "turn sideways",
    "meaning": "侧身",
    "example": "I had to turn sideways to fit through."
  },
  {
    "type": "word",
    "front": "back out (of a gap)",
    "meaning": "从缝隙中倒退出来",
    "example": "I carefully backed out of the gap."
  },
  {
    "type": "word",
    "front": "back out vs backtrack",
    "meaning": "从某空间退出 vs 沿原路折返",
    "example": "We backtracked to the previous junction."
  },
  {
    "type": "word",
    "front": "crouch down → crawl through",
    "meaning": "蹲低 → 爬行穿过 低矮突出岩壁／低头钻",
    "example": "I crouched down and crawled through."
  },
  {
    "type": "word",
    "front": "low overhang / duck under",
    "meaning": "低矮突出岩壁／低头钻过",
    "example": "Duck under the overhang."
  },
  {
    "type": "word",
    "front": "brush the dust off",
    "meaning": "掸掉灰尘",
    "example": "I brushed the dust off my jacket."
  },
  {
    "type": "word",
    "front": "put my backpack back on",
    "meaning": "重新背上背包",
    "example": "I put my pack back on."
  },
  {
    "type": "word",
    "front": "drain properly / drain (noun)",
    "meaning": "排水顺畅／排水口",
    "example": "The sink is not draining properly."
  },
  {
    "type": "word",
    "front": "fill up / be clogged / overflow",
    "meaning": "逐渐装满／堵塞／溢出",
    "example": "The sink was filling up."
  },
  {
    "type": "word",
    "front": "bits of food / leftovers",
    "meaning": "食物碎屑／剩余食物",
    "example": "Scrape the leftovers off the plates."
  },
  {
    "type": "word",
    "front": "scrape something off",
    "meaning": "刮去附着物",
    "example": "Scrape the food off the plate."
  },
  {
    "type": "word",
    "front": "rinse under running water",
    "meaning": "用流动水冲洗",
    "example": "Rinse the plates under running water."
  },
  {
    "type": "word",
    "front": "stack the dishes vs pile up",
    "meaning": "整齐叠放餐具 vs 随意堆放",
    "example": "Stack the dishes on the rack."
  },
  {
    "type": "word",
    "front": "drying rack",
    "meaning": "沥水架／晾衣架",
    "example": "Put the plates on the drying rack."
  },
  {
    "type": "word",
    "front": "clear a blockage",
    "meaning": "清除堵塞",
    "example": "I cleared the blockage."
  },
  {
    "type": "word",
    "front": "shake off excess water",
    "meaning": "甩掉多余水分",
    "example": "Shake the water off gently."
  },
  {
    "type": "word",
    "front": "leave to air-dry",
    "meaning": "放着自然风干",
    "example": "Leave the dishes to air-dry."
  },
  {
    "type": "word",
    "front": "soak vs scrub vs rinse",
    "meaning": "浸泡 vs 刷洗 vs 冲洗",
    "example": "Soak it, scrub it, then rinse it."
  },
  {
    "type": "word",
    "front": "check-in counter",
    "meaning": "值机柜台",
    "example": "I arrived at the check-in counter."
  },
  {
    "type": "word",
    "front": "scale / put suitcase on scale",
    "meaning": "秤／把箱子放秤上",
    "example": "Put your suitcase on the scale."
  },
  {
    "type": "word",
    "front": "three kilos overweight",
    "meaning": "超重三公斤",
    "example": "The suitcase is three kilos overweight."
  },
  {
    "type": "word",
    "front": "overweight vs oversized vs bulky",
    "meaning": "超重 vs 超尺寸 vs 体积大",
    "example": "It is bulky but not overweight."
  },
  {
    "type": "word",
    "front": "rearrange my luggage / furniture / schedule",
    "meaning": "重整行李／家具／安排",
    "example": "I rearranged my luggage."
  },
  {
    "type": "word",
    "front": "unzip / zip back up",
    "meaning": "拉开拉链／重新拉好",
    "example": "I unzipped the suitcase and zipped it back up."
  },
  {
    "type": "word",
    "front": "stuff into a bag",
    "meaning": "塞进包",
    "example": "I stuffed the jacket into my carry-on."
  },
  {
    "type": "word",
    "front": "carry-on bag vs checked baggage",
    "meaning": "随身行李 vs 托运行李",
    "example": "I moved the books into my carry-on bag."
  },
  {
    "type": "word",
    "front": "within the weight / time limit / budget",
    "meaning": "在重量／时间／预算限 制内",
    "example": "Now it is within the weight limit."
  },
  {
    "type": "word",
    "front": "attach a baggage tag / check in a bag",
    "meaning": "贴上行李标签／托运",
    "example": "The agent attached a baggage tag."
  },
  {
    "type": "word",
    "front": "wander off the trail / marked route",
    "meaning": "不知不觉偏离小路／标记路线",
    "example": "I wandered off the marked route."
  },
  {
    "type": "word",
    "front": "marked route / waymark",
    "meaning": "有标记路线／路标",
    "example": "I had not seen a waymark for a while."
  },
  {
    "type": "word",
    "front": "trail junction",
    "meaning": "徒步岔路口",
    "example": "We stopped at a junction."
  },
  {
    "type": "word",
    "front": "landmark / familiar landmark",
    "meaning": "地标／熟悉的地物 弄清位置／想出解决办",
    "example": "Look for familiar landmarks."
  },
  {
    "type": "word",
    "front": "work out where I am / a solution",
    "meaning": "弄清位置／想出解决办法",
    "example": "I tried to work out where I was."
  },
  {
    "type": "word",
    "front": "match the terrain / not match the map",
    "meaning": "和地形匹配／与地图对不上",
    "example": "The terrain did not match my map."
  },
  {
    "type": "word",
    "front": "be off course / get farther off course",
    "meaning": "走偏／越走越偏",
    "example": "We are getting farther off course."
  },
  {
    "type": "word",
    "front": "retrace my steps",
    "meaning": "沿来路返回",
    "example": "I retraced my steps to the last junction."
  },
  {
    "type": "word",
    "front": "get my bearings",
    "meaning": "确认位置和方位",
    "example": "Give me a minute to get my bearings."
  },
  {
    "type": "word",
    "front": "rather than push on",
    "meaning": "而不是硬往前走",
    "example": "I turned back rather than pushing on."
  },
  {
    "type": "word",
    "front": "damp vs humid vs moist",
    "meaning": "物体潮湿 vs 空气湿润 vs 适度湿润",
    "example": "The clothes are damp because the room is humid."
  },
  {
    "type": "word",
    "front": "hardly any airflow",
    "meaning": "几乎不通风",
    "example": "There is hardly any airflow."
  },
  {
    "type": "word",
    "front": "give something a (good) shake",
    "meaning": "把某物用力抖一抖",
    "example": "Give the jacket a good shake."
  },
  {
    "type": "word",
    "front": "shake off vs give a shake",
    "meaning": "甩掉附着物 vs 做抖动动作",
    "example": "Shake off the excess water."
  },
  {
    "type": "word",
    "front": "hang clothes farther apart",
    "meaning": "衣服挂得更分散",
    "example": "Hang the clothes farther apart."
  },
  {
    "type": "word",
    "front": "too close together / spread out",
    "meaning": "挨太近／分散展开",
    "example": "The shirts are too close together."
  },
  {
    "type": "word",
    "front": "squeeze out vs wring out",
    "meaning": "挤出 vs 拧干",
    "example": "Squeeze the sponge, but wring out the towel."
  },
  {
    "type": "word",
    "front": "smell musty vs be moldy",
    "meaning": "有霉味 vs 长了霉",
    "example": "The room smells musty but I cannot see mold."
  },
  {
    "type": "word",
    "front": "leave something sitting there",
    "meaning": "让某物一直搁着",
    "example": "Do not leave wet clothes sitting in the machine."
  },
  {
    "type": "word",
    "front": "dry → damp → wet → soaked",
    "meaning": "干 → 潮 → 湿 → 湿透",
    "example": "My clothes stayed damp for hours."
  },
  {
    "type": "word",
    "front": "knock over vs knock off vs tip over",
    "meaning": "碰翻 vs 从表面碰落 vs 自己翻倒",
    "example": "I knocked over my glass."
  },
  {
    "type": "word",
    "front": "spill across vs spill onto",
    "meaning": "洒过表面 vs 洒到某物上",
    "example": "Water spilled across the table and onto my trousers."
  },
  {
    "type": "word",
    "front": "drip over the edge",
    "meaning": "沿边缘滴落",
    "example": "Water was dripping over the edge."
  },
  {
    "type": "word",
    "front": "soak up the water / spill",
    "meaning": "吸掉水／洒出的液体",
    "example": "Use napkins to soak up the water."
  },
  {
    "type": "word",
    "front": "soak in vs soak up",
    "meaning": "浸泡在……中 vs 吸收液体",
    "example": "The cloth soaked up the spill."
  },
  {
    "type": "word",
    "front": "seep into / seep through",
    "meaning": "慢慢渗入／渗透 餐巾纸／厨房纸／面巾",
    "example": "Water seeped into the fabric."
  },
  {
    "type": "word",
    "front": "napkin / paper towel / tissue",
    "meaning": "餐巾纸／厨房纸／面巾纸",
    "example": "Grab a few napkins."
  },
  {
    "type": "word",
    "front": "move something out of the way",
    "meaning": "把某物挪开免得碍事 换桌／改路线／改用现",
    "example": "Move the bag out of the way."
  },
  {
    "type": "word",
    "front": "switch to another table / route / cash",
    "meaning": "换桌／改路线／改用现金",
    "example": "Can we switch to another table?"
  },
  {
    "type": "word",
    "front": "wipe down / wipe dry",
    "meaning": "整体擦拭／擦干",
    "example": "The waiter wiped down the table."
  },
  {
    "type": "word",
    "front": "scree slope / gravel / boulder field",
    "meaning": "碎石坡／砾石／巨石区 松动岩石／不稳定脚下",
    "example": "The trail crossed a steep scree slope."
  },
  {
    "type": "word",
    "front": "loose rocks / unstable footing",
    "meaning": "松动岩石／不稳定脚下条件",
    "example": "Watch out for loose rocks."
  },
  {
    "type": "word",
    "front": "shift underneath my feet",
    "meaning": "在我脚下移动",
    "example": "The gravel kept shifting underneath me."
  },
  {
    "type": "word",
    "front": "footing vs foothold",
    "meaning": "整体落脚条件 vs 具体落脚点",
    "example": "I could not find a firm foothold."
  },
  {
    "type": "word",
    "front": "firm foothold",
    "meaning": "稳 固 的 落 脚 点",
    "example": "Look for a firm foothold."
  },
  {
    "type": "word",
    "front": "shift your weight onto / keep weight over feet",
    "meaning": "转移重心到……／让重心保持在脚上方",
    "example": "Shift your weight onto your left foot."
  },
  {
    "type": "word",
    "front": "tumble downhill vs roll downhill",
    "meaning": "不规则翻滚下坡 vs 滚下坡",
    "example": "A rock tumbled downhill."
  },
  {
    "type": "word",
    "front": "rattle / rattling stones",
    "meaning": "哗啦作响／石块碰撞声",
    "example": "I heard stones rattling above me."
  },
  {
    "type": "word",
    "front": "traverse a slope / cross the slope",
    "meaning": "横切山坡",
    "example": "We traversed the steep slope."
  },
  {
    "type": "word",
    "front": "ascend / descend / traverse",
    "meaning": "上升／下降／横切",
    "example": "We descended before traversing the slope."
  },
  {
    "type": "word",
    "front": "make your way across",
    "meaning": "逐渐、小心穿过",
    "example": "We made our way across the loose rocks."
  },
  {
    "type": "word",
    "front": "portable charger / power bank",
    "meaning": "便携充电器／充电宝",
    "example": "I bought a portable charger."
  },
  {
    "type": "word",
    "front": "faulty vs defective vs damaged vs worn out",
    "meaning": "有故障 vs 有缺陷 vs 受损 vs 用旧磨损",
    "example": "The charger seemed faulty."
  },
  {
    "type": "word",
    "front": "plug in / would not charge",
    "meaning": "插电／就是充不进去电",
    "example": "I plugged it in but it would not charge."
  },
  {
    "type": "word",
    "front": "take something back to the store",
    "meaning": "把商品拿回商店退换",
    "example": "I took it back with the receipt."
  },
  {
    "type": "word",
    "front": "receipt / proof of purchase",
    "meaning": "收据／购买凭证",
    "example": "Do you have proof of purchase?"
  },
  {
    "type": "word",
    "front": "exchange A for B",
    "meaning": "用A换B",
    "example": "Can I exchange it for a new one?"
  },
  {
    "type": "word",
    "front": "ask for / get / issue a refund",
    "meaning": "要求／获得／办理退款",
    "example": "I asked for a refund instead."
  },
  {
    "type": "word",
    "front": "process a return / refund / payment",
    "meaning": "处理退货／退款／支付",
    "example": "The assistant processed the return."
  },
  {
    "type": "word",
    "front": "store credit",
    "meaning": "商店购物余额／额度",
    "example": "They offered store credit instead."
  },
  {
    "type": "word",
    "front": "money go back onto my card",
    "meaning": "钱退回银行卡",
    "example": "The money will go back onto your card."
  },
  {
    "type": "word",
    "front": "slip off the chainring",
    "meaning": "从齿盘滑脱",
    "example": "The chain slipped off the front chainring."
  },
  {
    "type": "word",
    "front": "chain / chainring / pedal",
    "meaning": "链条／前齿盘／踏板",
    "example": "The pedals started spinning freely."
  },
  {
    "type": "word",
    "front": "spin freely",
    "meaning": "自由旋转、空转",
    "example": "The wheel spins freely."
  },
  {
    "type": "word",
    "front": "turn vs rotate vs spin",
    "meaning": "转动 vs 旋转（偏正式）vs 连续旋转",
    "example": "Spin the wheel by hand."
  },
  {
    "type": "word",
    "front": "pull over to the side",
    "meaning": "靠路边停车",
    "example": "I pulled over to check the chain."
  },
  {
    "type": "word",
    "front": "turn upside down vs turn sideways",
    "meaning": "倒过来 vs 侧转",
    "example": "I turned the bike upside down."
  },
  {
    "type": "word",
    "front": "put the chain back on",
    "meaning": "把链条装回",
    "example": "Put the chain back on the chainring."
  },
  {
    "type": "word",
    "front": "by hand / turn the pedals by hand",
    "meaning": "手动／用手转动踏板 润滑脂／油腻／沾满油",
    "example": "I turned the pedals by hand."
  },
  {
    "type": "word",
    "front": "grease / greasy / covered in grease",
    "meaning": "润滑脂／油腻／沾满油脂",
    "example": "My fingers were covered in grease."
  },
  {
    "type": "word",
    "front": "test ride / test drive",
    "meaning": "试骑／试驾",
    "example": "I took the bike for a short test ride."
  },
  {
    "type": "word",
    "front": "run smoothly",
    "meaning": "运转顺畅",
    "example": "Everything was running smoothly."
  },
  {
    "type": "word",
    "front": "wash away / washed out",
    "meaning": "被水冲走／被冲毁",
    "example": "Part of the trail was washed away."
  },
  {
    "type": "word",
    "front": "wash off vs wash away",
    "meaning": "从表面洗掉 vs 整体冲走",
    "example": "Rain washed away the path."
  },
  {
    "type": "word",
    "front": "swell / swollen river / stream",
    "meaning": "涨大／暴涨的河／溪",
    "example": "The stream had swollen overnight."
  },
  {
    "type": "word",
    "front": "erode the bank / erosion",
    "meaning": "侵蚀河岸／侵蚀",
    "example": "The water eroded the bank."
  },
  {
    "type": "word",
    "front": "collapse / collapsed bridge",
    "meaning": "坍塌／坍塌的桥 突然支撑不住／地面塌",
    "example": "Part of the bridge collapsed."
  },
  {
    "type": "word",
    "front": "give way / ground gives way",
    "meaning": "突然支撑不住／地面塌陷",
    "example": "The bridge gave way under the load."
  },
  {
    "type": "word",
    "front": "debris / scattered debris",
    "meaning": "残骸、碎屑／散落残骸",
    "example": "Debris was piled up downstream."
  },
  {
    "type": "word",
    "front": "debris vs shards",
    "meaning": "片",
    "example": "Broken branches and other debris filled the stream."
  },
  {
    "type": "word",
    "front": "stay well back / well away from",
    "meaning": "退到足够远的距离",
    "example": "Stay well back from the edge."
  },
  {
    "type": "word",
    "front": "higher ground",
    "meaning": "地势更高的地方",
    "example": "Move to higher ground."
  },
  {
    "type": "word",
    "front": "follow a marked detour",
    "meaning": "沿着标记好的绕行路线",
    "example": "We followed a marked detour."
  },
  {
    "type": "word",
    "front": "get tangled up / tangled hair",
    "meaning": "缠乱／打结的头发",
    "example": "The cable was completely tangled up."
  },
  {
    "type": "word",
    "front": "wrap around something",
    "meaning": "围绕某物缠绕 打结／收紧／放松／解",
    "example": "The cable wrapped around my keys."
  },
  {
    "type": "word",
    "front": "tie / tighten / loosen / untie a knot",
    "meaning": "打结／收紧／放松／解结",
    "example": "There was a tight knot near the end."
  },
  {
    "type": "word",
    "front": "pull something apart",
    "meaning": "把某物拉开",
    "example": "Pulling the wires apart made things worse."
  },
  {
    "type": "word",
    "front": "untangle the cable / hair",
    "meaning": "解开缠绕的线／头发",
    "example": "I untangled the cable."
  },
  {
    "type": "word",
    "front": "twist vs tangle / untwist",
    "meaning": "扭转 vs 缠乱／解开扭转",
    "example": "I untwisted the cable."
  },
  {
    "type": "word",
    "front": "straighten out the cable / collar",
    "meaning": "理直线／理平衣领 纤维磨散／磨损绳子／",
    "example": "Straighten out the cable."
  },
  {
    "type": "word",
    "front": "fray / frayed rope / frayed edges",
    "meaning": "纤维磨散／磨损绳子／磨散边缘",
    "example": "The insulation was starting to fray."
  },
  {
    "type": "word",
    "front": "connector / insulation",
    "meaning": "接头／绝缘层",
    "example": "The cable was frayed near the connector."
  },
  {
    "type": "word",
    "front": "coil up a cable / rope",
    "meaning": "把线／绳子盘成圈",
    "example": "Coil the cable up neatly."
  },
  {
    "type": "word",
    "front": "mix-up / there has been a mix-up",
    "meaning": "弄混／发生了差错",
    "example": "There seems to have been a mix-up."
  },
  {
    "type": "word",
    "front": "bring out the food / food comes out",
    "meaning": "端菜出来／菜上了",
    "example": "The waiter brought out the food."
  },
  {
    "type": "word",
    "front": "flag down a waiter / taxi",
    "meaning": "招 呼 服 务 员 ／招手拦车",
    "example": "I flagged down the waiter."
  },
  {
    "type": "word",
    "front": "be backed up / kitchen backed up / traffic backed up",
    "meaning": "订单或交通积压",
    "example": "The kitchen is pretty backed up."
  },
  {
    "type": "word",
    "front": "get held up / order held up",
    "meaning": "被耽搁／订单延误",
    "example": "My order has been held up."
  },
  {
    "type": "word",
    "front": "check on my order / check on someone",
    "meaning": "查看订单进度／看看某人状况",
    "example": "Could you check on my order?"
  },
  {
    "type": "word",
    "front": "on the house",
    "meaning": "店家免费赠送",
    "example": "Dessert is on the house."
  },
  {
    "type": "word",
    "front": "make up for the delay / lost time",
    "meaning": "弥补延误／耽误的时间",
    "example": "The dessert was meant to make up for the delay."
  },
  {
    "type": "word",
    "front": "roughly how long will it take?",
    "meaning": "大约还要多久？",
    "example": "Do you know roughly how long it will take?"
  },
  {
    "type": "word",
    "front": "when you get a chance / no worries",
    "meaning": "方便时／没关系",
    "example": "Could you check when you get a chance?"
  },
  {
    "type": "word",
    "front": "fresh / powdery / packed / icy / slushy snow",
    "meaning": "新雪／粉雪／踩实的雪／结冰雪／湿软雪泥",
    "example": "The snow was soft and powdery."
  },
  {
    "type": "word",
    "front": "pack down snow / soil",
    "meaning": "踩实积雪／压实土壤 冻结 → 融化 → 重新冻",
    "example": "The snow was packed down by hikers."
  },
  {
    "type": "word",
    "front": "freeze → melt → refreeze",
    "meaning": "结",
    "example": "The snow melted and refroze overnight."
  },
  {
    "type": "word",
    "front": "icy patch / a patch of snow",
    "meaning": "局部冰面／一片雪",
    "example": "Watch out for icy patches."
  },
  {
    "type": "word",
    "front": "crunch underfoot / crunch under boots",
    "meaning": "脚下发出咯吱声",
    "example": "The snow crunched underfoot."
  },
  {
    "type": "word",
    "front": "crust / hard snow crust",
    "meaning": "表层硬壳／硬雪壳",
    "example": "The hard crust gave way."
  },
  {
    "type": "word",
    "front": "give way (support collapses)",
    "meaning": "支撑突然失效",
    "example": "The snow crust gave way under my foot."
  },
  {
    "type": "word",
    "front": "sink – sank – sunk / sink into",
    "meaning": "下沉／陷进",
    "example": "My boot sank into the snow."
  },
  {
    "type": "word",
    "front": "slushy / turn slushy",
    "meaning": "湿软雪泥状／变成雪泥",
    "example": "The snow is turning slushy."
  },
  {
    "type": "word",
    "front": "traction / grip / good grip",
    "meaning": "抓地力／附着力 背阴路段／结冰更严重",
    "example": "These boots have little grip on ice."
  },
  {
    "type": "word",
    "front": "shaded section / icier ridge",
    "meaning": "背阴路段／结冰更严重的山脊",
    "example": "The shaded sections were icy."
  },
  {
    "type": "ladder",
    "front": "leak / drip / spill / overflow",
    "meaning": "漏／滴／洒／溢",
    "example": "The bag was leaking and water was dripping on the floor."
  },
  {
    "type": "ladder",
    "front": "lift → carry → tilt → turn sideways → lower → set down",
    "meaning": "抬起→搬运→倾斜→侧转→降低→放下",
    "example": "Lower your end slowly."
  },
  {
    "type": "ladder",
    "front": "tap → declined → try again → insert → enter PIN → go through",
    "meaning": "感应→拒付→重试→插卡→输入密码→成功",
    "example": "The payment finally went through."
  },
  {
    "type": "ladder",
    "front": "snag → tear → rip → trim → patch → hold together",
    "meaning": "勾住→撕裂→裂口→修剪→打补丁→维持完整",
    "example": "The temporary patch held together."
  },
  {
    "type": "ladder",
    "front": "approach → pull in → come to a stop → get off → pull away",
    "meaning": "接近→驶入→停稳→下车→驶离",
    "example": "By the time I looked up, the bus had pulled away."
  },
  {
    "type": "ladder",
    "front": "rub → irritate → sting → blister forms → cover → adjust",
    "meaning": "摩擦→刺激→刺痛→水泡形成→覆盖→调整",
    "example": "The rubbing made my skin sting."
  },
  {
    "type": "ladder",
    "front": "fresh → stale / wilted / slimy / moldy → spoiled",
    "meaning": "新鲜→变干／萎蔫／黏滑／发霉→变质",
    "example": "The lettuce wilted and the bread went moldy."
  },
  {
    "type": "ladder",
    "front": "slip out → get soaked → turn off → wipe dry → dry out",
    "meaning": "滑出→湿透→关机→擦干→干透",
    "example": "I wiped the surface dry and left it to dry out."
  },
  {
    "type": "ladder",
    "front": "turn sideways → squeeze through → snag → back out → crawl",
    "meaning": "侧身→挤过→勾住→退出→爬过",
    "example": "I backed out and crawled under the rock."
  },
  {
    "type": "ladder",
    "front": "soak → scrub → rinse → stack → shake off → air-dry",
    "meaning": "泡→刷→冲→叠→甩水→自然风干",
    "example": "Stack the dishes on the drying rack."
  },
  {
    "type": "ladder",
    "front": "weigh → overweight → rearrange → move to carry-on → reweigh → check in",
    "meaning": "称重→超重→重整→移入随身包→重称→托运",
    "example": "After rearranging, the bag was within the limit."
  },
  {
    "type": "ladder",
    "front": "wander off → notice waymarks missing → GPS → landmarks → retrace → get bearings",
    "meaning": "走偏→缺少标记→GPS→地标→折返→确定方位",
    "example": "I stopped to get my bearings."
  },
  {
    "type": "ladder",
    "front": "dry → damp → wet → soaked; humid → musty",
    "meaning": "干→潮→湿→湿透；潮湿空气→霉味",
    "example": "The humid room made the towels smell musty."
  },
  {
    "type": "ladder",
    "front": "knock over → spill across → drip → seep into → soak up → wipe dry",
    "meaning": "碰翻→流过→滴落→渗入→吸掉→擦干",
    "example": "Water seeped into the fabric."
  },
  {
    "type": "ladder",
    "front": "loose rocks → gravel shifts → lose foothold → tumble → rattle",
    "meaning": "松石→砾石移动→失稳→翻滚→碰撞声",
    "example": "The gravel shifted under my feet."
  },
  {
    "type": "ladder",
    "front": "faulty → take back → test → exchange / refund → process return",
    "meaning": "故障→带回→检测→换货／退款→办理",
    "example": "They processed a refund."
  },
  {
    "type": "ladder",
    "front": "chain slips off → pedals spin freely → put back on → test ride",
    "meaning": "链条脱落→踏板空转→装回→试骑",
    "example": "The pedals spun freely."
  },
  {
    "type": "ladder",
    "front": "stream swells → bank erodes → trail washes out → bridge gives way",
    "meaning": "溪水暴涨→冲刷河岸→冲毁山路→桥垮塌",
    "example": "Part of the footbridge gave way."
  },
  {
    "type": "ladder",
    "front": "tangle → wrap around → knot → loosen → untwist → straighten → coil up",
    "meaning": "缠乱→绕住→打结→松开→解扭→理直→盘起",
    "example": "I untangled and coiled up the cable."
  },
  {
    "type": "ladder",
    "front": "mix-up → flag down → backed up → held up → check on → on the house",
    "meaning": "弄混→招呼→积压→延误→催查→店家赠送",
    "example": "They offered dessert on the house."
  },
  {
    "type": "ladder",
    "front": "powdery → packed → melt / refreeze → icy / slushy",
    "meaning": "粉雪→踩实→融化／复冻→结冰／雪泥",
    "example": "The snow melted and refroze into icy patches."
  },
  {
    "type": "ladder",
    "front": "solid crust → crust gives way → sink knee-deep",
    "meaning": "坚实雪壳→突然塌陷→陷至齐膝",
    "example": "My leg sank knee-deep into the snow."
  },
  {
    "type": "ladder",
    "front": "roll vs spin vs rotate vs tumble",
    "meaning": "滚动 vs 连续旋转 vs 旋转改变方向 vs 不规则翻滚",
    "example": "The rock tumbled downhill while the wheel spun."
  },
  {
    "type": "ladder",
    "front": "check on an order / check on hikers",
    "meaning": "跟进订单／看看队员情况",
    "example": "I checked on the slower hikers."
  },
  {
    "type": "kana",
    "front": "あ",
    "meaning": "ア",
    "example": "a",
    "hiragana": "あ",
    "katakana": "ア",
    "romaji": "a"
  },
  {
    "type": "kana",
    "front": "い",
    "meaning": "イ",
    "example": "i",
    "hiragana": "い",
    "katakana": "イ",
    "romaji": "i"
  },
  {
    "type": "kana",
    "front": "う",
    "meaning": "ウ",
    "example": "u",
    "hiragana": "う",
    "katakana": "ウ",
    "romaji": "u"
  },
  {
    "type": "kana",
    "front": "え",
    "meaning": "エ",
    "example": "e",
    "hiragana": "え",
    "katakana": "エ",
    "romaji": "e"
  },
  {
    "type": "kana",
    "front": "お",
    "meaning": "オ",
    "example": "o",
    "hiragana": "お",
    "katakana": "オ",
    "romaji": "o"
  },
  {
    "type": "kana",
    "front": "か",
    "meaning": "カ",
    "example": "ka",
    "hiragana": "か",
    "katakana": "カ",
    "romaji": "ka"
  },
  {
    "type": "kana",
    "front": "き",
    "meaning": "キ",
    "example": "ki",
    "hiragana": "き",
    "katakana": "キ",
    "romaji": "ki"
  },
  {
    "type": "kana",
    "front": "く",
    "meaning": "ク",
    "example": "ku",
    "hiragana": "く",
    "katakana": "ク",
    "romaji": "ku"
  },
  {
    "type": "kana",
    "front": "け",
    "meaning": "ケ",
    "example": "ke",
    "hiragana": "け",
    "katakana": "ケ",
    "romaji": "ke"
  },
  {
    "type": "kana",
    "front": "こ",
    "meaning": "コ",
    "example": "ko",
    "hiragana": "こ",
    "katakana": "コ",
    "romaji": "ko"
  },
  {
    "type": "kana",
    "front": "さ",
    "meaning": "サ",
    "example": "sa",
    "hiragana": "さ",
    "katakana": "サ",
    "romaji": "sa"
  },
  {
    "type": "kana",
    "front": "し",
    "meaning": "シ",
    "example": "shi",
    "hiragana": "し",
    "katakana": "シ",
    "romaji": "shi"
  },
  {
    "type": "kana",
    "front": "す",
    "meaning": "ス",
    "example": "su",
    "hiragana": "す",
    "katakana": "ス",
    "romaji": "su"
  },
  {
    "type": "kana",
    "front": "せ",
    "meaning": "セ",
    "example": "se",
    "hiragana": "せ",
    "katakana": "セ",
    "romaji": "se"
  },
  {
    "type": "kana",
    "front": "そ",
    "meaning": "ソ",
    "example": "so",
    "hiragana": "そ",
    "katakana": "ソ",
    "romaji": "so"
  },
  {
    "type": "kana",
    "front": "た",
    "meaning": "タ",
    "example": "ta",
    "hiragana": "た",
    "katakana": "タ",
    "romaji": "ta"
  },
  {
    "type": "kana",
    "front": "ち",
    "meaning": "チ",
    "example": "chi",
    "hiragana": "ち",
    "katakana": "チ",
    "romaji": "chi"
  },
  {
    "type": "kana",
    "front": "つ",
    "meaning": "ツ",
    "example": "tsu",
    "hiragana": "つ",
    "katakana": "ツ",
    "romaji": "tsu"
  },
  {
    "type": "kana",
    "front": "て",
    "meaning": "テ",
    "example": "te",
    "hiragana": "て",
    "katakana": "テ",
    "romaji": "te"
  },
  {
    "type": "kana",
    "front": "と",
    "meaning": "ト",
    "example": "to",
    "hiragana": "と",
    "katakana": "ト",
    "romaji": "to"
  },
  {
    "type": "kana",
    "front": "な",
    "meaning": "ナ",
    "example": "na",
    "hiragana": "な",
    "katakana": "ナ",
    "romaji": "na"
  },
  {
    "type": "kana",
    "front": "に",
    "meaning": "ニ",
    "example": "ni",
    "hiragana": "に",
    "katakana": "ニ",
    "romaji": "ni"
  },
  {
    "type": "kana",
    "front": "ぬ",
    "meaning": "ヌ",
    "example": "nu",
    "hiragana": "ぬ",
    "katakana": "ヌ",
    "romaji": "nu"
  },
  {
    "type": "kana",
    "front": "ね",
    "meaning": "ネ",
    "example": "ne",
    "hiragana": "ね",
    "katakana": "ネ",
    "romaji": "ne"
  },
  {
    "type": "kana",
    "front": "の",
    "meaning": "ノ",
    "example": "no",
    "hiragana": "の",
    "katakana": "ノ",
    "romaji": "no"
  },
  {
    "type": "kana",
    "front": "は",
    "meaning": "ハ",
    "example": "ha",
    "hiragana": "は",
    "katakana": "ハ",
    "romaji": "ha"
  },
  {
    "type": "kana",
    "front": "ひ",
    "meaning": "ヒ",
    "example": "hi",
    "hiragana": "ひ",
    "katakana": "ヒ",
    "romaji": "hi"
  },
  {
    "type": "kana",
    "front": "ふ",
    "meaning": "フ",
    "example": "fu",
    "hiragana": "ふ",
    "katakana": "フ",
    "romaji": "fu"
  },
  {
    "type": "kana",
    "front": "へ",
    "meaning": "ヘ",
    "example": "he",
    "hiragana": "へ",
    "katakana": "ヘ",
    "romaji": "he"
  },
  {
    "type": "kana",
    "front": "ほ",
    "meaning": "ホ",
    "example": "ho",
    "hiragana": "ほ",
    "katakana": "ホ",
    "romaji": "ho"
  },
  {
    "type": "kana",
    "front": "ま",
    "meaning": "マ",
    "example": "ma",
    "hiragana": "ま",
    "katakana": "マ",
    "romaji": "ma"
  },
  {
    "type": "kana",
    "front": "み",
    "meaning": "ミ",
    "example": "mi",
    "hiragana": "み",
    "katakana": "ミ",
    "romaji": "mi"
  },
  {
    "type": "kana",
    "front": "む",
    "meaning": "ム",
    "example": "mu",
    "hiragana": "む",
    "katakana": "ム",
    "romaji": "mu"
  },
  {
    "type": "kana",
    "front": "め",
    "meaning": "メ",
    "example": "me",
    "hiragana": "め",
    "katakana": "メ",
    "romaji": "me"
  },
  {
    "type": "kana",
    "front": "も",
    "meaning": "モ",
    "example": "mo",
    "hiragana": "も",
    "katakana": "モ",
    "romaji": "mo"
  },
  {
    "type": "kana",
    "front": "や",
    "meaning": "ヤ",
    "example": "ya",
    "hiragana": "や",
    "katakana": "ヤ",
    "romaji": "ya"
  },
  {
    "type": "kana",
    "front": "ゆ",
    "meaning": "ユ",
    "example": "yu",
    "hiragana": "ゆ",
    "katakana": "ユ",
    "romaji": "yu"
  },
  {
    "type": "kana",
    "front": "よ",
    "meaning": "ヨ",
    "example": "yo",
    "hiragana": "よ",
    "katakana": "ヨ",
    "romaji": "yo"
  },
  {
    "type": "kana",
    "front": "ら",
    "meaning": "ラ",
    "example": "ra",
    "hiragana": "ら",
    "katakana": "ラ",
    "romaji": "ra"
  },
  {
    "type": "kana",
    "front": "り",
    "meaning": "リ",
    "example": "ri",
    "hiragana": "り",
    "katakana": "リ",
    "romaji": "ri"
  },
  {
    "type": "kana",
    "front": "る",
    "meaning": "ル",
    "example": "ru",
    "hiragana": "る",
    "katakana": "ル",
    "romaji": "ru"
  },
  {
    "type": "kana",
    "front": "れ",
    "meaning": "レ",
    "example": "re",
    "hiragana": "れ",
    "katakana": "レ",
    "romaji": "re"
  },
  {
    "type": "kana",
    "front": "ろ",
    "meaning": "ロ",
    "example": "ro",
    "hiragana": "ろ",
    "katakana": "ロ",
    "romaji": "ro"
  },
  {
    "type": "kana",
    "front": "わ",
    "meaning": "ワ",
    "example": "wa",
    "hiragana": "わ",
    "katakana": "ワ",
    "romaji": "wa"
  },
  {
    "type": "kana",
    "front": "を",
    "meaning": "ヲ",
    "example": "o",
    "hiragana": "を",
    "katakana": "ヲ",
    "romaji": "o"
  },
  {
    "type": "kana",
    "front": "ん",
    "meaning": "ン",
    "example": "n",
    "hiragana": "ん",
    "katakana": "ン",
    "romaji": "n"
  }
];

window.VOCABULARY = VOCABULARY;
