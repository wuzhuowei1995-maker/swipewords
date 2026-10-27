// SwipeWords：Review 04、05、06 英语词汇与五十音
// 新增口语表达/固定搭配/句型来自用户上传《English Speaking Vocabulary & Natural Expressions》。
// 新增词条与重复匹配词条均采用明确 3 倍基准权重，不与后60%默认权重叠乘。
// 保留英语单卡中英解释与例句。新增 Review 06 场景 40–60 和动作链，按英文正面去重。
// 抽取权重：英文词库前40%为1倍、后60%为3倍；五十音4倍，冷却100次。
const VOCABULARY = [
  {
    "type": "word",
    "front": "straightforward",
    "meaning": "简单直接、不复杂",
    "example": "The route is pretty straightforward from here.",
    "id": "sw-000001"
  },
  {
    "type": "word",
    "front": "tricky / tricky in places",
    "meaning": "棘手的；有些地方比较难",
    "example": "The descent is tricky in places.",
    "id": "sw-000002"
  },
  {
    "type": "word",
    "front": "rough / rough terrain",
    "meaning": "崎岖、难走；崎岖地形",
    "example": "The terrain gets pretty rough further up.",
    "id": "sw-000003"
  },
  {
    "type": "word",
    "front": "steep / get pretty steep",
    "meaning": "陡的；逐渐变陡",
    "example": "The trail gets pretty steep after the junction.",
    "id": "sw-000004"
  },
  {
    "type": "word",
    "front": "muddy / slippery / rocky / uneven",
    "meaning": "泥泞 / 湿滑 / 多石 / 凹凸不平",
    "example": "The trail is muddy, slippery and uneven.",
    "id": "sw-000005"
  },
  {
    "type": "word",
    "front": "narrow / exposed",
    "meaning": "狭窄的 / 暴露感强的",
    "example": "The ridge is narrow and exposed.",
    "id": "sw-000006"
  },
  {
    "type": "word",
    "front": "further up / down / along",
    "meaning": "再往上 / 往下 / 沿路更远处",
    "example": "It gets windier further up.",
    "id": "sw-000007"
  },
  {
    "type": "word",
    "front": "a bit of a climb",
    "meaning": "有一段挺费劲的爬升",
    "example": "It’s a bit of a climb, but nothing too crazy.",
    "id": "sw-000008"
  },
  {
    "type": "word",
    "front": "nothing too crazy / nothing too bad",
    "meaning": "没有特别夸张 / 没那么糟",
    "example": "The next section is steep, but nothing too crazy.",
    "id": "sw-000009"
  },
  {
    "type": "word",
    "front": "watch your footing / watch your step",
    "meaning": "注意脚下",
    "example": "Watch your footing on the wet rocks.",
    "id": "sw-000010"
  },
  {
    "type": "word",
    "front": "push on / keep going",
    "meaning": "继续向前 / 继续走",
    "example": "We decided to push on for another hour.",
    "id": "sw-000011"
  },
  {
    "type": "word",
    "front": "keep a steady pace / pick up the pace",
    "meaning": "保持稳定节奏 / 加快节奏",
    "example": "Keep a steady pace now; we can pick up the pace later.",
    "id": "sw-000012"
  },
  {
    "type": "word",
    "front": "slow going",
    "meaning": "行进缓慢",
    "example": "The deep mud made it slow going.",
    "id": "sw-000013"
  },
  {
    "type": "word",
    "front": "have ... to go",
    "meaning": "还有……路程 / 时间",
    "example": "I’ve still got eight kilometers to go.",
    "id": "sw-000014"
  },
  {
    "type": "word",
    "front": "turn back / head back",
    "meaning": "中止前进掉头 / 开始往回走",
    "example": "If the storm gets worse, we’ll turn back and head back to the hut.",
    "id": "sw-000015"
  },
  {
    "type": "word",
    "front": "keep an eye on",
    "meaning": "持续留意",
    "example": "Let’s keep an eye on the weather.",
    "id": "sw-000016"
  },
  {
    "type": "word",
    "front": "roll in",
    "meaning": "云、雾等逐渐涌来",
    "example": "Dark clouds are starting to roll in.",
    "id": "sw-000017"
  },
  {
    "type": "word",
    "front": "pretty confident I can ...",
    "meaning": "相当有信心能……",
    "example": "I’m pretty confident I can finish the route today.",
    "id": "sw-000018"
  },
  {
    "type": "word",
    "front": "adjust to the altitude",
    "meaning": "适应海拔",
    "example": "I needed some time to adjust to the altitude.",
    "id": "sw-000019"
  },
  {
    "type": "word",
    "front": "light-headed / dizzy",
    "meaning": "头昏发飘 / 眩晕",
    "example": "I felt a little light-headed from the altitude.",
    "id": "sw-000020"
  },
  {
    "type": "word",
    "front": "not worth the risk",
    "meaning": "不值得冒险",
    "example": "The summit isn’t worth the risk in this weather.",
    "id": "sw-000021"
  },
  {
    "type": "word",
    "front": "drizzle / light drizzle",
    "meaning": "毛毛雨 / 小雨",
    "example": "It’s only drizzling right now.",
    "id": "sw-000022"
  },
  {
    "type": "word",
    "front": "light rain / steady rain / heavy rain / pour",
    "meaning": "小雨 / 持续中等雨势 / 大雨 / 倾盆大雨",
    "example": "The drizzle turned into steady rain and then it started pouring.",
    "id": "sw-000023"
  },
  {
    "type": "word",
    "front": "hail / hailstone",
    "meaning": "冰雹 / 一颗冰雹",
    "example": "We turned back when the hail started.",
    "id": "sw-000024"
  },
  {
    "type": "word",
    "front": "light breeze / strong wind / gust / gusty",
    "meaning": "微风 / 强风 / 阵风 / 阵风强的",
    "example": "It’s calm here, but it’s gusty on the ridge.",
    "id": "sw-000025"
  },
  {
    "type": "word",
    "front": "the wind picks up / eases off",
    "meaning": "风逐渐增强 / 减弱",
    "example": "The wind picked up in the afternoon and eased off after sunset.",
    "id": "sw-000026"
  },
  {
    "type": "word",
    "front": "the rain eases off",
    "meaning": "雨势逐渐减弱",
    "example": "The rain should ease off later.",
    "id": "sw-000027"
  },
  {
    "type": "word",
    "front": "clear up",
    "meaning": "天气放晴",
    "example": "The sky started to clear up around noon.",
    "id": "sw-000028"
  },
  {
    "type": "word",
    "front": "cool / chilly / cold / freezing / bitterly cold",
    "meaning": "凉爽 / 凉飕飕 / 冷 / 非常冷 / 刺骨寒冷",
    "example": "It was chilly in town but bitterly cold on the summit.",
    "id": "sw-000029"
  },
  {
    "type": "word",
    "front": "visibility / poor visibility",
    "meaning": "能见度 / 能见度差",
    "example": "Fog rolled in and visibility became poor.",
    "id": "sw-000030"
  },
  {
    "type": "word",
    "front": "have time to myself",
    "meaning": "有自己的独处时间",
    "example": "I enjoy having time to myself.",
    "id": "sw-000031"
  },
  {
    "type": "word",
    "front": "whenever I want",
    "meaning": "想什么时候就什么时候",
    "example": "I can stop whenever I want.",
    "id": "sw-000032"
  },
  {
    "type": "word",
    "front": "if I feel like it / don’t feel like doing",
    "meaning": "如果我想的话 / 不太想做",
    "example": "I’ll sing if I feel like it, but I don’t feel like talking.",
    "id": "sw-000033"
  },
  {
    "type": "word",
    "front": "too much hassle",
    "meaning": "太折腾、太麻烦",
    "example": "Camping feels like too much hassle tonight.",
    "id": "sw-000034"
  },
  {
    "type": "word",
    "front": "be supposed to",
    "meaning": "按计划/规定本来应该",
    "example": "We were supposed to meet at seven.",
    "id": "sw-000035"
  },
  {
    "type": "word",
    "front": "at the last minute",
    "meaning": "临到最后一刻",
    "example": "He cancelled at the last minute.",
    "weight": 3,
    "id": "sw-000036"
  },
  {
    "type": "word",
    "front": "something came up",
    "meaning": "突然有事",
    "example": "Sorry, something came up.",
    "id": "sw-000037"
  },
  {
    "type": "word",
    "front": "push something back",
    "meaning": "把安排往后推",
    "example": "Can we push dinner back by half an hour?",
    "id": "sw-000038"
  },
  {
    "type": "word",
    "front": "wait around",
    "meaning": "在那儿干等",
    "example": "I don’t want to wait around for two hours.",
    "id": "sw-000039"
  },
  {
    "type": "word",
    "front": "end up doing",
    "meaning": "最终做了……",
    "example": "We ended up ordering pizza.",
    "id": "sw-000040"
  },
  {
    "type": "word",
    "front": "running late",
    "meaning": "要迟到了",
    "example": "I’m running a little late.",
    "id": "sw-000041"
  },
  {
    "type": "word",
    "front": "make it / barely make it",
    "meaning": "赶到、做到 / 勉强赶上",
    "example": "I barely made the train.",
    "id": "sw-000042"
  },
  {
    "type": "word",
    "front": "keep to myself",
    "meaning": "自己待着、不太主动社交",
    "example": "I usually keep to myself on long trips.",
    "id": "sw-000043"
  },
  {
    "type": "word",
    "front": "strike up a conversation",
    "meaning": "主动聊起来",
    "example": "I struck up a conversation with another hiker.",
    "id": "sw-000044"
  },
  {
    "type": "word",
    "front": "see things the same way",
    "meaning": "看法相近",
    "example": "We seem to see things the same way.",
    "id": "sw-000045"
  },
  {
    "type": "word",
    "front": "go our separate ways",
    "meaning": "各自离开、分道而行",
    "example": "We talked until we went our separate ways.",
    "id": "sw-000046"
  },
  {
    "type": "word",
    "front": "have the whole place to myself",
    "meaning": "整个地方几乎只有自己",
    "example": "I had the whole trail to myself.",
    "id": "sw-000047"
  },
  {
    "type": "word",
    "front": "a sense of freedom",
    "meaning": "自由感",
    "example": "The empty valley gave me a real sense of freedom.",
    "id": "sw-000048"
  },
  {
    "type": "word",
    "front": "self-conscious",
    "meaning": "因在意别人眼光而不自在",
    "example": "I’m a little self-conscious about singing around other people.",
    "id": "sw-000049"
  },
  {
    "type": "word",
    "front": "upbeat",
    "meaning": "轻快、让人兴奋的",
    "example": "I sing something upbeat when I’m in a good mood.",
    "id": "sw-000050"
  },
  {
    "type": "word",
    "front": "come to mind",
    "meaning": "浮现在脑海",
    "example": "Sometimes an old song comes to mind.",
    "id": "sw-000051"
  },
  {
    "type": "word",
    "front": "stuffy / fresh air",
    "meaning": "闷、不通风 / 新鲜空气",
    "example": "The room was stuffy, so I opened the window to let some fresh air in.",
    "id": "sw-000052"
  },
  {
    "type": "word",
    "front": "slam the door",
    "meaning": "砰地关门",
    "example": "Someone kept slamming the door.",
    "id": "sw-000053"
  },
  {
    "type": "word",
    "front": "keep someone up",
    "meaning": "让某人睡不着",
    "example": "The noise kept me up for hours.",
    "id": "sw-000054"
  },
  {
    "type": "word",
    "front": "soaked / wet / damp / dry",
    "meaning": "湿透 / 湿 / 潮湿 / 干燥",
    "example": "My jacket was damp, but my shoes were completely soaked.",
    "id": "sw-000055"
  },
  {
    "type": "word",
    "front": "leak / spill / drip / drain / splatter",
    "meaning": "漏 / 洒 / 滴 / 排走 / 四处飞溅",
    "example": "The bottle leaked, I spilled some water, the tap dripped, the sink drained slowly, and hot oil splattered everywhere.",
    "id": "sw-000056"
  },
  {
    "type": "word",
    "front": "drag / bulky / get stuck / squeeze through",
    "meaning": "拖 / 大而笨重 / 卡住 / 挤过去",
    "example": "I dragged my bulky suitcase through the crowd when one wheel got stuck.",
    "id": "sw-000057"
  },
  {
    "type": "word",
    "front": "stale / fresh",
    "meaning": "不新鲜 / 新鲜",
    "example": "The bread has gone stale.",
    "id": "sw-000058"
  },
  {
    "type": "word",
    "front": "firm / mushy",
    "meaning": "紧实 / 软烂",
    "example": "The peach was firm yesterday but mushy today.",
    "id": "sw-000059"
  },
  {
    "type": "word",
    "front": "unripe → ripe → overripe → rotten",
    "meaning": "未熟 → 成熟 → 熟过头 → 腐烂",
    "example": "The bananas went from unripe to ripe, then overripe, and finally rotten.",
    "id": "sw-000060"
  },
  {
    "type": "word",
    "front": "rot / go bad / use up",
    "meaning": "腐烂 / 变质 / 用完",
    "example": "Use up the tomatoes before they go bad and start to rot.",
    "id": "sw-000061"
  },
  {
    "type": "word",
    "front": "clogged / drain",
    "meaning": "堵塞 / 排水",
    "example": "The sink is clogged and the water won’t drain properly.",
    "id": "sw-000062"
  },
  {
    "type": "word",
    "front": "loose / tight",
    "meaning": "松 / 紧",
    "example": "The handle is loose, but the lid is too tight.",
    "id": "sw-000063"
  },
  {
    "type": "word",
    "front": "crack / cracked",
    "meaning": "裂缝 / 裂开的",
    "example": "There’s a crack in the wall and my phone screen is cracked.",
    "id": "sw-000064"
  },
  {
    "type": "word",
    "front": "get something fixed",
    "meaning": "找人把某物修好",
    "example": "I need to get the sink fixed.",
    "id": "sw-000065"
  },
  {
    "type": "word",
    "front": "fit / suit",
    "meaning": "尺寸合身 / 风格颜色适合",
    "example": "The jacket fits well, and the color suits you.",
    "id": "sw-000066"
  },
  {
    "type": "word",
    "front": "tight around / loose around",
    "meaning": "某部位勒 / 松",
    "example": "The shirt is tight around the shoulders but loose around the waist.",
    "id": "sw-000067"
  },
  {
    "type": "word",
    "front": "stiff / flexible / soft",
    "meaning": "僵硬 / 灵活柔韧 / 柔软",
    "example": "The new boots are stiff, but they should soften up with use.",
    "id": "sw-000068"
  },
  {
    "type": "word",
    "front": "wrinkled / smooth",
    "meaning": "皱巴巴 / 平整",
    "example": "The shirt was wrinkled, but it looked smooth after ironing.",
    "id": "sw-000069"
  },
  {
    "type": "word",
    "front": "faded / bright",
    "meaning": "褪色 / 鲜亮",
    "example": "The old jacket is faded; the new one is much brighter.",
    "id": "sw-000070"
  },
  {
    "type": "word",
    "front": "worn / worn out / brand-new",
    "meaning": "有磨损 / 磨坏 / 崭新",
    "example": "The soles are worn, but not completely worn out yet.",
    "id": "sw-000071"
  },
  {
    "type": "word",
    "front": "sore / stiff",
    "meaning": "酸痛 / 僵硬",
    "example": "My legs are sore and stiff after the hike.",
    "id": "sw-000072"
  },
  {
    "type": "word",
    "front": "numb / go numb",
    "meaning": "麻木 / 变麻",
    "example": "My fingers started to go numb in the cold.",
    "id": "sw-000073"
  },
  {
    "type": "word",
    "front": "blister / heel",
    "meaning": "水泡 / 脚后跟",
    "example": "I’ve got a blister on my heel.",
    "id": "sw-000074"
  },
  {
    "type": "word",
    "front": "irritated / swollen / swell up",
    "meaning": "受刺激不适 / 肿的 / 肿起来",
    "example": "The skin is irritated and my ankle has started to swell up.",
    "id": "sw-000075"
  },
  {
    "type": "word",
    "front": "take it easy",
    "meaning": "悠着点、休息一下",
    "example": "My knee is sore, so I’m taking it easy today.",
    "id": "sw-000076"
  },
  {
    "type": "word",
    "front": "bland / flavorful / rich",
    "meaning": "寡淡 / 有味道 / 味道浓郁",
    "example": "The soup is bland, but the sauce is rich and flavorful.",
    "id": "sw-000077"
  },
  {
    "type": "word",
    "front": "tender / tough",
    "meaning": "嫩 / 老、难嚼",
    "example": "The chicken is tender, but the beef is a little tough.",
    "id": "sw-000078"
  },
  {
    "type": "word",
    "front": "juicy / dry",
    "meaning": "多汁 / 干柴",
    "example": "The chicken is juicy inside, not dry.",
    "id": "sw-000079"
  },
  {
    "type": "word",
    "front": "crispy / soggy",
    "meaning": "酥脆 / 湿软",
    "example": "The fries were crispy at first but turned soggy later.",
    "id": "sw-000080"
  },
  {
    "type": "word",
    "front": "greasy",
    "meaning": "油腻的",
    "example": "The burger was too greasy.",
    "id": "sw-000081"
  },
  {
    "type": "word",
    "front": "sweet / sour / salty / bitter / spicy",
    "meaning": "甜 / 酸 / 咸 / 苦 / 辣",
    "example": "The sauce is sweet and sour, while the coffee is bitter.",
    "id": "sw-000082"
  },
  {
    "type": "word",
    "front": "aftertaste",
    "meaning": "余味",
    "example": "The coffee has a slightly bitter aftertaste.",
    "id": "sw-000083"
  },
  {
    "type": "word",
    "front": "decent / excellent / disappointing",
    "meaning": "还不错 / 很棒 / 令人失望",
    "example": "The meal was decent, but not excellent.",
    "id": "sw-000084"
  },
  {
    "type": "word",
    "front": "starving / hungry / full / stuffed",
    "meaning": "饿坏了 / 饿 / 饱 / 撑得很饱",
    "example": "I was starving before dinner and absolutely stuffed afterward.",
    "id": "sw-000085"
  },
  {
    "type": "word",
    "front": "undercooked → properly cooked → overcooked → burnt",
    "meaning": "没熟透 → 熟得刚好 → 煮过头 → 烧焦",
    "example": "The chicken was undercooked, while the vegetables were overcooked and the toast was burnt.",
    "id": "sw-000086"
  },
  {
    "type": "word",
    "front": "chop / slice / dice",
    "meaning": "切块 / 切片 / 切丁",
    "example": "Chop the carrots, slice the tomatoes and dice the onions.",
    "id": "sw-000087"
  },
  {
    "type": "word",
    "front": "peel",
    "meaning": "削皮、剥皮",
    "example": "Peel the potatoes first.",
    "id": "sw-000088"
  },
  {
    "type": "word",
    "front": "throw something in",
    "meaning": "随手放进去",
    "example": "Throw the onions into the pan.",
    "id": "sw-000089"
  },
  {
    "type": "word",
    "front": "stir / give it a quick stir",
    "meaning": "搅拌 / 快速搅几下",
    "example": "Give the sauce a quick stir.",
    "id": "sw-000090"
  },
  {
    "type": "word",
    "front": "messy / tidy",
    "meaning": "乱糟糟 / 整齐",
    "example": "The room is messy now, but it’ll be tidy after I clean it.",
    "id": "sw-000091"
  },
  {
    "type": "word",
    "front": "scattered all over",
    "meaning": "散落得到处都是",
    "example": "Clothes were scattered all over the floor.",
    "id": "sw-000092"
  },
  {
    "type": "word",
    "front": "pile up / a pile of",
    "meaning": "堆积 / 一堆",
    "example": "Laundry is piling up beside the bed.",
    "id": "sw-000093"
  },
  {
    "type": "word",
    "front": "stuff something into",
    "meaning": "把某物硬塞进",
    "example": "I stuffed my jacket into my backpack.",
    "id": "sw-000094"
  },
  {
    "type": "word",
    "front": "sort out",
    "meaning": "整理好；解决",
    "example": "I need to sort out my room and sort out the booking problem.",
    "id": "sw-000095"
  },
  {
    "type": "word",
    "front": "wipe / wipe down / sweep / mop",
    "meaning": "擦 / 整体擦一遍 / 扫 / 拖",
    "example": "Wipe down the counter, sweep the floor, then mop it.",
    "id": "sw-000096"
  },
  {
    "type": "word",
    "front": "throw out / throw away",
    "meaning": "扔掉",
    "example": "I threw out a pile of junk.",
    "id": "sw-000097"
  },
  {
    "type": "word",
    "front": "random stuff / junk",
    "meaning": "乱七八糟的东西 / 没用的杂物",
    "example": "There’s a bunch of random stuff in the corner.",
    "id": "sw-000098"
  },
  {
    "type": "word",
    "front": "act up",
    "meaning": "出毛病、不正常工作",
    "example": "My phone has been acting up lately.",
    "id": "sw-000099"
  },
  {
    "type": "word",
    "front": "freeze / frozen",
    "meaning": "卡死 / 卡住的",
    "example": "The screen froze and stopped responding.",
    "id": "sw-000100"
  },
  {
    "type": "word",
    "front": "take forever to load",
    "meaning": "加载慢得要命",
    "example": "This page takes forever to load.",
    "id": "sw-000101"
  },
  {
    "type": "word",
    "front": "drain the battery",
    "meaning": "耗电",
    "example": "Navigation apps drain the battery quickly.",
    "id": "sw-000102"
  },
  {
    "type": "word",
    "front": "respond / stop responding",
    "meaning": "响应 / 没反应",
    "example": "The touchscreen stopped responding.",
    "id": "sw-000103"
  },
  {
    "type": "word",
    "front": "restart / turn it off and back on",
    "meaning": "重启 / 关掉再打开",
    "example": "Try restarting it or turning it off and back on.",
    "id": "sw-000104"
  },
  {
    "type": "word",
    "front": "wiggle the cable",
    "meaning": "来回晃动线缆",
    "example": "I have to wiggle the cable to make it charge.",
    "id": "sw-000105"
  },
  {
    "type": "word",
    "front": "charge / charger / charging cable",
    "meaning": "充电 / 充电器 / 充电线",
    "example": "My charger works, but the charging cable is loose.",
    "id": "sw-000106"
  },
  {
    "type": "word",
    "front": "fall asleep / fall back asleep",
    "meaning": "睡着 / 再次睡着",
    "example": "I woke up at three and couldn’t fall back asleep.",
    "id": "sw-000107"
  },
  {
    "type": "word",
    "front": "toss and turn",
    "meaning": "翻来覆去",
    "example": "I kept tossing and turning.",
    "id": "sw-000108"
  },
  {
    "type": "word",
    "front": "doze off",
    "meaning": "打瞌睡、不知不觉睡着",
    "example": "I dozed off on the bus.",
    "id": "sw-000109"
  },
  {
    "type": "word",
    "front": "startle someone awake",
    "meaning": "突然把某人惊醒",
    "example": "A loud bang startled me awake.",
    "id": "sw-000110"
  },
  {
    "type": "word",
    "front": "oversleep",
    "meaning": "睡过头",
    "example": "I overslept and missed breakfast.",
    "id": "sw-000111"
  },
  {
    "type": "word",
    "front": "rush out the door",
    "meaning": "急匆匆出门",
    "example": "I rushed out the door without coffee.",
    "id": "sw-000112"
  },
  {
    "type": "word",
    "front": "soak something in",
    "meaning": "把某物浸泡在……里",
    "example": "Soak the shirt in warm water.",
    "id": "sw-000113"
  },
  {
    "type": "word",
    "front": "wring out",
    "meaning": "拧出水",
    "example": "Wring out the excess water.",
    "id": "sw-000114"
  },
  {
    "type": "word",
    "front": "hang up to dry / air-dry",
    "meaning": "挂起来晾干 / 自然风干",
    "example": "I hung the shirt up to dry.",
    "id": "sw-000115"
  },
  {
    "type": "word",
    "front": "shrink / stretch",
    "meaning": "缩水 / 拉伸、变松",
    "example": "The sweater shrank, but the waistband stretched over time.",
    "id": "sw-000116"
  },
  {
    "type": "word",
    "front": "crouch down",
    "meaning": "蹲下",
    "example": "I crouched down to look under the bed.",
    "id": "sw-000117"
  },
  {
    "type": "word",
    "front": "reach for / into / underneath",
    "meaning": "伸手去拿 / 伸进 / 伸到下面",
    "example": "I reached into my bag for the charger.",
    "id": "sw-000118"
  },
  {
    "type": "word",
    "front": "out of reach / within easy reach",
    "meaning": "够不着 / 很容易够到",
    "example": "Keep your water within easy reach.",
    "id": "sw-000119"
  },
  {
    "type": "word",
    "front": "lean forward / lean back / lean against",
    "meaning": "前倾 / 后靠 / 靠着",
    "example": "I leaned against the wall while waiting.",
    "id": "sw-000120"
  },
  {
    "type": "word",
    "front": "stretch / stretch my legs",
    "meaning": "伸展 / 活动腿脚",
    "example": "I got off the bus to stretch my legs.",
    "id": "sw-000121"
  },
  {
    "type": "word",
    "front": "get hold of",
    "meaning": "抓到、拿到；联系上",
    "example": "I finally got hold of the strap.",
    "id": "sw-000122"
  },
  {
    "type": "word",
    "front": "dent / dented",
    "meaning": "凹痕 / 凹陷的",
    "example": "There’s a dent in the bottle.",
    "id": "sw-000123"
  },
  {
    "type": "word",
    "front": "crush / crushed",
    "meaning": "压扁、压坏",
    "example": "My sandwich got crushed in my bag.",
    "id": "sw-000124"
  },
  {
    "type": "word",
    "front": "peel off",
    "meaning": "翘起、剥落",
    "example": "The paint is peeling off the wall.",
    "id": "sw-000125"
  },
  {
    "type": "word",
    "front": "tear open",
    "meaning": "撕开",
    "example": "I tore the package open.",
    "id": "sw-000126"
  },
  {
    "type": "word",
    "front": "scratch / scratched",
    "meaning": "划痕 / 被划伤",
    "example": "The case is scratched but not cracked.",
    "id": "sw-000127"
  },
  {
    "type": "word",
    "front": "in poor / good / perfect condition",
    "meaning": "状态差 / 良好 / 完好",
    "example": "The bike is old but still in good condition.",
    "id": "sw-000128"
  },
  {
    "type": "word",
    "front": "faint / noticeable / loud",
    "meaning": "微弱 / 明显 / 响亮",
    "example": "The faint buzz became noticeably louder.",
    "id": "sw-000129"
  },
  {
    "type": "word",
    "front": "buzz / buzzing",
    "meaning": "嗡嗡声",
    "example": "I heard a buzzing sound near the window.",
    "id": "sw-000130"
  },
  {
    "type": "word",
    "front": "hum / humming",
    "meaning": "机器低沉持续嗡鸣",
    "example": "The fridge was humming quietly.",
    "id": "sw-000131"
  },
  {
    "type": "word",
    "front": "creak",
    "meaning": "吱呀响",
    "example": "The old door creaked open.",
    "id": "sw-000132"
  },
  {
    "type": "word",
    "front": "rattle",
    "meaning": "松动物体咔啦响",
    "example": "The window rattled in the wind.",
    "id": "sw-000133"
  },
  {
    "type": "word",
    "front": "rustle",
    "meaning": "树叶、纸袋等沙沙响",
    "example": "I heard leaves rustling outside.",
    "id": "sw-000134"
  },
  {
    "type": "word",
    "front": "turn out to be",
    "meaning": "结果发现原来是",
    "example": "The strange sound turned out to be the fridge.",
    "id": "sw-000135"
  },
  {
    "type": "word",
    "front": "every now and then",
    "meaning": "时不时",
    "example": "Every now and then, the floorboards creak.",
    "id": "sw-000136"
  },
  {
    "type": "word",
    "front": "absolutely packed / crowded / empty",
    "meaning": "挤满 / 拥挤 / 空荡",
    "example": "The carriage was absolutely packed, but the next one was almost empty.",
    "id": "sw-000137"
  },
  {
    "type": "word",
    "front": "aisle / block the aisle / be in the way",
    "meaning": "过道 / 挡住过道 / 挡路",
    "example": "Your suitcase is blocking the aisle and getting in the way.",
    "id": "sw-000138"
  },
  {
    "type": "word",
    "front": "squeeze through / squeeze past",
    "meaning": "从中挤过 / 从某人身边挤过",
    "example": "I squeezed through the crowd and squeezed past two passengers.",
    "id": "sw-000139"
  },
  {
    "type": "word",
    "front": "bumpy / smooth",
    "meaning": "颠簸 / 平稳",
    "example": "The first half of the ride was bumpy, but the road became smooth later.",
    "id": "sw-000140"
  },
  {
    "type": "word",
    "front": "slide around",
    "meaning": "滑来滑去",
    "example": "The bottle kept sliding around on the seat.",
    "id": "sw-000141"
  },
  {
    "type": "word",
    "front": "take a wrong turn / go the wrong way",
    "meaning": "拐错弯 / 走错方向",
    "example": "We took a wrong turn and went the wrong way.",
    "id": "sw-000142"
  },
  {
    "type": "word",
    "front": "walk right past / overshoot",
    "meaning": "直接走过头 / 超过目标位置",
    "example": "I walked right past the café and overshot the turn.",
    "id": "sw-000143"
  },
  {
    "type": "word",
    "front": "detour / shortcut",
    "meaning": "绕路 / 捷径",
    "example": "We took a detour, then found a shortcut through the park.",
    "id": "sw-000144"
  },
  {
    "type": "word",
    "front": "backtrack",
    "meaning": "沿原路折返",
    "example": "We backtracked to the last junction.",
    "id": "sw-000145"
  },
  {
    "type": "word",
    "front": "cut through",
    "meaning": "穿过某处抄近路",
    "example": "We cut through a narrow alley.",
    "id": "sw-000146"
  },
  {
    "type": "word",
    "front": "get around",
    "meaning": "在某地出行",
    "example": "The city is easy to get around on foot.",
    "id": "sw-000147"
  },
  {
    "type": "word",
    "front": "wait in line / queue / cut in line",
    "meaning": "排队 / 排队 / 插队",
    "example": "Someone cut in line while we were waiting.",
    "id": "sw-000148"
  },
  {
    "type": "word",
    "front": "tap someone on the shoulder",
    "meaning": "轻拍肩膀",
    "example": "I tapped him on the shoulder.",
    "id": "sw-000149"
  },
  {
    "type": "word",
    "front": "step aside / go ahead",
    "meaning": "让到一边 / 你先",
    "example": "He stepped aside and told me to go ahead.",
    "id": "sw-000150"
  },
  {
    "type": "word",
    "front": "bump into / bump my head",
    "meaning": "撞到、偶遇 / 撞到头",
    "example": "I bumped into a friend after bumping my head on the shelf.",
    "id": "sw-000151"
  },
  {
    "type": "word",
    "front": "stop by",
    "meaning": "顺路去一下",
    "example": "I stopped by the supermarket on my way home.",
    "id": "sw-000152"
  },
  {
    "type": "word",
    "front": "pick up / pick out",
    "meaning": "顺手买/拿/接 / 挑选出来",
    "example": "I picked up some fruit and picked out three firm apples.",
    "id": "sw-000153"
  },
  {
    "type": "word",
    "front": "grab",
    "meaning": "随手拿、快速拿",
    "example": "I grabbed my keys and left.",
    "id": "sw-000154"
  },
  {
    "type": "word",
    "front": "look through",
    "meaning": "翻看、逐个查看",
    "example": "I looked through the apples for a firm one.",
    "id": "sw-000155"
  },
  {
    "type": "word",
    "front": "bruise / bruised",
    "meaning": "淤青、碰伤 / 碰伤的",
    "example": "The peach was bruised, and I had a bruise on my knee.",
    "id": "sw-000156"
  },
  {
    "type": "word",
    "front": "soft spot",
    "meaning": "软掉的一块",
    "example": "This apple has a soft spot.",
    "id": "sw-000157"
  },
  {
    "type": "word",
    "front": "weigh / weight",
    "meaning": "称重 / 重量",
    "example": "I weighed the fruit before checkout.",
    "id": "sw-000158"
  },
  {
    "type": "word",
    "front": "stick something on",
    "meaning": "把某物贴上去",
    "example": "Stick the label on the bag.",
    "id": "sw-000159"
  },
  {
    "type": "word",
    "front": "wander around",
    "meaning": "随便逛逛",
    "example": "We wandered around the old town for an hour.",
    "id": "sw-000160"
  },
  {
    "type": "word",
    "front": "head to",
    "meaning": "朝……去",
    "example": "I headed to the checkout.",
    "id": "sw-000161"
  },
  {
    "type": "word",
    "front": "something feels off",
    "meaning": "感觉哪里不对",
    "example": "Something feels off with the bike.",
    "id": "sw-000162"
  },
  {
    "type": "word",
    "front": "rub against",
    "meaning": "摩擦、蹭着",
    "example": "The brake is rubbing against the wheel.",
    "id": "sw-000163"
  },
  {
    "type": "word",
    "front": "slip / slippery",
    "meaning": "打滑 / 湿滑的",
    "example": "My foot slipped because the rock was slippery.",
    "id": "sw-000164"
  },
  {
    "type": "word",
    "front": "pedal",
    "meaning": "蹬自行车；脚踏",
    "example": "I pedaled harder on the climb.",
    "id": "sw-000165"
  },
  {
    "type": "word",
    "front": "go flat / flat tire",
    "meaning": "轮胎逐渐瘪 / 瘪胎",
    "example": "The rear tire is going flat.",
    "id": "sw-000166"
  },
  {
    "type": "word",
    "front": "pull over",
    "meaning": "靠边停下",
    "example": "I pulled over to check the tire.",
    "id": "sw-000167"
  },
  {
    "type": "word",
    "front": "puncture",
    "meaning": "扎破的小孔、爆胎破损",
    "example": "I found a small puncture in the tube.",
    "id": "sw-000168"
  },
  {
    "type": "word",
    "front": "pump up / let the air out",
    "meaning": "打气 / 放气",
    "example": "Pump the tire up, then let a little air out if it feels too hard.",
    "id": "sw-000169"
  },
  {
    "type": "word",
    "front": "properly / temporary fix",
    "meaning": "妥当地 / 临时修补",
    "example": "This is only a temporary fix; I’ll get it repaired properly later.",
    "id": "sw-000170"
  },
  {
    "type": "word",
    "front": "scan / scan the crowd",
    "meaning": "扫视、搜索",
    "example": "I scanned the crowd for my friend.",
    "id": "sw-000171"
  },
  {
    "type": "word",
    "front": "spot",
    "meaning": "从环境中发现",
    "example": "I spotted him near the entrance.",
    "id": "sw-000172"
  },
  {
    "type": "word",
    "front": "catch sight of / lose sight of",
    "meaning": "突然瞥见 / 从视野中消失",
    "example": "I caught sight of him, then lost sight of him again.",
    "id": "sw-000173"
  },
  {
    "type": "word",
    "front": "recognize",
    "meaning": "认出来",
    "example": "I recognized him by his red jacket.",
    "id": "sw-000174"
  },
  {
    "type": "word",
    "front": "wave / get someone’s attention",
    "meaning": "挥手 / 引起某人注意",
    "example": "I waved to get his attention.",
    "id": "sw-000175"
  },
  {
    "type": "word",
    "front": "make my way through / up / back",
    "meaning": "穿行 / 一路向上 / 一路返回",
    "example": "I made my way through the crowd and back to the station.",
    "id": "sw-000176"
  },
  {
    "type": "word",
    "front": "walk up to / come up to",
    "meaning": "走到某人面前 / 朝某人走过来",
    "example": "I walked up to him just as he came up to me.",
    "id": "sw-000177"
  },
  {
    "type": "pattern",
    "front": "get + adjective",
    "meaning": "逐渐进入某种状态",
    "example": "The trail gets steep; the room gets stuffy; the food gets soggy.",
    "id": "sw-000178"
  },
  {
    "type": "pattern",
    "front": "go + state adjective",
    "meaning": "变成某种状态",
    "example": "Bread goes stale, milk goes bad, and fingers go numb.",
    "id": "sw-000179"
  },
  {
    "type": "pattern",
    "front": "keep + -ing",
    "meaning": "持续或反复发生",
    "example": "The phone keeps freezing and the window keeps rattling.",
    "id": "sw-000180"
  },
  {
    "type": "pattern",
    "front": "end up + -ing",
    "meaning": "最终做了某事",
    "example": "We ended up backtracking for twenty minutes.",
    "id": "sw-000181"
  },
  {
    "type": "pattern",
    "front": "turn out to be + noun/adjective",
    "meaning": "最后发现原来是……",
    "example": "The shortcut turned out to be much steeper.",
    "id": "sw-000182"
  },
  {
    "type": "pattern",
    "front": "I was trying to ... when ...",
    "meaning": "正在做 A 时发生 B",
    "example": "I was trying to fall asleep when the wind picked up.",
    "id": "sw-000183"
  },
  {
    "type": "pattern",
    "front": "make + object + adjective",
    "meaning": "使……变成某状态",
    "example": "The rain made the trail slippery.",
    "id": "sw-000184"
  },
  {
    "type": "pattern",
    "front": "get + object + past participle",
    "meaning": "找人/设法把某物处理好",
    "example": "I need to get my bike fixed properly.",
    "id": "sw-000185"
  },
  {
    "type": "pattern",
    "front": "It’s worth / not worth + noun or -ing",
    "meaning": "值得 / 不值得",
    "example": "The view is worth the climb, but the summit isn’t worth the risk today.",
    "id": "sw-000186"
  },
  {
    "type": "pattern",
    "front": "I’ve still got ... to go",
    "meaning": "还剩……",
    "example": "I’ve still got another five kilometers to go.",
    "id": "sw-000187"
  },
  {
    "type": "pattern",
    "front": "as ... as I can",
    "meaning": "尽可能……",
    "example": "I stretched my arm as far as I could.",
    "id": "sw-000188"
  },
  {
    "type": "pattern",
    "front": "rather than",
    "meaning": "而不是",
    "example": "I’d rather backtrack than take a risky shortcut.",
    "id": "sw-000189"
  },
  {
    "type": "ladder",
    "front": "unripe → ripe → overripe → rotten",
    "meaning": "未熟 → 成熟 → 熟过头 → 腐烂",
    "example": "These peaches are still unripe; those are ripe; the soft ones are overripe; and the dark one is rotten.",
    "id": "sw-000190"
  },
  {
    "type": "ladder",
    "front": "drizzle → light rain → steady rain → heavy rain → pour",
    "meaning": "毛毛雨 → 小雨 → 持续中等雨势 → 大雨 → 倾盆大雨",
    "example": "It started as a drizzle, became steady rain, and was pouring by noon.",
    "id": "sw-000191"
  },
  {
    "type": "ladder",
    "front": "calm → light breeze → windy → strong wind → gusty",
    "meaning": "平静无风 → 微风 → 有风 → 强风 → 阵风很强",
    "example": "The valley was calm, but the ridge was windy and extremely gusty.",
    "id": "sw-000192"
  },
  {
    "type": "ladder",
    "front": "cool → chilly → cold → freezing → bitterly cold",
    "meaning": "凉爽 → 凉飕飕 → 冷 → 非常冷 → 刺骨寒冷",
    "example": "It was cool in town, chilly in the forest, and bitterly cold above the tree line.",
    "id": "sw-000193"
  },
  {
    "type": "ladder",
    "front": "damp → wet → soaked",
    "meaning": "潮湿 → 湿 → 湿透",
    "example": "My sleeves were damp, my trousers were wet, and my shoes were soaked.",
    "id": "sw-000194"
  },
  {
    "type": "ladder",
    "front": "quiet/empty → busy → crowded → packed",
    "meaning": "空闲/空荡 → 忙、人多 → 拥挤 → 挤满",
    "example": "The café was quiet at noon, busy at five, crowded at seven and absolutely packed by eight.",
    "id": "sw-000195"
  },
  {
    "type": "ladder",
    "front": "undercooked → properly cooked → overcooked → burnt",
    "meaning": "没熟透 → 熟得刚好 → 煮过头 → 烧焦",
    "example": "The center was undercooked, the next piece was perfect, and the last one was burnt.",
    "id": "sw-000196"
  },
  {
    "type": "ladder",
    "front": "crispy ↔ soggy; firm ↔ mushy; tender ↔ tough; juicy ↔ dry",
    "meaning": "酥脆 ↔ 湿软；紧实 ↔ 软烂；嫩 ↔ 老；多汁 ↔ 干柴",
    "example": "The fries went from crispy to soggy, while the vegetables went from firm to mushy.",
    "id": "sw-000197"
  },
  {
    "type": "ladder",
    "front": "too tight → snug → fits well → loose → too loose",
    "meaning": "太紧 → 贴身但舒适 → 合身 → 松 → 太松",
    "example": "The first jacket is too tight, the second is snug, and the third fits perfectly.",
    "id": "sw-000198"
  },
  {
    "type": "ladder",
    "front": "brand-new → like new → in good condition → worn → worn out",
    "meaning": "崭新 → 几乎全新 → 状态良好 → 有磨损 → 磨坏",
    "example": "The boots were brand-new last year; now they’re worn but not worn out.",
    "id": "sw-000199"
  },
  {
    "type": "ladder",
    "front": "faint → noticeable → loud → deafening",
    "meaning": "微弱 → 明显 → 响亮 → 震耳欲聋",
    "example": "The faint rattle became loud enough to keep me awake.",
    "id": "sw-000200"
  },
  {
    "type": "ladder",
    "front": "straightforward → tricky → rough → technical",
    "meaning": "直接简单 → 棘手 → 崎岖难走 → 技术性强",
    "example": "The lower trail is straightforward, the middle is rough, and the final section is more technical.",
    "id": "sw-000201"
  },
  {
    "type": "ladder",
    "front": "a little tired → tired → worn out / a little hungry → hungry → starving",
    "meaning": "有点累 → 累 → 累坏 / 有点饿 → 饿 → 饿坏",
    "example": "I was tired at noon and completely worn out by sunset; I was hungry at first and starving by dinner.",
    "id": "sw-000202"
  },
  {
    "type": "ladder",
    "front": "within reach ↔ out of reach; catch sight of ↔ lose sight of",
    "meaning": "够得到 ↔ 够不到；瞥见 ↔ 从视野中消失",
    "example": "The bottle was within reach, but the hiker disappeared behind the ridge and I lost sight of him.",
    "id": "sw-000203"
  },
  {
    "type": "ladder",
    "front": "direct route ↔ detour; shortcut ↔ backtrack",
    "meaning": "直接路线 ↔ 绕路；捷径 ↔ 原路折返",
    "example": "The shortcut was blocked, so we backtracked and took a detour.",
    "id": "sw-000204"
  },
  {
    "type": "ladder",
    "front": "scratch → dent → crack → crush/break",
    "meaning": "划痕 → 凹陷 → 裂开 → 压坏/破坏",
    "example": "The case was scratched, the corner was dented, but nothing was cracked or crushed.",
    "id": "sw-000205"
  },
  {
    "type": "ladder",
    "front": "awake → sleepy → doze off → fall asleep → wake up",
    "meaning": "清醒 → 困倦 → 打盹 → 睡着 → 醒来",
    "example": "I felt sleepy on the bus, dozed off for a few minutes, then fell asleep properly at the hotel.",
    "id": "sw-000206"
  },
  {
    "type": "word",
    "front": "soften up / harden",
    "meaning": "逐渐变软 / 变硬",
    "example": "These boots should soften up; wet mud hardens when it dries.",
    "id": "sw-000207"
  },
  {
    "type": "word",
    "front": "fade / brighten",
    "meaning": "褪色 / 变亮",
    "example": "The fabric faded in the sun, but the sky brightened after the storm.",
    "id": "sw-000208"
  },
  {
    "type": "word",
    "front": "loosen / tighten",
    "meaning": "变松/松开 / 变紧/拧紧",
    "example": "The strap loosened, so I tightened it.",
    "id": "sw-000209"
  },
  {
    "type": "word",
    "front": "swell / shrink",
    "meaning": "膨胀、肿 / 收缩、缩水",
    "example": "My ankle swelled up while the wet shirt shrank in the dryer.",
    "id": "sw-000210"
  },
  {
    "type": "word",
    "front": "speed up / slow down",
    "meaning": "加速 / 减速",
    "example": "We sped up on the flat section and slowed down on the slippery descent.",
    "id": "sw-000211"
  },
  {
    "type": "word",
    "front": "clear / cloudy / overcast",
    "meaning": "晴朗 / 多云 / 阴天",
    "example": "The morning was cloudy, then overcast, and finally cleared up.",
    "id": "sw-000212"
  },
  {
    "type": "word",
    "front": "smooth / rough / bumpy",
    "meaning": "平滑 / 粗糙崎岖 / 颠簸",
    "example": "The road changed from smooth pavement to rough gravel and became very bumpy.",
    "id": "sw-000213"
  },
  {
    "type": "word",
    "front": "quiet / faint / noisy / loud",
    "meaning": "安静 / 微弱 / 嘈杂 / 响亮",
    "example": "The room was quiet until a faint hum became a loud rattle.",
    "id": "sw-000214"
  },
  {
    "type": "word",
    "front": "notice / spot / catch sight of / recognize",
    "meaning": "注意到 / 发现目标 / 突然瞥见 / 认出来",
    "example": "I noticed movement, spotted a person, caught sight of a red jacket and recognized my friend.",
    "id": "sw-000215"
  },
  {
    "type": "word",
    "front": "put / grab / pick up / pick out / get hold of",
    "meaning": "放/拿的泛化动作 / 随手抓 / 顺手拿或买 / 从多个中挑 / 终于抓到拿到",
    "example": "I grabbed a bag, picked up some fruit, picked out two apples and finally got hold of the last bottle.",
    "id": "sw-000216"
  },
  {
    "type": "word",
    "front": "trip over",
    "meaning": "被……绊到",
    "example": "I tripped over a loose rock.",
    "id": "sw-000217"
  },
  {
    "type": "word",
    "front": "loose rock / solid rock",
    "meaning": "松动石块 / 稳固岩石",
    "example": "Test the rock before putting your full weight on it. Loose rock can shift.",
    "id": "sw-000218"
  },
  {
    "type": "word",
    "front": "stable / unstable",
    "meaning": "稳定的 / 不稳定的",
    "example": "The ground feels unstable near the edge.",
    "id": "sw-000219"
  },
  {
    "type": "word",
    "front": "stumble forward",
    "meaning": "向前踉跄",
    "example": "I stumbled forward but didn’t fall.",
    "id": "sw-000220"
  },
  {
    "type": "word",
    "front": "lose / regain your balance",
    "meaning": "失去 / 恢复平衡",
    "example": "I lost my balance, grabbed a branch and regained it.",
    "id": "sw-000221"
  },
  {
    "type": "word",
    "front": "instinctively",
    "meaning": "本能地、下意识地",
    "example": "I instinctively reached out for the railing.",
    "id": "sw-000222"
  },
  {
    "type": "word",
    "front": "reach out",
    "meaning": "伸出手",
    "example": "She reached out and grabbed my arm.",
    "id": "sw-000223"
  },
  {
    "type": "word",
    "front": "steady yourself",
    "meaning": "稳住身体",
    "example": "Use the pole to steady yourself.",
    "id": "sw-000224"
  },
  {
    "type": "word",
    "front": "catch yourself",
    "meaning": "在摔倒前及时稳住",
    "example": "I slipped but caught myself on the wall.",
    "id": "sw-000225"
  },
  {
    "type": "word",
    "front": "twist / sprain your ankle",
    "meaning": "扭到 / 扭伤脚踝",
    "example": "I twisted my ankle slightly, but luckily I didn’t sprain it.",
    "id": "sw-000226"
  },
  {
    "type": "word",
    "front": "turn on / turn off",
    "meaning": "打开 / 关闭",
    "example": "Turn the shower on and let it run.",
    "id": "sw-000227"
  },
  {
    "type": "word",
    "front": "let the water run",
    "meaning": "让水流一会儿",
    "example": "Let the water run until it gets warm.",
    "id": "sw-000228"
  },
  {
    "type": "word",
    "front": "adjust the temperature",
    "meaning": "调节温度",
    "example": "I adjusted the temperature until it felt comfortable.",
    "id": "sw-000229"
  },
  {
    "type": "word",
    "front": "turn up / turn down",
    "meaning": "调高 / 调低",
    "example": "Turn the heat down if the water is too hot.",
    "id": "sw-000230"
  },
  {
    "type": "word",
    "front": "steam up",
    "meaning": "充满蒸汽、变得雾气腾腾",
    "example": "The bathroom steamed up quickly.",
    "id": "sw-000231"
  },
  {
    "type": "word",
    "front": "fog up",
    "meaning": "镜子、眼镜等起雾",
    "example": "My glasses fogged up as soon as I walked inside.",
    "id": "sw-000232"
  },
  {
    "type": "word",
    "front": "rinse out / rinse off",
    "meaning": "从内部冲掉 / 从表面冲掉",
    "example": "Rinse the shampoo out of your hair and the mud off your shoes.",
    "id": "sw-000233"
  },
  {
    "type": "word",
    "front": "wipe dry",
    "meaning": "擦干",
    "example": "I grabbed a towel and wiped myself dry.",
    "id": "sw-000234"
  },
  {
    "type": "word",
    "front": "lukewarm",
    "meaning": "温吞、不冷不热",
    "example": "The shower was only lukewarm.",
    "id": "sw-000235"
  },
  {
    "type": "word",
    "front": "piping hot / scalding hot",
    "meaning": "热气腾腾 / 烫得可能伤人",
    "example": "The soup is piping hot, but the tap water is almost scalding.",
    "id": "sw-000236"
  },
  {
    "type": "word",
    "front": "put on / take off",
    "meaning": "穿上 / 脱下",
    "example": "Put your jacket on before you go outside.",
    "id": "sw-000237"
  },
  {
    "type": "word",
    "front": "pull on",
    "meaning": "拉着套上",
    "example": "I pulled on my boots and headed outside.",
    "id": "sw-000238"
  },
  {
    "type": "word",
    "front": "zip up / unzip",
    "meaning": "拉上 / 拉开拉链",
    "example": "Zip your jacket all the way up.",
    "id": "sw-000239"
  },
  {
    "type": "word",
    "front": "all the way up / halfway",
    "meaning": "一直到顶 / 一半",
    "example": "I zipped it all the way up, then unzipped it halfway.",
    "id": "sw-000240"
  },
  {
    "type": "word",
    "front": "roll up / roll back down your sleeves",
    "meaning": "卷起 / 放下袖子",
    "example": "I rolled up my sleeves when I got warm.",
    "id": "sw-000241"
  },
  {
    "type": "word",
    "front": "stick out",
    "meaning": "伸出、露在外面",
    "example": "A bottle was sticking out of the side pocket.",
    "id": "sw-000242"
  },
  {
    "type": "word",
    "front": "tuck in / tuck back in",
    "meaning": "塞进去 / 重新塞好",
    "example": "Tuck your shirt back in.",
    "id": "sw-000243"
  },
  {
    "type": "word",
    "front": "tighten / loosen",
    "meaning": "收紧 / 放松",
    "example": "Tighten the straps, then loosen them slightly if they dig in.",
    "id": "sw-000244"
  },
  {
    "type": "word",
    "front": "tie / untie",
    "meaning": "系上 / 解开",
    "example": "I tied my shoelaces before leaving.",
    "id": "sw-000245"
  },
  {
    "type": "word",
    "front": "come undone",
    "meaning": "自己松开、散开",
    "example": "My shoelaces came undone halfway down the trail.",
    "id": "sw-000246"
  },
  {
    "type": "word",
    "front": "just in case",
    "meaning": "以防万一",
    "example": "Take a rain jacket just in case.",
    "id": "sw-000247"
  },
  {
    "type": "word",
    "front": "bring something to a boil",
    "meaning": "把液体加热至沸腾",
    "example": "Bring the water to a boil first.",
    "id": "sw-000248"
  },
  {
    "type": "word",
    "front": "bubble / start bubbling",
    "meaning": "冒泡 / 开始冒泡",
    "example": "The water started bubbling around the edges.",
    "id": "sw-000249"
  },
  {
    "type": "word",
    "front": "boil / simmer",
    "meaning": "沸腾 / 小火慢煮",
    "example": "Once it boils, turn the heat down and let it simmer.",
    "id": "sw-000250"
  },
  {
    "type": "word",
    "front": "turn the heat up / down",
    "meaning": "把火调大 / 调小",
    "example": "Turn the heat down before the sauce burns.",
    "id": "sw-000251"
  },
  {
    "type": "word",
    "front": "drizzle",
    "meaning": "细细淋上；毛毛雨",
    "example": "Drizzle a little oil over the vegetables.",
    "id": "sw-000252"
  },
  {
    "type": "word",
    "front": "brown",
    "meaning": "煎至表面变褐",
    "example": "Let the chicken brown before flipping it.",
    "id": "sw-000253"
  },
  {
    "type": "word",
    "front": "flip / flip over",
    "meaning": "翻面、快速翻转",
    "example": "Flip the pancake over carefully.",
    "id": "sw-000254"
  },
  {
    "type": "word",
    "front": "sprinkle",
    "meaning": "撒少量颗粒或粉末",
    "example": "Sprinkle some salt on top.",
    "id": "sw-000255"
  },
  {
    "type": "word",
    "front": "take off the heat",
    "meaning": "从火上移开",
    "example": "Take the pan off the heat.",
    "id": "sw-000256"
  },
  {
    "type": "word",
    "front": "be about to do",
    "meaning": "正要、马上要做",
    "example": "I was about to cross the street when a car appeared.",
    "id": "sw-000257"
  },
  {
    "type": "word",
    "front": "come speeding around the corner",
    "meaning": "高速从拐角冲出来",
    "example": "A cyclist came speeding around the corner.",
    "id": "sw-000258"
  },
  {
    "type": "word",
    "front": "curb / pavement / sidewalk",
    "meaning": "路缘 / 人行道（英）/ 人行道（美）",
    "example": "I stepped off the curb and onto the road.",
    "id": "sw-000259"
  },
  {
    "type": "word",
    "front": "step back",
    "meaning": "往后退一步",
    "example": "I quickly stepped back onto the pavement.",
    "id": "sw-000260"
  },
  {
    "type": "word",
    "front": "brake / brake hard / slam on the brakes",
    "meaning": "刹车 / 用力刹车 / 猛踩刹车",
    "example": "The driver slammed on the brakes.",
    "id": "sw-000261"
  },
  {
    "type": "word",
    "front": "swerve",
    "meaning": "突然转向躲避",
    "example": "The cyclist swerved around the car.",
    "id": "sw-000262"
  },
  {
    "type": "word",
    "front": "avoid / avoid doing",
    "meaning": "避开 / 避免做",
    "example": "We took a detour to avoid walking through the mud.",
    "id": "sw-000263"
  },
  {
    "type": "word",
    "front": "nearly / almost",
    "meaning": "差一点、几乎",
    "example": "I nearly lost my balance.",
    "id": "sw-000264"
  },
  {
    "type": "word",
    "front": "traffic clears / crowd clears",
    "meaning": "车流散去 / 人群散去",
    "example": "Wait until the traffic clears.",
    "id": "sw-000265"
  },
  {
    "type": "word",
    "front": "adjust the straps",
    "meaning": "调整背包带",
    "example": "Take the pack off and adjust the straps.",
    "id": "sw-000266"
  },
  {
    "type": "word",
    "front": "dig into",
    "meaning": "勒进、压进身体",
    "example": "The shoulder straps are digging into me.",
    "id": "sw-000267"
  },
  {
    "type": "word",
    "front": "fasten / unfasten",
    "meaning": "扣好固定 / 解开",
    "example": "Fasten the waist belt before climbing.",
    "id": "sw-000268"
  },
  {
    "type": "word",
    "front": "clip / unclip",
    "meaning": "用夹扣扣上 / 解开夹扣",
    "example": "I clipped a pouch onto the pack.",
    "id": "sw-000269"
  },
  {
    "type": "word",
    "front": "strap something to",
    "meaning": "用带子把某物固定在……上",
    "example": "I strapped my jacket to the bottom of the pack.",
    "id": "sw-000270"
  },
  {
    "type": "word",
    "front": "tuck away",
    "meaning": "收好、塞到不碍事的位置",
    "example": "Tuck away the loose ends.",
    "id": "sw-000271"
  },
  {
    "type": "word",
    "front": "loose ends",
    "meaning": "松散垂下的末端；未处理完的零碎事项",
    "example": "The loose ends were flapping in the wind.",
    "id": "sw-000272"
  },
  {
    "type": "word",
    "front": "flap around",
    "meaning": "被风吹得来回甩动",
    "example": "The tent fabric was flapping around in the wind.",
    "id": "sw-000273"
  },
  {
    "type": "word",
    "front": "snug",
    "meaning": "贴合、舒适但不松",
    "example": "The waist belt should feel snug, not tight.",
    "id": "sw-000274"
  },
  {
    "type": "ladder",
    "front": "solid / stable → slightly unstable → unstable → loose",
    "meaning": "稳固 → 略不稳 → 不稳定 → 松动",
    "example": "The rock looked solid, but the gravel around it was loose and unstable.",
    "id": "sw-000275"
  },
  {
    "type": "ladder",
    "front": "trip → stumble → lose balance → fall",
    "meaning": "绊到 → 踉跄 → 失去平衡 → 摔倒",
    "example": "I tripped, stumbled and lost my balance, but caught myself before I fell.",
    "id": "sw-000276"
  },
  {
    "type": "ladder",
    "front": "freezing cold → cold → cool → lukewarm → warm → hot → piping hot → scalding hot",
    "meaning": "冰冷 → 冷 → 凉 → 温吞 → 温暖 → 热 → 滚烫 → 烫伤级别",
    "example": "The water went from freezing cold to lukewarm, then suddenly became scalding hot.",
    "id": "sw-000277"
  },
  {
    "type": "ladder",
    "front": "put on ↔ take off; zip up ↔ unzip; tie ↔ untie",
    "meaning": "穿上 ↔ 脱下；拉上 ↔ 拉开；系上 ↔ 解开",
    "example": "I put the jacket on, zipped it up, then took it off again.",
    "id": "sw-000278"
  },
  {
    "type": "ladder",
    "front": "way too loose → slightly loose → snug → tight → way too tight",
    "meaning": "太松 → 稍松 → 贴合舒适 → 紧 → 太紧",
    "example": "The belt was loose, so I tightened it until it felt snug.",
    "id": "sw-000279"
  },
  {
    "type": "ladder",
    "front": "cold → warm → hot → bubbling → boiling → simmering",
    "meaning": "冷 → 温 → 热 → 冒泡 → 沸腾 → 小火微沸",
    "example": "The water heated up, started bubbling, came to a boil, and then simmered gently.",
    "id": "sw-000280"
  },
  {
    "type": "ladder",
    "front": "slow down → brake → brake hard → slam on the brakes",
    "meaning": "减速 → 刹车 → 用力刹车 → 急刹",
    "example": "The driver first slowed down, then had to slam on the brakes.",
    "id": "sw-000281"
  },
  {
    "type": "word",
    "front": "be stuck to",
    "meaning": "粘在……上",
    "example": "Some dried food was stuck to the stove.",
    "id": "sw-000282"
  },
  {
    "type": "word",
    "front": "loosen something up",
    "meaning": "把粘紧、僵硬的东西弄松",
    "example": "Soak it in warm water to loosen it up.",
    "id": "sw-000283"
  },
  {
    "type": "word",
    "front": "scrub",
    "meaning": "用力刷洗",
    "example": "I scrubbed the pan with a sponge.",
    "id": "sw-000284"
  },
  {
    "type": "word",
    "front": "come off",
    "meaning": "从表面脱落、被清除",
    "example": "Most of the dirt came off easily.",
    "id": "sw-000285"
  },
  {
    "type": "word",
    "front": "stubborn stain / dirt / mud",
    "meaning": "顽固污渍 / 污垢 / 泥",
    "example": "There were still a few stubborn stains.",
    "id": "sw-000286"
  },
  {
    "type": "word",
    "front": "scrape off",
    "meaning": "刮掉",
    "example": "I carefully scraped the dried food off the pan.",
    "id": "sw-000287"
  },
  {
    "type": "word",
    "front": "jerk forward / jerk to a stop",
    "meaning": "猛地向前一顿 / 猛地停住",
    "example": "The bus jerked forward when the driver braked.",
    "id": "sw-000288"
  },
  {
    "type": "word",
    "front": "throw someone off balance",
    "meaning": "使某人失去平衡",
    "example": "The sudden stop threw me off balance.",
    "id": "sw-000289"
  },
  {
    "type": "word",
    "front": "handrail",
    "meaning": "扶手、栏杆",
    "example": "I grabbed the handrail.",
    "id": "sw-000290"
  },
  {
    "type": "word",
    "front": "hold on tightly",
    "meaning": "紧紧抓住",
    "example": "Hold on tightly when the bus starts moving.",
    "id": "sw-000291"
  },
  {
    "type": "word",
    "front": "come to a stop / come to a complete stop",
    "meaning": "停下来 / 完全停稳",
    "example": "Wait until the bus comes to a complete stop.",
    "id": "sw-000292"
  },
  {
    "type": "word",
    "front": "available / a seat becomes available",
    "meaning": "可用的；有座位空出来",
    "example": "When a seat became available, I let the elderly man sit down.",
    "id": "sw-000293"
  },
  {
    "type": "word",
    "front": "fallen tree / fallen leaves",
    "meaning": "倒下的树 / 落叶",
    "example": "A fallen tree was blocking the trail.",
    "id": "sw-000294"
  },
  {
    "type": "word",
    "front": "get past",
    "meaning": "越过、通过阻碍",
    "example": "We had to figure out how to get past it.",
    "id": "sw-000295"
  },
  {
    "type": "word",
    "front": "step over",
    "meaning": "一步跨过较低障碍",
    "example": "Step over the log carefully.",
    "id": "sw-000296"
  },
  {
    "type": "word",
    "front": "duck under",
    "meaning": "低头、弯身从下面通过",
    "example": "I ducked under a low branch.",
    "id": "sw-000297"
  },
  {
    "type": "word",
    "front": "climb over",
    "meaning": "爬过、翻过",
    "example": "We climbed over the fallen trunk.",
    "id": "sw-000298"
  },
  {
    "type": "word",
    "front": "step across",
    "meaning": "跨过沟、缝、水流等间隔",
    "example": "I stepped across a narrow ditch.",
    "id": "sw-000299"
  },
  {
    "type": "word",
    "front": "ditch / gully / ravine",
    "meaning": "小沟 / 冲沟 / 深沟谷",
    "example": "The trail crossed a muddy ditch before entering a narrow gully.",
    "id": "sw-000300"
  },
  {
    "type": "word",
    "front": "get caught on",
    "meaning": "被……勾住、挂住",
    "example": "My backpack got caught on a branch.",
    "id": "sw-000301"
  },
  {
    "type": "word",
    "front": "go around",
    "meaning": "绕过去",
    "example": "The trunk was too high, so my friend went around instead.",
    "id": "sw-000302"
  },
  {
    "type": "word",
    "front": "tip over",
    "meaning": "倾倒、翻倒",
    "example": "The bottle tipped over on the rock.",
    "id": "sw-000303"
  },
  {
    "type": "word",
    "front": "roll downhill / across",
    "meaning": "滚下坡 / 滚过",
    "example": "It started rolling downhill.",
    "id": "sw-000304"
  },
  {
    "type": "word",
    "front": "bounce off",
    "meaning": "撞到……后弹开",
    "example": "The bottle bounced off a rock.",
    "id": "sw-000305"
  },
  {
    "type": "word",
    "front": "slide across / slide down",
    "meaning": "滑过 / 滑下",
    "example": "It slid across a patch of wet grass.",
    "id": "sw-000306"
  },
  {
    "type": "word",
    "front": "float on the surface",
    "meaning": "漂浮在表面",
    "example": "The bottle floated on the surface.",
    "id": "sw-000307"
  },
  {
    "type": "word",
    "front": "sink – sank – sunk",
    "meaning": "下沉",
    "example": "One end slowly sank below the surface.",
    "id": "sw-000308"
  },
  {
    "type": "word",
    "front": "surface / below the surface",
    "meaning": "表面、水面 / 表面以下",
    "example": "Something was moving just below the surface.",
    "id": "sw-000309"
  },
  {
    "type": "word",
    "front": "drift / drift downstream",
    "meaning": "随水流或风缓慢漂移 / 顺流漂走",
    "example": "A branch drifted downstream.",
    "id": "sw-000310"
  },
  {
    "type": "word",
    "front": "upstream / downstream",
    "meaning": "上游方向 / 下游方向",
    "example": "We walked upstream while the bottle drifted downstream.",
    "id": "sw-000311"
  },
  {
    "type": "word",
    "front": "won't budge",
    "meaning": "怎么用力也纹丝不动",
    "example": "The window won't budge.",
    "id": "sw-000312"
  },
  {
    "type": "word",
    "front": "jammed",
    "meaning": "机械或结构卡死",
    "example": "The zipper seems to be jammed.",
    "id": "sw-000313"
  },
  {
    "type": "word",
    "front": "back and forth",
    "meaning": "来来回回、前后反复",
    "example": "I wiggled the handle back and forth.",
    "id": "sw-000314"
  },
  {
    "type": "word",
    "front": "come loose",
    "meaning": "原本固定的东西变松",
    "example": "The window finally came loose.",
    "id": "sw-000315"
  },
  {
    "type": "word",
    "front": "slide open / swing open",
    "meaning": "滑动打开 / 绕轴摆开",
    "example": "The sliding door slid open, while the front door swung open.",
    "id": "sw-000316"
  },
  {
    "type": "word",
    "front": "wide open / halfway open / slightly open",
    "meaning": "完全敞开 / 开一半 / 稍微打开",
    "example": "The wind blew the window wide open.",
    "id": "sw-000317"
  },
  {
    "type": "word",
    "front": "firmly",
    "meaning": "稳稳地、较用力地",
    "example": "Push the frame firmly.",
    "id": "sw-000318"
  },
  {
    "type": "word",
    "front": "click into place",
    "meaning": "咔哒一声卡到正确位置",
    "example": "Push it until it clicks into place.",
    "id": "sw-000319"
  },
  {
    "type": "word",
    "front": "stream / creek",
    "meaning": "溪流；小溪",
    "example": "The trail crossed a shallow stream.",
    "id": "sw-000320"
  },
  {
    "type": "word",
    "front": "bank",
    "meaning": "河岸、溪岸",
    "example": "The water was shallow near the bank.",
    "id": "sw-000321"
  },
  {
    "type": "word",
    "front": "shallow ↔ deep",
    "meaning": "浅 ↔ 深",
    "example": "The stream gets deeper toward the middle.",
    "id": "sw-000322"
  },
  {
    "type": "word",
    "front": "current",
    "meaning": "水流",
    "example": "The current was stronger than it looked.",
    "id": "sw-000323"
  },
  {
    "type": "word",
    "front": "gentle / steady / strong / powerful current",
    "meaning": "缓和 / 稳定 / 强 / 很强的水流",
    "example": "We looked for a section with a gentler current.",
    "id": "sw-000324"
  },
  {
    "type": "word",
    "front": "stepping stone",
    "meaning": "踏脚石",
    "example": "The stepping stones were wet and slippery.",
    "id": "sw-000325"
  },
  {
    "type": "word",
    "front": "wobble / wobbly",
    "meaning": "摇晃 / 摇晃不稳的",
    "example": "One stone wobbled under my foot.",
    "id": "sw-000326"
  },
  {
    "type": "word",
    "front": "risk it",
    "meaning": "冒这个险",
    "example": "The current looked too strong, so I decided not to risk it.",
    "id": "sw-000327"
  },
  {
    "type": "word",
    "front": "wade across / wade through",
    "meaning": "涉水走过 / 涉水穿过",
    "example": "We waded across a calmer section.",
    "id": "sw-000328"
  },
  {
    "type": "word",
    "front": "ankle-deep / knee-deep / waist-deep",
    "meaning": "齐脚踝 / 齐膝 / 齐腰深",
    "example": "The water went from ankle-deep to knee-deep.",
    "id": "sw-000329"
  },
  {
    "type": "word",
    "front": "bunch up",
    "meaning": "皱成一团、聚成一堆",
    "example": "The blanket was bunched up at the foot of the bed.",
    "id": "sw-000330"
  },
  {
    "type": "word",
    "front": "spread out",
    "meaning": "展开、摊开；分散开",
    "example": "I spread the blanket out across the bed.",
    "id": "sw-000331"
  },
  {
    "type": "word",
    "front": "smooth out",
    "meaning": "抚平、弄平",
    "example": "I smoothed out the wrinkles.",
    "id": "sw-000332"
  },
  {
    "type": "word",
    "front": "tuck something under",
    "meaning": "把某物掖到……下面",
    "example": "Tuck the sheet under the mattress.",
    "id": "sw-000333"
  },
  {
    "type": "word",
    "front": "mattress / sheet / blanket / pillow",
    "meaning": "床垫 / 床单 / 毯子或被子 / 枕头",
    "example": "The sheet had come loose from under the mattress.",
    "id": "sw-000334"
  },
  {
    "type": "word",
    "front": "fluff up",
    "meaning": "拍松、抖松",
    "example": "I fluffed up the pillows.",
    "id": "sw-000335"
  },
  {
    "type": "word",
    "front": "fold / unfold / fold in half",
    "meaning": "折叠 / 展开 / 对折",
    "example": "Fold the blanket in half.",
    "id": "sw-000336"
  },
  {
    "type": "word",
    "front": "lay – laid – laid",
    "meaning": "把某物放置、铺放",
    "example": "I laid the folded blanket across the end of the bed.",
    "id": "sw-000337"
  },
  {
    "type": "word",
    "front": "lie down",
    "meaning": "自己躺下",
    "example": "I lay down for a few minutes.",
    "id": "sw-000338"
  },
  {
    "type": "word",
    "front": "knock something off",
    "meaning": "不小心把某物碰落",
    "example": "I knocked a glass off the counter.",
    "id": "sw-000339"
  },
  {
    "type": "word",
    "front": "shatter",
    "meaning": "碎裂成许多块",
    "example": "The glass shattered into dozens of pieces.",
    "id": "sw-000340"
  },
  {
    "type": "word",
    "front": "shard / glass shard",
    "meaning": "尖锐碎片 / 玻璃碎片",
    "example": "A few sharp shards scattered across the floor.",
    "id": "sw-000341"
  },
  {
    "type": "word",
    "front": "scatter / scattered",
    "meaning": "四散开 / 散落的",
    "example": "The pieces scattered across the kitchen.",
    "id": "sw-000342"
  },
  {
    "type": "word",
    "front": "sweep up",
    "meaning": "把散落的小东西扫起来",
    "example": "I swept up the smaller pieces.",
    "id": "sw-000343"
  },
  {
    "type": "word",
    "front": "chip / chipped",
    "meaning": "边缘崩掉一小块 / 有崩口的",
    "example": "One plate was slightly chipped.",
    "id": "sw-000344"
  },
  {
    "type": "word",
    "front": "sharp ↔ blunt / dull",
    "meaning": "锋利 ↔ 钝",
    "example": "Be careful—the broken edge is sharp.",
    "id": "sw-000345"
  },
  {
    "type": "word",
    "front": "mist / fog",
    "meaning": "薄雾 / 浓雾",
    "example": "There was light mist in the valley but dense fog higher up.",
    "id": "sw-000346"
  },
  {
    "type": "word",
    "front": "thin / thick / dense",
    "meaning": "薄、稀 / 厚、浓 / 浓密",
    "example": "A thin layer of mist gradually turned into dense fog.",
    "id": "sw-000347"
  },
  {
    "type": "word",
    "front": "thicken / thin out",
    "meaning": "变浓、变厚 / 逐渐变稀",
    "example": "The fog thickened quickly, then began to thin out an hour later.",
    "id": "sw-000348"
  },
  {
    "type": "word",
    "front": "drift in / drift across",
    "meaning": "飘入 / 缓慢飘过",
    "example": "Fog drifted across the ridge.",
    "id": "sw-000349"
  },
  {
    "type": "word",
    "front": "visibility drops / improves",
    "meaning": "能见度下降 / 改善",
    "example": "Visibility dropped dramatically.",
    "id": "sw-000350"
  },
  {
    "type": "word",
    "front": "make out",
    "meaning": "在困难条件下勉强辨认出",
    "example": "I could barely make out the trail ahead.",
    "id": "sw-000351"
  },
  {
    "type": "word",
    "front": "clearly / faintly / barely visible",
    "meaning": "清楚可见 / 隐约可见 / 几乎看不见",
    "example": "The waymark was barely visible through the fog.",
    "id": "sw-000352"
  },
  {
    "type": "word",
    "front": "waymark / trail marker",
    "meaning": "路线标记",
    "example": "We followed the waymarks through the fog.",
    "id": "sw-000353"
  },
  {
    "type": "word",
    "front": "fog lifts",
    "meaning": "雾抬升、散去",
    "example": "The fog started to lift around noon.",
    "id": "sw-000354"
  },
  {
    "type": "word",
    "front": "come into view / come back into view",
    "meaning": "进入视野 / 重新进入视野",
    "example": "The ridge gradually came back into view.",
    "id": "sw-000355"
  },
  {
    "type": "word",
    "front": "disappear from view",
    "meaning": "从视野中消失",
    "example": "The summit disappeared from view as the fog thickened.",
    "id": "sw-000356"
  },
  {
    "type": "ladder",
    "front": "wipe → scrub → scrape off",
    "meaning": "擦 → 用力刷 → 刮掉",
    "example": "The stain wouldn't come off when I wiped it, so I scrubbed it and finally scraped off the dried bits.",
    "id": "sw-000357"
  },
  {
    "type": "ladder",
    "front": "brake hard → jerk forward → be thrown off balance → grab → hold on → steady yourself",
    "meaning": "急刹 → 猛地前顿 → 失去平衡 → 抓住 → 抓紧 → 稳住",
    "example": "The bus jerked forward and threw me off balance, so I grabbed the rail and held on tightly.",
    "id": "sw-000358"
  },
  {
    "type": "ladder",
    "front": "step over / step across / climb over / duck under / squeeze through / go around",
    "meaning": "跨过低障碍 / 跨过间隔 / 翻过 / 钻过 / 挤过 / 绕过",
    "example": "We stepped over a root, crossed a ditch, ducked under a branch and went around a fallen tree.",
    "id": "sw-000359"
  },
  {
    "type": "ladder",
    "front": "tip over → roll → bounce → slide → come to a stop",
    "meaning": "翻倒 → 滚动 → 弹跳 → 滑动 → 停住",
    "example": "The bottle tipped over, rolled downhill, bounced off a rock and slid to a stop.",
    "id": "sw-000360"
  },
  {
    "type": "ladder",
    "front": "float → drift → sink",
    "meaning": "漂浮 → 漂移 → 下沉",
    "example": "The branch floated for a while, drifted downstream and eventually sank.",
    "id": "sw-000361"
  },
  {
    "type": "ladder",
    "front": "get stuck / get caught on / jammed / won't budge",
    "meaning": "泛指卡住 / 被勾住 / 机械卡死 / 用力也不动",
    "example": "My boot got stuck in mud, my strap got caught on a branch, and the zipper jammed and wouldn't budge.",
    "id": "sw-000362"
  },
  {
    "type": "ladder",
    "front": "shallow → ankle-deep → knee-deep → waist-deep → deep",
    "meaning": "浅 → 齐踝 → 齐膝 → 齐腰 → 深",
    "example": "The stream was ankle-deep near the bank but knee-deep in the middle.",
    "id": "sw-000363"
  },
  {
    "type": "ladder",
    "front": "gentle → steady → strong → powerful current",
    "meaning": "缓和 → 稳定 → 强 → 很强的水流",
    "example": "The current looked gentle near the bank but became strong toward the middle.",
    "id": "sw-000364"
  },
  {
    "type": "ladder",
    "front": "bunch up → spread out → smooth out → fold → tuck away",
    "meaning": "皱成一团 → 展开 → 抚平 → 折叠 → 收好",
    "example": "I spread out the bunched-up blanket, smoothed it out and folded it neatly.",
    "id": "sw-000365"
  },
  {
    "type": "ladder",
    "front": "scratch → chip → crack → break → shatter",
    "meaning": "划痕 → 崩口 → 裂纹 → 破损 → 碎裂",
    "example": "The plate was chipped, but the glass fell and shattered completely.",
    "id": "sw-000366"
  },
  {
    "type": "ladder",
    "front": "light mist → thick mist → dense fog → visibility drops → fog lifts → visibility improves",
    "meaning": "薄雾 → 浓一些的雾 → 浓雾 → 能见度下降 → 雾散 → 能见度改善",
    "example": "Light mist thickened into dense fog before lifting later in the morning.",
    "id": "sw-000367"
  },
  {
    "type": "ladder",
    "front": "clearly visible → faintly visible → barely visible → hidden from view",
    "meaning": "清楚可见 → 隐约可见 → 几乎看不见 → 完全被遮挡",
    "example": "The ridge went from clearly visible to barely visible before disappearing from view.",
    "id": "sw-000368"
  },
  {
    "type": "word",
    "front": "trash can / bin / dumpster",
    "meaning": "垃圾桶（美）／垃圾桶 （英）／大型室外垃圾 箱",
    "example": "Put a fresh bag in the bin.",
    "id": "sw-000369"
  },
  {
    "type": "word",
    "front": "spill over the top / edge",
    "meaning": "从顶部／边缘溢出",
    "example": "Rubbish was spilling over the top.",
    "id": "sw-000370"
  },
  {
    "type": "word",
    "front": "overflow / be overflowing",
    "meaning": "溢出／装满到溢出",
    "example": "The bin is overflowing.",
    "id": "sw-000371"
  },
  {
    "type": "word",
    "front": "empty → half full → nearly full → full → overflowing",
    "meaning": "从空到溢出的程度链",
    "example": "The bin is nearly full.",
    "id": "sw-000372"
  },
  {
    "type": "word",
    "front": "pull the bag out",
    "meaning": "把袋子拉出来",
    "example": "Pull the trash bag out carefully.",
    "id": "sw-000373"
  },
  {
    "type": "word",
    "front": "tie up the bag",
    "meaning": "将袋子扎紧",
    "example": "Tie up the bag before carrying it out.",
    "id": "sw-000374"
  },
  {
    "type": "word",
    "front": "leak from the bottom / drip",
    "meaning": "从底部漏液／滴下",
    "example": "Liquid was leaking from the bottom and dripping onto the floor.",
    "id": "sw-000375"
  },
  {
    "type": "word",
    "front": "hold something away from",
    "meaning": "让某物远离……",
    "example": "Hold the wet bag away from your clothes.",
    "id": "sw-000376"
  },
  {
    "type": "word",
    "front": "smell awful / stink / musty",
    "meaning": "难闻／发臭／有霉味",
    "example": "The rubbish stinks.",
    "id": "sw-000377"
  },
  {
    "type": "word",
    "front": "wipe up the spill / drops",
    "meaning": "擦掉洒出的液体／滴液",
    "example": "Wipe up the drops on the floor.",
    "id": "sw-000378"
  },
  {
    "type": "word",
    "front": "put a fresh bag in / replace the bag",
    "meaning": "换上新袋",
    "example": "I replaced the trash bag.",
    "id": "sw-000379"
  },
  {
    "type": "word",
    "front": "lift something off the ground",
    "meaning": "把某物从地面抬起",
    "example": "Lift your end a little.",
    "id": "sw-000380"
  },
  {
    "type": "word",
    "front": "carry something upstairs",
    "meaning": "搬着某物上楼",
    "example": "We carried the cabinet upstairs.",
    "id": "sw-000381"
  },
  {
    "type": "word",
    "front": "heavy vs bulky",
    "meaning": "重量重 vs 体积大笨重",
    "example": "It is bulky but not very heavy.",
    "id": "sw-000382"
  },
  {
    "type": "word",
    "front": "tilt something toward / slightly",
    "meaning": "朝某方向倾斜／微倾",
    "example": "Tilt the cabinet toward me.",
    "id": "sw-000383"
  },
  {
    "type": "word",
    "front": "rotate / turn sideways",
    "meaning": "旋转／侧转",
    "example": "Turn it sideways to fit through.",
    "id": "sw-000384"
  },
  {
    "type": "word",
    "front": "doorway vs door",
    "meaning": "门洞／门本身",
    "example": "The cabinet would not fit through the doorway.",
    "id": "sw-000385"
  },
  {
    "type": "word",
    "front": "lower something slowly",
    "meaning": "缓慢放低",
    "example": "Lower your end slowly.",
    "id": "sw-000386"
  },
  {
    "type": "word",
    "front": "set something down",
    "meaning": "把某物放下来",
    "example": "Let’s set it down for a minute.",
    "id": "sw-000387"
  },
  {
    "type": "word",
    "front": "pick something back up",
    "meaning": "把东西重新抬起／拿起",
    "example": "We picked it back up after the break.",
    "id": "sw-000388"
  },
  {
    "type": "word",
    "front": "the rest of the way",
    "meaning": "剩下的路程",
    "example": "We carried it the rest of the way.",
    "id": "sw-000389"
  },
  {
    "type": "word",
    "front": "checkout / line at checkout",
    "meaning": "结账处／结账队伍",
    "example": "The line at the checkout moved quickly.",
    "id": "sw-000390"
  },
  {
    "type": "word",
    "front": "conveyor belt",
    "meaning": "传送带",
    "example": "Put your groceries on the conveyor belt.",
    "id": "sw-000391"
  },
  {
    "type": "word",
    "front": "cashier / scan a barcode",
    "meaning": "收银员／扫描条形码",
    "example": "The cashier scanned everything one by one.",
    "id": "sw-000392"
  },
  {
    "type": "word",
    "front": "one by one",
    "meaning": "一个接一个",
    "example": "Cross the slippery section one by one.",
    "id": "sw-000393"
  },
  {
    "type": "word",
    "front": "tap your card / contactless payment",
    "meaning": "感应刷卡／非接触支付",
    "example": "I tapped my card on the terminal.",
    "id": "sw-000394"
  },
  {
    "type": "word",
    "front": "card terminal",
    "meaning": "刷卡终端",
    "example": "Tap your card on the terminal.",
    "id": "sw-000395"
  },
  {
    "type": "word",
    "front": "be declined",
    "meaning": "支付被拒绝",
    "example": "My card was declined.",
    "id": "sw-000396"
  },
  {
    "type": "word",
    "front": "payment go through / would not go through",
    "meaning": "支付完成／就是不成功",
    "example": "The payment would not go through.",
    "id": "sw-000397"
  },
  {
    "type": "word",
    "front": "insert card / enter PIN",
    "meaning": "插卡／输入密码",
    "example": "I inserted my card and entered my PIN.",
    "id": "sw-000398"
  },
  {
    "type": "word",
    "front": "receipt / digital receipt",
    "meaning": "小票／电子收据",
    "example": "Do you need a receipt?",
    "id": "sw-000399"
  },
  {
    "type": "word",
    "front": "step aside / move aside",
    "meaning": "让到一旁",
    "example": "I packed my groceries and moved aside.",
    "id": "sw-000400"
  },
  {
    "type": "word",
    "front": "snag on a branch / nail",
    "meaning": "被树枝／钉子勾住",
    "example": "My sleeve snagged on a branch.",
    "id": "sw-000401"
  },
  {
    "type": "word",
    "front": "tear – tore – torn",
    "meaning": "撕裂的动词变化",
    "example": "The fabric tore near the pocket.",
    "id": "sw-000402"
  },
  {
    "type": "word",
    "front": "a rip / rip open",
    "meaning": "裂口／撕开",
    "example": "There is a small rip in my jacket.",
    "id": "sw-000403"
  },
  {
    "type": "word",
    "front": "fabric / stiff fabric",
    "meaning": "布料／硬挺布料",
    "example": "The fabric feels stiff.",
    "id": "sw-000404"
  },
  {
    "type": "word",
    "front": "loose thread",
    "meaning": "松散线头",
    "example": "Trim the loose threads.",
    "id": "sw-000405"
  },
  {
    "type": "word",
    "front": "trim the edges / threads",
    "meaning": "修剪边缘／线头",
    "example": "I trimmed a few loose threads.",
    "id": "sw-000406"
  },
  {
    "type": "word",
    "front": "patch a tear / hole / tent",
    "meaning": "修补裂口／洞／帐篷",
    "example": "I patched the tear with repair tape.",
    "id": "sw-000407"
  },
  {
    "type": "word",
    "front": "temporary fix / permanent fix",
    "meaning": "临时修补／永久修复",
    "example": "It was only a temporary fix.",
    "id": "sw-000408"
  },
  {
    "type": "word",
    "front": "hold together",
    "meaning": "维持完整、不散开",
    "example": "The tape held the jacket together.",
    "id": "sw-000409"
  },
  {
    "type": "word",
    "front": "get caught on vs snag on",
    "meaning": "泛指挂住／强调尖锐物勾住织物",
    "example": "The strap got caught on a rock.",
    "id": "sw-000410"
  },
  {
    "type": "word",
    "front": "approach a stop / summit",
    "meaning": "接近车站／山顶",
    "example": "The bus was approaching my stop.",
    "id": "sw-000411"
  },
  {
    "type": "word",
    "front": "look up from your phone",
    "meaning": "从手机上抬头",
    "example": "I looked up too late.",
    "id": "sw-000412"
  },
  {
    "type": "word",
    "front": "pull in",
    "meaning": "驶入停靠点 ↔ 驶离停靠点",
    "example": "The bus pulled away from the stop.",
    "id": "sw-000413"
  },
  {
    "type": "word",
    "front": "press the stop button",
    "meaning": "按停车按钮",
    "example": "Press the stop button before your stop.",
    "id": "sw-000414"
  },
  {
    "type": "word",
    "front": "miss the bus vs miss my stop",
    "meaning": "错 过 公 交vs车坐过站",
    "example": "I missed my stop and got off at the next one.",
    "id": "sw-000415"
  },
  {
    "type": "word",
    "front": "get off at the next stop",
    "meaning": "下一站下车",
    "example": "I got off at the next stop.",
    "id": "sw-000416"
  },
  {
    "type": "word",
    "front": "walk back / head back",
    "meaning": "走回去／往回走",
    "example": "I crossed the street and walked back.",
    "id": "sw-000417"
  },
  {
    "type": "word",
    "front": "in advance / well in advance",
    "meaning": "提前／提前很久 等……时，……早已",
    "example": "Press the button well in advance.",
    "id": "sw-000418"
  },
  {
    "type": "word",
    "front": "by the time + past, had already...",
    "meaning": "等……时，……早已经……",
    "example": "By the time I looked up, the bus had already pulled away.",
    "id": "sw-000419"
  },
  {
    "type": "word",
    "front": "rub against / rubbing",
    "meaning": "摩擦／反复蹭 脚后跟／脚趾／脚底／",
    "example": "My boot is rubbing against my heel.",
    "id": "sw-000420"
  },
  {
    "type": "word",
    "front": "heel / toe / sole / ankle",
    "meaning": "脚后跟／脚趾／脚底／脚踝",
    "example": "I have a blister on my heel.",
    "id": "sw-000421"
  },
  {
    "type": "word",
    "front": "sting vs sore",
    "meaning": "刺痛灼痛 vs 持续酸痛触痛",
    "example": "The skin started to sting.",
    "id": "sw-000422"
  },
  {
    "type": "word",
    "front": "a blister starts to form",
    "meaning": "水泡开始形成",
    "example": "A blister was starting to form.",
    "id": "sw-000423"
  },
  {
    "type": "word",
    "front": "blister plaster / adhesive bandage",
    "meaning": "水泡贴／创可贴",
    "example": "Cover it with a blister plaster.",
    "id": "sw-000424"
  },
  {
    "type": "word",
    "front": "cover the area with",
    "meaning": "用……覆盖该部位",
    "example": "Cover the cut with a clean dressing.",
    "id": "sw-000425"
  },
  {
    "type": "word",
    "front": "slide around inside",
    "meaning": "在里面滑来滑去 系好靴子／收紧／放松",
    "example": "My heel kept sliding around inside the boot.",
    "id": "sw-000426"
  },
  {
    "type": "word",
    "front": "lace up / tighten / loosen laces",
    "meaning": "系好靴子／收紧／放松鞋带",
    "example": "Tighten the laces slightly.",
    "id": "sw-000427"
  },
  {
    "type": "word",
    "front": "stop A from doing B",
    "meaning": "阻止 A 做 B",
    "example": "I adjusted the boots to stop my heel from sliding around.",
    "id": "sw-000428"
  },
  {
    "type": "word",
    "front": "keep going vs push on",
    "meaning": "正常继续 vs 克服困难坚持前进",
    "example": "My foot feels fine, so I can keep going.",
    "id": "sw-000429"
  },
  {
    "type": "word",
    "front": "slimy / go slimy",
    "meaning": "黏滑的／变得黏滑",
    "example": "The chicken had gone slimy.",
    "id": "sw-000430"
  },
  {
    "type": "word",
    "front": "mold / moldy / go moldy",
    "meaning": "霉菌／发霉／变得发霉",
    "example": "The bread has gone moldy.",
    "id": "sw-000431"
  },
  {
    "type": "word",
    "front": "stale vs moldy",
    "meaning": "不新鲜变干硬 vs 发霉",
    "example": "The bread was stale but not moldy.",
    "id": "sw-000432"
  },
  {
    "type": "word",
    "front": "wilt / wilted",
    "meaning": "萎蔫／萎蔫的",
    "example": "The lettuce has started to wilt.",
    "id": "sw-000433"
  },
  {
    "type": "word",
    "front": "turn brown around the edges",
    "meaning": "边缘变褐",
    "example": "The lettuce was turning brown around the edges.",
    "id": "sw-000434"
  },
  {
    "type": "word",
    "front": "leftover chicken / leftovers",
    "meaning": "剩下的鸡肉／剩菜",
    "example": "Heat up the leftovers.",
    "id": "sw-000435"
  },
  {
    "type": "word",
    "front": "thaw / defrost",
    "meaning": "解冻 到期日／安全食用截止",
    "example": "I left the frozen food to thaw in the fridge.",
    "id": "sw-000436"
  },
  {
    "type": "word",
    "front": "expiration date / use-by date",
    "meaning": "到期日／安全食用截止日期",
    "example": "Check the use-by date.",
    "id": "sw-000437"
  },
  {
    "type": "word",
    "front": "go off / go bad / spoil",
    "meaning": "（食物）变质",
    "example": "The milk has gone off.",
    "id": "sw-000438"
  },
  {
    "type": "word",
    "front": "fresh → wilted / slimy / moldy → spoiled",
    "meaning": "新鲜 → 萎蔫／发黏／发霉 → 变质",
    "example": "I threw out the spoiled food.",
    "id": "sw-000439"
  },
  {
    "type": "word",
    "front": "slip out of my pocket / hand",
    "meaning": "从口袋／手中滑出",
    "example": "My phone slipped out of my pocket.",
    "id": "sw-000440"
  },
  {
    "type": "word",
    "front": "get soaked / slightly damp → wet → soaked",
    "meaning": "湿透／湿度程度链",
    "example": "The phone got completely soaked.",
    "id": "sw-000441"
  },
  {
    "type": "word",
    "front": "excess water / excess moisture",
    "meaning": "多余的水／水分",
    "example": "Remove the excess water.",
    "id": "sw-000442"
  },
  {
    "type": "word",
    "front": "shake off the water",
    "meaning": "轻轻抖掉水",
    "example": "I gently shook off the excess water.",
    "id": "sw-000443"
  },
  {
    "type": "word",
    "front": "wipe something dry vs let dry out",
    "meaning": "擦干表面 vs 让内部逐渐干透",
    "example": "I wiped it dry and let it dry out.",
    "id": "sw-000444"
  },
  {
    "type": "word",
    "front": "good airflow / hardly any airflow",
    "meaning": "通风良好／几乎不通风",
    "example": "Leave it somewhere with good airflow.",
    "id": "sw-000445"
  },
  {
    "type": "word",
    "front": "be tempted to do something",
    "meaning": "忍不住想做某事",
    "example": "I was tempted to turn it back on.",
    "id": "sw-000446"
  },
  {
    "type": "word",
    "front": "plug in / unplug / charging port",
    "meaning": "插电／拔插头／充电口",
    "example": "Do not plug it in while the port is wet.",
    "id": "sw-000447"
  },
  {
    "type": "word",
    "front": "turn something back on",
    "meaning": "重新打开",
    "example": "I waited before turning the phone back on.",
    "id": "sw-000448"
  },
  {
    "type": "word",
    "front": "boulder / boulder field",
    "meaning": "巨石／巨石区 小卵石 → 石头 → 岩石",
    "example": "We climbed past a large boulder.",
    "id": "sw-000449"
  },
  {
    "type": "word",
    "front": "pebble → stone → rock → boulder",
    "meaning": "小卵石 → 石头 → 岩石 → 巨石",
    "example": "A boulder blocked the trail.",
    "id": "sw-000450"
  },
  {
    "type": "word",
    "front": "narrow gap / squeeze through a gap",
    "meaning": "狭窄缝隙／挤过缝隙",
    "example": "I squeezed through a narrow gap.",
    "id": "sw-000451"
  },
  {
    "type": "word",
    "front": "turn sideways",
    "meaning": "侧身",
    "example": "I had to turn sideways to fit through.",
    "id": "sw-000452"
  },
  {
    "type": "word",
    "front": "back out (of a gap)",
    "meaning": "从缝隙中倒退出来",
    "example": "I carefully backed out of the gap.",
    "id": "sw-000453"
  },
  {
    "type": "word",
    "front": "back out vs backtrack",
    "meaning": "从某空间退出 vs 沿原路折返",
    "example": "We backtracked to the previous junction.",
    "id": "sw-000454"
  },
  {
    "type": "word",
    "front": "crouch down → crawl through",
    "meaning": "蹲低 → 爬行穿过 低矮突出岩壁／低头钻",
    "example": "I crouched down and crawled through.",
    "id": "sw-000455"
  },
  {
    "type": "word",
    "front": "low overhang / duck under",
    "meaning": "低矮突出岩壁／低头钻过",
    "example": "Duck under the overhang.",
    "id": "sw-000456"
  },
  {
    "type": "word",
    "front": "brush the dust off",
    "meaning": "掸掉灰尘",
    "example": "I brushed the dust off my jacket.",
    "id": "sw-000457"
  },
  {
    "type": "word",
    "front": "put my backpack back on",
    "meaning": "重新背上背包",
    "example": "I put my pack back on.",
    "id": "sw-000458"
  },
  {
    "type": "word",
    "front": "drain properly / drain (noun)",
    "meaning": "排水顺畅／排水口",
    "example": "The sink is not draining properly.",
    "id": "sw-000459"
  },
  {
    "type": "word",
    "front": "fill up / be clogged / overflow",
    "meaning": "逐渐装满／堵塞／溢出",
    "example": "The sink was filling up.",
    "id": "sw-000460"
  },
  {
    "type": "word",
    "front": "bits of food / leftovers",
    "meaning": "食物碎屑／剩余食物",
    "example": "Scrape the leftovers off the plates.",
    "id": "sw-000461"
  },
  {
    "type": "word",
    "front": "scrape something off",
    "meaning": "刮去附着物",
    "example": "Scrape the food off the plate.",
    "id": "sw-000462"
  },
  {
    "type": "word",
    "front": "rinse under running water",
    "meaning": "用流动水冲洗",
    "example": "Rinse the plates under running water.",
    "id": "sw-000463"
  },
  {
    "type": "word",
    "front": "stack the dishes vs pile up",
    "meaning": "整齐叠放餐具 vs 随意堆放",
    "example": "Stack the dishes on the rack.",
    "id": "sw-000464"
  },
  {
    "type": "word",
    "front": "drying rack",
    "meaning": "沥水架／晾衣架",
    "example": "Put the plates on the drying rack.",
    "id": "sw-000465"
  },
  {
    "type": "word",
    "front": "clear a blockage",
    "meaning": "清除堵塞",
    "example": "I cleared the blockage.",
    "id": "sw-000466"
  },
  {
    "type": "word",
    "front": "shake off excess water",
    "meaning": "甩掉多余水分",
    "example": "Shake the water off gently.",
    "id": "sw-000467"
  },
  {
    "type": "word",
    "front": "leave to air-dry",
    "meaning": "放着自然风干",
    "example": "Leave the dishes to air-dry.",
    "id": "sw-000468"
  },
  {
    "type": "word",
    "front": "soak vs scrub vs rinse",
    "meaning": "浸泡 vs 刷洗 vs 冲洗",
    "example": "Soak it, scrub it, then rinse it.",
    "id": "sw-000469"
  },
  {
    "type": "word",
    "front": "check-in counter",
    "meaning": "值机柜台",
    "example": "I arrived at the check-in counter.",
    "id": "sw-000470"
  },
  {
    "type": "word",
    "front": "scale / put suitcase on scale",
    "meaning": "秤／把箱子放秤上",
    "example": "Put your suitcase on the scale.",
    "id": "sw-000471"
  },
  {
    "type": "word",
    "front": "three kilos overweight",
    "meaning": "超重三公斤",
    "example": "The suitcase is three kilos overweight.",
    "id": "sw-000472"
  },
  {
    "type": "word",
    "front": "overweight vs oversized vs bulky",
    "meaning": "超重 vs 超尺寸 vs 体积大",
    "example": "It is bulky but not overweight.",
    "id": "sw-000473"
  },
  {
    "type": "word",
    "front": "rearrange my luggage / furniture / schedule",
    "meaning": "重整行李／家具／安排",
    "example": "I rearranged my luggage.",
    "id": "sw-000474"
  },
  {
    "type": "word",
    "front": "unzip / zip back up",
    "meaning": "拉开拉链／重新拉好",
    "example": "I unzipped the suitcase and zipped it back up.",
    "id": "sw-000475"
  },
  {
    "type": "word",
    "front": "stuff into a bag",
    "meaning": "塞进包",
    "example": "I stuffed the jacket into my carry-on.",
    "id": "sw-000476"
  },
  {
    "type": "word",
    "front": "carry-on bag vs checked baggage",
    "meaning": "随身行李 vs 托运行李",
    "example": "I moved the books into my carry-on bag.",
    "id": "sw-000477"
  },
  {
    "type": "word",
    "front": "within the weight / time limit / budget",
    "meaning": "在重量／时间／预算限 制内",
    "example": "Now it is within the weight limit.",
    "id": "sw-000478"
  },
  {
    "type": "word",
    "front": "attach a baggage tag / check in a bag",
    "meaning": "贴上行李标签／托运",
    "example": "The agent attached a baggage tag.",
    "id": "sw-000479"
  },
  {
    "type": "word",
    "front": "wander off the trail / marked route",
    "meaning": "不知不觉偏离小路／标记路线",
    "example": "I wandered off the marked route.",
    "id": "sw-000480"
  },
  {
    "type": "word",
    "front": "marked route / waymark",
    "meaning": "有标记路线／路标",
    "example": "I had not seen a waymark for a while.",
    "id": "sw-000481"
  },
  {
    "type": "word",
    "front": "trail junction",
    "meaning": "徒步岔路口",
    "example": "We stopped at a junction.",
    "id": "sw-000482"
  },
  {
    "type": "word",
    "front": "landmark / familiar landmark",
    "meaning": "地标／熟悉的地物 弄清位置／想出解决办",
    "example": "Look for familiar landmarks.",
    "id": "sw-000483"
  },
  {
    "type": "word",
    "front": "work out where I am / a solution",
    "meaning": "弄清位置／想出解决办法",
    "example": "I tried to work out where I was.",
    "id": "sw-000484"
  },
  {
    "type": "word",
    "front": "match the terrain / not match the map",
    "meaning": "和地形匹配／与地图对不上",
    "example": "The terrain did not match my map.",
    "id": "sw-000485"
  },
  {
    "type": "word",
    "front": "be off course / get farther off course",
    "meaning": "走偏／越走越偏",
    "example": "We are getting farther off course.",
    "id": "sw-000486"
  },
  {
    "type": "word",
    "front": "retrace my steps",
    "meaning": "沿来路返回",
    "example": "I retraced my steps to the last junction.",
    "id": "sw-000487"
  },
  {
    "type": "word",
    "front": "get my bearings",
    "meaning": "确认位置和方位",
    "example": "Give me a minute to get my bearings.",
    "id": "sw-000488"
  },
  {
    "type": "word",
    "front": "rather than push on",
    "meaning": "而不是硬往前走",
    "example": "I turned back rather than pushing on.",
    "id": "sw-000489"
  },
  {
    "type": "word",
    "front": "damp vs humid vs moist",
    "meaning": "物体潮湿 vs 空气湿润 vs 适度湿润",
    "example": "The clothes are damp because the room is humid.",
    "id": "sw-000490"
  },
  {
    "type": "word",
    "front": "hardly any airflow",
    "meaning": "几乎不通风",
    "example": "There is hardly any airflow.",
    "id": "sw-000491"
  },
  {
    "type": "word",
    "front": "give something a (good) shake",
    "meaning": "把某物用力抖一抖",
    "example": "Give the jacket a good shake.",
    "id": "sw-000492"
  },
  {
    "type": "word",
    "front": "shake off vs give a shake",
    "meaning": "甩掉附着物 vs 做抖动动作",
    "example": "Shake off the excess water.",
    "id": "sw-000493"
  },
  {
    "type": "word",
    "front": "hang clothes farther apart",
    "meaning": "衣服挂得更分散",
    "example": "Hang the clothes farther apart.",
    "id": "sw-000494"
  },
  {
    "type": "word",
    "front": "too close together / spread out",
    "meaning": "挨太近／分散展开",
    "example": "The shirts are too close together.",
    "id": "sw-000495"
  },
  {
    "type": "word",
    "front": "squeeze out vs wring out",
    "meaning": "挤出 vs 拧干",
    "example": "Squeeze the sponge, but wring out the towel.",
    "id": "sw-000496"
  },
  {
    "type": "word",
    "front": "smell musty vs be moldy",
    "meaning": "有霉味 vs 长了霉",
    "example": "The room smells musty but I cannot see mold.",
    "id": "sw-000497"
  },
  {
    "type": "word",
    "front": "leave something sitting there",
    "meaning": "让某物一直搁着",
    "example": "Do not leave wet clothes sitting in the machine.",
    "id": "sw-000498"
  },
  {
    "type": "word",
    "front": "dry → damp → wet → soaked",
    "meaning": "干 → 潮 → 湿 → 湿透",
    "example": "My clothes stayed damp for hours.",
    "id": "sw-000499"
  },
  {
    "type": "word",
    "front": "knock over vs knock off vs tip over",
    "meaning": "碰翻 vs 从表面碰落 vs 自己翻倒",
    "example": "I knocked over my glass.",
    "id": "sw-000500"
  },
  {
    "type": "word",
    "front": "spill across vs spill onto",
    "meaning": "洒过表面 vs 洒到某物上",
    "example": "Water spilled across the table and onto my trousers.",
    "id": "sw-000501"
  },
  {
    "type": "word",
    "front": "drip over the edge",
    "meaning": "沿边缘滴落",
    "example": "Water was dripping over the edge.",
    "id": "sw-000502"
  },
  {
    "type": "word",
    "front": "soak up the water / spill",
    "meaning": "吸掉水／洒出的液体",
    "example": "Use napkins to soak up the water.",
    "id": "sw-000503"
  },
  {
    "type": "word",
    "front": "soak in vs soak up",
    "meaning": "浸泡在……中 vs 吸收液体",
    "example": "The cloth soaked up the spill.",
    "id": "sw-000504"
  },
  {
    "type": "word",
    "front": "seep into / seep through",
    "meaning": "慢慢渗入／渗透 餐巾纸／厨房纸／面巾",
    "example": "Water seeped into the fabric.",
    "id": "sw-000505"
  },
  {
    "type": "word",
    "front": "napkin / paper towel / tissue",
    "meaning": "餐巾纸／厨房纸／面巾纸",
    "example": "Grab a few napkins.",
    "id": "sw-000506"
  },
  {
    "type": "word",
    "front": "move something out of the way",
    "meaning": "把某物挪开免得碍事 换桌／改路线／改用现",
    "example": "Move the bag out of the way.",
    "id": "sw-000507"
  },
  {
    "type": "word",
    "front": "switch to another table / route / cash",
    "meaning": "换桌／改路线／改用现金",
    "example": "Can we switch to another table?",
    "id": "sw-000508"
  },
  {
    "type": "word",
    "front": "wipe down / wipe dry",
    "meaning": "整体擦拭／擦干",
    "example": "The waiter wiped down the table.",
    "id": "sw-000509"
  },
  {
    "type": "word",
    "front": "scree slope / gravel / boulder field",
    "meaning": "碎石坡／砾石／巨石区 松动岩石／不稳定脚下",
    "example": "The trail crossed a steep scree slope.",
    "id": "sw-000510"
  },
  {
    "type": "word",
    "front": "loose rocks / unstable footing",
    "meaning": "松动岩石／不稳定脚下条件",
    "example": "Watch out for loose rocks.",
    "id": "sw-000511"
  },
  {
    "type": "word",
    "front": "shift underneath my feet",
    "meaning": "在我脚下移动",
    "example": "The gravel kept shifting underneath me.",
    "id": "sw-000512"
  },
  {
    "type": "word",
    "front": "footing vs foothold",
    "meaning": "整体落脚条件 vs 具体落脚点",
    "example": "I could not find a firm foothold.",
    "id": "sw-000513"
  },
  {
    "type": "word",
    "front": "firm foothold",
    "meaning": "稳 固 的 落 脚 点",
    "example": "Look for a firm foothold.",
    "id": "sw-000514"
  },
  {
    "type": "word",
    "front": "shift your weight onto / keep weight over feet",
    "meaning": "转移重心到……／让重心保持在脚上方",
    "example": "Shift your weight onto your left foot.",
    "id": "sw-000515"
  },
  {
    "type": "word",
    "front": "tumble downhill vs roll downhill",
    "meaning": "不规则翻滚下坡 vs 滚下坡",
    "example": "A rock tumbled downhill.",
    "id": "sw-000516"
  },
  {
    "type": "word",
    "front": "rattle / rattling stones",
    "meaning": "哗啦作响／石块碰撞声",
    "example": "I heard stones rattling above me.",
    "id": "sw-000517"
  },
  {
    "type": "word",
    "front": "traverse a slope / cross the slope",
    "meaning": "横切山坡",
    "example": "We traversed the steep slope.",
    "id": "sw-000518"
  },
  {
    "type": "word",
    "front": "ascend / descend / traverse",
    "meaning": "上升／下降／横切",
    "example": "We descended before traversing the slope.",
    "id": "sw-000519"
  },
  {
    "type": "word",
    "front": "make your way across",
    "meaning": "逐渐、小心穿过",
    "example": "We made our way across the loose rocks.",
    "id": "sw-000520"
  },
  {
    "type": "word",
    "front": "portable charger / power bank",
    "meaning": "便携充电器／充电宝",
    "example": "I bought a portable charger.",
    "id": "sw-000521"
  },
  {
    "type": "word",
    "front": "faulty vs defective vs damaged vs worn out",
    "meaning": "有故障 vs 有缺陷 vs 受损 vs 用旧磨损",
    "example": "The charger seemed faulty.",
    "id": "sw-000522"
  },
  {
    "type": "word",
    "front": "plug in / would not charge",
    "meaning": "插电／就是充不进去电",
    "example": "I plugged it in but it would not charge.",
    "id": "sw-000523"
  },
  {
    "type": "word",
    "front": "take something back to the store",
    "meaning": "把商品拿回商店退换",
    "example": "I took it back with the receipt.",
    "id": "sw-000524"
  },
  {
    "type": "word",
    "front": "receipt / proof of purchase",
    "meaning": "收据／购买凭证",
    "example": "Do you have proof of purchase?",
    "id": "sw-000525"
  },
  {
    "type": "word",
    "front": "exchange A for B",
    "meaning": "用A换B",
    "example": "Can I exchange it for a new one?",
    "id": "sw-000526"
  },
  {
    "type": "word",
    "front": "ask for / get / issue a refund",
    "meaning": "要求／获得／办理退款",
    "example": "I asked for a refund instead.",
    "id": "sw-000527"
  },
  {
    "type": "word",
    "front": "process a return / refund / payment",
    "meaning": "处理退货／退款／支付",
    "example": "The assistant processed the return.",
    "id": "sw-000528"
  },
  {
    "type": "word",
    "front": "store credit",
    "meaning": "商店购物余额／额度",
    "example": "They offered store credit instead.",
    "id": "sw-000529"
  },
  {
    "type": "word",
    "front": "money go back onto my card",
    "meaning": "钱退回银行卡",
    "example": "The money will go back onto your card.",
    "id": "sw-000530"
  },
  {
    "type": "word",
    "front": "slip off the chainring",
    "meaning": "从齿盘滑脱",
    "example": "The chain slipped off the front chainring.",
    "id": "sw-000531"
  },
  {
    "type": "word",
    "front": "chain / chainring / pedal",
    "meaning": "链条／前齿盘／踏板",
    "example": "The pedals started spinning freely.",
    "id": "sw-000532"
  },
  {
    "type": "word",
    "front": "spin freely",
    "meaning": "自由旋转、空转",
    "example": "The wheel spins freely.",
    "id": "sw-000533"
  },
  {
    "type": "word",
    "front": "turn vs rotate vs spin",
    "meaning": "转动 vs 旋转（偏正式）vs 连续旋转",
    "example": "Spin the wheel by hand.",
    "id": "sw-000534"
  },
  {
    "type": "word",
    "front": "pull over to the side",
    "meaning": "靠路边停车",
    "example": "I pulled over to check the chain.",
    "id": "sw-000535"
  },
  {
    "type": "word",
    "front": "turn upside down vs turn sideways",
    "meaning": "倒过来 vs 侧转",
    "example": "I turned the bike upside down.",
    "id": "sw-000536"
  },
  {
    "type": "word",
    "front": "put the chain back on",
    "meaning": "把链条装回",
    "example": "Put the chain back on the chainring.",
    "id": "sw-000537"
  },
  {
    "type": "word",
    "front": "by hand / turn the pedals by hand",
    "meaning": "手动／用手转动踏板 润滑脂／油腻／沾满油",
    "example": "I turned the pedals by hand.",
    "id": "sw-000538"
  },
  {
    "type": "word",
    "front": "grease / greasy / covered in grease",
    "meaning": "润滑脂／油腻／沾满油脂",
    "example": "My fingers were covered in grease.",
    "id": "sw-000539"
  },
  {
    "type": "word",
    "front": "test ride / test drive",
    "meaning": "试骑／试驾",
    "example": "I took the bike for a short test ride.",
    "id": "sw-000540"
  },
  {
    "type": "word",
    "front": "run smoothly",
    "meaning": "运转顺畅",
    "example": "Everything was running smoothly.",
    "id": "sw-000541"
  },
  {
    "type": "word",
    "front": "wash away / washed out",
    "meaning": "被水冲走／被冲毁",
    "example": "Part of the trail was washed away.",
    "id": "sw-000542"
  },
  {
    "type": "word",
    "front": "wash off vs wash away",
    "meaning": "从表面洗掉 vs 整体冲走",
    "example": "Rain washed away the path.",
    "id": "sw-000543"
  },
  {
    "type": "word",
    "front": "swell / swollen river / stream",
    "meaning": "涨大／暴涨的河／溪",
    "example": "The stream had swollen overnight.",
    "id": "sw-000544"
  },
  {
    "type": "word",
    "front": "erode the bank / erosion",
    "meaning": "侵蚀河岸／侵蚀",
    "example": "The water eroded the bank.",
    "id": "sw-000545"
  },
  {
    "type": "word",
    "front": "collapse / collapsed bridge",
    "meaning": "坍塌／坍塌的桥 突然支撑不住／地面塌",
    "example": "Part of the bridge collapsed.",
    "id": "sw-000546"
  },
  {
    "type": "word",
    "front": "give way / ground gives way",
    "meaning": "突然支撑不住／地面塌陷",
    "example": "The bridge gave way under the load.",
    "id": "sw-000547"
  },
  {
    "type": "word",
    "front": "debris / scattered debris",
    "meaning": "残骸、碎屑／散落残骸",
    "example": "Debris was piled up downstream.",
    "id": "sw-000548"
  },
  {
    "type": "word",
    "front": "debris vs shards",
    "meaning": "片",
    "example": "Broken branches and other debris filled the stream.",
    "id": "sw-000549"
  },
  {
    "type": "word",
    "front": "stay well back / well away from",
    "meaning": "退到足够远的距离",
    "example": "Stay well back from the edge.",
    "id": "sw-000550"
  },
  {
    "type": "word",
    "front": "higher ground",
    "meaning": "地势更高的地方",
    "example": "Move to higher ground.",
    "id": "sw-000551"
  },
  {
    "type": "word",
    "front": "follow a marked detour",
    "meaning": "沿着标记好的绕行路线",
    "example": "We followed a marked detour.",
    "id": "sw-000552"
  },
  {
    "type": "word",
    "front": "get tangled up / tangled hair",
    "meaning": "缠乱／打结的头发",
    "example": "The cable was completely tangled up.",
    "id": "sw-000553"
  },
  {
    "type": "word",
    "front": "wrap around something",
    "meaning": "围绕某物缠绕 打结／收紧／放松／解",
    "example": "The cable wrapped around my keys.",
    "id": "sw-000554"
  },
  {
    "type": "word",
    "front": "tie / tighten / loosen / untie a knot",
    "meaning": "打结／收紧／放松／解结",
    "example": "There was a tight knot near the end.",
    "id": "sw-000555"
  },
  {
    "type": "word",
    "front": "pull something apart",
    "meaning": "把某物拉开",
    "example": "Pulling the wires apart made things worse.",
    "id": "sw-000556"
  },
  {
    "type": "word",
    "front": "untangle the cable / hair",
    "meaning": "解开缠绕的线／头发",
    "example": "I untangled the cable.",
    "id": "sw-000557"
  },
  {
    "type": "word",
    "front": "twist vs tangle / untwist",
    "meaning": "扭转 vs 缠乱／解开扭转",
    "example": "I untwisted the cable.",
    "id": "sw-000558"
  },
  {
    "type": "word",
    "front": "straighten out the cable / collar",
    "meaning": "理直线／理平衣领 纤维磨散／磨损绳子／",
    "example": "Straighten out the cable.",
    "id": "sw-000559"
  },
  {
    "type": "word",
    "front": "fray / frayed rope / frayed edges",
    "meaning": "纤维磨散／磨损绳子／磨散边缘",
    "example": "The insulation was starting to fray.",
    "id": "sw-000560"
  },
  {
    "type": "word",
    "front": "connector / insulation",
    "meaning": "接头／绝缘层",
    "example": "The cable was frayed near the connector.",
    "id": "sw-000561"
  },
  {
    "type": "word",
    "front": "coil up a cable / rope",
    "meaning": "把线／绳子盘成圈",
    "example": "Coil the cable up neatly.",
    "id": "sw-000562"
  },
  {
    "type": "word",
    "front": "mix-up / there has been a mix-up",
    "meaning": "弄混／发生了差错",
    "example": "There seems to have been a mix-up.",
    "id": "sw-000563"
  },
  {
    "type": "word",
    "front": "bring out the food / food comes out",
    "meaning": "端菜出来／菜上了",
    "example": "The waiter brought out the food.",
    "id": "sw-000564"
  },
  {
    "type": "word",
    "front": "flag down a waiter / taxi",
    "meaning": "招 呼 服 务 员 ／招手拦车",
    "example": "I flagged down the waiter.",
    "id": "sw-000565"
  },
  {
    "type": "word",
    "front": "be backed up / kitchen backed up / traffic backed up",
    "meaning": "订单或交通积压",
    "example": "The kitchen is pretty backed up.",
    "id": "sw-000566"
  },
  {
    "type": "word",
    "front": "get held up / order held up",
    "meaning": "被耽搁／订单延误",
    "example": "My order has been held up.",
    "id": "sw-000567"
  },
  {
    "type": "word",
    "front": "check on my order / check on someone",
    "meaning": "查看订单进度／看看某人状况",
    "example": "Could you check on my order?",
    "id": "sw-000568"
  },
  {
    "type": "word",
    "front": "on the house",
    "meaning": "店家免费赠送",
    "example": "Dessert is on the house.",
    "id": "sw-000569"
  },
  {
    "type": "word",
    "front": "make up for the delay / lost time",
    "meaning": "弥补延误／耽误的时间",
    "example": "The dessert was meant to make up for the delay.",
    "id": "sw-000570"
  },
  {
    "type": "word",
    "front": "roughly how long will it take?",
    "meaning": "大约还要多久？",
    "example": "Do you know roughly how long it will take?",
    "id": "sw-000571"
  },
  {
    "type": "word",
    "front": "when you get a chance / no worries",
    "meaning": "方便时／没关系",
    "example": "Could you check when you get a chance?",
    "id": "sw-000572"
  },
  {
    "type": "word",
    "front": "fresh / powdery / packed / icy / slushy snow",
    "meaning": "新雪／粉雪／踩实的雪／结冰雪／湿软雪泥",
    "example": "The snow was soft and powdery.",
    "id": "sw-000573"
  },
  {
    "type": "word",
    "front": "pack down snow / soil",
    "meaning": "踩实积雪／压实土壤 冻结 → 融化 → 重新冻",
    "example": "The snow was packed down by hikers.",
    "id": "sw-000574"
  },
  {
    "type": "word",
    "front": "freeze → melt → refreeze",
    "meaning": "结",
    "example": "The snow melted and refroze overnight.",
    "id": "sw-000575"
  },
  {
    "type": "word",
    "front": "icy patch / a patch of snow",
    "meaning": "局部冰面／一片雪",
    "example": "Watch out for icy patches.",
    "id": "sw-000576"
  },
  {
    "type": "word",
    "front": "crunch underfoot / crunch under boots",
    "meaning": "脚下发出咯吱声",
    "example": "The snow crunched underfoot.",
    "id": "sw-000577"
  },
  {
    "type": "word",
    "front": "crust / hard snow crust",
    "meaning": "表层硬壳／硬雪壳",
    "example": "The hard crust gave way.",
    "id": "sw-000578"
  },
  {
    "type": "word",
    "front": "give way (support collapses)",
    "meaning": "支撑突然失效",
    "example": "The snow crust gave way under my foot.",
    "id": "sw-000579"
  },
  {
    "type": "word",
    "front": "sink – sank – sunk / sink into",
    "meaning": "下沉／陷进",
    "example": "My boot sank into the snow.",
    "id": "sw-000580"
  },
  {
    "type": "word",
    "front": "slushy / turn slushy",
    "meaning": "湿软雪泥状／变成雪泥",
    "example": "The snow is turning slushy.",
    "id": "sw-000581"
  },
  {
    "type": "word",
    "front": "traction / grip / good grip",
    "meaning": "抓地力／附着力 背阴路段／结冰更严重",
    "example": "These boots have little grip on ice.",
    "id": "sw-000582"
  },
  {
    "type": "word",
    "front": "shaded section / icier ridge",
    "meaning": "背阴路段／结冰更严重的山脊",
    "example": "The shaded sections were icy.",
    "id": "sw-000583"
  },
  {
    "type": "ladder",
    "front": "leak / drip / spill / overflow",
    "meaning": "漏／滴／洒／溢",
    "example": "The bag was leaking and water was dripping on the floor.",
    "id": "sw-000584"
  },
  {
    "type": "ladder",
    "front": "lift → carry → tilt → turn sideways → lower → set down",
    "meaning": "抬起→搬运→倾斜→侧转→降低→放下",
    "example": "Lower your end slowly.",
    "id": "sw-000585"
  },
  {
    "type": "ladder",
    "front": "tap → declined → try again → insert → enter PIN → go through",
    "meaning": "感应→拒付→重试→插卡→输入密码→成功",
    "example": "The payment finally went through.",
    "id": "sw-000586"
  },
  {
    "type": "ladder",
    "front": "snag → tear → rip → trim → patch → hold together",
    "meaning": "勾住→撕裂→裂口→修剪→打补丁→维持完整",
    "example": "The temporary patch held together.",
    "id": "sw-000587"
  },
  {
    "type": "ladder",
    "front": "approach → pull in → come to a stop → get off → pull away",
    "meaning": "接近→驶入→停稳→下车→驶离",
    "example": "By the time I looked up, the bus had pulled away.",
    "id": "sw-000588"
  },
  {
    "type": "ladder",
    "front": "rub → irritate → sting → blister forms → cover → adjust",
    "meaning": "摩擦→刺激→刺痛→水泡形成→覆盖→调整",
    "example": "The rubbing made my skin sting.",
    "id": "sw-000589"
  },
  {
    "type": "ladder",
    "front": "fresh → stale / wilted / slimy / moldy → spoiled",
    "meaning": "新鲜→变干／萎蔫／黏滑／发霉→变质",
    "example": "The lettuce wilted and the bread went moldy.",
    "id": "sw-000590"
  },
  {
    "type": "ladder",
    "front": "slip out → get soaked → turn off → wipe dry → dry out",
    "meaning": "滑出→湿透→关机→擦干→干透",
    "example": "I wiped the surface dry and left it to dry out.",
    "id": "sw-000591"
  },
  {
    "type": "ladder",
    "front": "turn sideways → squeeze through → snag → back out → crawl",
    "meaning": "侧身→挤过→勾住→退出→爬过",
    "example": "I backed out and crawled under the rock.",
    "id": "sw-000592"
  },
  {
    "type": "ladder",
    "front": "soak → scrub → rinse → stack → shake off → air-dry",
    "meaning": "泡→刷→冲→叠→甩水→自然风干",
    "example": "Stack the dishes on the drying rack.",
    "id": "sw-000593"
  },
  {
    "type": "ladder",
    "front": "weigh → overweight → rearrange → move to carry-on → reweigh → check in",
    "meaning": "称重→超重→重整→移入随身包→重称→托运",
    "example": "After rearranging, the bag was within the limit.",
    "id": "sw-000594"
  },
  {
    "type": "ladder",
    "front": "wander off → notice waymarks missing → GPS → landmarks → retrace → get bearings",
    "meaning": "走偏→缺少标记→GPS→地标→折返→确定方位",
    "example": "I stopped to get my bearings.",
    "id": "sw-000595"
  },
  {
    "type": "ladder",
    "front": "dry → damp → wet → soaked; humid → musty",
    "meaning": "干→潮→湿→湿透；潮湿空气→霉味",
    "example": "The humid room made the towels smell musty.",
    "id": "sw-000596"
  },
  {
    "type": "ladder",
    "front": "knock over → spill across → drip → seep into → soak up → wipe dry",
    "meaning": "碰翻→流过→滴落→渗入→吸掉→擦干",
    "example": "Water seeped into the fabric.",
    "id": "sw-000597"
  },
  {
    "type": "ladder",
    "front": "loose rocks → gravel shifts → lose foothold → tumble → rattle",
    "meaning": "松石→砾石移动→失稳→翻滚→碰撞声",
    "example": "The gravel shifted under my feet.",
    "id": "sw-000598"
  },
  {
    "type": "ladder",
    "front": "faulty → take back → test → exchange / refund → process return",
    "meaning": "故障→带回→检测→换货／退款→办理",
    "example": "They processed a refund.",
    "id": "sw-000599"
  },
  {
    "type": "ladder",
    "front": "chain slips off → pedals spin freely → put back on → test ride",
    "meaning": "链条脱落→踏板空转→装回→试骑",
    "example": "The pedals spun freely.",
    "id": "sw-000600"
  },
  {
    "type": "ladder",
    "front": "stream swells → bank erodes → trail washes out → bridge gives way",
    "meaning": "溪水暴涨→冲刷河岸→冲毁山路→桥垮塌",
    "example": "Part of the footbridge gave way.",
    "id": "sw-000601"
  },
  {
    "type": "ladder",
    "front": "tangle → wrap around → knot → loosen → untwist → straighten → coil up",
    "meaning": "缠乱→绕住→打结→松开→解扭→理直→盘起",
    "example": "I untangled and coiled up the cable.",
    "id": "sw-000602"
  },
  {
    "type": "ladder",
    "front": "mix-up → flag down → backed up → held up → check on → on the house",
    "meaning": "弄混→招呼→积压→延误→催查→店家赠送",
    "example": "They offered dessert on the house.",
    "id": "sw-000603"
  },
  {
    "type": "ladder",
    "front": "powdery → packed → melt / refreeze → icy / slushy",
    "meaning": "粉雪→踩实→融化／复冻→结冰／雪泥",
    "example": "The snow melted and refroze into icy patches.",
    "id": "sw-000604"
  },
  {
    "type": "ladder",
    "front": "solid crust → crust gives way → sink knee-deep",
    "meaning": "坚实雪壳→突然塌陷→陷至齐膝",
    "example": "My leg sank knee-deep into the snow.",
    "id": "sw-000605"
  },
  {
    "type": "ladder",
    "front": "roll vs spin vs rotate vs tumble",
    "meaning": "滚动 vs 连续旋转 vs 旋转改变方向 vs 不规则翻滚",
    "example": "The rock tumbled downhill while the wheel spun.",
    "id": "sw-000606"
  },
  {
    "type": "ladder",
    "front": "check on an order / check on hikers",
    "meaning": "跟进订单／看看队员情况",
    "example": "I checked on the slower hikers.",
    "id": "sw-000607"
  },
  {
    "type": "word",
    "front": "Boil",
    "meaning": "煮沸、水煮",
    "example": "Boil the potatoes until they are tender.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000608"
  },
  {
    "type": "word",
    "front": "Simmer",
    "meaning": "小火慢煮、微沸",
    "example": "Let the sauce simmer gently for ten minutes.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000609"
  },
  {
    "type": "word",
    "front": "Poach",
    "meaning": "低温水煮、浸煮",
    "example": "Poach the eggs in gently simmering water.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000610"
  },
  {
    "type": "word",
    "front": "Blanch",
    "meaning": "焯水",
    "example": "Blanch the broccoli in boiling water for a minute.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000611"
  },
  {
    "type": "word",
    "front": "Stew",
    "meaning": "炖煮",
    "example": "Stew the beef slowly until it is tender.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000612"
  },
  {
    "type": "word",
    "front": "Braise",
    "meaning": "焖炖、红烧",
    "example": "Braise the meat in a little liquid over low heat.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000613"
  },
  {
    "type": "word",
    "front": "Steam",
    "meaning": "蒸",
    "example": "Steam the vegetables until they are cooked.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000614"
  },
  {
    "type": "word",
    "front": "Fry",
    "meaning": "煎、炸",
    "example": "Fry the eggs in a little oil.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000615"
  },
  {
    "type": "word",
    "front": "Stir-fry",
    "meaning": "翻炒",
    "example": "Stir-fry the vegetables over high heat.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000616"
  },
  {
    "type": "word",
    "front": "Pan-fry",
    "meaning": "平底锅煎",
    "example": "Pan-fry the fish until the skin is crisp.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000617"
  },
  {
    "type": "word",
    "front": "Deep-fry",
    "meaning": "油炸",
    "example": "Deep-fry the potatoes until golden brown.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000618"
  },
  {
    "type": "word",
    "front": "Shallow-fry",
    "meaning": "浅油煎炸",
    "example": "Shallow-fry the cutlets in a layer of oil.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000619"
  },
  {
    "type": "word",
    "front": "Sauté",
    "meaning": "煸炒、少油炒",
    "example": "Sauté the onions in a little butter.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000620"
  },
  {
    "type": "word",
    "front": "Sear",
    "meaning": "高温煎至表面焦黄",
    "example": "Sear the steak over high heat.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000621"
  },
  {
    "type": "word",
    "front": "Bake",
    "meaning": "烘焙、烤",
    "example": "Bake the bread in a preheated oven.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000622"
  },
  {
    "type": "word",
    "front": "Roast",
    "meaning": "烘烤肉类或蔬菜",
    "example": "Roast the chicken with potatoes.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000623"
  },
  {
    "type": "word",
    "front": "Grill",
    "meaning": "烧烤、炙烤",
    "example": "Grill the vegetables until lightly charred.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000624"
  },
  {
    "type": "word",
    "front": "Barbecue",
    "meaning": "烧烤",
    "example": "We barbecued chicken in the backyard.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000625"
  },
  {
    "type": "word",
    "front": "Toast",
    "meaning": "烤脆、烘香",
    "example": "Toast the bread until golden brown.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000626"
  },
  {
    "type": "word",
    "front": "Broil",
    "meaning": "从上方高温炙烤（美式）",
    "example": "Broil the fish for a few minutes to brown the top.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000627"
  },
  {
    "type": "word",
    "front": "Air-fry",
    "meaning": "空气炸",
    "example": "Air-fry the fries until crispy.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000628"
  },
  {
    "type": "word",
    "front": "Smoke",
    "meaning": "烟熏",
    "example": "Smoke the fish slowly over wood chips.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000629"
  },
  {
    "type": "word",
    "front": "Heat",
    "meaning": "加热",
    "example": "Heat the oil in a pan.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000630"
  },
  {
    "type": "word",
    "front": "Heat up",
    "meaning": "加热、热一下",
    "example": "Heat up the soup before serving.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000631"
  },
  {
    "type": "word",
    "front": "Reheat",
    "meaning": "重新加热",
    "example": "Reheat the leftovers thoroughly.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000632"
  },
  {
    "type": "word",
    "front": "Warm up",
    "meaning": "加热、温热",
    "example": "Warm up the milk gently.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000633"
  },
  {
    "type": "word",
    "front": "Microwave",
    "meaning": "用微波炉加热",
    "example": "Microwave the leftovers for two minutes.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000634"
  },
  {
    "type": "word",
    "front": "Melt",
    "meaning": "加热融化",
    "example": "Melt the butter over low heat.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000635"
  },
  {
    "type": "word",
    "front": "Bring to a boil",
    "meaning": "煮至沸腾",
    "example": "Bring the water to a boil, then reduce the heat.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000636"
  },
  {
    "type": "word",
    "front": "Turn up the heat",
    "meaning": "调大火",
    "example": "Turn up the heat to bring the sauce to a boil.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000637"
  },
  {
    "type": "word",
    "front": "Turn down the heat",
    "meaning": "调小火",
    "example": "Turn down the heat and let the soup simmer.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000638"
  },
  {
    "type": "word",
    "front": "Cook over low heat",
    "meaning": "小火烹饪",
    "example": "Cook the sauce over low heat.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000639"
  },
  {
    "type": "word",
    "front": "Cook over medium heat",
    "meaning": "中火烹饪",
    "example": "Cook the eggs over medium heat.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000640"
  },
  {
    "type": "word",
    "front": "Cook over high heat",
    "meaning": "大火烹饪",
    "example": "Cook the vegetables over high heat.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000641"
  },
  {
    "type": "word",
    "front": "a spare phone",
    "meaning": "一部备用手机",
    "example": "I keep a spare phone for emergencies.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000642"
  },
  {
    "type": "word",
    "front": "a backup phone",
    "meaning": "以防万一使用的备用手机",
    "example": "I always carry a backup phone when I travel.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000643"
  },
  {
    "type": "word",
    "front": "my main phone",
    "meaning": "我的主力手机",
    "example": "This isn't my main phone; it's a spare.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000644"
  },
  {
    "type": "word",
    "front": "my primary phone",
    "meaning": "我的主要手机",
    "example": "My primary phone is running out of battery.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000645"
  },
  {
    "type": "word",
    "front": "my second phone",
    "meaning": "我的第二部手机",
    "example": "I use my second phone when I travel.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000646"
  },
  {
    "type": "word",
    "front": "my daily driver",
    "meaning": "我日常主要使用的设备（科技口语）",
    "example": "This phone has been my daily driver for two years.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000647"
  },
  {
    "type": "word",
    "front": "keep something as a backup",
    "meaning": "把某物留作备用",
    "example": "I keep an older laptop as a backup.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000648"
  },
  {
    "type": "word",
    "front": "in case my phone dies",
    "meaning": "以防手机没电",
    "example": "I brought a charger in case my phone dies.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000649"
  },
  {
    "type": "word",
    "front": "switch to another phone",
    "meaning": "换用另一部手机",
    "example": "I'll switch to another phone if this one stops working.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000650"
  },
  {
    "type": "word",
    "front": "spray perfume on something",
    "meaning": "往某处喷香水",
    "example": "Spray perfume on your clothes lightly.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000651"
  },
  {
    "type": "word",
    "front": "spritz something on",
    "meaning": "轻轻喷一点",
    "example": "I spritz a little perfume on my wrists.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000652"
  },
  {
    "type": "word",
    "front": "give something a quick spritz",
    "meaning": "快速喷一下",
    "example": "Give your hair a quick spritz of water.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000653"
  },
  {
    "type": "word",
    "front": "mist your hair",
    "meaning": "给头发轻喷一层水雾",
    "example": "Mist your hair with water before styling it.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000654"
  },
  {
    "type": "word",
    "front": "dab perfume on your wrists",
    "meaning": "往手腕上轻点香水",
    "example": "I dab perfume on my wrists.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000655"
  },
  {
    "type": "word",
    "front": "apply perfume",
    "meaning": "涂抹或喷洒香水",
    "example": "Apply perfume sparingly.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000656"
  },
  {
    "type": "word",
    "front": "splash water on your face",
    "meaning": "往脸上泼水",
    "example": "Splash some water on your face to wake up.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000657"
  },
  {
    "type": "word",
    "front": "wet your hair",
    "meaning": "把头发弄湿",
    "example": "Wet your hair before applying shampoo.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000658"
  },
  {
    "type": "word",
    "front": "blow-dry your hair",
    "meaning": "用吹风机吹干头发",
    "example": "I blow-dry my hair after a shower.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000659"
  },
  {
    "type": "word",
    "front": "let your hair air-dry",
    "meaning": "让头发自然风干",
    "example": "I prefer to let my hair air-dry.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000660"
  },
  {
    "type": "word",
    "front": "soak into something",
    "meaning": "渗入某物",
    "example": "Give the sauce time to soak into the meat.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000661"
  },
  {
    "type": "word",
    "front": "spread evenly",
    "meaning": "均匀涂开、分布",
    "example": "Spread the cream evenly over your skin.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000662"
  },
  {
    "type": "word",
    "front": "breezy",
    "meaning": "微风习习的",
    "example": "It's a lovely breezy day for a walk.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000663"
  },
  {
    "type": "word",
    "front": "a light breeze",
    "meaning": "一阵微风",
    "example": "A light breeze made the walk more comfortable.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000664"
  },
  {
    "type": "word",
    "front": "gusty",
    "meaning": "阵风较多的",
    "example": "It's really gusty out today.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000665"
  },
  {
    "type": "word",
    "front": "a sudden gust of wind",
    "meaning": "一阵突如其来的强风",
    "example": "A sudden gust of wind almost knocked me over.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000666"
  },
  {
    "type": "word",
    "front": "strong gusts",
    "meaning": "强阵风",
    "example": "Strong gusts made cycling difficult.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000667"
  },
  {
    "type": "word",
    "front": "howling wind",
    "meaning": "呼啸的风",
    "example": "We could hear the howling wind outside.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000668"
  },
  {
    "type": "word",
    "front": "rain pelting down",
    "meaning": "雨猛烈地下着",
    "example": "I could feel the rain pelting down on me.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000669"
  },
  {
    "type": "word",
    "front": "rain pelting against the window",
    "meaning": "雨猛烈敲打窗户",
    "example": "The rain was pelting against the window.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000670"
  },
  {
    "type": "word",
    "front": "get caught in a downpour",
    "meaning": "遭遇倾盆大雨",
    "example": "I got caught in a downpour on my way home.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000671"
  },
  {
    "type": "word",
    "front": "pouring rain",
    "meaning": "倾盆大雨",
    "example": "I had to walk through the pouring rain.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000672"
  },
  {
    "type": "word",
    "front": "soaking wet",
    "meaning": "湿透了",
    "example": "My clothes were soaking wet.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000673"
  },
  {
    "type": "word",
    "front": "drenched",
    "meaning": "浑身湿透的",
    "example": "I got caught in a downpour and ended up drenched.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000674"
  },
  {
    "type": "word",
    "front": "slippery roads",
    "meaning": "湿滑的道路",
    "example": "Be careful on slippery roads after the rain.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000675"
  },
  {
    "type": "word",
    "front": "outdoor activities",
    "meaning": "户外活动",
    "example": "Strong gusts can make outdoor activities risky.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000676"
  },
  {
    "type": "word",
    "front": "get delayed",
    "meaning": "被延误",
    "example": "My train got delayed again.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000677"
  },
  {
    "type": "word",
    "front": "be running late",
    "meaning": "运行晚点",
    "example": "The train is running late this morning.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000678"
  },
  {
    "type": "word",
    "front": "be delayed by 20 minutes",
    "meaning": "晚点20分钟",
    "example": "Our train was delayed by 20 minutes.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000679"
  },
  {
    "type": "word",
    "front": "change platforms",
    "meaning": "更换站台",
    "example": "We had to change platforms at the station.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000680"
  },
  {
    "type": "word",
    "front": "a platform change",
    "meaning": "站台变更",
    "example": "There was a last-minute platform change.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000681"
  },
  {
    "type": "word",
    "front": "switch to another platform",
    "meaning": "改到另一个站台",
    "example": "We had to switch to another platform.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000682"
  },
  {
    "type": "word",
    "front": "a last-minute platform change",
    "meaning": "临时站台变更",
    "example": "A last-minute platform change caught me off guard.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000683"
  },
  {
    "type": "word",
    "front": "how often something happens",
    "meaning": "某件事发生得多么频繁",
    "example": "I'm surprised by how often this happens.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000684"
  },
  {
    "type": "word",
    "front": "It happens a lot.",
    "meaning": "这种事经常发生",
    "example": "It happens a lot on this route.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000685"
  },
  {
    "type": "word",
    "front": "catch a train",
    "meaning": "赶上、乘坐火车",
    "example": "I need to catch a train to Vilnius.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000686"
  },
  {
    "type": "word",
    "front": "miss a train",
    "meaning": "错过火车",
    "example": "I don't want to miss my train.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000687"
  },
  {
    "type": "word",
    "front": "rush to the platform",
    "meaning": "匆忙赶往站台",
    "example": "We had to rush to the platform.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000688"
  },
  {
    "type": "word",
    "front": "loudspeaker",
    "meaning": "扬声器、大喇叭",
    "example": "The announcement came through the loudspeaker.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000689"
  },
  {
    "type": "word",
    "front": "public-address system (PA system)",
    "meaning": "公共广播系统",
    "example": "The PA system was hard to hear.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000690"
  },
  {
    "type": "word",
    "front": "announcement",
    "meaning": "广播通知",
    "example": "I missed the announcement about the platform.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000691"
  },
  {
    "type": "word",
    "front": "muffled",
    "meaning": "声音发闷、不清晰",
    "example": "Why do station announcements sound so muffled?",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000692"
  },
  {
    "type": "word",
    "front": "muddy",
    "meaning": "声音浑浊、细节不清",
    "example": "The audio sounded muddy and unclear.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000693"
  },
  {
    "type": "word",
    "front": "hollow",
    "meaning": "空洞的、带空腔感的",
    "example": "The recording sounded hollow.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000694"
  },
  {
    "type": "word",
    "front": "crisp and clear",
    "meaning": "清脆而清晰",
    "example": "Her voice came through crisp and clear.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000695"
  },
  {
    "type": "word",
    "front": "high-fidelity sound",
    "meaning": "高保真声音",
    "example": "These headphones produce high-fidelity sound.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000696"
  },
  {
    "type": "word",
    "front": "background noise",
    "meaning": "背景噪声",
    "example": "The announcement was lost in the background noise.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000697"
  },
  {
    "type": "word",
    "front": "echoes",
    "meaning": "回声",
    "example": "The tunnel was full of echoes.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000698"
  },
  {
    "type": "word",
    "front": "mid-range frequencies",
    "meaning": "中频",
    "example": "The mid-range frequencies sounded too strong.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000699"
  },
  {
    "type": "word",
    "front": "sound distortion",
    "meaning": "声音失真",
    "example": "There was a lot of sound distortion.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000700"
  },
  {
    "type": "word",
    "front": "sound compression",
    "meaning": "音频压缩",
    "example": "Sound compression can affect the clarity of audio.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000701"
  },
  {
    "type": "word",
    "front": "blur together",
    "meaning": "模糊地混在一起",
    "example": "The different voices seem to blur together.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000702"
  },
  {
    "type": "word",
    "front": "run together",
    "meaning": "声音或单词连成一片",
    "example": "The words all seem to run together.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000703"
  },
  {
    "type": "word",
    "front": "get drowned out",
    "meaning": "被其他声音盖过",
    "example": "The announcement got drowned out by the noise.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000704"
  },
  {
    "type": "word",
    "front": "make something out",
    "meaning": "听清、辨认出某事物",
    "example": "I could barely make out what they were saying.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000705"
  },
  {
    "type": "word",
    "front": "sound squished",
    "meaning": "听起来像被挤在一起（形象、非正式说法）",
    "example": "The recording sounded squished and flat.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000706"
  },
  {
    "type": "word",
    "front": "sound blurry",
    "meaning": "听起来模糊（比喻用法）",
    "example": "The audio sounded blurry rather than clear.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000707"
  },
  {
    "type": "word",
    "front": "passive vocabulary",
    "meaning": "被动词汇（认识但未必会用）",
    "example": "I recognize the word, but it's still part of my passive vocabulary.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000708"
  },
  {
    "type": "word",
    "front": "active vocabulary",
    "meaning": "主动词汇（能主动使用）",
    "example": "I want to turn more words into active vocabulary.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000709"
  },
  {
    "type": "word",
    "front": "recognize a word",
    "meaning": "认出一个单词",
    "example": "I can recognize a word without knowing how to use it.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000710"
  },
  {
    "type": "word",
    "front": "actively use a word",
    "meaning": "主动使用一个单词",
    "example": "Try to actively use a word in a conversation.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000711"
  },
  {
    "type": "word",
    "front": "retrieve a word",
    "meaning": "从记忆中提取单词",
    "example": "Sometimes I can't retrieve a word quickly enough.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000712"
  },
  {
    "type": "word",
    "front": "word retrieval",
    "meaning": "词汇提取",
    "example": "Word retrieval gets easier with practice.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000713"
  },
  {
    "type": "word",
    "front": "struggle to find the right words",
    "meaning": "难以找到合适的措辞",
    "example": "I often struggle to find the right words.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000714"
  },
  {
    "type": "word",
    "front": "put something into words",
    "meaning": "用语言表达某事",
    "example": "It's hard to put that feeling into words.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000715"
  },
  {
    "type": "word",
    "front": "put something into simple terms",
    "meaning": "用简单的话解释某事",
    "example": "Can you put that into simple terms?",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000716"
  },
  {
    "type": "word",
    "front": "overcomplicate things",
    "meaning": "把事情弄得过于复杂",
    "example": "I tend to overcomplicate things when I speak.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000717"
  },
  {
    "type": "word",
    "front": "sound overly formal",
    "meaning": "听起来过于正式",
    "example": "That expression might sound overly formal.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000718"
  },
  {
    "type": "word",
    "front": "sound unnatural",
    "meaning": "听起来不自然",
    "example": "I know the grammar is right, but it can sound unnatural.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000719"
  },
  {
    "type": "word",
    "front": "make something sound complicated",
    "meaning": "把某事说得很复杂",
    "example": "I sometimes make simple ideas sound complicated.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000720"
  },
  {
    "type": "word",
    "front": "use abstract language",
    "meaning": "使用抽象的语言",
    "example": "Try not to use abstract language for everyday things.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000721"
  },
  {
    "type": "word",
    "front": "get your point across",
    "meaning": "把自己的意思表达清楚",
    "example": "I can get my point across, but I don't always sound natural.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000722"
  },
  {
    "type": "word",
    "front": "come naturally",
    "meaning": "自然而然地做到",
    "example": "These expressions will come naturally with practice.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000723"
  },
  {
    "type": "word",
    "front": "think on your feet",
    "meaning": "临场快速思考并回应",
    "example": "You need to think on your feet in a fast conversation.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000724"
  },
  {
    "type": "word",
    "front": "under pressure",
    "meaning": "在压力下",
    "example": "I struggle to respond under pressure.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000725"
  },
  {
    "type": "word",
    "front": "a sarcastic remark",
    "meaning": "讽刺性评论",
    "example": "That sounded more like a sarcastic remark.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000726"
  },
  {
    "type": "word",
    "front": "take something literally",
    "meaning": "从字面上理解某事",
    "example": "Don't take everything I say literally.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000727"
  },
  {
    "type": "word",
    "front": "sound like Shakespeare",
    "meaning": "听起来像莎士比亚（夸张或调侃）",
    "example": "That sentence makes me sound like Shakespeare.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000728"
  },
  {
    "type": "word",
    "front": "a staff member",
    "meaning": "一名工作人员",
    "example": "A staff member helped me find the right platform.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000729"
  },
  {
    "type": "word",
    "front": "a member of staff",
    "meaning": "一名工作人员（英式英语常见）",
    "example": "I asked a member of staff for help.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000730"
  },
  {
    "type": "word",
    "front": "station staff",
    "meaning": "车站工作人员",
    "example": "The station staff announced another delay.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000731"
  },
  {
    "type": "word",
    "front": "an airline gate agent",
    "meaning": "航空公司登机口工作人员",
    "example": "An airline gate agent checked my boarding pass.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000732"
  },
  {
    "type": "word",
    "front": "ticket inspector",
    "meaning": "检票员",
    "example": "The ticket inspector checked everyone's tickets.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000733"
  },
  {
    "type": "word",
    "front": "ticket clerk",
    "meaning": "售票员、售票窗口工作人员",
    "example": "I bought my ticket from the ticket clerk.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000734"
  },
  {
    "type": "word",
    "front": "customer service representative",
    "meaning": "客服代表",
    "example": "A customer service representative explained the refund.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000735"
  },
  {
    "type": "word",
    "front": "a service desk",
    "meaning": "服务台",
    "example": "I asked for directions at the service desk.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000736"
  },
  {
    "type": "word",
    "front": "ask someone for assistance",
    "meaning": "向某人寻求帮助",
    "example": "I asked a staff member for assistance.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000737"
  },
  {
    "type": "word",
    "front": "sort something out",
    "meaning": "解决、处理好某件事",
    "example": "The staff helped me sort everything out.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000738"
  },
  {
    "type": "word",
    "front": "point someone in the right direction",
    "meaning": "为某人指路或提供正确方向",
    "example": "Could you point me in the right direction?",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000739"
  },
  {
    "type": "word",
    "front": "a last-minute plan",
    "meaning": "最后一刻才制定的计划",
    "example": "I'm not a big fan of last-minute plans.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000740"
  },
  {
    "type": "word",
    "front": "make plans at the last minute",
    "meaning": "临近时才做计划",
    "example": "I don't like to make plans at the last minute.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000741"
  },
  {
    "type": "word",
    "front": "a spontaneous decision",
    "meaning": "临时起意、自然产生的决定",
    "example": "We made a spontaneous decision to go hiking.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000742"
  },
  {
    "type": "word",
    "front": "an impromptu trip",
    "meaning": "即兴安排的旅行",
    "example": "We took an impromptu trip to the coast.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000743"
  },
  {
    "type": "word",
    "front": "on a whim",
    "meaning": "一时兴起",
    "example": "I booked the trip on a whim.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000744"
  },
  {
    "type": "word",
    "front": "on the spur of the moment",
    "meaning": "一时冲动、临时起意",
    "example": "We decided to go hiking on the spur of the moment.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000745"
  },
  {
    "type": "word",
    "front": "out of the blue",
    "meaning": "突如其来、毫无征兆地",
    "example": "He called me out of the blue.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000746"
  },
  {
    "type": "word",
    "front": "plan ahead",
    "meaning": "提前计划",
    "example": "I prefer to plan ahead.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000747"
  },
  {
    "type": "word",
    "front": "stick to a plan",
    "meaning": "坚持原计划",
    "example": "I usually try to stick to a plan.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000748"
  },
  {
    "type": "word",
    "front": "play it by ear",
    "meaning": "到时候看情况再决定",
    "example": "We haven't decided yet; we'll play it by ear.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000749"
  },
  {
    "type": "word",
    "front": "go with the flow",
    "meaning": "顺其自然、随机应变",
    "example": "I like to go with the flow when I'm traveling.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000750"
  },
  {
    "type": "word",
    "front": "be up for something",
    "meaning": "愿意参加、乐意做某事",
    "example": "Are you up for a spontaneous weekend trip?",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000751"
  },
  {
    "type": "word",
    "front": "let the meat sit",
    "meaning": "让肉静置一会儿",
    "example": "Let the meat sit for ten minutes.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000752"
  },
  {
    "type": "word",
    "front": "let the meat rest",
    "meaning": "让肉在烹饪后静置",
    "example": "Let the meat rest before slicing it.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000753"
  },
  {
    "type": "word",
    "front": "let the sauce soak in",
    "meaning": "让酱汁渗进去",
    "example": "Let the sauce soak in for a while.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000754"
  },
  {
    "type": "word",
    "front": "soak into the meat",
    "meaning": "渗入肉中",
    "example": "Give the marinade time to soak into the meat.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000755"
  },
  {
    "type": "word",
    "front": "absorb the sauce",
    "meaning": "吸收酱汁",
    "example": "The meat will absorb some of the sauce.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000756"
  },
  {
    "type": "word",
    "front": "coat the meat evenly",
    "meaning": "让酱汁均匀裹住肉",
    "example": "Make sure to coat the meat evenly.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000757"
  },
  {
    "type": "word",
    "front": "let the flavors develop",
    "meaning": "让风味逐渐形成",
    "example": "Let the flavors develop over time.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000758"
  },
  {
    "type": "word",
    "front": "let the flavors meld",
    "meaning": "让各种味道融合",
    "example": "Give it time for the flavors to meld.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000759"
  },
  {
    "type": "word",
    "front": "marinate the meat",
    "meaning": "腌制肉类",
    "example": "Marinate the meat for at least two hours.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000760"
  },
  {
    "type": "word",
    "front": "let it marinate overnight",
    "meaning": "腌制一整夜",
    "example": "Let it marinate overnight in the fridge.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000761"
  },
  {
    "type": "word",
    "front": "redistribute the juices",
    "meaning": "让肉汁重新分布",
    "example": "Let the steak rest to redistribute the juices.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000762"
  },
  {
    "type": "word",
    "front": "tender and juicy",
    "meaning": "鲜嫩多汁",
    "example": "The chicken was tender and juicy.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000763"
  },
  {
    "type": "word",
    "front": "spread the sauce evenly",
    "meaning": "均匀涂抹酱汁",
    "example": "Spread the sauce evenly over the meat.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000764"
  },
  {
    "type": "word",
    "front": "season the meat",
    "meaning": "给肉调味",
    "example": "Season the meat with salt and pepper.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000765"
  },
  {
    "type": "word",
    "front": "taut",
    "meaning": "绷紧的、拉紧的",
    "example": "The rope was pulled taut.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000766"
  },
  {
    "type": "word",
    "front": "taught",
    "meaning": "teach 的过去式和过去分词",
    "example": "My teacher taught me that expression yesterday.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000767"
  },
  {
    "type": "word",
    "front": "tense",
    "meaning": "紧张的、肌肉紧绷的",
    "example": "I was really tense before the interview.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000768"
  },
  {
    "type": "word",
    "front": "on edge",
    "meaning": "神经紧绷、焦躁不安",
    "example": "I've been feeling on edge lately.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000769"
  },
  {
    "type": "word",
    "front": "uptight",
    "meaning": "紧张拘谨、放松不下来",
    "example": "He's too uptight to enjoy the party.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000770"
  },
  {
    "type": "word",
    "front": "worked up",
    "meaning": "情绪激动、紧张焦虑",
    "example": "Try not to get too worked up about it.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000771"
  },
  {
    "type": "word",
    "front": "wound up",
    "meaning": "情绪紧绷、激动的",
    "example": "I was all wound up after the argument.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000772"
  },
  {
    "type": "word",
    "front": "under a lot of stress",
    "meaning": "承受很大压力",
    "example": "I've been under a lot of stress this week.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000773"
  },
  {
    "type": "word",
    "front": "a bundle of nerves",
    "meaning": "非常紧张的人",
    "example": "I was a bundle of nerves before the interview.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000774"
  },
  {
    "type": "word",
    "front": "get on someone's nerves",
    "meaning": "惹某人心烦",
    "example": "The constant noise is getting on my nerves.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000775"
  },
  {
    "type": "word",
    "front": "calm your nerves",
    "meaning": "平复紧张情绪",
    "example": "I need a moment to calm my nerves.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000776"
  },
  {
    "type": "pattern",
    "front": "feel + object + doing",
    "meaning": "亲身感受到某个动作正在发生",
    "example": "I felt the wind blowing against my face.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000777"
  },
  {
    "type": "pattern",
    "front": "be surprised by how + adjective / adverb",
    "meaning": "对某事的程度或频率感到惊讶",
    "example": "I'm surprised by how often this happens.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000778"
  },
  {
    "type": "pattern",
    "front": "It takes time for something to happen",
    "meaning": "某个过程需要时间",
    "example": "It takes time for the flavors to develop.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000779"
  },
  {
    "type": "pattern",
    "front": "end up + doing / adjective",
    "meaning": "最终出现某种结果",
    "example": "We ended up completely drenched.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000780"
  },
  {
    "type": "pattern",
    "front": "It's not that..., it's that...",
    "meaning": "不是……而是……",
    "example": "It's not that I don't know the words, it's that they don't come naturally.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000781"
  },
  {
    "type": "pattern",
    "front": "I find myself + doing",
    "meaning": "发现自己不知不觉在做某事",
    "example": "I find myself translating directly from Chinese.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000782"
  },
  {
    "type": "pattern",
    "front": "I struggle to...",
    "meaning": "我很难做到……",
    "example": "I struggle to find the right words.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000783"
  },
  {
    "type": "pattern",
    "front": "I tend to...",
    "meaning": "我通常会、往往会……",
    "example": "I tend to overcomplicate things.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000784"
  },
  {
    "type": "pattern",
    "front": "I can barely make out...",
    "meaning": "我几乎无法听清或辨认……",
    "example": "I can barely make out what they're saying.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000785"
  },
  {
    "type": "pattern",
    "front": "I'm not a big fan of...",
    "meaning": "我不太喜欢……",
    "example": "I'm not a big fan of last-minute plans.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000786"
  },
  {
    "type": "kana",
    "front": "あ",
    "meaning": "ア",
    "example": "a",
    "hiragana": "あ",
    "katakana": "ア",
    "romaji": "a",
    "id": "sw-000787"
  },
  {
    "type": "kana",
    "front": "い",
    "meaning": "イ",
    "example": "i",
    "hiragana": "い",
    "katakana": "イ",
    "romaji": "i",
    "id": "sw-000788"
  },
  {
    "type": "kana",
    "front": "う",
    "meaning": "ウ",
    "example": "u",
    "hiragana": "う",
    "katakana": "ウ",
    "romaji": "u",
    "id": "sw-000789"
  },
  {
    "type": "kana",
    "front": "え",
    "meaning": "エ",
    "example": "e",
    "hiragana": "え",
    "katakana": "エ",
    "romaji": "e",
    "id": "sw-000790"
  },
  {
    "type": "kana",
    "front": "お",
    "meaning": "オ",
    "example": "o",
    "hiragana": "お",
    "katakana": "オ",
    "romaji": "o",
    "id": "sw-000791"
  },
  {
    "type": "kana",
    "front": "か",
    "meaning": "カ",
    "example": "ka",
    "hiragana": "か",
    "katakana": "カ",
    "romaji": "ka",
    "id": "sw-000792"
  },
  {
    "type": "kana",
    "front": "き",
    "meaning": "キ",
    "example": "ki",
    "hiragana": "き",
    "katakana": "キ",
    "romaji": "ki",
    "id": "sw-000793"
  },
  {
    "type": "kana",
    "front": "く",
    "meaning": "ク",
    "example": "ku",
    "hiragana": "く",
    "katakana": "ク",
    "romaji": "ku",
    "id": "sw-000794"
  },
  {
    "type": "kana",
    "front": "け",
    "meaning": "ケ",
    "example": "ke",
    "hiragana": "け",
    "katakana": "ケ",
    "romaji": "ke",
    "id": "sw-000795"
  },
  {
    "type": "kana",
    "front": "こ",
    "meaning": "コ",
    "example": "ko",
    "hiragana": "こ",
    "katakana": "コ",
    "romaji": "ko",
    "id": "sw-000796"
  },
  {
    "type": "kana",
    "front": "さ",
    "meaning": "サ",
    "example": "sa",
    "hiragana": "さ",
    "katakana": "サ",
    "romaji": "sa",
    "id": "sw-000797"
  },
  {
    "type": "kana",
    "front": "し",
    "meaning": "シ",
    "example": "shi",
    "hiragana": "し",
    "katakana": "シ",
    "romaji": "shi",
    "id": "sw-000798"
  },
  {
    "type": "kana",
    "front": "す",
    "meaning": "ス",
    "example": "su",
    "hiragana": "す",
    "katakana": "ス",
    "romaji": "su",
    "id": "sw-000799"
  },
  {
    "type": "kana",
    "front": "せ",
    "meaning": "セ",
    "example": "se",
    "hiragana": "せ",
    "katakana": "セ",
    "romaji": "se",
    "id": "sw-000800"
  },
  {
    "type": "kana",
    "front": "そ",
    "meaning": "ソ",
    "example": "so",
    "hiragana": "そ",
    "katakana": "ソ",
    "romaji": "so",
    "id": "sw-000801"
  },
  {
    "type": "kana",
    "front": "た",
    "meaning": "タ",
    "example": "ta",
    "hiragana": "た",
    "katakana": "タ",
    "romaji": "ta",
    "id": "sw-000802"
  },
  {
    "type": "kana",
    "front": "ち",
    "meaning": "チ",
    "example": "chi",
    "hiragana": "ち",
    "katakana": "チ",
    "romaji": "chi",
    "id": "sw-000803"
  },
  {
    "type": "kana",
    "front": "つ",
    "meaning": "ツ",
    "example": "tsu",
    "hiragana": "つ",
    "katakana": "ツ",
    "romaji": "tsu",
    "id": "sw-000804"
  },
  {
    "type": "kana",
    "front": "て",
    "meaning": "テ",
    "example": "te",
    "hiragana": "て",
    "katakana": "テ",
    "romaji": "te",
    "id": "sw-000805"
  },
  {
    "type": "kana",
    "front": "と",
    "meaning": "ト",
    "example": "to",
    "hiragana": "と",
    "katakana": "ト",
    "romaji": "to",
    "id": "sw-000806"
  },
  {
    "type": "kana",
    "front": "な",
    "meaning": "ナ",
    "example": "na",
    "hiragana": "な",
    "katakana": "ナ",
    "romaji": "na",
    "id": "sw-000807"
  },
  {
    "type": "kana",
    "front": "に",
    "meaning": "ニ",
    "example": "ni",
    "hiragana": "に",
    "katakana": "ニ",
    "romaji": "ni",
    "id": "sw-000808"
  },
  {
    "type": "kana",
    "front": "ぬ",
    "meaning": "ヌ",
    "example": "nu",
    "hiragana": "ぬ",
    "katakana": "ヌ",
    "romaji": "nu",
    "id": "sw-000809"
  },
  {
    "type": "kana",
    "front": "ね",
    "meaning": "ネ",
    "example": "ne",
    "hiragana": "ね",
    "katakana": "ネ",
    "romaji": "ne",
    "id": "sw-000810"
  },
  {
    "type": "kana",
    "front": "の",
    "meaning": "ノ",
    "example": "no",
    "hiragana": "の",
    "katakana": "ノ",
    "romaji": "no",
    "id": "sw-000811"
  },
  {
    "type": "kana",
    "front": "は",
    "meaning": "ハ",
    "example": "ha",
    "hiragana": "は",
    "katakana": "ハ",
    "romaji": "ha",
    "id": "sw-000812"
  },
  {
    "type": "kana",
    "front": "ひ",
    "meaning": "ヒ",
    "example": "hi",
    "hiragana": "ひ",
    "katakana": "ヒ",
    "romaji": "hi",
    "id": "sw-000813"
  },
  {
    "type": "kana",
    "front": "ふ",
    "meaning": "フ",
    "example": "fu",
    "hiragana": "ふ",
    "katakana": "フ",
    "romaji": "fu",
    "id": "sw-000814"
  },
  {
    "type": "kana",
    "front": "へ",
    "meaning": "ヘ",
    "example": "he",
    "hiragana": "へ",
    "katakana": "ヘ",
    "romaji": "he",
    "id": "sw-000815"
  },
  {
    "type": "kana",
    "front": "ほ",
    "meaning": "ホ",
    "example": "ho",
    "hiragana": "ほ",
    "katakana": "ホ",
    "romaji": "ho",
    "id": "sw-000816"
  },
  {
    "type": "kana",
    "front": "ま",
    "meaning": "マ",
    "example": "ma",
    "hiragana": "ま",
    "katakana": "マ",
    "romaji": "ma",
    "id": "sw-000817"
  },
  {
    "type": "kana",
    "front": "み",
    "meaning": "ミ",
    "example": "mi",
    "hiragana": "み",
    "katakana": "ミ",
    "romaji": "mi",
    "id": "sw-000818"
  },
  {
    "type": "kana",
    "front": "む",
    "meaning": "ム",
    "example": "mu",
    "hiragana": "む",
    "katakana": "ム",
    "romaji": "mu",
    "id": "sw-000819"
  },
  {
    "type": "kana",
    "front": "め",
    "meaning": "メ",
    "example": "me",
    "hiragana": "め",
    "katakana": "メ",
    "romaji": "me",
    "id": "sw-000820"
  },
  {
    "type": "kana",
    "front": "も",
    "meaning": "モ",
    "example": "mo",
    "hiragana": "も",
    "katakana": "モ",
    "romaji": "mo",
    "id": "sw-000821"
  },
  {
    "type": "kana",
    "front": "や",
    "meaning": "ヤ",
    "example": "ya",
    "hiragana": "や",
    "katakana": "ヤ",
    "romaji": "ya",
    "id": "sw-000822"
  },
  {
    "type": "kana",
    "front": "ゆ",
    "meaning": "ユ",
    "example": "yu",
    "hiragana": "ゆ",
    "katakana": "ユ",
    "romaji": "yu",
    "id": "sw-000823"
  },
  {
    "type": "kana",
    "front": "よ",
    "meaning": "ヨ",
    "example": "yo",
    "hiragana": "よ",
    "katakana": "ヨ",
    "romaji": "yo",
    "id": "sw-000824"
  },
  {
    "type": "kana",
    "front": "ら",
    "meaning": "ラ",
    "example": "ra",
    "hiragana": "ら",
    "katakana": "ラ",
    "romaji": "ra",
    "id": "sw-000825"
  },
  {
    "type": "kana",
    "front": "り",
    "meaning": "リ",
    "example": "ri",
    "hiragana": "り",
    "katakana": "リ",
    "romaji": "ri",
    "id": "sw-000826"
  },
  {
    "type": "kana",
    "front": "る",
    "meaning": "ル",
    "example": "ru",
    "hiragana": "る",
    "katakana": "ル",
    "romaji": "ru",
    "id": "sw-000827"
  },
  {
    "type": "kana",
    "front": "れ",
    "meaning": "レ",
    "example": "re",
    "hiragana": "れ",
    "katakana": "レ",
    "romaji": "re",
    "id": "sw-000828"
  },
  {
    "type": "kana",
    "front": "ろ",
    "meaning": "ロ",
    "example": "ro",
    "hiragana": "ろ",
    "katakana": "ロ",
    "romaji": "ro",
    "id": "sw-000829"
  },
  {
    "type": "kana",
    "front": "わ",
    "meaning": "ワ",
    "example": "wa",
    "hiragana": "わ",
    "katakana": "ワ",
    "romaji": "wa",
    "id": "sw-000830"
  },
  {
    "type": "kana",
    "front": "を",
    "meaning": "ヲ",
    "example": "o",
    "hiragana": "を",
    "katakana": "ヲ",
    "romaji": "o",
    "id": "sw-000831"
  },
  {
    "type": "kana",
    "front": "ん",
    "meaning": "ン",
    "example": "n",
    "hiragana": "ん",
    "katakana": "ン",
    "romaji": "n",
    "id": "sw-000832"
  },
  {
    "type": "word",
    "front": "try on hiking trousers",
    "meaning": "试穿徒步裤",
    "example": "",
    "weight": 3,
    "id": "sw-000833"
  },
  {
    "type": "word",
    "front": "fit well",
    "meaning": "很合身",
    "example": "",
    "weight": 3,
    "id": "sw-000834"
  },
  {
    "type": "word",
    "front": "fit snugly",
    "meaning": "贴身但不勒",
    "example": "",
    "weight": 3,
    "id": "sw-000835"
  },
  {
    "type": "word",
    "front": "too tight around the waist",
    "meaning": "腰部太紧",
    "example": "",
    "weight": 3,
    "id": "sw-000836"
  },
  {
    "type": "word",
    "front": "a bit baggy",
    "meaning": "稍显宽松",
    "example": "",
    "weight": 3,
    "id": "sw-000837"
  },
  {
    "type": "word",
    "front": "roll up the cuffs",
    "meaning": "卷起裤脚",
    "example": "",
    "weight": 3,
    "id": "sw-000838"
  },
  {
    "type": "word",
    "front": "the cuffs drag on the ground",
    "meaning": "裤脚拖地",
    "example": "",
    "weight": 3,
    "id": "sw-000839"
  },
  {
    "type": "word",
    "front": "move around comfortably",
    "meaning": "活动自如",
    "example": "",
    "weight": 3,
    "id": "sw-000840"
  },
  {
    "type": "word",
    "front": "stretchy fabric",
    "meaning": "有弹性的面料",
    "example": "",
    "weight": 3,
    "id": "sw-000841"
  },
  {
    "type": "word",
    "front": "water-resistant",
    "meaning": "防泼水的",
    "example": "",
    "weight": 3,
    "id": "sw-000842"
  },
  {
    "type": "word",
    "front": "feel restrictive",
    "meaning": "感觉活动受限",
    "example": "",
    "weight": 3,
    "id": "sw-000843"
  },
  {
    "type": "word",
    "front": "go up a size",
    "meaning": "选大一码",
    "example": "",
    "weight": 3,
    "id": "sw-000844"
  },
  {
    "type": "word",
    "front": "go down a size",
    "meaning": "选小一码",
    "example": "",
    "weight": 3,
    "id": "sw-000845"
  },
  {
    "type": "word",
    "front": "I'd rather have a looser fit",
    "meaning": "我宁可穿宽松一点",
    "example": "",
    "weight": 3,
    "id": "sw-000846"
  },
  {
    "type": "word",
    "front": "borrow a book",
    "meaning": "借一本书",
    "example": "",
    "weight": 3,
    "id": "sw-000847"
  },
  {
    "type": "word",
    "front": "renew a loan",
    "meaning": "续借",
    "example": "",
    "weight": 3,
    "id": "sw-000848"
  },
  {
    "type": "word",
    "front": "due date",
    "meaning": "到期日",
    "example": "",
    "weight": 3,
    "id": "sw-000849"
  },
  {
    "type": "word",
    "front": "due back",
    "meaning": "应当归还",
    "example": "",
    "weight": 3,
    "id": "sw-000850"
  },
  {
    "type": "word",
    "front": "overdue",
    "meaning": "逾期",
    "example": "",
    "weight": 3,
    "id": "sw-000851"
  },
  {
    "type": "word",
    "front": "place a hold on a book",
    "meaning": "预约借阅一本书",
    "example": "",
    "weight": 3,
    "id": "sw-000852"
  },
  {
    "type": "word",
    "front": "another patron",
    "meaning": "另一位读者",
    "example": "",
    "weight": 3,
    "id": "sw-000853"
  },
  {
    "type": "word",
    "front": "return it on time",
    "meaning": "按时归还",
    "example": "",
    "weight": 3,
    "id": "sw-000854"
  },
  {
    "type": "word",
    "front": "renewal request",
    "meaning": "续借申请",
    "example": "",
    "weight": 3,
    "id": "sw-000855"
  },
  {
    "type": "word",
    "front": "the renewal was blocked",
    "meaning": "续借被阻止",
    "example": "",
    "weight": 3,
    "id": "sw-000856"
  },
  {
    "type": "word",
    "front": "check the library account",
    "meaning": "查看图书馆借阅账户",
    "example": "",
    "weight": 3,
    "id": "sw-000857"
  },
  {
    "type": "word",
    "front": "pay an overdue fine",
    "meaning": "支付逾期罚款",
    "example": "",
    "weight": 3,
    "id": "sw-000858"
  },
  {
    "type": "word",
    "front": "drop the book off",
    "meaning": "把书还到指定地点",
    "example": "",
    "weight": 3,
    "id": "sw-000859"
  },
  {
    "type": "word",
    "front": "be on loan",
    "meaning": "已被借出",
    "example": "",
    "weight": 3,
    "id": "sw-000860"
  },
  {
    "type": "word",
    "front": "muddy trail",
    "meaning": "泥泞路线",
    "example": "",
    "weight": 3,
    "id": "sw-000861"
  },
  {
    "type": "word",
    "front": "wet ground",
    "meaning": "潮湿地面",
    "example": "",
    "weight": 3,
    "id": "sw-000862"
  },
  {
    "type": "word",
    "front": "squelch underfoot",
    "meaning": "脚下发出泥泞的咕唧声",
    "example": "",
    "weight": 3,
    "id": "sw-000863"
  },
  {
    "type": "word",
    "front": "sink into the mud",
    "meaning": "陷进泥里",
    "example": "",
    "weight": 3,
    "id": "sw-000864"
  },
  {
    "type": "word",
    "front": "plant the trekking poles",
    "meaning": "稳稳撑下登山杖",
    "example": "",
    "weight": 3,
    "id": "sw-000865"
  },
  {
    "type": "word",
    "front": "shift your weight",
    "meaning": "转移重心",
    "example": "",
    "weight": 3,
    "id": "sw-000866"
  },
  {
    "type": "word",
    "front": "lose your footing",
    "meaning": "脚下踩不稳",
    "example": "",
    "weight": 3,
    "id": "sw-000867"
  },
  {
    "type": "word",
    "front": "slip and skid",
    "meaning": "打滑并滑行",
    "example": "",
    "weight": 3,
    "id": "sw-000868"
  },
  {
    "type": "word",
    "front": "take shorter steps",
    "meaning": "迈小步",
    "example": "",
    "weight": 3,
    "id": "sw-000869"
  },
  {
    "type": "word",
    "front": "find a firmer patch",
    "meaning": "找到更坚实的落脚点",
    "example": "",
    "weight": 3,
    "id": "sw-000870"
  },
  {
    "type": "word",
    "front": "make a detour",
    "meaning": "绕路",
    "example": "",
    "weight": 3,
    "id": "sw-000871"
  },
  {
    "type": "word",
    "front": "walk around the puddle",
    "meaning": "绕开水坑",
    "example": "",
    "weight": 3,
    "id": "sw-000872"
  },
  {
    "type": "word",
    "front": "the ground is slippery",
    "meaning": "地面很滑",
    "example": "",
    "weight": 3,
    "id": "sw-000873"
  },
  {
    "type": "word",
    "front": "pick your way carefully",
    "meaning": "小心选择落脚位置",
    "example": "",
    "weight": 3,
    "id": "sw-000874"
  },
  {
    "type": "word",
    "front": "view an apartment",
    "meaning": "看出租公寓",
    "example": "",
    "weight": 3,
    "id": "sw-000875"
  },
  {
    "type": "word",
    "front": "show someone around",
    "meaning": "带某人四处参观",
    "example": "",
    "weight": 3,
    "id": "sw-000876"
  },
  {
    "type": "word",
    "front": "spacious",
    "meaning": "宽敞的",
    "example": "",
    "weight": 3,
    "id": "sw-000877"
  },
  {
    "type": "word",
    "front": "cramped",
    "meaning": "狭小拥挤的",
    "example": "",
    "weight": 3,
    "id": "sw-000878"
  },
  {
    "type": "word",
    "front": "natural light",
    "meaning": "自然采光",
    "example": "",
    "weight": 3,
    "id": "sw-000879"
  },
  {
    "type": "word",
    "front": "cold draft / draught",
    "meaning": "冷风从缝隙吹入",
    "example": "",
    "weight": 3,
    "id": "sw-000880"
  },
  {
    "type": "word",
    "front": "properly sealed",
    "meaning": "密封良好",
    "example": "",
    "weight": 3,
    "id": "sw-000881"
  },
  {
    "type": "word",
    "front": "the tap drips",
    "meaning": "水龙头滴水",
    "example": "",
    "weight": 3,
    "id": "sw-000882"
  },
  {
    "type": "word",
    "front": "the pipe leaks",
    "meaning": "水管漏水",
    "example": "",
    "weight": 3,
    "id": "sw-000883"
  },
  {
    "type": "word",
    "front": "water pressure",
    "meaning": "水压",
    "example": "",
    "weight": 3,
    "id": "sw-000884"
  },
  {
    "type": "word",
    "front": "utilities included",
    "meaning": "杂费已包含",
    "example": "",
    "weight": 3,
    "id": "sw-000885"
  },
  {
    "type": "word",
    "front": "utilities billed separately",
    "meaning": "水电等费用另计",
    "example": "",
    "weight": 3,
    "id": "sw-000886"
  },
  {
    "type": "word",
    "front": "security deposit",
    "meaning": "押金",
    "example": "",
    "weight": 3,
    "id": "sw-000887"
  },
  {
    "type": "word",
    "front": "move in / move out",
    "meaning": "搬入/搬出",
    "example": "",
    "weight": 3,
    "id": "sw-000888"
  },
  {
    "type": "word",
    "front": "look over the rental agreement",
    "meaning": "仔细查看租赁合同",
    "example": "",
    "weight": 3,
    "id": "sw-000889"
  },
  {
    "type": "word",
    "front": "get back to someone",
    "meaning": "之后回复某人",
    "example": "",
    "weight": 3,
    "id": "sw-000890"
  },
  {
    "type": "word",
    "front": "run errands",
    "meaning": "出门办杂事",
    "example": "",
    "weight": 3,
    "id": "sw-000891"
  },
  {
    "type": "word",
    "front": "courier",
    "meaning": "快递员",
    "example": "",
    "weight": 3,
    "id": "sw-000892"
  },
  {
    "type": "word",
    "front": "ring the doorbell",
    "meaning": "按门铃",
    "example": "",
    "weight": 3,
    "id": "sw-000893"
  },
  {
    "type": "word",
    "front": "nobody answered",
    "meaning": "无人应门",
    "example": "",
    "weight": 3,
    "id": "sw-000894"
  },
  {
    "type": "word",
    "front": "delivery attempt failed",
    "meaning": "投递尝试失败",
    "example": "",
    "weight": 3,
    "id": "sw-000895"
  },
  {
    "type": "word",
    "front": "tracking number",
    "meaning": "运单号",
    "example": "",
    "weight": 3,
    "id": "sw-000896"
  },
  {
    "type": "word",
    "front": "tracking page",
    "meaning": "物流查询页面",
    "example": "",
    "weight": 3,
    "id": "sw-000897"
  },
  {
    "type": "word",
    "front": "make another attempt",
    "meaning": "再次尝试投递",
    "example": "",
    "weight": 3,
    "id": "sw-000898"
  },
  {
    "type": "word",
    "front": "redirect a parcel",
    "meaning": "改投包裹",
    "example": "",
    "weight": 3,
    "id": "sw-000899"
  },
  {
    "type": "word",
    "front": "pickup point",
    "meaning": "自提点",
    "example": "",
    "weight": 3,
    "id": "sw-000900"
  },
  {
    "type": "word",
    "front": "parcel locker",
    "meaning": "快递柜",
    "example": "",
    "weight": 3,
    "id": "sw-000901"
  },
  {
    "type": "word",
    "front": "delivery instructions",
    "meaning": "投递说明",
    "example": "",
    "weight": 3,
    "id": "sw-000902"
  },
  {
    "type": "word",
    "front": "ready for collection",
    "meaning": "可以领取",
    "example": "",
    "weight": 3,
    "id": "sw-000903"
  },
  {
    "type": "word",
    "front": "sign for a parcel",
    "meaning": "签收包裹",
    "example": "",
    "weight": 3,
    "id": "sw-000904"
  },
  {
    "type": "word",
    "front": "proof of delivery",
    "meaning": "签收或投递凭证",
    "example": "",
    "weight": 3,
    "id": "sw-000905"
  },
  {
    "type": "word",
    "front": "drop off a parcel",
    "meaning": "投放包裹",
    "example": "",
    "weight": 3,
    "id": "sw-000906"
  },
  {
    "type": "word",
    "front": "topographic map",
    "meaning": "地形图",
    "example": "",
    "weight": 3,
    "id": "sw-000907"
  },
  {
    "type": "word",
    "front": "contour line",
    "meaning": "等高线",
    "example": "",
    "weight": 3,
    "id": "sw-000908"
  },
  {
    "type": "word",
    "front": "widely spaced contours",
    "meaning": "间隔较大的等高线",
    "example": "",
    "weight": 3,
    "id": "sw-000909"
  },
  {
    "type": "word",
    "front": "closely packed contours",
    "meaning": "密集等高线",
    "example": "",
    "weight": 3,
    "id": "sw-000910"
  },
  {
    "type": "word",
    "front": "gentle slope",
    "meaning": "缓坡",
    "example": "",
    "weight": 3,
    "id": "sw-000911"
  },
  {
    "type": "word",
    "front": "steep slope",
    "meaning": "陡坡",
    "example": "",
    "weight": 3,
    "id": "sw-000912"
  },
  {
    "type": "word",
    "front": "zigzag uphill",
    "meaning": "之字形上坡",
    "example": "",
    "weight": 3,
    "id": "sw-000913"
  },
  {
    "type": "word",
    "front": "switchback",
    "meaning": "之字形折返弯",
    "example": "",
    "weight": 3,
    "id": "sw-000914"
  },
  {
    "type": "word",
    "front": "saddle between peaks",
    "meaning": "两座峰之间的鞍部",
    "example": "",
    "weight": 3,
    "id": "sw-000915"
  },
  {
    "type": "word",
    "front": "cumulative elevation gain",
    "meaning": "累计爬升",
    "example": "",
    "weight": 3,
    "id": "sw-000916"
  },
  {
    "type": "word",
    "front": "elevation",
    "meaning": "海拔高度",
    "example": "",
    "weight": 3,
    "id": "sw-000917"
  },
  {
    "type": "word",
    "front": "waypoint",
    "meaning": "导航点",
    "example": "",
    "weight": 3,
    "id": "sw-000918"
  },
  {
    "type": "word",
    "front": "waymark",
    "meaning": "路线标记",
    "example": "",
    "weight": 3,
    "id": "sw-000919"
  },
  {
    "type": "word",
    "front": "the trail levels off",
    "meaning": "道路变平缓",
    "example": "",
    "weight": 3,
    "id": "sw-000920"
  },
  {
    "type": "word",
    "front": "crest the ridge",
    "meaning": "翻上山脊",
    "example": "",
    "weight": 3,
    "id": "sw-000921"
  },
  {
    "type": "word",
    "front": "trace the route on the map",
    "meaning": "在地图上查看路线",
    "example": "",
    "weight": 3,
    "id": "sw-000922"
  },
  {
    "type": "word",
    "front": "split the bill",
    "meaning": "分摊账单",
    "example": "",
    "weight": 3,
    "id": "sw-000923"
  },
  {
    "type": "word",
    "front": "split it evenly",
    "meaning": "平均分摊",
    "example": "",
    "weight": 3,
    "id": "sw-000924"
  },
  {
    "type": "word",
    "front": "go Dutch",
    "meaning": "各付各的",
    "example": "",
    "weight": 3,
    "id": "sw-000925"
  },
  {
    "type": "word",
    "front": "pay for what you had",
    "meaning": "为自己点的东西付费",
    "example": "",
    "weight": 3,
    "id": "sw-000926"
  },
  {
    "type": "word",
    "front": "cover the bill",
    "meaning": "先付账或垫付",
    "example": "",
    "weight": 3,
    "id": "sw-000927"
  },
  {
    "type": "word",
    "front": "I've got this",
    "meaning": "这次我来付",
    "example": "",
    "weight": 3,
    "id": "sw-000928"
  },
  {
    "type": "word",
    "front": "pay someone back",
    "meaning": "还钱给某人",
    "example": "",
    "weight": 3,
    "id": "sw-000929"
  },
  {
    "type": "word",
    "front": "owe someone money",
    "meaning": "欠某人钱",
    "example": "",
    "weight": 3,
    "id": "sw-000930"
  },
  {
    "type": "word",
    "front": "How much do I owe you?",
    "meaning": "我该给你多少钱",
    "example": "",
    "weight": 3,
    "id": "sw-000931"
  },
  {
    "type": "word",
    "front": "transfer my share",
    "meaning": "转账付我的份额",
    "example": "",
    "weight": 3,
    "id": "sw-000932"
  },
  {
    "type": "word",
    "front": "the payment went through",
    "meaning": "支付成功",
    "example": "",
    "weight": 3,
    "id": "sw-000933"
  },
  {
    "type": "word",
    "front": "settle up",
    "meaning": "结清欠款",
    "example": "",
    "weight": 3,
    "id": "sw-000934"
  },
  {
    "type": "word",
    "front": "we're all square",
    "meaning": "我们两清了",
    "example": "",
    "weight": 3,
    "id": "sw-000935"
  },
  {
    "type": "word",
    "front": "my share comes to...",
    "meaning": "我那份合计……",
    "example": "",
    "weight": 3,
    "id": "sw-000936"
  },
  {
    "type": "word",
    "front": "print out",
    "meaning": "打印出来",
    "example": "",
    "weight": 3,
    "id": "sw-000937"
  },
  {
    "type": "word",
    "front": "run out of paper",
    "meaning": "纸用完",
    "example": "",
    "weight": 3,
    "id": "sw-000938"
  },
  {
    "type": "word",
    "front": "double-sided / single-sided",
    "meaning": "双面/单面",
    "example": "",
    "weight": 3,
    "id": "sw-000939"
  },
  {
    "type": "word",
    "front": "staple the pages together",
    "meaning": "把纸张订起来",
    "example": "",
    "weight": 3,
    "id": "sw-000940"
  },
  {
    "type": "word",
    "front": "stapler",
    "meaning": "订书机",
    "example": "",
    "weight": 3,
    "id": "sw-000941"
  },
  {
    "type": "word",
    "front": "paper clip",
    "meaning": "回形针",
    "example": "",
    "weight": 3,
    "id": "sw-000942"
  },
  {
    "type": "word",
    "front": "binder clip",
    "meaning": "长尾夹",
    "example": "",
    "weight": 3,
    "id": "sw-000943"
  },
  {
    "type": "word",
    "front": "print preview",
    "meaning": "打印预览",
    "example": "",
    "weight": 3,
    "id": "sw-000944"
  },
  {
    "type": "word",
    "front": "adjust the margins",
    "meaning": "调整页边距",
    "example": "",
    "weight": 3,
    "id": "sw-000945"
  },
  {
    "type": "word",
    "front": "get cut off",
    "meaning": "被截掉",
    "example": "",
    "weight": 3,
    "id": "sw-000946"
  },
  {
    "type": "word",
    "front": "paper jam",
    "meaning": "卡纸",
    "example": "",
    "weight": 3,
    "id": "sw-000947"
  },
  {
    "type": "word",
    "front": "the printer is jammed",
    "meaning": "打印机卡住",
    "example": "",
    "weight": 3,
    "id": "sw-000948"
  },
  {
    "type": "word",
    "front": "a crumpled sheet",
    "meaning": "一张揉皱的纸",
    "example": "",
    "weight": 3,
    "id": "sw-000949"
  },
  {
    "type": "word",
    "front": "restart the print job",
    "meaning": "重新开始打印任务",
    "example": "",
    "weight": 3,
    "id": "sw-000950"
  },
  {
    "type": "word",
    "front": "put the pages in order",
    "meaning": "按顺序排列纸张",
    "example": "",
    "weight": 3,
    "id": "sw-000951"
  },
  {
    "type": "word",
    "front": "out of order",
    "meaning": "次序混乱或设备故障",
    "example": "",
    "weight": 3,
    "id": "sw-000952"
  },
  {
    "type": "word",
    "front": "ring up at a price",
    "meaning": "收银时显示某价格",
    "example": "",
    "weight": 3,
    "id": "sw-000953"
  },
  {
    "type": "word",
    "front": "shelf label",
    "meaning": "货架价格标签",
    "example": "",
    "weight": 3,
    "id": "sw-000954"
  },
  {
    "type": "word",
    "front": "price tag",
    "meaning": "商品价签",
    "example": "",
    "weight": 3,
    "id": "sw-000955"
  },
  {
    "type": "word",
    "front": "point out a mistake",
    "meaning": "指出错误",
    "example": "",
    "weight": 3,
    "id": "sw-000956"
  },
  {
    "type": "word",
    "front": "double-check the price",
    "meaning": "再次核实价格",
    "example": "",
    "weight": 3,
    "id": "sw-000957"
  },
  {
    "type": "word",
    "front": "call someone over",
    "meaning": "叫某人过来",
    "example": "",
    "weight": 3,
    "id": "sw-000958"
  },
  {
    "type": "word",
    "front": "it turned out that...",
    "meaning": "结果发现……",
    "example": "",
    "weight": 3,
    "id": "sw-000959"
  },
  {
    "type": "word",
    "front": "correct the price",
    "meaning": "修正价格",
    "example": "",
    "weight": 3,
    "id": "sw-000960"
  },
  {
    "type": "word",
    "front": "adjust the price",
    "meaning": "调整价格",
    "example": "",
    "weight": 3,
    "id": "sw-000961"
  },
  {
    "type": "word",
    "front": "hold up the line",
    "meaning": "耽误排队",
    "example": "",
    "weight": 3,
    "id": "sw-000962"
  },
  {
    "type": "word",
    "front": "be overcharged",
    "meaning": "被多收费",
    "example": "",
    "weight": 3,
    "id": "sw-000963"
  },
  {
    "type": "word",
    "front": "charged twice",
    "meaning": "重复扣款",
    "example": "",
    "weight": 3,
    "id": "sw-000964"
  },
  {
    "type": "word",
    "front": "refund the difference",
    "meaning": "退还差额",
    "example": "",
    "weight": 3,
    "id": "sw-000965"
  },
  {
    "type": "word",
    "front": "check the receipt",
    "meaning": "检查购物小票",
    "example": "",
    "weight": 3,
    "id": "sw-000966"
  },
  {
    "type": "word",
    "front": "the system wasn't updated",
    "meaning": "系统尚未更新",
    "example": "",
    "weight": 3,
    "id": "sw-000967"
  },
  {
    "type": "word",
    "front": "How do I get to...?",
    "meaning": "如何去……",
    "example": "",
    "weight": 3,
    "id": "sw-000968"
  },
  {
    "type": "word",
    "front": "Is this the right way to...?",
    "meaning": "这是去……的路吗",
    "example": "",
    "weight": 3,
    "id": "sw-000969"
  },
  {
    "type": "word",
    "front": "pull up a map",
    "meaning": "在手机上调出地图",
    "example": "",
    "weight": 3,
    "id": "sw-000970"
  },
  {
    "type": "word",
    "front": "head straight down the street",
    "meaning": "沿街一直走",
    "example": "",
    "weight": 3,
    "id": "sw-000971"
  },
  {
    "type": "word",
    "front": "keep going straight",
    "meaning": "继续直行",
    "example": "",
    "weight": 3,
    "id": "sw-000972"
  },
  {
    "type": "word",
    "front": "go past the pharmacy",
    "meaning": "经过药店",
    "example": "",
    "weight": 3,
    "id": "sw-000973"
  },
  {
    "type": "word",
    "front": "turn right at the lights",
    "meaning": "在红绿灯处右转",
    "example": "",
    "weight": 3,
    "id": "sw-000974"
  },
  {
    "type": "word",
    "front": "at the roundabout",
    "meaning": "在环岛处",
    "example": "",
    "weight": 3,
    "id": "sw-000975"
  },
  {
    "type": "word",
    "front": "across from / opposite",
    "meaning": "在……对面",
    "example": "",
    "weight": 3,
    "id": "sw-000976"
  },
  {
    "type": "word",
    "front": "around the corner",
    "meaning": "就在拐角附近",
    "example": "",
    "weight": 3,
    "id": "sw-000977"
  },
  {
    "type": "word",
    "front": "you've gone too far",
    "meaning": "你走过头了",
    "example": "",
    "weight": 3,
    "id": "sw-000978"
  },
  {
    "type": "word",
    "front": "overshoot the turn",
    "meaning": "错过转弯处",
    "example": "",
    "weight": 3,
    "id": "sw-000979"
  },
  {
    "type": "word",
    "front": "repeat directions back",
    "meaning": "复述路线确认",
    "example": "",
    "weight": 3,
    "id": "sw-000980"
  },
  {
    "type": "word",
    "front": "easy to miss",
    "meaning": "很容易错过",
    "example": "",
    "weight": 3,
    "id": "sw-000981"
  },
  {
    "type": "word",
    "front": "look for a narrow passage",
    "meaning": "留意狭窄通道",
    "example": "",
    "weight": 3,
    "id": "sw-000982"
  },
  {
    "type": "word",
    "front": "temperature drops sharply",
    "meaning": "气温急剧下降",
    "example": "",
    "weight": 3,
    "id": "sw-000983"
  },
  {
    "type": "word",
    "front": "work up a sweat",
    "meaning": "活动出一身汗",
    "example": "",
    "weight": 3,
    "id": "sw-000984"
  },
  {
    "type": "word",
    "front": "wind cuts through clothes",
    "meaning": "冷风穿透衣服",
    "example": "",
    "weight": 3,
    "id": "sw-000985"
  },
  {
    "type": "word",
    "front": "start shivering",
    "meaning": "开始发抖",
    "example": "",
    "weight": 3,
    "id": "sw-000986"
  },
  {
    "type": "word",
    "front": "teeth are chattering",
    "meaning": "牙齿打战",
    "example": "",
    "weight": 3,
    "id": "sw-000987"
  },
  {
    "type": "word",
    "front": "layer up",
    "meaning": "多加几层衣服",
    "example": "",
    "weight": 3,
    "id": "sw-000988"
  },
  {
    "type": "word",
    "front": "take off a layer",
    "meaning": "脱掉一层",
    "example": "",
    "weight": 3,
    "id": "sw-000989"
  },
  {
    "type": "word",
    "front": "base layer",
    "meaning": "贴身排汗层",
    "example": "",
    "weight": 3,
    "id": "sw-000990"
  },
  {
    "type": "word",
    "front": "mid-layer",
    "meaning": "中间保暖层",
    "example": "",
    "weight": 3,
    "id": "sw-000991"
  },
  {
    "type": "word",
    "front": "outer layer",
    "meaning": "防护外层",
    "example": "",
    "weight": 3,
    "id": "sw-000992"
  },
  {
    "type": "word",
    "front": "zip all the way up",
    "meaning": "把拉链拉到顶",
    "example": "",
    "weight": 3,
    "id": "sw-000993"
  },
  {
    "type": "word",
    "front": "stiff fingers",
    "meaning": "僵硬的手指",
    "example": "",
    "weight": 3,
    "id": "sw-000994"
  },
  {
    "type": "word",
    "front": "numb fingers",
    "meaning": "麻木的手指",
    "example": "",
    "weight": 3,
    "id": "sw-000995"
  },
  {
    "type": "word",
    "front": "struggle to fasten",
    "meaning": "难以扣紧",
    "example": "",
    "weight": 3,
    "id": "sw-000996"
  },
  {
    "type": "word",
    "front": "warm up",
    "meaning": "暖和起来",
    "example": "",
    "weight": 3,
    "id": "sw-000997"
  },
  {
    "type": "word",
    "front": "wind chill",
    "meaning": "风寒效应",
    "example": "",
    "weight": 3,
    "id": "sw-000998"
  },
  {
    "type": "word",
    "front": "find a sheltered spot",
    "meaning": "找到避风处",
    "example": "",
    "weight": 3,
    "id": "sw-000999"
  },
  {
    "type": "word",
    "front": "leaves rustle",
    "meaning": "树叶沙沙作响",
    "example": "",
    "weight": 3,
    "id": "sw-001000"
  },
  {
    "type": "word",
    "front": "round a bend",
    "meaning": "绕过弯道",
    "example": "",
    "weight": 3,
    "id": "sw-001001"
  },
  {
    "type": "word",
    "front": "step out onto the trail",
    "meaning": "从旁边踏上小路",
    "example": "",
    "weight": 3,
    "id": "sw-001002"
  },
  {
    "type": "word",
    "front": "stare at",
    "meaning": "盯着看",
    "example": "",
    "weight": 3,
    "id": "sw-001003"
  },
  {
    "type": "word",
    "front": "glance at",
    "meaning": "瞥一眼",
    "example": "",
    "weight": 3,
    "id": "sw-001004"
  },
  {
    "type": "word",
    "front": "flick its ears",
    "meaning": "迅速摆动耳朵",
    "example": "",
    "weight": 3,
    "id": "sw-001005"
  },
  {
    "type": "word",
    "front": "sniff the air",
    "meaning": "嗅闻空气",
    "example": "",
    "weight": 3,
    "id": "sw-001006"
  },
  {
    "type": "word",
    "front": "give it plenty of space",
    "meaning": "留出足够距离",
    "example": "",
    "weight": 3,
    "id": "sw-001007"
  },
  {
    "type": "word",
    "front": "keep your distance",
    "meaning": "保持距离",
    "example": "",
    "weight": 3,
    "id": "sw-001008"
  },
  {
    "type": "word",
    "front": "back away slowly",
    "meaning": "慢慢后退",
    "example": "",
    "weight": 3,
    "id": "sw-001009"
  },
  {
    "type": "word",
    "front": "bound across the trail",
    "meaning": "跳跃穿过小路",
    "example": "",
    "weight": 3,
    "id": "sw-001010"
  },
  {
    "type": "word",
    "front": "bolt into the trees",
    "meaning": "猛地奔向树林",
    "example": "",
    "weight": 3,
    "id": "sw-001011"
  },
  {
    "type": "word",
    "front": "disappear into the trees",
    "meaning": "消失在树林中",
    "example": "",
    "weight": 3,
    "id": "sw-001012"
  },
  {
    "type": "word",
    "front": "keep an eye out for wildlife",
    "meaning": "留意可能出现的野生动物",
    "example": "",
    "weight": 3,
    "id": "sw-001013"
  },
  {
    "type": "word",
    "front": "stand still",
    "meaning": "原地不动",
    "example": "",
    "weight": 3,
    "id": "sw-001014"
  },
  {
    "type": "word",
    "front": "wait until it has passed",
    "meaning": "等它通过",
    "example": "",
    "weight": 3,
    "id": "sw-001015"
  },
  {
    "type": "word",
    "front": "be supposed to",
    "meaning": "原计划应该……",
    "example": "",
    "weight": 3,
    "id": "sw-001016"
  },
  {
    "type": "word",
    "front": "run behind",
    "meaning": "进度落后",
    "example": "",
    "weight": 3,
    "id": "sw-001017"
  },
  {
    "type": "word",
    "front": "run late",
    "meaning": "要迟到了",
    "example": "",
    "weight": 3,
    "id": "sw-001018"
  },
  {
    "type": "word",
    "front": "something came up",
    "meaning": "临时有事",
    "example": "",
    "weight": 3,
    "id": "sw-001019"
  },
  {
    "type": "word",
    "front": "make it on time",
    "meaning": "准时赶到",
    "example": "",
    "weight": 3,
    "id": "sw-001020"
  },
  {
    "type": "word",
    "front": "push back by an hour",
    "meaning": "推迟一个小时",
    "example": "",
    "weight": 3,
    "id": "sw-001021"
  },
  {
    "type": "word",
    "front": "push back to four",
    "meaning": "推迟到四点",
    "example": "",
    "weight": 3,
    "id": "sw-001022"
  },
  {
    "type": "word",
    "front": "move up the meeting",
    "meaning": "提前会议",
    "example": "",
    "weight": 3,
    "id": "sw-001023"
  },
  {
    "type": "word",
    "front": "bring forward",
    "meaning": "将安排提前",
    "example": "",
    "weight": 3,
    "id": "sw-001024"
  },
  {
    "type": "word",
    "front": "take a rain check",
    "meaning": "这次先不参加改天再约",
    "example": "",
    "weight": 3,
    "id": "sw-001025"
  },
  {
    "type": "word",
    "front": "give someone a heads-up",
    "meaning": "提前告知或提醒",
    "example": "",
    "weight": 3,
    "id": "sw-001026"
  },
  {
    "type": "word",
    "front": "pencil something in",
    "meaning": "暂定到日程",
    "example": "",
    "weight": 3,
    "id": "sw-001027"
  },
  {
    "type": "word",
    "front": "confirm the time",
    "meaning": "确认时间",
    "example": "",
    "weight": 3,
    "id": "sw-001028"
  },
  {
    "type": "word",
    "front": "have a few errands to run",
    "meaning": "有一些杂事要办",
    "example": "",
    "weight": 3,
    "id": "sw-001029"
  },
  {
    "type": "word",
    "front": "packed bus",
    "meaning": "挤满人的公交车",
    "example": "",
    "weight": 3,
    "id": "sw-001030"
  },
  {
    "type": "word",
    "front": "squeeze onto the bus",
    "meaning": "挤上公交车",
    "example": "",
    "weight": 3,
    "id": "sw-001031"
  },
  {
    "type": "word",
    "front": "squeeze past",
    "meaning": "从旁边挤过去",
    "example": "",
    "weight": 3,
    "id": "sw-001032"
  },
  {
    "type": "word",
    "front": "aisle",
    "meaning": "过道",
    "example": "",
    "weight": 3,
    "id": "sw-001033"
  },
  {
    "type": "word",
    "front": "stick out into the aisle",
    "meaning": "伸到过道里",
    "example": "",
    "weight": 3,
    "id": "sw-001034"
  },
  {
    "type": "word",
    "front": "make room",
    "meaning": "腾出空间",
    "example": "",
    "weight": 3,
    "id": "sw-001035"
  },
  {
    "type": "word",
    "front": "on my lap",
    "meaning": "放在大腿上",
    "example": "",
    "weight": 3,
    "id": "sw-001036"
  },
  {
    "type": "word",
    "front": "offer someone your seat",
    "meaning": "主动给人让座",
    "example": "",
    "weight": 3,
    "id": "sw-001037"
  },
  {
    "type": "word",
    "front": "step aside",
    "meaning": "让到旁边",
    "example": "",
    "weight": 3,
    "id": "sw-001038"
  },
  {
    "type": "word",
    "front": "let someone through",
    "meaning": "让某人通过",
    "example": "",
    "weight": 3,
    "id": "sw-001039"
  },
  {
    "type": "word",
    "front": "scoot over",
    "meaning": "向旁边挪一点",
    "example": "",
    "weight": 3,
    "id": "sw-001040"
  },
  {
    "type": "word",
    "front": "move over",
    "meaning": "向旁边移动",
    "example": "",
    "weight": 3,
    "id": "sw-001041"
  },
  {
    "type": "word",
    "front": "hold on to the handrail",
    "meaning": "抓住扶手",
    "example": "",
    "weight": 3,
    "id": "sw-001042"
  },
  {
    "type": "word",
    "front": "block the exit",
    "meaning": "挡住出口",
    "example": "",
    "weight": 3,
    "id": "sw-001043"
  },
  {
    "type": "word",
    "front": "flat-pack furniture",
    "meaning": "自行组装的板式家具",
    "example": "",
    "weight": 3,
    "id": "sw-001044"
  },
  {
    "type": "word",
    "front": "put together a bookshelf",
    "meaning": "组装书架",
    "example": "",
    "weight": 3,
    "id": "sw-001045"
  },
  {
    "type": "word",
    "front": "take it apart",
    "meaning": "把它拆开",
    "example": "",
    "weight": 3,
    "id": "sw-001046"
  },
  {
    "type": "word",
    "front": "lay out the parts",
    "meaning": "把零件摆开",
    "example": "",
    "weight": 3,
    "id": "sw-001047"
  },
  {
    "type": "word",
    "front": "bracket",
    "meaning": "支架连接件",
    "example": "",
    "weight": 3,
    "id": "sw-001048"
  },
  {
    "type": "word",
    "front": "line up the holes",
    "meaning": "对齐孔位",
    "example": "",
    "weight": 3,
    "id": "sw-001049"
  },
  {
    "type": "word",
    "front": "loosen the screws",
    "meaning": "松开螺丝",
    "example": "",
    "weight": 3,
    "id": "sw-001050"
  },
  {
    "type": "word",
    "front": "tighten the screws",
    "meaning": "拧紧螺丝",
    "example": "",
    "weight": 3,
    "id": "sw-001051"
  },
  {
    "type": "word",
    "front": "thread / cross-thread",
    "meaning": "螺纹/斜拧损坏螺纹",
    "example": "",
    "weight": 3,
    "id": "sw-001052"
  },
  {
    "type": "word",
    "front": "go in at an angle",
    "meaning": "倾斜着进入",
    "example": "",
    "weight": 3,
    "id": "sw-001053"
  },
  {
    "type": "word",
    "front": "go in straight",
    "meaning": "笔直进入",
    "example": "",
    "weight": 3,
    "id": "sw-001054"
  },
  {
    "type": "word",
    "front": "wobble",
    "meaning": "摇摇晃晃",
    "example": "",
    "weight": 3,
    "id": "sw-001055"
  },
  {
    "type": "word",
    "front": "sturdy",
    "meaning": "牢固的",
    "example": "",
    "weight": 3,
    "id": "sw-001056"
  },
  {
    "type": "word",
    "front": "the bookshelf isn't level",
    "meaning": "书架不水平",
    "example": "",
    "weight": 3,
    "id": "sw-001057"
  },
  {
    "type": "word",
    "front": "adjust the feet",
    "meaning": "调整支脚",
    "example": "",
    "weight": 3,
    "id": "sw-001058"
  },
  {
    "type": "word",
    "front": "stand upright",
    "meaning": "竖直放置",
    "example": "",
    "weight": 3,
    "id": "sw-001059"
  },
  {
    "type": "word",
    "front": "I've always wondered why...",
    "meaning": "我一直好奇为什么……",
    "example": "",
    "weight": 3,
    "id": "sw-001060"
  },
  {
    "type": "word",
    "front": "central square",
    "meaning": "中央广场",
    "example": "",
    "weight": 3,
    "id": "sw-001061"
  },
  {
    "type": "word",
    "front": "trace back to",
    "meaning": "追溯至",
    "example": "",
    "weight": 3,
    "id": "sw-001062"
  },
  {
    "type": "word",
    "front": "date back to",
    "meaning": "始于……年代",
    "example": "",
    "weight": 3,
    "id": "sw-001063"
  },
  {
    "type": "word",
    "front": "Middle Ages",
    "meaning": "中世纪",
    "example": "",
    "weight": 3,
    "id": "sw-001064"
  },
  {
    "type": "word",
    "front": "gather in the square",
    "meaning": "在广场聚集",
    "example": "",
    "weight": 3,
    "id": "sw-001065"
  },
  {
    "type": "word",
    "front": "trade goods",
    "meaning": "交易商品",
    "example": "",
    "weight": 3,
    "id": "sw-001066"
  },
  {
    "type": "word",
    "front": "exchange news",
    "meaning": "交流消息",
    "example": "",
    "weight": 3,
    "id": "sw-001067"
  },
  {
    "type": "word",
    "front": "set up stalls",
    "meaning": "摆设摊位",
    "example": "",
    "weight": 3,
    "id": "sw-001068"
  },
  {
    "type": "word",
    "front": "spring up around",
    "meaning": "在……周围发展起来",
    "example": "",
    "weight": 3,
    "id": "sw-001069"
  },
  {
    "type": "word",
    "front": "trading hub",
    "meaning": "贸易枢纽",
    "example": "",
    "weight": 3,
    "id": "sw-001070"
  },
  {
    "type": "word",
    "front": "over time",
    "meaning": "随着时间推移",
    "example": "",
    "weight": 3,
    "id": "sw-001071"
  },
  {
    "type": "word",
    "front": "serve as a gathering place",
    "meaning": "作为公共聚集场所",
    "example": "",
    "weight": 3,
    "id": "sw-001072"
  },
  {
    "type": "word",
    "front": "marketplace",
    "meaning": "集市",
    "example": "",
    "weight": 3,
    "id": "sw-001073"
  },
  {
    "type": "word",
    "front": "even though",
    "meaning": "尽管……仍然……",
    "example": "",
    "weight": 3,
    "id": "sw-001074"
  },
  {
    "type": "word",
    "front": "seasonal market",
    "meaning": "季节性市场",
    "example": "",
    "weight": 3,
    "id": "sw-001075"
  },
  {
    "type": "word",
    "front": "guided tour",
    "meaning": "有讲解的导览",
    "example": "",
    "weight": 3,
    "id": "sw-001076"
  },
  {
    "type": "word",
    "front": "archaeological site",
    "meaning": "考古遗址",
    "example": "",
    "weight": 3,
    "id": "sw-001077"
  },
  {
    "type": "word",
    "front": "beneath / underneath",
    "meaning": "在……下方",
    "example": "",
    "weight": 3,
    "id": "sw-001078"
  },
  {
    "type": "word",
    "front": "ancient remains",
    "meaning": "古代遗存",
    "example": "",
    "weight": 3,
    "id": "sw-001079"
  },
  {
    "type": "word",
    "front": "Roman ruins",
    "meaning": "罗马遗址",
    "example": "",
    "weight": 3,
    "id": "sw-001080"
  },
  {
    "type": "word",
    "front": "uncover an ancient road",
    "meaning": "发掘出古路",
    "example": "",
    "weight": 3,
    "id": "sw-001081"
  },
  {
    "type": "word",
    "front": "excavate the site",
    "meaning": "考古挖掘遗址",
    "example": "",
    "weight": 3,
    "id": "sw-001082"
  },
  {
    "type": "word",
    "front": "traces of everyday life",
    "meaning": "日常生活的痕迹",
    "example": "",
    "weight": 3,
    "id": "sw-001083"
  },
  {
    "type": "word",
    "front": "restore the building",
    "meaning": "修复建筑",
    "example": "",
    "weight": 3,
    "id": "sw-001084"
  },
  {
    "type": "word",
    "front": "preserve the stone floor",
    "meaning": "保护石质地面",
    "example": "",
    "weight": 3,
    "id": "sw-001085"
  },
  {
    "type": "word",
    "front": "largely untouched",
    "meaning": "基本原状",
    "example": "",
    "weight": 3,
    "id": "sw-001086"
  },
  {
    "type": "word",
    "front": "present street level",
    "meaning": "现在的街面高度",
    "example": "",
    "weight": 3,
    "id": "sw-001087"
  },
  {
    "type": "word",
    "front": "raised walkway",
    "meaning": "架高的步道",
    "example": "",
    "weight": 3,
    "id": "sw-001088"
  },
  {
    "type": "word",
    "front": "imagine what it would have looked like",
    "meaning": "想象其当时的样子",
    "example": "",
    "weight": 3,
    "id": "sw-001089"
  },
  {
    "type": "word",
    "front": "several metres below",
    "meaning": "在下方几米处",
    "example": "",
    "weight": 3,
    "id": "sw-001090"
  },
  {
    "type": "word",
    "front": "head in the opposite direction",
    "meaning": "朝相反方向前进",
    "example": "",
    "weight": 3,
    "id": "sw-001091"
  },
  {
    "type": "word",
    "front": "oncoming hikers",
    "meaning": "迎面而来的徒步者",
    "example": "",
    "weight": 3,
    "id": "sw-001092"
  },
  {
    "type": "word",
    "front": "pass each other",
    "meaning": "彼此交错通过",
    "example": "",
    "weight": 3,
    "id": "sw-001093"
  },
  {
    "type": "word",
    "front": "at once",
    "meaning": "同时",
    "example": "",
    "weight": 3,
    "id": "sw-001094"
  },
  {
    "type": "word",
    "front": "one at a time",
    "meaning": "一次一个",
    "example": "",
    "weight": 3,
    "id": "sw-001095"
  },
  {
    "type": "word",
    "front": "the ground drops away steeply",
    "meaning": "地形突然陡降",
    "example": "",
    "weight": 3,
    "id": "sw-001096"
  },
  {
    "type": "word",
    "front": "pull over at a wider section",
    "meaning": "在较宽处靠边",
    "example": "",
    "weight": 3,
    "id": "sw-001097"
  },
  {
    "type": "word",
    "front": "step aside",
    "meaning": "站到旁边",
    "example": "",
    "weight": 3,
    "id": "sw-001098"
  },
  {
    "type": "word",
    "front": "give way / yield",
    "meaning": "让行",
    "example": "",
    "weight": 3,
    "id": "sw-001099"
  },
  {
    "type": "word",
    "front": "in single file",
    "meaning": "排成单列",
    "example": "",
    "weight": 3,
    "id": "sw-001100"
  },
  {
    "type": "word",
    "front": "let the group through",
    "meaning": "让对方队伍通过",
    "example": "",
    "weight": 3,
    "id": "sw-001101"
  },
  {
    "type": "word",
    "front": "further ahead",
    "meaning": "更远前方",
    "example": "",
    "weight": 3,
    "id": "sw-001102"
  },
  {
    "type": "word",
    "front": "loose rocks",
    "meaning": "松动的石头",
    "example": "",
    "weight": 3,
    "id": "sw-001103"
  },
  {
    "type": "word",
    "front": "wait until they've passed",
    "meaning": "等他们通过",
    "example": "",
    "weight": 3,
    "id": "sw-001104"
  },
  {
    "type": "word",
    "front": "do a headcount",
    "meaning": "清点人数",
    "example": "",
    "weight": 3,
    "id": "sw-001105"
  },
  {
    "type": "word",
    "front": "stay on stable ground",
    "meaning": "留在稳定地面上",
    "example": "",
    "weight": 3,
    "id": "sw-001106"
  },
  {
    "type": "word",
    "front": "come across as rude",
    "meaning": "给人粗鲁的印象",
    "example": "",
    "weight": 3,
    "id": "sw-001107"
  },
  {
    "type": "word",
    "front": "take something the wrong way",
    "meaning": "误解某句话",
    "example": "",
    "weight": 3,
    "id": "sw-001108"
  },
  {
    "type": "word",
    "front": "I didn't mean to...",
    "meaning": "我不是故意要……",
    "example": "",
    "weight": 3,
    "id": "sw-001109"
  },
  {
    "type": "word",
    "front": "What I meant was...",
    "meaning": "我真正的意思是……",
    "example": "",
    "weight": 3,
    "id": "sw-001110"
  },
  {
    "type": "word",
    "front": "looking back",
    "meaning": "回头想想",
    "example": "",
    "weight": 3,
    "id": "sw-001111"
  },
  {
    "type": "word",
    "front": "bring it up",
    "meaning": "主动提起",
    "example": "",
    "weight": 3,
    "id": "sw-001112"
  },
  {
    "type": "word",
    "front": "clear things up",
    "meaning": "澄清误会",
    "example": "",
    "weight": 3,
    "id": "sw-001113"
  },
  {
    "type": "word",
    "front": "caught off guard",
    "meaning": "措手不及",
    "example": "",
    "weight": 3,
    "id": "sw-001114"
  },
  {
    "type": "word",
    "front": "talk it through",
    "meaning": "仔细谈开",
    "example": "",
    "weight": 3,
    "id": "sw-001115"
  },
  {
    "type": "word",
    "front": "no hard feelings",
    "meaning": "没有芥蒂",
    "example": "",
    "weight": 3,
    "id": "sw-001116"
  },
  {
    "type": "word",
    "front": "word it better",
    "meaning": "措辞更得当",
    "example": "",
    "weight": 3,
    "id": "sw-001117"
  },
  {
    "type": "word",
    "front": "sound critical",
    "meaning": "听起来像批评",
    "example": "",
    "weight": 3,
    "id": "sw-001118"
  },
  {
    "type": "word",
    "front": "upset someone",
    "meaning": "使某人不高兴",
    "example": "",
    "weight": 3,
    "id": "sw-001119"
  },
  {
    "type": "word",
    "front": "badly wrinkled",
    "meaning": "皱得很厉害",
    "example": "",
    "weight": 3,
    "id": "sw-001120"
  },
  {
    "type": "word",
    "front": "a pile of laundry",
    "meaning": "一堆衣物",
    "example": "",
    "weight": 3,
    "id": "sw-001121"
  },
  {
    "type": "word",
    "front": "set up the ironing board",
    "meaning": "支起熨衣板",
    "example": "",
    "weight": 3,
    "id": "sw-001122"
  },
  {
    "type": "word",
    "front": "fold up the ironing board",
    "meaning": "收折熨衣板",
    "example": "",
    "weight": 3,
    "id": "sw-001123"
  },
  {
    "type": "word",
    "front": "plug in the iron",
    "meaning": "插上熨斗电源",
    "example": "",
    "weight": 3,
    "id": "sw-001124"
  },
  {
    "type": "word",
    "front": "heat up",
    "meaning": "加热",
    "example": "",
    "weight": 3,
    "id": "sw-001125"
  },
  {
    "type": "word",
    "front": "spread the shirt out",
    "meaning": "铺开衬衫",
    "example": "",
    "weight": 3,
    "id": "sw-001126"
  },
  {
    "type": "word",
    "front": "smooth out the wrinkles",
    "meaning": "抚平褶皱",
    "example": "",
    "weight": 3,
    "id": "sw-001127"
  },
  {
    "type": "word",
    "front": "iron the sleeves",
    "meaning": "熨袖子",
    "example": "",
    "weight": 3,
    "id": "sw-001128"
  },
  {
    "type": "word",
    "front": "press the fabric",
    "meaning": "压熨布料",
    "example": "",
    "weight": 3,
    "id": "sw-001129"
  },
  {
    "type": "word",
    "front": "stubborn crease",
    "meaning": "顽固折痕",
    "example": "",
    "weight": 3,
    "id": "sw-001130"
  },
  {
    "type": "word",
    "front": "get rid of wrinkles",
    "meaning": "除去褶皱",
    "example": "",
    "weight": 3,
    "id": "sw-001131"
  },
  {
    "type": "word",
    "front": "catch yourself just in time",
    "meaning": "及时反应停住",
    "example": "",
    "weight": 3,
    "id": "sw-001132"
  },
  {
    "type": "word",
    "front": "hang the shirt up",
    "meaning": "把衬衫挂起来",
    "example": "",
    "weight": 3,
    "id": "sw-001133"
  },
  {
    "type": "word",
    "front": "iron out the details",
    "meaning": "解决细节问题",
    "example": "",
    "weight": 3,
    "id": "sw-001134"
  },
  {
    "type": "word",
    "front": "keep buffering",
    "meaning": "持续缓冲",
    "example": "",
    "weight": 3,
    "id": "sw-001135"
  },
  {
    "type": "word",
    "front": "lag / laggy",
    "meaning": "网络延迟/有延迟的",
    "example": "",
    "weight": 3,
    "id": "sw-001136"
  },
  {
    "type": "word",
    "front": "freeze",
    "meaning": "卡死不动",
    "example": "",
    "weight": 3,
    "id": "sw-001137"
  },
  {
    "type": "word",
    "front": "take forever to load",
    "meaning": "加载特别慢",
    "example": "",
    "weight": 3,
    "id": "sw-001138"
  },
  {
    "type": "word",
    "front": "connection drops out",
    "meaning": "网络时断时续",
    "example": "",
    "weight": 3,
    "id": "sw-001139"
  },
  {
    "type": "word",
    "front": "run a speed test",
    "meaning": "测速",
    "example": "",
    "weight": 3,
    "id": "sw-001140"
  },
  {
    "type": "word",
    "front": "download speed",
    "meaning": "下载速度",
    "example": "",
    "weight": 3,
    "id": "sw-001141"
  },
  {
    "type": "word",
    "front": "lower than usual",
    "meaning": "比平时低",
    "example": "",
    "weight": 3,
    "id": "sw-001142"
  },
  {
    "type": "word",
    "front": "unplug the router",
    "meaning": "拔掉路由器电源",
    "example": "",
    "weight": 3,
    "id": "sw-001143"
  },
  {
    "type": "word",
    "front": "plug it back in",
    "meaning": "重新插电",
    "example": "",
    "weight": 3,
    "id": "sw-001144"
  },
  {
    "type": "word",
    "front": "restart the router",
    "meaning": "重启路由器",
    "example": "",
    "weight": 3,
    "id": "sw-001145"
  },
  {
    "type": "word",
    "front": "factory reset",
    "meaning": "恢复出厂设置",
    "example": "",
    "weight": 3,
    "id": "sw-001146"
  },
  {
    "type": "word",
    "front": "reconnect to Wi-Fi",
    "meaning": "重新连接 Wi-Fi",
    "example": "",
    "weight": 3,
    "id": "sw-001147"
  },
  {
    "type": "word",
    "front": "play smoothly",
    "meaning": "流畅播放",
    "example": "",
    "weight": 3,
    "id": "sw-001148"
  },
  {
    "type": "word",
    "front": "unstable connection",
    "meaning": "不稳定的网络",
    "example": "",
    "weight": 3,
    "id": "sw-001149"
  },
  {
    "type": "word",
    "front": "turn off the camera temporarily",
    "meaning": "临时关闭摄像头",
    "example": "",
    "weight": 3,
    "id": "sw-001150"
  },
  {
    "type": "word",
    "front": "tend to be more expensive",
    "meaning": "往往更贵",
    "example": "",
    "weight": 3,
    "id": "sw-001151"
  },
  {
    "type": "word",
    "front": "in high demand",
    "meaning": "需求旺盛",
    "example": "",
    "weight": 3,
    "id": "sw-001152"
  },
  {
    "type": "word",
    "front": "be willing to pay",
    "meaning": "愿意支付",
    "example": "",
    "weight": 3,
    "id": "sw-001153"
  },
  {
    "type": "word",
    "front": "within walking distance",
    "meaning": "步行可达",
    "example": "",
    "weight": 3,
    "id": "sw-001154"
  },
  {
    "type": "word",
    "front": "shorter commute",
    "meaning": "通勤更短",
    "example": "",
    "weight": 3,
    "id": "sw-001155"
  },
  {
    "type": "word",
    "front": "commute to work",
    "meaning": "通勤上班",
    "example": "",
    "weight": 3,
    "id": "sw-001156"
  },
  {
    "type": "word",
    "front": "limited supply",
    "meaning": "供给有限",
    "example": "",
    "weight": 3,
    "id": "sw-001157"
  },
  {
    "type": "word",
    "front": "keep up with demand",
    "meaning": "满足需求增长",
    "example": "",
    "weight": 3,
    "id": "sw-001158"
  },
  {
    "type": "word",
    "front": "drive up rents",
    "meaning": "推高租金",
    "example": "",
    "weight": 3,
    "id": "sw-001159"
  },
  {
    "type": "word",
    "front": "afford an apartment",
    "meaning": "负担得起公寓",
    "example": "",
    "weight": 3,
    "id": "sw-001160"
  },
  {
    "type": "word",
    "front": "more affordable farther out",
    "meaning": "更远地区更加可负担",
    "example": "",
    "weight": 3,
    "id": "sw-001161"
  },
  {
    "type": "word",
    "front": "trade-off",
    "meaning": "取舍权衡",
    "example": "",
    "weight": 3,
    "id": "sw-001162"
  },
  {
    "type": "word",
    "front": "housing costs",
    "meaning": "住房成本",
    "example": "",
    "weight": 3,
    "id": "sw-001163"
  },
  {
    "type": "word",
    "front": "property values",
    "meaning": "房产价值",
    "example": "",
    "weight": 3,
    "id": "sw-001164"
  },
  {
    "type": "word",
    "front": "overnight ferry",
    "meaning": "夜间渡轮",
    "example": "",
    "weight": 3,
    "id": "sw-001165"
  },
  {
    "type": "word",
    "front": "crossing",
    "meaning": "渡轮海上航程",
    "example": "",
    "weight": 3,
    "id": "sw-001166"
  },
  {
    "type": "word",
    "front": "rough crossing",
    "meaning": "颠簸的航程",
    "example": "",
    "weight": 3,
    "id": "sw-001167"
  },
  {
    "type": "word",
    "front": "cabin",
    "meaning": "客舱",
    "example": "",
    "weight": 3,
    "id": "sw-001168"
  },
  {
    "type": "word",
    "front": "berth",
    "meaning": "卧铺",
    "example": "",
    "weight": 3,
    "id": "sw-001169"
  },
  {
    "type": "word",
    "front": "boarding pass",
    "meaning": "登船凭证",
    "example": "",
    "weight": 3,
    "id": "sw-001170"
  },
  {
    "type": "word",
    "front": "check in at the terminal",
    "meaning": "在码头办登船手续",
    "example": "",
    "weight": 3,
    "id": "sw-001171"
  },
  {
    "type": "word",
    "front": "drop off luggage",
    "meaning": "放下行李",
    "example": "",
    "weight": 3,
    "id": "sw-001172"
  },
  {
    "type": "word",
    "front": "leave the harbour",
    "meaning": "驶离港口",
    "example": "",
    "weight": 3,
    "id": "sw-001173"
  },
  {
    "type": "word",
    "front": "set sail",
    "meaning": "启航",
    "example": "",
    "weight": 3,
    "id": "sw-001174"
  },
  {
    "type": "word",
    "front": "choppy seas",
    "meaning": "短而急的海浪",
    "example": "",
    "weight": 3,
    "id": "sw-001175"
  },
  {
    "type": "word",
    "front": "rock from side to side",
    "meaning": "左右摇晃",
    "example": "",
    "weight": 3,
    "id": "sw-001176"
  },
  {
    "type": "word",
    "front": "feel queasy",
    "meaning": "感到反胃",
    "example": "",
    "weight": 3,
    "id": "sw-001177"
  },
  {
    "type": "word",
    "front": "get seasick",
    "meaning": "晕船",
    "example": "",
    "weight": 3,
    "id": "sw-001178"
  },
  {
    "type": "word",
    "front": "motion sickness",
    "meaning": "晕动症",
    "example": "",
    "weight": 3,
    "id": "sw-001179"
  },
  {
    "type": "word",
    "front": "dock at the port",
    "meaning": "在港口靠泊",
    "example": "",
    "weight": 3,
    "id": "sw-001180"
  },
  {
    "type": "word",
    "front": "disembark",
    "meaning": "下船",
    "example": "",
    "weight": 3,
    "id": "sw-001181"
  },
  {
    "type": "word",
    "front": "sun beats down",
    "meaning": "烈日暴晒",
    "example": "",
    "weight": 3,
    "id": "sw-001182"
  },
  {
    "type": "word",
    "front": "exposed hillside",
    "meaning": "无遮蔽的山坡",
    "example": "",
    "weight": 3,
    "id": "sw-001183"
  },
  {
    "type": "word",
    "front": "hardly any shade",
    "meaning": "几乎没有阴凉处",
    "example": "",
    "weight": 3,
    "id": "sw-001184"
  },
  {
    "type": "word",
    "front": "radiate heat",
    "meaning": "散发热量",
    "example": "",
    "weight": 3,
    "id": "sw-001185"
  },
  {
    "type": "word",
    "front": "feel dizzy",
    "meaning": "头晕",
    "example": "",
    "weight": 3,
    "id": "sw-001186"
  },
  {
    "type": "word",
    "front": "feel light-headed",
    "meaning": "头昏发飘",
    "example": "",
    "weight": 3,
    "id": "sw-001187"
  },
  {
    "type": "word",
    "front": "look flushed",
    "meaning": "面色发红",
    "example": "",
    "weight": 3,
    "id": "sw-001188"
  },
  {
    "type": "word",
    "front": "struggle to keep up",
    "meaning": "难以跟上",
    "example": "",
    "weight": 3,
    "id": "sw-001189"
  },
  {
    "type": "word",
    "front": "fall behind",
    "meaning": "掉队",
    "example": "",
    "weight": 3,
    "id": "sw-001190"
  },
  {
    "type": "word",
    "front": "cool someone down",
    "meaning": "帮助某人降温",
    "example": "",
    "weight": 3,
    "id": "sw-001191"
  },
  {
    "type": "word",
    "front": "move to shade",
    "meaning": "转移到阴凉处",
    "example": "",
    "weight": 3,
    "id": "sw-001192"
  },
  {
    "type": "word",
    "front": "check on someone",
    "meaning": "查看某人状态",
    "example": "",
    "weight": 3,
    "id": "sw-001193"
  },
  {
    "type": "word",
    "front": "recover as expected",
    "meaning": "按预期恢复",
    "example": "",
    "weight": 3,
    "id": "sw-001194"
  },
  {
    "type": "word",
    "front": "arrange for assistance",
    "meaning": "安排援助",
    "example": "",
    "weight": 3,
    "id": "sw-001195"
  },
  {
    "type": "word",
    "front": "abandon the summit plan",
    "meaning": "放弃登顶计划",
    "example": "",
    "weight": 3,
    "id": "sw-001196"
  },
  {
    "type": "word",
    "front": "get distracted by",
    "meaning": "被……分心",
    "example": "",
    "weight": 3,
    "id": "sw-001197"
  },
  {
    "type": "word",
    "front": "burn the toast",
    "meaning": "把面包烤焦",
    "example": "",
    "weight": 3,
    "id": "sw-001198"
  },
  {
    "type": "word",
    "front": "smoke rises from",
    "meaning": "烟从……升起",
    "example": "",
    "weight": 3,
    "id": "sw-001199"
  },
  {
    "type": "word",
    "front": "the smoke alarm goes off",
    "meaning": "烟雾报警器响起",
    "example": "",
    "weight": 3,
    "id": "sw-001200"
  },
  {
    "type": "word",
    "front": "set off the alarm",
    "meaning": "触发警报",
    "example": "",
    "weight": 3,
    "id": "sw-001201"
  },
  {
    "type": "word",
    "front": "piercing sound",
    "meaning": "尖锐刺耳的声音",
    "example": "",
    "weight": 3,
    "id": "sw-001202"
  },
  {
    "type": "word",
    "front": "stop the toaster",
    "meaning": "停止烤面包",
    "example": "",
    "weight": 3,
    "id": "sw-001203"
  },
  {
    "type": "word",
    "front": "switch on the extractor fan",
    "meaning": "打开排风扇",
    "example": "",
    "weight": 3,
    "id": "sw-001204"
  },
  {
    "type": "word",
    "front": "range hood",
    "meaning": "抽油烟机",
    "example": "",
    "weight": 3,
    "id": "sw-001205"
  },
  {
    "type": "word",
    "front": "clear the smoke",
    "meaning": "驱散烟雾",
    "example": "",
    "weight": 3,
    "id": "sw-001206"
  },
  {
    "type": "word",
    "front": "air out the kitchen",
    "meaning": "给厨房通风",
    "example": "",
    "weight": 3,
    "id": "sw-001207"
  },
  {
    "type": "word",
    "front": "smell lingers",
    "meaning": "气味久久不散",
    "example": "",
    "weight": 3,
    "id": "sw-001208"
  },
  {
    "type": "word",
    "front": "die down gradually",
    "meaning": "逐渐减弱",
    "example": "",
    "weight": 3,
    "id": "sw-001209"
  },
  {
    "type": "word",
    "front": "throw away burnt toast",
    "meaning": "丢掉烧焦的面包",
    "example": "",
    "weight": 3,
    "id": "sw-001210"
  },
  {
    "type": "word",
    "front": "be on fire",
    "meaning": "正在着火",
    "example": "",
    "weight": 3,
    "id": "sw-001211"
  },
  {
    "type": "word",
    "front": "withdraw cash",
    "meaning": "提取现金",
    "example": "",
    "weight": 3,
    "id": "sw-001212"
  },
  {
    "type": "word",
    "front": "insert the card",
    "meaning": "插入卡",
    "example": "",
    "weight": 3,
    "id": "sw-001213"
  },
  {
    "type": "word",
    "front": "enter your PIN",
    "meaning": "输入银行卡密码",
    "example": "",
    "weight": 3,
    "id": "sw-001214"
  },
  {
    "type": "word",
    "front": "eject a card",
    "meaning": "将卡退出",
    "example": "",
    "weight": 3,
    "id": "sw-001215"
  },
  {
    "type": "word",
    "front": "process a transaction",
    "meaning": "处理交易",
    "example": "",
    "weight": 3,
    "id": "sw-001216"
  },
  {
    "type": "word",
    "front": "transaction couldn't be completed",
    "meaning": "交易未完成",
    "example": "",
    "weight": 3,
    "id": "sw-001217"
  },
  {
    "type": "word",
    "front": "take longer than usual",
    "meaning": "比平时慢",
    "example": "",
    "weight": 3,
    "id": "sw-001218"
  },
  {
    "type": "word",
    "front": "ATM retained my card",
    "meaning": "ATM 吞卡了",
    "example": "",
    "weight": 3,
    "id": "sw-001219"
  },
  {
    "type": "word",
    "front": "ATM swallowed my card",
    "meaning": "ATM 把卡吞了（口语）",
    "example": "",
    "weight": 3,
    "id": "sw-001220"
  },
  {
    "type": "word",
    "front": "come back out",
    "meaning": "退出来",
    "example": "",
    "weight": 3,
    "id": "sw-001221"
  },
  {
    "type": "word",
    "front": "note the ATM location",
    "meaning": "记下 ATM 位置",
    "example": "",
    "weight": 3,
    "id": "sw-001222"
  },
  {
    "type": "word",
    "front": "block a card",
    "meaning": "停用银行卡",
    "example": "",
    "weight": 3,
    "id": "sw-001223"
  },
  {
    "type": "word",
    "front": "freeze a card",
    "meaning": "冻结银行卡",
    "example": "",
    "weight": 3,
    "id": "sw-001224"
  },
  {
    "type": "word",
    "front": "issue a replacement",
    "meaning": "补发新卡",
    "example": "",
    "weight": 3,
    "id": "sw-001225"
  },
  {
    "type": "word",
    "front": "request a replacement card",
    "meaning": "申请补卡",
    "example": "",
    "weight": 3,
    "id": "sw-001226"
  },
  {
    "type": "word",
    "front": "account was debited",
    "meaning": "账户被扣款",
    "example": "",
    "weight": 3,
    "id": "sw-001227"
  },
  {
    "type": "word",
    "front": "check for an unexpected charge",
    "meaning": "核对异常扣款",
    "example": "",
    "weight": 3,
    "id": "sw-001228"
  },
  {
    "type": "word",
    "front": "look after houseplants",
    "meaning": "照顾室内盆栽",
    "example": "",
    "weight": 3,
    "id": "sw-001229"
  },
  {
    "type": "word",
    "front": "while someone is away",
    "meaning": "某人不在期间",
    "example": "",
    "weight": 3,
    "id": "sw-001230"
  },
  {
    "type": "word",
    "front": "top layer of soil",
    "meaning": "表层土壤",
    "example": "",
    "weight": 3,
    "id": "sw-001231"
  },
  {
    "type": "word",
    "front": "water the plants",
    "meaning": "给植物浇水",
    "example": "",
    "weight": 3,
    "id": "sw-001232"
  },
  {
    "type": "word",
    "front": "overwater a plant",
    "meaning": "给植物浇水过多",
    "example": "",
    "weight": 3,
    "id": "sw-001233"
  },
  {
    "type": "word",
    "front": "leaves droop",
    "meaning": "叶子下垂",
    "example": "",
    "weight": 3,
    "id": "sw-001234"
  },
  {
    "type": "word",
    "front": "the plant wilts",
    "meaning": "植物萎蔫",
    "example": "",
    "weight": 3,
    "id": "sw-001235"
  },
  {
    "type": "word",
    "front": "turn yellow",
    "meaning": "变黄",
    "example": "",
    "weight": 3,
    "id": "sw-001236"
  },
  {
    "type": "word",
    "front": "go brown",
    "meaning": "变褐色",
    "example": "",
    "weight": 3,
    "id": "sw-001237"
  },
  {
    "type": "word",
    "front": "soaking wet",
    "meaning": "湿透",
    "example": "",
    "weight": 3,
    "id": "sw-001238"
  },
  {
    "type": "word",
    "front": "slightly damp",
    "meaning": "微潮",
    "example": "",
    "weight": 3,
    "id": "sw-001239"
  },
  {
    "type": "word",
    "front": "dry out gradually",
    "meaning": "逐渐干燥",
    "example": "",
    "weight": 3,
    "id": "sw-001240"
  },
  {
    "type": "word",
    "front": "drainage holes",
    "meaning": "排水孔",
    "example": "",
    "weight": 3,
    "id": "sw-001241"
  },
  {
    "type": "word",
    "front": "empty the saucer",
    "meaning": "倒掉花盆托盘积水",
    "example": "",
    "weight": 3,
    "id": "sw-001242"
  },
  {
    "type": "word",
    "front": "water collects underneath",
    "meaning": "水在下面积存",
    "example": "",
    "weight": 3,
    "id": "sw-001243"
  },
  {
    "type": "word",
    "front": "perk up",
    "meaning": "恢复生气",
    "example": "",
    "weight": 3,
    "id": "sw-001244"
  },
  {
    "type": "word",
    "front": "pinpoint a location",
    "meaning": "精确定位",
    "example": "",
    "weight": 3,
    "id": "sw-001245"
  },
  {
    "type": "word",
    "front": "pick up satellite signals",
    "meaning": "接收到卫星信号",
    "example": "",
    "weight": 3,
    "id": "sw-001246"
  },
  {
    "type": "word",
    "front": "orbit the Earth",
    "meaning": "环绕地球运行",
    "example": "",
    "weight": 3,
    "id": "sw-001247"
  },
  {
    "type": "word",
    "front": "transmit a signal",
    "meaning": "发送信号",
    "example": "",
    "weight": 3,
    "id": "sw-001248"
  },
  {
    "type": "word",
    "front": "receive a signal",
    "meaning": "接收信号",
    "example": "",
    "weight": 3,
    "id": "sw-001249"
  },
  {
    "type": "word",
    "front": "measure travel time",
    "meaning": "测量传播时间",
    "example": "",
    "weight": 3,
    "id": "sw-001250"
  },
  {
    "type": "word",
    "front": "work out your position",
    "meaning": "计算位置",
    "example": "",
    "weight": 3,
    "id": "sw-001251"
  },
  {
    "type": "word",
    "front": "block satellite signals",
    "meaning": "阻挡卫星信号",
    "example": "",
    "weight": 3,
    "id": "sw-001252"
  },
  {
    "type": "word",
    "front": "reflect off buildings",
    "meaning": "被建筑物反射",
    "example": "",
    "weight": 3,
    "id": "sw-001253"
  },
  {
    "type": "word",
    "front": "accuracy drops",
    "meaning": "精度下降",
    "example": "",
    "weight": 3,
    "id": "sw-001254"
  },
  {
    "type": "word",
    "front": "less accurate than usual",
    "meaning": "比平时不准",
    "example": "",
    "weight": 3,
    "id": "sw-001255"
  },
  {
    "type": "word",
    "front": "jump around on the map",
    "meaning": "地图定位点跳动",
    "example": "",
    "weight": 3,
    "id": "sw-001256"
  },
  {
    "type": "word",
    "front": "offline map",
    "meaning": "离线地图",
    "example": "",
    "weight": 3,
    "id": "sw-001257"
  },
  {
    "type": "word",
    "front": "mobile data",
    "meaning": "移动数据",
    "example": "",
    "weight": 3,
    "id": "sw-001258"
  },
  {
    "type": "word",
    "front": "weak reception",
    "meaning": "信号覆盖较弱",
    "example": "",
    "weight": 3,
    "id": "sw-001259"
  },
  {
    "type": "word",
    "front": "GNSS receiver",
    "meaning": "全球导航卫星系统接收器",
    "example": "",
    "weight": 3,
    "id": "sw-001260"
  },
  {
    "type": "word",
    "front": "baggage claim",
    "meaning": "行李提取区",
    "example": "",
    "weight": 3,
    "id": "sw-001261"
  },
  {
    "type": "word",
    "front": "baggage carousel",
    "meaning": "行李转盘",
    "example": "",
    "weight": 3,
    "id": "sw-001262"
  },
  {
    "type": "word",
    "front": "assigned to carousel six",
    "meaning": "分配到六号转盘",
    "example": "",
    "weight": 3,
    "id": "sw-001263"
  },
  {
    "type": "word",
    "front": "nowhere to be seen",
    "meaning": "不见踪影",
    "example": "",
    "weight": 3,
    "id": "sw-001264"
  },
  {
    "type": "word",
    "front": "the bag hasn't turned up",
    "meaning": "行李未出现",
    "example": "",
    "weight": 3,
    "id": "sw-001265"
  },
  {
    "type": "word",
    "front": "baggage tag",
    "meaning": "托运行李凭条",
    "example": "",
    "weight": 3,
    "id": "sw-001266"
  },
  {
    "type": "word",
    "front": "checked bag",
    "meaning": "托运行李",
    "example": "",
    "weight": 3,
    "id": "sw-001267"
  },
  {
    "type": "word",
    "front": "file a missing baggage report",
    "meaning": "登记未到达行李",
    "example": "",
    "weight": 3,
    "id": "sw-001268"
  },
  {
    "type": "word",
    "front": "trace the bag",
    "meaning": "追查行李下落",
    "example": "",
    "weight": 3,
    "id": "sw-001269"
  },
  {
    "type": "word",
    "front": "track the bag",
    "meaning": "跟踪行李",
    "example": "",
    "weight": 3,
    "id": "sw-001270"
  },
  {
    "type": "word",
    "front": "locate the suitcase",
    "meaning": "找到行李箱",
    "example": "",
    "weight": 3,
    "id": "sw-001271"
  },
  {
    "type": "word",
    "front": "deliver to my accommodation",
    "meaning": "送到我的住处",
    "example": "",
    "weight": 3,
    "id": "sw-001272"
  },
  {
    "type": "word",
    "front": "delayed baggage",
    "meaning": "延误行李",
    "example": "",
    "weight": 3,
    "id": "sw-001273"
  },
  {
    "type": "word",
    "front": "lost baggage",
    "meaning": "丢失行李",
    "example": "",
    "weight": 3,
    "id": "sw-001274"
  },
  {
    "type": "word",
    "front": "connecting flight",
    "meaning": "转机航班",
    "example": "",
    "weight": 3,
    "id": "sw-001275"
  },
  {
    "type": "word",
    "front": "sole of a boot",
    "meaning": "靴子鞋底",
    "example": "",
    "weight": 3,
    "id": "sw-001276"
  },
  {
    "type": "word",
    "front": "upper",
    "meaning": "鞋面",
    "example": "",
    "weight": 3,
    "id": "sw-001277"
  },
  {
    "type": "word",
    "front": "outsole",
    "meaning": "外底",
    "example": "",
    "weight": 3,
    "id": "sw-001278"
  },
  {
    "type": "word",
    "front": "peel away from",
    "meaning": "从……剥离",
    "example": "",
    "weight": 3,
    "id": "sw-001279"
  },
  {
    "type": "word",
    "front": "peel off",
    "meaning": "脱落、撕下",
    "example": "",
    "weight": 3,
    "id": "sw-001280"
  },
  {
    "type": "word",
    "front": "flapping sound",
    "meaning": "拍打声",
    "example": "",
    "weight": 3,
    "id": "sw-001281"
  },
  {
    "type": "word",
    "front": "take a closer look",
    "meaning": "仔细检查",
    "example": "",
    "weight": 3,
    "id": "sw-001282"
  },
  {
    "type": "word",
    "front": "catch on a rock",
    "meaning": "勾住石头",
    "example": "",
    "weight": 3,
    "id": "sw-001283"
  },
  {
    "type": "word",
    "front": "come off completely",
    "meaning": "完全脱落",
    "example": "",
    "weight": 3,
    "id": "sw-001284"
  },
  {
    "type": "word",
    "front": "trip over",
    "meaning": "被……绊倒",
    "example": "",
    "weight": 3,
    "id": "sw-001285"
  },
  {
    "type": "word",
    "front": "brush away dirt",
    "meaning": "刷掉泥土",
    "example": "",
    "weight": 3,
    "id": "sw-001286"
  },
  {
    "type": "word",
    "front": "hold something in place",
    "meaning": "固定在原位",
    "example": "",
    "weight": 3,
    "id": "sw-001287"
  },
  {
    "type": "word",
    "front": "temporary fix",
    "meaning": "临时补救",
    "example": "",
    "weight": 3,
    "id": "sw-001288"
  },
  {
    "type": "word",
    "front": "permanent fix",
    "meaning": "永久解决办法",
    "example": "",
    "weight": 3,
    "id": "sw-001289"
  },
  {
    "type": "word",
    "front": "give out",
    "meaning": "失灵、撑不住",
    "example": "",
    "weight": 3,
    "id": "sw-001290"
  },
  {
    "type": "word",
    "front": "tape it up",
    "meaning": "用胶带缠起来",
    "example": "",
    "weight": 3,
    "id": "sw-001291"
  },
  {
    "type": "word",
    "front": "reassess the route",
    "meaning": "重新评估路线",
    "example": "",
    "weight": 3,
    "id": "sw-001292"
  },
  {
    "type": "word",
    "front": "handle snapped",
    "meaning": "提手突然断了",
    "example": "",
    "weight": 3,
    "id": "sw-001293"
  },
  {
    "type": "word",
    "front": "bag split open",
    "meaning": "袋子裂开",
    "example": "",
    "weight": 3,
    "id": "sw-001294"
  },
  {
    "type": "word",
    "front": "spill onto the pavement",
    "meaning": "散落到人行道",
    "example": "",
    "weight": 3,
    "id": "sw-001295"
  },
  {
    "type": "word",
    "front": "roll away",
    "meaning": "滚走",
    "example": "",
    "weight": 3,
    "id": "sw-001296"
  },
  {
    "type": "word",
    "front": "roll under a parked car",
    "meaning": "滚到停着的车下",
    "example": "",
    "weight": 3,
    "id": "sw-001297"
  },
  {
    "type": "word",
    "front": "land on its side",
    "meaning": "侧面着地",
    "example": "",
    "weight": 3,
    "id": "sw-001298"
  },
  {
    "type": "word",
    "front": "start leaking",
    "meaning": "开始漏液",
    "example": "",
    "weight": 3,
    "id": "sw-001299"
  },
  {
    "type": "word",
    "front": "bend down",
    "meaning": "弯腰",
    "example": "",
    "weight": 3,
    "id": "sw-001300"
  },
  {
    "type": "word",
    "front": "retrieve an apple",
    "meaning": "取回苹果",
    "example": "",
    "weight": 3,
    "id": "sw-001301"
  },
  {
    "type": "word",
    "front": "stay intact",
    "meaning": "保持完好",
    "example": "",
    "weight": 3,
    "id": "sw-001302"
  },
  {
    "type": "word",
    "front": "double-bag groceries",
    "meaning": "给杂货套双层袋",
    "example": "",
    "weight": 3,
    "id": "sw-001303"
  },
  {
    "type": "word",
    "front": "gather everything together",
    "meaning": "将东西拢到一起",
    "example": "",
    "weight": 3,
    "id": "sw-001304"
  },
  {
    "type": "word",
    "front": "carry in your arms",
    "meaning": "抱在双臂里",
    "example": "",
    "weight": 3,
    "id": "sw-001305"
  },
  {
    "type": "word",
    "front": "split open at the bottom",
    "meaning": "底部裂开",
    "example": "",
    "weight": 3,
    "id": "sw-001306"
  },
  {
    "type": "word",
    "front": "join an online meeting",
    "meaning": "加入线上会议",
    "example": "",
    "weight": 3,
    "id": "sw-001307"
  },
  {
    "type": "word",
    "front": "attend a meeting",
    "meaning": "参加会议",
    "example": "",
    "weight": 3,
    "id": "sw-001308"
  },
  {
    "type": "word",
    "front": "mute / unmute yourself",
    "meaning": "静音/取消静音",
    "example": "",
    "weight": 3,
    "id": "sw-001309"
  },
  {
    "type": "word",
    "front": "your mic is still on",
    "meaning": "麦克风仍开着",
    "example": "",
    "weight": 3,
    "id": "sw-001310"
  },
  {
    "type": "word",
    "front": "I didn't realize...",
    "meaning": "我没意识到……",
    "example": "",
    "weight": 3,
    "id": "sw-001311"
  },
  {
    "type": "word",
    "front": "point out a problem",
    "meaning": "指出问题",
    "example": "",
    "weight": 3,
    "id": "sw-001312"
  },
  {
    "type": "word",
    "front": "share your screen",
    "meaning": "共享屏幕",
    "example": "",
    "weight": 3,
    "id": "sw-001313"
  },
  {
    "type": "word",
    "front": "share the wrong window",
    "meaning": "共享了错误的窗口",
    "example": "",
    "weight": 3,
    "id": "sw-001314"
  },
  {
    "type": "word",
    "front": "stop sharing",
    "meaning": "停止共享",
    "example": "",
    "weight": 3,
    "id": "sw-001315"
  },
  {
    "type": "word",
    "front": "switch to the correct document",
    "meaning": "切换到正确文件",
    "example": "",
    "weight": 3,
    "id": "sw-001316"
  },
  {
    "type": "word",
    "front": "voice is breaking up",
    "meaning": "声音断断续续",
    "example": "",
    "weight": 3,
    "id": "sw-001317"
  },
  {
    "type": "word",
    "front": "audio keeps cutting out",
    "meaning": "音频不断中断",
    "example": "",
    "weight": 3,
    "id": "sw-001318"
  },
  {
    "type": "word",
    "front": "the call dropped",
    "meaning": "通话掉线",
    "example": "",
    "weight": 3,
    "id": "sw-001319"
  },
  {
    "type": "word",
    "front": "there's an echo",
    "meaning": "有回音",
    "example": "",
    "weight": 3,
    "id": "sw-001320"
  },
  {
    "type": "word",
    "front": "audio feedback",
    "meaning": "音频反馈啸叫",
    "example": "",
    "weight": 3,
    "id": "sw-001321"
  },
  {
    "type": "word",
    "front": "put on headphones",
    "meaning": "戴上耳机",
    "example": "",
    "weight": 3,
    "id": "sw-001322"
  },
  {
    "type": "word",
    "front": "check microphone settings",
    "meaning": "检查麦克风设置",
    "example": "",
    "weight": 3,
    "id": "sw-001323"
  },
  {
    "type": "word",
    "front": "reach into your pocket",
    "meaning": "伸手进口袋",
    "example": "",
    "weight": 3,
    "id": "sw-001324"
  },
  {
    "type": "word",
    "front": "be missing",
    "meaning": "处于丢失状态",
    "example": "",
    "weight": 3,
    "id": "sw-001325"
  },
  {
    "type": "word",
    "front": "go missing",
    "meaning": "丢失、失踪",
    "example": "",
    "weight": 3,
    "id": "sw-001326"
  },
  {
    "type": "word",
    "front": "empty your backpack",
    "meaning": "掏空背包",
    "example": "",
    "weight": 3,
    "id": "sw-001327"
  },
  {
    "type": "word",
    "front": "nowhere to be found",
    "meaning": "怎么也找不到",
    "example": "",
    "weight": 3,
    "id": "sw-001328"
  },
  {
    "type": "word",
    "front": "retrace your steps",
    "meaning": "沿来路寻找",
    "example": "",
    "weight": 3,
    "id": "sw-001329"
  },
  {
    "type": "word",
    "front": "hand in a wallet",
    "meaning": "将钱包上交",
    "example": "",
    "weight": 3,
    "id": "sw-001330"
  },
  {
    "type": "word",
    "front": "turn in a wallet",
    "meaning": "将钱包上交",
    "example": "",
    "weight": 3,
    "id": "sw-001331"
  },
  {
    "type": "word",
    "front": "lost-and-found desk",
    "meaning": "失物招领台",
    "example": "",
    "weight": 3,
    "id": "sw-001332"
  },
  {
    "type": "word",
    "front": "lost property office",
    "meaning": "失物招领办公室",
    "example": "",
    "weight": 3,
    "id": "sw-001333"
  },
  {
    "type": "word",
    "front": "worn corner",
    "meaning": "磨损的边角",
    "example": "",
    "weight": 3,
    "id": "sw-001334"
  },
  {
    "type": "word",
    "front": "worn out",
    "meaning": "磨损严重",
    "example": "",
    "weight": 3,
    "id": "sw-001335"
  },
  {
    "type": "word",
    "front": "identify the wallet",
    "meaning": "辨认钱包",
    "example": "",
    "weight": 3,
    "id": "sw-001336"
  },
  {
    "type": "word",
    "front": "prove ownership",
    "meaning": "证明所有权",
    "example": "",
    "weight": 3,
    "id": "sw-001337"
  },
  {
    "type": "word",
    "front": "hand it back",
    "meaning": "把它交还",
    "example": "",
    "weight": 3,
    "id": "sw-001338"
  },
  {
    "type": "word",
    "front": "get it back",
    "meaning": "找回来",
    "example": "",
    "weight": 3,
    "id": "sw-001339"
  },
  {
    "type": "word",
    "front": "lost it for good",
    "meaning": "永远丢失了",
    "example": "",
    "weight": 3,
    "id": "sw-001340"
  },
  {
    "type": "word",
    "front": "former industrial area",
    "meaning": "旧工业区",
    "example": "",
    "weight": 3,
    "id": "sw-001341"
  },
  {
    "type": "word",
    "front": "turn into a neighbourhood",
    "meaning": "转变成街区",
    "example": "",
    "weight": 3,
    "id": "sw-001342"
  },
  {
    "type": "word",
    "front": "convert a warehouse into a gallery",
    "meaning": "把仓库改造成画廊",
    "example": "",
    "weight": 3,
    "id": "sw-001343"
  },
  {
    "type": "word",
    "front": "factory shuts down",
    "meaning": "工厂关闭",
    "example": "",
    "weight": 3,
    "id": "sw-001344"
  },
  {
    "type": "word",
    "front": "industry declines",
    "meaning": "产业衰退",
    "example": "",
    "weight": 3,
    "id": "sw-001345"
  },
  {
    "type": "word",
    "front": "move production elsewhere",
    "meaning": "将生产转移别处",
    "example": "",
    "weight": 3,
    "id": "sw-001346"
  },
  {
    "type": "word",
    "front": "leave buildings behind",
    "meaning": "留下建筑",
    "example": "",
    "weight": 3,
    "id": "sw-001347"
  },
  {
    "type": "word",
    "front": "attract artists",
    "meaning": "吸引艺术家",
    "example": "",
    "weight": 3,
    "id": "sw-001348"
  },
  {
    "type": "word",
    "front": "draw in visitors",
    "meaning": "吸引游客",
    "example": "",
    "weight": 3,
    "id": "sw-001349"
  },
  {
    "type": "word",
    "front": "gain a reputation for",
    "meaning": "因……逐渐闻名",
    "example": "",
    "weight": 3,
    "id": "sw-001350"
  },
  {
    "type": "word",
    "front": "property values rise",
    "meaning": "房产价值上涨",
    "example": "",
    "weight": 3,
    "id": "sw-001351"
  },
  {
    "type": "word",
    "front": "rents start to climb",
    "meaning": "房租开始上涨",
    "example": "",
    "weight": 3,
    "id": "sw-001352"
  },
  {
    "type": "word",
    "front": "price residents out of the area",
    "meaning": "房租上涨使居民难以负担",
    "example": "",
    "weight": 3,
    "id": "sw-001353"
  },
  {
    "type": "word",
    "front": "gentrification",
    "meaning": "绅士化、中产阶层化",
    "example": "",
    "weight": 3,
    "id": "sw-001354"
  },
  {
    "type": "word",
    "front": "urban redevelopment",
    "meaning": "城市更新",
    "example": "",
    "weight": 3,
    "id": "sw-001355"
  },
  {
    "type": "word",
    "front": "affordability",
    "meaning": "可负担性",
    "example": "",
    "weight": 3,
    "id": "sw-001356"
  },
  {
    "type": "word",
    "front": "benefits and downsides",
    "meaning": "好处与负面影响",
    "example": "",
    "weight": 3,
    "id": "sw-001357"
  },
  {
    "type": "word",
    "front": "be due to depart",
    "meaning": "按计划应出发",
    "example": "",
    "weight": 3,
    "id": "sw-001358"
  },
  {
    "type": "word",
    "front": "only to find that...",
    "meaning": "结果却发现……",
    "example": "",
    "weight": 3,
    "id": "sw-001359"
  },
  {
    "type": "word",
    "front": "train was cancelled",
    "meaning": "列车被取消",
    "example": "",
    "weight": 3,
    "id": "sw-001360"
  },
  {
    "type": "word",
    "front": "service disruption",
    "meaning": "运营中断",
    "example": "",
    "weight": 3,
    "id": "sw-001361"
  },
  {
    "type": "word",
    "front": "departure board",
    "meaning": "出发信息牌",
    "example": "",
    "weight": 3,
    "id": "sw-001362"
  },
  {
    "type": "word",
    "front": "replacement bus service",
    "meaning": "铁路接驳巴士",
    "example": "",
    "weight": 3,
    "id": "sw-001363"
  },
  {
    "type": "word",
    "front": "be expected to leave",
    "meaning": "预计出发",
    "example": "",
    "weight": 3,
    "id": "sw-001364"
  },
  {
    "type": "word",
    "front": "further delays possible",
    "meaning": "可能进一步延误",
    "example": "",
    "weight": 3,
    "id": "sw-001365"
  },
  {
    "type": "word",
    "front": "ticket still valid",
    "meaning": "车票仍然有效",
    "example": "",
    "weight": 3,
    "id": "sw-001366"
  },
  {
    "type": "word",
    "front": "rebook your ticket",
    "meaning": "重新订票",
    "example": "",
    "weight": 3,
    "id": "sw-001367"
  },
  {
    "type": "word",
    "front": "change a booking",
    "meaning": "更改预订",
    "example": "",
    "weight": 3,
    "id": "sw-001368"
  },
  {
    "type": "word",
    "front": "fare difference",
    "meaning": "票价差额",
    "example": "",
    "weight": 3,
    "id": "sw-001369"
  },
  {
    "type": "word",
    "front": "additional fee",
    "meaning": "额外手续费",
    "example": "",
    "weight": 3,
    "id": "sw-001370"
  },
  {
    "type": "word",
    "front": "claim a refund",
    "meaning": "申请退款",
    "example": "",
    "weight": 3,
    "id": "sw-001371"
  },
  {
    "type": "word",
    "front": "ticket conditions",
    "meaning": "票务条款",
    "example": "",
    "weight": 3,
    "id": "sw-001372"
  },
  {
    "type": "word",
    "front": "alternative service",
    "meaning": "替代班次",
    "example": "",
    "weight": 3,
    "id": "sw-001373"
  },
  {
    "type": "word",
    "front": "run low on water",
    "meaning": "水快用完",
    "example": "",
    "weight": 3,
    "id": "sw-001374"
  },
  {
    "type": "word",
    "front": "run out of water",
    "meaning": "水已经用完",
    "example": "",
    "weight": 3,
    "id": "sw-001375"
  },
  {
    "type": "word",
    "front": "refill your bottle",
    "meaning": "重新装满水瓶",
    "example": "",
    "weight": 3,
    "id": "sw-001376"
  },
  {
    "type": "word",
    "front": "top up a bottle",
    "meaning": "补一点水",
    "example": "",
    "weight": 3,
    "id": "sw-001377"
  },
  {
    "type": "word",
    "front": "water source",
    "meaning": "水源",
    "example": "",
    "weight": 3,
    "id": "sw-001378"
  },
  {
    "type": "word",
    "front": "collect water",
    "meaning": "取水",
    "example": "",
    "weight": 3,
    "id": "sw-001379"
  },
  {
    "type": "word",
    "front": "clear water",
    "meaning": "看起来清澈的水",
    "example": "",
    "weight": 3,
    "id": "sw-001380"
  },
  {
    "type": "word",
    "front": "cloudy / murky water",
    "meaning": "浑浊的水",
    "example": "",
    "weight": 3,
    "id": "sw-001381"
  },
  {
    "type": "word",
    "front": "contamination",
    "meaning": "污染",
    "example": "",
    "weight": 3,
    "id": "sw-001382"
  },
  {
    "type": "word",
    "front": "contaminated water",
    "meaning": "受污染的水",
    "example": "",
    "weight": 3,
    "id": "sw-001383"
  },
  {
    "type": "word",
    "front": "attach / detach the filter",
    "meaning": "连接/拆下滤水器",
    "example": "",
    "weight": 3,
    "id": "sw-001384"
  },
  {
    "type": "word",
    "front": "squeeze water through a filter",
    "meaning": "挤压水通过滤芯",
    "example": "",
    "weight": 3,
    "id": "sw-001385"
  },
  {
    "type": "word",
    "front": "flow rate",
    "meaning": "流速",
    "example": "",
    "weight": 3,
    "id": "sw-001386"
  },
  {
    "type": "word",
    "front": "slow flow",
    "meaning": "水流缓慢",
    "example": "",
    "weight": 3,
    "id": "sw-001387"
  },
  {
    "type": "word",
    "front": "clogged filter",
    "meaning": "堵塞的滤芯",
    "example": "",
    "weight": 3,
    "id": "sw-001388"
  },
  {
    "type": "word",
    "front": "backflush",
    "meaning": "反向冲洗",
    "example": "",
    "weight": 3,
    "id": "sw-001389"
  },
  {
    "type": "word",
    "front": "treated / untreated water",
    "meaning": "已处理/未经处理的水",
    "example": "",
    "weight": 3,
    "id": "sw-001390"
  },
  {
    "type": "word",
    "front": "keep untreated water separate",
    "meaning": "将未经处理的水分开",
    "example": "",
    "weight": 3,
    "id": "sw-001391"
  },
  {
    "type": "word",
    "front": "prevent cross-contamination",
    "meaning": "防止交叉污染",
    "example": "",
    "weight": 3,
    "id": "sw-001392"
  },
  {
    "type": "word",
    "front": "filter / disinfect / purify",
    "meaning": "过滤/消毒/净化",
    "example": "",
    "weight": 3,
    "id": "sw-001393"
  },
  {
    "type": "word",
    "front": "halfway through cooking",
    "meaning": "做饭做到一半",
    "example": "",
    "weight": 3,
    "id": "sw-001394"
  },
  {
    "type": "word",
    "front": "run out of onions",
    "meaning": "洋葱用完",
    "example": "",
    "weight": 3,
    "id": "sw-001395"
  },
  {
    "type": "word",
    "front": "the recipe calls for",
    "meaning": "食谱需要……",
    "example": "",
    "weight": 3,
    "id": "sw-001396"
  },
  {
    "type": "word",
    "front": "improvise",
    "meaning": "随机应变",
    "example": "",
    "weight": 3,
    "id": "sw-001397"
  },
  {
    "type": "word",
    "front": "substitute A for B",
    "meaning": "用 A 代替 B",
    "example": "",
    "weight": 3,
    "id": "sw-001398"
  },
  {
    "type": "word",
    "front": "use A instead of B",
    "meaning": "用 A 而不用 B",
    "example": "",
    "weight": 3,
    "id": "sw-001399"
  },
  {
    "type": "word",
    "front": "add for extra flavour",
    "meaning": "为了增加风味而添加",
    "example": "",
    "weight": 3,
    "id": "sw-001400"
  },
  {
    "type": "word",
    "front": "a pinch of salt",
    "meaning": "一小撮盐",
    "example": "",
    "weight": 3,
    "id": "sw-001401"
  },
  {
    "type": "word",
    "front": "taste the sauce",
    "meaning": "品尝酱汁",
    "example": "",
    "weight": 3,
    "id": "sw-001402"
  },
  {
    "type": "word",
    "front": "season with salt and pepper",
    "meaning": "用盐和胡椒调味",
    "example": "",
    "weight": 3,
    "id": "sw-001403"
  },
  {
    "type": "word",
    "front": "over-season",
    "meaning": "调味过重",
    "example": "",
    "weight": 3,
    "id": "sw-001404"
  },
  {
    "type": "word",
    "front": "dilute the sauce",
    "meaning": "稀释酱汁",
    "example": "",
    "weight": 3,
    "id": "sw-001405"
  },
  {
    "type": "word",
    "front": "let it simmer",
    "meaning": "让它慢慢炖煮",
    "example": "",
    "weight": 3,
    "id": "sw-001406"
  },
  {
    "type": "word",
    "front": "turn out well",
    "meaning": "结果做得不错",
    "example": "",
    "weight": 3,
    "id": "sw-001407"
  },
  {
    "type": "word",
    "front": "fell through",
    "meaning": "计划落空",
    "example": "",
    "weight": 3,
    "id": "sw-001408"
  },
  {
    "type": "word",
    "front": "soaking wet",
    "meaning": "湿透的",
    "example": "",
    "weight": 3,
    "id": "sw-001409"
  },
  {
    "type": "word",
    "front": "sopping wet",
    "meaning": "湿得能滴水",
    "example": "",
    "weight": 3,
    "id": "sw-001410"
  },
  {
    "type": "word",
    "front": "water drips from",
    "meaning": "水从……滴下",
    "example": "",
    "weight": 3,
    "id": "sw-001411"
  },
  {
    "type": "word",
    "front": "spin cycle",
    "meaning": "脱水程序",
    "example": "",
    "weight": 3,
    "id": "sw-001412"
  },
  {
    "type": "word",
    "front": "wash / rinse cycle",
    "meaning": "洗涤/漂洗程序",
    "example": "",
    "weight": 3,
    "id": "sw-001413"
  },
  {
    "type": "word",
    "front": "overload the drum",
    "meaning": "滚筒装太满",
    "example": "",
    "weight": 3,
    "id": "sw-001414"
  },
  {
    "type": "word",
    "front": "unbalanced load",
    "meaning": "不平衡负载",
    "example": "",
    "weight": 3,
    "id": "sw-001415"
  },
  {
    "type": "word",
    "front": "out of balance",
    "meaning": "失去平衡",
    "example": "",
    "weight": 3,
    "id": "sw-001416"
  },
  {
    "type": "word",
    "front": "redistribute the clothes",
    "meaning": "重新分布衣物",
    "example": "",
    "weight": 3,
    "id": "sw-001417"
  },
  {
    "type": "word",
    "front": "the drum spins",
    "meaning": "滚筒旋转",
    "example": "",
    "weight": 3,
    "id": "sw-001418"
  },
  {
    "type": "word",
    "front": "shake out the clothes",
    "meaning": "把衣服抖开",
    "example": "",
    "weight": 3,
    "id": "sw-001419"
  },
  {
    "type": "word",
    "front": "wring out a shirt",
    "meaning": "拧干衬衫",
    "example": "",
    "weight": 3,
    "id": "sw-001420"
  },
  {
    "type": "word",
    "front": "hang clothes to dry",
    "meaning": "挂衣晾干",
    "example": "",
    "weight": 3,
    "id": "sw-001421"
  },
  {
    "type": "word",
    "front": "space clothes out",
    "meaning": "让衣物保持间隔",
    "example": "",
    "weight": 3,
    "id": "sw-001422"
  },
  {
    "type": "word",
    "front": "air-dry",
    "meaning": "自然风干",
    "example": "",
    "weight": 3,
    "id": "sw-001423"
  },
  {
    "type": "word",
    "front": "puddle on the floor",
    "meaning": "地上的一摊水",
    "example": "",
    "weight": 3,
    "id": "sw-001424"
  },
  {
    "type": "word",
    "front": "soak up water",
    "meaning": "把水吸干",
    "example": "",
    "weight": 3,
    "id": "sw-001425"
  },
  {
    "type": "word",
    "front": "desk is occupied",
    "meaning": "桌子有人使用",
    "example": "",
    "weight": 3,
    "id": "sw-001426"
  },
  {
    "type": "word",
    "front": "Is this seat taken?",
    "meaning": "座位有人吗",
    "example": "",
    "weight": 3,
    "id": "sw-001427"
  },
  {
    "type": "word",
    "front": "spot an empty chair",
    "meaning": "发现空椅子",
    "example": "",
    "weight": 3,
    "id": "sw-001428"
  },
  {
    "type": "word",
    "front": "step out",
    "meaning": "暂时出去",
    "example": "",
    "weight": 3,
    "id": "sw-001429"
  },
  {
    "type": "word",
    "front": "be back shortly",
    "meaning": "很快回来",
    "example": "",
    "weight": 3,
    "id": "sw-001430"
  },
  {
    "type": "word",
    "front": "save a seat",
    "meaning": "留座",
    "example": "",
    "weight": 3,
    "id": "sw-001431"
  },
  {
    "type": "word",
    "front": "unpack / pack up",
    "meaning": "从包里拿出/打包收拾",
    "example": "",
    "weight": 3,
    "id": "sw-001432"
  },
  {
    "type": "word",
    "front": "power outlet",
    "meaning": "电源插座",
    "example": "",
    "weight": 3,
    "id": "sw-001433"
  },
  {
    "type": "word",
    "front": "socket / plug socket",
    "meaning": "插座",
    "example": "",
    "weight": 3,
    "id": "sw-001434"
  },
  {
    "type": "word",
    "front": "too far away to reach",
    "meaning": "太远够不到",
    "example": "",
    "weight": 3,
    "id": "sw-001435"
  },
  {
    "type": "word",
    "front": "Would you mind moving...?",
    "meaning": "你介意挪一下……吗",
    "example": "",
    "weight": 3,
    "id": "sw-001436"
  },
  {
    "type": "word",
    "front": "Would you mind if I sat here?",
    "meaning": "你介意我坐这里吗",
    "example": "",
    "weight": 3,
    "id": "sw-001437"
  },
  {
    "type": "word",
    "front": "move the bag out of the way",
    "meaning": "把包移开",
    "example": "",
    "weight": 3,
    "id": "sw-001438"
  },
  {
    "type": "word",
    "front": "shift something aside",
    "meaning": "将物品挪到一边",
    "example": "",
    "weight": 3,
    "id": "sw-001439"
  },
  {
    "type": "word",
    "front": "stretch a cable across",
    "meaning": "让电线横跨",
    "example": "",
    "weight": 3,
    "id": "sw-001440"
  },
  {
    "type": "word",
    "front": "trip over a cable",
    "meaning": "被电线绊倒",
    "example": "",
    "weight": 3,
    "id": "sw-001441"
  },
  {
    "type": "word",
    "front": "pick up where I left off",
    "meaning": "从中断处继续",
    "example": "",
    "weight": 3,
    "id": "sw-001442"
  },
  {
    "type": "word",
    "front": "receive a compliment",
    "meaning": "收到赞美",
    "example": "",
    "weight": 3,
    "id": "sw-001443"
  },
  {
    "type": "word",
    "front": "constructive criticism",
    "meaning": "建设性批评",
    "example": "",
    "weight": 3,
    "id": "sw-001444"
  },
  {
    "type": "word",
    "front": "dwell on a negative comment",
    "meaning": "纠结负面评价",
    "example": "",
    "weight": 3,
    "id": "sw-001445"
  },
  {
    "type": "word",
    "front": "tendency to",
    "meaning": "……的倾向",
    "example": "",
    "weight": 3,
    "id": "sw-001446"
  },
  {
    "type": "word",
    "front": "negativity bias",
    "meaning": "负面偏向",
    "example": "",
    "weight": 3,
    "id": "sw-001447"
  },
  {
    "type": "word",
    "front": "draw someone's attention to",
    "meaning": "吸引某人注意……",
    "example": "",
    "weight": 3,
    "id": "sw-001448"
  },
  {
    "type": "word",
    "front": "stand out",
    "meaning": "显得突出",
    "example": "",
    "weight": 3,
    "id": "sw-001449"
  },
  {
    "type": "word",
    "front": "take criticism to heart",
    "meaning": "把批评放在心上",
    "example": "",
    "weight": 3,
    "id": "sw-001450"
  },
  {
    "type": "word",
    "front": "harsh remark",
    "meaning": "刻薄评价",
    "example": "",
    "weight": 3,
    "id": "sw-001451"
  },
  {
    "type": "word",
    "front": "come across as harsh",
    "meaning": "听起来很刻薄",
    "example": "",
    "weight": 3,
    "id": "sw-001452"
  },
  {
    "type": "word",
    "front": "step back",
    "meaning": "跳出当下审视",
    "example": "",
    "weight": 3,
    "id": "sw-001453"
  },
  {
    "type": "word",
    "front": "look at the bigger picture",
    "meaning": "看整体情况",
    "example": "",
    "weight": 3,
    "id": "sw-001454"
  },
  {
    "type": "word",
    "front": "put something into perspective",
    "meaning": "客观看待",
    "example": "",
    "weight": 3,
    "id": "sw-001455"
  },
  {
    "type": "word",
    "front": "weigh more heavily",
    "meaning": "影响权重更大",
    "example": "",
    "weight": 3,
    "id": "sw-001456"
  },
  {
    "type": "word",
    "front": "brush off criticism",
    "meaning": "对批评不予理会",
    "example": "",
    "weight": 3,
    "id": "sw-001457"
  },
  {
    "type": "word",
    "front": "One possible explanation is...",
    "meaning": "一个可能解释是……",
    "example": "",
    "weight": 3,
    "id": "sw-001458"
  },
  {
    "type": "word",
    "front": "This doesn't necessarily mean...",
    "meaning": "这不一定意味着……",
    "example": "",
    "weight": 3,
    "id": "sw-001459"
  },
  {
    "type": "word",
    "front": "hostel",
    "meaning": "青年旅舍",
    "example": "",
    "weight": 3,
    "id": "sw-001460"
  },
  {
    "type": "word",
    "front": "shared dorm room",
    "meaning": "多人宿舍",
    "example": "",
    "weight": 3,
    "id": "sw-001461"
  },
  {
    "type": "word",
    "front": "upper / lower bunk",
    "meaning": "上铺/下铺",
    "example": "",
    "weight": 3,
    "id": "sw-001462"
  },
  {
    "type": "word",
    "front": "bunk bed",
    "meaning": "上下铺床",
    "example": "",
    "weight": 3,
    "id": "sw-001463"
  },
  {
    "type": "word",
    "front": "be assigned a bed",
    "meaning": "被分配一个床位",
    "example": "",
    "weight": 3,
    "id": "sw-001464"
  },
  {
    "type": "word",
    "front": "belongings",
    "meaning": "个人物品",
    "example": "",
    "weight": 3,
    "id": "sw-001465"
  },
  {
    "type": "word",
    "front": "spread clothes across the bed",
    "meaning": "把衣服摊在床上",
    "example": "",
    "weight": 3,
    "id": "sw-001466"
  },
  {
    "type": "word",
    "front": "booking mix-up",
    "meaning": "预订安排错误",
    "example": "",
    "weight": 3,
    "id": "sw-001467"
  },
  {
    "type": "word",
    "front": "available bunk",
    "meaning": "空床位",
    "example": "",
    "weight": 3,
    "id": "sw-001468"
  },
  {
    "type": "word",
    "front": "fresh bedding",
    "meaning": "干净床上用品",
    "example": "",
    "weight": 3,
    "id": "sw-001469"
  },
  {
    "type": "word",
    "front": "bed linen",
    "meaning": "床单枕套等床品",
    "example": "",
    "weight": 3,
    "id": "sw-001470"
  },
  {
    "type": "word",
    "front": "storage locker",
    "meaning": "储物柜",
    "example": "",
    "weight": 3,
    "id": "sw-001471"
  },
  {
    "type": "word",
    "front": "settle in",
    "meaning": "安顿下来",
    "example": "",
    "weight": 3,
    "id": "sw-001472"
  },
  {
    "type": "word",
    "front": "quiet hours",
    "meaning": "安静时段",
    "example": "",
    "weight": 3,
    "id": "sw-001473"
  },
  {
    "type": "word",
    "front": "check in at reception",
    "meaning": "在前台办理入住",
    "example": "",
    "weight": 3,
    "id": "sw-001474"
  },
  {
    "type": "word",
    "front": "get a key card",
    "meaning": "领取房卡",
    "example": "",
    "weight": 3,
    "id": "sw-001475"
  },
  {
    "type": "word",
    "front": "make slower progress",
    "meaning": "行进进度较慢",
    "example": "",
    "weight": 3,
    "id": "sw-001476"
  },
  {
    "type": "word",
    "front": "rougher than it looked",
    "meaning": "比看起来更崎岖",
    "example": "",
    "weight": 3,
    "id": "sw-001477"
  },
  {
    "type": "word",
    "front": "short breaks add up",
    "meaning": "短休息时间累积起来",
    "example": "",
    "weight": 3,
    "id": "sw-001478"
  },
  {
    "type": "word",
    "front": "according to our plan",
    "meaning": "按照原计划",
    "example": "",
    "weight": 3,
    "id": "sw-001479"
  },
  {
    "type": "word",
    "front": "estimated time remaining",
    "meaning": "预计剩余时间",
    "example": "",
    "weight": 3,
    "id": "sw-001480"
  },
  {
    "type": "word",
    "front": "daylight left",
    "meaning": "剩余日照时间",
    "example": "",
    "weight": 3,
    "id": "sw-001481"
  },
  {
    "type": "word",
    "front": "run out of daylight",
    "meaning": "天黑前时间不够",
    "example": "",
    "weight": 3,
    "id": "sw-001482"
  },
  {
    "type": "word",
    "front": "turnaround time",
    "meaning": "预定折返时间",
    "example": "",
    "weight": 3,
    "id": "sw-001483"
  },
  {
    "type": "word",
    "front": "cut the hike short",
    "meaning": "提前结束徒步",
    "example": "",
    "weight": 3,
    "id": "sw-001484"
  },
  {
    "type": "word",
    "front": "press on / push on",
    "meaning": "克服困难继续前进",
    "example": "",
    "weight": 3,
    "id": "sw-001485"
  },
  {
    "type": "word",
    "front": "turn back",
    "meaning": "折返",
    "example": "",
    "weight": 3,
    "id": "sw-001486"
  },
  {
    "type": "word",
    "front": "factor in the descent",
    "meaning": "把下山时间考虑进去",
    "example": "",
    "weight": 3,
    "id": "sw-001487"
  },
  {
    "type": "word",
    "front": "leave a buffer",
    "meaning": "留出余量",
    "example": "",
    "weight": 3,
    "id": "sw-001488"
  },
  {
    "type": "word",
    "front": "within sight",
    "meaning": "在视野之内",
    "example": "",
    "weight": 3,
    "id": "sw-001489"
  },
  {
    "type": "word",
    "front": "steady pace",
    "meaning": "稳定步速",
    "example": "",
    "weight": 3,
    "id": "sw-001490"
  },
  {
    "type": "word",
    "front": "several short breaks added up",
    "meaning": "几个短暂停歇累积耗时",
    "example": "",
    "weight": 3,
    "id": "sw-001491"
  },
  {
    "type": "word",
    "front": "pick up some fruit",
    "meaning": "顺路买水果",
    "example": "",
    "weight": 3,
    "id": "sw-001492"
  },
  {
    "type": "word",
    "front": "ripe / unripe / overripe",
    "meaning": "成熟/未成熟/过熟",
    "example": "",
    "weight": 3,
    "id": "sw-001493"
  },
  {
    "type": "word",
    "front": "firm / soft / mushy",
    "meaning": "结实/柔软/软烂",
    "example": "",
    "weight": 3,
    "id": "sw-001494"
  },
  {
    "type": "word",
    "front": "slightly green",
    "meaning": "略微发青",
    "example": "",
    "weight": 3,
    "id": "sw-001495"
  },
  {
    "type": "word",
    "front": "fairly firm",
    "meaning": "比较结实",
    "example": "",
    "weight": 3,
    "id": "sw-001496"
  },
  {
    "type": "word",
    "front": "unusually soft",
    "meaning": "异常软",
    "example": "",
    "weight": 3,
    "id": "sw-001497"
  },
  {
    "type": "word",
    "front": "go bad / go off",
    "meaning": "食物变质",
    "example": "",
    "weight": 3,
    "id": "sw-001498"
  },
  {
    "type": "word",
    "front": "pick out",
    "meaning": "从中挑选",
    "example": "",
    "weight": 3,
    "id": "sw-001499"
  },
  {
    "type": "word",
    "front": "look fine on the outside",
    "meaning": "外表看起来没问题",
    "example": "",
    "weight": 3,
    "id": "sw-001500"
  },
  {
    "type": "word",
    "front": "press gently",
    "meaning": "轻轻按压",
    "example": "",
    "weight": 3,
    "id": "sw-001501"
  },
  {
    "type": "word",
    "front": "squeeze lightly",
    "meaning": "轻柔挤压",
    "example": "",
    "weight": 3,
    "id": "sw-001502"
  },
  {
    "type": "word",
    "front": "badly bruised",
    "meaning": "碰伤严重",
    "example": "",
    "weight": 3,
    "id": "sw-001503"
  },
  {
    "type": "word",
    "front": "patch of mould",
    "meaning": "一小片霉斑",
    "example": "",
    "weight": 3,
    "id": "sw-001504"
  },
  {
    "type": "word",
    "front": "stem",
    "meaning": "果柄",
    "example": "",
    "weight": 3,
    "id": "sw-001505"
  },
  {
    "type": "word",
    "front": "spoil quickly",
    "meaning": "快速变质",
    "example": "",
    "weight": 3,
    "id": "sw-001506"
  },
  {
    "type": "word",
    "front": "separate A from B",
    "meaning": "把 A 与 B 分开",
    "example": "",
    "weight": 3,
    "id": "sw-001507"
  },
  {
    "type": "word",
    "front": "unpack / put away",
    "meaning": "拿出/收好",
    "example": "",
    "weight": 3,
    "id": "sw-001508"
  },
  {
    "type": "word",
    "front": "keep for a few days",
    "meaning": "保存几天",
    "example": "",
    "weight": 3,
    "id": "sw-001509"
  },
  {
    "type": "word",
    "front": "barely noticeable",
    "meaning": "几乎看不出来",
    "example": "",
    "weight": 3,
    "id": "sw-001510"
  },
  {
    "type": "word",
    "front": "badly scratched",
    "meaning": "刮花得厉害",
    "example": "",
    "weight": 3,
    "id": "sw-001511"
  },
  {
    "type": "word",
    "front": "slightly scratched",
    "meaning": "轻微划伤",
    "example": "",
    "weight": 3,
    "id": "sw-001512"
  },
  {
    "type": "word",
    "front": "peel off / peel away",
    "meaning": "撕下/剥离",
    "example": "",
    "weight": 3,
    "id": "sw-001513"
  },
  {
    "type": "word",
    "front": "wipe the screen clean",
    "meaning": "把屏幕擦干净",
    "example": "",
    "weight": 3,
    "id": "sw-001514"
  },
  {
    "type": "word",
    "front": "remove dust",
    "meaning": "清除灰尘",
    "example": "",
    "weight": 3,
    "id": "sw-001515"
  },
  {
    "type": "word",
    "front": "a speck of dust",
    "meaning": "一小粒灰尘",
    "example": "",
    "weight": 3,
    "id": "sw-001516"
  },
  {
    "type": "word",
    "front": "line up with the edge",
    "meaning": "与边缘对齐",
    "example": "",
    "weight": 3,
    "id": "sw-001517"
  },
  {
    "type": "word",
    "front": "slightly crooked",
    "meaning": "稍微歪的",
    "example": "",
    "weight": 3,
    "id": "sw-001518"
  },
  {
    "type": "word",
    "front": "perfectly straight",
    "meaning": "完全笔直的",
    "example": "",
    "weight": 3,
    "id": "sw-001519"
  },
  {
    "type": "word",
    "front": "press down gently",
    "meaning": "轻轻往下按",
    "example": "",
    "weight": 3,
    "id": "sw-001520"
  },
  {
    "type": "word",
    "front": "press firmly",
    "meaning": "稳稳按压",
    "example": "",
    "weight": 3,
    "id": "sw-001521"
  },
  {
    "type": "word",
    "front": "air bubbles",
    "meaning": "气泡",
    "example": "",
    "weight": 3,
    "id": "sw-001522"
  },
  {
    "type": "word",
    "front": "trapped air",
    "meaning": "被困住的空气",
    "example": "",
    "weight": 3,
    "id": "sw-001523"
  },
  {
    "type": "word",
    "front": "push toward the edge",
    "meaning": "向边缘推",
    "example": "",
    "weight": 3,
    "id": "sw-001524"
  },
  {
    "type": "word",
    "front": "won't budge",
    "meaning": "纹丝不动",
    "example": "",
    "weight": 3,
    "id": "sw-001525"
  },
  {
    "type": "word",
    "front": "lift the corner",
    "meaning": "掀起一角",
    "example": "",
    "weight": 3,
    "id": "sw-001526"
  },
  {
    "type": "word",
    "front": "lower it back",
    "meaning": "再放下来",
    "example": "",
    "weight": 3,
    "id": "sw-001527"
  },
  {
    "type": "word",
    "front": "smooth out bubbles",
    "meaning": "抚平气泡",
    "example": "",
    "weight": 3,
    "id": "sw-001528"
  },
  {
    "type": "word",
    "front": "stick evenly",
    "meaning": "均匀贴合",
    "example": "",
    "weight": 3,
    "id": "sw-001529"
  },
  {
    "type": "word",
    "front": "barely noticeable",
    "meaning": "几乎看不见",
    "example": "",
    "weight": 3,
    "id": "sw-001530"
  },
  {
    "type": "word",
    "front": "out of order",
    "meaning": "故障不能用",
    "example": "",
    "weight": 3,
    "id": "sw-001531"
  },
  {
    "type": "word",
    "front": "out of service",
    "meaning": "暂停使用",
    "example": "",
    "weight": 3,
    "id": "sw-001532"
  },
  {
    "type": "word",
    "front": "have no choice but to",
    "meaning": "别无选择只能……",
    "example": "",
    "weight": 3,
    "id": "sw-001533"
  },
  {
    "type": "word",
    "front": "a flight of stairs",
    "meaning": "一段连续楼梯",
    "example": "",
    "weight": 3,
    "id": "sw-001534"
  },
  {
    "type": "word",
    "front": "bulky suitcase",
    "meaning": "笨重的大行李箱",
    "example": "",
    "weight": 3,
    "id": "sw-001535"
  },
  {
    "type": "word",
    "front": "awkward to carry",
    "meaning": "不好搬运",
    "example": "",
    "weight": 3,
    "id": "sw-001536"
  },
  {
    "type": "word",
    "front": "lug / haul / carry",
    "meaning": "费劲搬/拖搬/一般搬",
    "example": "",
    "weight": 3,
    "id": "sw-001537"
  },
  {
    "type": "word",
    "front": "tilt slightly",
    "meaning": "轻微倾斜",
    "example": "",
    "weight": 3,
    "id": "sw-001538"
  },
  {
    "type": "word",
    "front": "narrow corner",
    "meaning": "狭窄拐角",
    "example": "",
    "weight": 3,
    "id": "sw-001539"
  },
  {
    "type": "word",
    "front": "manoeuvre around",
    "meaning": "调整角度绕过",
    "example": "",
    "weight": 3,
    "id": "sw-001540"
  },
  {
    "type": "word",
    "front": "halfway up",
    "meaning": "上到一半",
    "example": "",
    "weight": 3,
    "id": "sw-001541"
  },
  {
    "type": "word",
    "front": "arms start aching",
    "meaning": "手臂开始酸痛",
    "example": "",
    "weight": 3,
    "id": "sw-001542"
  },
  {
    "type": "word",
    "front": "absolutely exhausted",
    "meaning": "筋疲力尽",
    "example": "",
    "weight": 3,
    "id": "sw-001543"
  },
  {
    "type": "word",
    "front": "catch your breath",
    "meaning": "喘口气",
    "example": "",
    "weight": 3,
    "id": "sw-001544"
  },
  {
    "type": "word",
    "front": "landing",
    "meaning": "楼梯平台",
    "example": "",
    "weight": 3,
    "id": "sw-001545"
  },
  {
    "type": "word",
    "front": "switch hands",
    "meaning": "换手",
    "example": "",
    "weight": 3,
    "id": "sw-001546"
  },
  {
    "type": "word",
    "front": "shift your grip",
    "meaning": "调整抓握方式",
    "example": "",
    "weight": 3,
    "id": "sw-001547"
  },
  {
    "type": "word",
    "front": "set down carefully",
    "meaning": "小心放下",
    "example": "",
    "weight": 3,
    "id": "sw-001548"
  },
  {
    "type": "word",
    "front": "lean against the wall",
    "meaning": "靠在墙上",
    "example": "",
    "weight": 3,
    "id": "sw-001549"
  },
  {
    "type": "word",
    "front": "recover",
    "meaning": "缓过来",
    "example": "",
    "weight": 3,
    "id": "sw-001550"
  },
  {
    "type": "word",
    "front": "give someone a hand",
    "meaning": "帮某人一把",
    "example": "",
    "weight": 3,
    "id": "sw-001551"
  },
  {
    "type": "word",
    "front": "encourage someone to",
    "meaning": "鼓励某人做……",
    "example": "",
    "weight": 3,
    "id": "sw-001552"
  },
  {
    "type": "word",
    "front": "sign up for a subscription",
    "meaning": "注册订阅",
    "example": "",
    "weight": 3,
    "id": "sw-001553"
  },
  {
    "type": "word",
    "front": "offer A in exchange for B",
    "meaning": "提供 A 换取 B",
    "example": "",
    "weight": 3,
    "id": "sw-001554"
  },
  {
    "type": "word",
    "front": "recurring fee",
    "meaning": "定期收取的费用",
    "example": "",
    "weight": 3,
    "id": "sw-001555"
  },
  {
    "type": "word",
    "front": "one-off payment",
    "meaning": "一次性付款",
    "example": "",
    "weight": 3,
    "id": "sw-001556"
  },
  {
    "type": "word",
    "front": "exclusive perks",
    "meaning": "专属福利",
    "example": "",
    "weight": 3,
    "id": "sw-001557"
  },
  {
    "type": "word",
    "front": "steady stream of revenue",
    "meaning": "持续稳定的收入",
    "example": "",
    "weight": 3,
    "id": "sw-001558"
  },
  {
    "type": "word",
    "front": "repeat purchases",
    "meaning": "重复购买",
    "example": "",
    "weight": 3,
    "id": "sw-001559"
  },
  {
    "type": "word",
    "front": "loyal customers",
    "meaning": "忠实顾客",
    "example": "",
    "weight": 3,
    "id": "sw-001560"
  },
  {
    "type": "word",
    "front": "regularly / repeatedly",
    "meaning": "定期地/反复地",
    "example": "",
    "weight": 3,
    "id": "sw-001561"
  },
  {
    "type": "word",
    "front": "worthwhile / worth it",
    "meaning": "值得的/值得",
    "example": "",
    "weight": 3,
    "id": "sw-001562"
  },
  {
    "type": "word",
    "front": "there's a catch",
    "meaning": "不过有个问题",
    "example": "",
    "weight": 3,
    "id": "sw-001563"
  },
  {
    "type": "word",
    "front": "barely use a service",
    "meaning": "几乎不用一项服务",
    "example": "",
    "weight": 3,
    "id": "sw-001564"
  },
  {
    "type": "word",
    "front": "hardly ever",
    "meaning": "几乎从不",
    "example": "",
    "weight": 3,
    "id": "sw-001565"
  },
  {
    "type": "word",
    "front": "end up paying",
    "meaning": "结果却付费",
    "example": "",
    "weight": 3,
    "id": "sw-001566"
  },
  {
    "type": "word",
    "front": "add up over time",
    "meaning": "长期累积",
    "example": "",
    "weight": 3,
    "id": "sw-001567"
  },
  {
    "type": "word",
    "front": "renew automatically",
    "meaning": "自动续费",
    "example": "",
    "weight": 3,
    "id": "sw-001568"
  },
  {
    "type": "word",
    "front": "auto-renewal",
    "meaning": "自动续费设置",
    "example": "",
    "weight": 3,
    "id": "sw-001569"
  },
  {
    "type": "word",
    "front": "get value from",
    "meaning": "获得价值",
    "example": "",
    "weight": 3,
    "id": "sw-001570"
  },
  {
    "type": "word",
    "front": "make the most of",
    "meaning": "充分利用",
    "example": "",
    "weight": 3,
    "id": "sw-001571"
  },
  {
    "type": "word",
    "front": "genuinely worthwhile",
    "meaning": "确实值得的",
    "example": "",
    "weight": 3,
    "id": "sw-001572"
  },
  {
    "type": "word",
    "front": "shortly after opening",
    "meaning": "开门后不久",
    "example": "",
    "weight": 3,
    "id": "sw-001573"
  },
  {
    "type": "word",
    "front": "expect to buy tickets",
    "meaning": "以为能够买票",
    "example": "",
    "weight": 3,
    "id": "sw-001574"
  },
  {
    "type": "word",
    "front": "to my surprise",
    "meaning": "令我意外的是",
    "example": "",
    "weight": 3,
    "id": "sw-001575"
  },
  {
    "type": "word",
    "front": "timed entry",
    "meaning": "预约时段入场",
    "example": "",
    "weight": 3,
    "id": "sw-001576"
  },
  {
    "type": "word",
    "front": "time slot",
    "meaning": "预定时段",
    "example": "",
    "weight": 3,
    "id": "sw-001577"
  },
  {
    "type": "word",
    "front": "book in advance",
    "meaning": "提前预约",
    "example": "",
    "weight": 3,
    "id": "sw-001578"
  },
  {
    "type": "word",
    "front": "book ahead",
    "meaning": "提前预订",
    "example": "",
    "weight": 3,
    "id": "sw-001579"
  },
  {
    "type": "word",
    "front": "fully booked",
    "meaning": "预订满",
    "example": "",
    "weight": 3,
    "id": "sw-001580"
  },
  {
    "type": "word",
    "front": "sold out",
    "meaning": "售罄",
    "example": "",
    "weight": 3,
    "id": "sw-001581"
  },
  {
    "type": "word",
    "front": "earliest available slot",
    "meaning": "最早的可约时段",
    "example": "",
    "weight": 3,
    "id": "sw-001582"
  },
  {
    "type": "word",
    "front": "leave someone with less time",
    "meaning": "使某人剩余时间变少",
    "example": "",
    "weight": 3,
    "id": "sw-001583"
  },
  {
    "type": "word",
    "front": "an earlier slot opens up",
    "meaning": "更早的名额空出来",
    "example": "",
    "weight": 3,
    "id": "sw-001584"
  },
  {
    "type": "word",
    "front": "cancellation",
    "meaning": "取消预约",
    "example": "",
    "weight": 3,
    "id": "sw-001585"
  },
  {
    "type": "word",
    "front": "can't guarantee anything",
    "meaning": "不能保证",
    "example": "",
    "weight": 3,
    "id": "sw-001586"
  },
  {
    "type": "word",
    "front": "wait around",
    "meaning": "干等",
    "example": "",
    "weight": 3,
    "id": "sw-001587"
  },
  {
    "type": "word",
    "front": "in the meantime",
    "meaning": "在此期间",
    "example": "",
    "weight": 3,
    "id": "sw-001588"
  },
  {
    "type": "word",
    "front": "might open up",
    "meaning": "可能释放名额",
    "example": "",
    "weight": 3,
    "id": "sw-001589"
  },
  {
    "type": "word",
    "front": "late in the afternoon",
    "meaning": "下午较晚的时候",
    "example": "",
    "weight": 3,
    "id": "sw-001590"
  },
  {
    "type": "word",
    "front": "fog rolls in",
    "meaning": "雾涌来",
    "example": "",
    "weight": 3,
    "id": "sw-001591"
  },
  {
    "type": "word",
    "front": "thick / dense fog",
    "meaning": "浓雾",
    "example": "",
    "weight": 3,
    "id": "sw-001592"
  },
  {
    "type": "word",
    "front": "patchy fog",
    "meaning": "局部零散分布的雾",
    "example": "",
    "weight": 3,
    "id": "sw-001593"
  },
  {
    "type": "word",
    "front": "make out a trail marker",
    "meaning": "勉强辨认路标",
    "example": "",
    "weight": 3,
    "id": "sw-001594"
  },
  {
    "type": "word",
    "front": "visibility drops sharply",
    "meaning": "能见度急剧下降",
    "example": "",
    "weight": 3,
    "id": "sw-001595"
  },
  {
    "type": "word",
    "front": "visibility improves gradually",
    "meaning": "能见度逐渐改善",
    "example": "",
    "weight": 3,
    "id": "sw-001596"
  },
  {
    "type": "word",
    "front": "come into view",
    "meaning": "进入视野",
    "example": "",
    "weight": 3,
    "id": "sw-001597"
  },
  {
    "type": "word",
    "front": "increasingly difficult",
    "meaning": "越来越困难",
    "example": "",
    "weight": 3,
    "id": "sw-001598"
  },
  {
    "type": "word",
    "front": "follow / lose the trail",
    "meaning": "沿路线/失去路线",
    "example": "",
    "weight": 3,
    "id": "sw-001599"
  },
  {
    "type": "word",
    "front": "stay close together",
    "meaning": "保持队伍靠近",
    "example": "",
    "weight": 3,
    "id": "sw-001600"
  },
  {
    "type": "word",
    "front": "don't spread out",
    "meaning": "不要分散",
    "example": "",
    "weight": 3,
    "id": "sw-001601"
  },
  {
    "type": "word",
    "front": "review our options",
    "meaning": "重新考虑选择",
    "example": "",
    "weight": 3,
    "id": "sw-001602"
  },
  {
    "type": "word",
    "front": "wind picks up",
    "meaning": "风增强",
    "example": "",
    "weight": 3,
    "id": "sw-001603"
  },
  {
    "type": "word",
    "front": "look almost identical",
    "meaning": "看起来几乎一样",
    "example": "",
    "weight": 3,
    "id": "sw-001604"
  },
  {
    "type": "word",
    "front": "last confirmed position",
    "meaning": "最后一个确认过的位置",
    "example": "",
    "weight": 3,
    "id": "sw-001605"
  },
  {
    "type": "word",
    "front": "veer off the trail",
    "meaning": "偏离路线",
    "example": "",
    "weight": 3,
    "id": "sw-001606"
  },
  {
    "type": "word",
    "front": "blindly press on",
    "meaning": "盲目向前",
    "example": "",
    "weight": 3,
    "id": "sw-001607"
  },
  {
    "type": "word",
    "front": "move cautiously",
    "meaning": "谨慎移动",
    "example": "",
    "weight": 3,
    "id": "sw-001608"
  },
  {
    "type": "word",
    "front": "reliably follow a route",
    "meaning": "可靠地沿路线前进",
    "example": "",
    "weight": 3,
    "id": "sw-001609"
  },
  {
    "type": "word",
    "front": "flicker",
    "meaning": "闪烁、忽明忽暗",
    "example": "The lights are flickering.",
    "weight": 3,
    "id": "sw-001610"
  },
  {
    "type": "word",
    "front": "go out / go dark",
    "meaning": "熄灭／变黑",
    "example": "The lights went out and the room went dark.",
    "weight": 3,
    "id": "sw-001611"
  },
  {
    "type": "word",
    "front": "power outage / power is out",
    "meaning": "停电／正在停电",
    "example": "There's been a power outage.",
    "weight": 3,
    "id": "sw-001612"
  },
  {
    "type": "word",
    "front": "lose power",
    "meaning": "断电、失去供电",
    "example": "The whole floor lost power.",
    "weight": 3,
    "id": "sw-001613"
  },
  {
    "type": "word",
    "front": "circuit breaker / trip",
    "meaning": "断路器／跳闸",
    "example": "The circuit breaker tripped.",
    "weight": 3,
    "id": "sw-001614"
  },
  {
    "type": "word",
    "front": "electrical panel / fuse box",
    "meaning": "配电箱／保险丝盒",
    "example": "The caretaker checked the electrical panel.",
    "weight": 3,
    "id": "sw-001615"
  },
  {
    "type": "word",
    "front": "reset the breaker",
    "meaning": "复位断路器",
    "example": "He reset the breaker.",
    "weight": 3,
    "id": "sw-001616"
  },
  {
    "type": "word",
    "front": "come back on",
    "meaning": "重新亮起、恢复运作",
    "example": "The power finally came back on.",
    "weight": 3,
    "id": "sw-001617"
  },
  {
    "type": "word",
    "front": "battery left",
    "meaning": "剩余电量",
    "example": "I've still got 20% battery left.",
    "weight": 3,
    "id": "sw-001618"
  },
  {
    "type": "word",
    "front": "run low / battery dies",
    "meaning": "电量不足／没电",
    "example": "My phone battery is running low.",
    "weight": 3,
    "id": "sw-001619"
  },
  {
    "type": "word",
    "front": "go through security",
    "meaning": "通过安检",
    "example": "I need to go through security.",
    "weight": 3,
    "id": "sw-001620"
  },
  {
    "type": "word",
    "front": "empty your pockets",
    "meaning": "掏空口袋",
    "example": "Please empty your pockets.",
    "weight": 3,
    "id": "sw-001621"
  },
  {
    "type": "word",
    "front": "belongings",
    "meaning": "个人／随身物品",
    "example": "Keep an eye on your belongings.",
    "weight": 3,
    "id": "sw-001622"
  },
  {
    "type": "word",
    "front": "tray / security tray",
    "meaning": "托盘／安检托盘",
    "example": "Put your keys in the tray.",
    "weight": 3,
    "id": "sw-001623"
  },
  {
    "type": "word",
    "front": "scanner / metal detector",
    "meaning": "扫描仪／金属探测器",
    "example": "The metal detector beeped.",
    "weight": 3,
    "id": "sw-001624"
  },
  {
    "type": "word",
    "front": "beep",
    "meaning": "发出哔声",
    "example": "My phone beeped during the inspection.",
    "weight": 3,
    "id": "sw-001625"
  },
  {
    "type": "word",
    "front": "step aside / pull aside",
    "meaning": "站到一旁／单独移到旁边",
    "example": "My bag was pulled aside for a check.",
    "weight": 3,
    "id": "sw-001626"
  },
  {
    "type": "word",
    "front": "additional check / inspection",
    "meaning": "额外检查／正式检查",
    "example": "The bag needed an additional inspection.",
    "weight": 3,
    "id": "sw-001627"
  },
  {
    "type": "word",
    "front": "gather your belongings",
    "meaning": "收好随身物品",
    "example": "I gathered my belongings after security.",
    "weight": 3,
    "id": "sw-001628"
  },
  {
    "type": "word",
    "front": "repack / rearrange",
    "meaning": "重新打包／调整摆放",
    "example": "I had to repack my bag.",
    "weight": 3,
    "id": "sw-001629"
  },
  {
    "type": "word",
    "front": "schedule",
    "meaning": "两名徒步者正在掉队。",
    "example": "I had to repack my bag.",
    "weight": 3,
    "id": "sw-001630"
  },
  {
    "type": "word",
    "front": "pick up the pace",
    "meaning": "加快步速",
    "example": "The front group picked up the pace.",
    "weight": 3,
    "id": "sw-001631"
  },
  {
    "type": "word",
    "front": "down",
    "meaning": "我们放慢一点，保持稳定速度。",
    "example": "The front group picked up the pace.",
    "weight": 3,
    "id": "sw-001632"
  },
  {
    "type": "word",
    "front": "gap gets wider / close the gap",
    "meaning": "差距拉大／缩小差距",
    "example": "The gap between us was getting wider.",
    "weight": 3,
    "id": "sw-001633"
  },
  {
    "type": "word",
    "front": "call out to someone",
    "meaning": "向某人大声喊话",
    "example": "I called out to the hikers up front.",
    "weight": 3,
    "id": "sw-001634"
  },
  {
    "type": "word",
    "front": "wait up",
    "meaning": "等后面的人",
    "example": "Could you wait up for us?",
    "weight": 3,
    "id": "sw-001635"
  },
  {
    "type": "word",
    "front": "catch up with",
    "meaning": "追上、赶上",
    "example": "Let's stop so they can catch up.",
    "weight": 3,
    "id": "sw-001636"
  },
  {
    "type": "word",
    "front": "check on someone",
    "meaning": "查看某人情况",
    "example": "I went back to check on them.",
    "weight": 3,
    "id": "sw-001637"
  },
  {
    "type": "word",
    "front": "struggle with / be struggling",
    "meaning": "应对吃力",
    "example": "He's struggling with the steep climb.",
    "weight": 3,
    "id": "sw-001638"
  },
  {
    "type": "word",
    "front": "keep the group together",
    "meaning": "保持队伍完整",
    "example": "We need to keep the group together.",
    "weight": 3,
    "id": "sw-001639"
  },
  {
    "type": "word",
    "front": "bring up the rear",
    "meaning": "走队尾、压队",
    "example": "I'll bring up the rear.",
    "weight": 3,
    "id": "sw-001640"
  },
  {
    "type": "word",
    "front": "break up / you're breaking up",
    "meaning": "声音断断续续",
    "example": "Your voice is breaking up.",
    "weight": 3,
    "id": "sw-001641"
  },
  {
    "type": "word",
    "front": "catch every other word",
    "meaning": "只能断续听见部分词",
    "example": "I could only catch every other word.",
    "weight": 3,
    "id": "sw-001642"
  },
  {
    "type": "word",
    "front": "I didn't catch that",
    "meaning": "刚才没听清",
    "example": "Sorry, I didn't catch the last part.",
    "weight": 3,
    "id": "sw-001643"
  },
  {
    "type": "word",
    "front": "cut out / keep cutting out",
    "meaning": "信号、声音时断时续",
    "example": "The audio keeps cutting out.",
    "weight": 3,
    "id": "sw-001644"
  },
  {
    "type": "word",
    "front": "disconnected",
    "meaning": "电话突然掉线了。",
    "example": "The audio keeps cutting out.",
    "weight": 3,
    "id": "sw-001645"
  },
  {
    "type": "word",
    "front": "call someone back",
    "meaning": "回拨电话",
    "example": "I'll call you back in a minute.",
    "weight": 3,
    "id": "sw-001646"
  },
  {
    "type": "word",
    "front": "get through / can't get through",
    "meaning": "电话接通／打不通",
    "example": "I couldn't get through.",
    "weight": 3,
    "id": "sw-001647"
  },
  {
    "type": "word",
    "front": "reception / signal",
    "meaning": "信号接收情况／信号",
    "example": "I've got terrible reception here.",
    "weight": 3,
    "id": "sw-001648"
  },
  {
    "type": "word",
    "front": "background noise",
    "meaning": "背景噪音",
    "example": "There's too much background noise.",
    "weight": 3,
    "id": "sw-001649"
  },
  {
    "type": "word",
    "front": "move somewhere quieter",
    "meaning": "换个更安静的地方",
    "example": "Could you move somewhere quieter?",
    "weight": 3,
    "id": "sw-001650"
  },
  {
    "type": "word",
    "front": "notification / pop up",
    "meaning": "通知／弹出",
    "example": "A notification popped up on my phone.",
    "weight": 3,
    "id": "sw-001651"
  },
  {
    "type": "word",
    "front": "ready for pickup",
    "meaning": "可以领取、可以取货",
    "example": "Your parcel is ready for pickup.",
    "weight": 3,
    "id": "sw-001652"
  },
  {
    "type": "word",
    "front": "parcel locker",
    "meaning": "快递自提柜",
    "example": "I picked it up from a parcel locker.",
    "weight": 3,
    "id": "sw-001653"
  },
  {
    "type": "word",
    "front": "scan a QR code",
    "meaning": "扫描二维码",
    "example": "Scan the QR code to open the locker.",
    "weight": 3,
    "id": "sw-001654"
  },
  {
    "type": "word",
    "front": "enter manually",
    "meaning": "手动输入",
    "example": "Enter the pickup code manually.",
    "weight": 3,
    "id": "sw-001655"
  },
  {
    "type": "word",
    "front": "compartment",
    "meaning": "隔间、储物格",
    "example": "One compartment popped open.",
    "weight": 3,
    "id": "sw-001656"
  },
  {
    "type": "word",
    "front": "pop open",
    "meaning": "突然弹开",
    "example": "The door popped open.",
    "weight": 3,
    "id": "sw-001657"
  },
  {
    "type": "word",
    "front": "wedged tightly / get wedged",
    "meaning": "紧紧卡在狭窄空间",
    "example": "The package was wedged inside.",
    "weight": 3,
    "id": "sw-001658"
  },
  {
    "type": "word",
    "front": "click into place",
    "meaning": "咔哒一声卡到位",
    "example": "Push until it clicks into place.",
    "weight": 3,
    "id": "sw-001659"
  },
  {
    "type": "word",
    "front": "terrain",
    "meaning": "这条山脊很暴露。",
    "example": "Push until it clicks into place.",
    "weight": 3,
    "id": "sw-001660"
  },
  {
    "type": "word",
    "front": "gust / gusty",
    "meaning": "阵风／阵风明显的",
    "example": "A strong gust hit me from the side.",
    "weight": 3,
    "id": "sw-001661"
  },
  {
    "type": "word",
    "front": "whip around / whip against",
    "meaning": "猛烈甩动／抽打",
    "example": "The loose strap was whipping against my arm.",
    "weight": 3,
    "id": "sw-001662"
  },
  {
    "type": "word",
    "front": "stagger / stagger sideways",
    "meaning": "踉跄／向侧面踉跄",
    "example": "The gust made me stagger.",
    "weight": 3,
    "id": "sw-001663"
  },
  {
    "type": "word",
    "front": "brace yourself / brace against",
    "meaning": "稳住身体／靠着稳住",
    "example": "I braced myself against a rock.",
    "weight": 3,
    "id": "sw-001664"
  },
  {
    "type": "word",
    "front": "howl / wind howls",
    "meaning": "呼啸",
    "example": "The wind was howling.",
    "weight": 3,
    "id": "sw-001665"
  },
  {
    "type": "word",
    "front": "a brief lull",
    "meaning": "短暂平静、短暂减弱",
    "example": "We waited for a lull in the wind.",
    "weight": 3,
    "id": "sw-001666"
  },
  {
    "type": "word",
    "front": "sheltered terrain / spot",
    "meaning": "避风地形／位置",
    "example": "We moved toward a sheltered spot.",
    "weight": 3,
    "id": "sw-001667"
  },
  {
    "type": "word",
    "front": "reassess the conditions",
    "meaning": "重新评估条件",
    "example": "Let's reassess the conditions.",
    "weight": 3,
    "id": "sw-001668"
  },
  {
    "type": "word",
    "front": "turn back / push on",
    "meaning": "折返／继续前进",
    "example": "We decided to turn back rather than push on.",
    "weight": 3,
    "id": "sw-001669"
  },
  {
    "type": "word",
    "front": "step out of / step outside",
    "meaning": "从某处走出去／出门",
    "example": "I stepped out of my apartment.",
    "weight": 3,
    "id": "sw-001670"
  },
  {
    "type": "word",
    "front": "blow shut",
    "meaning": "被风吹关",
    "example": "A gust blew the door shut.",
    "weight": 3,
    "id": "sw-001671"
  },
  {
    "type": "word",
    "front": "slam shut",
    "meaning": "砰的一声关上",
    "example": "The door slammed shut behind me.",
    "weight": 3,
    "id": "sw-001672"
  },
  {
    "type": "word",
    "front": "out",
    "meaning": "我被锁在公寓外面了。",
    "example": "The door slammed shut behind me.",
    "weight": 3,
    "id": "sw-001673"
  },
  {
    "type": "word",
    "front": "reach into",
    "meaning": "把手伸进",
    "example": "I reached into my pocket.",
    "weight": 3,
    "id": "sw-001674"
  },
  {
    "type": "word",
    "front": "leave something behind",
    "meaning": "将东西遗忘在原处",
    "example": "I left my keys behind.",
    "weight": 3,
    "id": "sw-001675"
  },
  {
    "type": "word",
    "front": "spare key / spare battery",
    "meaning": "备用钥匙／电池",
    "example": "Do you have a spare key?",
    "weight": 3,
    "id": "sw-001676"
  },
  {
    "type": "word",
    "front": "locksmith",
    "meaning": "锁匠、开锁师傅",
    "example": "I might need to call a locksmith.",
    "weight": 3,
    "id": "sw-001677"
  },
  {
    "type": "word",
    "front": "in",
    "meaning": "能回来给我开门吗？",
    "example": "I might need to call a locksmith.",
    "weight": 3,
    "id": "sw-001678"
  },
  {
    "type": "word",
    "front": "get a haircut",
    "meaning": "去理发、让别人剪头发",
    "example": "I need to get a haircut.",
    "weight": 3,
    "id": "sw-001679"
  },
  {
    "type": "word",
    "front": "take a little off (the top)",
    "meaning": "稍微剪短一点",
    "example": "Just take a little off the top.",
    "weight": 3,
    "id": "sw-001680"
  },
  {
    "type": "word",
    "front": "trim the sides / trim the beard",
    "meaning": "修两侧／修胡子",
    "example": "Could you trim the sides?",
    "weight": 3,
    "id": "sw-001681"
  },
  {
    "type": "word",
    "front": "comb through",
    "meaning": "用梳子梳开",
    "example": "He combed through my hair.",
    "weight": 3,
    "id": "sw-001682"
  },
  {
    "type": "word",
    "front": "spray water on/onto",
    "meaning": "往……喷洒水",
    "example": "She sprayed water onto my hair.",
    "weight": 3,
    "id": "sw-001683"
  },
  {
    "type": "word",
    "front": "snip / snip off the ends",
    "meaning": "轻快地剪／剪掉发梢",
    "example": "He snipped off the ends.",
    "weight": 3,
    "id": "sw-001684"
  },
  {
    "type": "word",
    "front": "blow-dry / air-dry",
    "meaning": "吹风机吹干／自然晾干",
    "example": "I usually blow-dry my hair.",
    "weight": 3,
    "id": "sw-001685"
  },
  {
    "type": "word",
    "front": "even out",
    "meaning": "修整均匀",
    "example": "Could you even it out a little?",
    "weight": 3,
    "id": "sw-001686"
  },
  {
    "type": "word",
    "front": "tidy up the edges",
    "meaning": "把边缘修整齐",
    "example": "Please tidy up the edges.",
    "weight": 3,
    "id": "sw-001687"
  },
  {
    "type": "word",
    "front": "length",
    "meaning": "我想保留一点长度。",
    "example": "Please tidy up the edges.",
    "weight": 3,
    "id": "sw-001688"
  },
  {
    "type": "word",
    "front": "clouds build up / roll in",
    "meaning": "乌云积聚发展／从远处飘来",
    "example": "Dark clouds were building up.",
    "weight": 3,
    "id": "sw-001689"
  },
  {
    "type": "word",
    "front": "rumble / thunder rumbles",
    "meaning": "低沉隆隆声／雷声隆隆",
    "example": "Thunder rumbled in the distance.",
    "weight": 3,
    "id": "sw-001690"
  },
  {
    "type": "word",
    "front": "lightning flashes",
    "meaning": "闪电划过",
    "example": "Lightning flashed across the sky.",
    "weight": 3,
    "id": "sw-001691"
  },
  {
    "type": "word",
    "front": "a crack of thunder",
    "meaning": "一声炸雷",
    "example": "There was a loud crack of thunder.",
    "weight": 3,
    "id": "sw-001692"
  },
  {
    "type": "word",
    "front": "pelt down / pour",
    "meaning": "猛烈砸落／倾盆大雨",
    "example": "The rain was pelting down.",
    "weight": 3,
    "id": "sw-001693"
  },
  {
    "type": "word",
    "front": "drenched / soaked",
    "meaning": "淋透／湿透",
    "example": "We got completely drenched.",
    "weight": 3,
    "id": "sw-001694"
  },
  {
    "type": "word",
    "front": "closer",
    "meaning": "雷暴正在靠近。",
    "example": "We got completely drenched.",
    "weight": 3,
    "id": "sw-001695"
  },
  {
    "type": "word",
    "front": "abandon the plan / route",
    "meaning": "放弃计划／路线",
    "example": "We abandoned the planned crossing.",
    "weight": 3,
    "id": "sw-001696"
  },
  {
    "type": "word",
    "front": "less exposed terrain",
    "meaning": "暴露程度更小的地形",
    "example": "We headed toward less exposed terrain.",
    "weight": 3,
    "id": "sw-001697"
  },
  {
    "type": "word",
    "front": "reassess the situation",
    "meaning": "重新评估情况",
    "example": "Let's stop and reassess the situation.",
    "weight": 3,
    "id": "sw-001698"
  },
  {
    "type": "word",
    "front": "thump / bass is thumping",
    "meaning": "沉重咚咚声／低音震动",
    "example": "The bass was thumping through the wall.",
    "weight": 3,
    "id": "sw-001699"
  },
  {
    "type": "word",
    "front": "sound carries through",
    "meaning": "声音传播、穿透",
    "example": "Sound carries through thin walls.",
    "weight": 3,
    "id": "sw-001700"
  },
  {
    "type": "word",
    "front": "someone up",
    "meaning": "噪音让我无法入睡。",
    "example": "Sound carries through thin walls.",
    "weight": 3,
    "id": "sw-001701"
  },
  {
    "type": "word",
    "front": "earplugs / earbuds /",
    "meaning": "隔音耳塞／入耳耳机／头戴耳                  I put in my earplugs.",
    "example": "Sound carries through thin walls.",
    "weight": 3,
    "id": "sw-001702"
  },
  {
    "type": "word",
    "front": "knock on the door",
    "meaning": "敲门",
    "example": "I knocked on the neighbor's door.",
    "weight": 3,
    "id": "sw-001703"
  },
  {
    "type": "word",
    "front": "keep it down",
    "meaning": "小声些、安静些",
    "example": "Could you keep it down a little?",
    "weight": 3,
    "id": "sw-001704"
  },
  {
    "type": "word",
    "front": "turn the music down",
    "meaning": "调低音乐音量",
    "example": "Could you turn the music down?",
    "weight": 3,
    "id": "sw-001705"
  },
  {
    "type": "word",
    "front": "quiet down",
    "meaning": "逐渐安静",
    "example": "Things finally quieted down.",
    "weight": 3,
    "id": "sw-001706"
  },
  {
    "type": "word",
    "front": "go on for hours",
    "meaning": "持续几个小时",
    "example": "The noise went on for hours.",
    "weight": 3,
    "id": "sw-001707"
  },
  {
    "type": "word",
    "front": "work something out",
    "meaning": "商量解决办法",
    "example": "We managed to work something out.",
    "weight": 3,
    "id": "sw-001708"
  },
  {
    "type": "word",
    "front": "appreciate it",
    "meaning": "不好意思打扰了，那就太感谢了。",
    "example": "We managed to work something out.",
    "weight": 3,
    "id": "sw-001709"
  },
  {
    "type": "word",
    "front": "loudspeaker",
    "meaning": "扬声器里传来广播。",
    "example": "We managed to work something out.",
    "weight": 3,
    "id": "sw-001710"
  },
  {
    "type": "word",
    "front": "muffled",
    "meaning": "声音闷而含混",
    "example": "The announcement sounded muffled.",
    "weight": 3,
    "id": "sw-001711"
  },
  {
    "type": "word",
    "front": "cutting out",
    "meaning": "声音闷且不时中断。",
    "example": "The announcement sounded muffled.",
    "weight": 3,
    "id": "sw-001712"
  },
  {
    "type": "word",
    "front": "make out",
    "meaning": "勉强听清或辨认",
    "example": "I couldn't make out the announcement.",
    "weight": 3,
    "id": "sw-001713"
  },
  {
    "type": "word",
    "front": "catch something about",
    "meaning": "隐约听到关于……的消息",
    "example": "I caught something about a delay.",
    "weight": 3,
    "id": "sw-001714"
  },
  {
    "type": "word",
    "front": "departure board / arrival board",
    "meaning": "出发信息屏／到达信息屏",
    "example": "Check the departure board.",
    "weight": 3,
    "id": "sw-001715"
  },
  {
    "type": "word",
    "front": "another platform",
    "meaning": "站台已经更换。",
    "example": "Check the departure board.",
    "weight": 3,
    "id": "sw-001716"
  },
  {
    "type": "word",
    "front": "head straight for",
    "meaning": "直奔某处",
    "example": "I headed straight for the stairs.",
    "weight": 3,
    "id": "sw-001717"
  },
  {
    "type": "word",
    "front": "pull in / pull away",
    "meaning": "驶入站台／驶离站台",
    "example": "The train was pulling in.",
    "weight": 3,
    "id": "sw-001718"
  },
  {
    "type": "word",
    "front": "board / depart",
    "meaning": "登车／出发",
    "example": "I boarded just before it departed.",
    "weight": 3,
    "id": "sw-001719"
  },
  {
    "type": "word",
    "front": "buzz around",
    "meaning": "在周围嗡嗡飞",
    "example": "Mosquitoes were buzzing around my head.",
    "weight": 3,
    "id": "sw-001720"
  },
  {
    "type": "word",
    "front": "hover near",
    "meaning": "悬停、在附近盘旋",
    "example": "A mosquito hovered near my face.",
    "weight": 3,
    "id": "sw-001721"
  },
  {
    "type": "word",
    "front": "gather around",
    "meaning": "聚集在周围",
    "example": "Insects gathered around us.",
    "weight": 3,
    "id": "sw-001722"
  },
  {
    "type": "word",
    "front": "swat away / swat at",
    "meaning": "挥赶／挥手拍打",
    "example": "I tried to swat the flies away.",
    "weight": 3,
    "id": "sw-001723"
  },
  {
    "type": "word",
    "front": "bite – bit – bitten",
    "meaning": "叮咬（动词变化）",
    "example": "A mosquito bit my neck.",
    "weight": 3,
    "id": "sw-001724"
  },
  {
    "type": "word",
    "front": "mosquito bite",
    "meaning": "蚊子叮咬处",
    "example": "The mosquito bite started itching.",
    "weight": 3,
    "id": "sw-001725"
  },
  {
    "type": "word",
    "front": "itch / itchy",
    "meaning": "发痒／痒的",
    "example": "My skin feels itchy.",
    "weight": 3,
    "id": "sw-001726"
  },
  {
    "type": "word",
    "front": "scratch / try not to scratch",
    "meaning": "抓挠／尽量不抓挠",
    "example": "Try not to scratch the bite.",
    "weight": 3,
    "id": "sw-001727"
  },
  {
    "type": "word",
    "front": "exposed skin / cover up",
    "meaning": "裸露皮肤／遮盖",
    "example": "Cover your exposed skin.",
    "weight": 3,
    "id": "sw-001728"
  },
  {
    "type": "word",
    "front": "insect repellent",
    "meaning": "驱虫剂",
    "example": "Put on some insect repellent.",
    "weight": 3,
    "id": "sw-001729"
  },
  {
    "type": "word",
    "front": "breezy vs gusty",
    "meaning": "有微风／阵风明显",
    "example": "It's much breezier on the open trail.",
    "weight": 3,
    "id": "sw-001730"
  },
  {
    "type": "word",
    "front": "alarm goes off",
    "meaning": "闹钟响起",
    "example": "My alarm went off at six.",
    "weight": 3,
    "id": "sw-001731"
  },
  {
    "type": "word",
    "front": "hit snooze",
    "meaning": "按稍后提醒",
    "example": "I kept hitting snooze.",
    "weight": 3,
    "id": "sw-001732"
  },
  {
    "type": "word",
    "front": "sleep through the alarm",
    "meaning": "闹钟响了也没醒",
    "example": "I slept through my alarm.",
    "weight": 3,
    "id": "sw-001733"
  },
  {
    "type": "word",
    "front": "half asleep / wide awake",
    "meaning": "半睡半醒／完全清醒",
    "example": "I was still half asleep.",
    "weight": 3,
    "id": "sw-001734"
  },
  {
    "type": "word",
    "front": "the next thing I knew",
    "meaning": "等我反应过来、转眼",
    "example": "The next thing I knew, it was eight.",
    "weight": 3,
    "id": "sw-001735"
  },
  {
    "type": "word",
    "front": "spring – sprang – sprung",
    "meaning": "猛地跳起",
    "example": "I sprang out of bed.",
    "weight": 3,
    "id": "sw-001736"
  },
  {
    "type": "word",
    "front": "throw on some clothes",
    "meaning": "匆忙套上衣服",
    "example": "I threw on some clothes.",
    "weight": 3,
    "id": "sw-001737"
  },
  {
    "type": "word",
    "front": "splash water on my face",
    "meaning": "往脸上泼水",
    "example": "I splashed cold water on my face.",
    "weight": 3,
    "id": "sw-001738"
  },
  {
    "type": "word",
    "front": "barely have time to",
    "meaning": "几乎来不及做",
    "example": "I barely had time to eat.",
    "weight": 3,
    "id": "sw-001739"
  },
  {
    "type": "word",
    "front": "behind",
    "meaning": "我匆忙出门，忘带钱包。",
    "example": "I barely had time to eat.",
    "weight": 3,
    "id": "sw-001740"
  },
  {
    "type": "word",
    "front": "lid / take the lid off",
    "meaning": "盖子／取下盖子",
    "example": "Take the lid off the jar.",
    "weight": 3,
    "id": "sw-001741"
  },
  {
    "type": "word",
    "front": "won't budge",
    "meaning": "怎么用力也不动",
    "example": "The lid won't budge.",
    "weight": 3,
    "id": "sw-001742"
  },
  {
    "type": "word",
    "front": "grip firmly / get a good grip",
    "meaning": "握紧／握牢",
    "example": "Grip the jar firmly.",
    "weight": 3,
    "id": "sw-001743"
  },
  {
    "type": "word",
    "front": "twist the lid",
    "meaning": "拧盖子",
    "example": "Twist the lid counterclockwise.",
    "weight": 3,
    "id": "sw-001744"
  },
  {
    "type": "word",
    "front": "screw on / unscrew",
    "meaning": "拧上／拧开",
    "example": "Unscrew the lid slowly.",
    "weight": 3,
    "id": "sw-001745"
  },
  {
    "type": "word",
    "front": "screwed on too tightly",
    "meaning": "拧得太紧",
    "example": "The lid was screwed on too tightly.",
    "weight": 3,
    "id": "sw-001746"
  },
  {
    "type": "word",
    "front": "wrap around",
    "meaning": "用某物包住、缠绕",
    "example": "Wrap a towel around the lid.",
    "weight": 3,
    "id": "sw-001747"
  },
  {
    "type": "word",
    "front": "get a better grip",
    "meaning": "增加握持力",
    "example": "A towel helps you get a better grip.",
    "weight": 3,
    "id": "sw-001748"
  },
  {
    "type": "word",
    "front": "tip the jar slightly",
    "meaning": "把罐子略微倾斜",
    "example": "Tip the jar to pour out the sauce.",
    "weight": 3,
    "id": "sw-001749"
  },
  {
    "type": "word",
    "front": "scrape out / scrape off",
    "meaning": "从容器刮出／从表面刮掉",
    "example": "Scrape out the last bit of sauce.",
    "weight": 3,
    "id": "sw-001750"
  },
  {
    "type": "word",
    "front": "screw the lid back on",
    "meaning": "重新拧上盖子",
    "example": "Screw the lid back on tightly.",
    "weight": 3,
    "id": "sw-001751"
  },
  {
    "type": "word",
    "front": "headlamp / head torch",
    "meaning": "头灯（美／英常用）",
    "example": "I carry a spare headlamp.",
    "weight": 3,
    "id": "sw-001752"
  },
  {
    "type": "word",
    "front": "light up / lit up",
    "meaning": "照亮",
    "example": "The headlamp lit up the trail.",
    "weight": 3,
    "id": "sw-001753"
  },
  {
    "type": "word",
    "front": "beam / a beam of light",
    "meaning": "光束",
    "example": "Point the beam at the trail.",
    "weight": 3,
    "id": "sw-001754"
  },
  {
    "type": "word",
    "front": "lights",
    "meaning": "光束越来越暗。",
    "example": "Point the beam at the trail.",
    "weight": 3,
    "id": "sw-001755"
  },
  {
    "type": "word",
    "front": "flicker / go out",
    "meaning": "闪烁／熄灭",
    "example": "The light flickered and went out.",
    "weight": 3,
    "id": "sw-001756"
  },
  {
    "type": "word",
    "front": "battery runs low / dies",
    "meaning": "电池快没电／彻底没电",
    "example": "The battery died halfway through the hike.",
    "weight": 3,
    "id": "sw-001757"
  },
  {
    "type": "word",
    "front": "fumble around in / fumble with",
    "meaning": "摸索寻找／笨拙摆弄",
    "example": "I fumbled around in my backpack.",
    "weight": 3,
    "id": "sw-001758"
  },
  {
    "type": "word",
    "front": "feel around for",
    "meaning": "用手摸索寻找",
    "example": "I felt around for my spare torch.",
    "weight": 3,
    "id": "sw-001759"
  },
  {
    "type": "word",
    "front": "switch on/off / switch to",
    "meaning": "打开关闭／切换到",
    "example": "I switched on the spare headlamp.",
    "weight": 3,
    "id": "sw-001760"
  },
  {
    "type": "word",
    "front": "point something at",
    "meaning": "将某物对准",
    "example": "Point the beam at the ground.",
    "weight": 3,
    "id": "sw-001761"
  },
  {
    "type": "word",
    "front": "cast a shadow",
    "meaning": "投下阴影",
    "example": "Trees cast long shadows across the path.",
    "weight": 3,
    "id": "sw-001762"
  },
  {
    "type": "word",
    "front": "make your way toward",
    "meaning": "逐渐／小心前往",
    "example": "We made our way toward the hut.",
    "weight": 3,
    "id": "sw-001763"
  },
  {
    "type": "word",
    "front": "stain / stained",
    "meaning": "污渍／沾污的",
    "example": "There's a coffee stain on my shirt.",
    "weight": 3,
    "id": "sw-001764"
  },
  {
    "type": "word",
    "front": "stain",
    "meaning": "这是明显的棕色污渍。",
    "example": "There's a coffee stain on my shirt.",
    "weight": 3,
    "id": "sw-001765"
  },
  {
    "type": "word",
    "front": "blot / blot up",
    "meaning": "轻按吸干液体",
    "example": "Blot the stain with paper towels.",
    "weight": 3,
    "id": "sw-001766"
  },
  {
    "type": "word",
    "front": "soak into / seep into",
    "meaning": "浸入／缓慢渗入",
    "example": "Coffee soaked into the fabric.",
    "weight": 3,
    "id": "sw-001767"
  },
  {
    "type": "word",
    "front": "soak up",
    "meaning": "吸收液体",
    "example": "The towel soaked up the spill.",
    "weight": 3,
    "id": "sw-001768"
  },
  {
    "type": "word",
    "front": "dab onto",
    "meaning": "轻轻点涂",
    "example": "Dab a little detergent onto the stain.",
    "weight": 3,
    "id": "sw-001769"
  },
  {
    "type": "word",
    "front": "detergent / laundry detergent",
    "meaning": "洗涤剂／衣物洗涤剂",
    "example": "Use the right laundry detergent.",
    "weight": 3,
    "id": "sw-001770"
  },
  {
    "type": "word",
    "front": "let it sit",
    "meaning": "让它静置一会儿",
    "example": "Let it sit for a few minutes.",
    "weight": 3,
    "id": "sw-001771"
  },
  {
    "type": "word",
    "front": "come out / wash out",
    "meaning": "污渍去除、洗掉",
    "example": "The stain finally came out.",
    "weight": 3,
    "id": "sw-001772"
  },
  {
    "type": "word",
    "front": "faint mark",
    "meaning": "淡淡的痕迹",
    "example": "There's still a faint mark.",
    "weight": 3,
    "id": "sw-001773"
  },
  {
    "type": "word",
    "front": "set a stain",
    "meaning": "使污渍固定更难除",
    "example": "Heat can set certain stains.",
    "weight": 3,
    "id": "sw-001774"
  },
  {
    "type": "word",
    "front": "vending machine",
    "meaning": "自动售货机",
    "example": "I bought water from a vending machine.",
    "weight": 3,
    "id": "sw-001775"
  },
  {
    "type": "word",
    "front": "select (a drink / option)",
    "meaning": "在界面选择",
    "example": "Select a payment method.",
    "weight": 3,
    "id": "sw-001776"
  },
  {
    "type": "word",
    "front": "charge someone / get charged",
    "meaning": "收取费用／被扣款",
    "example": "They charged me twice.",
    "weight": 3,
    "id": "sw-001777"
  },
  {
    "type": "word",
    "front": "dispense / fail to dispense",
    "meaning": "机器出货／未出货",
    "example": "The machine didn't dispense my drink.",
    "weight": 3,
    "id": "sw-001778"
  },
  {
    "type": "word",
    "front": "get stuck halfway / wedged",
    "meaning": "卡在半途／夹住",
    "example": "The bottle got stuck halfway down.",
    "weight": 3,
    "id": "sw-001779"
  },
  {
    "type": "word",
    "front": "collection tray",
    "meaning": "取货槽",
    "example": "The drink never reached the collection tray.",
    "weight": 3,
    "id": "sw-001780"
  },
  {
    "type": "word",
    "front": "error message pops up",
    "meaning": "弹出错误提示",
    "example": "An error message popped up.",
    "weight": 3,
    "id": "sw-001781"
  },
  {
    "type": "word",
    "front": "contact customer support",
    "meaning": "联系客服",
    "example": "I contacted customer support.",
    "weight": 3,
    "id": "sw-001782"
  },
  {
    "type": "word",
    "front": "refund / request a refund",
    "meaning": "退款／申请退款",
    "example": "I asked for a refund.",
    "weight": 3,
    "id": "sw-001783"
  },
  {
    "type": "word",
    "front": "reverse a charge",
    "meaning": "撤销、冲回交易",
    "example": "The charge was reversed.",
    "weight": 3,
    "id": "sw-001784"
  },
  {
    "type": "word",
    "front": "shake / tip the machine",
    "meaning": "摇晃／倾斜机器（不建议）",
    "example": "Don't shake or tilt the vending machine.",
    "weight": 3,
    "id": "sw-001785"
  },
  {
    "type": "word",
    "front": "pitch a tent / set up a tent",
    "meaning": "搭帐篷",
    "example": "We pitched our tents before dark.",
    "weight": 3,
    "id": "sw-001786"
  },
  {
    "type": "word",
    "front": "take down a tent / pack away",
    "meaning": "拆帐篷／收纳",
    "example": "Let's take down the tent.",
    "weight": 3,
    "id": "sw-001787"
  },
  {
    "type": "word",
    "front": "groundsheet / spread out",
    "meaning": "地布／铺开",
    "example": "Spread out the groundsheet.",
    "weight": 3,
    "id": "sw-001788"
  },
  {
    "type": "word",
    "front": "assemble / take apart",
    "meaning": "组装／拆开部件",
    "example": "Assemble the poles first.",
    "weight": 3,
    "id": "sw-001789"
  },
  {
    "type": "word",
    "front": "tent pole / snap",
    "meaning": "帐杆／突然咔嚓断裂",
    "example": "One pole snapped in the wind.",
    "weight": 3,
    "id": "sw-001790"
  },
  {
    "type": "word",
    "front": "clip onto the frame",
    "meaning": "扣到支架上",
    "example": "Clip the tent body onto the frame.",
    "weight": 3,
    "id": "sw-001791"
  },
  {
    "type": "word",
    "front": "stake down / peg down",
    "meaning": "用地钉固定（美／英）",
    "example": "Stake down the corners.",
    "weight": 3,
    "id": "sw-001792"
  },
  {
    "type": "word",
    "front": "pull taut / taut",
    "meaning": "拉紧／绷紧的",
    "example": "Pull the fabric taut.",
    "weight": 3,
    "id": "sw-001793"
  },
  {
    "type": "word",
    "front": "slack ↔ taut",
    "meaning": "松弛 ↔ 绷紧",
    "example": "The guy line is too slack.",
    "weight": 3,
    "id": "sw-001794"
  },
  {
    "type": "word",
    "front": "rainfly / flysheet",
    "meaning": "帐篷外帐（美／英）",
    "example": "Attach the rainfly.",
    "weight": 3,
    "id": "sw-001795"
  },
  {
    "type": "word",
    "front": "guy line",
    "meaning": "防风拉绳",
    "example": "Tighten the guy lines.",
    "weight": 3,
    "id": "sw-001796"
  },
  {
    "type": "word",
    "front": "sag / sagging",
    "meaning": "下垂、松垮",
    "example": "The fabric started sagging.",
    "weight": 3,
    "id": "sw-001797"
  },
  {
    "type": "word",
    "front": "pull out the stakes",
    "meaning": "拔出地钉",
    "example": "Pull out the stakes carefully.",
    "weight": 3,
    "id": "sw-001798"
  },
  {
    "type": "word",
    "front": "dry out / pack separately",
    "meaning": "晾干透／分开装",
    "example": "Dry the rainfly before storing it.",
    "weight": 3,
    "id": "sw-001799"
  },
  {
    "type": "word",
    "front": "flush the toilet",
    "meaning": "冲马桶",
    "example": "I flushed the toilet.",
    "weight": 3,
    "id": "sw-001800"
  },
  {
    "type": "word",
    "front": "drain away / drain properly",
    "meaning": "排走／排水正常",
    "example": "The water isn't draining away.",
    "weight": 3,
    "id": "sw-001801"
  },
  {
    "type": "word",
    "front": "rim / toward the rim",
    "meaning": "边缘／向边缘",
    "example": "The water was rising toward the rim.",
    "weight": 3,
    "id": "sw-001802"
  },
  {
    "type": "word",
    "front": "clogged / blockage",
    "meaning": "堵塞的／堵塞物",
    "example": "The toilet is clogged.",
    "weight": 3,
    "id": "sw-001803"
  },
  {
    "type": "word",
    "front": "water supply valve",
    "meaning": "进水阀",
    "example": "Turn off the water supply valve.",
    "weight": 3,
    "id": "sw-001804"
  },
  {
    "type": "word",
    "front": "plunger / grab a plunger",
    "meaning": "皮搋子／拿来皮搋子",
    "example": "Use a plunger to clear the blockage.",
    "weight": 3,
    "id": "sw-001805"
  },
  {
    "type": "word",
    "front": "water level rises / goes down",
    "meaning": "水位上涨／下降",
    "example": "The water level started going down.",
    "weight": 3,
    "id": "sw-001806"
  },
  {
    "type": "word",
    "front": "soak up / mop up",
    "meaning": "吸掉／拖掉积水",
    "example": "Mop up the spilled water.",
    "weight": 3,
    "id": "sw-001807"
  },
  {
    "type": "word",
    "front": "thoroughly",
    "meaning": "彻底、仔细地",
    "example": "Wash your hands thoroughly.",
    "weight": 3,
    "id": "sw-001808"
  },
  {
    "type": "word",
    "front": "clear the blockage",
    "meaning": "疏通堵塞",
    "example": "The blockage finally cleared.",
    "weight": 3,
    "id": "sw-001809"
  },
  {
    "type": "word",
    "front": "button up / unbutton",
    "meaning": "扣纽扣／解开纽扣",
    "example": "Button up your shirt.",
    "weight": 3,
    "id": "sw-001810"
  },
  {
    "type": "word",
    "front": "come off / button comes off",
    "meaning": "脱落／纽扣掉落",
    "example": "One of the buttons came off.",
    "weight": 3,
    "id": "sw-001811"
  },
  {
    "type": "word",
    "front": "snap / thread snapped",
    "meaning": "突然折断／线断了",
    "example": "The thread snapped.",
    "weight": 3,
    "id": "sw-001812"
  },
  {
    "type": "word",
    "front": "thread / thread the needle",
    "meaning": "线／穿针",
    "example": "I couldn't thread the needle.",
    "weight": 3,
    "id": "sw-001813"
  },
  {
    "type": "word",
    "front": "sewing kit / needle / scissors",
    "meaning": "针线包／针／剪刀",
    "example": "I keep a small sewing kit.",
    "weight": 3,
    "id": "sw-001814"
  },
  {
    "type": "word",
    "front": "line up (with)",
    "meaning": "对齐",
    "example": "Line up the button with the holes.",
    "weight": 3,
    "id": "sw-001815"
  },
  {
    "type": "word",
    "front": "stitch / stitch back on",
    "meaning": "用针线缝／重新缝上",
    "example": "Stitch the button back on.",
    "weight": 3,
    "id": "sw-001816"
  },
  {
    "type": "word",
    "front": "tie a knot / untie a knot",
    "meaning": "打结／解结",
    "example": "Tie a small knot in the thread.",
    "weight": 3,
    "id": "sw-001817"
  },
  {
    "type": "word",
    "front": "snip off",
    "meaning": "小幅快速剪掉",
    "example": "Snip off the excess thread.",
    "weight": 3,
    "id": "sw-001818"
  },
  {
    "type": "word",
    "front": "secure / securely fastened",
    "meaning": "牢固的／牢牢固定的",
    "example": "Make sure the button is secure.",
    "weight": 3,
    "id": "sw-001819"
  },
  {
    "type": "word",
    "front": "loose thread / matching thread",
    "meaning": "松散线头／配色相近的线",
    "example": "Use matching thread to repair it.",
    "weight": 3,
    "id": "sw-001820"
  },
  {
    "type": "word",
    "front": "suspension bridge / footbridge",
    "meaning": "吊桥／人行桥",
    "example": "We crossed a suspension bridge.",
    "weight": 3,
    "id": "sw-001821"
  },
  {
    "type": "word",
    "front": "gorge / ravine",
    "meaning": "峡谷／深沟谷",
    "example": "The bridge crossed a deep gorge.",
    "weight": 3,
    "id": "sw-001822"
  },
  {
    "type": "word",
    "front": "stretch across",
    "meaning": "横跨、延伸穿过",
    "example": "The bridge stretches across the river.",
    "weight": 3,
    "id": "sw-001823"
  },
  {
    "type": "word",
    "front": "wooden plank / floorboard",
    "meaning": "长木板／地板板材",
    "example": "The wooden planks creaked.",
    "weight": 3,
    "id": "sw-001824"
  },
  {
    "type": "word",
    "front": "creak",
    "meaning": "受力吱呀响",
    "example": "The bridge creaked underfoot.",
    "weight": 3,
    "id": "sw-001825"
  },
  {
    "type": "word",
    "front": "sway from side to side",
    "meaning": "左右摇摆",
    "example": "The bridge was swaying from side to side.",
    "weight": 3,
    "id": "sw-001826"
  },
  {
    "type": "word",
    "front": "sway / wobble / shake",
    "meaning": "摇摆／不稳地晃／颤动",
    "example": "The stepping stone wobbled under my foot.",
    "weight": 3,
    "id": "sw-001827"
  },
  {
    "type": "word",
    "front": "grip the handrail",
    "meaning": "牢牢握住扶手",
    "example": "Grip the handrail firmly.",
    "weight": 3,
    "id": "sw-001828"
  },
  {
    "type": "word",
    "front": "grab → grip → hold on",
    "meaning": "迅速抓住 → 握紧 → 持续抓着",
    "example": "Grab the rail and hold on.",
    "weight": 3,
    "id": "sw-001829"
  },
  {
    "type": "word",
    "front": "halfway across",
    "meaning": "走到一半",
    "example": "I was halfway across the bridge.",
    "weight": 3,
    "id": "sw-001830"
  },
  {
    "type": "word",
    "front": "one at a time / in single file",
    "meaning": "一次一个／排单列",
    "example": "Walk in single file.",
    "weight": 3,
    "id": "sw-001831"
  },
  {
    "type": "word",
    "front": "step onto / step off",
    "meaning": "踏上／从上面下来",
    "example": "Step onto the bridge carefully.",
    "weight": 3,
    "id": "sw-001832"
  },
  {
    "type": "word",
    "front": "solid ground",
    "meaning": "坚实地面",
    "example": "I reached solid ground again.",
    "weight": 3,
    "id": "sw-001833"
  },
  {
    "type": "word",
    "front": "wouldn't + verb",
    "meaning": "已经尝试，但就是无法成功",
    "example": "code.",
    "weight": 3,
    "id": "sw-001834"
  },
  {
    "type": "word",
    "front": "get + adjective / past participle",
    "meaning": "进入某种状态",
    "example": "The strap got loose. / My bag got wedged inside.",
    "weight": 3,
    "id": "sw-001835"
  },
  {
    "type": "word",
    "front": "start / begin + -ing",
    "meaning": "某件事开始发生",
    "example": "The lights started flickering.",
    "weight": 3,
    "id": "sw-001836"
  },
  {
    "type": "word",
    "front": "I realized (that)...",
    "meaning": "意识到、发现",
    "example": "I realized I had wandered off the route.",
    "weight": 3,
    "id": "sw-001837"
  },
  {
    "type": "word",
    "front": "I could barely + verb",
    "meaning": "勉强……，几乎不能……",
    "example": "I could barely make out the announcement.",
    "weight": 3,
    "id": "sw-001838"
  },
  {
    "type": "word",
    "front": "I didn't quite catch...",
    "meaning": "没完全听清",
    "example": "I didn't quite catch the last part.",
    "weight": 3,
    "id": "sw-001839"
  },
  {
    "type": "word",
    "front": "Could you + verb...?",
    "meaning": "礼貌请求",
    "example": "Could you keep it down a little?",
    "weight": 3,
    "id": "sw-001840"
  },
  {
    "type": "word",
    "front": "Would you mind + -ing...?",
    "meaning": "委婉请求",
    "example": "Would you mind keeping it down?",
    "weight": 3,
    "id": "sw-001841"
  },
  {
    "type": "word",
    "front": "I'd appreciate it if...",
    "meaning": "强调请求时的感谢",
    "example": "I'd appreciate it if you could check on it.",
    "weight": 3,
    "id": "sw-001842"
  },
  {
    "type": "word",
    "front": "let + object + verb",
    "meaning": "让某人／物做某事",
    "example": "Let the detergent sit for a few minutes.",
    "weight": 3,
    "id": "sw-001843"
  },
  {
    "type": "word",
    "front": "stop + object + from + -ing",
    "meaning": "防止某物发生",
    "example": "Tighten the line to stop the flysheet from flapping.",
    "weight": 3,
    "id": "sw-001844"
  },
  {
    "type": "word",
    "front": "rather than + -ing / verb",
    "meaning": "与其……不如……",
    "example": "We turned back rather than pushing on.",
    "weight": 3,
    "id": "sw-001845"
  },
  {
    "type": "word",
    "front": "so...that...",
    "meaning": "如此……以至于……",
    "example": "The gust was so strong that I staggered.",
    "weight": 3,
    "id": "sw-001846"
  },
  {
    "type": "word",
    "front": "adjective",
    "meaning": "桥在轻微摇晃。",
    "example": "The gust was so strong that I staggered.",
    "weight": 3,
    "id": "sw-001847"
  },
  {
    "type": "word",
    "front": "X → Y (state transitions)",
    "meaning": "从一种状态变成另一种",
    "example": "The light got dimmer, flickered, then went out.",
    "weight": 3,
    "id": "sw-001848"
  },
  {
    "type": "word",
    "front": "verb + object + back on",
    "meaning": "把物品重新装／穿回",
    "example": "I stitched the button back on.",
    "weight": 3,
    "id": "sw-001849"
  },
  {
    "type": "word",
    "front": "go / come + direction or state",
    "meaning": "按方向或状态变化",
    "example": "The water level went down. / The power came back on.",
    "weight": 3,
    "id": "sw-001850"
  },
  {
    "type": "word",
    "front": "be + past participle + to/for",
    "meaning": "描述被动故障或流程",
    "example": "My bag was pulled aside for an inspection.",
    "weight": 3,
    "id": "sw-001851"
  },
  {
    "type": "word",
    "front": "get + noun + off / out / on",
    "meaning": "移除／拿出／装上",
    "example": "I scraped the sauce out of the jar.",
    "weight": 3,
    "id": "sw-001852"
  },
  {
    "type": "word",
    "front": "verb + preposition (spatial)",
    "meaning": "介词传达动作方向",
    "example": "Step onto the bridge, then step off at the other end.",
    "weight": 3,
    "id": "sw-001853"
  },
  {
    "type": "word",
    "front": "be about to + verb when...",
    "meaning": "正要做……时发生另一件事",
    "example": "I was about to leave when a button came off.",
    "weight": 3,
    "id": "sw-001854"
  },
  {
    "type": "word",
    "front": "I was + -ing when...",
    "meaning": "进行中的动作突然被打断",
    "example": "I was working when the lights went out.",
    "weight": 3,
    "id": "sw-001855"
  },
  {
    "type": "word",
    "front": "through",
    "meaning": "我没能打通他的电话。",
    "example": "I was working when the lights went out.",
    "weight": 3,
    "id": "sw-001856"
  },
  {
    "type": "word",
    "front": "keep something + adjective / state",
    "meaning": "让某事物保持某种状态",
    "example": "Let's keep the group together.",
    "weight": 3,
    "id": "sw-001857"
  },
  {
    "type": "word",
    "front": "be tempted to + verb",
    "meaning": "忍不住想做某事",
    "example": "I was tempted to keep going, but I turned back.",
    "weight": 3,
    "id": "sw-001858"
  },
  {
    "type": "word",
    "front": "make up for + noun",
    "meaning": "弥补（损失、延误）",
    "example": "The dessert was meant to make up for the delay.",
    "weight": 3,
    "id": "sw-001859"
  },
  {
    "type": "word",
    "front": "halfway + across / down / through",
    "meaning": "进行到中途／一半",
    "example": "I was halfway across the bridge.",
    "weight": 3,
    "id": "sw-001860"
  },
  {
    "type": "word",
    "front": "in case / just in case",
    "meaning": "以防万一",
    "example": "I packed a spare headlamp just in case.",
    "weight": 3,
    "id": "sw-001861"
  },
  {
    "type": "word",
    "front": "keep an eye on",
    "meaning": "密切关注",
    "example": "Keep an eye on the weather and the group.",
    "weight": 3,
    "id": "sw-001862"
  }
];

window.VOCABULARY = VOCABULARY;
