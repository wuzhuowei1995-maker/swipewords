// SwipeWords：Review 04–08 英语词汇、固定搭配、句式、独立句子和日语五十音
// 新增口语表达/固定搭配/句型来自用户上传《English Speaking Vocabulary & Natural Expressions》。
// 新增词条与重复匹配词条均采用明确 3 倍基准权重，不与后60%默认权重叠乘。
// 新增 Review 07 场景 61–81、Review 08 场景 82–129，含动作链、经典句子和混合复习搭配。去重按“英文表达 + 对应中文词义”，不同词义分别保留。
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
    "front": "watch your footing / watch your step",
    "meaning": "注意脚下",
    "example": "Watch your footing on the wet rocks.",
    "id": "sw-000010"
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
    "front": "if I feel like it / don’t feel like doing",
    "meaning": "如果我想的话 / 不太想做",
    "example": "I’ll sing if I feel like it, but I don’t feel like talking.",
    "id": "sw-000033"
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
    "front": "keep to myself",
    "meaning": "自己待着、不太主动社交",
    "example": "I usually keep to myself on long trips.",
    "id": "sw-000043"
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
    "front": "crack / cracked",
    "meaning": "裂缝 / 裂开的",
    "example": "There’s a crack in the wall and my phone screen is cracked.",
    "id": "sw-000064"
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
    "front": "crispy / soggy",
    "meaning": "酥脆 / 湿软",
    "example": "The fries were crispy at first but turned soggy later.",
    "id": "sw-000080"
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
    "front": "rather than",
    "meaning": "而不是",
    "example": "I’d rather backtrack than take a risky shortcut.",
    "id": "sw-000189"
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
    "front": "come undone",
    "meaning": "自己松开、散开",
    "example": "My shoelaces came undone halfway down the trail.",
    "id": "sw-000246"
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
    "front": "drizzle",
    "meaning": "细细淋上；毛毛雨",
    "example": "Drizzle a little oil over the vegetables.",
    "id": "sw-000252"
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
    "front": "traffic clears / crowd clears",
    "meaning": "车流散去 / 人群散去",
    "example": "Wait until the traffic clears.",
    "id": "sw-000265"
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
    "front": "wobble / wobbly",
    "meaning": "摇晃 / 摇晃不稳的",
    "example": "One stone wobbled under my foot.",
    "id": "sw-000326"
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
    "type": "ladder",
    "front": "wipe → scrub → scrape off",
    "meaning": "擦 → 用力刷 → 刮掉",
    "example": "The stain wouldn't come off when I wiped it, so I scrubbed it and finally scraped off the dried bits.",
    "id": "sw-000357"
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
    "front": "payment go through / would not go through",
    "meaning": "支付完成／就是不成功",
    "example": "The payment would not go through.",
    "id": "sw-000397"
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
    "front": "scale / put suitcase on scale",
    "meaning": "秤／把箱子放秤上",
    "example": "Put your suitcase on the scale.",
    "id": "sw-000471"
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
    "front": "Pan-fry",
    "meaning": "平底锅煎",
    "example": "Pan-fry the fish until the skin is crisp.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000617"
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
    "front": "Roast",
    "meaning": "烘烤肉类或蔬菜",
    "example": "Roast the chicken with potatoes.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000623"
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
    "front": "Warm up",
    "meaning": "加热、温热",
    "example": "Warm up the milk gently.",
    "weight": 3,
    "topic": "cooking_methods",
    "id": "sw-000633"
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
    "front": "how often something happens",
    "meaning": "某件事发生得多么频繁",
    "example": "I'm surprised by how often this happens.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000684"
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
    "front": "I can barely make out...",
    "meaning": "我几乎无法听清或辨认……",
    "example": "I can barely make out what they're saying.",
    "weight": 3,
    "topic": "speaking_expressions_v1",
    "id": "sw-000785"
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
    "front": "walk around the puddle",
    "meaning": "绕开水坑",
    "example": "",
    "weight": 3,
    "id": "sw-000872"
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
    "front": "ring the doorbell",
    "meaning": "按门铃",
    "example": "",
    "weight": 3,
    "id": "sw-000893"
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
    "front": "pay someone back",
    "meaning": "还钱给某人",
    "example": "",
    "weight": 3,
    "id": "sw-000929"
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
    "front": "point out a mistake",
    "meaning": "指出错误",
    "example": "",
    "weight": 3,
    "id": "sw-000956"
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
    "front": "the ground drops away steeply",
    "meaning": "地形突然陡降",
    "example": "",
    "weight": 3,
    "id": "sw-001096"
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
    "front": "berth",
    "meaning": "卧铺",
    "example": "",
    "weight": 3,
    "id": "sw-001169"
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
    "front": "point out a problem",
    "meaning": "指出问题",
    "example": "",
    "weight": 3,
    "id": "sw-001312"
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
    "front": "fare difference",
    "meaning": "票价差额",
    "example": "",
    "weight": 3,
    "id": "sw-001369"
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
    "front": "cloudy / murky water",
    "meaning": "浑浊的水",
    "example": "",
    "weight": 3,
    "id": "sw-001381"
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
    "front": "Would you mind if I sat here?",
    "meaning": "你介意我坐这里吗",
    "example": "",
    "weight": 3,
    "id": "sw-001437"
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
    "front": "estimated time remaining",
    "meaning": "预计剩余时间",
    "example": "",
    "weight": 3,
    "id": "sw-001480"
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
    "front": "a flight of stairs",
    "meaning": "一段连续楼梯",
    "example": "",
    "weight": 3,
    "id": "sw-001534"
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
    "front": "pick up the pace",
    "meaning": "加快步速",
    "example": "The front group picked up the pace.",
    "weight": 3,
    "id": "sw-001631"
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
    "front": "reach into",
    "meaning": "把手伸进",
    "example": "I reached into my pocket.",
    "weight": 3,
    "id": "sw-001674"
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
    "front": "swat away / swat at",
    "meaning": "挥赶／挥手拍打",
    "example": "I tried to swat the flies away.",
    "weight": 3,
    "id": "sw-001723"
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
    "front": "lid / take the lid off",
    "meaning": "盖子／取下盖子",
    "example": "Take the lid off the jar.",
    "weight": 3,
    "id": "sw-001741"
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
    "front": "flicker / go out",
    "meaning": "闪烁／熄灭",
    "example": "The light flickered and went out.",
    "weight": 3,
    "id": "sw-001756"
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
    "type": "pattern",
    "front": "wouldn't + verb",
    "meaning": "已经尝试，但就是无法成功",
    "example": "code.",
    "weight": 3,
    "id": "sw-001834"
  },
  {
    "type": "pattern",
    "front": "get + adjective / past participle",
    "meaning": "进入某种状态",
    "example": "The strap got loose. / My bag got wedged inside.",
    "weight": 3,
    "id": "sw-001835"
  },
  {
    "type": "pattern",
    "front": "start / begin + -ing",
    "meaning": "某件事开始发生",
    "example": "The lights started flickering.",
    "weight": 3,
    "id": "sw-001836"
  },
  {
    "type": "pattern",
    "front": "I realized (that)...",
    "meaning": "意识到、发现",
    "example": "I realized I had wandered off the route.",
    "weight": 3,
    "id": "sw-001837"
  },
  {
    "type": "pattern",
    "front": "I could barely + verb",
    "meaning": "勉强……，几乎不能……",
    "example": "I could barely make out the announcement.",
    "weight": 3,
    "id": "sw-001838"
  },
  {
    "type": "pattern",
    "front": "I didn't quite catch...",
    "meaning": "没完全听清",
    "example": "I didn't quite catch the last part.",
    "weight": 3,
    "id": "sw-001839"
  },
  {
    "type": "pattern",
    "front": "I'd appreciate it if...",
    "meaning": "强调请求时的感谢",
    "example": "I'd appreciate it if you could check on it.",
    "weight": 3,
    "id": "sw-001842"
  },
  {
    "type": "pattern",
    "front": "let + object + verb",
    "meaning": "让某人／物做某事",
    "example": "Let the detergent sit for a few minutes.",
    "weight": 3,
    "id": "sw-001843"
  },
  {
    "type": "pattern",
    "front": "stop + object + from + -ing",
    "meaning": "防止某物发生",
    "example": "Tighten the line to stop the flysheet from flapping.",
    "weight": 3,
    "id": "sw-001844"
  },
  {
    "type": "pattern",
    "front": "so...that...",
    "meaning": "如此……以至于……",
    "example": "The gust was so strong that I staggered.",
    "weight": 3,
    "id": "sw-001846"
  },
  {
    "type": "pattern",
    "front": "X → Y (state transitions)",
    "meaning": "从一种状态变成另一种",
    "example": "The light got dimmer, flickered, then went out.",
    "weight": 3,
    "id": "sw-001848"
  },
  {
    "type": "pattern",
    "front": "verb + object + back on",
    "meaning": "把物品重新装／穿回",
    "example": "I stitched the button back on.",
    "weight": 3,
    "id": "sw-001849"
  },
  {
    "type": "pattern",
    "front": "go / come + direction or state",
    "meaning": "按方向或状态变化",
    "example": "The water level went down. / The power came back on.",
    "weight": 3,
    "id": "sw-001850"
  },
  {
    "type": "pattern",
    "front": "be + past participle + to/for",
    "meaning": "描述被动故障或流程",
    "example": "My bag was pulled aside for an inspection.",
    "weight": 3,
    "id": "sw-001851"
  },
  {
    "type": "pattern",
    "front": "get + noun + off / out / on",
    "meaning": "移除／拿出／装上",
    "example": "I scraped the sauce out of the jar.",
    "weight": 3,
    "id": "sw-001852"
  },
  {
    "type": "pattern",
    "front": "verb + preposition (spatial)",
    "meaning": "介词传达动作方向",
    "example": "Step onto the bridge, then step off at the other end.",
    "weight": 3,
    "id": "sw-001853"
  },
  {
    "type": "pattern",
    "front": "I was + -ing when...",
    "meaning": "进行中的动作突然被打断",
    "example": "I was working when the lights went out.",
    "weight": 3,
    "id": "sw-001855"
  },
  {
    "type": "pattern",
    "front": "be tempted to + verb",
    "meaning": "忍不住想做某事",
    "example": "I was tempted to keep going, but I turned back.",
    "weight": 3,
    "id": "sw-001858"
  },
  {
    "type": "pattern",
    "front": "make up for + noun",
    "meaning": "弥补（损失、延误）",
    "example": "The dessert was meant to make up for the delay.",
    "weight": 3,
    "id": "sw-001859"
  },
  {
    "type": "pattern",
    "front": "halfway + across / down / through",
    "meaning": "进行到中途／一半",
    "example": "I was halfway across the bridge.",
    "weight": 3,
    "id": "sw-001860"
  },
  {
    "type": "pattern",
    "front": "be due to + verb",
    "meaning": "按计划、时间表即将发生",
    "example": "The train is due to depart at ten.",
    "weight": 3,
    "id": "sw-001864"
  },
  {
    "type": "pattern",
    "front": "be expected to + verb",
    "meaning": "根据当前信息预计；不是保证",
    "example": "",
    "weight": 3,
    "id": "sw-001865"
  },
  {
    "type": "pattern",
    "front": "push something back by + duration",
    "meaning": "将时间延后指定时长",
    "example": "Could we push it back by an hour?",
    "weight": 3,
    "id": "sw-001866"
  },
  {
    "type": "pattern",
    "front": "push something back to + time",
    "meaning": "将安排改到指定时间点",
    "example": "They pushed the meeting back to four.",
    "weight": 3,
    "id": "sw-001867"
  },
  {
    "type": "pattern",
    "front": "pencil something in for + time",
    "meaning": "暂定到日程，尚未最终确认",
    "example": "Let's pencil it in for Friday.",
    "weight": 3,
    "id": "sw-001868"
  },
  {
    "type": "pattern",
    "front": "by the time + past clause",
    "meaning": "等到……时；强调先前变化",
    "example": "By the time I looked up, the bread had burnt.",
    "weight": 3,
    "id": "sw-001869"
  },
  {
    "type": "pattern",
    "front": "halfway through + activity",
    "meaning": "正在进行的活动做到一半",
    "example": "",
    "weight": 3,
    "id": "sw-001870"
  },
  {
    "type": "pattern",
    "front": "once + clause, ...",
    "meaning": "一旦/在……之后；引出后续动作",
    "example": "",
    "weight": 3,
    "id": "sw-001871"
  },
  {
    "type": "pattern",
    "front": "in the meantime, ...",
    "meaning": "与此同时、等待期间做别的事",
    "example": "I'll explore the square in the meantime.",
    "weight": 3,
    "id": "sw-001872"
  },
  {
    "type": "pattern",
    "front": "only to find that + clause",
    "meaning": "结果却发现；常带意外或失望",
    "example": "",
    "weight": 3,
    "id": "sw-001873"
  },
  {
    "type": "pattern",
    "front": "it turned out that + clause",
    "meaning": "最后发现事实与原以为不同",
    "example": "",
    "weight": 3,
    "id": "sw-001874"
  },
  {
    "type": "pattern",
    "front": "turn out + adverb/adjective",
    "meaning": "某件事最终效果如何",
    "example": "The meal turned out surprisingly well.",
    "weight": 3,
    "id": "sw-001875"
  },
  {
    "type": "pattern",
    "front": "not realize + (that) clause",
    "meaning": "当时没意识到某件事",
    "example": "I didn't realize everyone could hear me.",
    "weight": 3,
    "id": "sw-001877"
  },
  {
    "type": "pattern",
    "front": "Would you mind + -ing?",
    "meaning": "礼貌请求对方完成动作",
    "example": "Would you mind moving your bag a little?",
    "weight": 3,
    "id": "sw-001880"
  },
  {
    "type": "pattern",
    "front": "Is there any chance + clause?",
    "meaning": "委婉询问某种可能性",
    "example": "",
    "weight": 3,
    "id": "sw-001883"
  },
  {
    "type": "pattern",
    "front": "I was wondering if + clause",
    "meaning": "语气柔和地提出请求",
    "example": "I was wondering if I could renew the loan.",
    "weight": 3,
    "id": "sw-001884"
  },
  {
    "type": "pattern",
    "front": "I didn't mean to + verb",
    "meaning": "解释自己并非有意产生某种影响",
    "example": "I didn't mean to criticize you.",
    "weight": 3,
    "id": "sw-001887"
  },
  {
    "type": "pattern",
    "front": "What I meant was that + clause",
    "meaning": "重新清晰表述本意",
    "example": "",
    "weight": 3,
    "id": "sw-001888"
  },
  {
    "type": "pattern",
    "front": "come across as + adjective",
    "meaning": "给人的印象或听起来如何",
    "example": "My comment came across as harsh.",
    "weight": 3,
    "id": "sw-001889"
  },
  {
    "type": "pattern",
    "front": "looking back, ...",
    "meaning": "事后回顾，反思当时发生的事",
    "example": "Looking back, I could have worded it better.",
    "weight": 3,
    "id": "sw-001891"
  },
  {
    "type": "pattern",
    "front": "I can see why + clause",
    "meaning": "表示理解原因或对方反应",
    "example": "I can see why that upset you.",
    "weight": 3,
    "id": "sw-001892"
  },
  {
    "type": "pattern",
    "front": "talk something through",
    "meaning": "仔细讨论一个问题",
    "example": "Let's talk through the options.",
    "weight": 3,
    "id": "sw-001893"
  },
  {
    "type": "pattern",
    "front": "tend to + verb",
    "meaning": "表示一般趋势而非绝对规律",
    "example": "City-centre apartments tend to cost more.",
    "weight": 3,
    "id": "sw-001895"
  },
  {
    "type": "pattern",
    "front": "comparative + than expected",
    "meaning": "实际与预期形成比较",
    "example": "The climb was steeper than expected.",
    "weight": 3,
    "id": "sw-001896"
  },
  {
    "type": "pattern",
    "front": "too + adjective + for + person + to + verb",
    "meaning": "过于……以至于某人无法做",
    "example": "",
    "weight": 3,
    "id": "sw-001897"
  },
  {
    "type": "pattern",
    "front": "so + adjective + that + clause",
    "meaning": "如此……以至于",
    "example": "",
    "weight": 3,
    "id": "sw-001898"
  },
  {
    "type": "pattern",
    "front": "not so + adjective + that + clause",
    "meaning": "没有到……的程度；不至于",
    "example": "",
    "weight": 3,
    "id": "sw-001899"
  },
  {
    "type": "pattern",
    "front": "slightly / fairly / unusually + adjective",
    "meaning": "副词修饰状态，表达细微程度",
    "example": "The peaches felt unusually soft.",
    "weight": 3,
    "id": "sw-001900"
  },
  {
    "type": "pattern",
    "front": "barely / hardly + verb",
    "meaning": "几乎不能完成动作",
    "example": "I could barely make out the trail marker.",
    "weight": 3,
    "id": "sw-001901"
  },
  {
    "type": "pattern",
    "front": "increasingly + adjective",
    "meaning": "状态逐渐更强、更明显",
    "example": "",
    "weight": 3,
    "id": "sw-001903"
  },
  {
    "type": "pattern",
    "front": "because / since + clause",
    "meaning": "说明发生原因",
    "example": "",
    "weight": 3,
    "id": "sw-001905"
  },
  {
    "type": "pattern",
    "front": "as + clause, clause",
    "meaning": "随着某种变化，另一变化同时发生",
    "example": "As rents rose, some residents moved away.",
    "weight": 3,
    "id": "sw-001906"
  },
  {
    "type": "pattern",
    "front": "leave someone with + quantity",
    "meaning": "使某人最终只剩下资源或时间",
    "example": "The delay left us with one hour to explore.",
    "weight": 3,
    "id": "sw-001908"
  },
  {
    "type": "pattern",
    "front": "make something + adjective",
    "meaning": "造成某个状态",
    "example": "The strong wind made the ridge feel colder.",
    "weight": 3,
    "id": "sw-001909"
  },
  {
    "type": "pattern",
    "front": "drive up / drive down + prices",
    "meaning": "表达推高或压低价格的因果作用",
    "example": "Limited supply can drive up rents.",
    "weight": 3,
    "id": "sw-001910"
  },
  {
    "type": "pattern",
    "front": "price someone out of + place",
    "meaning": "因价格上涨导致某人负担不起某地",
    "example": "",
    "weight": 3,
    "id": "sw-001911"
  },
  {
    "type": "pattern",
    "front": "even though + clause, ...",
    "meaning": "承认事实仍强调相反结果",
    "example": "",
    "weight": 3,
    "id": "sw-001912"
  },
  {
    "type": "pattern",
    "front": "although + clause, ...",
    "meaning": "正式或中性地表达虽然",
    "example": "",
    "weight": 3,
    "id": "sw-001913"
  },
  {
    "type": "pattern",
    "front": "even if + clause, ...",
    "meaning": "即使假定某事发生，结果仍成立",
    "example": "",
    "weight": 3,
    "id": "sw-001914"
  },
  {
    "type": "pattern",
    "front": "instead of + -ing / noun",
    "meaning": "使用 A 而非 B，或做 A 而非做 B",
    "example": "I used leek instead of onion.",
    "weight": 3,
    "id": "sw-001916"
  },
  {
    "type": "pattern",
    "front": "without + -ing",
    "meaning": "表示没有做某动作",
    "example": "He left without checking the receipt.",
    "weight": 3,
    "id": "sw-001917"
  },
  {
    "type": "pattern",
    "front": "decide to A rather than B",
    "meaning": "在两种方案中明确选择",
    "example": "We decided to turn back rather than push on.",
    "weight": 3,
    "id": "sw-001918"
  },
  {
    "type": "pattern",
    "front": "Have you ever wondered why + clause?",
    "meaning": "自然引出知识和现象",
    "example": "",
    "weight": 3,
    "id": "sw-001919"
  },
  {
    "type": "pattern",
    "front": "This doesn't necessarily mean that + clause",
    "meaning": "防止将一般趋势误解成绝对事实",
    "example": "",
    "weight": 3,
    "id": "sw-001922"
  },
  {
    "type": "pattern",
    "front": "It helps explain why + clause",
    "meaning": "从前述事实推出解释",
    "example": "",
    "weight": 3,
    "id": "sw-001923"
  },
  {
    "type": "pattern",
    "front": "can be traced back to + period",
    "meaning": "追溯某种现象或制度的历史根源",
    "example": "",
    "weight": 3,
    "id": "sw-001924"
  },
  {
    "type": "pattern",
    "front": "some..., while others...",
    "meaning": "对照不同部分或类别",
    "example": "",
    "weight": 3,
    "id": "sw-001925"
  },
  {
    "type": "pattern",
    "front": "serve as + noun",
    "meaning": "充当某用途或功能",
    "example": "The square still serves as a gathering place.",
    "weight": 3,
    "id": "sw-001926"
  },
  {
    "type": "pattern",
    "front": "ask whether + clause",
    "meaning": "询问是否具备某种可能或条件",
    "example": "",
    "weight": 3,
    "id": "sw-001928"
  },
  {
    "type": "pattern",
    "front": "I'm not sure whether + clause",
    "meaning": "说明尚未确定的判断",
    "example": "I'm not sure whether I'll make it on time.",
    "weight": 3,
    "id": "sw-001929"
  },
  {
    "type": "pattern",
    "front": "no guarantee that + clause",
    "meaning": "明确表达不能保证",
    "example": "",
    "weight": 3,
    "id": "sw-001930"
  },
  {
    "type": "pattern",
    "front": "check whether + clause",
    "meaning": "核对事实是否成立",
    "example": "Check whether the booking includes bedding.",
    "weight": 3,
    "id": "sw-001931"
  },
  {
    "type": "pattern",
    "front": "struggle to + verb",
    "meaning": "做某事非常吃力",
    "example": "He was struggling to keep up with the group.",
    "weight": 3,
    "id": "sw-001933"
  },
  {
    "type": "pattern",
    "front": "keep up with + noun",
    "meaning": "在节奏、数量或进展上跟得上",
    "example": "",
    "weight": 3,
    "id": "sw-001934"
  },
  {
    "type": "pattern",
    "front": "factor in + noun",
    "meaning": "将因素计入评估或计划",
    "example": "We need to factor in time for the descent.",
    "weight": 3,
    "id": "sw-001935"
  },
  {
    "type": "pattern",
    "front": "leave a buffer for + noun",
    "meaning": "为意外情况留出余量",
    "example": "Leave a buffer for unexpected delays.",
    "weight": 3,
    "id": "sw-001936"
  },
  {
    "type": "pattern",
    "front": "make sure + clause",
    "meaning": "确保某事成立",
    "example": "",
    "weight": 3,
    "id": "sw-001937"
  },
  {
    "type": "pattern",
    "front": "choose a route you can reliably follow",
    "meaning": "谨慎选择可确认、可持续辨认的路线",
    "example": "",
    "weight": 3,
    "id": "sw-001938"
  },
  {
    "type": "pattern",
    "front": "could have + past participle",
    "meaning": "事后表示本来可以做得不同",
    "example": "I could have worded it better.",
    "weight": 3,
    "id": "sw-001939"
  },
  {
    "type": "pattern",
    "front": "had been + -ing when + clause",
    "meaning": "表达过去某动作进行中发生新事件",
    "example": "",
    "weight": 3,
    "id": "sw-001941"
  },
  {
    "type": "pattern",
    "front": "would have + past participle",
    "meaning": "表达过去假设结果",
    "example": "",
    "weight": 3,
    "id": "sw-001942"
  },
  {
    "type": "pattern",
    "front": "what something would have looked like",
    "meaning": "想象过去某物可能呈现的状态",
    "example": "",
    "weight": 3,
    "id": "sw-001943"
  },
  {
    "type": "sentence",
    "front": "Could I try these on? I'm not sure whether the waist will be too tight.",
    "meaning": "我能试穿一下吗？不确定腰部会不会太紧。",
    "example": "",
    "weight": 3,
    "id": "sw-001944"
  },
  {
    "type": "sentence",
    "front": "The legs fit well, but I'd prefer something a little less baggy.",
    "meaning": "裤腿挺合适，但我更希望它稍微不要那么宽松。",
    "example": "",
    "weight": 3,
    "id": "sw-001945"
  },
  {
    "type": "sentence",
    "front": "I tried to renew the book, but another patron has already placed a hold on it.",
    "meaning": "我试着续借这本书，但另一位读者已经预约了。",
    "example": "",
    "weight": 3,
    "id": "sw-001946"
  },
  {
    "type": "sentence",
    "front": "It's due back tomorrow, so I'll return it on time.",
    "meaning": "它明天到期，因此我会按时归还。",
    "example": "",
    "weight": 3,
    "id": "sw-001947"
  },
  {
    "type": "sentence",
    "front": "My boots kept sinking into the mud, so I planted my poles and shifted my weight carefully.",
    "meaning": "我的靴子不断陷进泥里，所以我撑稳登山杖并小心转移重心。",
    "example": "",
    "weight": 3,
    "id": "sw-001948"
  },
  {
    "type": "sentence",
    "front": "The path was too slippery, so we took a short detour around the puddle.",
    "meaning": "路太滑，我们短暂绕路避开水坑。",
    "example": "",
    "weight": 3,
    "id": "sw-001949"
  },
  {
    "type": "sentence",
    "front": "There seems to be a cold draft coming through the window. Will that be fixed before I move in?",
    "meaning": "窗户似乎有冷风漏进来。我搬进来之前能修好吗？",
    "example": "",
    "weight": 3,
    "id": "sw-001950"
  },
  {
    "type": "sentence",
    "front": "Are utilities included in the rent, or are they billed separately?",
    "meaning": "水电杂费包含在房租里，还是另行收费？",
    "example": "",
    "weight": 3,
    "id": "sw-001951"
  },
  {
    "type": "sentence",
    "front": "The courier attempted delivery while I was out, so I redirected the parcel to a pickup point.",
    "meaning": "我外出时快递员尝试配送，于是我把包裹改投到了自提点。",
    "example": "",
    "weight": 3,
    "id": "sw-001952"
  },
  {
    "type": "sentence",
    "front": "The tracking page says the parcel is ready for collection, but I haven't received the code yet.",
    "meaning": "物流页面显示包裹可领取，但我还没收到取件码。",
    "example": "",
    "weight": 3,
    "id": "sw-001953"
  },
  {
    "type": "sentence",
    "front": "Closely packed contour lines usually indicate a steep slope, while widely spaced lines suggest gentler terrain.",
    "meaning": "密集的等高线通常表示陡坡，间隔较大的线表示地势较缓。",
    "example": "",
    "weight": 3,
    "id": "sw-001954"
  },
  {
    "type": "sentence",
    "front": "We'll follow the switchbacks, cross the saddle and then crest the ridge.",
    "meaning": "我们沿之字形路线向上，经过鞍部后翻上山脊。",
    "example": "",
    "weight": 3,
    "id": "sw-001955"
  },
  {
    "type": "sentence",
    "front": "Shall we split the bill evenly, or just pay for what we had?",
    "meaning": "我们平均 AA，还是各付各的？",
    "example": "",
    "weight": 3,
    "id": "sw-001956"
  },
  {
    "type": "sentence",
    "front": "Could you print two double-sided copies and staple the pages together?",
    "meaning": "能双面打印两份，再把纸张分别订起来吗？",
    "example": "",
    "weight": 3,
    "id": "sw-001958"
  },
  {
    "type": "sentence",
    "front": "The printer jammed halfway through, and some of the text got cut off.",
    "meaning": "打印到一半卡纸了，还有部分文字被裁掉了。",
    "example": "",
    "weight": 3,
    "id": "sw-001959"
  },
  {
    "type": "sentence",
    "front": "I think this item rang up at the wrong price. Could you double-check it?",
    "meaning": "我觉得这件商品结账价格不对，能核对一下吗？",
    "example": "",
    "weight": 3,
    "id": "sw-001960"
  },
  {
    "type": "sentence",
    "front": "Go past the pharmacy and turn right at the traffic lights.",
    "meaning": "经过药店，在红绿灯处右转。",
    "example": "",
    "weight": 3,
    "id": "sw-001962"
  },
  {
    "type": "sentence",
    "front": "If you reach the bridge, you've gone too far. The entrance is easy to miss.",
    "meaning": "如果到桥那里就走过头了。入口很容易错过。",
    "example": "",
    "weight": 3,
    "id": "sw-001963"
  },
  {
    "type": "sentence",
    "front": "I worked up a sweat on the climb, and now the wind is cutting through my damp shirt.",
    "meaning": "刚才爬坡出了一身汗，现在冷风正透过湿衣服吹进来。",
    "example": "",
    "weight": 3,
    "id": "sw-001964"
  },
  {
    "type": "sentence",
    "front": "I'm starting to shiver. Let's find a sheltered spot and put on dry layers.",
    "meaning": "我开始发抖了。我们找个避风处换上干燥衣物吧。",
    "example": "",
    "weight": 3,
    "id": "sw-001965"
  },
  {
    "type": "sentence",
    "front": "Something was rustling in the bushes, and a deer suddenly stepped onto the trail.",
    "meaning": "灌木里有沙沙声，一只鹿突然走到路上。",
    "example": "",
    "weight": 3,
    "id": "sw-001966"
  },
  {
    "type": "sentence",
    "front": "Keep your distance and give the animal plenty of space.",
    "meaning": "保持距离，给动物留足空间。",
    "example": "",
    "weight": 3,
    "id": "sw-001967"
  },
  {
    "type": "sentence",
    "front": "Something's come up at work. Could we push the meeting back by an hour?",
    "meaning": "工作上临时有事，能把见面时间推迟一小时吗？",
    "example": "",
    "weight": 3,
    "id": "sw-001968"
  },
  {
    "type": "sentence",
    "front": "If you can't make it, we can take a rain check and pencil it in for next week.",
    "meaning": "如果你来不了，我们可以改天约，先暂定下周。",
    "example": "",
    "weight": 3,
    "id": "sw-001969"
  },
  {
    "type": "sentence",
    "front": "The bus is packed. Could you move over a little so I can squeeze past?",
    "meaning": "公交车太挤了，能稍微挪一下让我过去吗？",
    "example": "",
    "weight": 3,
    "id": "sw-001970"
  },
  {
    "type": "sentence",
    "front": "Here, you can have my seat. Let me move my bag out of the way.",
    "meaning": "您坐我的位置吧。我先把包挪开。",
    "example": "",
    "weight": 3,
    "id": "sw-001971"
  },
  {
    "type": "sentence",
    "front": "The holes don't line up, so I need to loosen the screws and adjust the panel.",
    "meaning": "孔位对不齐，我得松开螺丝调整木板。",
    "example": "",
    "weight": 3,
    "id": "sw-001972"
  },
  {
    "type": "sentence",
    "front": "One screw went in at an angle, and the bookshelf is still wobbling.",
    "meaning": "有一颗螺丝拧歪了，书架还在晃。",
    "example": "",
    "weight": 3,
    "id": "sw-001973"
  },
  {
    "type": "sentence",
    "front": "Many European town squares can be traced back to the Middle Ages.",
    "meaning": "许多欧洲城镇广场可以追溯到中世纪。",
    "example": "",
    "weight": 3,
    "id": "sw-001974"
  },
  {
    "type": "sentence",
    "front": "Over time, shops and inns sprang up around the marketplace, turning it into a trading hub.",
    "meaning": "随着时间推移，商店与旅馆围绕集市出现，使其成为贸易枢纽。",
    "example": "",
    "weight": 3,
    "id": "sw-001975"
  },
  {
    "type": "sentence",
    "front": "Are these ancient walls original, or have they been restored?",
    "meaning": "这些古墙是原来的，还是修复过的？",
    "example": "",
    "weight": 3,
    "id": "sw-001976"
  },
  {
    "type": "sentence",
    "front": "It's hard to imagine what this city would have looked like two thousand years ago.",
    "meaning": "很难想象两千年前这座城市是什么样子。",
    "example": "",
    "weight": 3,
    "id": "sw-001977"
  },
  {
    "type": "sentence",
    "front": "There isn't enough room for both groups to pass at once.",
    "meaning": "这里空间不够两支队伍同时通过。",
    "example": "",
    "weight": 3,
    "id": "sw-001978"
  },
  {
    "type": "sentence",
    "front": "Let's stop on stable ground and let the oncoming hikers through.",
    "meaning": "我们停在稳固的地面，让迎面队伍先通过。",
    "example": "",
    "weight": 3,
    "id": "sw-001979"
  },
  {
    "type": "sentence",
    "front": "I didn't mean to come across as rude. What I meant was that we could try another plan.",
    "meaning": "我并不是想显得无礼，我真正的意思是我们可以换个方案。",
    "example": "",
    "weight": 3,
    "id": "sw-001980"
  },
  {
    "type": "sentence",
    "front": "Looking back, I could have worded it better. I'm glad we talked it through.",
    "meaning": "回头想想，我本可以表达得更好。很高兴我们把事情谈开了。",
    "example": "",
    "weight": 3,
    "id": "sw-001981"
  },
  {
    "type": "sentence",
    "front": "The shirt is badly wrinkled. I'll smooth out the creases before I put it on.",
    "meaning": "这件衬衫皱得很厉害，我穿之前要把折痕熨平。",
    "example": "",
    "weight": 3,
    "id": "sw-001982"
  },
  {
    "type": "sentence",
    "front": "I nearly pressed the hot iron onto a plastic button, but I caught myself just in time.",
    "meaning": "我差点把热熨斗压到塑料纽扣上，但及时停住了。",
    "example": "",
    "weight": 3,
    "id": "sw-001983"
  },
  {
    "type": "sentence",
    "front": "My Wi-Fi keeps dropping out, and the video takes forever to load.",
    "meaning": "我的 Wi-Fi 不断掉线，视频加载特别慢。",
    "example": "",
    "weight": 3,
    "id": "sw-001984"
  },
  {
    "type": "sentence",
    "front": "I restarted the router, reconnected my laptop and the video finally played smoothly.",
    "meaning": "我重启路由器、重新连接电脑后，视频终于播放流畅了。",
    "example": "",
    "weight": 3,
    "id": "sw-001985"
  },
  {
    "type": "sentence",
    "front": "When demand is high and housing supply is limited, rents tend to rise.",
    "meaning": "需求高而住房供给有限时，租金往往上涨。",
    "example": "",
    "weight": 3,
    "id": "sw-001986"
  },
  {
    "type": "sentence",
    "front": "Moving farther out may be cheaper, but there's a trade-off between rent and commuting time.",
    "meaning": "住得远一些可能便宜，但需要权衡房租与通勤时间。",
    "example": "",
    "weight": 3,
    "id": "sw-001987"
  },
  {
    "type": "sentence",
    "front": "The sea was getting choppy, and the ferry started rocking from side to side.",
    "meaning": "海面开始波涛杂乱，渡轮左右摇晃。",
    "example": "",
    "weight": 3,
    "id": "sw-001988"
  },
  {
    "type": "sentence",
    "front": "I felt a little queasy during the crossing, but the sea eventually calmed down.",
    "meaning": "横渡时我有点反胃，但海面最终平静下来。",
    "example": "",
    "weight": 3,
    "id": "sw-001989"
  },
  {
    "type": "sentence",
    "front": "The sun is beating down on us, and there's hardly any shade on this hillside.",
    "meaning": "太阳火辣辣地晒着我们，这片山坡几乎没有阴凉处。",
    "example": "",
    "weight": 3,
    "id": "sw-001990"
  },
  {
    "type": "sentence",
    "front": "He looks unsteady and feels light-headed. We should stop and get help rather than push on.",
    "meaning": "他站得不稳、头晕。我们应该停下寻求援助，而不是继续往前。",
    "example": "",
    "weight": 3,
    "id": "sw-001991"
  },
  {
    "type": "sentence",
    "front": "The smoke alarm went off because I'd accidentally burnt the toast.",
    "meaning": "我不小心烤焦了面包，导致烟雾报警器响起。",
    "example": "",
    "weight": 3,
    "id": "sw-001992"
  },
  {
    "type": "sentence",
    "front": "After making sure there was no fire, we aired out the kitchen, but the smell lingered.",
    "meaning": "确认没着火后，我们给厨房通风，但味道久久没散。",
    "example": "",
    "weight": 3,
    "id": "sw-001993"
  },
  {
    "type": "sentence",
    "front": "The ATM retained my card instead of ejecting it, and the transaction couldn't be completed.",
    "meaning": "没退卡却把卡吞了，交易也未能完成。",
    "example": "",
    "weight": 3,
    "id": "sw-001994"
  },
  {
    "type": "sentence",
    "front": "I'd like to block the card and request a replacement. Could you also check for any unexpected charge?",
    "meaning": "我想停用卡并申请补卡。还能帮我核对是否有异常扣款吗？",
    "example": "",
    "weight": 3,
    "id": "sw-001995"
  },
  {
    "type": "sentence",
    "front": "The leaves are drooping even though the soil is soaking wet. I may have overwatered it.",
    "meaning": "土壤已湿透，叶子却在下垂。我可能浇水过多了。",
    "example": "",
    "weight": 3,
    "id": "sw-001996"
  },
  {
    "type": "sentence",
    "front": "I emptied the saucer, checked the drainage holes and let the soil dry out gradually.",
    "meaning": "我倒掉托盘积水、检查排水孔，让土壤逐渐变干。",
    "example": "",
    "weight": 3,
    "id": "sw-001997"
  },
  {
    "type": "sentence",
    "front": "GPS picks up satellite signals and uses their travel times to work out your position.",
    "meaning": "接收卫星信号，利用传播时间计算你的位置。",
    "example": "",
    "weight": 3,
    "id": "sw-001998"
  },
  {
    "type": "sentence",
    "front": "Tall buildings can block or reflect the signals, which makes the reading less accurate.",
    "meaning": "高楼可能阻挡或反射信号，使定位不那么准确。",
    "example": "",
    "weight": 3,
    "id": "sw-001999"
  },
  {
    "type": "sentence",
    "front": "My checked bag hasn't turned up. Where can I file a missing baggage report?",
    "meaning": "我的托运行李一直没出现。我在哪里登记行李未到达？",
    "example": "",
    "weight": 3,
    "id": "sw-002000"
  },
  {
    "type": "sentence",
    "front": "Could the suitcase be delivered to my accommodation if the airline locates it later?",
    "meaning": "如果航空公司之后找到箱子，能送到我的住处吗？",
    "example": "",
    "weight": 3,
    "id": "sw-002001"
  },
  {
    "type": "sentence",
    "front": "The sole of my boot is peeling away and keeps catching on rocks.",
    "meaning": "我的靴子鞋底开胶，还不断勾住石头。",
    "example": "",
    "weight": 3,
    "id": "sw-002002"
  },
  {
    "type": "sentence",
    "front": "This is only a temporary fix. We need to reassess the route rather than risk a fall.",
    "meaning": "这只是临时修补。我们需要重新评估路线，而不是冒险摔倒。",
    "example": "",
    "weight": 3,
    "id": "sw-002003"
  },
  {
    "type": "sentence",
    "front": "The bag handle suddenly snapped, and all the groceries spilled onto the pavement.",
    "meaning": "购物袋提手突然断了，东西洒落在人行道上。",
    "example": "",
    "weight": 3,
    "id": "sw-002004"
  },
  {
    "type": "sentence",
    "front": "An apple rolled under a parked car, but a passer-by helped me retrieve it.",
    "meaning": "一个苹果滚到停着的车下，但一位路人帮我取回了。",
    "example": "",
    "weight": 3,
    "id": "sw-002005"
  },
  {
    "type": "sentence",
    "front": "Sorry, I didn't realize my mic was still on. Let me mute myself.",
    "meaning": "抱歉，我没意识到麦克风还开着。我先静音。",
    "example": "",
    "weight": 3,
    "id": "sw-002006"
  },
  {
    "type": "sentence",
    "front": "I accidentally shared the wrong window, and now my voice is breaking up.",
    "meaning": "我不小心共享了错误窗口，现在声音又断断续续了。",
    "example": "",
    "weight": 3,
    "id": "sw-002007"
  },
  {
    "type": "sentence",
    "front": "Has anyone handed in a black wallet? I think I left mine here earlier.",
    "meaning": "有人上交黑色钱包吗？我觉得自己早些时候落在这儿了。",
    "example": "",
    "weight": 3,
    "id": "sw-002008"
  },
  {
    "type": "sentence",
    "front": "I retraced my steps, described the wallet and finally got it back from lost and found.",
    "meaning": "我原路寻找、描述钱包外观，终于从失物招领处取回。",
    "example": "",
    "weight": 3,
    "id": "sw-002009"
  },
  {
    "type": "sentence",
    "front": "Cheap rents initially attracted artists, and the neighbourhood gained a reputation for its creativity.",
    "meaning": "低廉租金起初吸引艺术家，街区逐渐以创意氛围闻名。",
    "example": "",
    "weight": 3,
    "id": "sw-002010"
  },
  {
    "type": "sentence",
    "front": "As property values rose, some long-time residents were priced out of the area.",
    "meaning": "随着房价上涨，一些老居民已难以负担当地生活成本。",
    "example": "",
    "weight": 3,
    "id": "sw-002011"
  },
  {
    "type": "sentence",
    "front": "I reached the station, only to find that my train had been cancelled.",
    "meaning": "我赶到车站，结果却发现火车取消了。",
    "example": "",
    "weight": 3,
    "id": "sw-002012"
  },
  {
    "type": "sentence",
    "front": "Is my original ticket still valid on the next service, or do I need to rebook?",
    "meaning": "我的原票仍能用于下一班车吗，还是需要改签？",
    "example": "",
    "weight": 3,
    "id": "sw-002013"
  },
  {
    "type": "sentence",
    "front": "The water looks clear, but that doesn't necessarily mean it's safe to drink.",
    "meaning": "水看起来清澈，但不一定意味着能安全饮用。",
    "example": "",
    "weight": 3,
    "id": "sw-002014"
  },
  {
    "type": "sentence",
    "front": "Keep untreated water separate from your clean bottle to avoid cross-contamination.",
    "meaning": "把未经处理的水与干净水瓶分开，避免交叉污染。",
    "example": "",
    "weight": 3,
    "id": "sw-002015"
  },
  {
    "type": "sentence",
    "front": "I was halfway through cooking when I realized I'd run out of onions.",
    "meaning": "做饭做到一半时，我发现洋葱用完了。",
    "example": "",
    "weight": 3,
    "id": "sw-002016"
  },
  {
    "type": "sentence",
    "front": "The recipe called for two onions, so I improvised and substituted leek instead.",
    "meaning": "食谱要两个洋葱，所以我临时想办法用韭葱替代。",
    "example": "",
    "weight": 3,
    "id": "sw-002017"
  },
  {
    "type": "sentence",
    "front": "The clothes came out soaking wet because the machine hadn't completed the spin cycle.",
    "meaning": "洗出来的衣服湿透了，因为机器没完成脱水程序。",
    "example": "",
    "weight": 3,
    "id": "sw-002018"
  },
  {
    "type": "sentence",
    "front": "I took out a few towels, redistributed the rest and ran another spin cycle.",
    "meaning": "我拿出几条毛巾，把其余衣物分布均匀，再运行一次脱水。",
    "example": "",
    "weight": 3,
    "id": "sw-002019"
  },
  {
    "type": "sentence",
    "front": "Would you mind moving your bag a little so I can use the power outlet?",
    "meaning": "你介意把包挪一下让我用插座吗？",
    "example": "",
    "weight": 3,
    "id": "sw-002021"
  },
  {
    "type": "sentence",
    "front": "I received several compliments, but I kept dwelling on one harsh remark.",
    "meaning": "我收到了不少赞美，却一直纠结一句刻薄评价。",
    "example": "",
    "weight": 3,
    "id": "sw-002022"
  },
  {
    "type": "sentence",
    "front": "Stepping back can help us look at the bigger picture and put criticism into perspective.",
    "meaning": "跳出当下有助于我们看到整体情况、客观看待批评。",
    "example": "",
    "weight": 3,
    "id": "sw-002023"
  },
  {
    "type": "sentence",
    "front": "I think there's been a mix-up. Someone else's belongings are already on my assigned bed.",
    "meaning": "我觉得安排弄错了。分配给我的床上已有别人的东西。",
    "example": "",
    "weight": 3,
    "id": "sw-002024"
  },
  {
    "type": "sentence",
    "front": "Could I move to another available bunk and get some fresh bedding?",
    "meaning": "我能换到别的空床位并领取干净床品吗？",
    "example": "",
    "weight": 3,
    "id": "sw-002025"
  },
  {
    "type": "sentence",
    "front": "We need to factor in the descent, and we're running out of daylight.",
    "meaning": "我们得考虑下山时间，天黑前剩余时间不多了。",
    "example": "",
    "weight": 3,
    "id": "sw-002026"
  },
  {
    "type": "sentence",
    "front": "We've reached our turnaround time, so let's cut the hike short rather than push on.",
    "meaning": "已经到了预定折返时间，我们提前结束徒步吧，别继续向前。",
    "example": "",
    "weight": 3,
    "id": "sw-002027"
  },
  {
    "type": "sentence",
    "front": "They look fine on the outside, but they feel unusually soft when I press them gently.",
    "meaning": "它们外观看着正常，但轻轻按压时软得异常。",
    "example": "",
    "weight": 3,
    "id": "sw-002028"
  },
  {
    "type": "sentence",
    "front": "I picked out firmer peaches and separated the bruised fruit from the rest.",
    "meaning": "我挑了较结实的桃子，并把碰伤水果与其他水果分开。",
    "example": "",
    "weight": 3,
    "id": "sw-002029"
  },
  {
    "type": "sentence",
    "front": "There's a tiny speck of dust trapped underneath, and the bubble won't budge.",
    "meaning": "下面卡了一粒小灰尘，气泡怎么都推不动。",
    "example": "",
    "weight": 3,
    "id": "sw-002030"
  },
  {
    "type": "sentence",
    "front": "I lifted the corner, removed the dust and smoothed the protector out carefully.",
    "meaning": "我掀起边角清灰，并小心把保护膜抚平。",
    "example": "",
    "weight": 3,
    "id": "sw-002031"
  },
  {
    "type": "sentence",
    "front": "The lift is out of order, and this suitcase is too bulky to carry comfortably.",
    "meaning": "电梯坏了，这箱子体积太大不好搬。",
    "example": "",
    "weight": 3,
    "id": "sw-002032"
  },
  {
    "type": "sentence",
    "front": "I hauled it up the stairs, stopped to catch my breath and switched hands halfway up.",
    "meaning": "我费力搬上楼，途中停下喘口气，爬到一半还换了只手。",
    "example": "",
    "weight": 3,
    "id": "sw-002033"
  },
  {
    "type": "sentence",
    "front": "Small recurring fees can add up over time, especially if you barely use the services.",
    "meaning": "小额定期费用会长期累积，尤其在几乎不用服务时。",
    "example": "",
    "weight": 3,
    "id": "sw-002034"
  },
  {
    "type": "sentence",
    "front": "There's a catch: the subscriptions renew automatically, and you might end up paying for something you never use.",
    "meaning": "但有个问题：订阅会自动续费，你可能最后一直为从不用的东西付",
    "example": "",
    "weight": 3,
    "id": "sw-002035"
  },
  {
    "type": "sentence",
    "front": "Is there any chance an earlier slot might open up if someone cancels?",
    "meaning": "如果有人取消预约，可能有更早的时段空出来吗？",
    "example": "",
    "weight": 3,
    "id": "sw-002036"
  },
  {
    "type": "sentence",
    "front": "Rather than wait around, I booked the afternoon slot and explored the market in the meantime.",
    "meaning": "与其干等，我订了下午的时段，期间先去逛了集市。",
    "example": "",
    "weight": 3,
    "id": "sw-002037"
  },
  {
    "type": "sentence",
    "front": "Visibility is dropping sharply, and I can barely make out the next trail marker.",
    "meaning": "能见度正在急剧下降，我几乎辨认不出下一个路标。",
    "example": "",
    "weight": 3,
    "id": "sw-002038"
  },
  {
    "type": "sentence",
    "front": "Let's stay close together, confirm our position and reassess the route rather than blindly press on.",
    "meaning": "大家保持靠近、确认位置、重新评估路线，不要盲目前进。",
    "example": "",
    "weight": 3,
    "id": "sw-002039"
  },
  {
    "type": "ladder",
    "front": "slightly green / slightly crooked",
    "meaning": "稍微发青 / 略微歪斜",
    "example": "",
    "weight": 3,
    "id": "sw-002040"
  },
  {
    "type": "ladder",
    "front": "fairly firm / fairly spacious",
    "meaning": "比较结实 / 比较宽敞",
    "example": "",
    "weight": 3,
    "id": "sw-002041"
  },
  {
    "type": "ladder",
    "front": "unusually soft / unusually slow",
    "meaning": "异常柔软 / 异常缓慢",
    "example": "",
    "weight": 3,
    "id": "sw-002042"
  },
  {
    "type": "ladder",
    "front": "surprisingly heavy / surprisingly well",
    "meaning": "出人意料地重 / 效果意外地好",
    "example": "",
    "weight": 3,
    "id": "sw-002043"
  },
  {
    "type": "ladder",
    "front": "barely noticeable / barely visible",
    "meaning": "几乎看不出来 / 几乎看不见",
    "example": "",
    "weight": 3,
    "id": "sw-002044"
  },
  {
    "type": "ladder",
    "front": "hardly any shade / hardly ever use",
    "meaning": "几乎没阴凉处 / 几乎从不使用",
    "example": "",
    "weight": 3,
    "id": "sw-002045"
  },
  {
    "type": "ladder",
    "front": "press gently / firmly",
    "meaning": "轻轻按 / 稳稳按紧",
    "example": "",
    "weight": 3,
    "id": "sw-002048"
  },
  {
    "type": "ladder",
    "front": "carefully set down",
    "meaning": "小心放下",
    "example": "",
    "weight": 3,
    "id": "sw-002050"
  },
  {
    "type": "ladder",
    "front": "damp / soaking wet / dry",
    "meaning": "潮湿 / 湿透 / 干燥",
    "example": "",
    "weight": 3,
    "id": "sw-002053"
  },
  {
    "type": "ladder",
    "front": "wobbly / sturdy",
    "meaning": "晃动不稳 / 牢固",
    "example": "",
    "weight": 3,
    "id": "sw-002054"
  },
  {
    "type": "ladder",
    "front": "crumpled / wrinkled / bruised",
    "meaning": "揉皱 / 起皱 / 碰伤",
    "example": "",
    "weight": 3,
    "id": "sw-002055"
  },
  {
    "type": "ladder",
    "front": "stiff / sore / numb",
    "meaning": "僵硬 / 酸痛 / 麻木",
    "example": "",
    "weight": 3,
    "id": "sw-002056"
  },
  {
    "type": "ladder",
    "front": "bulky / heavy / awkward",
    "meaning": "体积大 / 重量大 / 难搬运",
    "example": "",
    "weight": 3,
    "id": "sw-002057"
  },
  {
    "type": "ladder",
    "front": "ripe / overripe / rotten",
    "meaning": "成熟 / 过熟 / 腐烂",
    "example": "",
    "weight": 3,
    "id": "sw-002058"
  },
  {
    "type": "ladder",
    "front": "droop / perk up",
    "meaning": "下垂 / 恢复生气",
    "example": "",
    "weight": 3,
    "id": "sw-002059"
  },
  {
    "type": "ladder",
    "front": "peel away / come off",
    "meaning": "逐渐剥离 / 整块脱落",
    "example": "",
    "weight": 3,
    "id": "sw-002060"
  },
  {
    "type": "ladder",
    "front": "jam / freeze / lag",
    "meaning": "卡住 / 程序无响应 / 延迟",
    "example": "",
    "weight": 3,
    "id": "sw-002061"
  },
  {
    "type": "ladder",
    "front": "drop out / break up / cut out",
    "meaning": "网络断连 / 声音断续 / 声音暂失",
    "example": "",
    "weight": 3,
    "id": "sw-002062"
  },
  {
    "type": "ladder",
    "front": "turn up / go missing",
    "meaning": "出现 / 不见了",
    "example": "",
    "weight": 3,
    "id": "sw-002063"
  },
  {
    "type": "ladder",
    "front": "spring up / shut down",
    "meaning": "兴起 / 关闭",
    "example": "",
    "weight": 3,
    "id": "sw-002065"
  },
  {
    "type": "ladder",
    "front": "roll in / die down",
    "meaning": "涌来 / 渐渐平息",
    "example": "",
    "weight": 3,
    "id": "sw-002066"
  },
  {
    "type": "ladder",
    "front": "go past / go to",
    "meaning": "经过并继续 / 前往",
    "example": "",
    "weight": 3,
    "id": "sw-002067"
  },
  {
    "type": "ladder",
    "front": "locate / trace / track",
    "meaning": "确定位置 / 追查去向 / 持续追踪",
    "example": "",
    "weight": 3,
    "id": "sw-002068"
  },
  {
    "type": "ladder",
    "front": "restore / preserve",
    "meaning": "修复 / 保护原有状态",
    "example": "",
    "weight": 3,
    "id": "sw-002069"
  },
  {
    "type": "ladder",
    "front": "split evenly / pay for what you had",
    "meaning": "平均分摊 / 各付各的",
    "example": "",
    "weight": 3,
    "id": "sw-002070"
  },
  {
    "type": "ladder",
    "front": "be due to / due to",
    "meaning": "按计划即将 / 由于",
    "example": "",
    "weight": 3,
    "id": "sw-002072"
  },
  {
    "type": "ladder",
    "front": "run low on / run out of",
    "meaning": "快耗尽 / 已耗尽",
    "example": "",
    "weight": 3,
    "id": "sw-002073"
  },
  {
    "type": "ladder",
    "front": "fully booked / sold out",
    "meaning": "时段或床位订满 / 商品门票售罄",
    "example": "",
    "weight": 3,
    "id": "sw-002074"
  },
  {
    "type": "ladder",
    "front": "disruption / delay / cancellation",
    "meaning": "服务中断 / 延误 / 取消",
    "example": "",
    "weight": 3,
    "id": "sw-002075"
  },
  {
    "type": "word",
    "front": "pick up",
    "meaning": "顺便买",
    "example": "",
    "weight": 3,
    "id": "sw-002076"
  },
  {
    "type": "word",
    "front": "pick up",
    "meaning": "接收信号",
    "example": "",
    "weight": 3,
    "id": "sw-002077"
  },
  {
    "type": "word",
    "front": "pick up",
    "meaning": "风雨增强",
    "example": "",
    "weight": 3,
    "id": "sw-002078"
  },
  {
    "type": "word",
    "front": "pick up",
    "meaning": "接上进度",
    "example": "",
    "weight": 3,
    "id": "sw-002079"
  },
  {
    "type": "word",
    "front": "go off",
    "meaning": "报警器响",
    "example": "",
    "weight": 3,
    "id": "sw-002080"
  },
  {
    "type": "word",
    "front": "go off",
    "meaning": "食物变质（英式）",
    "example": "",
    "weight": 3,
    "id": "sw-002081"
  },
  {
    "type": "word",
    "front": "come across",
    "meaning": "偶然遇到",
    "example": "",
    "weight": 3,
    "id": "sw-002082"
  },
  {
    "type": "word",
    "front": "come across",
    "meaning": "给人留下某种印象",
    "example": "",
    "weight": 3,
    "id": "sw-002083"
  },
  {
    "type": "word",
    "front": "turn out",
    "meaning": "结果证明",
    "example": "",
    "weight": 3,
    "id": "sw-002084"
  },
  {
    "type": "word",
    "front": "turn out",
    "meaning": "做出的效果",
    "example": "",
    "weight": 3,
    "id": "sw-002085"
  },
  {
    "type": "ladder",
    "front": "bring up",
    "meaning": "提起话题",
    "example": "",
    "weight": 3,
    "id": "sw-002086"
  },
  {
    "type": "ladder",
    "front": "look into",
    "meaning": "调查、查明",
    "example": "",
    "weight": 3,
    "id": "sw-002087"
  },
  {
    "type": "ladder",
    "front": "get back to",
    "meaning": "稍后回复",
    "example": "",
    "weight": 3,
    "id": "sw-002088"
  },
  {
    "type": "ladder",
    "front": "hold up",
    "meaning": "耽误进度、延迟",
    "example": "",
    "weight": 3,
    "id": "sw-002089"
  },
  {
    "type": "word",
    "front": "work out",
    "meaning": "计算出",
    "example": "",
    "weight": 3,
    "id": "sw-002090"
  },
  {
    "type": "word",
    "front": "work out",
    "meaning": "找到解决办法",
    "example": "",
    "weight": 3,
    "id": "sw-002091"
  },
  {
    "type": "word",
    "front": "work out",
    "meaning": "锻炼",
    "example": "",
    "weight": 3,
    "id": "sw-002092"
  },
  {
    "type": "word",
    "front": "set off",
    "meaning": "触发警报",
    "example": "",
    "weight": 3,
    "id": "sw-002093"
  },
  {
    "type": "word",
    "front": "set off",
    "meaning": "出发",
    "example": "",
    "weight": 3,
    "id": "sw-002094"
  },
  {
    "type": "word",
    "front": "take off",
    "meaning": "脱下一层衣服",
    "example": "",
    "weight": 3,
    "id": "sw-002095"
  },
  {
    "type": "word",
    "front": "take off",
    "meaning": "飞机起飞",
    "example": "",
    "weight": 3,
    "id": "sw-002096"
  },
  {
    "type": "word",
    "front": "give way",
    "meaning": "让行",
    "example": "",
    "weight": 3,
    "id": "sw-002097"
  },
  {
    "type": "word",
    "front": "give way",
    "meaning": "突然失去支撑",
    "example": "",
    "weight": 3,
    "id": "sw-002098"
  },
  {
    "type": "ladder",
    "front": "flicker / dim / go out",
    "meaning": "闪烁／逐渐变暗／彻底熄灭",
    "example": "",
    "weight": 3,
    "id": "sw-002099"
  },
  {
    "type": "ladder",
    "front": "faint / muffled / distorted / breaking up / cutting out",
    "meaning": "声音弱／闷且模糊／失真／断断续续／中断",
    "example": "",
    "weight": 3,
    "id": "sw-002100"
  },
  {
    "type": "ladder",
    "front": "stumble / stagger / sway / wobble / shake",
    "meaning": "绊得踉跄／站不稳／缓缓摇摆／不稳定地晃／震动",
    "example": "",
    "weight": 3,
    "id": "sw-002101"
  },
  {
    "type": "ladder",
    "front": "catch / make out / get through",
    "meaning": "听到一部分／勉强辨清／成功接通",
    "example": "",
    "weight": 3,
    "id": "sw-002102"
  },
  {
    "type": "ladder",
    "front": "loose / snug / tight / taut / secure",
    "meaning": "松／贴合适中／紧／绷紧／固定牢固",
    "example": "",
    "weight": 3,
    "id": "sw-002103"
  },
  {
    "type": "ladder",
    "front": "stuck / jammed / wedged / caught on / won't budge",
    "meaning": "卡住／机械卡死／夹在狭小空间／被勾住／纹丝不动",
    "example": "",
    "weight": 3,
    "id": "sw-002104"
  },
  {
    "type": "ladder",
    "front": "sway / whip around / flap / sag",
    "meaning": "摇摆／猛烈甩动／拍打／下垂",
    "example": "",
    "weight": 3,
    "id": "sw-002105"
  },
  {
    "type": "ladder",
    "front": "blot / dab / soak up / rinse / scrub / scrape off",
    "meaning": "按压吸干／轻点涂抹／吸收／冲洗／用力刷／刮除",
    "example": "",
    "weight": 3,
    "id": "sw-002106"
  },
  {
    "type": "ladder",
    "front": "snap / fray / tear / crack / shatter",
    "meaning": "突然断裂／纤维散线／撕裂／裂纹／碎成很多片",
    "example": "",
    "weight": 3,
    "id": "sw-002107"
  },
  {
    "type": "ladder",
    "front": "beep / hum / thump / rumble / howl / creak / crunch",
    "meaning": "哔／嗡／咚／隆隆／呼啸／吱呀／嘎吱",
    "example": "",
    "weight": 3,
    "id": "sw-002108"
  },
  {
    "type": "ladder",
    "front": "headlamp / head torch; rainfly / flysheet; stake / peg",
    "meaning": "头灯；外帐；地钉（美国／英国常用表达）",
    "example": "",
    "weight": 3,
    "id": "sw-002111"
  },
  {
    "type": "ladder",
    "front": "lights flicker → power goes out → breaker trips → reset → power comes back on",
    "meaning": "灯闪烁 → 停电 → 跳闸 → 复位 → 恢复供电",
    "example": "",
    "weight": 3,
    "id": "sw-002112"
  },
  {
    "type": "ladder",
    "front": "empty pockets → tray → detector beeps → step aside → check → repack",
    "meaning": "掏空口袋 → 托盘 → 警报 → 站一边 → 检查 → 重新收拾",
    "example": "",
    "weight": 3,
    "id": "sw-002113"
  },
  {
    "type": "ladder",
    "front": "pick up pace → fall behind → gap widens → wait up → catch up → headcount",
    "meaning": "加速 → 掉队 → 间距扩大 → 等待 → 赶上 → 清点人数",
    "example": "",
    "weight": 3,
    "id": "sw-002114"
  },
  {
    "type": "ladder",
    "front": "bad reception → break up → cut out → call drops → call back → get through",
    "meaning": "信号差 → 声音断续 → 中断 → 掉线 → 回拨 → 接通",
    "example": "",
    "weight": 3,
    "id": "sw-002115"
  },
  {
    "type": "ladder",
    "front": "notification → scan QR → manual code → pop open → wedged → pull out",
    "meaning": "收到通知 → 扫码 → 手动输入 → 弹开 → 卡住拉出",
    "example": "",
    "weight": 3,
    "id": "sw-002116"
  },
  {
    "type": "ladder",
    "front": "wind picks up → straps whip → stagger → brace → lull → reassess",
    "meaning": "风增大 → 背带甩动 → 踉跄 → 稳住 → 风暂缓重新评估",
    "example": "",
    "weight": 3,
    "id": "sw-002117"
  },
  {
    "type": "ladder",
    "front": "step out → door slams shut → keys left behind → locked out → spare key → let in",
    "meaning": "出门 → 门猛关 → 钥匙落下 → 被锁 → 备用钥匙 → 开门",
    "example": "",
    "weight": 3,
    "id": "sw-002118"
  },
  {
    "type": "ladder",
    "front": "comb through → spray → snip/trim → blow-dry → even out → tidy up",
    "meaning": "梳开 → 喷水 → 修剪 → 吹干 → 修匀 → 整理",
    "example": "",
    "weight": 3,
    "id": "sw-002119"
  },
  {
    "type": "ladder",
    "front": "clouds build → thunder rumbles → lightning flashes → rain pelts → drenched",
    "meaning": "云聚集 → 雷声隆隆 → 闪电 → 暴雨 → 浑身湿透",
    "example": "",
    "weight": 3,
    "id": "sw-002120"
  },
  {
    "type": "ladder",
    "front": "bass thumps → keeps awake → knock → keep it down → quiet down",
    "meaning": "低音咚咚 → 无法睡 → 敲门 → 请求降低音量 → 安静",
    "example": "",
    "weight": 3,
    "id": "sw-002121"
  },
  {
    "type": "ladder",
    "front": "announcement → muffled → check board → platform change → head for → board",
    "meaning": "广播 → 模糊 → 查信息屏 → 更换站台 → 直奔登车",
    "example": "",
    "weight": 3,
    "id": "sw-002122"
  },
  {
    "type": "ladder",
    "front": "buzz → hover → gather → swat → bite → itch → repellent",
    "meaning": "嗡嗡飞 → 盘旋 → 聚集 → 挥赶 → 叮咬 → 发痒驱虫",
    "example": "",
    "weight": 3,
    "id": "sw-002123"
  },
  {
    "type": "ladder",
    "front": "alarm goes off → hit snooze → oversleep → spring out → throw on → rush out",
    "meaning": "闹钟响 → 贪睡 → 睡过头 → 猛起 → 套衣服 → 冲出门",
    "example": "",
    "weight": 3,
    "id": "sw-002124"
  },
  {
    "type": "ladder",
    "front": "grip → twist → won't budge → wrap towel → unscrew → tip → scrape out",
    "meaning": "握紧 → 拧 → 不动 → 裹毛巾 → 拧开 → 倾斜 → 刮出",
    "example": "",
    "weight": 3,
    "id": "sw-002125"
  },
  {
    "type": "ladder",
    "front": "light up → dim → flicker → go out → fumble → switch on → point beam",
    "meaning": "照亮 → 变暗 → 闪烁 → 熄灭 → 摸索 → 开启 → 对准",
    "example": "",
    "weight": 3,
    "id": "sw-002126"
  },
  {
    "type": "ladder",
    "front": "spill → soak into → blot → dab detergent → let sit → rinse → come out",
    "meaning": "洒出 → 渗进 → 轻按吸干 → 点涂 → 静置 → 冲洗 → 洗掉",
    "example": "",
    "weight": 3,
    "id": "sw-002127"
  },
  {
    "type": "ladder",
    "front": "select → tap → charged → stuck → not dispense → contact support → refund",
    "meaning": "选择 → 刷卡 → 扣款 → 卡住 → 不出货 → 联系客服 → 退款",
    "example": "",
    "weight": 3,
    "id": "sw-002128"
  },
  {
    "type": "ladder",
    "front": "spread → assemble → clip → stake down → pull taut → tighten → take apart → pack",
    "meaning": "铺开 → 组装 → 扣上 → 固定 → 绷紧 → 收紧 → 拆开 → 收纳",
    "example": "",
    "weight": 3,
    "id": "sw-002129"
  },
  {
    "type": "ladder",
    "front": "flush → fails to drain → rises → close valve → plunger → clear → mop",
    "meaning": "冲水 → 不排水 → 上涨 → 关阀 → 疏通 → 排走拖净",
    "example": "",
    "weight": 3,
    "id": "sw-002130"
  },
  {
    "type": "ladder",
    "front": "button comes off → snap → thread needle → line up → stitch → knot → snip",
    "meaning": "纽扣脱落 → 线断 → 穿针 → 对齐 → 缝回 → 打结 → 剪线",
    "example": "",
    "weight": 3,
    "id": "sw-002131"
  },
  {
    "type": "ladder",
    "front": "step onto → planks creak → bridge sways → grip → cross → step off",
    "meaning": "踏上 → 木板吱呀 → 桥摇摆 → 握紧 → 通过 → 走下",
    "example": "",
    "weight": 3,
    "id": "sw-002132"
  },
  {
    "type": "word",
    "front": "try them on",
    "meaning": "试穿",
    "example": "",
    "weight": 3,
    "id": "sw-002133"
  },
  {
    "type": "word",
    "front": "roll the cuffs up",
    "meaning": "卷起裤脚",
    "example": "",
    "weight": 3,
    "id": "sw-002134"
  },
  {
    "type": "word",
    "front": "fit comfortably",
    "meaning": "穿着舒适",
    "example": "",
    "weight": 3,
    "id": "sw-002135"
  },
  {
    "type": "word",
    "front": "renew the loan",
    "meaning": "续借",
    "example": "",
    "weight": 3,
    "id": "sw-002136"
  },
  {
    "type": "word",
    "front": "another patron's hold",
    "meaning": "其他读者的预约",
    "example": "",
    "weight": 3,
    "id": "sw-002137"
  },
  {
    "type": "word",
    "front": "muddy descent",
    "meaning": "泥泞下坡",
    "example": "",
    "weight": 3,
    "id": "sw-002140"
  },
  {
    "type": "word",
    "front": "plant your poles",
    "meaning": "撑稳登山杖",
    "example": "",
    "weight": 3,
    "id": "sw-002141"
  },
  {
    "type": "word",
    "front": "cold draft",
    "meaning": "窗缝冷风",
    "example": "",
    "weight": 3,
    "id": "sw-002144"
  },
  {
    "type": "word",
    "front": "dripping tap",
    "meaning": "滴水水龙头",
    "example": "",
    "weight": 3,
    "id": "sw-002145"
  },
  {
    "type": "word",
    "front": "look into the problem",
    "meaning": "调查问题",
    "example": "",
    "weight": 3,
    "id": "sw-002146"
  },
  {
    "type": "word",
    "front": "drop off at wrong door",
    "meaning": "送错门",
    "example": "",
    "weight": 3,
    "id": "sw-002149"
  },
  {
    "type": "word",
    "front": "hand the parcel over",
    "meaning": "把包裹递交",
    "example": "",
    "weight": 3,
    "id": "sw-002150"
  },
  {
    "type": "word",
    "front": "mixed-up house numbers",
    "meaning": "门牌号弄混",
    "example": "",
    "weight": 3,
    "id": "sw-002151"
  },
  {
    "type": "word",
    "front": "contour lines",
    "meaning": "等高线",
    "example": "",
    "weight": 3,
    "id": "sw-002152"
  },
  {
    "type": "word",
    "front": "swollen stream",
    "meaning": "上涨的溪流",
    "example": "",
    "weight": 3,
    "id": "sw-002153"
  },
  {
    "type": "word",
    "front": "washed-away trail",
    "meaning": "被冲毁的路线",
    "example": "",
    "weight": 3,
    "id": "sw-002154"
  },
  {
    "type": "word",
    "front": "retrace your steps",
    "meaning": "沿原路折返",
    "example": "",
    "weight": 3,
    "id": "sw-002155"
  },
  {
    "type": "word",
    "front": "freeze repeatedly",
    "meaning": "反复卡住",
    "example": "",
    "weight": 3,
    "id": "sw-002157"
  },
  {
    "type": "word",
    "front": "log back in",
    "meaning": "重新登录",
    "example": "",
    "weight": 3,
    "id": "sw-002158"
  },
  {
    "type": "word",
    "front": "go through",
    "meaning": "付款成功",
    "example": "",
    "weight": 3,
    "id": "sw-002159"
  },
  {
    "type": "word",
    "front": "adjust margins",
    "meaning": "调整页边距",
    "example": "",
    "weight": 3,
    "id": "sw-002161"
  },
  {
    "type": "word",
    "front": "jam",
    "meaning": "卡纸",
    "example": "",
    "weight": 3,
    "id": "sw-002162"
  },
  {
    "type": "word",
    "front": "get off",
    "meaning": "下车",
    "example": "",
    "weight": 3,
    "id": "sw-002164"
  },
  {
    "type": "word",
    "front": "overcharged",
    "meaning": "被多收钱",
    "example": "",
    "weight": 3,
    "id": "sw-002165"
  },
  {
    "type": "word",
    "front": "double-check",
    "meaning": "复核",
    "example": "",
    "weight": 3,
    "id": "sw-002166"
  },
  {
    "type": "word",
    "front": "process a refund",
    "meaning": "处理退款",
    "example": "",
    "weight": 3,
    "id": "sw-002167"
  },
  {
    "type": "word",
    "front": "call a supervisor over",
    "meaning": "叫主管过来",
    "example": "",
    "weight": 3,
    "id": "sw-002168"
  },
  {
    "type": "word",
    "front": "road closure",
    "meaning": "封路",
    "example": "",
    "weight": 3,
    "id": "sw-002170"
  },
  {
    "type": "word",
    "front": "go around the block",
    "meaning": "绕过街区",
    "example": "",
    "weight": 3,
    "id": "sw-002171"
  },
  {
    "type": "word",
    "front": "repeat back",
    "meaning": "复述确认",
    "example": "",
    "weight": 3,
    "id": "sw-002172"
  },
  {
    "type": "word",
    "front": "fumble around",
    "meaning": "摸索",
    "example": "",
    "weight": 3,
    "id": "sw-002176"
  },
  {
    "type": "word",
    "front": "give space",
    "meaning": "保持距离",
    "example": "",
    "weight": 3,
    "id": "sw-002180"
  },
  {
    "type": "word",
    "front": "bound away",
    "meaning": "跳跃跑开",
    "example": "",
    "weight": 3,
    "id": "sw-002181"
  },
  {
    "type": "word",
    "front": "catch up",
    "meaning": "赶上",
    "example": "",
    "weight": 3,
    "id": "sw-002182"
  },
  {
    "type": "word",
    "front": "push back",
    "meaning": "推迟",
    "example": "",
    "weight": 3,
    "id": "sw-002183"
  },
  {
    "type": "word",
    "front": "change a reservation",
    "meaning": "修改预订",
    "example": "",
    "weight": 3,
    "id": "sw-002184"
  },
  {
    "type": "word",
    "front": "simple mix-up",
    "meaning": "小失误",
    "example": "",
    "weight": 3,
    "id": "sw-002186"
  },
  {
    "type": "word",
    "front": "out of order",
    "meaning": "故障或顺序错",
    "example": "",
    "weight": 3,
    "id": "sw-002188"
  },
  {
    "type": "word",
    "front": "staple together",
    "meaning": "装订",
    "example": "",
    "weight": 3,
    "id": "sw-002189"
  },
  {
    "type": "word",
    "front": "wrong direction",
    "meaning": "反方向",
    "example": "",
    "weight": 3,
    "id": "sw-002190"
  },
  {
    "type": "word",
    "front": "call over a supervisor",
    "meaning": "请主管过来",
    "example": "",
    "weight": 3,
    "id": "sw-002194"
  },
  {
    "type": "word",
    "front": "come across",
    "meaning": "偶然发现",
    "example": "",
    "weight": 3,
    "id": "sw-002195"
  },
  {
    "type": "word",
    "front": "ask for directions",
    "meaning": "问路",
    "example": "",
    "weight": 3,
    "id": "sw-002198"
  },
  {
    "type": "word",
    "front": "preserved in original condition",
    "meaning": "保持原貌",
    "example": "",
    "weight": 3,
    "id": "sw-002200"
  },
  {
    "type": "word",
    "front": "redirect through",
    "meaning": "改走",
    "example": "",
    "weight": 3,
    "id": "sw-002202"
  },
  {
    "type": "word",
    "front": "worth it",
    "meaning": "值得",
    "example": "",
    "weight": 3,
    "id": "sw-002203"
  },
  {
    "type": "word",
    "front": "outer edge drops away",
    "meaning": "外缘陡降",
    "example": "",
    "weight": 3,
    "id": "sw-002204"
  },
  {
    "type": "word",
    "front": "unstable patch",
    "meaning": "不稳的路面",
    "example": "",
    "weight": 3,
    "id": "sw-002205"
  },
  {
    "type": "word",
    "front": "headcount",
    "meaning": "人数清点",
    "example": "",
    "weight": 3,
    "id": "sw-002206"
  },
  {
    "type": "word",
    "front": "take a message the wrong way",
    "meaning": "误解短信",
    "example": "",
    "weight": 3,
    "id": "sw-002207"
  },
  {
    "type": "word",
    "front": "talk through",
    "meaning": "谈透",
    "example": "",
    "weight": 3,
    "id": "sw-002209"
  },
  {
    "type": "word",
    "front": "stubborn creases",
    "meaning": "顽固折痕",
    "example": "",
    "weight": 3,
    "id": "sw-002210"
  },
  {
    "type": "word",
    "front": "audio cuts out",
    "meaning": "声音中断",
    "example": "",
    "weight": 3,
    "id": "sw-002211"
  },
  {
    "type": "word",
    "front": "run more smoothly",
    "meaning": "更流畅",
    "example": "",
    "weight": 3,
    "id": "sw-002213"
  },
  {
    "type": "word",
    "front": "get through to support",
    "meaning": "联系上客服",
    "example": "",
    "weight": 3,
    "id": "sw-002214"
  },
  {
    "type": "word",
    "front": "outage in the area",
    "meaning": "区域故障",
    "example": "",
    "weight": 3,
    "id": "sw-002215"
  },
  {
    "type": "word",
    "front": "push up expenses",
    "meaning": "推高支出",
    "example": "",
    "weight": 3,
    "id": "sw-002218"
  },
  {
    "type": "word",
    "front": "longer commute",
    "meaning": "通勤更长",
    "example": "",
    "weight": 3,
    "id": "sw-002219"
  },
  {
    "type": "word",
    "front": "queasy",
    "meaning": "反胃",
    "example": "",
    "weight": 3,
    "id": "sw-002222"
  },
  {
    "type": "word",
    "front": "uncover ancient remains",
    "meaning": "发掘遗存",
    "example": "",
    "weight": 3,
    "id": "sw-002223"
  },
  {
    "type": "word",
    "front": "beat down",
    "meaning": "烈日暴晒",
    "example": "",
    "weight": 3,
    "id": "sw-002225"
  },
  {
    "type": "word",
    "front": "light-headed",
    "meaning": "头昏",
    "example": "",
    "weight": 3,
    "id": "sw-002226"
  },
  {
    "type": "word",
    "front": "startle awake",
    "meaning": "惊醒",
    "example": "",
    "weight": 3,
    "id": "sw-002229"
  },
  {
    "type": "word",
    "front": "air out",
    "meaning": "通风",
    "example": "",
    "weight": 3,
    "id": "sw-002230"
  },
  {
    "type": "word",
    "front": "retain a card",
    "meaning": "吞卡",
    "example": "",
    "weight": 3,
    "id": "sw-002231"
  },
  {
    "type": "word",
    "front": "get through",
    "meaning": "联系上",
    "example": "",
    "weight": 3,
    "id": "sw-002233"
  },
  {
    "type": "word",
    "front": "make assumptions",
    "meaning": "自己想当然",
    "example": "",
    "weight": 3,
    "id": "sw-002236"
  },
  {
    "type": "word",
    "front": "mark waypoints",
    "meaning": "标记导航点",
    "example": "",
    "weight": 3,
    "id": "sw-002237"
  },
  {
    "type": "word",
    "front": "signal reception",
    "meaning": "信号接收",
    "example": "",
    "weight": 3,
    "id": "sw-002238"
  },
  {
    "type": "word",
    "front": "landmarks",
    "meaning": "地标",
    "example": "",
    "weight": 3,
    "id": "sw-002239"
  },
  {
    "type": "word",
    "front": "rely entirely on",
    "meaning": "完全依赖",
    "example": "",
    "weight": 3,
    "id": "sw-002240"
  },
  {
    "type": "word",
    "front": "short connection",
    "meaning": "短时间转机",
    "example": "",
    "weight": 3,
    "id": "sw-002241"
  },
  {
    "type": "word",
    "front": "barely make it",
    "meaning": "勉强赶上",
    "example": "",
    "weight": 3,
    "id": "sw-002242"
  },
  {
    "type": "word",
    "front": "loose gravel",
    "meaning": "松散碎石",
    "example": "",
    "weight": 3,
    "id": "sw-002244"
  },
  {
    "type": "word",
    "front": "stumble",
    "meaning": "踉跄",
    "example": "",
    "weight": 3,
    "id": "sw-002245"
  },
  {
    "type": "word",
    "front": "repair tape",
    "meaning": "修补胶带",
    "example": "",
    "weight": 3,
    "id": "sw-002246"
  },
  {
    "type": "word",
    "front": "less exposed route",
    "meaning": "风险暴露较少的路线",
    "example": "",
    "weight": 3,
    "id": "sw-002247"
  },
  {
    "type": "word",
    "front": "slip out of",
    "meaning": "滑出",
    "example": "",
    "weight": 3,
    "id": "sw-002248"
  },
  {
    "type": "word",
    "front": "protective case",
    "meaning": "保护壳",
    "example": "",
    "weight": 3,
    "id": "sw-002249"
  },
  {
    "type": "word",
    "front": "switch to mobile data",
    "meaning": "切换移动网络",
    "example": "",
    "weight": 3,
    "id": "sw-002252"
  },
  {
    "type": "word",
    "front": "hold up a meeting",
    "meaning": "耽误会议",
    "example": "",
    "weight": 3,
    "id": "sw-002253"
  },
  {
    "type": "word",
    "front": "freeze again",
    "meaning": "再次卡住",
    "example": "",
    "weight": 3,
    "id": "sw-002254"
  },
  {
    "type": "word",
    "front": "unrecognized transaction",
    "meaning": "不认识的交易",
    "example": "",
    "weight": 3,
    "id": "sw-002255"
  },
  {
    "type": "word",
    "front": "turn in",
    "meaning": "上交",
    "example": "",
    "weight": 3,
    "id": "sw-002258"
  },
  {
    "type": "word",
    "front": "priced out",
    "meaning": "被高价挤出",
    "example": "",
    "weight": 3,
    "id": "sw-002259"
  },
  {
    "type": "word",
    "front": "creative atmosphere",
    "meaning": "创意氛围",
    "example": "",
    "weight": 3,
    "id": "sw-002261"
  },
  {
    "type": "word",
    "front": "satellite signals",
    "meaning": "卫星信号",
    "example": "",
    "weight": 3,
    "id": "sw-002266"
  },
  {
    "type": "word",
    "front": "clogged",
    "meaning": "堵塞",
    "example": "",
    "weight": 3,
    "id": "sw-002268"
  },
  {
    "type": "word",
    "front": "unscrew the lid",
    "meaning": "拧开盖子",
    "example": "",
    "weight": 3,
    "id": "sw-002269"
  },
  {
    "type": "word",
    "front": "pour into",
    "meaning": "倒入",
    "example": "",
    "weight": 3,
    "id": "sw-002270"
  },
  {
    "type": "word",
    "front": "turn down heat",
    "meaning": "调小火",
    "example": "",
    "weight": 3,
    "id": "sw-002271"
  },
  {
    "type": "word",
    "front": "turn out better than expected",
    "meaning": "比预期更好",
    "example": "",
    "weight": 3,
    "id": "sw-002272"
  },
  {
    "type": "word",
    "front": "soak up the water",
    "meaning": "吸干水",
    "example": "",
    "weight": 3,
    "id": "sw-002274"
  },
  {
    "type": "word",
    "front": "spin again",
    "meaning": "再次脱水",
    "example": "",
    "weight": 3,
    "id": "sw-002276"
  },
  {
    "type": "word",
    "front": "running low",
    "meaning": "电量快耗尽",
    "example": "",
    "weight": 3,
    "id": "sw-002277"
  },
  {
    "type": "word",
    "front": "charging cable",
    "meaning": "充电线",
    "example": "",
    "weight": 3,
    "id": "sw-002278"
  },
  {
    "type": "word",
    "front": "shift bag aside",
    "meaning": "把包挪开",
    "example": "",
    "weight": 3,
    "id": "sw-002280"
  },
  {
    "type": "word",
    "front": "mixed reviews",
    "meaning": "褒贬不一",
    "example": "",
    "weight": 3,
    "id": "sw-002281"
  },
  {
    "type": "word",
    "front": "sensible approach",
    "meaning": "明智方法",
    "example": "",
    "weight": 3,
    "id": "sw-002284"
  },
  {
    "type": "word",
    "front": "zipper was jammed",
    "meaning": "拉链卡住",
    "example": "",
    "weight": 3,
    "id": "sw-002285"
  },
  {
    "type": "word",
    "front": "wiggle the zipper pull",
    "meaning": "来回晃动拉链头",
    "example": "",
    "weight": 3,
    "id": "sw-002286"
  },
  {
    "type": "word",
    "front": "approach a saddle",
    "meaning": "接近鞍部",
    "example": "",
    "weight": 3,
    "id": "sw-002287"
  },
  {
    "type": "word",
    "front": "factor in delays",
    "meaning": "考虑延误",
    "example": "",
    "weight": 3,
    "id": "sw-002288"
  },
  {
    "type": "word",
    "front": "kerb / curb",
    "meaning": "路缘石",
    "example": "",
    "weight": 3,
    "id": "sw-002290"
  },
  {
    "type": "word",
    "front": "retrieve",
    "meaning": "找回",
    "example": "",
    "weight": 3,
    "id": "sw-002292"
  },
  {
    "type": "word",
    "front": "faint scratch",
    "meaning": "很浅的划痕",
    "example": "",
    "weight": 3,
    "id": "sw-002294"
  },
  {
    "type": "word",
    "front": "stubborn bubble",
    "meaning": "顽固气泡",
    "example": "",
    "weight": 3,
    "id": "sw-002296"
  },
  {
    "type": "word",
    "front": "stick properly",
    "meaning": "贴合正常",
    "example": "",
    "weight": 3,
    "id": "sw-002297"
  },
  {
    "type": "word",
    "front": "surprisingly heavy",
    "meaning": "异常重",
    "example": "",
    "weight": 3,
    "id": "sw-002299"
  },
  {
    "type": "word",
    "front": "adjust grip",
    "meaning": "调整抓握",
    "example": "",
    "weight": 3,
    "id": "sw-002300"
  },
  {
    "type": "word",
    "front": "save effort",
    "meaning": "节省力气",
    "example": "",
    "weight": 3,
    "id": "sw-002301"
  },
  {
    "type": "word",
    "front": "barely opened",
    "meaning": "几乎没打开",
    "example": "",
    "weight": 3,
    "id": "sw-002303"
  },
  {
    "type": "word",
    "front": "open up a slot",
    "meaning": "空出时段",
    "example": "",
    "weight": 3,
    "id": "sw-002306"
  },
  {
    "type": "word",
    "front": "otherwise have missed",
    "meaning": "否则可能错过",
    "example": "",
    "weight": 3,
    "id": "sw-002309"
  },
  {
    "type": "word",
    "front": "steady progress",
    "meaning": "稳定行进",
    "example": "",
    "weight": 3,
    "id": "sw-002310"
  },
  {
    "type": "word",
    "front": "blindly push on",
    "meaning": "盲目前进",
    "example": "",
    "weight": 3,
    "id": "sw-002313"
  },
  {
    "type": "sentence",
    "front": "The lights are flickering.",
    "meaning": "灯正在忽明忽暗。",
    "example": "",
    "weight": 3,
    "id": "sw-002314"
  },
  {
    "type": "sentence",
    "front": "The lights went out and the room went dark.",
    "meaning": "灯熄灭，房间变黑。",
    "example": "",
    "weight": 3,
    "id": "sw-002315"
  },
  {
    "type": "sentence",
    "front": "There's been a power outage.",
    "meaning": "发生了停电。",
    "example": "",
    "weight": 3,
    "id": "sw-002316"
  },
  {
    "type": "sentence",
    "front": "The whole floor lost power.",
    "meaning": "整层楼断电了。",
    "example": "",
    "weight": 3,
    "id": "sw-002317"
  },
  {
    "type": "sentence",
    "front": "The circuit breaker tripped.",
    "meaning": "断路器跳闸了。",
    "example": "",
    "weight": 3,
    "id": "sw-002318"
  },
  {
    "type": "sentence",
    "front": "I need to go through security.",
    "meaning": "我需要通过安检。",
    "example": "",
    "weight": 3,
    "id": "sw-002319"
  },
  {
    "type": "sentence",
    "front": "Please empty your pockets.",
    "meaning": "请把口袋里的东西都拿出来。",
    "example": "",
    "weight": 3,
    "id": "sw-002320"
  },
  {
    "type": "sentence",
    "front": "Keep an eye on your belongings.",
    "meaning": "留意你的随身物品。",
    "example": "",
    "weight": 3,
    "id": "sw-002321"
  },
  {
    "type": "sentence",
    "front": "Put your keys in the tray.",
    "meaning": "把钥匙放进托盘。",
    "example": "",
    "weight": 3,
    "id": "sw-002322"
  },
  {
    "type": "sentence",
    "front": "The metal detector beeped.",
    "meaning": "金属探测门响了。",
    "example": "",
    "weight": 3,
    "id": "sw-002323"
  },
  {
    "type": "sentence",
    "front": "The front group picked up the pace.",
    "meaning": "前面的队伍加快了步速。",
    "example": "",
    "weight": 3,
    "id": "sw-002325"
  },
  {
    "type": "sentence",
    "front": "Let's slow down and keep a steady pace.",
    "meaning": "我们放慢一点，保持稳定速度。",
    "example": "",
    "weight": 3,
    "id": "sw-002326"
  },
  {
    "type": "sentence",
    "front": "I called out to the hikers up front.",
    "meaning": "我向前面的徒步者喊话。",
    "example": "",
    "weight": 3,
    "id": "sw-002328"
  },
  {
    "type": "sentence",
    "front": "Your voice is breaking up.",
    "meaning": "你的声音断断续续。",
    "example": "",
    "weight": 3,
    "id": "sw-002329"
  },
  {
    "type": "sentence",
    "front": "I could only catch every other word.",
    "meaning": "我只能断断续续听清一些词。",
    "example": "",
    "weight": 3,
    "id": "sw-002330"
  },
  {
    "type": "sentence",
    "front": "Sorry, I didn't catch the last part.",
    "meaning": "抱歉，后半部分我没听清。",
    "example": "",
    "weight": 3,
    "id": "sw-002331"
  },
  {
    "type": "sentence",
    "front": "The audio keeps cutting out.",
    "meaning": "声音不断中断。",
    "example": "",
    "weight": 3,
    "id": "sw-002332"
  },
  {
    "type": "sentence",
    "front": "The call suddenly dropped.",
    "meaning": "电话突然掉线了。",
    "example": "",
    "weight": 3,
    "id": "sw-002333"
  },
  {
    "type": "sentence",
    "front": "A notification popped up on my phone.",
    "meaning": "手机上弹出一条通知。",
    "example": "",
    "weight": 3,
    "id": "sw-002334"
  },
  {
    "type": "sentence",
    "front": "I picked it up from a parcel locker.",
    "meaning": "我从快递柜取了它。",
    "example": "",
    "weight": 3,
    "id": "sw-002336"
  },
  {
    "type": "sentence",
    "front": "Enter the pickup code manually.",
    "meaning": "手动输入取件码。",
    "example": "",
    "weight": 3,
    "id": "sw-002338"
  },
  {
    "type": "sentence",
    "front": "A strong gust hit me from the side.",
    "meaning": "强阵风从侧面吹来。",
    "example": "",
    "weight": 3,
    "id": "sw-002340"
  },
  {
    "type": "sentence",
    "front": "The loose strap was whipping against my arm.",
    "meaning": "松带猛烈抽打我的手臂。",
    "example": "",
    "weight": 3,
    "id": "sw-002341"
  },
  {
    "type": "sentence",
    "front": "The gust made me stagger.",
    "meaning": "阵风吹得我踉跄。",
    "example": "",
    "weight": 3,
    "id": "sw-002342"
  },
  {
    "type": "sentence",
    "front": "I braced myself against a rock.",
    "meaning": "我靠岩石稳住身体。",
    "example": "",
    "weight": 3,
    "id": "sw-002343"
  },
  {
    "type": "sentence",
    "front": "A gust blew the door shut.",
    "meaning": "阵风把门吹关了。",
    "example": "",
    "weight": 3,
    "id": "sw-002345"
  },
  {
    "type": "sentence",
    "front": "The door slammed shut behind me.",
    "meaning": "门在我身后砰地关上。",
    "example": "",
    "weight": 3,
    "id": "sw-002346"
  },
  {
    "type": "sentence",
    "front": "I got locked out of my apartment.",
    "meaning": "我被锁在公寓外面了。",
    "example": "",
    "weight": 3,
    "id": "sw-002347"
  },
  {
    "type": "sentence",
    "front": "I reached into my pocket.",
    "meaning": "我把手伸进口袋。",
    "example": "",
    "weight": 3,
    "id": "sw-002348"
  },
  {
    "type": "sentence",
    "front": "I need to get a haircut.",
    "meaning": "我该去理发了。",
    "example": "",
    "weight": 3,
    "id": "sw-002349"
  },
  {
    "type": "sentence",
    "front": "Just take a little off the top.",
    "meaning": "头顶稍微剪一点。",
    "example": "",
    "weight": 3,
    "id": "sw-002350"
  },
  {
    "type": "sentence",
    "front": "Could you trim the sides?",
    "meaning": "能修一下两侧吗？",
    "example": "",
    "weight": 3,
    "id": "sw-002351"
  },
  {
    "type": "sentence",
    "front": "He combed through my hair.",
    "meaning": "他梳了梳我的头发。",
    "example": "",
    "weight": 3,
    "id": "sw-002352"
  },
  {
    "type": "sentence",
    "front": "She sprayed water onto my hair.",
    "meaning": "她给我头发喷了些水。",
    "example": "",
    "weight": 3,
    "id": "sw-002353"
  },
  {
    "type": "sentence",
    "front": "Dark clouds were building up.",
    "meaning": "乌云正在积聚。",
    "example": "",
    "weight": 3,
    "id": "sw-002354"
  },
  {
    "type": "sentence",
    "front": "Thunder rumbled in the distance.",
    "meaning": "远处雷声隆隆。",
    "example": "",
    "weight": 3,
    "id": "sw-002355"
  },
  {
    "type": "sentence",
    "front": "Lightning flashed across the sky.",
    "meaning": "闪电划过天空。",
    "example": "",
    "weight": 3,
    "id": "sw-002356"
  },
  {
    "type": "sentence",
    "front": "There was a loud crack of thunder.",
    "meaning": "响起一声炸雷。",
    "example": "",
    "weight": 3,
    "id": "sw-002357"
  },
  {
    "type": "sentence",
    "front": "The rain was pelting down.",
    "meaning": "雨猛烈地下着。",
    "example": "",
    "weight": 3,
    "id": "sw-002358"
  },
  {
    "type": "sentence",
    "front": "The bass was thumping through the wall.",
    "meaning": "低音透墙咚咚作响。",
    "example": "",
    "weight": 3,
    "id": "sw-002359"
  },
  {
    "type": "sentence",
    "front": "Sound carries through thin walls.",
    "meaning": "声音很容易穿透薄墙。",
    "example": "",
    "weight": 3,
    "id": "sw-002360"
  },
  {
    "type": "sentence",
    "front": "The noise kept me awake.",
    "meaning": "噪音让我无法入睡。",
    "example": "",
    "weight": 3,
    "id": "sw-002361"
  },
  {
    "type": "sentence",
    "front": "I put in my earplugs.",
    "meaning": "我戴上了耳塞。",
    "example": "",
    "weight": 3,
    "id": "sw-002362"
  },
  {
    "type": "sentence",
    "front": "I knocked on the neighbor's door.",
    "meaning": "我敲邻居的门。",
    "example": "",
    "weight": 3,
    "id": "sw-002363"
  },
  {
    "type": "sentence",
    "front": "An announcement came over the loudspeaker.",
    "meaning": "扬声器里传来广播。",
    "example": "",
    "weight": 3,
    "id": "sw-002364"
  },
  {
    "type": "sentence",
    "front": "The announcement sounded muffled.",
    "meaning": "广播听起来模糊不清。",
    "example": "",
    "weight": 3,
    "id": "sw-002365"
  },
  {
    "type": "sentence",
    "front": "The audio was muffled and cutting out.",
    "meaning": "声音闷且不时中断。",
    "example": "",
    "weight": 3,
    "id": "sw-002366"
  },
  {
    "type": "sentence",
    "front": "I couldn't make out the announcement.",
    "meaning": "我听不清广播。",
    "example": "",
    "weight": 3,
    "id": "sw-002367"
  },
  {
    "type": "sentence",
    "front": "I caught something about a delay.",
    "meaning": "我隐约听到说有延误。",
    "example": "",
    "weight": 3,
    "id": "sw-002368"
  },
  {
    "type": "sentence",
    "front": "Mosquitoes were buzzing around my head.",
    "meaning": "蚊子在我头边嗡嗡飞。",
    "example": "",
    "weight": 3,
    "id": "sw-002369"
  },
  {
    "type": "sentence",
    "front": "A mosquito hovered near my face.",
    "meaning": "一只蚊子在我脸旁盘旋。",
    "example": "",
    "weight": 3,
    "id": "sw-002370"
  },
  {
    "type": "sentence",
    "front": "Insects gathered around us.",
    "meaning": "虫子聚到我们周围。",
    "example": "",
    "weight": 3,
    "id": "sw-002371"
  },
  {
    "type": "sentence",
    "front": "I tried to swat the flies away.",
    "meaning": "我试着挥赶苍蝇。",
    "example": "",
    "weight": 3,
    "id": "sw-002372"
  },
  {
    "type": "sentence",
    "front": "A mosquito bit my neck.",
    "meaning": "蚊子叮了我的脖子。",
    "example": "",
    "weight": 3,
    "id": "sw-002373"
  },
  {
    "type": "sentence",
    "front": "I kept hitting snooze.",
    "meaning": "我一直按稍后提醒。",
    "example": "",
    "weight": 3,
    "id": "sw-002375"
  },
  {
    "type": "sentence",
    "front": "I slept through my alarm.",
    "meaning": "闹钟响了我也没醒。",
    "example": "",
    "weight": 3,
    "id": "sw-002376"
  },
  {
    "type": "sentence",
    "front": "I overslept this morning.",
    "meaning": "我今天早上睡过头了。",
    "example": "",
    "weight": 3,
    "id": "sw-002377"
  },
  {
    "type": "sentence",
    "front": "I was still half asleep.",
    "meaning": "我还迷迷糊糊的。",
    "example": "",
    "weight": 3,
    "id": "sw-002378"
  },
  {
    "type": "sentence",
    "front": "Take the lid off the jar.",
    "meaning": "把罐子盖取下。",
    "example": "",
    "weight": 3,
    "id": "sw-002379"
  },
  {
    "type": "sentence",
    "front": "The lid won't budge.",
    "meaning": "盖子纹丝不动。",
    "example": "",
    "weight": 3,
    "id": "sw-002380"
  },
  {
    "type": "sentence",
    "front": "Grip the jar firmly.",
    "meaning": "把罐子牢牢握住。",
    "example": "",
    "weight": 3,
    "id": "sw-002381"
  },
  {
    "type": "sentence",
    "front": "Twist the lid counterclockwise.",
    "meaning": "逆时针拧盖子。",
    "example": "",
    "weight": 3,
    "id": "sw-002382"
  },
  {
    "type": "sentence",
    "front": "Unscrew the lid slowly.",
    "meaning": "慢慢拧开盖子。",
    "example": "",
    "weight": 3,
    "id": "sw-002383"
  },
  {
    "type": "sentence",
    "front": "I carry a spare headlamp.",
    "meaning": "我带一盏备用头灯。",
    "example": "",
    "weight": 3,
    "id": "sw-002384"
  },
  {
    "type": "sentence",
    "front": "The headlamp lit up the trail.",
    "meaning": "头灯照亮了路线。",
    "example": "",
    "weight": 3,
    "id": "sw-002385"
  },
  {
    "type": "sentence",
    "front": "Point the beam at the trail.",
    "meaning": "把光束对准小路。",
    "example": "",
    "weight": 3,
    "id": "sw-002386"
  },
  {
    "type": "sentence",
    "front": "The beam was getting dimmer.",
    "meaning": "光束越来越暗。",
    "example": "",
    "weight": 3,
    "id": "sw-002387"
  },
  {
    "type": "sentence",
    "front": "The light flickered and went out.",
    "meaning": "灯闪烁后熄灭。",
    "example": "",
    "weight": 3,
    "id": "sw-002388"
  },
  {
    "type": "sentence",
    "front": "There's a coffee stain on my shirt.",
    "meaning": "衬衫上有一块咖啡渍。",
    "example": "",
    "weight": 3,
    "id": "sw-002389"
  },
  {
    "type": "sentence",
    "front": "It's a noticeable brown stain.",
    "meaning": "这是明显的棕色污渍。",
    "example": "",
    "weight": 3,
    "id": "sw-002390"
  },
  {
    "type": "sentence",
    "front": "Blot the stain with paper towels.",
    "meaning": "用纸巾轻按吸去污渍。",
    "example": "",
    "weight": 3,
    "id": "sw-002391"
  },
  {
    "type": "sentence",
    "front": "Coffee soaked into the fabric.",
    "meaning": "咖啡渗进了布料。",
    "example": "",
    "weight": 3,
    "id": "sw-002392"
  },
  {
    "type": "sentence",
    "front": "The towel soaked up the spill.",
    "meaning": "毛巾吸掉了洒出的液体。",
    "example": "",
    "weight": 3,
    "id": "sw-002393"
  },
  {
    "type": "sentence",
    "front": "I bought water from a vending machine.",
    "meaning": "我从售货机买了水。",
    "example": "",
    "weight": 3,
    "id": "sw-002394"
  },
  {
    "type": "sentence",
    "front": "The machine didn't dispense my drink.",
    "meaning": "机器没有吐出饮料。",
    "example": "",
    "weight": 3,
    "id": "sw-002397"
  },
  {
    "type": "sentence",
    "front": "The bottle got stuck halfway down.",
    "meaning": "瓶子掉到一半卡住。",
    "example": "",
    "weight": 3,
    "id": "sw-002398"
  },
  {
    "type": "sentence",
    "front": "We pitched our tents before dark.",
    "meaning": "我们天黑前搭好帐篷。",
    "example": "",
    "weight": 3,
    "id": "sw-002399"
  },
  {
    "type": "sentence",
    "front": "Let's take down the tent.",
    "meaning": "我们把帐篷拆了吧。",
    "example": "",
    "weight": 3,
    "id": "sw-002400"
  },
  {
    "type": "sentence",
    "front": "Spread out the groundsheet.",
    "meaning": "把地布铺开。",
    "example": "",
    "weight": 3,
    "id": "sw-002401"
  },
  {
    "type": "sentence",
    "front": "Assemble the poles first.",
    "meaning": "先组装帐杆。",
    "example": "",
    "weight": 3,
    "id": "sw-002402"
  },
  {
    "type": "sentence",
    "front": "One pole snapped in the wind.",
    "meaning": "一根帐杆在风中折断。",
    "example": "",
    "weight": 3,
    "id": "sw-002403"
  },
  {
    "type": "sentence",
    "front": "The water isn't draining away.",
    "meaning": "水排不出去。",
    "example": "",
    "weight": 3,
    "id": "sw-002405"
  },
  {
    "type": "sentence",
    "front": "The water was rising toward the rim.",
    "meaning": "水位向边缘上涨。",
    "example": "",
    "weight": 3,
    "id": "sw-002406"
  },
  {
    "type": "sentence",
    "front": "The toilet is clogged.",
    "meaning": "马桶堵住了。",
    "example": "",
    "weight": 3,
    "id": "sw-002407"
  },
  {
    "type": "sentence",
    "front": "Turn off the water supply valve.",
    "meaning": "关闭进水阀。",
    "example": "",
    "weight": 3,
    "id": "sw-002408"
  },
  {
    "type": "sentence",
    "front": "Button up your shirt.",
    "meaning": "把衬衫纽扣扣好。",
    "example": "",
    "weight": 3,
    "id": "sw-002409"
  },
  {
    "type": "sentence",
    "front": "One of the buttons came off.",
    "meaning": "一颗纽扣掉了。",
    "example": "",
    "weight": 3,
    "id": "sw-002410"
  },
  {
    "type": "sentence",
    "front": "The thread snapped.",
    "meaning": "线突然断了。",
    "example": "",
    "weight": 3,
    "id": "sw-002411"
  },
  {
    "type": "sentence",
    "front": "I couldn't thread the needle.",
    "meaning": "我穿不好针。",
    "example": "",
    "weight": 3,
    "id": "sw-002412"
  },
  {
    "type": "sentence",
    "front": "I keep a small sewing kit.",
    "meaning": "我放着一个小针线包。",
    "example": "",
    "weight": 3,
    "id": "sw-002413"
  },
  {
    "type": "sentence",
    "front": "We crossed a suspension bridge.",
    "meaning": "我们通过了一座吊桥。",
    "example": "",
    "weight": 3,
    "id": "sw-002414"
  },
  {
    "type": "sentence",
    "front": "The bridge crossed a deep gorge.",
    "meaning": "吊桥横跨深峡谷。",
    "example": "",
    "weight": 3,
    "id": "sw-002415"
  },
  {
    "type": "sentence",
    "front": "The bridge stretches across the river.",
    "meaning": "桥横跨河流。",
    "example": "",
    "weight": 3,
    "id": "sw-002416"
  },
  {
    "type": "sentence",
    "front": "The wooden planks creaked.",
    "meaning": "木板发出吱呀声。",
    "example": "",
    "weight": 3,
    "id": "sw-002417"
  },
  {
    "type": "sentence",
    "front": "The bridge creaked underfoot.",
    "meaning": "桥在脚下吱呀响。",
    "example": "",
    "weight": 3,
    "id": "sw-002418"
  },
  {
    "id": "sw-002419",
    "type": "word",
    "front": "fall behind / fall behind schedule",
    "meaning": "掉队／落后进度",
    "example": "Two hikers were falling behind.",
    "weight": 3
  },
  {
    "id": "sw-002420",
    "type": "word",
    "front": "keep a steady pace / slow down",
    "meaning": "保持稳定速度／放慢",
    "example": "Let's slow down and keep a steady pace.",
    "weight": 3
  },
  {
    "id": "sw-002421",
    "type": "word",
    "front": "the call drops / get disconnected",
    "meaning": "通话掉线／断线",
    "example": "The call suddenly dropped.",
    "weight": 3
  },
  {
    "id": "sw-002422",
    "type": "word",
    "front": "exposed ridge / exposed terrain",
    "meaning": "暴露的山脊／地形",
    "example": "The ridge was very exposed.",
    "weight": 3
  },
  {
    "id": "sw-002423",
    "type": "word",
    "front": "get locked out / lock myself out",
    "meaning": "被锁在外面／把自己锁门外",
    "example": "I got locked out of my apartment.",
    "weight": 3
  },
  {
    "id": "sw-002424",
    "type": "word",
    "front": "let someone in / buzz someone in",
    "meaning": "给某人开门／门禁远程开门",
    "example": "Could you come back and let me in?",
    "weight": 3
  },
  {
    "id": "sw-002425",
    "type": "word",
    "front": "slightly uneven / keep some length",
    "meaning": "略不均匀／保留些长度",
    "example": "I'd like to keep some length.",
    "weight": 3
  },
  {
    "id": "sw-002426",
    "type": "word",
    "front": "a storm approaches / moves closer",
    "meaning": "雷暴接近",
    "example": "The storm was moving closer.",
    "weight": 3
  },
  {
    "id": "sw-002427",
    "type": "word",
    "front": "keep someone awake / keep someone up",
    "meaning": "让某人睡不着",
    "example": "The noise kept me awake.",
    "weight": 3
  },
  {
    "id": "sw-002429",
    "type": "word",
    "front": "Sorry to bother you / I'd appreciate it",
    "meaning": "礼貌打扰／表达感谢",
    "example": "Sorry to bother you; I'd really appreciate it.",
    "weight": 3
  },
  {
    "id": "sw-002430",
    "type": "word",
    "front": "announcement comes over the loudspeaker",
    "meaning": "扬声器传来广播通知",
    "example": "An announcement came over the loudspeaker.",
    "weight": 3
  },
  {
    "id": "sw-002431",
    "type": "word",
    "front": "faint / distorted / breaking up / cutting out",
    "meaning": "微弱／失真／断续／中断",
    "example": "The audio was muffled and cutting out.",
    "weight": 3
  },
  {
    "id": "sw-002432",
    "type": "word",
    "front": "platform change / moved to another platform",
    "meaning": "更换站台／被改到别的站台",
    "example": "There's been a platform change.",
    "weight": 3
  },
  {
    "id": "sw-002433",
    "type": "word",
    "front": "rush out the door / leave behind",
    "meaning": "冲出门／把东西落下",
    "example": "I rushed out and left my wallet behind.",
    "weight": 3
  },
  {
    "id": "sw-002434",
    "type": "word",
    "front": "dim / get dimmer / dim the lights",
    "meaning": "昏暗／变暗／调暗灯光",
    "example": "The beam was getting dimmer.",
    "weight": 3
  },
  {
    "id": "sw-002435",
    "type": "word",
    "front": "faint / noticeable / stubborn stain",
    "meaning": "淡／明显／顽固污渍",
    "example": "It's a noticeable brown stain.",
    "weight": 3
  },
  {
    "type": "word",
    "front": "a sharp pain",
    "meaning": "尖锐刺痛",
    "example": "",
    "weight": 3,
    "id": "sw-002436"
  },
  {
    "type": "word",
    "front": "a dull ache",
    "meaning": "隐隐钝痛",
    "example": "",
    "weight": 3,
    "id": "sw-002437"
  },
  {
    "type": "word",
    "front": "be sensitive to",
    "meaning": "对……敏感",
    "example": "",
    "weight": 3,
    "id": "sw-002438"
  },
  {
    "type": "word",
    "front": "fade away",
    "meaning": "逐渐消退",
    "example": "",
    "weight": 3,
    "id": "sw-002439"
  },
  {
    "type": "word",
    "front": "become more frequent",
    "meaning": "变得更频繁",
    "example": "",
    "weight": 3,
    "id": "sw-002440"
  },
  {
    "type": "word",
    "front": "bother someone",
    "meaning": "使某人不舒服或受打扰",
    "example": "",
    "weight": 3,
    "id": "sw-002441"
  },
  {
    "type": "word",
    "front": "rule out",
    "meaning": "排除可能性",
    "example": "",
    "weight": 3,
    "id": "sw-002442"
  },
  {
    "type": "word",
    "front": "flare up",
    "meaning": "症状突然加重",
    "example": "",
    "weight": 3,
    "id": "sw-002443"
  },
  {
    "type": "word",
    "front": "usual bus stop",
    "meaning": "惯常使用的公交站",
    "example": "",
    "weight": 3,
    "id": "sw-002444"
  },
  {
    "type": "word",
    "front": "temporarily closed",
    "meaning": "暂时关闭",
    "example": "",
    "weight": 3,
    "id": "sw-002445"
  },
  {
    "type": "word",
    "front": "roadworks",
    "meaning": "道路施工",
    "example": "",
    "weight": 3,
    "id": "sw-002446"
  },
  {
    "type": "word",
    "front": "divert traffic",
    "meaning": "引导车辆改道",
    "example": "",
    "weight": 3,
    "id": "sw-002447"
  },
  {
    "type": "word",
    "front": "replacement stop",
    "meaning": "替代站点",
    "example": "",
    "weight": 3,
    "id": "sw-002448"
  },
  {
    "type": "word",
    "front": "not particularly clear",
    "meaning": "不太清楚",
    "example": "",
    "weight": 3,
    "id": "sw-002449"
  },
  {
    "type": "word",
    "front": "on the opposite side of",
    "meaning": "在……另一侧",
    "example": "",
    "weight": 3,
    "id": "sw-002450"
  },
  {
    "type": "word",
    "front": "serve a stop",
    "meaning": "线路停靠某站",
    "example": "",
    "weight": 3,
    "id": "sw-002451"
  },
  {
    "type": "word",
    "front": "skip a stop",
    "meaning": "跳过一站不停",
    "example": "",
    "weight": 3,
    "id": "sw-002452"
  },
  {
    "type": "word",
    "front": "get off one stop earlier",
    "meaning": "提前一站下车",
    "example": "",
    "weight": 3,
    "id": "sw-002453"
  },
  {
    "type": "word",
    "front": "considerably longer",
    "meaning": "长得多",
    "example": "",
    "weight": 3,
    "id": "sw-002454"
  },
  {
    "type": "word",
    "front": "supporting document",
    "meaning": "支持性材料",
    "example": "",
    "weight": 3,
    "id": "sw-002456"
  },
  {
    "type": "word",
    "front": "walk-in service",
    "meaning": "免预约现场办理",
    "example": "",
    "weight": 3,
    "id": "sw-002457"
  },
  {
    "type": "word",
    "front": "call a number",
    "meaning": "叫号",
    "example": "",
    "weight": 3,
    "id": "sw-002458"
  },
  {
    "type": "word",
    "front": "hand over documents",
    "meaning": "递交文件",
    "example": "",
    "weight": 3,
    "id": "sw-002459"
  },
  {
    "type": "word",
    "front": "flag an issue",
    "meaning": "标记并提示问题",
    "example": "",
    "weight": 3,
    "id": "sw-002460"
  },
  {
    "type": "word",
    "front": "digital copy",
    "meaning": "电子版",
    "example": "",
    "weight": 3,
    "id": "sw-002462"
  },
  {
    "type": "word",
    "front": "photocopy",
    "meaning": "复印件",
    "example": "",
    "weight": 3,
    "id": "sw-002463"
  },
  {
    "type": "word",
    "front": "sign at the bottom",
    "meaning": "在底部签字",
    "example": "",
    "weight": 3,
    "id": "sw-002465"
  },
  {
    "type": "word",
    "front": "processing time",
    "meaning": "处理时间",
    "example": "",
    "weight": 3,
    "id": "sw-002466"
  },
  {
    "type": "word",
    "front": "collect in person",
    "meaning": "本人领取",
    "example": "",
    "weight": 3,
    "id": "sw-002467"
  },
  {
    "type": "word",
    "front": "drain unusually quickly",
    "meaning": "异常快速耗电",
    "example": "",
    "weight": 3,
    "id": "sw-002468"
  },
  {
    "type": "word",
    "front": "freezing weather",
    "meaning": "严寒天气",
    "example": "",
    "weight": 3,
    "id": "sw-002469"
  },
  {
    "type": "word",
    "front": "rely on",
    "meaning": "依赖",
    "example": "",
    "weight": 3,
    "id": "sw-002470"
  },
  {
    "type": "word",
    "front": "chemical reaction",
    "meaning": "化学反应",
    "example": "",
    "weight": 3,
    "id": "sw-002472"
  },
  {
    "type": "word",
    "front": "deliver power",
    "meaning": "输出电能",
    "example": "",
    "weight": 3,
    "id": "sw-002473"
  },
  {
    "type": "word",
    "front": "operate efficiently",
    "meaning": "高效运行",
    "example": "",
    "weight": 3,
    "id": "sw-002474"
  },
  {
    "type": "word",
    "front": "under heavy load",
    "meaning": "在高负载下",
    "example": "",
    "weight": 3,
    "id": "sw-002475"
  },
  {
    "type": "word",
    "front": "voltage drops",
    "meaning": "电压下降",
    "example": "",
    "weight": 3,
    "id": "sw-002476"
  },
  {
    "type": "word",
    "front": "apparent versus actual",
    "meaning": "表面与实际的区别",
    "example": "",
    "weight": 3,
    "id": "sw-002477"
  },
  {
    "type": "word",
    "front": "prolonged exposure",
    "meaning": "长时间暴露",
    "example": "",
    "weight": 3,
    "id": "sw-002478"
  },
  {
    "type": "word",
    "front": "battery lifespan",
    "meaning": "电池使用寿命",
    "example": "",
    "weight": 3,
    "id": "sw-002479"
  },
  {
    "type": "word",
    "front": "pick up a rental car",
    "meaning": "领取租赁车辆",
    "example": "",
    "weight": 3,
    "id": "sw-002480"
  },
  {
    "type": "word",
    "front": "rental agreement",
    "meaning": "租赁协议",
    "example": "",
    "weight": 3,
    "id": "sw-002481"
  },
  {
    "type": "word",
    "front": "insurance excess",
    "meaning": "保险自付额",
    "example": "",
    "weight": 3,
    "id": "sw-002482"
  },
  {
    "type": "word",
    "front": "fuel policy",
    "meaning": "燃油政策",
    "example": "",
    "weight": 3,
    "id": "sw-002483"
  },
  {
    "type": "word",
    "front": "walkaround inspection",
    "meaning": "绕车检查",
    "example": "",
    "weight": 3,
    "id": "sw-002485"
  },
  {
    "type": "word",
    "front": "scratch scuff dent",
    "meaning": "划痕、擦痕和凹痕",
    "example": "",
    "weight": 3,
    "id": "sw-002486"
  },
  {
    "type": "word",
    "front": "mark on a report",
    "meaning": "在报告中标记",
    "example": "",
    "weight": 3,
    "id": "sw-002487"
  },
  {
    "type": "word",
    "front": "fuel gauge",
    "meaning": "油表",
    "example": "",
    "weight": 3,
    "id": "sw-002489"
  },
  {
    "type": "word",
    "front": "dashboard",
    "meaning": "仪表盘",
    "example": "",
    "weight": 3,
    "id": "sw-002490"
  },
  {
    "type": "word",
    "front": "be held responsible for",
    "meaning": "被要求为……承担责任",
    "example": "",
    "weight": 3,
    "id": "sw-002491"
  },
  {
    "type": "word",
    "front": "rubbing sensation",
    "meaning": "摩擦感",
    "example": "",
    "weight": 3,
    "id": "sw-002492"
  },
  {
    "type": "word",
    "front": "red and tender",
    "meaning": "发红且触碰疼痛",
    "example": "",
    "weight": 3,
    "id": "sw-002493"
  },
  {
    "type": "word",
    "front": "slightly swollen",
    "meaning": "轻微肿胀",
    "example": "",
    "weight": 3,
    "id": "sw-002494"
  },
  {
    "type": "word",
    "front": "grit",
    "meaning": "沙砾",
    "example": "",
    "weight": 3,
    "id": "sw-002495"
  },
  {
    "type": "word",
    "front": "irritated skin",
    "meaning": "受刺激的皮肤",
    "example": "",
    "weight": 3,
    "id": "sw-002496"
  },
  {
    "type": "word",
    "front": "blister dressing",
    "meaning": "水泡敷贴",
    "example": "",
    "weight": 3,
    "id": "sw-002497"
  },
  {
    "type": "word",
    "front": "snug",
    "meaning": "贴合而不勒",
    "example": "",
    "weight": 3,
    "id": "sw-002498"
  },
  {
    "type": "word",
    "front": "excessively tight",
    "meaning": "过分紧绷",
    "example": "",
    "weight": 3,
    "id": "sw-002499"
  },
  {
    "type": "word",
    "front": "test it out",
    "meaning": "试试看",
    "example": "",
    "weight": 3,
    "id": "sw-002500"
  },
  {
    "type": "word",
    "front": "take ownership of",
    "meaning": "主动承担完整责任",
    "example": "",
    "weight": 3,
    "id": "sw-002502"
  },
  {
    "type": "word",
    "front": "pull your weight",
    "meaning": "完成自己应承担的份额",
    "example": "",
    "weight": 3,
    "id": "sw-002504"
  },
  {
    "type": "word",
    "front": "struggle with data",
    "meaning": "处理数据遇到困难",
    "example": "",
    "weight": 3,
    "id": "sw-002505"
  },
  {
    "type": "word",
    "front": "misleading chart",
    "meaning": "容易误导的图表",
    "example": "",
    "weight": 3,
    "id": "sw-002507"
  },
  {
    "type": "word",
    "front": "make decent progress",
    "meaning": "取得不错进展",
    "example": "",
    "weight": 3,
    "id": "sw-002508"
  },
  {
    "type": "word",
    "front": "pick up the slack",
    "meaning": "接手别人没完成的任务",
    "example": "",
    "weight": 3,
    "id": "sw-002509"
  },
  {
    "type": "word",
    "front": "follow through",
    "meaning": "落实承诺",
    "example": "",
    "weight": 3,
    "id": "sw-002510"
  },
  {
    "type": "word",
    "front": "lively discussion",
    "meaning": "热烈讨论",
    "example": "",
    "weight": 3,
    "id": "sw-002512"
  },
  {
    "type": "word",
    "front": "sound irritated",
    "meaning": "听起来不耐烦",
    "example": "",
    "weight": 3,
    "id": "sw-002513"
  },
  {
    "type": "word",
    "front": "wait for a pause",
    "meaning": "等待停顿",
    "example": "",
    "weight": 3,
    "id": "sw-002514"
  },
  {
    "type": "word",
    "front": "Could I finish my point",
    "meaning": "能让我说完吗",
    "example": "",
    "weight": 3,
    "id": "sw-002515"
  },
  {
    "type": "word",
    "front": "see both sides",
    "meaning": "理解双方立场",
    "example": "",
    "weight": 3,
    "id": "sw-002516"
  },
  {
    "type": "word",
    "front": "get your point across",
    "meaning": "让对方理解自己的观点",
    "example": "",
    "weight": 3,
    "id": "sw-002517"
  },
  {
    "type": "word",
    "front": "one-sided argument",
    "meaning": "片面的论述",
    "example": "",
    "weight": 3,
    "id": "sw-002518"
  },
  {
    "type": "word",
    "front": "unusually chilly",
    "meaning": "异常寒冷",
    "example": "",
    "weight": 3,
    "id": "sw-002519"
  },
  {
    "type": "word",
    "front": "draughty room",
    "meaning": "漏风的房间",
    "example": "",
    "weight": 3,
    "id": "sw-002520"
  },
  {
    "type": "word",
    "front": "run your hand along",
    "meaning": "用手沿着……摸",
    "example": "",
    "weight": 3,
    "id": "sw-002522"
  },
  {
    "type": "word",
    "front": "heat up properly",
    "meaning": "正常暖起来",
    "example": "",
    "weight": 3,
    "id": "sw-002523"
  },
  {
    "type": "word",
    "front": "circulate freely",
    "meaning": "自由流通",
    "example": "",
    "weight": 3,
    "id": "sw-002524"
  },
  {
    "type": "word",
    "front": "sooner or later",
    "meaning": "早晚有一天",
    "example": "",
    "weight": 3,
    "id": "sw-002525"
  },
  {
    "type": "word",
    "front": "procrastination",
    "meaning": "拖延行为",
    "example": "",
    "weight": 3,
    "id": "sw-002526"
  },
  {
    "type": "word",
    "front": "overwhelming",
    "meaning": "让人难以应付的",
    "example": "",
    "weight": 3,
    "id": "sw-002527"
  },
  {
    "type": "word",
    "front": "manageable",
    "meaning": "可以处理的",
    "example": "",
    "weight": 3,
    "id": "sw-002528"
  },
  {
    "type": "word",
    "front": "specific goal",
    "meaning": "明确目标",
    "example": "",
    "weight": 3,
    "id": "sw-002530"
  },
  {
    "type": "word",
    "front": "immediate relief",
    "meaning": "即时宽慰",
    "example": "",
    "weight": 3,
    "id": "sw-002531"
  },
  {
    "type": "word",
    "front": "in the long run",
    "meaning": "长期来看",
    "example": "",
    "weight": 3,
    "id": "sw-002532"
  },
  {
    "type": "word",
    "front": "feel motivated",
    "meaning": "感到有动力",
    "example": "",
    "weight": 3,
    "id": "sw-002533"
  },
  {
    "type": "word",
    "front": "mental barrier",
    "meaning": "心理障碍",
    "example": "",
    "weight": 3,
    "id": "sw-002534"
  },
  {
    "type": "word",
    "front": "initial hurdle",
    "meaning": "最初的难关",
    "example": "",
    "weight": 3,
    "id": "sw-002535"
  },
  {
    "type": "word",
    "front": "unattended reception",
    "meaning": "无人值守的前台",
    "example": "",
    "weight": 3,
    "id": "sw-002536"
  },
  {
    "type": "word",
    "front": "self-check-in instructions",
    "meaning": "自助入住说明",
    "example": "",
    "weight": 3,
    "id": "sw-002537"
  },
  {
    "type": "word",
    "front": "flash red",
    "meaning": "指示灯闪红",
    "example": "",
    "weight": 3,
    "id": "sw-002538"
  },
  {
    "type": "word",
    "front": "stiff cover",
    "meaning": "很紧的盖子",
    "example": "",
    "weight": 3,
    "id": "sw-002540"
  },
  {
    "type": "word",
    "front": "jammed lock",
    "meaning": "卡住的锁",
    "example": "",
    "weight": 3,
    "id": "sw-002541"
  },
  {
    "type": "word",
    "front": "pull firmly",
    "meaning": "稳稳拉动",
    "example": "",
    "weight": 3,
    "id": "sw-002542"
  },
  {
    "type": "word",
    "front": "after-hours contact",
    "meaning": "非营业时段联系电话",
    "example": "",
    "weight": 3,
    "id": "sw-002543"
  },
  {
    "type": "word",
    "front": "shallow stream",
    "meaning": "浅溪",
    "example": "",
    "weight": 3,
    "id": "sw-002544"
  },
  {
    "type": "word",
    "front": "water level rises considerably",
    "meaning": "水位明显上涨",
    "example": "",
    "weight": 3,
    "id": "sw-002545"
  },
  {
    "type": "word",
    "front": "fast-flowing stream",
    "meaning": "湍急溪流",
    "example": "",
    "weight": 3,
    "id": "sw-002546"
  },
  {
    "type": "word",
    "front": "stepping stones",
    "meaning": "过溪踏脚石",
    "example": "",
    "weight": 3,
    "id": "sw-002548"
  },
  {
    "type": "word",
    "front": "completely submerged",
    "meaning": "完全被淹没",
    "example": "",
    "weight": 3,
    "id": "sw-002549"
  },
  {
    "type": "word",
    "front": "streambed",
    "meaning": "溪床",
    "example": "",
    "weight": 3,
    "id": "sw-002550"
  },
  {
    "type": "word",
    "front": "upstream downstream",
    "meaning": "上游与下游",
    "example": "",
    "weight": 3,
    "id": "sw-002552"
  },
  {
    "type": "word",
    "front": "obvious alternative",
    "meaning": "明显的替代路线",
    "example": "",
    "weight": 3,
    "id": "sw-002553"
  },
  {
    "type": "word",
    "front": "washed-out trail",
    "meaning": "被水冲毁的路线",
    "example": "",
    "weight": 3,
    "id": "sw-002554"
  },
  {
    "type": "word",
    "front": "impassable crossing",
    "meaning": "无法通行的过溪点",
    "example": "",
    "weight": 3,
    "id": "sw-002555"
  },
  {
    "type": "word",
    "front": "thaw",
    "meaning": "解冻",
    "example": "",
    "weight": 3,
    "id": "sw-002556"
  },
  {
    "type": "word",
    "front": "pat dry",
    "meaning": "轻拍至表面干燥",
    "example": "",
    "weight": 3,
    "id": "sw-002557"
  },
  {
    "type": "word",
    "front": "mince garlic",
    "meaning": "剁成蒜末",
    "example": "",
    "weight": 3,
    "id": "sw-002558"
  },
  {
    "type": "word",
    "front": "preheat a pan",
    "meaning": "提前预热锅",
    "example": "",
    "weight": 3,
    "id": "sw-002559"
  },
  {
    "type": "word",
    "front": "drizzle in oil",
    "meaning": "少量淋入油",
    "example": "",
    "weight": 3,
    "id": "sw-002560"
  },
  {
    "type": "word",
    "front": "sizzle",
    "meaning": "发出滋滋声",
    "example": "",
    "weight": 3,
    "id": "sw-002561"
  },
  {
    "type": "word",
    "front": "splatter",
    "meaning": "油或液体四处飞溅",
    "example": "",
    "weight": 3,
    "id": "sw-002562"
  },
  {
    "type": "word",
    "front": "sear",
    "meaning": "高温煎制表面",
    "example": "",
    "weight": 3,
    "id": "sw-002563"
  },
  {
    "type": "word",
    "front": "flip the chicken",
    "meaning": "给鸡肉翻面",
    "example": "",
    "weight": 3,
    "id": "sw-002564"
  },
  {
    "type": "word",
    "front": "a pair of tongs",
    "meaning": "一把食物夹",
    "example": "",
    "weight": 3,
    "id": "sw-002565"
  },
  {
    "type": "word",
    "front": "cook through",
    "meaning": "内部完全熟透",
    "example": "",
    "weight": 3,
    "id": "sw-002566"
  },
  {
    "type": "word",
    "front": "the thickest part",
    "meaning": "最厚的部位",
    "example": "",
    "weight": 3,
    "id": "sw-002567"
  },
  {
    "type": "word",
    "front": "let the meat rest",
    "meaning": "熟后静置",
    "example": "",
    "weight": 3,
    "id": "sw-002568"
  },
  {
    "type": "word",
    "front": "juicy and tender",
    "meaning": "多汁鲜嫩",
    "example": "",
    "weight": 3,
    "id": "sw-002569"
  },
  {
    "type": "word",
    "front": "leak-proof",
    "meaning": "防漏的",
    "example": "",
    "weight": 3,
    "id": "sw-002570"
  },
  {
    "type": "word",
    "front": "reusable",
    "meaning": "可重复使用的",
    "example": "",
    "weight": 3,
    "id": "sw-002571"
  },
  {
    "type": "word",
    "front": "be advertised as",
    "meaning": "被宣传为",
    "example": "",
    "weight": 3,
    "id": "sw-002572"
  },
  {
    "type": "word",
    "front": "defective",
    "meaning": "有质量缺陷的",
    "example": "",
    "weight": 3,
    "id": "sw-002573"
  },
  {
    "type": "word",
    "front": "manufacturing defect",
    "meaning": "制造缺陷",
    "example": "",
    "weight": 3,
    "id": "sw-002574"
  },
  {
    "type": "word",
    "front": "proof of purchase",
    "meaning": "购买凭证",
    "example": "",
    "weight": 3,
    "id": "sw-002575"
  },
  {
    "type": "word",
    "front": "itemised receipt",
    "meaning": "逐项列明的收据",
    "example": "",
    "weight": 3,
    "id": "sw-002576"
  },
  {
    "type": "word",
    "front": "original packaging",
    "meaning": "原包装",
    "example": "",
    "weight": 3,
    "id": "sw-002577"
  },
  {
    "type": "word",
    "front": "return window",
    "meaning": "允许退货的期限",
    "example": "",
    "weight": 3,
    "id": "sw-002578"
  },
  {
    "type": "word",
    "front": "eligible for a refund",
    "meaning": "符合退款条件",
    "example": "",
    "weight": 3,
    "id": "sw-002579"
  },
  {
    "type": "word",
    "front": "store credit",
    "meaning": "商店消费额度",
    "example": "",
    "weight": 3,
    "id": "sw-002580"
  },
  {
    "type": "word",
    "front": "original payment method",
    "meaning": "原付款方式",
    "example": "",
    "weight": 3,
    "id": "sw-002581"
  },
  {
    "type": "word",
    "front": "escalate an issue",
    "meaning": "向更高权限提交问题",
    "example": "",
    "weight": 3,
    "id": "sw-002582"
  },
  {
    "type": "word",
    "front": "sync across devices",
    "meaning": "跨设备同步",
    "example": "",
    "weight": 3,
    "id": "sw-002584"
  },
  {
    "type": "word",
    "front": "cloud storage",
    "meaning": "云存储",
    "example": "",
    "weight": 3,
    "id": "sw-002585"
  },
  {
    "type": "word",
    "front": "storage quota",
    "meaning": "存储配额",
    "example": "",
    "weight": 3,
    "id": "sw-002586"
  },
  {
    "type": "word",
    "front": "upload queue",
    "meaning": "上传队列",
    "example": "",
    "weight": 3,
    "id": "sw-002587"
  },
  {
    "type": "word",
    "front": "resume syncing",
    "meaning": "恢复同步",
    "example": "",
    "weight": 3,
    "id": "sw-002588"
  },
  {
    "type": "word",
    "front": "free up space",
    "meaning": "腾出空间",
    "example": "",
    "weight": 3,
    "id": "sw-002589"
  },
  {
    "type": "word",
    "front": "duplicate copy",
    "meaning": "重复副本",
    "example": "",
    "weight": 3,
    "id": "sw-002590"
  },
  {
    "type": "word",
    "front": "background sync",
    "meaning": "后台同步",
    "example": "",
    "weight": 3,
    "id": "sw-002591"
  },
  {
    "type": "word",
    "front": "grant permission",
    "meaning": "授予权限",
    "example": "",
    "weight": 3,
    "id": "sw-002592"
  },
  {
    "type": "word",
    "front": "battery-saving mode",
    "meaning": "省电模式",
    "example": "",
    "weight": 3,
    "id": "sw-002593"
  },
  {
    "type": "word",
    "front": "conflicting versions",
    "meaning": "冲突的文件版本",
    "example": "",
    "weight": 3,
    "id": "sw-002594"
  },
  {
    "type": "word",
    "front": "overwrite",
    "meaning": "覆盖原有数据",
    "example": "",
    "weight": 3,
    "id": "sw-002595"
  },
  {
    "type": "word",
    "front": "restore from backup",
    "meaning": "从备份恢复",
    "example": "",
    "weight": 3,
    "id": "sw-002596"
  },
  {
    "type": "word",
    "front": "make available offline",
    "meaning": "设置为离线可用",
    "example": "",
    "weight": 3,
    "id": "sw-002597"
  },
  {
    "type": "word",
    "front": "perception",
    "meaning": "主观感知",
    "example": "",
    "weight": 3,
    "id": "sw-002598"
  },
  {
    "type": "word",
    "front": "idle",
    "meaning": "空闲无事的",
    "example": "",
    "weight": 3,
    "id": "sw-002599"
  },
  {
    "type": "word",
    "front": "uncertainty",
    "meaning": "不确定性",
    "example": "",
    "weight": 3,
    "id": "sw-002600"
  },
  {
    "type": "word",
    "front": "overestimate",
    "meaning": "高估",
    "example": "",
    "weight": 3,
    "id": "sw-002601"
  },
  {
    "type": "word",
    "front": "underestimate",
    "meaning": "低估",
    "example": "",
    "weight": 3,
    "id": "sw-002602"
  },
  {
    "type": "word",
    "front": "grow impatient",
    "meaning": "逐渐失去耐心",
    "example": "",
    "weight": 3,
    "id": "sw-002603"
  },
  {
    "type": "word",
    "front": "bottleneck",
    "meaning": "瓶颈",
    "example": "",
    "weight": 3,
    "id": "sw-002604"
  },
  {
    "type": "word",
    "front": "peak hours",
    "meaning": "高峰时段",
    "example": "",
    "weight": 3,
    "id": "sw-002605"
  },
  {
    "type": "word",
    "front": "first-come first-served",
    "meaning": "先到先得",
    "example": "",
    "weight": 3,
    "id": "sw-002606"
  },
  {
    "type": "word",
    "front": "move at a crawl",
    "meaning": "移动极其缓慢",
    "example": "",
    "weight": 3,
    "id": "sw-002607"
  },
  {
    "type": "word",
    "front": "rough estimate",
    "meaning": "大致估计",
    "example": "",
    "weight": 3,
    "id": "sw-002608"
  },
  {
    "type": "word",
    "front": "reassure someone",
    "meaning": "让某人放心",
    "example": "",
    "weight": 3,
    "id": "sw-002609"
  },
  {
    "type": "word",
    "front": "manage expectations",
    "meaning": "管理预期",
    "example": "",
    "weight": 3,
    "id": "sw-002610"
  },
  {
    "type": "word",
    "front": "be transparent about",
    "meaning": "坦诚公开说明",
    "example": "",
    "weight": 3,
    "id": "sw-002611"
  },
  {
    "type": "word",
    "front": "keep someone informed",
    "meaning": "持续通报信息",
    "example": "",
    "weight": 3,
    "id": "sw-002612"
  },
  {
    "type": "word",
    "front": "carry-on allowance",
    "meaning": "随身行李额度",
    "example": "",
    "weight": 3,
    "id": "sw-002613"
  },
  {
    "type": "word",
    "front": "personal item",
    "meaning": "座椅下小件随身物品",
    "example": "",
    "weight": 3,
    "id": "sw-002614"
  },
  {
    "type": "word",
    "front": "luggage sizer",
    "meaning": "行李尺寸框",
    "example": "",
    "weight": 3,
    "id": "sw-002615"
  },
  {
    "type": "word",
    "front": "oversized",
    "meaning": "尺寸超标的",
    "example": "",
    "weight": 3,
    "id": "sw-002616"
  },
  {
    "type": "word",
    "front": "exceed a limit",
    "meaning": "超过上限",
    "example": "",
    "weight": 3,
    "id": "sw-002617"
  },
  {
    "type": "word",
    "front": "squeeze into a frame",
    "meaning": "勉强塞进框内",
    "example": "",
    "weight": 3,
    "id": "sw-002618"
  },
  {
    "type": "word",
    "front": "stick out",
    "meaning": "向外突出",
    "example": "",
    "weight": 3,
    "id": "sw-002619"
  },
  {
    "type": "word",
    "front": "baggage hold",
    "meaning": "行李货舱",
    "example": "",
    "weight": 3,
    "id": "sw-002620"
  },
  {
    "type": "word",
    "front": "gate-check a bag",
    "meaning": "在登机口办理托运",
    "example": "",
    "weight": 3,
    "id": "sw-002621"
  },
  {
    "type": "word",
    "front": "excess baggage fee",
    "meaning": "超额行李费",
    "example": "",
    "weight": 3,
    "id": "sw-002622"
  },
  {
    "type": "word",
    "front": "valuables",
    "meaning": "贵重物品",
    "example": "",
    "weight": 3,
    "id": "sw-002623"
  },
  {
    "type": "word",
    "front": "essentials",
    "meaning": "必需品",
    "example": "",
    "weight": 3,
    "id": "sw-002624"
  },
  {
    "type": "word",
    "front": "zip up",
    "meaning": "拉好拉链",
    "example": "",
    "weight": 3,
    "id": "sw-002626"
  },
  {
    "type": "word",
    "front": "hip belt",
    "meaning": "背包腰带",
    "example": "",
    "weight": 3,
    "id": "sw-002627"
  },
  {
    "type": "word",
    "front": "sternum strap",
    "meaning": "背包胸带",
    "example": "",
    "weight": 3,
    "id": "sw-002628"
  },
  {
    "type": "word",
    "front": "load lifters",
    "meaning": "上部负重调节带",
    "example": "",
    "weight": 3,
    "id": "sw-002629"
  },
  {
    "type": "word",
    "front": "compression straps",
    "meaning": "压缩带",
    "example": "",
    "weight": 3,
    "id": "sw-002630"
  },
  {
    "type": "word",
    "front": "dig into",
    "meaning": "勒进、压痛",
    "example": "",
    "weight": 3,
    "id": "sw-002631"
  },
  {
    "type": "word",
    "front": "top-heavy",
    "meaning": "上重下轻的",
    "example": "",
    "weight": 3,
    "id": "sw-002632"
  },
  {
    "type": "word",
    "front": "sway",
    "meaning": "左右摇晃",
    "example": "",
    "weight": 3,
    "id": "sw-002633"
  },
  {
    "type": "word",
    "front": "sag",
    "meaning": "松垂下坠",
    "example": "",
    "weight": 3,
    "id": "sw-002634"
  },
  {
    "type": "word",
    "front": "shift load onto hips",
    "meaning": "把重量转移到髋部",
    "example": "",
    "weight": 3,
    "id": "sw-002635"
  },
  {
    "type": "word",
    "front": "centre of gravity",
    "meaning": "重心",
    "example": "",
    "weight": 3,
    "id": "sw-002636"
  },
  {
    "type": "word",
    "front": "chafing",
    "meaning": "皮肤反复摩擦损伤",
    "example": "",
    "weight": 3,
    "id": "sw-002637"
  },
  {
    "type": "word",
    "front": "pressure point",
    "meaning": "局部受压点",
    "example": "",
    "weight": 3,
    "id": "sw-002638"
  },
  {
    "type": "word",
    "front": "torso length",
    "meaning": "躯干长度",
    "example": "",
    "weight": 3,
    "id": "sw-002639"
  },
  {
    "type": "word",
    "front": "shoulder blade",
    "meaning": "肩胛骨",
    "example": "",
    "weight": 3,
    "id": "sw-002640"
  },
  {
    "type": "word",
    "front": "dial in the fit",
    "meaning": "小幅微调到合身状态",
    "example": "",
    "weight": 3,
    "id": "sw-002641"
  },
  {
    "type": "word",
    "front": "fitted sheet",
    "meaning": "松紧床单",
    "example": "",
    "weight": 3,
    "id": "sw-002642"
  },
  {
    "type": "word",
    "front": "elasticated edge",
    "meaning": "带松紧带的边缘",
    "example": "",
    "weight": 3,
    "id": "sw-002643"
  },
  {
    "type": "word",
    "front": "mattress protector",
    "meaning": "床垫保护套",
    "example": "",
    "weight": 3,
    "id": "sw-002644"
  },
  {
    "type": "word",
    "front": "slip off the corner",
    "meaning": "从角落滑脱",
    "example": "",
    "weight": 3,
    "id": "sw-002645"
  },
  {
    "type": "word",
    "front": "stretch over",
    "meaning": "拉伸套过",
    "example": "",
    "weight": 3,
    "id": "sw-002646"
  },
  {
    "type": "word",
    "front": "duvet cover",
    "meaning": "被套",
    "example": "",
    "weight": 3,
    "id": "sw-002647"
  },
  {
    "type": "word",
    "front": "work into place",
    "meaning": "逐步调整到位",
    "example": "",
    "weight": 3,
    "id": "sw-002648"
  },
  {
    "type": "word",
    "front": "fasten buttons",
    "meaning": "扣好纽扣",
    "example": "",
    "weight": 3,
    "id": "sw-002649"
  },
  {
    "type": "word",
    "front": "lay flat",
    "meaning": "平铺",
    "example": "",
    "weight": 3,
    "id": "sw-002650"
  },
  {
    "type": "word",
    "front": "fold back",
    "meaning": "将边缘翻折回来",
    "example": "",
    "weight": 3,
    "id": "sw-002651"
  },
  {
    "type": "word",
    "front": "pillowcase",
    "meaning": "枕套",
    "example": "",
    "weight": 3,
    "id": "sw-002652"
  },
  {
    "type": "word",
    "front": "chainring",
    "meaning": "自行车前牙盘齿片",
    "example": "",
    "weight": 3,
    "id": "sw-002653"
  },
  {
    "type": "word",
    "front": "rear derailleur",
    "meaning": "后拨链器",
    "example": "",
    "weight": 3,
    "id": "sw-002654"
  },
  {
    "type": "word",
    "front": "shift down a gear",
    "meaning": "降一个挡位",
    "example": "",
    "weight": 3,
    "id": "sw-002655"
  },
  {
    "type": "word",
    "front": "pedal stroke",
    "meaning": "一次踩踏循环",
    "example": "",
    "weight": 3,
    "id": "sw-002656"
  },
  {
    "type": "word",
    "front": "pressure on pedals",
    "meaning": "施加在脚踏上的力",
    "example": "",
    "weight": 3,
    "id": "sw-002657"
  },
  {
    "type": "word",
    "front": "grinding noise",
    "meaning": "粗糙刺耳的摩擦声",
    "example": "",
    "weight": 3,
    "id": "sw-002658"
  },
  {
    "type": "word",
    "front": "get wedged between",
    "meaning": "卡在两物之间",
    "example": "",
    "weight": 3,
    "id": "sw-002659"
  },
  {
    "type": "word",
    "front": "chain tension",
    "meaning": "链条张力",
    "example": "",
    "weight": 3,
    "id": "sw-002660"
  },
  {
    "type": "word",
    "front": "greasy residue",
    "meaning": "油腻残留物",
    "example": "",
    "weight": 3,
    "id": "sw-002661"
  },
  {
    "type": "word",
    "front": "hook back onto",
    "meaning": "重新挂回",
    "example": "",
    "weight": 3,
    "id": "sw-002662"
  },
  {
    "type": "word",
    "front": "ease off the pedals",
    "meaning": "减轻脚踏施力",
    "example": "",
    "weight": 3,
    "id": "sw-002663"
  },
  {
    "type": "word",
    "front": "jerky shifting",
    "meaning": "顿挫不顺的换挡",
    "example": "",
    "weight": 3,
    "id": "sw-002664"
  },
  {
    "type": "word",
    "front": "have drivetrain serviced",
    "meaning": "请人保养传动系统",
    "example": "",
    "weight": 3,
    "id": "sw-002665"
  },
  {
    "type": "word",
    "front": "crankset",
    "meaning": "曲柄牙盘组件",
    "example": "",
    "weight": 3,
    "id": "sw-002666"
  },
  {
    "type": "word",
    "front": "duplicate charge",
    "meaning": "重复扣款",
    "example": "",
    "weight": 3,
    "id": "sw-002667"
  },
  {
    "type": "word",
    "front": "pending transaction",
    "meaning": "待处理的交易",
    "example": "",
    "weight": 3,
    "id": "sw-002668"
  },
  {
    "type": "word",
    "front": "posted transaction",
    "meaning": "正式入账的交易",
    "example": "",
    "weight": 3,
    "id": "sw-002669"
  },
  {
    "type": "word",
    "front": "authorisation hold",
    "meaning": "预授权冻结",
    "example": "",
    "weight": 3,
    "id": "sw-002670"
  },
  {
    "type": "word",
    "front": "merchant",
    "meaning": "收款商户",
    "example": "",
    "weight": 3,
    "id": "sw-002671"
  },
  {
    "type": "word",
    "front": "transaction reference number",
    "meaning": "交易参考编号",
    "example": "",
    "weight": 3,
    "id": "sw-002672"
  },
  {
    "type": "word",
    "front": "bank statement",
    "meaning": "银行对账单",
    "example": "",
    "weight": 3,
    "id": "sw-002673"
  },
  {
    "type": "word",
    "front": "billing discrepancy",
    "meaning": "账单不一致",
    "example": "",
    "weight": 3,
    "id": "sw-002674"
  },
  {
    "type": "word",
    "front": "match up with",
    "meaning": "与……记录相符",
    "example": "",
    "weight": 3,
    "id": "sw-002675"
  },
  {
    "type": "word",
    "front": "reverse a transaction",
    "meaning": "撤销或冲回交易",
    "example": "",
    "weight": 3,
    "id": "sw-002677"
  },
  {
    "type": "word",
    "front": "reimbursement",
    "meaning": "垫付费用的报销",
    "example": "",
    "weight": 3,
    "id": "sw-002678"
  },
  {
    "type": "word",
    "front": "investigate a transaction",
    "meaning": "调查交易",
    "example": "",
    "weight": 3,
    "id": "sw-002679"
  },
  {
    "type": "word",
    "front": "word of mouth",
    "meaning": "口碑传播",
    "example": "",
    "weight": 3,
    "id": "sw-002680"
  },
  {
    "type": "word",
    "front": "firsthand experience",
    "meaning": "亲身体验",
    "example": "",
    "weight": 3,
    "id": "sw-002681"
  },
  {
    "type": "word",
    "front": "paid endorsement",
    "meaning": "付费推荐",
    "example": "",
    "weight": 3,
    "id": "sw-002682"
  },
  {
    "type": "word",
    "front": "marketing pitch",
    "meaning": "营销推介",
    "example": "",
    "weight": 3,
    "id": "sw-002683"
  },
  {
    "type": "word",
    "front": "vested interest",
    "meaning": "会影响判断的切身利益",
    "example": "",
    "weight": 3,
    "id": "sw-002684"
  },
  {
    "type": "word",
    "front": "be sceptical of",
    "meaning": "对……持怀疑态度",
    "example": "",
    "weight": 3,
    "id": "sw-002686"
  },
  {
    "type": "word",
    "front": "vouch for",
    "meaning": "以个人信誉担保",
    "example": "",
    "weight": 3,
    "id": "sw-002687"
  },
  {
    "type": "word",
    "front": "track record",
    "meaning": "过往表现记录",
    "example": "",
    "weight": 3,
    "id": "sw-002688"
  },
  {
    "type": "word",
    "front": "take at face value",
    "meaning": "不核实就照单全收",
    "example": "",
    "weight": 3,
    "id": "sw-002689"
  },
  {
    "type": "word",
    "front": "persuasive",
    "meaning": "有说服力的",
    "example": "",
    "weight": 3,
    "id": "sw-002690"
  },
  {
    "type": "word",
    "front": "compare notes",
    "meaning": "交换信息、比较经历",
    "example": "",
    "weight": 3,
    "id": "sw-002691"
  },
  {
    "type": "word",
    "front": "back up a claim",
    "meaning": "用证据支持说法",
    "example": "",
    "weight": 3,
    "id": "sw-002692"
  },
  {
    "type": "word",
    "front": "carriage number",
    "meaning": "车厢编号",
    "example": "",
    "weight": 3,
    "id": "sw-002694"
  },
  {
    "type": "word",
    "front": "seat allocation",
    "meaning": "座位分配信息",
    "example": "",
    "weight": 3,
    "id": "sw-002695"
  },
  {
    "type": "word",
    "front": "window seat",
    "meaning": "靠窗座",
    "example": "",
    "weight": 3,
    "id": "sw-002696"
  },
  {
    "type": "word",
    "front": "aisle seat",
    "meaning": "靠过道座",
    "example": "",
    "weight": 3,
    "id": "sw-002697"
  },
  {
    "type": "word",
    "front": "reservation indicator",
    "meaning": "座位预订状态标识",
    "example": "",
    "weight": 3,
    "id": "sw-002698"
  },
  {
    "type": "word",
    "front": "unreserved seating",
    "meaning": "不指定座位的区域",
    "example": "",
    "weight": 3,
    "id": "sw-002699"
  },
  {
    "type": "word",
    "front": "double-booked",
    "meaning": "重复预订",
    "example": "",
    "weight": 3,
    "id": "sw-002700"
  },
  {
    "type": "word",
    "front": "swap seats with",
    "meaning": "与某人换座",
    "example": "",
    "weight": 3,
    "id": "sw-002701"
  },
  {
    "type": "word",
    "front": "overhead luggage rack",
    "meaning": "头顶行李架",
    "example": "",
    "weight": 3,
    "id": "sw-002702"
  },
  {
    "type": "word",
    "front": "obstruct the aisle",
    "meaning": "挡住过道",
    "example": "",
    "weight": 3,
    "id": "sw-002703"
  },
  {
    "type": "word",
    "front": "ticket inspector",
    "meaning": "查票员",
    "example": "",
    "weight": 3,
    "id": "sw-002704"
  },
  {
    "type": "word",
    "front": "travel companion",
    "meaning": "同行旅伴",
    "example": "",
    "weight": 3,
    "id": "sw-002705"
  },
  {
    "type": "word",
    "front": "adjacent to",
    "meaning": "紧挨着、相邻",
    "example": "",
    "weight": 3,
    "id": "sw-002706"
  },
  {
    "type": "word",
    "front": "pasture",
    "meaning": "放牧草地",
    "example": "",
    "weight": 3,
    "id": "sw-002707"
  },
  {
    "type": "word",
    "front": "graze",
    "meaning": "吃草",
    "example": "",
    "weight": 3,
    "id": "sw-002708"
  },
  {
    "type": "word",
    "front": "a herd of cattle",
    "meaning": "一群牛",
    "example": "",
    "weight": 3,
    "id": "sw-002709"
  },
  {
    "type": "word",
    "front": "calf",
    "meaning": "小牛",
    "example": "",
    "weight": 3,
    "id": "sw-002710"
  },
  {
    "type": "word",
    "front": "livestock",
    "meaning": "牲畜",
    "example": "",
    "weight": 3,
    "id": "sw-002711"
  },
  {
    "type": "word",
    "front": "startle",
    "meaning": "突然惊吓",
    "example": "",
    "weight": 3,
    "id": "sw-002712"
  },
  {
    "type": "word",
    "front": "fence line",
    "meaning": "围栏边界线",
    "example": "",
    "weight": 3,
    "id": "sw-002713"
  },
  {
    "type": "word",
    "front": "gate latch",
    "meaning": "门闩",
    "example": "",
    "weight": 3,
    "id": "sw-002714"
  },
  {
    "type": "word",
    "front": "cut across",
    "meaning": "抄近路横穿",
    "example": "",
    "weight": 3,
    "id": "sw-002715"
  },
  {
    "type": "word",
    "front": "skirt the edge of",
    "meaning": "沿边缘绕行",
    "example": "",
    "weight": 3,
    "id": "sw-002716"
  },
  {
    "type": "word",
    "front": "public footpath",
    "meaning": "允许公众步行的小路",
    "example": "",
    "weight": 3,
    "id": "sw-002717"
  },
  {
    "type": "word",
    "front": "trample",
    "meaning": "踩踏损害",
    "example": "",
    "weight": 3,
    "id": "sw-002718"
  },
  {
    "type": "word",
    "front": "run over time",
    "meaning": "演示超时",
    "example": "",
    "weight": 3,
    "id": "sw-002719"
  },
  {
    "type": "word",
    "front": "go off on a tangent",
    "meaning": "说话偏离主题",
    "example": "",
    "weight": 3,
    "id": "sw-002720"
  },
  {
    "type": "word",
    "front": "ramble on",
    "meaning": "啰唆地一直说",
    "example": "",
    "weight": 3,
    "id": "sw-002721"
  },
  {
    "type": "word",
    "front": "concise explanation",
    "meaning": "简洁有信息量的解释",
    "example": "",
    "weight": 3,
    "id": "sw-002722"
  },
  {
    "type": "word",
    "front": "get straight to the point",
    "meaning": "直接说重点",
    "example": "",
    "weight": 3,
    "id": "sw-002723"
  },
  {
    "type": "word",
    "front": "glance at notes",
    "meaning": "快速瞥一眼笔记",
    "example": "",
    "weight": 3,
    "id": "sw-002724"
  },
  {
    "type": "word",
    "front": "stumble over your words",
    "meaning": "说话磕绊",
    "example": "",
    "weight": 3,
    "id": "sw-002725"
  },
  {
    "type": "word",
    "front": "lose your place",
    "meaning": "忘记讲到哪里",
    "example": "",
    "weight": 3,
    "id": "sw-002726"
  },
  {
    "type": "word",
    "front": "speak at a measured pace",
    "meaning": "以从容的速度讲话",
    "example": "",
    "weight": 3,
    "id": "sw-002727"
  },
  {
    "type": "word",
    "front": "pause for emphasis",
    "meaning": "为强调而停顿",
    "example": "",
    "weight": 3,
    "id": "sw-002728"
  },
  {
    "type": "word",
    "front": "trim down introduction",
    "meaning": "删减开场内容",
    "example": "",
    "weight": 3,
    "id": "sw-002729"
  },
  {
    "type": "word",
    "front": "transition smoothly",
    "meaning": "顺畅衔接",
    "example": "",
    "weight": 3,
    "id": "sw-002730"
  },
  {
    "type": "word",
    "front": "key takeaway",
    "meaning": "核心结论",
    "example": "",
    "weight": 3,
    "id": "sw-002731"
  },
  {
    "type": "word",
    "front": "rehearse aloud",
    "meaning": "大声排练",
    "example": "",
    "weight": 3,
    "id": "sw-002732"
  },
  {
    "type": "word",
    "front": "last-minute change",
    "meaning": "临时变更",
    "example": "",
    "weight": 3,
    "id": "sw-002733"
  },
  {
    "type": "word",
    "front": "catch someone off guard",
    "meaning": "使某人措手不及",
    "example": "",
    "weight": 3,
    "id": "sw-002734"
  },
  {
    "type": "word",
    "front": "spring plans on someone",
    "meaning": "突然把安排抛给某人",
    "example": "",
    "weight": 3,
    "id": "sw-002735"
  },
  {
    "type": "word",
    "front": "overcommit",
    "meaning": "承担或答应太多",
    "example": "",
    "weight": 3,
    "id": "sw-002736"
  },
  {
    "type": "word",
    "front": "at short notice",
    "meaning": "临时通知",
    "example": "",
    "weight": 3,
    "id": "sw-002737"
  },
  {
    "type": "word",
    "front": "squeeze a meeting in",
    "meaning": "勉强安排时间",
    "example": "",
    "weight": 3,
    "id": "sw-002738"
  },
  {
    "type": "word",
    "front": "put someone on the spot",
    "meaning": "让某人当场为难",
    "example": "",
    "weight": 3,
    "id": "sw-002739"
  },
  {
    "type": "word",
    "front": "be upfront about",
    "meaning": "坦诚说明",
    "example": "",
    "weight": 3,
    "id": "sw-002740"
  },
  {
    "type": "word",
    "front": "availability",
    "meaning": "可安排的空闲时间",
    "example": "",
    "weight": 3,
    "id": "sw-002741"
  },
  {
    "type": "word",
    "front": "feel pressured to",
    "meaning": "被压力推动去做",
    "example": "",
    "weight": 3,
    "id": "sw-002742"
  },
  {
    "type": "word",
    "front": "make excuses",
    "meaning": "编造借口",
    "example": "",
    "weight": 3,
    "id": "sw-002744"
  },
  {
    "type": "word",
    "front": "slow puncture",
    "meaning": "缓慢漏气的小破孔",
    "example": "",
    "weight": 3,
    "id": "sw-002745"
  },
  {
    "type": "word",
    "front": "lose air",
    "meaning": "持续漏气",
    "example": "",
    "weight": 3,
    "id": "sw-002746"
  },
  {
    "type": "word",
    "front": "inflate tyre",
    "meaning": "充气",
    "example": "",
    "weight": 3,
    "id": "sw-002748"
  },
  {
    "type": "word",
    "front": "valve stem",
    "meaning": "气门嘴",
    "example": "",
    "weight": 3,
    "id": "sw-002749"
  },
  {
    "type": "word",
    "front": "faint hissing sound",
    "meaning": "轻微嘶嘶漏气声",
    "example": "",
    "weight": 3,
    "id": "sw-002750"
  },
  {
    "type": "word",
    "front": "inner tube",
    "meaning": "内胎",
    "example": "",
    "weight": 3,
    "id": "sw-002751"
  },
  {
    "type": "word",
    "front": "tyre tread",
    "meaning": "轮胎胎面",
    "example": "",
    "weight": 3,
    "id": "sw-002752"
  },
  {
    "type": "word",
    "front": "shard of glass",
    "meaning": "尖锐玻璃碎片",
    "example": "",
    "weight": 3,
    "id": "sw-002753"
  },
  {
    "type": "word",
    "front": "be lodged in",
    "meaning": "嵌入、卡在内部",
    "example": "",
    "weight": 3,
    "id": "sw-002754"
  },
  {
    "type": "word",
    "front": "locate the leak",
    "meaning": "找到漏气位置",
    "example": "",
    "weight": 3,
    "id": "sw-002755"
  },
  {
    "type": "word",
    "front": "patch the hole",
    "meaning": "用补片修补破孔",
    "example": "",
    "weight": 3,
    "id": "sw-002756"
  },
  {
    "type": "word",
    "front": "spare tube",
    "meaning": "备用内胎",
    "example": "",
    "weight": 3,
    "id": "sw-002757"
  },
  {
    "type": "word",
    "front": "rumour",
    "meaning": "传言、未经确认的消息",
    "example": "",
    "weight": 3,
    "id": "sw-002758"
  },
  {
    "type": "word",
    "front": "pass something along",
    "meaning": "转述和传播",
    "example": "",
    "weight": 3,
    "id": "sw-002759"
  },
  {
    "type": "word",
    "front": "emotionally charged",
    "meaning": "强烈情绪色彩的",
    "example": "",
    "weight": 3,
    "id": "sw-002760"
  },
  {
    "type": "word",
    "front": "out of context",
    "meaning": "脱离上下文",
    "example": "",
    "weight": 3,
    "id": "sw-002761"
  },
  {
    "type": "word",
    "front": "anonymous source",
    "meaning": "匿名来源",
    "example": "",
    "weight": 3,
    "id": "sw-002762"
  },
  {
    "type": "word",
    "front": "unverified claim",
    "meaning": "未经核实的说法",
    "example": "",
    "weight": 3,
    "id": "sw-002763"
  },
  {
    "type": "word",
    "front": "jump to conclusions",
    "meaning": "过早下结论",
    "example": "",
    "weight": 3,
    "id": "sw-002764"
  },
  {
    "type": "word",
    "front": "spread like wildfire",
    "meaning": "迅速传开",
    "example": "",
    "weight": 3,
    "id": "sw-002765"
  },
  {
    "type": "word",
    "front": "blow out of proportion",
    "meaning": "过分夸大",
    "example": "",
    "weight": 3,
    "id": "sw-002766"
  },
  {
    "type": "word",
    "front": "fuel speculation",
    "meaning": "助长猜测",
    "example": "",
    "weight": 3,
    "id": "sw-002767"
  },
  {
    "type": "word",
    "front": "distort information",
    "meaning": "扭曲信息",
    "example": "",
    "weight": 3,
    "id": "sw-002768"
  },
  {
    "type": "word",
    "front": "gain traction",
    "meaning": "逐渐受到关注",
    "example": "",
    "weight": 3,
    "id": "sw-002769"
  },
  {
    "type": "word",
    "front": "set the record straight",
    "meaning": "公开澄清事实",
    "example": "",
    "weight": 3,
    "id": "sw-002770"
  },
  {
    "type": "word",
    "front": "layover",
    "meaning": "中转等待时间",
    "example": "",
    "weight": 3,
    "id": "sw-002771"
  },
  {
    "type": "word",
    "front": "tight connection",
    "meaning": "时间紧张的转机",
    "example": "",
    "weight": 3,
    "id": "sw-002772"
  },
  {
    "type": "word",
    "front": "change terminals",
    "meaning": "更换航站楼",
    "example": "",
    "weight": 3,
    "id": "sw-002773"
  },
  {
    "type": "word",
    "front": "airport shuttle",
    "meaning": "机场接驳车",
    "example": "",
    "weight": 3,
    "id": "sw-002774"
  },
  {
    "type": "word",
    "front": "final boarding call",
    "meaning": "最后登机广播",
    "example": "",
    "weight": 3,
    "id": "sw-002775"
  },
  {
    "type": "word",
    "front": "boarding cut-off",
    "meaning": "停止登机截止时间",
    "example": "",
    "weight": 3,
    "id": "sw-002776"
  },
  {
    "type": "word",
    "front": "miss a connection",
    "meaning": "错过衔接航班",
    "example": "",
    "weight": 3,
    "id": "sw-002777"
  },
  {
    "type": "word",
    "front": "transfer desk",
    "meaning": "中转服务柜台",
    "example": "",
    "weight": 3,
    "id": "sw-002778"
  },
  {
    "type": "word",
    "front": "onward flight",
    "meaning": "后续航班",
    "example": "",
    "weight": 3,
    "id": "sw-002779"
  },
  {
    "type": "word",
    "front": "through-checked baggage",
    "meaning": "已办理直挂的托运行李",
    "example": "",
    "weight": 3,
    "id": "sw-002780"
  },
  {
    "type": "word",
    "front": "standby list",
    "meaning": "候补名单",
    "example": "",
    "weight": 3,
    "id": "sw-002781"
  },
  {
    "type": "word",
    "front": "reissue boarding pass",
    "meaning": "重新签发登机牌",
    "example": "",
    "weight": 3,
    "id": "sw-002782"
  },
  {
    "type": "word",
    "front": "stranded",
    "meaning": "因交通原因滞留",
    "example": "",
    "weight": 3,
    "id": "sw-002783"
  },
  {
    "type": "word",
    "front": "scree",
    "meaning": "山坡松散碎石",
    "example": "",
    "weight": 3,
    "id": "sw-002785"
  },
  {
    "type": "word",
    "front": "rock face",
    "meaning": "陡峭岩壁",
    "example": "",
    "weight": 3,
    "id": "sw-002786"
  },
  {
    "type": "word",
    "front": "scattered debris",
    "meaning": "四处散落的碎片",
    "example": "",
    "weight": 3,
    "id": "sw-002787"
  },
  {
    "type": "word",
    "front": "cordon off",
    "meaning": "隔离封锁",
    "example": "",
    "weight": 3,
    "id": "sw-002788"
  },
  {
    "type": "word",
    "front": "safety barrier",
    "meaning": "安全护栏",
    "example": "",
    "weight": 3,
    "id": "sw-002789"
  },
  {
    "type": "word",
    "front": "restricted access",
    "meaning": "限制进入",
    "example": "",
    "weight": 3,
    "id": "sw-002790"
  },
  {
    "type": "word",
    "front": "unstable slope",
    "meaning": "不稳定的坡面",
    "example": "",
    "weight": 3,
    "id": "sw-002791"
  },
  {
    "type": "word",
    "front": "dislodge",
    "meaning": "使松脱",
    "example": "",
    "weight": 3,
    "id": "sw-002792"
  },
  {
    "type": "word",
    "front": "tumble downhill",
    "meaning": "翻滚着下坡",
    "example": "",
    "weight": 3,
    "id": "sw-002793"
  },
  {
    "type": "word",
    "front": "keep clear of",
    "meaning": "远离",
    "example": "",
    "weight": 3,
    "id": "sw-002794"
  },
  {
    "type": "word",
    "front": "bypass",
    "meaning": "绕过障碍",
    "example": "",
    "weight": 3,
    "id": "sw-002796"
  },
  {
    "type": "word",
    "front": "boulder",
    "meaning": "大块岩石",
    "example": "",
    "weight": 3,
    "id": "sw-002797"
  },
  {
    "type": "word",
    "front": "sluggish bike",
    "meaning": "骑起来费力迟缓的自行车",
    "example": "",
    "weight": 3,
    "id": "sw-002798"
  },
  {
    "type": "word",
    "front": "tyre pressure",
    "meaning": "轮胎气压",
    "example": "",
    "weight": 3,
    "id": "sw-002799"
  },
  {
    "type": "pattern",
    "front": "have been + -ing + whenever ...",
    "meaning": "描述最近持续、反复发生的症状",
    "example": "",
    "weight": 3,
    "id": "sw-002800"
  },
  {
    "type": "pattern",
    "front": "Could you fit me in + 时间?",
    "meaning": "礼貌询问能否安排预约",
    "example": "",
    "weight": 3,
    "id": "sw-002801"
  },
  {
    "type": "pattern",
    "front": "be temporarily closed due to ...",
    "meaning": "说明设施因何暂时关闭",
    "example": "",
    "weight": 3,
    "id": "sw-002802"
  },
  {
    "type": "pattern",
    "front": "get off + 数量 + stops earlier than usual",
    "meaning": "比通常提前若干站下车",
    "example": "",
    "weight": 3,
    "id": "sw-002803"
  },
  {
    "type": "pattern",
    "front": "What is the estimated + 时间?",
    "meaning": "询问预计周期",
    "example": "",
    "weight": 3,
    "id": "sw-002805"
  },
  {
    "type": "pattern",
    "front": "make it harder for + 主语 + to do",
    "meaning": "说明某种因素使动作更困难",
    "example": "",
    "weight": 3,
    "id": "sw-002806"
  },
  {
    "type": "pattern",
    "front": "may + 动词 + under heavy load",
    "meaning": "谨慎描述特定条件下可能发生的情况",
    "example": "",
    "weight": 3,
    "id": "sw-002807"
  },
  {
    "type": "pattern",
    "front": "Neither + 单数动词 ...",
    "meaning": "两个对象都没有某种记录或状态",
    "example": "",
    "weight": 3,
    "id": "sw-002808"
  },
  {
    "type": "pattern",
    "front": "do not want to be held responsible for ...",
    "meaning": "明确责任边界",
    "example": "",
    "weight": 3,
    "id": "sw-002809"
  },
  {
    "type": "pattern",
    "front": "At first ..., but gradually ...",
    "meaning": "展示症状或状态逐步变化",
    "example": "",
    "weight": 3,
    "id": "sw-002810"
  },
  {
    "type": "pattern",
    "front": "rather than assuming +",
    "meaning": "从句 表达不先入为主的行为",
    "example": "",
    "weight": 3,
    "id": "sw-002812"
  },
  {
    "type": "pattern",
    "front": "break + 名词 + down into +",
    "meaning": "子任务 把复杂工作拆成小任务",
    "example": "",
    "weight": 3,
    "id": "sw-002813"
  },
  {
    "type": "pattern",
    "front": "even though + 事实,",
    "meaning": "主句 表达预期与现实的反差",
    "example": "",
    "weight": 3,
    "id": "sw-002816"
  },
  {
    "type": "pattern",
    "front": "Could you arrange for someone to + V?",
    "meaning": "礼貌请求安排人员处理",
    "example": "",
    "weight": 3,
    "id": "sw-002817"
  },
  {
    "type": "pattern",
    "front": "As + 名词 + approaches, ...",
    "meaning": "表示某时间点临近引发变化",
    "example": "",
    "weight": 3,
    "id": "sw-002818"
  },
  {
    "type": "pattern",
    "front": "rather than + V-ing",
    "meaning": "通过对比指出更好的做法",
    "example": "",
    "weight": 3,
    "id": "sw-002819"
  },
  {
    "type": "pattern",
    "front": "By the time + 过去动作, ... had +",
    "meaning": "过去分词 过去某一时间之前已完成",
    "example": "",
    "weight": 3,
    "id": "sw-002820"
  },
  {
    "type": "pattern",
    "front": "keep + V-ing",
    "meaning": "强调某件麻烦事持续反复发生",
    "example": "",
    "weight": 3,
    "id": "sw-002821"
  },
  {
    "type": "pattern",
    "front": "would rather + V + than + V",
    "meaning": "表达宁愿选安全方案的偏好",
    "example": "",
    "weight": 3,
    "id": "sw-002822"
  },
  {
    "type": "pattern",
    "front": "without + V-ing",
    "meaning": "表示不实施某风险动作",
    "example": "",
    "weight": 3,
    "id": "sw-002823"
  },
  {
    "type": "pattern",
    "front": "as soon as +",
    "meaning": "完整句 动作接触即刻发生",
    "example": "",
    "weight": 3,
    "id": "sw-002824"
  },
  {
    "type": "pattern",
    "front": "make sure + 主语 + be +",
    "meaning": "过去分词 确保达到所需结果",
    "example": "",
    "weight": 3,
    "id": "sw-002825"
  },
  {
    "type": "pattern",
    "front": "be advertised as +",
    "meaning": "形容词 区分商业宣传与实际状态",
    "example": "",
    "weight": 3,
    "id": "sw-002826"
  },
  {
    "type": "pattern",
    "front": "be eligible for +",
    "meaning": "名词 正式询问是否符合资格",
    "example": "",
    "weight": 3,
    "id": "sw-002827"
  },
  {
    "type": "pattern",
    "front": "be supposed to + V",
    "meaning": "说明预期功能却未正常发生",
    "example": "",
    "weight": 3,
    "id": "sw-002828"
  },
  {
    "type": "pattern",
    "front": "to avoid + V-ing",
    "meaning": "说明防止某种后果的目的",
    "example": "",
    "weight": 3,
    "id": "sw-002829"
  },
  {
    "type": "pattern",
    "front": "does not necessarily + V, but ...",
    "meaning": "表示非必然、保留重要作用",
    "example": "",
    "weight": 3,
    "id": "sw-002830"
  },
  {
    "type": "pattern",
    "front": "the more ..., the more ...",
    "meaning": "表达程度变化的关联",
    "example": "",
    "weight": 3,
    "id": "sw-002831"
  },
  {
    "type": "pattern",
    "front": "so + 形容词 + that +",
    "meaning": "结果 说明行李超标带来的后果",
    "example": "",
    "weight": 3,
    "id": "sw-002832"
  },
  {
    "type": "pattern",
    "front": "before + V-ing",
    "meaning": "说明交出行李前需要完成的动作",
    "example": "",
    "weight": 3,
    "id": "sw-002833"
  },
  {
    "type": "pattern",
    "front": "not just about ..., but about ...",
    "meaning": "对比表面做法与真正原则",
    "example": "",
    "weight": 3,
    "id": "sw-002834"
  },
  {
    "type": "pattern",
    "front": "so that +",
    "meaning": "从句 解释调整目标",
    "example": "",
    "weight": 3,
    "id": "sw-002835"
  },
  {
    "type": "pattern",
    "front": "have + 物品 +",
    "meaning": "过去分词 安排专业人员提供服务",
    "example": "",
    "weight": 3,
    "id": "sw-002838"
  },
  {
    "type": "pattern",
    "front": "still + 动词/状态",
    "meaning": "表示临时修复后问题仍存在",
    "example": "",
    "weight": 3,
    "id": "sw-002839"
  },
  {
    "type": "pattern",
    "front": "rather than +",
    "meaning": "名词短语 区分暂时冻结与实际扣款",
    "example": "",
    "weight": 3,
    "id": "sw-002840"
  },
  {
    "type": "pattern",
    "front": "If + 条件, could/would + V",
    "meaning": "描述条件成立后的处理",
    "example": "",
    "weight": 3,
    "id": "sw-002841"
  },
  {
    "type": "pattern",
    "front": "be based on +",
    "meaning": "名词 指明推荐的依据",
    "example": "",
    "weight": 3,
    "id": "sw-002842"
  },
  {
    "type": "pattern",
    "front": "unless +",
    "meaning": "从句 说明相信某说法的必要条件",
    "example": "",
    "weight": 3,
    "id": "sw-002843"
  },
  {
    "type": "pattern",
    "front": "only to find +",
    "meaning": "意外结果 描述到达后发现与预期不符",
    "example": "",
    "weight": 3,
    "id": "sw-002844"
  },
  {
    "type": "pattern",
    "front": "Would you mind + V-ing?",
    "meaning": "礼貌请求换位或检查",
    "example": "",
    "weight": 3,
    "id": "sw-002845"
  },
  {
    "type": "pattern",
    "front": "rather than + V-ing",
    "meaning": "对比绕行与靠近动物",
    "example": "",
    "weight": 3,
    "id": "sw-002846"
  },
  {
    "type": "pattern",
    "front": "make sure +",
    "meaning": "句子 说明通过围栏门后的安全动作",
    "example": "",
    "weight": 3,
    "id": "sw-002847"
  },
  {
    "type": "pattern",
    "front": "go off on a tangent and + V",
    "meaning": "连接偏题与超时",
    "example": "",
    "weight": 3,
    "id": "sw-002848"
  },
  {
    "type": "pattern",
    "front": "at such short notice",
    "meaning": "表示通知太临时",
    "example": "",
    "weight": 3,
    "id": "sw-002850"
  },
  {
    "type": "pattern",
    "front": "I would rather + V",
    "meaning": "清楚表达偏好而不攻击他人",
    "example": "",
    "weight": 3,
    "id": "sw-002851"
  },
  {
    "type": "pattern",
    "front": "even after +",
    "meaning": "过去动作 表示处理后故障仍未消失",
    "example": "",
    "weight": 3,
    "id": "sw-002852"
  },
  {
    "type": "pattern",
    "front": "it turned out that +",
    "meaning": "从句 交代检查后发现的真正原因",
    "example": "",
    "weight": 3,
    "id": "sw-002853"
  },
  {
    "type": "pattern",
    "front": "before + V-ing",
    "meaning": "对转发行为增加核实前提",
    "example": "",
    "weight": 3,
    "id": "sw-002854"
  },
  {
    "type": "pattern",
    "front": "By the time I reached ..., ... had +",
    "meaning": "过去分词 描述赶到后发现已错过截止",
    "example": "",
    "weight": 3,
    "id": "sw-002856"
  },
  {
    "type": "pattern",
    "front": "Could you check the next available + 名词?",
    "meaning": "礼貌寻找可替代资源",
    "example": "",
    "weight": 3,
    "id": "sw-002857"
  },
  {
    "type": "pattern",
    "front": "rather than + V-ing",
    "meaning": "用对比解释不进入禁行区域",
    "example": "",
    "weight": 3,
    "id": "sw-002858"
  },
  {
    "type": "pattern",
    "front": "be cordoned off because of ...",
    "meaning": "描述因危险而封闭",
    "example": "",
    "weight": 3,
    "id": "sw-002859"
  },
  {
    "type": "sentence",
    "front": "Could you fit me in sometime this week?",
    "meaning": "这周能否给我安排一个预约时间？",
    "example": "",
    "weight": 3,
    "id": "sw-002860"
  },
  {
    "type": "sentence",
    "front": "The pain comes and goes, but it is becoming more frequent.",
    "meaning": "疼痛时有时无，但发作越来越频繁。",
    "example": "",
    "weight": 3,
    "id": "sw-002861"
  },
  {
    "type": "sentence",
    "front": "Does this bus still serve the university?",
    "meaning": "这班公交车现在还经过大学吗？",
    "example": "",
    "weight": 3,
    "id": "sw-002862"
  },
  {
    "type": "sentence",
    "front": "The journey was considerably longer than expected.",
    "meaning": "这趟路程比预期长得多。",
    "example": "",
    "weight": 3,
    "id": "sw-002863"
  },
  {
    "type": "sentence",
    "front": "Would a digital copy be acceptable?",
    "meaning": "电子版可以接受吗？",
    "example": "",
    "weight": 3,
    "id": "sw-002864"
  },
  {
    "type": "sentence",
    "front": "What is the estimated processing time?",
    "meaning": "预计办理时间是多久？",
    "example": "",
    "weight": 3,
    "id": "sw-002865"
  },
  {
    "type": "sentence",
    "front": "The battery may struggle to deliver power under heavy load.",
    "meaning": "高负载下电池可能难以输出电能。",
    "example": "",
    "weight": 3,
    "id": "sw-002866"
  },
  {
    "type": "sentence",
    "front": "Some of the apparent lost charge may become available again.",
    "meaning": "一部分看似失去的电量可能再次变得可用。",
    "example": "",
    "weight": 3,
    "id": "sw-002867"
  },
  {
    "type": "sentence",
    "front": "Could you record this pre-existing damage before I leave?",
    "meaning": "我离开前能否把这些原有损伤记录下来？",
    "example": "",
    "weight": 3,
    "id": "sw-002868"
  },
  {
    "type": "sentence",
    "front": "I do not want to be held responsible for damage that was already there.",
    "meaning": "我不希望为原本就存在的损伤承担责任。",
    "example": "",
    "weight": 3,
    "id": "sw-002869"
  },
  {
    "type": "sentence",
    "front": "My sock had bunched up near the heel.",
    "meaning": "我的袜子在脚后跟附近皱成了一团。",
    "example": "",
    "weight": 3,
    "id": "sw-002870"
  },
  {
    "type": "sentence",
    "front": "The boot should feel snug without being painfully tight.",
    "meaning": "靴子应该贴合，但不能勒得疼。",
    "example": "",
    "weight": 3,
    "id": "sw-002871"
  },
  {
    "type": "sentence",
    "front": "I just wanted to check in and see how things are going.",
    "meaning": "我只是想了解一下进展如何。",
    "example": "",
    "weight": 3,
    "id": "sw-002872"
  },
  {
    "type": "sentence",
    "front": "Let us break the work down into smaller tasks and get back on track.",
    "meaning": "我们把工作拆成小任务，重新恢复进度吧。",
    "example": "",
    "weight": 3,
    "id": "sw-002873"
  },
  {
    "type": "sentence",
    "front": "I see your point, but I look at it slightly differently.",
    "meaning": "我理解你的观点，但我的看法略有不同。",
    "example": "",
    "weight": 3,
    "id": "sw-002874"
  },
  {
    "type": "sentence",
    "front": "We do not have to agree on everything; we can agree to disagree.",
    "meaning": "我们不必事事一致，可以接受彼此意见不同。",
    "example": "",
    "weight": 3,
    "id": "sw-002875"
  },
  {
    "type": "sentence",
    "front": "The room is unusually chilly even though the heating is on.",
    "meaning": "尽管暖气开着，房间还是异常冷。",
    "example": "",
    "weight": 3,
    "id": "sw-002876"
  },
  {
    "type": "sentence",
    "front": "Could you arrange for someone to inspect the window?",
    "meaning": "可以安排人检查一下窗户吗？",
    "example": "",
    "weight": 3,
    "id": "sw-002877"
  },
  {
    "type": "sentence",
    "front": "The hardest part is getting started, not necessarily finishing.",
    "meaning": "最困难的部分往往是开始，而不一定是完成。",
    "example": "",
    "weight": 3,
    "id": "sw-002878"
  },
  {
    "type": "sentence",
    "front": "In the long run, avoiding the problem may make things worse.",
    "meaning": "从长远来看，回避问题可能让情况更糟。",
    "example": "",
    "weight": 3,
    "id": "sw-002879"
  },
  {
    "type": "sentence",
    "front": "I have double-checked the code, but the door still will not unlock.",
    "meaning": "我已经重新核对密码，但门还是打不开。",
    "example": "",
    "weight": 3,
    "id": "sw-002880"
  },
  {
    "type": "sentence",
    "front": "Is there an after-hours contact number?",
    "meaning": "有没有非营业时间的联系电话？",
    "example": "",
    "weight": 3,
    "id": "sw-002881"
  },
  {
    "type": "sentence",
    "front": "The crossing is impassable after the heavy rain.",
    "meaning": "大雨后这个过溪点无法通行。",
    "example": "",
    "weight": 3,
    "id": "sw-002882"
  },
  {
    "type": "sentence",
    "front": "We would rather backtrack than take unnecessary risks.",
    "meaning": "我们宁可原路返回，也不冒不必要的风险。",
    "example": "",
    "weight": 3,
    "id": "sw-002883"
  },
  {
    "type": "sentence",
    "front": "Pat the chicken dry before searing it.",
    "meaning": "煎鸡肉之前先把表面拍干。",
    "example": "",
    "weight": 3,
    "id": "sw-002884"
  },
  {
    "type": "sentence",
    "front": "Check the temperature in the thickest part of the meat.",
    "meaning": "测量肉最厚部位的中心温度。",
    "example": "",
    "weight": 3,
    "id": "sw-002885"
  },
  {
    "type": "sentence",
    "front": "The product was advertised as leak-proof, but it appears to be defective.",
    "meaning": "商品宣传防漏，但它似乎有缺陷。",
    "example": "",
    "weight": 3,
    "id": "sw-002886"
  },
  {
    "type": "sentence",
    "front": "Could I get written confirmation of the return?",
    "meaning": "可以给我一份退货书面确认吗？",
    "example": "",
    "weight": 3,
    "id": "sw-002887"
  },
  {
    "type": "sentence",
    "front": "I do not want to overwrite my latest changes.",
    "meaning": "我不想覆盖最新修改。",
    "example": "",
    "weight": 3,
    "id": "sw-002888"
  },
  {
    "type": "sentence",
    "front": "Make the document available offline before the journey.",
    "meaning": "出发前把文件设置为离线可用。",
    "example": "",
    "weight": 3,
    "id": "sw-002889"
  },
  {
    "type": "sentence",
    "front": "Could you give me a rough estimate of the waiting time?",
    "meaning": "能给我一个大致的等待时间吗？",
    "example": "",
    "weight": 3,
    "id": "sw-002890"
  },
  {
    "type": "sentence",
    "front": "Keeping customers informed helps manage expectations.",
    "meaning": "持续告知顾客情况有助于管理预期。",
    "example": "",
    "weight": 3,
    "id": "sw-002891"
  },
  {
    "type": "sentence",
    "front": "My suitcase exceeds the carry-on allowance.",
    "meaning": "我的行李箱超出了随身行李尺寸限制。",
    "example": "",
    "weight": 3,
    "id": "sw-002892"
  },
  {
    "type": "sentence",
    "front": "Can I remove my valuables before gate-checking it?",
    "meaning": "在登机口托运前，我能先取出贵重物品吗？",
    "example": "",
    "weight": 3,
    "id": "sw-002893"
  },
  {
    "type": "sentence",
    "front": "The straps are digging into my shoulders.",
    "meaning": "肩带正勒着我的肩膀。",
    "example": "",
    "weight": 3,
    "id": "sw-002894"
  },
  {
    "type": "sentence",
    "front": "I need to shift more of the load onto my hips.",
    "meaning": "我需要让髋部承担更多重量。",
    "example": "",
    "weight": 3,
    "id": "sw-002895"
  },
  {
    "type": "sentence",
    "front": "Pull the sheet taut and tuck it under the mattress.",
    "meaning": "把床单拉紧，然后塞在床垫下面。",
    "example": "",
    "weight": 3,
    "id": "sw-002896"
  },
  {
    "type": "sentence",
    "front": "Turn the duvet cover inside out before putting the duvet in.",
    "meaning": "把被芯放进去之前，先将被套里外翻转。",
    "example": "",
    "weight": 3,
    "id": "sw-002897"
  },
  {
    "type": "sentence",
    "front": "The chain got wedged between the chainring and the frame.",
    "meaning": "链条卡在牙盘和车架之间。",
    "example": "",
    "weight": 3,
    "id": "sw-002898"
  },
  {
    "type": "sentence",
    "front": "The shifting still feels jerky, so I need to have the drivetrain checked.",
    "meaning": "换挡仍然有些顿挫，因此我需要检查传动系统。",
    "example": "",
    "weight": 3,
    "id": "sw-002899"
  },
  {
    "type": "sentence",
    "front": "Could it be an authorisation hold rather than a duplicate payment?",
    "meaning": "它会不会是预授权冻结，而非重复付款？",
    "example": "",
    "weight": 3,
    "id": "sw-002901"
  },
  {
    "type": "sentence",
    "front": "Do not take every online review at face value.",
    "meaning": "不要对每条网上评论都照单全收。",
    "example": "",
    "weight": 3,
    "id": "sw-002902"
  },
  {
    "type": "sentence",
    "front": "Can you back up that claim with independent evidence?",
    "meaning": "你能拿出独立证据来支持这个说法吗？",
    "example": "",
    "weight": 3,
    "id": "sw-002903"
  },
  {
    "type": "sentence",
    "front": "I believe this is my reserved seat; could you check your carriage number?",
    "meaning": "我想这是我预订的座位；你能核对一下车厢编号吗？",
    "example": "",
    "weight": 3,
    "id": "sw-002904"
  },
  {
    "type": "sentence",
    "front": "Please stow your luggage without obstructing the aisle.",
    "meaning": "请妥善放置行李，不要挡住过道。",
    "example": "",
    "weight": 3,
    "id": "sw-002905"
  },
  {
    "type": "sentence",
    "front": "Let us give the cattle a wide berth rather than cut across the field.",
    "meaning": "我们与牛群保持距离绕开，而不是横穿田地。",
    "example": "",
    "weight": 3,
    "id": "sw-002906"
  },
  {
    "type": "sentence",
    "front": "Make sure the gate latch is secured behind us.",
    "meaning": "确保我们通过后把门闩扣牢。",
    "example": "",
    "weight": 3,
    "id": "sw-002907"
  },
  {
    "type": "sentence",
    "front": "Trim down the introduction and rehearse aloud at a measured pace.",
    "meaning": "精简开头，并以从容的节奏大声排练。",
    "example": "",
    "weight": 3,
    "id": "sw-002908"
  },
  {
    "type": "sentence",
    "front": "I would rather not overcommit at such short notice.",
    "meaning": "这么临时，我不想答应太多安排。",
    "example": "",
    "weight": 3,
    "id": "sw-002909"
  },
  {
    "type": "sentence",
    "front": "I hope there are no hard feelings; I am still happy to meet tomorrow.",
    "meaning": "希望你不要介意；我仍然愿意明天见面。",
    "example": "",
    "weight": 3,
    "id": "sw-002910"
  },
  {
    "type": "sentence",
    "front": "My rear tyre keeps losing air even after I pump it up.",
    "meaning": "即使打过气，我的后轮还是一直漏气。",
    "example": "",
    "weight": 3,
    "id": "sw-002911"
  },
  {
    "type": "sentence",
    "front": "The mechanic located a shard of glass lodged in the tread.",
    "meaning": "技师找到一片嵌在胎面里的碎玻璃。",
    "example": "",
    "weight": 3,
    "id": "sw-002912"
  },
  {
    "type": "sentence",
    "front": "Do not pass the story along before tracing it back to the original source.",
    "meaning": "追溯到原始来源之前，不要继续传播。",
    "example": "",
    "weight": 3,
    "id": "sw-002913"
  },
  {
    "type": "sentence",
    "front": "The rumour was blown out of proportion after the quote was taken out of context.",
    "meaning": "引语被断章取义后，传言被过分夸大了。",
    "example": "",
    "weight": 3,
    "id": "sw-002914"
  },
  {
    "type": "sentence",
    "front": "I missed my connection because the first flight arrived late.",
    "meaning": "第一段航班晚点，导致我没赶上转机。",
    "example": "",
    "weight": 3,
    "id": "sw-002915"
  },
  {
    "type": "sentence",
    "front": "Could you check the next available onward flight?",
    "meaning": "你能查一下下一班有空位的后续航班吗？",
    "example": "",
    "weight": 3,
    "id": "sw-002916"
  },
  {
    "type": "sentence",
    "front": "The trail has been cordoned off because of rockfall.",
    "meaning": "这条步道因落石已经被封闭。",
    "example": "",
    "weight": 3,
    "id": "sw-002917"
  },
  {
    "type": "sentence",
    "front": "Keep clear of the unstable slope and follow the authorised diversion.",
    "meaning": "远离不稳定坡面，沿允许通行的绕行路线前进。",
    "example": "",
    "weight": 3,
    "id": "sw-002918"
  },
  {
    "type": "sentence",
    "front": "I have gone off on a tangent; let me get straight to the point.",
    "meaning": "我说偏题了；让我直接说重点。",
    "example": "",
    "weight": 3,
    "id": "sw-002919"
  },
  {
    "type": "word",
    "front": "limescale",
    "meaning": "水垢、硬水留下的矿物沉积物",
    "example": "",
    "weight": 3,
    "id": "sw-002920",
    "source": "Review10 Scene 160"
  },
  {
    "type": "word",
    "front": "shower screen",
    "meaning": "淋浴玻璃隔断",
    "example": "",
    "weight": 3,
    "id": "sw-002921",
    "source": "Review10 Scene 160"
  },
  {
    "type": "word",
    "front": "stubborn stain",
    "meaning": "难以去除的顽固污渍",
    "example": "",
    "weight": 3,
    "id": "sw-002922",
    "source": "Review10 Scene 160"
  },
  {
    "type": "word",
    "front": "grout",
    "meaning": "瓷砖之间的填缝材料",
    "example": "",
    "weight": 3,
    "id": "sw-002923",
    "source": "Review10 Scene 160"
  },
  {
    "type": "word",
    "front": "bristles",
    "meaning": "刷子上的刷毛",
    "example": "",
    "weight": 3,
    "id": "sw-002924",
    "source": "Review10 Scene 160"
  },
  {
    "type": "word",
    "front": "grime",
    "meaning": "长期积累的污垢、油污",
    "example": "",
    "weight": 3,
    "id": "sw-002925",
    "source": "Review10 Scene 160"
  },
  {
    "type": "word",
    "front": "leave something to soak",
    "meaning": "让物体浸泡或清洁剂停留一段时间",
    "example": "",
    "weight": 3,
    "id": "sw-002926",
    "source": "Review10 Scene 160"
  },
  {
    "type": "word",
    "front": "spray bottle",
    "meaning": "喷雾瓶",
    "example": "",
    "weight": 3,
    "id": "sw-002927",
    "source": "Review10 Scene 160"
  },
  {
    "type": "word",
    "front": "rinse off",
    "meaning": "冲掉表面清洁剂或污垢",
    "example": "",
    "weight": 3,
    "id": "sw-002928",
    "source": "Review10 Scene 160"
  },
  {
    "type": "word",
    "front": "squeegee",
    "meaning": "玻璃刮水器",
    "example": "",
    "weight": 3,
    "id": "sw-002929",
    "source": "Review10 Scene 160"
  },
  {
    "type": "word",
    "front": "streaks",
    "meaning": "擦拭后残留的条状水痕",
    "example": "",
    "weight": 3,
    "id": "sw-002930",
    "source": "Review10 Scene 160"
  },
  {
    "type": "word",
    "front": "ventilate",
    "meaning": "让房间通风",
    "example": "",
    "weight": 3,
    "id": "sw-002931",
    "source": "Review10 Scene 160"
  },
  {
    "type": "word",
    "front": "abrasive",
    "meaning": "磨蚀性的、可能磨伤表面的",
    "example": "",
    "weight": 3,
    "id": "sw-002932",
    "source": "Review10 Scene 160"
  },
  {
    "type": "word",
    "front": "reach into a crevice",
    "meaning": "伸入狭窄缝隙",
    "example": "",
    "weight": 3,
    "id": "sw-002933",
    "source": "Review10 Scene 160"
  },
  {
    "type": "word",
    "front": "blurry / blurred vision",
    "meaning": "模糊的；视线模糊",
    "example": "",
    "weight": 3,
    "id": "sw-002934",
    "source": "Review10 Scene 161"
  },
  {
    "type": "word",
    "front": "squint",
    "meaning": "眯起眼睛努力看清",
    "example": "",
    "weight": 3,
    "id": "sw-002935",
    "source": "Review10 Scene 161"
  },
  {
    "type": "word",
    "front": "eye strain",
    "meaning": "眼疲劳",
    "example": "",
    "weight": 3,
    "id": "sw-002936",
    "source": "Review10 Scene 161"
  },
  {
    "type": "word",
    "front": "optometrist",
    "meaning": "验光师、视光专业人员",
    "example": "",
    "weight": 3,
    "id": "sw-002937",
    "source": "Review10 Scene 161"
  },
  {
    "type": "word",
    "front": "eye chart",
    "meaning": "视力表",
    "example": "",
    "weight": 3,
    "id": "sw-002938",
    "source": "Review10 Scene 161"
  },
  {
    "type": "word",
    "front": "read something out",
    "meaning": "把文字或数字大声读出来",
    "example": "",
    "weight": 3,
    "id": "sw-002939",
    "source": "Review10 Scene 161"
  },
  {
    "type": "word",
    "front": "prescription (glasses)",
    "meaning": "眼镜度数处方（区别于药品处方）",
    "example": "",
    "weight": 3,
    "id": "sw-002940",
    "source": "Review10 Scene 161"
  },
  {
    "type": "word",
    "front": "nearsighted / shortsighted",
    "meaning": "近视的（美式／英式）",
    "example": "",
    "weight": 3,
    "id": "sw-002941",
    "source": "Review10 Scene 161"
  },
  {
    "type": "word",
    "front": "farsighted / longsighted",
    "meaning": "远视的（美式／英式）",
    "example": "",
    "weight": 3,
    "id": "sw-002942",
    "source": "Review10 Scene 161"
  },
  {
    "type": "word",
    "front": "astigmatism",
    "meaning": "散光",
    "example": "",
    "weight": 3,
    "id": "sw-002943",
    "source": "Review10 Scene 161"
  },
  {
    "type": "word",
    "front": "glare (light)",
    "meaning": "刺眼的强光、眩光",
    "example": "",
    "weight": 3,
    "id": "sw-002944",
    "source": "Review10 Scene 161"
  },
  {
    "type": "word",
    "front": "lenses",
    "meaning": "眼镜等光学镜片",
    "example": "",
    "weight": 3,
    "id": "sw-002945",
    "source": "Review10 Scene 161"
  },
  {
    "type": "word",
    "front": "nose pads",
    "meaning": "眼镜鼻托",
    "example": "",
    "weight": 3,
    "id": "sw-002946",
    "source": "Review10 Scene 161"
  },
  {
    "type": "word",
    "front": "temple arms",
    "meaning": "眼镜镜腿",
    "example": "",
    "weight": 3,
    "id": "sw-002947",
    "source": "Review10 Scene 161"
  },
  {
    "type": "word",
    "front": "read the small print",
    "meaning": "阅读小号字体的条款细则",
    "example": "",
    "weight": 3,
    "id": "sw-002948",
    "source": "Review10 Scene 161"
  },
  {
    "type": "word",
    "front": "run small",
    "meaning": "鞋服尺码偏小",
    "example": "",
    "weight": 3,
    "id": "sw-002949",
    "source": "Review10 Scene 162"
  },
  {
    "type": "word",
    "front": "true to size",
    "meaning": "尺码标准",
    "example": "",
    "weight": 3,
    "id": "sw-002950",
    "source": "Review10 Scene 162"
  },
  {
    "type": "word",
    "front": "size chart",
    "meaning": "尺码表",
    "example": "",
    "weight": 3,
    "id": "sw-002951",
    "source": "Review10 Scene 162"
  },
  {
    "type": "word",
    "front": "toe box",
    "meaning": "鞋头容纳脚趾的空间",
    "example": "",
    "weight": 3,
    "id": "sw-002952",
    "source": "Review10 Scene 162"
  },
  {
    "type": "word",
    "front": "pinch (shoes)",
    "meaning": "鞋子挤压、夹痛身体",
    "example": "",
    "weight": 3,
    "id": "sw-002953",
    "source": "Review10 Scene 162"
  },
  {
    "type": "word",
    "front": "roomy",
    "meaning": "宽敞的、空间充足的",
    "example": "",
    "weight": 3,
    "id": "sw-002954",
    "source": "Review10 Scene 162"
  },
  {
    "type": "word",
    "front": "go up half a size",
    "meaning": "换大半码",
    "example": "",
    "weight": 3,
    "id": "sw-002955",
    "source": "Review10 Scene 162"
  },
  {
    "type": "word",
    "front": "break in a pair of shoes",
    "meaning": "穿一段时间使新鞋逐渐磨合",
    "example": "",
    "weight": 3,
    "id": "sw-002956",
    "source": "Review10 Scene 162"
  },
  {
    "type": "word",
    "front": "arch support",
    "meaning": "足弓支撑",
    "example": "",
    "weight": 3,
    "id": "sw-002957",
    "source": "Review10 Scene 162"
  },
  {
    "type": "word",
    "front": "unworn",
    "meaning": "未穿着使用的",
    "example": "",
    "weight": 3,
    "id": "sw-002958",
    "source": "Review10 Scene 162"
  },
  {
    "type": "word",
    "front": "tags attached",
    "meaning": "原有商品吊牌仍未拆除",
    "example": "",
    "weight": 3,
    "id": "sw-002959",
    "source": "Review10 Scene 162"
  },
  {
    "type": "word",
    "front": "return label",
    "meaning": "退货物流标签",
    "example": "",
    "weight": 3,
    "id": "sw-002960",
    "source": "Review10 Scene 162"
  },
  {
    "type": "word",
    "front": "drop-off point",
    "meaning": "包裹投递点",
    "example": "",
    "weight": 3,
    "id": "sw-002961",
    "source": "Review10 Scene 162"
  },
  {
    "type": "word",
    "front": "return postage",
    "meaning": "退货邮费",
    "example": "",
    "weight": 3,
    "id": "sw-002962",
    "source": "Review10 Scene 162"
  },
  {
    "type": "word",
    "front": "anchoring effect",
    "meaning": "锚定效应",
    "example": "",
    "weight": 3,
    "id": "sw-002963",
    "source": "Review10 Scene 163"
  },
  {
    "type": "word",
    "front": "reference price",
    "meaning": "用于比较判断的参考价格",
    "example": "",
    "weight": 3,
    "id": "sw-002964",
    "source": "Review10 Scene 163"
  },
  {
    "type": "word",
    "front": "initial figure",
    "meaning": "最初呈现的数字",
    "example": "",
    "weight": 3,
    "id": "sw-002965",
    "source": "Review10 Scene 163"
  },
  {
    "type": "word",
    "front": "perceived value",
    "meaning": "消费者主观感知的价值",
    "example": "",
    "weight": 3,
    "id": "sw-002966",
    "source": "Review10 Scene 163"
  },
  {
    "type": "word",
    "front": "list price",
    "meaning": "标价、目录价",
    "example": "",
    "weight": 3,
    "id": "sw-002967",
    "source": "Review10 Scene 163"
  },
  {
    "type": "word",
    "front": "mark something down (retail)",
    "meaning": "给商品降价、打折",
    "example": "",
    "weight": 3,
    "id": "sw-002968",
    "source": "Review10 Scene 163"
  },
  {
    "type": "word",
    "front": "price bracket",
    "meaning": "价格区间、价格档位",
    "example": "",
    "weight": 3,
    "id": "sw-002969",
    "source": "Review10 Scene 163"
  },
  {
    "type": "word",
    "front": "decoy option",
    "meaning": "用来影响比较判断的陪衬选项",
    "example": "",
    "weight": 3,
    "id": "sw-002970",
    "source": "Review10 Scene 163"
  },
  {
    "type": "word",
    "front": "frame a choice",
    "meaning": "以特定方式呈现选择",
    "example": "",
    "weight": 3,
    "id": "sw-002971",
    "source": "Review10 Scene 163"
  },
  {
    "type": "word",
    "front": "willingness to pay",
    "meaning": "支付意愿、愿意支付的最高价格",
    "example": "",
    "weight": 3,
    "id": "sw-002972",
    "source": "Review10 Scene 163"
  },
  {
    "type": "word",
    "front": "mental shortcut",
    "meaning": "快速作判断的思维捷径",
    "example": "",
    "weight": 3,
    "id": "sw-002973",
    "source": "Review10 Scene 163"
  },
  {
    "type": "word",
    "front": "price sensitivity",
    "meaning": "价格敏感度",
    "example": "",
    "weight": 3,
    "id": "sw-002974",
    "source": "Review10 Scene 163"
  },
  {
    "type": "word",
    "front": "charm pricing",
    "meaning": "9.99式的尾数定价",
    "example": "",
    "weight": 3,
    "id": "sw-002975",
    "source": "Review10 Scene 163"
  },
  {
    "type": "word",
    "front": "arbitrary",
    "meaning": "任意确定、缺乏客观依据的",
    "example": "",
    "weight": 3,
    "id": "sw-002976",
    "source": "Review10 Scene 163"
  },
  {
    "type": "word",
    "front": "look like a bargain",
    "meaning": "看起来很划算",
    "example": "",
    "weight": 3,
    "id": "sw-002977",
    "source": "Review10 Scene 163"
  },
  {
    "type": "word",
    "front": "soundproofing",
    "meaning": "隔音措施、隔音性能",
    "example": "",
    "weight": 3,
    "id": "sw-002978",
    "source": "Review10 Scene 164"
  },
  {
    "type": "word",
    "front": "thin walls",
    "meaning": "薄墙、隔墙不隔音",
    "example": "",
    "weight": 3,
    "id": "sw-002979",
    "source": "Review10 Scene 164"
  },
  {
    "type": "word",
    "front": "adjoining room",
    "meaning": "相邻的房间",
    "example": "",
    "weight": 3,
    "id": "sw-002980",
    "source": "Review10 Scene 164"
  },
  {
    "type": "word",
    "front": "corridor",
    "meaning": "走廊",
    "example": "",
    "weight": 3,
    "id": "sw-002981",
    "source": "Review10 Scene 164"
  },
  {
    "type": "word",
    "front": "muffled voices",
    "meaning": "隔着障碍听不清的低沉说话声",
    "example": "",
    "weight": 3,
    "id": "sw-002982",
    "source": "Review10 Scene 164"
  },
  {
    "type": "word",
    "front": "a thud",
    "meaning": "沉闷的撞击声",
    "example": "",
    "weight": 3,
    "id": "sw-002983",
    "source": "Review10 Scene 164"
  },
  {
    "type": "word",
    "front": "noise carries",
    "meaning": "声音容易传播到远处",
    "example": "",
    "weight": 3,
    "id": "sw-002984",
    "source": "Review10 Scene 164"
  },
  {
    "type": "word",
    "front": "keep someone awake",
    "meaning": "使某人一直睡不着",
    "example": "",
    "weight": 3,
    "id": "sw-002985",
    "source": "Review10 Scene 164"
  },
  {
    "type": "word",
    "front": "persistent disturbance",
    "meaning": "持续存在的干扰",
    "example": "",
    "weight": 3,
    "id": "sw-002986",
    "source": "Review10 Scene 164"
  },
  {
    "type": "word",
    "front": "vacant room",
    "meaning": "空置房间",
    "example": "",
    "weight": 3,
    "id": "sw-002987",
    "source": "Review10 Scene 164"
  },
  {
    "type": "word",
    "front": "comparable room",
    "meaning": "条件相近的房间",
    "example": "",
    "weight": 3,
    "id": "sw-002988",
    "source": "Review10 Scene 164"
  },
  {
    "type": "word",
    "front": "complimentary upgrade",
    "meaning": "免费升级房型",
    "example": "",
    "weight": 3,
    "id": "sw-002989",
    "source": "Review10 Scene 164"
  },
  {
    "type": "word",
    "front": "relocate (room)",
    "meaning": "换到另一间房",
    "example": "",
    "weight": 3,
    "id": "sw-002990",
    "source": "Review10 Scene 164"
  },
  {
    "type": "word",
    "front": "overgrown",
    "meaning": "被植物覆盖而难以通过的",
    "example": "",
    "weight": 3,
    "id": "sw-002991",
    "source": "Review10 Scene 165"
  },
  {
    "type": "word",
    "front": "undergrowth",
    "meaning": "树林中的低矮植被",
    "example": "",
    "weight": 3,
    "id": "sw-002992",
    "source": "Review10 Scene 165"
  },
  {
    "type": "word",
    "front": "brambles",
    "meaning": "带刺的灌木丛",
    "example": "",
    "weight": 3,
    "id": "sw-002993",
    "source": "Review10 Scene 165"
  },
  {
    "type": "word",
    "front": "thorny",
    "meaning": "长有尖刺的",
    "example": "",
    "weight": 3,
    "id": "sw-002994",
    "source": "Review10 Scene 165"
  },
  {
    "type": "word",
    "front": "prickly",
    "meaning": "表面有小刺、扎人的",
    "example": "",
    "weight": 3,
    "id": "sw-002995",
    "source": "Review10 Scene 165"
  },
  {
    "type": "word",
    "front": "snag on",
    "meaning": "被树枝、尖角等勾住",
    "example": "",
    "weight": 3,
    "id": "sw-002996",
    "source": "Review10 Scene 165"
  },
  {
    "type": "word",
    "front": "fray",
    "meaning": "织物或绳索磨损散线",
    "example": "",
    "weight": 3,
    "id": "sw-002997",
    "source": "Review10 Scene 165"
  },
  {
    "type": "word",
    "front": "seam",
    "meaning": "衣服的缝线连接处",
    "example": "",
    "weight": 3,
    "id": "sw-002998",
    "source": "Review10 Scene 165"
  },
  {
    "type": "word",
    "front": "get tangled in",
    "meaning": "与藤蔓、电线等缠绕在一起",
    "example": "",
    "weight": 3,
    "id": "sw-002999",
    "source": "Review10 Scene 165"
  },
  {
    "type": "word",
    "front": "vines",
    "meaning": "藤蔓",
    "example": "",
    "weight": 3,
    "id": "sw-003000",
    "source": "Review10 Scene 165"
  },
  {
    "type": "word",
    "front": "brush something aside",
    "meaning": "用手拨开某物",
    "example": "",
    "weight": 3,
    "id": "sw-003001",
    "source": "Review10 Scene 165"
  },
  {
    "type": "word",
    "front": "bushwhack",
    "meaning": "在没有现成路的灌木地形中穿行",
    "example": "",
    "weight": 3,
    "id": "sw-003002",
    "source": "Review10 Scene 165"
  },
  {
    "type": "word",
    "front": "dead end",
    "meaning": "死路；比喻陷入死胡同",
    "example": "",
    "weight": 3,
    "id": "sw-003003",
    "source": "Review10 Scene 165"
  },
  {
    "type": "word",
    "front": "a rolling boil",
    "meaning": "持续剧烈沸腾",
    "example": "",
    "weight": 3,
    "id": "sw-003004",
    "source": "Review10 Scene 166"
  },
  {
    "type": "word",
    "front": "boil over",
    "meaning": "液体沸腾溢锅",
    "example": "",
    "weight": 3,
    "id": "sw-003005",
    "source": "Review10 Scene 166"
  },
  {
    "type": "word",
    "front": "foam up",
    "meaning": "迅速产生大量泡沫",
    "example": "",
    "weight": 3,
    "id": "sw-003006",
    "source": "Review10 Scene 166"
  },
  {
    "type": "word",
    "front": "a gentle simmer",
    "meaning": "小火微沸",
    "example": "",
    "weight": 3,
    "id": "sw-003007",
    "source": "Review10 Scene 166"
  },
  {
    "type": "word",
    "front": "stir in",
    "meaning": "边搅拌边加入食材",
    "example": "",
    "weight": 3,
    "id": "sw-003008",
    "source": "Review10 Scene 166"
  },
  {
    "type": "word",
    "front": "clump together",
    "meaning": "黏成一团、结块",
    "example": "",
    "weight": 3,
    "id": "sw-003009",
    "source": "Review10 Scene 166"
  },
  {
    "type": "word",
    "front": "al dente",
    "meaning": "意大利面熟而有嚼劲",
    "example": "",
    "weight": 3,
    "id": "sw-003010",
    "source": "Review10 Scene 166"
  },
  {
    "type": "word",
    "front": "colander",
    "meaning": "沥水漏盆",
    "example": "",
    "weight": 3,
    "id": "sw-003011",
    "source": "Review10 Scene 166"
  },
  {
    "type": "word",
    "front": "drain (pasta)",
    "meaning": "把煮熟食物的水沥去",
    "example": "",
    "weight": 3,
    "id": "sw-003012",
    "source": "Review10 Scene 166"
  },
  {
    "type": "word",
    "front": "reserve some cooking water",
    "meaning": "留出少量煮食物的水",
    "example": "",
    "weight": 3,
    "id": "sw-003013",
    "source": "Review10 Scene 166"
  },
  {
    "type": "word",
    "front": "loosen the sauce",
    "meaning": "将浓酱汁调稀",
    "example": "",
    "weight": 3,
    "id": "sw-003014",
    "source": "Review10 Scene 166"
  },
  {
    "type": "word",
    "front": "toss to coat",
    "meaning": "翻拌使酱汁均匀裹住食材",
    "example": "",
    "weight": 3,
    "id": "sw-003015",
    "source": "Review10 Scene 166"
  },
  {
    "type": "word",
    "front": "reduce the sauce",
    "meaning": "加热蒸发水分使酱汁收浓",
    "example": "",
    "weight": 3,
    "id": "sw-003016",
    "source": "Review10 Scene 166"
  },
  {
    "type": "word",
    "front": "thicken up",
    "meaning": "逐渐变稠",
    "example": "",
    "weight": 3,
    "id": "sw-003017",
    "source": "Review10 Scene 166"
  },
  {
    "type": "word",
    "front": "portion out",
    "meaning": "把食物分装成若干份",
    "example": "",
    "weight": 3,
    "id": "sw-003018",
    "source": "Review10 Scene 166"
  },
  {
    "type": "word",
    "front": "two-factor authentication (2FA)",
    "meaning": "双重身份验证",
    "example": "",
    "weight": 3,
    "id": "sw-003019",
    "source": "Review10 Scene 167"
  },
  {
    "type": "word",
    "front": "credentials (login)",
    "meaning": "账户登录凭据",
    "example": "",
    "weight": 3,
    "id": "sw-003020",
    "source": "Review10 Scene 167"
  },
  {
    "type": "word",
    "front": "authenticator app",
    "meaning": "身份验证器应用",
    "example": "",
    "weight": 3,
    "id": "sw-003021",
    "source": "Review10 Scene 167"
  },
  {
    "type": "word",
    "front": "one-time code",
    "meaning": "一次性验证码",
    "example": "",
    "weight": 3,
    "id": "sw-003022",
    "source": "Review10 Scene 167"
  },
  {
    "type": "word",
    "front": "time out (software)",
    "meaning": "软件或网络操作超时终止",
    "example": "",
    "weight": 3,
    "id": "sw-003023",
    "source": "Review10 Scene 167"
  },
  {
    "type": "word",
    "front": "invalid code",
    "meaning": "无效验证码",
    "example": "",
    "weight": 3,
    "id": "sw-003024",
    "source": "Review10 Scene 167"
  },
  {
    "type": "word",
    "front": "expire (code)",
    "meaning": "验证码或链接到期失效",
    "example": "",
    "weight": 3,
    "id": "sw-003025",
    "source": "Review10 Scene 167"
  },
  {
    "type": "word",
    "front": "out of sync",
    "meaning": "设备或时钟不同步",
    "example": "",
    "weight": 3,
    "id": "sw-003026",
    "source": "Review10 Scene 167"
  },
  {
    "type": "word",
    "front": "enable automatic time",
    "meaning": "启用自动时间设置",
    "example": "",
    "weight": 3,
    "id": "sw-003027",
    "source": "Review10 Scene 167"
  },
  {
    "type": "word",
    "front": "retry limit",
    "meaning": "允许重新尝试的次数上限",
    "example": "",
    "weight": 3,
    "id": "sw-003028",
    "source": "Review10 Scene 167"
  },
  {
    "type": "word",
    "front": "get locked out of an account",
    "meaning": "由于安全限制被阻止登录账户",
    "example": "",
    "weight": 3,
    "id": "sw-003029",
    "source": "Review10 Scene 167"
  },
  {
    "type": "word",
    "front": "recovery code",
    "meaning": "账户恢复代码",
    "example": "",
    "weight": 3,
    "id": "sw-003030",
    "source": "Review10 Scene 167"
  },
  {
    "type": "word",
    "front": "suspicious sign-in attempt",
    "meaning": "可疑登录尝试",
    "example": "",
    "weight": 3,
    "id": "sw-003031",
    "source": "Review10 Scene 167"
  },
  {
    "type": "word",
    "front": "approve / deny a sign-in request",
    "meaning": "批准／拒绝登录请求",
    "example": "",
    "weight": 3,
    "id": "sw-003032",
    "source": "Review10 Scene 167"
  },
  {
    "type": "word",
    "front": "revoke access",
    "meaning": "正式撤销账户访问权限",
    "example": "",
    "weight": 3,
    "id": "sw-003033",
    "source": "Review10 Scene 167"
  },
  {
    "type": "word",
    "front": "communal bin",
    "meaning": "多名住户共同使用的垃圾桶",
    "example": "",
    "weight": 3,
    "id": "sw-003034",
    "source": "Review10 Scene 168"
  },
  {
    "type": "word",
    "front": "general waste",
    "meaning": "普通不可回收生活垃圾",
    "example": "",
    "weight": 3,
    "id": "sw-003035",
    "source": "Review10 Scene 168"
  },
  {
    "type": "word",
    "front": "mixed recycling",
    "meaning": "混合可回收物收集",
    "example": "",
    "weight": 3,
    "id": "sw-003036",
    "source": "Review10 Scene 168"
  },
  {
    "type": "word",
    "front": "food scraps",
    "meaning": "食物残渣、厨余碎屑",
    "example": "",
    "weight": 3,
    "id": "sw-003037",
    "source": "Review10 Scene 168"
  },
  {
    "type": "word",
    "front": "bin liner",
    "meaning": "垃圾桶内衬袋",
    "example": "",
    "weight": 3,
    "id": "sw-003038",
    "source": "Review10 Scene 168"
  },
  {
    "type": "word",
    "front": "flatten cardboard",
    "meaning": "压平纸箱和纸板",
    "example": "",
    "weight": 3,
    "id": "sw-003039",
    "source": "Review10 Scene 168"
  },
  {
    "type": "word",
    "front": "rinse out a container",
    "meaning": "冲洗容器内部",
    "example": "",
    "weight": 3,
    "id": "sw-003040",
    "source": "Review10 Scene 168"
  },
  {
    "type": "word",
    "front": "contaminated recycling",
    "meaning": "受到食物残渣等污染的可回收物",
    "example": "",
    "weight": 3,
    "id": "sw-003041",
    "source": "Review10 Scene 168"
  },
  {
    "type": "word",
    "front": "overflow (bin)",
    "meaning": "垃圾桶满溢",
    "example": "",
    "weight": 3,
    "id": "sw-003042",
    "source": "Review10 Scene 168"
  },
  {
    "type": "word",
    "front": "collection schedule",
    "meaning": "垃圾定期清运时间表",
    "example": "",
    "weight": 3,
    "id": "sw-003043",
    "source": "Review10 Scene 168"
  },
  {
    "type": "word",
    "front": "bulky waste",
    "meaning": "家具等大件垃圾",
    "example": "",
    "weight": 3,
    "id": "sw-003044",
    "source": "Review10 Scene 168"
  },
  {
    "type": "word",
    "front": "dispose of properly",
    "meaning": "按照规定妥善处理",
    "example": "",
    "weight": 3,
    "id": "sw-003045",
    "source": "Review10 Scene 168"
  },
  {
    "type": "word",
    "front": "sort waste at source",
    "meaning": "在垃圾产生处进行源头分类",
    "example": "",
    "weight": 3,
    "id": "sw-003046",
    "source": "Review10 Scene 168"
  },
  {
    "type": "word",
    "front": "cram something into",
    "meaning": "把大量物品硬塞进狭小空间",
    "example": "",
    "weight": 3,
    "id": "sw-003047",
    "source": "Review10 Scene 168"
  },
  {
    "type": "word",
    "front": "missed collection",
    "meaning": "原定垃圾收集没有进行",
    "example": "",
    "weight": 3,
    "id": "sw-003048",
    "source": "Review10 Scene 168"
  },
  {
    "type": "word",
    "front": "thermal conductivity",
    "meaning": "材料传导热量的能力（热导率）",
    "example": "",
    "weight": 3,
    "id": "sw-003049",
    "source": "Review10 Scene 169"
  },
  {
    "type": "word",
    "front": "conduct heat",
    "meaning": "传导热量",
    "example": "",
    "weight": 3,
    "id": "sw-003050",
    "source": "Review10 Scene 169"
  },
  {
    "type": "word",
    "front": "an insulating material",
    "meaning": "隔热材料",
    "example": "",
    "weight": 3,
    "id": "sw-003051",
    "source": "Review10 Scene 169"
  },
  {
    "type": "word",
    "front": "ambient temperature",
    "meaning": "环境温度",
    "example": "",
    "weight": 3,
    "id": "sw-003052",
    "source": "Review10 Scene 169"
  },
  {
    "type": "word",
    "front": "cool to the touch",
    "meaning": "摸起来凉的",
    "example": "",
    "weight": 3,
    "id": "sw-003053",
    "source": "Review10 Scene 169"
  },
  {
    "type": "word",
    "front": "draw heat away from",
    "meaning": "从某物或身体带走热量",
    "example": "",
    "weight": 3,
    "id": "sw-003054",
    "source": "Review10 Scene 169"
  },
  {
    "type": "word",
    "front": "come into direct contact with",
    "meaning": "与某物直接接触",
    "example": "",
    "weight": 3,
    "id": "sw-003055",
    "source": "Review10 Scene 169"
  },
  {
    "type": "word",
    "front": "thermal equilibrium",
    "meaning": "热平衡",
    "example": "",
    "weight": 3,
    "id": "sw-003056",
    "source": "Review10 Scene 169"
  },
  {
    "type": "word",
    "front": "temperature difference",
    "meaning": "温差",
    "example": "",
    "weight": 3,
    "id": "sw-003057",
    "source": "Review10 Scene 169"
  },
  {
    "type": "word",
    "front": "heat transfer rate",
    "meaning": "热量传递速率",
    "example": "",
    "weight": 3,
    "id": "sw-003058",
    "source": "Review10 Scene 169"
  },
  {
    "type": "word",
    "front": "thermal resistance",
    "meaning": "热阻",
    "example": "",
    "weight": 3,
    "id": "sw-003059",
    "source": "Review10 Scene 169"
  },
  {
    "type": "word",
    "front": "heat capacity",
    "meaning": "热容量",
    "example": "",
    "weight": 3,
    "id": "sw-003060",
    "source": "Review10 Scene 169"
  },
  {
    "type": "word",
    "front": "nerve endings",
    "meaning": "神经末梢",
    "example": "",
    "weight": 3,
    "id": "sw-003061",
    "source": "Review10 Scene 169"
  },
  {
    "type": "word",
    "front": "counterintuitive",
    "meaning": "违反直觉的",
    "example": "",
    "weight": 3,
    "id": "sw-003062",
    "source": "Review10 Scene 169"
  },
  {
    "type": "word",
    "front": "material property",
    "meaning": "材料物理性质",
    "example": "",
    "weight": 3,
    "id": "sw-003063",
    "source": "Review10 Scene 169"
  },
  {
    "type": "word",
    "front": "left-luggage locker",
    "meaning": "车站行李寄存柜",
    "example": "",
    "weight": 3,
    "id": "sw-003064",
    "source": "Review10 Scene 170"
  },
  {
    "type": "word",
    "front": "storage compartment",
    "meaning": "独立储物格",
    "example": "",
    "weight": 3,
    "id": "sw-003065",
    "source": "Review10 Scene 170"
  },
  {
    "type": "word",
    "front": "touchscreen kiosk",
    "meaning": "触摸屏自助服务终端",
    "example": "",
    "weight": 3,
    "id": "sw-003066",
    "source": "Review10 Scene 170"
  },
  {
    "type": "word",
    "front": "cashless payment",
    "meaning": "无现金支付",
    "example": "",
    "weight": 3,
    "id": "sw-003067",
    "source": "Review10 Scene 170"
  },
  {
    "type": "word",
    "front": "contactless reader",
    "meaning": "非接触式读卡器",
    "example": "",
    "weight": 3,
    "id": "sw-003068",
    "source": "Review10 Scene 170"
  },
  {
    "type": "word",
    "front": "payment declined",
    "meaning": "支付被拒绝",
    "example": "",
    "weight": 3,
    "id": "sw-003069",
    "source": "Review10 Scene 170"
  },
  {
    "type": "word",
    "front": "hourly rate",
    "meaning": "按小时收费的标准",
    "example": "",
    "weight": 3,
    "id": "sw-003070",
    "source": "Review10 Scene 170"
  },
  {
    "type": "word",
    "front": "maximum storage period",
    "meaning": "允许寄存的最长时间",
    "example": "",
    "weight": 3,
    "id": "sw-003071",
    "source": "Review10 Scene 170"
  },
  {
    "type": "word",
    "front": "overstay fee",
    "meaning": "超过规定时间的额外收费",
    "example": "",
    "weight": 3,
    "id": "sw-003072",
    "source": "Review10 Scene 170"
  },
  {
    "type": "word",
    "front": "claim ticket",
    "meaning": "领取寄存物品的凭证",
    "example": "",
    "weight": 3,
    "id": "sw-003073",
    "source": "Review10 Scene 170"
  },
  {
    "type": "word",
    "front": "scan a barcode",
    "meaning": "扫描条形码",
    "example": "",
    "weight": 3,
    "id": "sw-003074",
    "source": "Review10 Scene 170"
  },
  {
    "type": "word",
    "front": "release mechanism",
    "meaning": "机械或电子开锁释放机构",
    "example": "",
    "weight": 3,
    "id": "sw-003075",
    "source": "Review10 Scene 170"
  },
  {
    "type": "word",
    "front": "assistance button",
    "meaning": "求助按钮",
    "example": "",
    "weight": 3,
    "id": "sw-003076",
    "source": "Review10 Scene 170"
  },
  {
    "type": "word",
    "front": "intercom",
    "meaning": "对讲系统",
    "example": "",
    "weight": 3,
    "id": "sw-003077",
    "source": "Review10 Scene 170"
  },
  {
    "type": "word",
    "front": "keep something handy",
    "meaning": "把东西放在容易取用的位置",
    "example": "",
    "weight": 3,
    "id": "sw-003078",
    "source": "Review10 Scene 170"
  },
  {
    "type": "word",
    "front": "downpour",
    "meaning": "倾盆大雨",
    "example": "",
    "weight": 3,
    "id": "sw-003079",
    "source": "Review10 Scene 171"
  },
  {
    "type": "word",
    "front": "rain lashes against",
    "meaning": "雨水猛烈拍打",
    "example": "",
    "weight": 3,
    "id": "sw-003080",
    "source": "Review10 Scene 171"
  },
  {
    "type": "word",
    "front": "gust of wind",
    "meaning": "突然增强的一阵强风",
    "example": "",
    "weight": 3,
    "id": "sw-003081",
    "source": "Review10 Scene 171"
  },
  {
    "type": "word",
    "front": "exposed stretch",
    "meaning": "无遮蔽、暴露在风雨中的路段",
    "example": "",
    "weight": 3,
    "id": "sw-003082",
    "source": "Review10 Scene 171"
  },
  {
    "type": "word",
    "front": "waterproof shell",
    "meaning": "防水外套、防水外层",
    "example": "",
    "weight": 3,
    "id": "sw-003083",
    "source": "Review10 Scene 171"
  },
  {
    "type": "word",
    "front": "cinch the hood",
    "meaning": "拉紧收束兜帽",
    "example": "",
    "weight": 3,
    "id": "sw-003084",
    "source": "Review10 Scene 171"
  },
  {
    "type": "word",
    "front": "cuffs",
    "meaning": "袖口",
    "example": "",
    "weight": 3,
    "id": "sw-003085",
    "source": "Review10 Scene 171"
  },
  {
    "type": "word",
    "front": "seep through",
    "meaning": "液体缓慢渗过缝隙或材料",
    "example": "",
    "weight": 3,
    "id": "sw-003086",
    "source": "Review10 Scene 171"
  },
  {
    "type": "word",
    "front": "soaked through",
    "meaning": "湿透到材料内部",
    "example": "",
    "weight": 3,
    "id": "sw-003087",
    "source": "Review10 Scene 171"
  },
  {
    "type": "word",
    "front": "pack liner",
    "meaning": "背包内部防水内衬袋",
    "example": "",
    "weight": 3,
    "id": "sw-003088",
    "source": "Review10 Scene 171"
  },
  {
    "type": "word",
    "front": "dry bag",
    "meaning": "防水袋",
    "example": "",
    "weight": 3,
    "id": "sw-003089",
    "source": "Review10 Scene 171"
  },
  {
    "type": "word",
    "front": "waterlogged",
    "meaning": "吸满水而沉重、湿透的",
    "example": "",
    "weight": 3,
    "id": "sw-003090",
    "source": "Review10 Scene 171"
  },
  {
    "type": "word",
    "front": "shiver",
    "meaning": "因寒冷等不由自主地发抖",
    "example": "",
    "weight": 3,
    "id": "sw-003091",
    "source": "Review10 Scene 171"
  },
  {
    "type": "word",
    "front": "taper off",
    "meaning": "逐渐减弱、减少",
    "example": "",
    "weight": 3,
    "id": "sw-003092",
    "source": "Review10 Scene 171"
  },
  {
    "type": "word",
    "front": "source of funds",
    "meaning": "某笔具体资金的来源",
    "example": "",
    "weight": 3,
    "id": "sw-003093",
    "source": "Review10 Scene 172"
  },
  {
    "type": "word",
    "front": "source of wealth",
    "meaning": "个人整体财富积累的来源",
    "example": "",
    "weight": 3,
    "id": "sw-003094",
    "source": "Review10 Scene 172"
  },
  {
    "type": "word",
    "front": "compliance team",
    "meaning": "合规团队",
    "example": "",
    "weight": 3,
    "id": "sw-003095",
    "source": "Review10 Scene 172"
  },
  {
    "type": "word",
    "front": "due diligence",
    "meaning": "尽职调查与风险核查",
    "example": "",
    "weight": 3,
    "id": "sw-003096",
    "source": "Review10 Scene 172"
  },
  {
    "type": "word",
    "front": "proof of income",
    "meaning": "收入证明",
    "example": "",
    "weight": 3,
    "id": "sw-003097",
    "source": "Review10 Scene 172"
  },
  {
    "type": "word",
    "front": "payslip",
    "meaning": "工资单",
    "example": "",
    "weight": 3,
    "id": "sw-003098",
    "source": "Review10 Scene 172"
  },
  {
    "type": "word",
    "front": "tax return",
    "meaning": "纳税申报表",
    "example": "",
    "weight": 3,
    "id": "sw-003099",
    "source": "Review10 Scene 172"
  },
  {
    "type": "word",
    "front": "one-off transfer",
    "meaning": "一次性转账",
    "example": "",
    "weight": 3,
    "id": "sw-003100",
    "source": "Review10 Scene 172"
  },
  {
    "type": "word",
    "front": "paper trail",
    "meaning": "可追溯的书面或电子记录链",
    "example": "",
    "weight": 3,
    "id": "sw-003101",
    "source": "Review10 Scene 172"
  },
  {
    "type": "word",
    "front": "supporting evidence",
    "meaning": "用于支持陈述的证明证据",
    "example": "",
    "weight": 3,
    "id": "sw-003102",
    "source": "Review10 Scene 172"
  },
  {
    "type": "word",
    "front": "redact sensitive information",
    "meaning": "遮盖文件中的敏感信息",
    "example": "",
    "weight": 3,
    "id": "sw-003103",
    "source": "Review10 Scene 172"
  },
  {
    "type": "word",
    "front": "secure portal",
    "meaning": "安全的线上提交平台",
    "example": "",
    "weight": 3,
    "id": "sw-003104",
    "source": "Review10 Scene 172"
  },
  {
    "type": "word",
    "front": "verification process",
    "meaning": "身份或资料核实流程",
    "example": "",
    "weight": 3,
    "id": "sw-003105",
    "source": "Review10 Scene 172"
  },
  {
    "type": "word",
    "front": "clarification request",
    "meaning": "补充说明请求",
    "example": "",
    "weight": 3,
    "id": "sw-003106",
    "source": "Review10 Scene 172"
  },
  {
    "type": "word",
    "front": "legitimate proceeds",
    "meaning": "合法取得的款项或收益",
    "example": "",
    "weight": 3,
    "id": "sw-003107",
    "source": "Review10 Scene 172"
  },
  {
    "type": "word",
    "front": "line a baking tray",
    "meaning": "给烤盘铺烘焙纸或其他垫材",
    "example": "",
    "weight": 3,
    "id": "sw-003108",
    "source": "Review10 Scene 173"
  },
  {
    "type": "word",
    "front": "parchment paper",
    "meaning": "烘焙纸",
    "example": "",
    "weight": 3,
    "id": "sw-003109",
    "source": "Review10 Scene 173"
  },
  {
    "type": "word",
    "front": "cut into wedges",
    "meaning": "切成楔形块",
    "example": "",
    "weight": 3,
    "id": "sw-003110",
    "source": "Review10 Scene 173"
  },
  {
    "type": "word",
    "front": "florets",
    "meaning": "西兰花等植物的一小朵",
    "example": "",
    "weight": 3,
    "id": "sw-003111",
    "source": "Review10 Scene 173"
  },
  {
    "type": "word",
    "front": "even-sized pieces",
    "meaning": "大小基本均匀的食材块",
    "example": "",
    "weight": 3,
    "id": "sw-003112",
    "source": "Review10 Scene 173"
  },
  {
    "type": "word",
    "front": "in a single layer",
    "meaning": "铺成一层，尽量不重叠",
    "example": "",
    "weight": 3,
    "id": "sw-003113",
    "source": "Review10 Scene 173"
  },
  {
    "type": "word",
    "front": "overcrowd the tray",
    "meaning": "把烤盘铺得过满",
    "example": "",
    "weight": 3,
    "id": "sw-003114",
    "source": "Review10 Scene 173"
  },
  {
    "type": "word",
    "front": "steam rather than brown",
    "meaning": "主要被蒸熟而非烤出褐变",
    "example": "",
    "weight": 3,
    "id": "sw-003115",
    "source": "Review10 Scene 173"
  },
  {
    "type": "word",
    "front": "turn halfway through",
    "meaning": "烹制到一半时翻面",
    "example": "",
    "weight": 3,
    "id": "sw-003116",
    "source": "Review10 Scene 173"
  },
  {
    "type": "word",
    "front": "crisp up",
    "meaning": "表面变得酥脆",
    "example": "",
    "weight": 3,
    "id": "sw-003117",
    "source": "Review10 Scene 173"
  },
  {
    "type": "word",
    "front": "charred edges",
    "meaning": "被烤到发黑的边缘",
    "example": "",
    "weight": 3,
    "id": "sw-003118",
    "source": "Review10 Scene 173"
  },
  {
    "type": "word",
    "front": "caramelise",
    "meaning": "使糖分焦糖化",
    "example": "",
    "weight": 3,
    "id": "sw-003119",
    "source": "Review10 Scene 173"
  },
  {
    "type": "word",
    "front": "fork-tender",
    "meaning": "软到叉子可以轻松插入",
    "example": "",
    "weight": 3,
    "id": "sw-003120",
    "source": "Review10 Scene 173"
  },
  {
    "type": "word",
    "front": "soggy",
    "meaning": "吸水过多、湿软不脆的",
    "example": "",
    "weight": 3,
    "id": "sw-003121",
    "source": "Review10 Scene 173"
  },
  {
    "type": "word",
    "front": "come across as",
    "meaning": "给他人留下某种印象",
    "example": "",
    "weight": 3,
    "id": "sw-003122",
    "source": "Review10 Scene 174"
  },
  {
    "type": "word",
    "front": "an offhand comment",
    "meaning": "未经深思随口说的话",
    "example": "",
    "weight": 3,
    "id": "sw-003123",
    "source": "Review10 Scene 174"
  },
  {
    "type": "word",
    "front": "dismissive",
    "meaning": "轻视、不以为然的",
    "example": "",
    "weight": 3,
    "id": "sw-003124",
    "source": "Review10 Scene 174"
  },
  {
    "type": "word",
    "front": "choice of words",
    "meaning": "措辞",
    "example": "",
    "weight": 3,
    "id": "sw-003125",
    "source": "Review10 Scene 174"
  },
  {
    "type": "word",
    "front": "misinterpret",
    "meaning": "错误理解话语或信息",
    "example": "",
    "weight": 3,
    "id": "sw-003126",
    "source": "Review10 Scene 174"
  },
  {
    "type": "word",
    "front": "read too much into",
    "meaning": "过度解读",
    "example": "",
    "weight": 3,
    "id": "sw-003127",
    "source": "Review10 Scene 174"
  },
  {
    "type": "word",
    "front": "take something personally",
    "meaning": "把某事当成针对自己的批评",
    "example": "",
    "weight": 3,
    "id": "sw-003128",
    "source": "Review10 Scene 174"
  },
  {
    "type": "word",
    "front": "get defensive",
    "meaning": "急于为自己辩解而进入防御状态",
    "example": "",
    "weight": 3,
    "id": "sw-003129",
    "source": "Review10 Scene 174"
  },
  {
    "type": "word",
    "front": "put words in someone's mouth",
    "meaning": "把别人没说过的话强加给他",
    "example": "",
    "weight": 3,
    "id": "sw-003130",
    "source": "Review10 Scene 174"
  },
  {
    "type": "word",
    "front": "clear the air",
    "meaning": "把误会和不愉快说开",
    "example": "",
    "weight": 3,
    "id": "sw-003131",
    "source": "Review10 Scene 174"
  },
  {
    "type": "word",
    "front": "own up to",
    "meaning": "主动承认错误并承担责任",
    "example": "",
    "weight": 3,
    "id": "sw-003132",
    "source": "Review10 Scene 174"
  },
  {
    "type": "word",
    "front": "give someone the benefit of the doubt",
    "meaning": "证据不足时先相信对方并非恶意",
    "example": "",
    "weight": 3,
    "id": "sw-003133",
    "source": "Review10 Scene 174"
  },
  {
    "type": "word",
    "front": "talk past each other",
    "meaning": "双方各说各话、没有讨论同一问题",
    "example": "",
    "weight": 3,
    "id": "sw-003134",
    "source": "Review10 Scene 174"
  },
  {
    "type": "word",
    "front": "strike a nerve",
    "meaning": "触及某人的敏感点",
    "example": "",
    "weight": 3,
    "id": "sw-003135",
    "source": "Review10 Scene 174"
  },
  {
    "type": "word",
    "front": "third place",
    "meaning": "家与工作场所以外的非正式聚会空间",
    "example": "",
    "weight": 3,
    "id": "sw-003136",
    "source": "Review10 Scene 175"
  },
  {
    "type": "word",
    "front": "social hub",
    "meaning": "人们经常聚集交流的社交中心",
    "example": "",
    "weight": 3,
    "id": "sw-003137",
    "source": "Review10 Scene 175"
  },
  {
    "type": "word",
    "front": "regulars",
    "meaning": "某家店或地点的常客",
    "example": "",
    "weight": 3,
    "id": "sw-003138",
    "source": "Review10 Scene 175"
  },
  {
    "type": "word",
    "front": "linger",
    "meaning": "逗留，慢慢待着不急于离开",
    "example": "",
    "weight": 3,
    "id": "sw-003139",
    "source": "Review10 Scene 175"
  },
  {
    "type": "word",
    "front": "casual encounter",
    "meaning": "偶然、非正式的接触",
    "example": "",
    "weight": 3,
    "id": "sw-003140",
    "source": "Review10 Scene 175"
  },
  {
    "type": "word",
    "front": "foot traffic",
    "meaning": "步行人流、客流",
    "example": "",
    "weight": 3,
    "id": "sw-003141",
    "source": "Review10 Scene 175"
  },
  {
    "type": "word",
    "front": "a low barrier to entry",
    "meaning": "进入或参与门槛低",
    "example": "",
    "weight": 3,
    "id": "sw-003142",
    "source": "Review10 Scene 175"
  },
  {
    "type": "word",
    "front": "a sense of belonging",
    "meaning": "归属感",
    "example": "",
    "weight": 3,
    "id": "sw-003143",
    "source": "Review10 Scene 175"
  },
  {
    "type": "word",
    "front": "social ties",
    "meaning": "人际或社会关系纽带",
    "example": "",
    "weight": 3,
    "id": "sw-003144",
    "source": "Review10 Scene 175"
  },
  {
    "type": "word",
    "front": "social fabric",
    "meaning": "社会关系与凝聚力网络",
    "example": "",
    "weight": 3,
    "id": "sw-003145",
    "source": "Review10 Scene 175"
  },
  {
    "type": "word",
    "front": "inclusive",
    "meaning": "具有包容性、允许多样人群参与",
    "example": "",
    "weight": 3,
    "id": "sw-003146",
    "source": "Review10 Scene 175"
  },
  {
    "type": "word",
    "front": "accessible to",
    "meaning": "某人可以进入、使用或获得",
    "example": "",
    "weight": 3,
    "id": "sw-003147",
    "source": "Review10 Scene 175"
  },
  {
    "type": "word",
    "front": "public realm",
    "meaning": "城市的整体公共空间领域",
    "example": "",
    "weight": 3,
    "id": "sw-003148",
    "source": "Review10 Scene 175"
  },
  {
    "type": "word",
    "front": "civic life",
    "meaning": "居民参与公共生活的活动",
    "example": "",
    "weight": 3,
    "id": "sw-003149",
    "source": "Review10 Scene 175"
  },
  {
    "type": "word",
    "front": "commercial pressure",
    "meaning": "商业经营与盈利压力",
    "example": "",
    "weight": 3,
    "id": "sw-003150",
    "source": "Review10 Scene 175"
  },
  {
    "type": "word",
    "front": "ferry crossing",
    "meaning": "渡轮横跨水域的航程",
    "example": "",
    "weight": 3,
    "id": "sw-003151",
    "source": "Review10 Scene 176"
  },
  {
    "type": "word",
    "front": "sailing (ferry)",
    "meaning": "一个计划出发的渡轮航次",
    "example": "",
    "weight": 3,
    "id": "sw-003152",
    "source": "Review10 Scene 176"
  },
  {
    "type": "word",
    "front": "ferry terminal",
    "meaning": "渡轮客运码头",
    "example": "",
    "weight": 3,
    "id": "sw-003153",
    "source": "Review10 Scene 176"
  },
  {
    "type": "word",
    "front": "departure quay",
    "meaning": "船舶出发的码头泊位",
    "example": "",
    "weight": 3,
    "id": "sw-003154",
    "source": "Review10 Scene 176"
  },
  {
    "type": "word",
    "front": "port authority",
    "meaning": "港口管理机构",
    "example": "",
    "weight": 3,
    "id": "sw-003155",
    "source": "Review10 Scene 176"
  },
  {
    "type": "word",
    "front": "high winds",
    "meaning": "强风",
    "example": "",
    "weight": 3,
    "id": "sw-003156",
    "source": "Review10 Scene 176"
  },
  {
    "type": "word",
    "front": "weather advisory",
    "meaning": "天气风险提示",
    "example": "",
    "weight": 3,
    "id": "sw-003157",
    "source": "Review10 Scene 176"
  },
  {
    "type": "word",
    "front": "ferry operator",
    "meaning": "渡轮运营商",
    "example": "",
    "weight": 3,
    "id": "sw-003158",
    "source": "Review10 Scene 176"
  },
  {
    "type": "word",
    "front": "vehicle deck",
    "meaning": "用于停放车辆的船舶甲板",
    "example": "",
    "weight": 3,
    "id": "sw-003159",
    "source": "Review10 Scene 176"
  },
  {
    "type": "word",
    "front": "foot passenger",
    "meaning": "不带车辆登船的步行乘客",
    "example": "",
    "weight": 3,
    "id": "sw-003160",
    "source": "Review10 Scene 176"
  },
  {
    "type": "word",
    "front": "rebook for",
    "meaning": "改订至另一日期或航次",
    "example": "",
    "weight": 3,
    "id": "sw-003161",
    "source": "Review10 Scene 176"
  },
  {
    "type": "word",
    "front": "travel voucher",
    "meaning": "旅行代金券、抵用凭证",
    "example": "",
    "weight": 3,
    "id": "sw-003162",
    "source": "Review10 Scene 176"
  },
  {
    "type": "word",
    "front": "validity period",
    "meaning": "有效期",
    "example": "",
    "weight": 3,
    "id": "sw-003163",
    "source": "Review10 Scene 176"
  },
  {
    "type": "word",
    "front": "thunderhead",
    "meaning": "高耸的雷暴云",
    "example": "",
    "weight": 3,
    "id": "sw-003164",
    "source": "Review10 Scene 177"
  },
  {
    "type": "word",
    "front": "a rumble of thunder",
    "meaning": "低沉、持续滚动的雷声",
    "example": "",
    "weight": 3,
    "id": "sw-003165",
    "source": "Review10 Scene 177"
  },
  {
    "type": "word",
    "front": "a flash of lightning",
    "meaning": "一道短暂的闪电",
    "example": "",
    "weight": 3,
    "id": "sw-003166",
    "source": "Review10 Scene 177"
  },
  {
    "type": "word",
    "front": "thunderclap",
    "meaning": "突然响起的一声响雷",
    "example": "",
    "weight": 3,
    "id": "sw-003167",
    "source": "Review10 Scene 177"
  },
  {
    "type": "word",
    "front": "storm cell",
    "meaning": "雷暴单体",
    "example": "",
    "weight": 3,
    "id": "sw-003168",
    "source": "Review10 Scene 177"
  },
  {
    "type": "word",
    "front": "weather radar",
    "meaning": "天气雷达",
    "example": "",
    "weight": 3,
    "id": "sw-003169",
    "source": "Review10 Scene 177"
  },
  {
    "type": "word",
    "front": "lightning strike",
    "meaning": "雷击事件",
    "example": "",
    "weight": 3,
    "id": "sw-003170",
    "source": "Review10 Scene 177"
  },
  {
    "type": "word",
    "front": "exposed high ground",
    "meaning": "无遮蔽的高处地形",
    "example": "",
    "weight": 3,
    "id": "sw-003171",
    "source": "Review10 Scene 177"
  },
  {
    "type": "word",
    "front": "treeline",
    "meaning": "林线",
    "example": "",
    "weight": 3,
    "id": "sw-003172",
    "source": "Review10 Scene 177"
  },
  {
    "type": "word",
    "front": "substantial shelter",
    "meaning": "能提供可靠保护的坚固避险场所",
    "example": "",
    "weight": 3,
    "id": "sw-003173",
    "source": "Review10 Scene 177"
  },
  {
    "type": "word",
    "front": "ground current",
    "meaning": "雷击后沿地面传播的电流",
    "example": "",
    "weight": 3,
    "id": "sw-003174",
    "source": "Review10 Scene 177"
  },
  {
    "type": "word",
    "front": "flash flood",
    "meaning": "突发山洪",
    "example": "",
    "weight": 3,
    "id": "sw-003175",
    "source": "Review10 Scene 177"
  },
  {
    "type": "word",
    "front": "take cover",
    "meaning": "迅速寻找保护和遮蔽",
    "example": "",
    "weight": 3,
    "id": "sw-003176",
    "source": "Review10 Scene 177"
  },
  {
    "type": "word",
    "front": "retreat promptly",
    "meaning": "及时、有序地撤退",
    "example": "",
    "weight": 3,
    "id": "sw-003177",
    "source": "Review10 Scene 177"
  },
  {
    "type": "word",
    "front": "wait out the storm",
    "meaning": "等到雷暴过去",
    "example": "",
    "weight": 3,
    "id": "sw-003178",
    "source": "Review10 Scene 177"
  },
  {
    "type": "word",
    "front": "musty",
    "meaning": "潮湿不通风造成的陈旧闷臭味",
    "example": "",
    "weight": 3,
    "id": "sw-003179",
    "source": "Review10 Scene 178"
  },
  {
    "type": "word",
    "front": "a load of laundry",
    "meaning": "一次洗涤的一批衣物",
    "example": "",
    "weight": 3,
    "id": "sw-003180",
    "source": "Review10 Scene 178"
  },
  {
    "type": "word",
    "front": "washing machine drum",
    "meaning": "洗衣机滚筒",
    "example": "",
    "weight": 3,
    "id": "sw-003181",
    "source": "Review10 Scene 178"
  },
  {
    "type": "word",
    "front": "wash cycle",
    "meaning": "洗衣程序",
    "example": "",
    "weight": 3,
    "id": "sw-003182",
    "source": "Review10 Scene 178"
  },
  {
    "type": "word",
    "front": "detergent drawer",
    "meaning": "放洗衣剂的抽屉式容器",
    "example": "",
    "weight": 3,
    "id": "sw-003183",
    "source": "Review10 Scene 178"
  },
  {
    "type": "word",
    "front": "rubber door gasket",
    "meaning": "洗衣机门的橡胶密封圈",
    "example": "",
    "weight": 3,
    "id": "sw-003184",
    "source": "Review10 Scene 178"
  },
  {
    "type": "word",
    "front": "fabric softener",
    "meaning": "衣物柔顺剂",
    "example": "",
    "weight": 3,
    "id": "sw-003185",
    "source": "Review10 Scene 178"
  },
  {
    "type": "word",
    "front": "laundry pod",
    "meaning": "洗衣凝珠",
    "example": "",
    "weight": 3,
    "id": "sw-003186",
    "source": "Review10 Scene 178"
  },
  {
    "type": "word",
    "front": "care label",
    "meaning": "衣物洗涤护理标签",
    "example": "",
    "weight": 3,
    "id": "sw-003187",
    "source": "Review10 Scene 178"
  },
  {
    "type": "word",
    "front": "tumble dry",
    "meaning": "用滚筒烘干机烘干",
    "example": "",
    "weight": 3,
    "id": "sw-003188",
    "source": "Review10 Scene 178"
  },
  {
    "type": "word",
    "front": "leave something ajar",
    "meaning": "让门窗等保持微开",
    "example": "",
    "weight": 3,
    "id": "sw-003189",
    "source": "Review10 Scene 178"
  },
  {
    "type": "word",
    "front": "air something out",
    "meaning": "给衣物或容器透气、散味",
    "example": "",
    "weight": 3,
    "id": "sw-003190",
    "source": "Review10 Scene 178"
  },
  {
    "type": "word",
    "front": "dye transfer",
    "meaning": "衣物间串色、染料转移",
    "example": "",
    "weight": 3,
    "id": "sw-003191",
    "source": "Review10 Scene 178"
  },
  {
    "type": "word",
    "front": "colourfast",
    "meaning": "面料不易褪色掉色",
    "example": "",
    "weight": 3,
    "id": "sw-003192",
    "source": "Review10 Scene 178"
  },
  {
    "type": "word",
    "front": "staff rota",
    "meaning": "员工轮班排班表",
    "example": "",
    "weight": 3,
    "id": "sw-003193",
    "source": "Review10 Scene 179"
  },
  {
    "type": "word",
    "front": "shift swap",
    "meaning": "两名员工交换班次",
    "example": "",
    "weight": 3,
    "id": "sw-003194",
    "source": "Review10 Scene 179"
  },
  {
    "type": "word",
    "front": "cover someone's shift",
    "meaning": "替某人完成工作班次",
    "example": "",
    "weight": 3,
    "id": "sw-003195",
    "source": "Review10 Scene 179"
  },
  {
    "type": "word",
    "front": "scheduling conflict",
    "meaning": "两项安排的时间冲突",
    "example": "",
    "weight": 3,
    "id": "sw-003196",
    "source": "Review10 Scene 179"
  },
  {
    "type": "word",
    "front": "short-staffed",
    "meaning": "工作岗位人手不足",
    "example": "",
    "weight": 3,
    "id": "sw-003197",
    "source": "Review10 Scene 179"
  },
  {
    "type": "word",
    "front": "staffing gap",
    "meaning": "某时段或任务的人员缺口",
    "example": "",
    "weight": 3,
    "id": "sw-003198",
    "source": "Review10 Scene 179"
  },
  {
    "type": "word",
    "front": "partial shift",
    "meaning": "一整个班次的一部分",
    "example": "",
    "weight": 3,
    "id": "sw-003199",
    "source": "Review10 Scene 179"
  },
  {
    "type": "word",
    "front": "pick up a shift",
    "meaning": "额外接下一次工作班次",
    "example": "",
    "weight": 3,
    "id": "sw-003200",
    "source": "Review10 Scene 179"
  },
  {
    "type": "word",
    "front": "shift overlap",
    "meaning": "两个班次重叠的交接时段",
    "example": "",
    "weight": 3,
    "id": "sw-003201",
    "source": "Review10 Scene 179"
  },
  {
    "type": "word",
    "front": "handover notes",
    "meaning": "工作交接记录",
    "example": "",
    "weight": 3,
    "id": "sw-003202",
    "source": "Review10 Scene 179"
  },
  {
    "type": "word",
    "front": "timesheet",
    "meaning": "工时记录表",
    "example": "",
    "weight": 3,
    "id": "sw-003203",
    "source": "Review10 Scene 179"
  },
  {
    "type": "word",
    "front": "clock in / clock out",
    "meaning": "开始／结束工作时打卡",
    "example": "",
    "weight": 3,
    "id": "sw-003204",
    "source": "Review10 Scene 179"
  },
  {
    "type": "word",
    "front": "double shift",
    "meaning": "连续承担两个班次",
    "example": "",
    "weight": 3,
    "id": "sw-003205",
    "source": "Review10 Scene 179"
  },
  {
    "type": "word",
    "front": "supervisor sign-off",
    "meaning": "主管正式批准或确认",
    "example": "",
    "weight": 3,
    "id": "sw-003206",
    "source": "Review10 Scene 179"
  },
  {
    "type": "word",
    "front": "a no-show",
    "meaning": "没有按预约或排班出席的人或行为",
    "example": "",
    "weight": 3,
    "id": "sw-003207",
    "source": "Review10 Scene 179"
  },
  {
    "type": "word",
    "front": "a trim (haircut)",
    "meaning": "小幅度修剪头发",
    "example": "",
    "weight": 3,
    "id": "sw-003208",
    "source": "Review10 Scene 180"
  },
  {
    "type": "word",
    "front": "take an inch off",
    "meaning": "把头发剪掉约一英寸",
    "example": "",
    "weight": 3,
    "id": "sw-003209",
    "source": "Review10 Scene 180"
  },
  {
    "type": "word",
    "front": "taper (hair)",
    "meaning": "理发中的自然渐短",
    "example": "",
    "weight": 3,
    "id": "sw-003210",
    "source": "Review10 Scene 180"
  },
  {
    "type": "word",
    "front": "fade (hair)",
    "meaning": "理发中的短发渐变过渡",
    "example": "",
    "weight": 3,
    "id": "sw-003211",
    "source": "Review10 Scene 180"
  },
  {
    "type": "word",
    "front": "clippers",
    "meaning": "电动理发推子",
    "example": "",
    "weight": 3,
    "id": "sw-003212",
    "source": "Review10 Scene 180"
  },
  {
    "type": "word",
    "front": "scissor cut",
    "meaning": "主要使用剪刀的修剪方式",
    "example": "",
    "weight": 3,
    "id": "sw-003213",
    "source": "Review10 Scene 180"
  },
  {
    "type": "word",
    "front": "fringe / bangs",
    "meaning": "刘海（英式／美式）",
    "example": "",
    "weight": 3,
    "id": "sw-003214",
    "source": "Review10 Scene 180"
  },
  {
    "type": "word",
    "front": "sweep something to one side",
    "meaning": "把头发梳向一侧",
    "example": "",
    "weight": 3,
    "id": "sw-003215",
    "source": "Review10 Scene 180"
  },
  {
    "type": "word",
    "front": "cowlick",
    "meaning": "局部头发逆向翘起的一撮",
    "example": "",
    "weight": 3,
    "id": "sw-003216",
    "source": "Review10 Scene 180"
  },
  {
    "type": "word",
    "front": "crown (head)",
    "meaning": "头顶靠后、发旋附近的位置",
    "example": "",
    "weight": 3,
    "id": "sw-003217",
    "source": "Review10 Scene 180"
  },
  {
    "type": "word",
    "front": "blend the sides",
    "meaning": "让两侧短发与顶部长度自然衔接",
    "example": "",
    "weight": 3,
    "id": "sw-003218",
    "source": "Review10 Scene 180"
  },
  {
    "type": "word",
    "front": "sideburns",
    "meaning": "鬓角",
    "example": "",
    "weight": 3,
    "id": "sw-003219",
    "source": "Review10 Scene 180"
  },
  {
    "type": "word",
    "front": "neckline (haircut)",
    "meaning": "后颈发际线",
    "example": "",
    "weight": 3,
    "id": "sw-003220",
    "source": "Review10 Scene 180"
  },
  {
    "type": "word",
    "front": "uneven",
    "meaning": "不均匀、不对称的",
    "example": "",
    "weight": 3,
    "id": "sw-003221",
    "source": "Review10 Scene 180"
  },
  {
    "type": "word",
    "front": "grow out (hair)",
    "meaning": "逐渐留长头发",
    "example": "",
    "weight": 3,
    "id": "sw-003222",
    "source": "Review10 Scene 180"
  },
  {
    "type": "word",
    "front": "social norm",
    "meaning": "社会规范、群体默认行为标准",
    "example": "",
    "weight": 3,
    "id": "sw-003223",
    "source": "Review10 Scene 181"
  },
  {
    "type": "word",
    "front": "unwritten rule",
    "meaning": "不成文规则",
    "example": "",
    "weight": 3,
    "id": "sw-003224",
    "source": "Review10 Scene 181"
  },
  {
    "type": "word",
    "front": "shared expectations",
    "meaning": "群体成员共同持有的行为预期",
    "example": "",
    "weight": 3,
    "id": "sw-003225",
    "source": "Review10 Scene 181"
  },
  {
    "type": "word",
    "front": "reciprocity",
    "meaning": "互惠原则",
    "example": "",
    "weight": 3,
    "id": "sw-003226",
    "source": "Review10 Scene 181"
  },
  {
    "type": "word",
    "front": "collective effort",
    "meaning": "集体共同努力",
    "example": "",
    "weight": 3,
    "id": "sw-003227",
    "source": "Review10 Scene 181"
  },
  {
    "type": "word",
    "front": "collective action",
    "meaning": "为共同目标协调采取行动",
    "example": "",
    "weight": 3,
    "id": "sw-003228",
    "source": "Review10 Scene 181"
  },
  {
    "type": "word",
    "front": "free rider",
    "meaning": "不付出相应贡献却享受集体成果的人",
    "example": "",
    "weight": 3,
    "id": "sw-003229",
    "source": "Review10 Scene 181"
  },
  {
    "type": "word",
    "front": "accountability",
    "meaning": "问责性、需要对行动承担责任的机制",
    "example": "",
    "weight": 3,
    "id": "sw-003230",
    "source": "Review10 Scene 181"
  },
  {
    "type": "word",
    "front": "peer influence",
    "meaning": "同伴影响",
    "example": "",
    "weight": 3,
    "id": "sw-003231",
    "source": "Review10 Scene 181"
  },
  {
    "type": "word",
    "front": "social sanction",
    "meaning": "非正式或正式的社会约束及惩罚",
    "example": "",
    "weight": 3,
    "id": "sw-003232",
    "source": "Review10 Scene 181"
  },
  {
    "type": "word",
    "front": "informal enforcement",
    "meaning": "通过提醒、群体压力使规则落实",
    "example": "",
    "weight": 3,
    "id": "sw-003233",
    "source": "Review10 Scene 181"
  },
  {
    "type": "word",
    "front": "conformity",
    "meaning": "从众、行为与群体保持一致",
    "example": "",
    "weight": 3,
    "id": "sw-003234",
    "source": "Review10 Scene 181"
  },
  {
    "type": "word",
    "front": "norm violation",
    "meaning": "违反社会规范的行为",
    "example": "",
    "weight": 3,
    "id": "sw-003235",
    "source": "Review10 Scene 181"
  },
  {
    "type": "word",
    "front": "resentment",
    "meaning": "累积的不满和怨气",
    "example": "",
    "weight": 3,
    "id": "sw-003236",
    "source": "Review10 Scene 181"
  },
  {
    "type": "word",
    "front": "self-regulation",
    "meaning": "自主规范与控制行为",
    "example": "",
    "weight": 3,
    "id": "sw-003237",
    "source": "Review10 Scene 181"
  },
  {
    "type": "word",
    "front": "security checkpoint",
    "meaning": "机场安全检查关卡",
    "example": "",
    "weight": 3,
    "id": "sw-003238",
    "source": "Review10 Scene 182"
  },
  {
    "type": "word",
    "front": "screening tray",
    "meaning": "安检托盘",
    "example": "",
    "weight": 3,
    "id": "sw-003239",
    "source": "Review10 Scene 182"
  },
  {
    "type": "word",
    "front": "walk-through metal detector",
    "meaning": "门式金属探测器",
    "example": "",
    "weight": 3,
    "id": "sw-003240",
    "source": "Review10 Scene 182"
  },
  {
    "type": "word",
    "front": "set off an alarm",
    "meaning": "使设备报警、触发警报",
    "example": "",
    "weight": 3,
    "id": "sw-003241",
    "source": "Review10 Scene 182"
  },
  {
    "type": "word",
    "front": "secondary screening",
    "meaning": "二次安检",
    "example": "",
    "weight": 3,
    "id": "sw-003242",
    "source": "Review10 Scene 182"
  },
  {
    "type": "word",
    "front": "manual inspection",
    "meaning": "工作人员人工检查",
    "example": "",
    "weight": 3,
    "id": "sw-003243",
    "source": "Review10 Scene 182"
  },
  {
    "type": "word",
    "front": "swab test",
    "meaning": "擦拭取样检测",
    "example": "",
    "weight": 3,
    "id": "sw-003244",
    "source": "Review10 Scene 182"
  },
  {
    "type": "word",
    "front": "liquid container",
    "meaning": "盛放液体的容器",
    "example": "",
    "weight": 3,
    "id": "sw-003245",
    "source": "Review10 Scene 182"
  },
  {
    "type": "word",
    "front": "resealable bag",
    "meaning": "可重复封口的袋子",
    "example": "",
    "weight": 3,
    "id": "sw-003246",
    "source": "Review10 Scene 182"
  },
  {
    "type": "word",
    "front": "restricted item",
    "meaning": "受到携带条件限制的物品",
    "example": "",
    "weight": 3,
    "id": "sw-003247",
    "source": "Review10 Scene 182"
  },
  {
    "type": "word",
    "front": "surrender an item",
    "meaning": "按要求交出或放弃携带物品",
    "example": "",
    "weight": 3,
    "id": "sw-003248",
    "source": "Review10 Scene 182"
  },
  {
    "type": "word",
    "front": "body scanner",
    "meaning": "人体安全扫描设备",
    "example": "",
    "weight": 3,
    "id": "sw-003249",
    "source": "Review10 Scene 182"
  },
  {
    "type": "word",
    "front": "pat-down",
    "meaning": "人工触摸安检",
    "example": "",
    "weight": 3,
    "id": "sw-003250",
    "source": "Review10 Scene 182"
  },
  {
    "type": "word",
    "front": "repack your belongings",
    "meaning": "检查后重新装好随身物品",
    "example": "",
    "weight": 3,
    "id": "sw-003251",
    "source": "Review10 Scene 182"
  },
  {
    "type": "word",
    "front": "natural spring",
    "meaning": "天然泉水、泉眼",
    "example": "",
    "weight": 3,
    "id": "sw-003252",
    "source": "Review10 Scene 183"
  },
  {
    "type": "word",
    "front": "seasonal stream",
    "meaning": "季节性溪流",
    "example": "",
    "weight": 3,
    "id": "sw-003253",
    "source": "Review10 Scene 183"
  },
  {
    "type": "word",
    "front": "run dry",
    "meaning": "溪流、泉眼等干涸",
    "example": "",
    "weight": 3,
    "id": "sw-003254",
    "source": "Review10 Scene 183"
  },
  {
    "type": "word",
    "front": "a trickle of water",
    "meaning": "细小的一股水流",
    "example": "",
    "weight": 3,
    "id": "sw-003255",
    "source": "Review10 Scene 183"
  },
  {
    "type": "word",
    "front": "refill point",
    "meaning": "补充饮用水的地点",
    "example": "",
    "weight": 3,
    "id": "sw-003256",
    "source": "Review10 Scene 183"
  },
  {
    "type": "word",
    "front": "potable water",
    "meaning": "符合饮用要求的水",
    "example": "",
    "weight": 3,
    "id": "sw-003257",
    "source": "Review10 Scene 183"
  },
  {
    "type": "word",
    "front": "untreated water",
    "meaning": "未经适当处理的水",
    "example": "",
    "weight": 3,
    "id": "sw-003258",
    "source": "Review10 Scene 183"
  },
  {
    "type": "word",
    "front": "portable water filter",
    "meaning": "便携滤水器",
    "example": "",
    "weight": 3,
    "id": "sw-003259",
    "source": "Review10 Scene 183"
  },
  {
    "type": "word",
    "front": "filter cartridge",
    "meaning": "滤芯、可替换过滤模块",
    "example": "",
    "weight": 3,
    "id": "sw-003260",
    "source": "Review10 Scene 183"
  },
  {
    "type": "word",
    "front": "stagnant water",
    "meaning": "停滞不流动的水",
    "example": "",
    "weight": 3,
    "id": "sw-003261",
    "source": "Review10 Scene 183"
  },
  {
    "type": "word",
    "front": "waterborne pathogen",
    "meaning": "通过水传播的病原体",
    "example": "",
    "weight": 3,
    "id": "sw-003262",
    "source": "Review10 Scene 183"
  },
  {
    "type": "word",
    "front": "reserve supply",
    "meaning": "预留的备用物资",
    "example": "",
    "weight": 3,
    "id": "sw-003263",
    "source": "Review10 Scene 183"
  },
  {
    "type": "word",
    "front": "resupply point",
    "meaning": "可补给水、食物等的地点",
    "example": "",
    "weight": 3,
    "id": "sw-003264",
    "source": "Review10 Scene 183"
  },
  {
    "type": "word",
    "front": "hydration needs",
    "meaning": "在特定条件下的补水需求",
    "example": "",
    "weight": 3,
    "id": "sw-003265",
    "source": "Review10 Scene 183"
  },
  {
    "type": "word",
    "front": "water-carrying capacity",
    "meaning": "随身最大储水容量",
    "example": "",
    "weight": 3,
    "id": "sw-003266",
    "source": "Review10 Scene 183"
  },
  {
    "type": "word",
    "front": "self-checkout",
    "meaning": "自助结账设备或区域",
    "example": "",
    "weight": 3,
    "id": "sw-003267",
    "source": "Review10 Scene 184"
  },
  {
    "type": "word",
    "front": "ring up at",
    "meaning": "收银系统扫描显示某价格",
    "example": "",
    "weight": 3,
    "id": "sw-003268",
    "source": "Review10 Scene 184"
  },
  {
    "type": "word",
    "front": "promotional price",
    "meaning": "促销价",
    "example": "",
    "weight": 3,
    "id": "sw-003269",
    "source": "Review10 Scene 184"
  },
  {
    "type": "word",
    "front": "loyalty card",
    "meaning": "商店会员卡",
    "example": "",
    "weight": 3,
    "id": "sw-003270",
    "source": "Review10 Scene 184"
  },
  {
    "type": "word",
    "front": "member-only offer",
    "meaning": "会员专享优惠",
    "example": "",
    "weight": 3,
    "id": "sw-003271",
    "source": "Review10 Scene 184"
  },
  {
    "type": "word",
    "front": "multibuy offer",
    "meaning": "多件购买优惠",
    "example": "",
    "weight": 3,
    "id": "sw-003272",
    "source": "Review10 Scene 184"
  },
  {
    "type": "word",
    "front": "unit price",
    "meaning": "按同一计量单位计算的价格",
    "example": "",
    "weight": 3,
    "id": "sw-003273",
    "source": "Review10 Scene 184"
  },
  {
    "type": "word",
    "front": "scanning error",
    "meaning": "条形码扫描或收银录入错误",
    "example": "",
    "weight": 3,
    "id": "sw-003274",
    "source": "Review10 Scene 184"
  },
  {
    "type": "word",
    "front": "price override",
    "meaning": "由授权人员手动修改收银价格",
    "example": "",
    "weight": 3,
    "id": "sw-003275",
    "source": "Review10 Scene 184"
  },
  {
    "type": "word",
    "front": "honour the advertised price",
    "meaning": "按照展示的宣传价销售",
    "example": "",
    "weight": 3,
    "id": "sw-003276",
    "source": "Review10 Scene 184"
  },
  {
    "type": "word",
    "front": "mislabelled",
    "meaning": "商品标签信息不对或贴错位置",
    "example": "",
    "weight": 3,
    "id": "sw-003277",
    "source": "Review10 Scene 184"
  },
  {
    "type": "word",
    "front": "promotion end date",
    "meaning": "促销结束日期",
    "example": "",
    "weight": 3,
    "id": "sw-003278",
    "source": "Review10 Scene 184"
  },
  {
    "type": "word",
    "front": "be excluded from an offer",
    "meaning": "不参与某项优惠",
    "example": "",
    "weight": 3,
    "id": "sw-003279",
    "source": "Review10 Scene 184"
  },
  {
    "type": "word",
    "front": "fare validator",
    "meaning": "公共交通电子验票设备",
    "example": "",
    "weight": 3,
    "id": "sw-003280",
    "source": "Review10 Scene 185"
  },
  {
    "type": "word",
    "front": "validate a ticket",
    "meaning": "验证或激活车票",
    "example": "",
    "weight": 3,
    "id": "sw-003281",
    "source": "Review10 Scene 185"
  },
  {
    "type": "word",
    "front": "confirmation beep",
    "meaning": "设备成功操作的短促提示音",
    "example": "",
    "weight": 3,
    "id": "sw-003282",
    "source": "Review10 Scene 185"
  },
  {
    "type": "word",
    "front": "activate an e-ticket",
    "meaning": "激活电子车票",
    "example": "",
    "weight": 3,
    "id": "sw-003283",
    "source": "Review10 Scene 185"
  },
  {
    "type": "word",
    "front": "activation time",
    "meaning": "车票开始生效的时间",
    "example": "",
    "weight": 3,
    "id": "sw-003284",
    "source": "Review10 Scene 185"
  },
  {
    "type": "word",
    "front": "tap in / tap out",
    "meaning": "乘坐公共交通时刷卡进站／出站",
    "example": "",
    "weight": 3,
    "id": "sw-003285",
    "source": "Review10 Scene 185"
  },
  {
    "type": "word",
    "front": "transfer window",
    "meaning": "允许换乘的票据有效时段",
    "example": "",
    "weight": 3,
    "id": "sw-003286",
    "source": "Review10 Scene 185"
  },
  {
    "type": "word",
    "front": "fare zone",
    "meaning": "公共交通票价分区",
    "example": "",
    "weight": 3,
    "id": "sw-003287",
    "source": "Review10 Scene 185"
  },
  {
    "type": "word",
    "front": "proof of payment",
    "meaning": "有效车费支付凭证",
    "example": "",
    "weight": 3,
    "id": "sw-003288",
    "source": "Review10 Scene 185"
  },
  {
    "type": "word",
    "front": "penalty fare",
    "meaning": "未持有效票据时的处罚性票价",
    "example": "",
    "weight": 3,
    "id": "sw-003289",
    "source": "Review10 Scene 185"
  },
  {
    "type": "word",
    "front": "fare evasion",
    "meaning": "故意规避支付车费的逃票行为",
    "example": "",
    "weight": 3,
    "id": "sw-003290",
    "source": "Review10 Scene 185"
  },
  {
    "type": "word",
    "front": "service frequency",
    "meaning": "公交铁路线路班次运行频率",
    "example": "",
    "weight": 3,
    "id": "sw-003291",
    "source": "Review10 Scene 185"
  },
  {
    "type": "word",
    "front": "headway",
    "meaning": "同一路线上前后班次的时间间隔",
    "example": "",
    "weight": 3,
    "id": "sw-003292",
    "source": "Review10 Scene 185"
  },
  {
    "type": "word",
    "front": "request a stop",
    "meaning": "按铃或按要求提出下一站停车",
    "example": "",
    "weight": 3,
    "id": "sw-003293",
    "source": "Review10 Scene 185"
  },
  {
    "type": "word",
    "front": "fare cap",
    "meaning": "某时段内累计交通费用上限",
    "example": "",
    "weight": 3,
    "id": "sw-003294",
    "source": "Review10 Scene 185"
  },
  {
    "type": "word",
    "front": "streetlamp / streetlight",
    "meaning": "路灯",
    "example": "",
    "weight": 3,
    "id": "sw-003295",
    "source": "Review10 Scene 186"
  },
  {
    "type": "word",
    "front": "a dim glow",
    "meaning": "微弱柔和的光",
    "example": "",
    "weight": 3,
    "id": "sw-003296",
    "source": "Review10 Scene 186"
  },
  {
    "type": "word",
    "front": "poorly lit",
    "meaning": "照明不足的",
    "example": "",
    "weight": 3,
    "id": "sw-003297",
    "source": "Review10 Scene 186"
  },
  {
    "type": "word",
    "front": "pedestrian crossing",
    "meaning": "行人过街横道",
    "example": "",
    "weight": 3,
    "id": "sw-003298",
    "source": "Review10 Scene 186"
  },
  {
    "type": "word",
    "front": "dark patch",
    "meaning": "局部黑暗区域",
    "example": "",
    "weight": 3,
    "id": "sw-003299",
    "source": "Review10 Scene 186"
  },
  {
    "type": "word",
    "front": "report a fault",
    "meaning": "向负责机构报告设备故障",
    "example": "",
    "weight": 3,
    "id": "sw-003300",
    "source": "Review10 Scene 186"
  },
  {
    "type": "word",
    "front": "municipal services",
    "meaning": "市政公共服务",
    "example": "",
    "weight": 3,
    "id": "sw-003301",
    "source": "Review10 Scene 186"
  },
  {
    "type": "word",
    "front": "lamp post number",
    "meaning": "路灯杆的识别编号",
    "example": "",
    "weight": 3,
    "id": "sw-003302",
    "source": "Review10 Scene 186"
  },
  {
    "type": "word",
    "front": "service request number",
    "meaning": "维修或公共服务申请编号",
    "example": "",
    "weight": 3,
    "id": "sw-003303",
    "source": "Review10 Scene 186"
  },
  {
    "type": "word",
    "front": "status tracker",
    "meaning": "查询事项处理进度的系统",
    "example": "",
    "weight": 3,
    "id": "sw-003304",
    "source": "Review10 Scene 186"
  },
  {
    "type": "word",
    "front": "maintenance crew",
    "meaning": "执行设施检修的维修工作组",
    "example": "",
    "weight": 3,
    "id": "sw-003305",
    "source": "Review10 Scene 186"
  },
  {
    "type": "word",
    "front": "wiring fault",
    "meaning": "电气接线方面的故障",
    "example": "",
    "weight": 3,
    "id": "sw-003306",
    "source": "Review10 Scene 186"
  },
  {
    "type": "word",
    "front": "estimated repair date",
    "meaning": "预计维修完成日期",
    "example": "",
    "weight": 3,
    "id": "sw-003307",
    "source": "Review10 Scene 186"
  },
  {
    "type": "word",
    "front": "restore service",
    "meaning": "恢复中断的公共服务",
    "example": "",
    "weight": 3,
    "id": "sw-003308",
    "source": "Review10 Scene 186"
  },
  {
    "type": "word",
    "front": "eyewitness account",
    "meaning": "目击者对于事件的描述",
    "example": "",
    "weight": 3,
    "id": "sw-003309",
    "source": "Review10 Scene 187"
  },
  {
    "type": "word",
    "front": "reconstructive memory",
    "meaning": "记忆在回忆过程中重新组织信息的性质",
    "example": "",
    "weight": 3,
    "id": "sw-003310",
    "source": "Review10 Scene 187"
  },
  {
    "type": "word",
    "front": "recall",
    "meaning": "从记忆中主动回想信息",
    "example": "",
    "weight": 3,
    "id": "sw-003311",
    "source": "Review10 Scene 187"
  },
  {
    "type": "word",
    "front": "memory fragment",
    "meaning": "不完整的记忆片段",
    "example": "",
    "weight": 3,
    "id": "sw-003312",
    "source": "Review10 Scene 187"
  },
  {
    "type": "word",
    "front": "fill in the gaps (memory)",
    "meaning": "在记忆空白处补上细节",
    "example": "",
    "weight": 3,
    "id": "sw-003313",
    "source": "Review10 Scene 187"
  },
  {
    "type": "word",
    "front": "leading question",
    "meaning": "措辞暗示答案的诱导性问题",
    "example": "",
    "weight": 3,
    "id": "sw-003314",
    "source": "Review10 Scene 187"
  },
  {
    "type": "word",
    "front": "suggestibility",
    "meaning": "容易受外部暗示影响的倾向",
    "example": "",
    "weight": 3,
    "id": "sw-003315",
    "source": "Review10 Scene 187"
  },
  {
    "type": "word",
    "front": "misinformation effect",
    "meaning": "事后错误信息对记忆产生影响的效应",
    "example": "",
    "weight": 3,
    "id": "sw-003316",
    "source": "Review10 Scene 187"
  },
  {
    "type": "word",
    "front": "source confusion",
    "meaning": "混淆信息是亲眼所见还是听来的",
    "example": "",
    "weight": 3,
    "id": "sw-003317",
    "source": "Review10 Scene 187"
  },
  {
    "type": "word",
    "front": "false memory",
    "meaning": "对未发生事件形成的错误记忆",
    "example": "",
    "weight": 3,
    "id": "sw-003318",
    "source": "Review10 Scene 187"
  },
  {
    "type": "word",
    "front": "confident recollection",
    "meaning": "非常有把握的回忆",
    "example": "",
    "weight": 3,
    "id": "sw-003319",
    "source": "Review10 Scene 187"
  },
  {
    "type": "word",
    "front": "corroborating evidence",
    "meaning": "来自其他来源的佐证",
    "example": "",
    "weight": 3,
    "id": "sw-003320",
    "source": "Review10 Scene 187"
  },
  {
    "type": "word",
    "front": "independent account",
    "meaning": "相对不受他人叙述影响的独立陈述",
    "example": "",
    "weight": 3,
    "id": "sw-003321",
    "source": "Review10 Scene 187"
  },
  {
    "type": "word",
    "front": "time lapse",
    "meaning": "事件与回忆之间经过的时间",
    "example": "",
    "weight": 3,
    "id": "sw-003322",
    "source": "Review10 Scene 187"
  },
  {
    "type": "word",
    "front": "sequence of events",
    "meaning": "事件发生的先后顺序",
    "example": "",
    "weight": 3,
    "id": "sw-003323",
    "source": "Review10 Scene 187"
  },
  {
    "type": "word",
    "front": "baggage reclaim area",
    "meaning": "机场行李领取区",
    "example": "",
    "weight": 3,
    "id": "sw-003324",
    "source": "Review10 Scene 188"
  },
  {
    "type": "word",
    "front": "baggage services desk",
    "meaning": "机场行李异常服务柜台",
    "example": "",
    "weight": 3,
    "id": "sw-003325",
    "source": "Review10 Scene 188"
  },
  {
    "type": "word",
    "front": "baggage tag number",
    "meaning": "托运行李标签识别编号",
    "example": "",
    "weight": 3,
    "id": "sw-003326",
    "source": "Review10 Scene 188"
  },
  {
    "type": "word",
    "front": "Property Irregularity Report (PIR)",
    "meaning": "航空行李异常报告",
    "example": "",
    "weight": 3,
    "id": "sw-003327",
    "source": "Review10 Scene 188"
  },
  {
    "type": "word",
    "front": "tracing reference",
    "meaning": "行李异常追踪案件编号",
    "example": "",
    "weight": 3,
    "id": "sw-003328",
    "source": "Review10 Scene 188"
  },
  {
    "type": "word",
    "front": "last scanned location",
    "meaning": "系统记录行李最后一次被扫描的位置",
    "example": "",
    "weight": 3,
    "id": "sw-003329",
    "source": "Review10 Scene 188"
  },
  {
    "type": "word",
    "front": "distinctive feature",
    "meaning": "有助于识别物品的显著特征",
    "example": "",
    "weight": 3,
    "id": "sw-003330",
    "source": "Review10 Scene 188"
  },
  {
    "type": "word",
    "front": "baggage tracing system",
    "meaning": "航空行李追踪系统",
    "example": "",
    "weight": 3,
    "id": "sw-003331",
    "source": "Review10 Scene 188"
  },
  {
    "type": "word",
    "front": "delivery address",
    "meaning": "送达地址",
    "example": "",
    "weight": 3,
    "id": "sw-003332",
    "source": "Review10 Scene 188"
  },
  {
    "type": "word",
    "front": "interim essentials",
    "meaning": "行李延误期间临时购买的基本必需品",
    "example": "",
    "weight": 3,
    "id": "sw-003333",
    "source": "Review10 Scene 188"
  },
  {
    "type": "word",
    "front": "baggage handler",
    "meaning": "航空行李装卸处理人员",
    "example": "",
    "weight": 3,
    "id": "sw-003334",
    "source": "Review10 Scene 188"
  },
  {
    "type": "word",
    "front": "unclaimed luggage",
    "meaning": "已到达但仍无人领取的行李",
    "example": "",
    "weight": 3,
    "id": "sw-003335",
    "source": "Review10 Scene 188"
  },
  {
    "type": "word",
    "front": "compensation limit",
    "meaning": "赔偿责任的最高限额",
    "example": "",
    "weight": 3,
    "id": "sw-003336",
    "source": "Review10 Scene 188"
  },
  {
    "type": "word",
    "front": "snowline",
    "meaning": "季节性积雪覆盖的高度界限",
    "example": "",
    "weight": 3,
    "id": "sw-003337",
    "source": "Review10 Scene 189"
  },
  {
    "type": "word",
    "front": "snowfield",
    "meaning": "大片连续积雪坡或雪原",
    "example": "",
    "weight": 3,
    "id": "sw-003338",
    "source": "Review10 Scene 189"
  },
  {
    "type": "word",
    "front": "freeze–thaw cycle",
    "meaning": "反复结冰与融化的冻融循环",
    "example": "",
    "weight": 3,
    "id": "sw-003339",
    "source": "Review10 Scene 189"
  },
  {
    "type": "word",
    "front": "icy crust",
    "meaning": "雪面上的坚硬冰壳",
    "example": "",
    "weight": 3,
    "id": "sw-003340",
    "source": "Review10 Scene 189"
  },
  {
    "type": "word",
    "front": "traction",
    "meaning": "鞋底或轮胎的抓地力",
    "example": "",
    "weight": 3,
    "id": "sw-003341",
    "source": "Review10 Scene 189"
  },
  {
    "type": "word",
    "front": "microspikes",
    "meaning": "轻型鞋底冰雪防滑链",
    "example": "",
    "weight": 3,
    "id": "sw-003342",
    "source": "Review10 Scene 189"
  },
  {
    "type": "word",
    "front": "crampons",
    "meaning": "登山冰爪",
    "example": "",
    "weight": 3,
    "id": "sw-003343",
    "source": "Review10 Scene 189"
  },
  {
    "type": "word",
    "front": "ice axe",
    "meaning": "登山冰镐",
    "example": "",
    "weight": 3,
    "id": "sw-003344",
    "source": "Review10 Scene 189"
  },
  {
    "type": "word",
    "front": "self-arrest",
    "meaning": "在冰雪坡滑坠时尝试制动的专业技术",
    "example": "",
    "weight": 3,
    "id": "sw-003345",
    "source": "Review10 Scene 189"
  },
  {
    "type": "word",
    "front": "runout (snow slope)",
    "meaning": "发生滑坠后可能继续滑行到的下方区域",
    "example": "",
    "weight": 3,
    "id": "sw-003346",
    "source": "Review10 Scene 189"
  },
  {
    "type": "word",
    "front": "snow bridge",
    "meaning": "跨越溪流沟谷等的天然雪桥",
    "example": "",
    "weight": 3,
    "id": "sw-003347",
    "source": "Review10 Scene 189"
  },
  {
    "type": "word",
    "front": "postholing",
    "meaning": "脚深陷软雪形成深洞的现象",
    "example": "",
    "weight": 3,
    "id": "sw-003348",
    "source": "Review10 Scene 189"
  },
  {
    "type": "word",
    "front": "cornice",
    "meaning": "从山脊边缘向外悬伸的雪檐",
    "example": "",
    "weight": 3,
    "id": "sw-003349",
    "source": "Review10 Scene 189"
  },
  {
    "type": "word",
    "front": "slope angle",
    "meaning": "坡面与水平面之间的夹角",
    "example": "",
    "weight": 3,
    "id": "sw-003350",
    "source": "Review10 Scene 189"
  },
  {
    "type": "word",
    "front": "turnaround point",
    "meaning": "预先确定的折返位置",
    "example": "",
    "weight": 3,
    "id": "sw-003351",
    "source": "Review10 Scene 189"
  },
  {
    "type": "word",
    "front": "meal prep",
    "meaning": "提前准备未来几顿饭",
    "example": "",
    "weight": 3,
    "id": "sw-003352",
    "source": "Review10 Scene 190"
  },
  {
    "type": "word",
    "front": "batch-cook",
    "meaning": "一次集中烹制多份食物",
    "example": "",
    "weight": 3,
    "id": "sw-003353",
    "source": "Review10 Scene 190"
  },
  {
    "type": "word",
    "front": "cook from scratch",
    "meaning": "从基础食材开始做饭",
    "example": "",
    "weight": 3,
    "id": "sw-003354",
    "source": "Review10 Scene 190"
  },
  {
    "type": "word",
    "front": "shallow container",
    "meaning": "便于更快冷却的较浅容器",
    "example": "",
    "weight": 3,
    "id": "sw-003355",
    "source": "Review10 Scene 190"
  },
  {
    "type": "word",
    "front": "food-safe",
    "meaning": "适合接触、储存食品的",
    "example": "",
    "weight": 3,
    "id": "sw-003356",
    "source": "Review10 Scene 190"
  },
  {
    "type": "word",
    "front": "perishable",
    "meaning": "容易腐败变质的",
    "example": "",
    "weight": 3,
    "id": "sw-003357",
    "source": "Review10 Scene 190"
  },
  {
    "type": "word",
    "front": "refrigerate promptly",
    "meaning": "及时放入冰箱冷藏",
    "example": "",
    "weight": 3,
    "id": "sw-003358",
    "source": "Review10 Scene 190"
  },
  {
    "type": "word",
    "front": "airtight",
    "meaning": "不让空气轻易通过的密封状态",
    "example": "",
    "weight": 3,
    "id": "sw-003359",
    "source": "Review10 Scene 190"
  },
  {
    "type": "word",
    "front": "date label",
    "meaning": "标注制作或开封日期的标签",
    "example": "",
    "weight": 3,
    "id": "sw-003360",
    "source": "Review10 Scene 190"
  },
  {
    "type": "word",
    "front": "shelf life",
    "meaning": "在适当条件下的保存期限",
    "example": "",
    "weight": 3,
    "id": "sw-003361",
    "source": "Review10 Scene 190"
  },
  {
    "type": "word",
    "front": "use-by date",
    "meaning": "以食品安全为主的食用截止日期",
    "example": "",
    "weight": 3,
    "id": "sw-003362",
    "source": "Review10 Scene 190"
  },
  {
    "type": "word",
    "front": "best-before date",
    "meaning": "以食品品质为主的最佳食用日期",
    "example": "",
    "weight": 3,
    "id": "sw-003363",
    "source": "Review10 Scene 190"
  },
  {
    "type": "word",
    "front": "cross-contamination",
    "meaning": "食材或器具之间的交叉污染",
    "example": "",
    "weight": 3,
    "id": "sw-003364",
    "source": "Review10 Scene 190"
  },
  {
    "type": "word",
    "front": "freezer burn",
    "meaning": "冷冻中失水造成表面干燥和品质下降",
    "example": "",
    "weight": 3,
    "id": "sw-003365",
    "source": "Review10 Scene 190"
  },
  {
    "type": "word",
    "front": "reheat thoroughly",
    "meaning": "充分重新加热食物",
    "example": "",
    "weight": 3,
    "id": "sw-003366",
    "source": "Review10 Scene 190"
  },
  {
    "type": "word",
    "front": "low-key gathering",
    "meaning": "轻松、低调的小型聚会",
    "example": "",
    "weight": 3,
    "id": "sw-003367",
    "source": "Review10 Scene 191"
  },
  {
    "type": "word",
    "front": "RSVP",
    "meaning": "请回复是否参加邀请",
    "example": "",
    "weight": 3,
    "id": "sw-003368",
    "source": "Review10 Scene 191"
  },
  {
    "type": "word",
    "front": "plus-one",
    "meaning": "受邀者额外带来的一位同行者",
    "example": "",
    "weight": 3,
    "id": "sw-003369",
    "source": "Review10 Scene 191"
  },
  {
    "type": "word",
    "front": "headcount",
    "meaning": "活动的参加人数",
    "example": "",
    "weight": 3,
    "id": "sw-003370",
    "source": "Review10 Scene 191"
  },
  {
    "type": "word",
    "front": "bring someone along",
    "meaning": "带某人一起参加活动",
    "example": "",
    "weight": 3,
    "id": "sw-003371",
    "source": "Review10 Scene 191"
  },
  {
    "type": "word",
    "front": "run something by someone",
    "meaning": "做决定前向某人征求意见",
    "example": "",
    "weight": 3,
    "id": "sw-003372",
    "source": "Review10 Scene 191"
  },
  {
    "type": "word",
    "front": "mutual friend",
    "meaning": "双方共同认识的朋友",
    "example": "",
    "weight": 3,
    "id": "sw-003373",
    "source": "Review10 Scene 191"
  },
  {
    "type": "word",
    "front": "make introductions",
    "meaning": "为互不认识的人作介绍",
    "example": "",
    "weight": 3,
    "id": "sw-003374",
    "source": "Review10 Scene 191"
  },
  {
    "type": "word",
    "front": "put someone at ease",
    "meaning": "让某人放松、不再拘谨",
    "example": "",
    "weight": 3,
    "id": "sw-003375",
    "source": "Review10 Scene 191"
  },
  {
    "type": "word",
    "front": "conversation starter",
    "meaning": "开启聊天的好话题",
    "example": "",
    "weight": 3,
    "id": "sw-003376",
    "source": "Review10 Scene 191"
  },
  {
    "type": "word",
    "front": "awkward silence",
    "meaning": "令人尴尬的沉默",
    "example": "",
    "weight": 3,
    "id": "sw-003377",
    "source": "Review10 Scene 191"
  },
  {
    "type": "word",
    "front": "read the room",
    "meaning": "观察现场气氛和他人反应",
    "example": "",
    "weight": 3,
    "id": "sw-003378",
    "source": "Review10 Scene 191"
  },
  {
    "type": "word",
    "front": "steer the conversation",
    "meaning": "有意识地引导聊天方向",
    "example": "",
    "weight": 3,
    "id": "sw-003379",
    "source": "Review10 Scene 191"
  },
  {
    "type": "word",
    "front": "feel left out",
    "meaning": "感觉不被包含、被冷落",
    "example": "",
    "weight": 3,
    "id": "sw-003380",
    "source": "Review10 Scene 191"
  },
  {
    "type": "word",
    "front": "call it a night",
    "meaning": "结束晚上的活动准备休息",
    "example": "",
    "weight": 3,
    "id": "sw-003381",
    "source": "Review10 Scene 191"
  },
  {
    "type": "word",
    "front": "personal hotspot",
    "meaning": "手机个人热点",
    "example": "",
    "weight": 3,
    "id": "sw-003382",
    "source": "Review10 Scene 192"
  },
  {
    "type": "word",
    "front": "tethering",
    "meaning": "手机向其他设备共享网络连接",
    "example": "",
    "weight": 3,
    "id": "sw-003383",
    "source": "Review10 Scene 192"
  },
  {
    "type": "word",
    "front": "mobile data allowance",
    "meaning": "移动流量套餐额度",
    "example": "",
    "weight": 3,
    "id": "sw-003384",
    "source": "Review10 Scene 192"
  },
  {
    "type": "word",
    "front": "data cap",
    "meaning": "规定的流量使用上限",
    "example": "",
    "weight": 3,
    "id": "sw-003385",
    "source": "Review10 Scene 192"
  },
  {
    "type": "word",
    "front": "throttle a connection",
    "meaning": "主动限制某个网络连接速度",
    "example": "",
    "weight": 3,
    "id": "sw-003386",
    "source": "Review10 Scene 192"
  },
  {
    "type": "word",
    "front": "metered connection",
    "meaning": "按流量计费或系统需省流量的连接",
    "example": "",
    "weight": 3,
    "id": "sw-003387",
    "source": "Review10 Scene 192"
  },
  {
    "type": "word",
    "front": "network adapter",
    "meaning": "网络连接适配器",
    "example": "",
    "weight": 3,
    "id": "sw-003388",
    "source": "Review10 Scene 192"
  },
  {
    "type": "word",
    "front": "toggle a setting",
    "meaning": "切换设置的开关",
    "example": "",
    "weight": 3,
    "id": "sw-003389",
    "source": "Review10 Scene 192"
  },
  {
    "type": "word",
    "front": "forget a network",
    "meaning": "删除保存的无线网络配置",
    "example": "",
    "weight": 3,
    "id": "sw-003390",
    "source": "Review10 Scene 192"
  },
  {
    "type": "word",
    "front": "signal strength",
    "meaning": "无线网络信号强度",
    "example": "",
    "weight": 3,
    "id": "sw-003391",
    "source": "Review10 Scene 192"
  },
  {
    "type": "word",
    "front": "dead zone",
    "meaning": "移动网络等的信号盲区",
    "example": "",
    "weight": 3,
    "id": "sw-003392",
    "source": "Review10 Scene 192"
  },
  {
    "type": "word",
    "front": "data roaming",
    "meaning": "移动数据漫游",
    "example": "",
    "weight": 3,
    "id": "sw-003393",
    "source": "Review10 Scene 192"
  },
  {
    "type": "word",
    "front": "bandwidth",
    "meaning": "网络单位时间数据传输能力",
    "example": "",
    "weight": 3,
    "id": "sw-003394",
    "source": "Review10 Scene 192"
  },
  {
    "type": "word",
    "front": "troubleshoot",
    "meaning": "系统性排查问题及故障原因",
    "example": "",
    "weight": 3,
    "id": "sw-003395",
    "source": "Review10 Scene 192"
  },
  {
    "type": "word",
    "front": "loyalty programme",
    "meaning": "商家的会员奖励计划",
    "example": "",
    "weight": 3,
    "id": "sw-003396",
    "source": "Review10 Scene 193"
  },
  {
    "type": "word",
    "front": "earn points",
    "meaning": "消费等活动赚取积分",
    "example": "",
    "weight": 3,
    "id": "sw-003397",
    "source": "Review10 Scene 193"
  },
  {
    "type": "word",
    "front": "redeem points",
    "meaning": "兑换积分领取奖励",
    "example": "",
    "weight": 3,
    "id": "sw-003398",
    "source": "Review10 Scene 193"
  },
  {
    "type": "word",
    "front": "points balance",
    "meaning": "账户积分余额",
    "example": "",
    "weight": 3,
    "id": "sw-003399",
    "source": "Review10 Scene 193"
  },
  {
    "type": "word",
    "front": "redemption threshold",
    "meaning": "积分达到一定数量才可兑换的门槛",
    "example": "",
    "weight": 3,
    "id": "sw-003400",
    "source": "Review10 Scene 193"
  },
  {
    "type": "word",
    "front": "tiered rewards",
    "meaning": "根据会员等级分层提供奖励",
    "example": "",
    "weight": 3,
    "id": "sw-003401",
    "source": "Review10 Scene 193"
  },
  {
    "type": "word",
    "front": "customer retention",
    "meaning": "客户留存",
    "example": "",
    "weight": 3,
    "id": "sw-003402",
    "source": "Review10 Scene 193"
  },
  {
    "type": "word",
    "front": "repeat purchase",
    "meaning": "同一顾客再次购买",
    "example": "",
    "weight": 3,
    "id": "sw-003403",
    "source": "Review10 Scene 193"
  },
  {
    "type": "word",
    "front": "switching costs",
    "meaning": "转换产品或服务提供商的成本",
    "example": "",
    "weight": 3,
    "id": "sw-003404",
    "source": "Review10 Scene 193"
  },
  {
    "type": "word",
    "front": "lock-in effect",
    "meaning": "用户不愿或不易离开原平台的锁定效应",
    "example": "",
    "weight": 3,
    "id": "sw-003405",
    "source": "Review10 Scene 193"
  },
  {
    "type": "word",
    "front": "personalised offer",
    "meaning": "个性化优惠",
    "example": "",
    "weight": 3,
    "id": "sw-003406",
    "source": "Review10 Scene 193"
  },
  {
    "type": "word",
    "front": "opt in",
    "meaning": "主动选择加入或同意接收",
    "example": "",
    "weight": 3,
    "id": "sw-003407",
    "source": "Review10 Scene 193"
  },
  {
    "type": "word",
    "front": "purchase history",
    "meaning": "个人过往购买记录",
    "example": "",
    "weight": 3,
    "id": "sw-003408",
    "source": "Review10 Scene 193"
  },
  {
    "type": "word",
    "front": "privacy trade-off",
    "meaning": "为了收益可能牺牲隐私的权衡",
    "example": "",
    "weight": 3,
    "id": "sw-003409",
    "source": "Review10 Scene 193"
  },
  {
    "type": "word",
    "front": "breakage (loyalty)",
    "meaning": "奖励计划中预计不会兑换或使用的价值",
    "example": "",
    "weight": 3,
    "id": "sw-003410",
    "source": "Review10 Scene 193"
  },
  {
    "type": "word",
    "front": "overnight train",
    "meaning": "夜间运行的火车",
    "example": "",
    "weight": 3,
    "id": "sw-003411",
    "source": "Review10 Scene 194"
  },
  {
    "type": "word",
    "front": "sleeper carriage",
    "meaning": "卧铺车厢",
    "example": "",
    "weight": 3,
    "id": "sw-003412",
    "source": "Review10 Scene 194"
  },
  {
    "type": "word",
    "front": "upper berth / lower berth",
    "meaning": "上铺／下铺",
    "example": "",
    "weight": 3,
    "id": "sw-003413",
    "source": "Review10 Scene 194"
  },
  {
    "type": "word",
    "front": "shared compartment",
    "meaning": "与他人共用的火车包厢",
    "example": "",
    "weight": 3,
    "id": "sw-003414",
    "source": "Review10 Scene 194"
  },
  {
    "type": "word",
    "front": "privacy curtain",
    "meaning": "提供隐私的遮挡帘",
    "example": "",
    "weight": 3,
    "id": "sw-003415",
    "source": "Review10 Scene 194"
  },
  {
    "type": "word",
    "front": "fold-down bunk",
    "meaning": "可向下翻开的折叠床铺",
    "example": "",
    "weight": 3,
    "id": "sw-003416",
    "source": "Review10 Scene 194"
  },
  {
    "type": "word",
    "front": "berth ladder",
    "meaning": "用于爬上卧铺的小梯子",
    "example": "",
    "weight": 3,
    "id": "sw-003417",
    "source": "Review10 Scene 194"
  },
  {
    "type": "word",
    "front": "safety rail",
    "meaning": "铺位边缘的防跌落护栏",
    "example": "",
    "weight": 3,
    "id": "sw-003418",
    "source": "Review10 Scene 194"
  },
  {
    "type": "word",
    "front": "bedding set",
    "meaning": "床单、枕套等寝具套装",
    "example": "",
    "weight": 3,
    "id": "sw-003419",
    "source": "Review10 Scene 194"
  },
  {
    "type": "word",
    "front": "reading light",
    "meaning": "床旁或座位旁的阅读灯",
    "example": "",
    "weight": 3,
    "id": "sw-003420",
    "source": "Review10 Scene 194"
  },
  {
    "type": "word",
    "front": "train attendant",
    "meaning": "列车乘务员",
    "example": "",
    "weight": 3,
    "id": "sw-003421",
    "source": "Review10 Scene 194"
  },
  {
    "type": "word",
    "front": "wake-up call",
    "meaning": "按约定时间提供叫醒服务",
    "example": "",
    "weight": 3,
    "id": "sw-003422",
    "source": "Review10 Scene 194"
  },
  {
    "type": "word",
    "front": "sleep through your stop",
    "meaning": "睡过了应该下车的站",
    "example": "",
    "weight": 3,
    "id": "sw-003423",
    "source": "Review10 Scene 194"
  },
  {
    "type": "word",
    "front": "GPX track",
    "meaning": "GPX格式的导航轨迹",
    "example": "",
    "weight": 3,
    "id": "sw-003424",
    "source": "Review10 Scene 195"
  },
  {
    "type": "word",
    "front": "GPS drift",
    "meaning": "GPS定位标记与真实位置偏移",
    "example": "",
    "weight": 3,
    "id": "sw-003425",
    "source": "Review10 Scene 195"
  },
  {
    "type": "word",
    "front": "contour interval",
    "meaning": "相邻等高线之间的海拔差",
    "example": "",
    "weight": 3,
    "id": "sw-003426",
    "source": "Review10 Scene 195"
  },
  {
    "type": "word",
    "front": "orient the map",
    "meaning": "调整地图方向与实际地形一致",
    "example": "",
    "weight": 3,
    "id": "sw-003427",
    "source": "Review10 Scene 195"
  },
  {
    "type": "word",
    "front": "take a bearing",
    "meaning": "测量或确定方位角",
    "example": "",
    "weight": 3,
    "id": "sw-003428",
    "source": "Review10 Scene 195"
  },
  {
    "type": "word",
    "front": "landmark",
    "meaning": "用于认路的明显地标",
    "example": "",
    "weight": 3,
    "id": "sw-003429",
    "source": "Review10 Scene 195"
  },
  {
    "type": "word",
    "front": "faint path",
    "meaning": "不清楚、不容易看见的小路",
    "example": "",
    "weight": 3,
    "id": "sw-003430",
    "source": "Review10 Scene 195"
  },
  {
    "type": "word",
    "front": "false trail",
    "meaning": "容易误导人的错误小径",
    "example": "",
    "weight": 3,
    "id": "sw-003431",
    "source": "Review10 Scene 195"
  },
  {
    "type": "word",
    "front": "overshoot a turn",
    "meaning": "走过或错过应该转向的位置",
    "example": "",
    "weight": 3,
    "id": "sw-003432",
    "source": "Review10 Scene 195"
  },
  {
    "type": "word",
    "front": "route-finding",
    "meaning": "在地形中辨认和选择正确路线的过程",
    "example": "",
    "weight": 3,
    "id": "sw-003433",
    "source": "Review10 Scene 195"
  },
  {
    "type": "sentence",
    "front": "There are still a few streaks, even though I've rinsed the shower screen thoroughly.",
    "meaning": "虽然我已经彻底冲洗淋浴玻璃，但上面还有几道水痕。",
    "example": "",
    "weight": 3,
    "id": "sw-003434",
    "source": "Review10 Spoken 160"
  },
  {
    "type": "sentence",
    "front": "Could I have a copy of my updated glasses prescription?",
    "meaning": "可以给我一份更新后的眼镜处方吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003435",
    "source": "Review10 Spoken 161"
  },
  {
    "type": "sentence",
    "front": "These shoes aren't true to size. Could I exchange them for half a size larger?",
    "meaning": "这双鞋尺码不标准，我能换大半码吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003436",
    "source": "Review10 Spoken 162"
  },
  {
    "type": "sentence",
    "front": "A big discount doesn't automatically mean that the product is good value.",
    "meaning": "折扣大并不自动意味着商品物有所值。",
    "example": "",
    "weight": 3,
    "id": "sw-003437",
    "source": "Review10 Spoken 163"
  },
  {
    "type": "sentence",
    "front": "Could I inspect the quieter room before I agree to relocate?",
    "meaning": "同意换房前，我能先查看一下那间更安静的房间吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003438",
    "source": "Review10 Spoken 164"
  },
  {
    "type": "sentence",
    "front": "My jacket snagged on a thorny branch. Let me free the fabric before it tears.",
    "meaning": "我的夹克被带刺树枝勾住了，先让我把布料弄出来，免得撕裂。",
    "example": "",
    "weight": 3,
    "id": "sw-003439",
    "source": "Review10 Spoken 165"
  },
  {
    "type": "sentence",
    "front": "The sauce is too thick. I'll add a splash of pasta water to loosen it.",
    "meaning": "酱汁太浓稠了，我加一点煮面水把它调稀。",
    "example": "",
    "weight": 3,
    "id": "sw-003440",
    "source": "Review10 Spoken 166"
  },
  {
    "type": "sentence",
    "front": "Don't approve a sign-in request that you didn't initiate yourself.",
    "meaning": "不要批准不是你自己发起的登录请求。",
    "example": "",
    "weight": 3,
    "id": "sw-003441",
    "source": "Review10 Spoken 167"
  },
  {
    "type": "sentence",
    "front": "Could you arrange an extra collection and clarify the sorting guidelines?",
    "meaning": "能否安排额外清运，并说明垃圾分类规则？",
    "example": "",
    "weight": 3,
    "id": "sw-003442",
    "source": "Review10 Spoken 168"
  },
  {
    "type": "sentence",
    "front": "The explanation sounds counterintuitive, but it comes down to the rate of heat transfer.",
    "meaning": "这种解释似乎违背直觉，但关键在于热量传递的速度。",
    "example": "",
    "weight": 3,
    "id": "sw-003443",
    "source": "Review10 Spoken 169"
  },
  {
    "type": "sentence",
    "front": "I've paid for this locker, but the door won't open. Could someone assist me?",
    "meaning": "我已经付了寄存费，但柜门打不开。能请工作人员帮忙吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003444",
    "source": "Review10 Spoken 170"
  },
  {
    "type": "sentence",
    "front": "My sleeves are soaked through, and the wind chill is getting worse. We need safer shelter.",
    "meaning": "我的袖子已经湿透了，风寒也越来越严重。我们需要更安全的避险场所。",
    "example": "",
    "weight": 3,
    "id": "sw-003445",
    "source": "Review10 Spoken 171"
  },
  {
    "type": "sentence",
    "front": "Could you tell me which documents are needed to verify the source of funds?",
    "meaning": "能告诉我需要哪些文件来核实这笔资金的来源吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003446",
    "source": "Review10 Spoken 172"
  },
  {
    "type": "sentence",
    "front": "If the tray is overcrowded, the vegetables may steam instead of roasting properly.",
    "meaning": "烤盘太满时，蔬菜可能主要被蒸熟，而不是正常烤熟。",
    "example": "",
    "weight": 3,
    "id": "sw-003447",
    "source": "Review10 Spoken 173"
  },
  {
    "type": "sentence",
    "front": "I can see why it came across that way, but that's not what I meant.",
    "meaning": "我理解为什么听起来会是那个意思，但我并不是那样想的。",
    "example": "",
    "weight": 3,
    "id": "sw-003448",
    "source": "Review10 Spoken 174"
  },
  {
    "type": "sentence",
    "front": "A place isn't necessarily inclusive just because it is open to the public.",
    "meaning": "一个地方向公众开放，并不必然意味着它对所有人都具有包容性。",
    "example": "",
    "weight": 3,
    "id": "sw-003449",
    "source": "Review10 Spoken 175"
  },
  {
    "type": "sentence",
    "front": "Could I rebook for tomorrow morning, and would I need to pay any fare difference?",
    "meaning": "我能改订明天早上的航次吗？需要补差价吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003450",
    "source": "Review10 Spoken 176"
  },
  {
    "type": "sentence",
    "front": "Hearing thunder means we should treat lightning as a real risk and seek proper shelter.",
    "meaning": "听见雷声就应认真对待雷击风险，并寻找合适的避雷场所。",
    "example": "",
    "weight": 3,
    "id": "sw-003451",
    "source": "Review10 Spoken 177"
  },
  {
    "type": "sentence",
    "front": "The clothes smell musty, so I'm going to run another wash cycle.",
    "meaning": "衣服有股闷臭味，所以我准备再洗一遍。",
    "example": "",
    "weight": 3,
    "id": "sw-003452",
    "source": "Review10 Spoken 178"
  },
  {
    "type": "sentence",
    "front": "I can't cover the whole shift, but I could pick up the last three hours.",
    "meaning": "我不能替完整个班次，但可以接下最后三个小时。",
    "example": "",
    "weight": 3,
    "id": "sw-003453",
    "source": "Review10 Spoken 179"
  },
  {
    "type": "sentence",
    "front": "Please don't take too much off the top, especially around the crown.",
    "meaning": "请不要把头顶剪掉太多，尤其是发旋附近。",
    "example": "",
    "weight": 3,
    "id": "sw-003454",
    "source": "Review10 Spoken 180"
  },
  {
    "type": "sentence",
    "front": "When everyone shares responsibility, cooperation becomes easier even without constant supervision.",
    "meaning": "当人人共同承担责任时，即使没有持续监督，合作也会更容易。",
    "example": "",
    "weight": 3,
    "id": "sw-003455",
    "source": "Review10 Spoken 181"
  },
  {
    "type": "sentence",
    "front": "My bag has been selected for secondary screening. Do I need to remove anything?",
    "meaning": "我的背包被选中二次安检。我需要拿出什么东西吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003456",
    "source": "Review10 Spoken 182"
  },
  {
    "type": "sentence",
    "front": "The next resupply point isn't confirmed, so we should reassess our remaining water before going farther.",
    "meaning": "下一个补给点尚未确认，因此继续前进前应该重新评估剩余饮水。",
    "example": "",
    "weight": 3,
    "id": "sw-003457",
    "source": "Review10 Spoken 183"
  },
  {
    "type": "sentence",
    "front": "This item rang up at full price. Could you check whether the promotion still applies?",
    "meaning": "这件商品结账时显示原价。能确认促销是否仍然适用吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003458",
    "source": "Review10 Spoken 184"
  },
  {
    "type": "sentence",
    "front": "The validator didn't respond. Is there another reader I can use?",
    "meaning": "验票机没反应。还有其他读卡器可以用吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003459",
    "source": "Review10 Spoken 185"
  },
  {
    "type": "sentence",
    "front": "The streetlamp has stopped working, and the pedestrian crossing is now poorly lit.",
    "meaning": "路灯已经坏了，现在人行横道照明很差。",
    "example": "",
    "weight": 3,
    "id": "sw-003460",
    "source": "Review10 Spoken 186"
  },
  {
    "type": "sentence",
    "front": "A confident eyewitness account isn't necessarily accurate, especially after a long time lapse.",
    "meaning": "目击者很有把握的陈述也不一定准确，尤其是在过了很长时间后。",
    "example": "",
    "weight": 3,
    "id": "sw-003461",
    "source": "Review10 Spoken 187"
  },
  {
    "type": "sentence",
    "front": "Could you help me file a Property Irregularity Report and give me a tracing reference?",
    "meaning": "能帮我填写行李异常报告，并给我一个追踪编号吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003462",
    "source": "Review10 Spoken 188"
  },
  {
    "type": "sentence",
    "front": "We don't have the equipment or training to cross this snowfield safely. Let's turn back.",
    "meaning": "我们没有安全通过这片雪坡的装备和训练。返回吧。",
    "example": "",
    "weight": 3,
    "id": "sw-003463",
    "source": "Review10 Spoken 189"
  },
  {
    "type": "sentence",
    "front": "I refrigerate perishable meals promptly rather than leaving them out overnight.",
    "meaning": "我会及时冷藏容易变质的餐食，而不是让它们在室温下放一整夜。",
    "example": "",
    "weight": 3,
    "id": "sw-003464",
    "source": "Review10 Spoken 190"
  },
  {
    "type": "sentence",
    "front": "Let me run the change by the others first, since we've already confirmed the headcount.",
    "meaning": "我先征求其他人的意见，因为人数已经确定了。",
    "example": "",
    "weight": 3,
    "id": "sw-003465",
    "source": "Review10 Spoken 191"
  },
  {
    "type": "sentence",
    "front": "My laptop is connected to the hotspot, but the websites won't load. I'm troubleshooting the connection.",
    "meaning": "电脑连上热点了，但网页打不开。我正在排查网络连接。",
    "example": "",
    "weight": 3,
    "id": "sw-003466",
    "source": "Review10 Spoken 192"
  },
  {
    "type": "sentence",
    "front": "The points I've earned might make me reluctant to switch shops, even if another one is cheaper.",
    "meaning": "即使另一家店更便宜，已赚取的积分也可能让我不愿换店。",
    "example": "",
    "weight": 3,
    "id": "sw-003467",
    "source": "Review10 Spoken 193"
  },
  {
    "type": "sentence",
    "front": "I've been assigned an upper berth. Could you show me how to use the ladder safely?",
    "meaning": "我被分到了上铺。可以告诉我如何安全地使用梯子吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003468",
    "source": "Review10 Spoken 194"
  },
  {
    "type": "sentence",
    "front": "The GPX track doesn't match the path ahead. Let's confirm our position before continuing.",
    "meaning": "GPX轨迹与前方小路不一致。继续前进前先确认位置。",
    "example": "",
    "weight": 3,
    "id": "sw-003469",
    "source": "Review10 Spoken 195"
  },
  {
    "type": "ladder",
    "front": "use-by date / best-before date",
    "meaning": "安全食用截止日期 / 最佳品质日期",
    "example": "辨析：不能因为闻起来正常就忽略 use-by；best-before 更侧重品质。",
    "weight": 3,
    "id": "sw-003470",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "meal prep / batch-cook",
    "meaning": "提前备餐 / 一次集中做多份",
    "example": "辨析：meal prep 可只备食材；batch-cook 强调集中烹制。",
    "weight": 3,
    "id": "sw-003471",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "rinse off / rinse out",
    "meaning": "冲掉表面残留 / 冲洗容器内部",
    "example": "辨析：介词改变动作的作用位置。",
    "weight": 3,
    "id": "sw-003472",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "reduce sauce / thicken up",
    "meaning": "通过蒸发收汁 / 稠度逐渐增加",
    "example": "辨析：前者是过程和方法，后者是结果。",
    "weight": 3,
    "id": "sw-003473",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "source of funds / source of wealth",
    "meaning": "具体资金来源 / 整体财富积累来源",
    "example": "辨析：银行核查对象不同。",
    "weight": 3,
    "id": "sw-003474",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "comparable room / complimentary upgrade",
    "meaning": "条件相近的房间 / 免费升级",
    "example": "辨析：换房不等于获得更高等级房型。",
    "weight": 3,
    "id": "sw-003475",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "taper / fade",
    "meaning": "自然渐短 / 短发渐变推剪",
    "example": "辨析：理发术语有交叉，但 fade 往往更突出由短到长的过渡。",
    "weight": 3,
    "id": "sw-003476",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "thin walls / soundproofing",
    "meaning": "薄墙 / 隔音性能",
    "example": "辨析：前者可能是差隔音的原因，后者是整体效果。",
    "weight": 3,
    "id": "sw-003477",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "transfer window / fare zone",
    "meaning": "换乘时间窗口 / 票价地理分区",
    "example": "辨析：一项是时间条件，一项是地理条件。",
    "weight": 3,
    "id": "sw-003478",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "run dry / stagnant water",
    "meaning": "水源干涸 / 水体停滞不流动",
    "example": "辨析：无水与有水但不流动是两种问题。",
    "weight": 3,
    "id": "sw-003479",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "refill point / resupply point",
    "meaning": "补水点 / 补充各类物资的地点",
    "example": "辨析：resupply 范围更广。",
    "weight": 3,
    "id": "sw-003480",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "contour line / contour interval",
    "meaning": "等高线 / 相邻等高线的海拔差",
    "example": "辨析：一个是图上曲线，一个是标注的数值。",
    "weight": 3,
    "id": "sw-003481",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "GPS drift / false trail",
    "meaning": "定位漂移 / 可能误导的实际小径",
    "example": "辨析：前者为设备定位问题，后者为现场路径问题。",
    "weight": 3,
    "id": "sw-003482",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "customer retention / repeat purchase",
    "meaning": "客户留存 / 单次重复购买",
    "example": "辨析：前者是整体关系或指标，后者是具体行为。",
    "weight": 3,
    "id": "sw-003483",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "switching costs / lock-in effect",
    "meaning": "更换服务的障碍 / 因障碍留在原平台的结果",
    "example": "辨析：转换成本是机制之一，锁定效应是结果。",
    "weight": 3,
    "id": "sw-003484",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "headcount / plus-one",
    "meaning": "活动总人数 / 额外携带的同行者",
    "example": "辨析：增加一位 plus-one 通常需要更新 headcount。",
    "weight": 3,
    "id": "sw-003485",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "berth / compartment",
    "meaning": "卧铺位置 / 车厢独立包间",
    "example": "辨析：一个是睡觉的铺位，一个是容纳铺位的空间。",
    "weight": 3,
    "id": "sw-003486",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "baggage tag / tracing reference",
    "meaning": "托运行李标签编号 / 行李异常案件编号",
    "example": "辨析：两个号码用于不同追踪目的。",
    "weight": 3,
    "id": "sw-003487",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "microspikes / crampons",
    "meaning": "轻型防滑链 / 登山冰爪",
    "example": "辨析：适用地形及技术要求不同，不能随意互相替代。",
    "weight": 3,
    "id": "sw-003488",
    "source": "Review10 Contrasts"
  },
  {
    "type": "ladder",
    "front": "thermal conductivity / heat capacity",
    "meaning": "热导率 / 热容量",
    "example": "辨析：一个与传热速度相关，一个与温度变化所需热量相关。",
    "weight": 3,
    "id": "sw-003489",
    "source": "Review10 Contrasts"
  },
  {
    "type": "word",
    "front": "utility bill",
    "meaning": "水电、燃气等公用事业账单",
    "example": "",
    "weight": 3,
    "id": "sw-003490",
    "source": "Review11 Scene 196"
  },
  {
    "type": "word",
    "front": "billing period",
    "meaning": "计费周期",
    "example": "",
    "weight": 3,
    "id": "sw-003491",
    "source": "Review11 Scene 196"
  },
  {
    "type": "word",
    "front": "meter reading",
    "meaning": "电表或其他计量表读数",
    "example": "",
    "weight": 3,
    "id": "sw-003492",
    "source": "Review11 Scene 196"
  },
  {
    "type": "word",
    "front": "estimated reading",
    "meaning": "估算的抄表读数",
    "example": "",
    "weight": 3,
    "id": "sw-003493",
    "source": "Review11 Scene 196"
  },
  {
    "type": "word",
    "front": "actual reading",
    "meaning": "实际抄表读数",
    "example": "",
    "weight": 3,
    "id": "sw-003494",
    "source": "Review11 Scene 196"
  },
  {
    "type": "word",
    "front": "electricity consumption",
    "meaning": "用电量",
    "example": "",
    "weight": 3,
    "id": "sw-003495",
    "source": "Review11 Scene 196"
  },
  {
    "type": "word",
    "front": "kilowatt-hour (kWh)",
    "meaning": "千瓦时，电能单位",
    "example": "",
    "weight": 3,
    "id": "sw-003496",
    "source": "Review11 Scene 196"
  },
  {
    "type": "word",
    "front": "unit rate",
    "meaning": "单位收费价格；每千瓦时电价",
    "example": "",
    "weight": 3,
    "id": "sw-003497",
    "source": "Review11 Scene 196"
  },
  {
    "type": "word",
    "front": "standing charge",
    "meaning": "固定日费或固定服务费",
    "example": "",
    "weight": 3,
    "id": "sw-003498",
    "source": "Review11 Scene 196"
  },
  {
    "type": "word",
    "front": "tariff",
    "meaning": "收费方案；资费标准",
    "example": "",
    "weight": 3,
    "id": "sw-003499",
    "source": "Review11 Scene 196"
  },
  {
    "type": "word",
    "front": "smart meter",
    "meaning": "智能电表",
    "example": "",
    "weight": 3,
    "id": "sw-003500",
    "source": "Review11 Scene 196"
  },
  {
    "type": "word",
    "front": "catch-up bill",
    "meaning": "对之前少收费用的补收账单",
    "example": "",
    "weight": 3,
    "id": "sw-003501",
    "source": "Review11 Scene 196"
  },
  {
    "type": "word",
    "front": "direct debit",
    "meaning": "银行授权自动扣款",
    "example": "",
    "weight": 3,
    "id": "sw-003502",
    "source": "Review11 Scene 196"
  },
  {
    "type": "word",
    "front": "credit balance",
    "meaning": "账户的多付余额、贷方余额",
    "example": "",
    "weight": 3,
    "id": "sw-003503",
    "source": "Review11 Scene 196"
  },
  {
    "type": "word",
    "front": "billing adjustment",
    "meaning": "账单调整",
    "example": "",
    "weight": 3,
    "id": "sw-003504",
    "source": "Review11 Scene 196"
  },
  {
    "type": "sentence",
    "front": "Could you check whether this bill is based on an estimated reading or an actual one?",
    "meaning": "你能查一下这份账单依据的是估算读数还是实际读数吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003505",
    "source": "Review11 Scene 196"
  },
  {
    "type": "sentence",
    "front": "Has the unit rate changed, or is this simply a catch-up bill?",
    "meaning": "是每单位电价变了，还是这只是补收之前少计的费用？",
    "example": "",
    "weight": 3,
    "id": "sw-003506",
    "source": "Review11 Scene 196"
  },
  {
    "type": "word",
    "front": "second-hand listing",
    "meaning": "二手商品出售信息",
    "example": "",
    "weight": 3,
    "id": "sw-003507",
    "source": "Review11 Scene 197"
  },
  {
    "type": "word",
    "front": "asking price",
    "meaning": "卖家要价",
    "example": "",
    "weight": 3,
    "id": "sw-003508",
    "source": "Review11 Scene 197"
  },
  {
    "type": "word",
    "front": "negotiable",
    "meaning": "可协商的；价格可商量",
    "example": "",
    "weight": 3,
    "id": "sw-003509",
    "source": "Review11 Scene 197"
  },
  {
    "type": "word",
    "front": "open to offers",
    "meaning": "愿意考虑买家提出的报价",
    "example": "",
    "weight": 3,
    "id": "sw-003510",
    "source": "Review11 Scene 197"
  },
  {
    "type": "word",
    "front": "firm on price",
    "meaning": "价格不再商量",
    "example": "",
    "weight": 3,
    "id": "sw-003511",
    "source": "Review11 Scene 197"
  },
  {
    "type": "word",
    "front": "wear and tear",
    "meaning": "正常使用产生的磨损",
    "example": "",
    "weight": 3,
    "id": "sw-003512",
    "source": "Review11 Scene 197"
  },
  {
    "type": "word",
    "front": "cosmetic damage",
    "meaning": "仅影响外观的损伤",
    "example": "",
    "weight": 3,
    "id": "sw-003513",
    "source": "Review11 Scene 197"
  },
  {
    "type": "word",
    "front": "scuffed",
    "meaning": "表面被擦花、擦伤的",
    "example": "",
    "weight": 3,
    "id": "sw-003514",
    "source": "Review11 Scene 197"
  },
  {
    "type": "word",
    "front": "wobbly",
    "meaning": "摇晃不稳的",
    "example": "",
    "weight": 3,
    "id": "sw-003515",
    "source": "Review11 Scene 197"
  },
  {
    "type": "word",
    "front": "dismantle",
    "meaning": "拆卸成多个部分",
    "example": "",
    "weight": 3,
    "id": "sw-003516",
    "source": "Review11 Scene 197"
  },
  {
    "type": "word",
    "front": "dimensions",
    "meaning": "长宽高等尺寸",
    "example": "",
    "weight": 3,
    "id": "sw-003517",
    "source": "Review11 Scene 197"
  },
  {
    "type": "word",
    "front": "collection only",
    "meaning": "仅支持买家自取",
    "example": "",
    "weight": 3,
    "id": "sw-003518",
    "source": "Review11 Scene 197"
  },
  {
    "type": "word",
    "front": "pay a deposit",
    "meaning": "支付定金或预付款",
    "example": "",
    "weight": 3,
    "id": "sw-003519",
    "source": "Review11 Scene 197"
  },
  {
    "type": "word",
    "front": "hold something for someone",
    "meaning": "暂时为某人保留商品",
    "example": "",
    "weight": 3,
    "id": "sw-003520",
    "source": "Review11 Scene 197"
  },
  {
    "type": "sentence",
    "front": "Would you be open to a slightly lower offer if I collected it myself?",
    "meaning": "如果我亲自来取，你愿意考虑稍低一点的报价吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003521",
    "source": "Review11 Scene 197"
  },
  {
    "type": "sentence",
    "front": "The desk looks sturdy, but could you confirm whether the legs can be dismantled?",
    "meaning": "桌子看起来很结实，但你能确认桌腿能否拆卸吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003522",
    "source": "Review11 Scene 197"
  },
  {
    "type": "word",
    "front": "midterm elections",
    "meaning": "中期选举",
    "example": "",
    "weight": 3,
    "id": "sw-003523",
    "source": "Review11 Scene 198"
  },
  {
    "type": "word",
    "front": "win control of",
    "meaning": "赢得对机构的控制权",
    "example": "",
    "weight": 3,
    "id": "sw-003524",
    "source": "Review11 Scene 198"
  },
  {
    "type": "word",
    "front": "a political shake-up",
    "meaning": "重大的政治格局变化",
    "example": "",
    "weight": 3,
    "id": "sw-003525",
    "source": "Review11 Scene 198"
  },
  {
    "type": "word",
    "front": "divided government",
    "meaning": "行政权和立法权由不同党派掌握的分立政府",
    "example": "",
    "weight": 3,
    "id": "sw-003526",
    "source": "Review11 Scene 198"
  },
  {
    "type": "word",
    "front": "gridlock",
    "meaning": "政治或组织层面的僵局",
    "example": "",
    "weight": 3,
    "id": "sw-003527",
    "source": "Review11 Scene 198"
  },
  {
    "type": "word",
    "front": "take a hit",
    "meaning": "遭受冲击、损失",
    "example": "",
    "weight": 3,
    "id": "sw-003528",
    "source": "Review11 Scene 198"
  },
  {
    "type": "word",
    "front": "bounce back",
    "meaning": "从下跌中反弹、恢复",
    "example": "",
    "weight": 3,
    "id": "sw-003529",
    "source": "Review11 Scene 198"
  },
  {
    "type": "word",
    "front": "a knee-jerk reaction",
    "meaning": "未经充分思考的本能反应",
    "example": "",
    "weight": 3,
    "id": "sw-003530",
    "source": "Review11 Scene 198"
  },
  {
    "type": "word",
    "front": "a mixed bag",
    "meaning": "好坏兼有、有利有弊的情况",
    "example": "",
    "weight": 3,
    "id": "sw-003531",
    "source": "Review11 Scene 198"
  },
  {
    "type": "word",
    "front": "pin something on",
    "meaning": "将某事归因于；将责任归咎于",
    "example": "",
    "weight": 3,
    "id": "sw-003532",
    "source": "Review11 Scene 198"
  },
  {
    "type": "word",
    "front": "regulatory scrutiny",
    "meaning": "监管部门的严格审查或密切关注",
    "example": "",
    "weight": 3,
    "id": "sw-003533",
    "source": "Review11 Scene 198"
  },
  {
    "type": "word",
    "front": "weigh on",
    "meaning": "给市场、情绪或业绩带来压力",
    "example": "",
    "weight": 3,
    "id": "sw-003534",
    "source": "Review11 Scene 198"
  },
  {
    "type": "word",
    "front": "price something in",
    "meaning": "提前将预期反映到资产价格中",
    "example": "",
    "weight": 3,
    "id": "sw-003535",
    "source": "Review11 Scene 198"
  },
  {
    "type": "word",
    "front": "buy the dip",
    "meaning": "趁价格下跌买入",
    "example": "",
    "weight": 3,
    "id": "sw-003536",
    "source": "Review11 Scene 198"
  },
  {
    "type": "word",
    "front": "once the dust settles",
    "meaning": "等局势稳定、尘埃落定之后",
    "example": "",
    "weight": 3,
    "id": "sw-003537",
    "source": "Review11 Scene 198"
  },
  {
    "type": "sentence",
    "front": "I wouldn't pin the whole market move on the election.",
    "meaning": "我不会把全部市场波动都归因于选举。",
    "example": "",
    "weight": 3,
    "id": "sw-003538",
    "source": "Review11 Scene 198"
  },
  {
    "type": "sentence",
    "front": "A divided government could be a mixed bag for investors.",
    "meaning": "分立政府对投资者来说可能有利有弊。",
    "example": "",
    "weight": 3,
    "id": "sw-003539",
    "source": "Review11 Scene 198"
  },
  {
    "type": "word",
    "front": "LED fixture",
    "meaning": "LED灯具（完整的灯具设备）",
    "example": "",
    "weight": 3,
    "id": "sw-003540",
    "source": "Review11 Scene 199"
  },
  {
    "type": "word",
    "front": "pulse-width modulation (PWM)",
    "meaning": "脉宽调制，常用于控制LED亮度",
    "example": "",
    "weight": 3,
    "id": "sw-003541",
    "source": "Review11 Scene 199"
  },
  {
    "type": "word",
    "front": "flicker frequency",
    "meaning": "闪烁频率",
    "example": "",
    "weight": 3,
    "id": "sw-003542",
    "source": "Review11 Scene 199"
  },
  {
    "type": "word",
    "front": "invisible to the naked eye",
    "meaning": "肉眼无法察觉的",
    "example": "",
    "weight": 3,
    "id": "sw-003543",
    "source": "Review11 Scene 199"
  },
  {
    "type": "word",
    "front": "rolling shutter",
    "meaning": "滚动快门",
    "example": "",
    "weight": 3,
    "id": "sw-003544",
    "source": "Review11 Scene 199"
  },
  {
    "type": "word",
    "front": "frame rate",
    "meaning": "帧率，每秒拍摄帧数",
    "example": "",
    "weight": 3,
    "id": "sw-003545",
    "source": "Review11 Scene 199"
  },
  {
    "type": "word",
    "front": "shutter speed",
    "meaning": "快门速度",
    "example": "",
    "weight": 3,
    "id": "sw-003546",
    "source": "Review11 Scene 199"
  },
  {
    "type": "word",
    "front": "exposure time",
    "meaning": "曝光时间",
    "example": "",
    "weight": 3,
    "id": "sw-003547",
    "source": "Review11 Scene 199"
  },
  {
    "type": "word",
    "front": "banding",
    "meaning": "画面出现明暗条纹的现象",
    "example": "",
    "weight": 3,
    "id": "sw-003548",
    "source": "Review11 Scene 199"
  },
  {
    "type": "word",
    "front": "light fluctuation",
    "meaning": "光线亮度波动",
    "example": "",
    "weight": 3,
    "id": "sw-003549",
    "source": "Review11 Scene 199"
  },
  {
    "type": "word",
    "front": "anti-flicker setting",
    "meaning": "相机防闪烁设置",
    "example": "",
    "weight": 3,
    "id": "sw-003550",
    "source": "Review11 Scene 199"
  },
  {
    "type": "word",
    "front": "mains frequency",
    "meaning": "交流电网频率",
    "example": "",
    "weight": 3,
    "id": "sw-003551",
    "source": "Review11 Scene 199"
  },
  {
    "type": "word",
    "front": "test footage",
    "meaning": "测试拍摄的素材",
    "example": "",
    "weight": 3,
    "id": "sw-003552",
    "source": "Review11 Scene 199"
  },
  {
    "type": "word",
    "front": "play back a clip",
    "meaning": "回放一段视频",
    "example": "",
    "weight": 3,
    "id": "sw-003553",
    "source": "Review11 Scene 199"
  },
  {
    "type": "word",
    "front": "smooth out",
    "meaning": "使波动、过渡变得平稳",
    "example": "",
    "weight": 3,
    "id": "sw-003554",
    "source": "Review11 Scene 199"
  },
  {
    "type": "sentence",
    "front": "The lights look steady to the naked eye, but the camera is picking up fluctuations.",
    "meaning": "肉眼看灯光很稳定，但相机捕捉到了亮度波动。",
    "example": "",
    "weight": 3,
    "id": "sw-003555",
    "source": "Review11 Scene 199"
  },
  {
    "type": "sentence",
    "front": "I'll adjust the shutter speed and record a short test clip.",
    "meaning": "我会调整快门速度，再录一小段测试素材。",
    "example": "",
    "weight": 3,
    "id": "sw-003556",
    "source": "Review11 Scene 199"
  },
  {
    "type": "word",
    "front": "timed-entry ticket",
    "meaning": "指定时段入场门票",
    "example": "",
    "weight": 3,
    "id": "sw-003557",
    "source": "Review11 Scene 200"
  },
  {
    "type": "word",
    "front": "entry slot",
    "meaning": "预订入场时间段",
    "example": "",
    "weight": 3,
    "id": "sw-003558",
    "source": "Review11 Scene 200"
  },
  {
    "type": "word",
    "front": "grace period",
    "meaning": "宽限期",
    "example": "",
    "weight": 3,
    "id": "sw-003559",
    "source": "Review11 Scene 200"
  },
  {
    "type": "word",
    "front": "admission desk",
    "meaning": "入场服务台",
    "example": "",
    "weight": 3,
    "id": "sw-003560",
    "source": "Review11 Scene 200"
  },
  {
    "type": "word",
    "front": "confirmation email",
    "meaning": "确认邮件",
    "example": "",
    "weight": 3,
    "id": "sw-003561",
    "source": "Review11 Scene 200"
  },
  {
    "type": "word",
    "front": "subject to availability",
    "meaning": "视剩余名额而定",
    "example": "",
    "weight": 3,
    "id": "sw-003562",
    "source": "Review11 Scene 200"
  },
  {
    "type": "word",
    "front": "non-refundable",
    "meaning": "不可退款的",
    "example": "",
    "weight": 3,
    "id": "sw-003563",
    "source": "Review11 Scene 200"
  },
  {
    "type": "word",
    "front": "non-transferable",
    "meaning": "不可转让的",
    "example": "",
    "weight": 3,
    "id": "sw-003564",
    "source": "Review11 Scene 200"
  },
  {
    "type": "word",
    "front": "late-arrival policy",
    "meaning": "迟到处理规则",
    "example": "",
    "weight": 3,
    "id": "sw-003565",
    "source": "Review11 Scene 200"
  },
  {
    "type": "word",
    "front": "last admission",
    "meaning": "最后允许入场的时间",
    "example": "",
    "weight": 3,
    "id": "sw-003566",
    "source": "Review11 Scene 200"
  },
  {
    "type": "word",
    "front": "cloakroom",
    "meaning": "衣帽间、行李寄存处",
    "example": "",
    "weight": 3,
    "id": "sw-003567",
    "source": "Review11 Scene 200"
  },
  {
    "type": "word",
    "front": "audio guide",
    "meaning": "语音导览设备或服务",
    "example": "",
    "weight": 3,
    "id": "sw-003568",
    "source": "Review11 Scene 200"
  },
  {
    "type": "word",
    "front": "permanent collection",
    "meaning": "常设馆藏",
    "example": "",
    "weight": 3,
    "id": "sw-003569",
    "source": "Review11 Scene 200"
  },
  {
    "type": "word",
    "front": "temporary exhibition",
    "meaning": "临时展览、限期展览",
    "example": "",
    "weight": 3,
    "id": "sw-003570",
    "source": "Review11 Scene 200"
  },
  {
    "type": "sentence",
    "front": "I've missed my entry slot. Is there a grace period, or is late admission subject to availability?",
    "meaning": "我错过预约入场时段了。有宽限期吗，还是必须视剩余名额而定？",
    "example": "",
    "weight": 3,
    "id": "sw-003571",
    "source": "Review11 Scene 200"
  },
  {
    "type": "sentence",
    "front": "Could I leave my backpack in the cloakroom before entering the exhibition?",
    "meaning": "进入展览前，我能把背包寄存在衣帽间吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003572",
    "source": "Review11 Scene 200"
  },
  {
    "type": "word",
    "front": "dusk",
    "meaning": "黄昏",
    "example": "",
    "weight": 3,
    "id": "sw-003573",
    "source": "Review11 Scene 201"
  },
  {
    "type": "word",
    "front": "nightfall",
    "meaning": "夜幕降临",
    "example": "",
    "weight": 3,
    "id": "sw-003574",
    "source": "Review11 Scene 201"
  },
  {
    "type": "word",
    "front": "beam",
    "meaning": "光束",
    "example": "",
    "weight": 3,
    "id": "sw-003575",
    "source": "Review11 Scene 201"
  },
  {
    "type": "word",
    "front": "lumens",
    "meaning": "流明，光通量单位",
    "example": "",
    "weight": 3,
    "id": "sw-003576",
    "source": "Review11 Scene 201"
  },
  {
    "type": "word",
    "front": "brightness setting",
    "meaning": "亮度挡位",
    "example": "",
    "weight": 3,
    "id": "sw-003577",
    "source": "Review11 Scene 201"
  },
  {
    "type": "word",
    "front": "battery indicator",
    "meaning": "电量指示灯",
    "example": "",
    "weight": 3,
    "id": "sw-003578",
    "source": "Review11 Scene 201"
  },
  {
    "type": "word",
    "front": "battery compartment",
    "meaning": "电池仓",
    "example": "",
    "weight": 3,
    "id": "sw-003579",
    "source": "Review11 Scene 201"
  },
  {
    "type": "word",
    "front": "corroded contacts",
    "meaning": "被腐蚀的电池接触点",
    "example": "",
    "weight": 3,
    "id": "sw-003580",
    "source": "Review11 Scene 201"
  },
  {
    "type": "word",
    "front": "spare batteries",
    "meaning": "备用电池",
    "example": "",
    "weight": 3,
    "id": "sw-003581",
    "source": "Review11 Scene 201"
  },
  {
    "type": "word",
    "front": "red-light mode",
    "meaning": "头灯红光模式",
    "example": "",
    "weight": 3,
    "id": "sw-003582",
    "source": "Review11 Scene 201"
  },
  {
    "type": "word",
    "front": "backup light source",
    "meaning": "备用照明来源",
    "example": "",
    "weight": 3,
    "id": "sw-003583",
    "source": "Review11 Scene 201"
  },
  {
    "type": "word",
    "front": "trip hazard",
    "meaning": "容易绊倒人的障碍物",
    "example": "",
    "weight": 3,
    "id": "sw-003584",
    "source": "Review11 Scene 201"
  },
  {
    "type": "word",
    "front": "pick your way",
    "meaning": "小心选择落脚点前进",
    "example": "",
    "weight": 3,
    "id": "sw-003585",
    "source": "Review11 Scene 201"
  },
  {
    "type": "word",
    "front": "reflective trail marker",
    "meaning": "反光步道标记",
    "example": "",
    "weight": 3,
    "id": "sw-003586",
    "source": "Review11 Scene 201"
  },
  {
    "type": "sentence",
    "front": "The headlamp keeps cutting out, so I'll switch to my backup light before we continue.",
    "meaning": "头灯一直突然熄灭，我会在继续前进前改用备用照明。",
    "example": "",
    "weight": 3,
    "id": "sw-003587",
    "source": "Review11 Scene 201"
  },
  {
    "type": "sentence",
    "front": "We should slow down and carefully pick our way around the loose stones.",
    "meaning": "我们应该放慢脚步，小心选择落脚点绕过松动的石头。",
    "example": "",
    "weight": 3,
    "id": "sw-003588",
    "source": "Review11 Scene 201"
  },
  {
    "type": "word",
    "front": "slow-draining",
    "meaning": "排水缓慢的",
    "example": "",
    "weight": 3,
    "id": "sw-003589",
    "source": "Review11 Scene 202"
  },
  {
    "type": "word",
    "front": "back up",
    "meaning": "因堵塞使水倒积",
    "example": "",
    "weight": 3,
    "id": "sw-003590",
    "source": "Review11 Scene 202"
  },
  {
    "type": "word",
    "front": "standing water",
    "meaning": "积水",
    "example": "",
    "weight": 3,
    "id": "sw-003591",
    "source": "Review11 Scene 202"
  },
  {
    "type": "word",
    "front": "gurgling sound",
    "meaning": "水管咕噜声",
    "example": "",
    "weight": 3,
    "id": "sw-003592",
    "source": "Review11 Scene 202"
  },
  {
    "type": "word",
    "front": "drain strainer",
    "meaning": "排水滤网",
    "example": "",
    "weight": 3,
    "id": "sw-003593",
    "source": "Review11 Scene 202"
  },
  {
    "type": "word",
    "front": "food particles",
    "meaning": "食物颗粒、碎屑",
    "example": "",
    "weight": 3,
    "id": "sw-003594",
    "source": "Review11 Scene 202"
  },
  {
    "type": "word",
    "front": "grease buildup",
    "meaning": "油脂积累形成的污垢",
    "example": "",
    "weight": 3,
    "id": "sw-003595",
    "source": "Review11 Scene 202"
  },
  {
    "type": "word",
    "front": "blockage",
    "meaning": "堵塞；堵塞物",
    "example": "",
    "weight": 3,
    "id": "sw-003596",
    "source": "Review11 Scene 202"
  },
  {
    "type": "word",
    "front": "plunger",
    "meaning": "皮搋子，疏通工具",
    "example": "",
    "weight": 3,
    "id": "sw-003597",
    "source": "Review11 Scene 202"
  },
  {
    "type": "word",
    "front": "suction",
    "meaning": "吸力",
    "example": "",
    "weight": 3,
    "id": "sw-003598",
    "source": "Review11 Scene 202"
  },
  {
    "type": "word",
    "front": "drain snake",
    "meaning": "管道疏通软轴",
    "example": "",
    "weight": 3,
    "id": "sw-003599",
    "source": "Review11 Scene 202"
  },
  {
    "type": "word",
    "front": "P-trap",
    "meaning": "P形存水弯",
    "example": "",
    "weight": 3,
    "id": "sw-003600",
    "source": "Review11 Scene 202"
  },
  {
    "type": "word",
    "front": "pipe joint",
    "meaning": "管道接头",
    "example": "",
    "weight": 3,
    "id": "sw-003601",
    "source": "Review11 Scene 202"
  },
  {
    "type": "word",
    "front": "watertight",
    "meaning": "不漏水的、水密的",
    "example": "",
    "weight": 3,
    "id": "sw-003602",
    "source": "Review11 Scene 202"
  },
  {
    "type": "word",
    "front": "plumber",
    "meaning": "水管工",
    "example": "",
    "weight": 3,
    "id": "sw-003603",
    "source": "Review11 Scene 202"
  },
  {
    "type": "sentence",
    "front": "Water keeps backing up in the kitchen sink even after I've cleaned the drain strainer.",
    "meaning": "即使清理了排水滤网，厨房水槽还是不断积水。",
    "example": "",
    "weight": 3,
    "id": "sw-003604",
    "source": "Review11 Scene 202"
  },
  {
    "type": "sentence",
    "front": "Could you arrange for a plumber to inspect the blockage?",
    "meaning": "能安排水管工检查堵塞问题吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003605",
    "source": "Review11 Scene 202"
  },
  {
    "type": "word",
    "front": "dietary requirements",
    "meaning": "饮食要求或限制",
    "example": "",
    "weight": 3,
    "id": "sw-003606",
    "source": "Review11 Scene 203"
  },
  {
    "type": "word",
    "front": "food allergy",
    "meaning": "食物过敏",
    "example": "",
    "weight": 3,
    "id": "sw-003607",
    "source": "Review11 Scene 203"
  },
  {
    "type": "word",
    "front": "food intolerance",
    "meaning": "食物不耐受",
    "example": "",
    "weight": 3,
    "id": "sw-003608",
    "source": "Review11 Scene 203"
  },
  {
    "type": "word",
    "front": "allergen",
    "meaning": "过敏原",
    "example": "",
    "weight": 3,
    "id": "sw-003609",
    "source": "Review11 Scene 203"
  },
  {
    "type": "word",
    "front": "ingredient list",
    "meaning": "配料清单",
    "example": "",
    "weight": 3,
    "id": "sw-003610",
    "source": "Review11 Scene 203"
  },
  {
    "type": "word",
    "front": "nut-based",
    "meaning": "以坚果为主要成分的",
    "example": "",
    "weight": 3,
    "id": "sw-003611",
    "source": "Review11 Scene 203"
  },
  {
    "type": "word",
    "front": "cross-contact",
    "meaning": "过敏原交叉接触",
    "example": "",
    "weight": 3,
    "id": "sw-003612",
    "source": "Review11 Scene 203"
  },
  {
    "type": "word",
    "front": "traces of",
    "meaning": "微量、痕量的",
    "example": "",
    "weight": 3,
    "id": "sw-003613",
    "source": "Review11 Scene 203"
  },
  {
    "type": "word",
    "front": "made to order",
    "meaning": "接到订单后才制作的",
    "example": "",
    "weight": 3,
    "id": "sw-003614",
    "source": "Review11 Scene 203"
  },
  {
    "type": "word",
    "front": "leave something off",
    "meaning": "制作时不加入某种配料",
    "example": "",
    "weight": 3,
    "id": "sw-003615",
    "source": "Review11 Scene 203"
  },
  {
    "type": "word",
    "front": "garnish",
    "meaning": "菜肴表面装饰性配料",
    "example": "",
    "weight": 3,
    "id": "sw-003616",
    "source": "Review11 Scene 203"
  },
  {
    "type": "word",
    "front": "dressing",
    "meaning": "沙拉酱、调味汁",
    "example": "",
    "weight": 3,
    "id": "sw-003617",
    "source": "Review11 Scene 203"
  },
  {
    "type": "word",
    "front": "on the side",
    "meaning": "调味酱另放一边",
    "example": "",
    "weight": 3,
    "id": "sw-003618",
    "source": "Review11 Scene 203"
  },
  {
    "type": "word",
    "front": "separate utensils",
    "meaning": "单独使用的厨具",
    "example": "",
    "weight": 3,
    "id": "sw-003619",
    "source": "Review11 Scene 203"
  },
  {
    "type": "word",
    "front": "accommodate a request",
    "meaning": "满足、配合具体请求",
    "example": "",
    "weight": 3,
    "id": "sw-003620",
    "source": "Review11 Scene 203"
  },
  {
    "type": "sentence",
    "front": "Could you check with the chef whether there's any risk of cross-contact?",
    "meaning": "可以帮我向厨师确认是否存在过敏原交叉接触风险吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003621",
    "source": "Review11 Scene 203"
  },
  {
    "type": "sentence",
    "front": "I'd like the dressing on the side, and please leave the garnish off.",
    "meaning": "我希望沙拉酱单独放一边，而且请不要加表面装饰配料。",
    "example": "",
    "weight": 3,
    "id": "sw-003622",
    "source": "Review11 Scene 203"
  },
  {
    "type": "word",
    "front": "divergence",
    "meaning": "不同公司或板块表现的分化",
    "example": "",
    "weight": 3,
    "id": "sw-003623",
    "source": "Review11 Scene 204"
  },
  {
    "type": "word",
    "front": "hyperscaler",
    "meaning": "超大规模云计算服务商",
    "example": "",
    "weight": 3,
    "id": "sw-003624",
    "source": "Review11 Scene 204"
  },
  {
    "type": "word",
    "front": "neocloud",
    "meaning": "专注AI算力等的新型云服务商",
    "example": "",
    "weight": 3,
    "id": "sw-003625",
    "source": "Review11 Scene 204"
  },
  {
    "type": "word",
    "front": "moratorium",
    "meaning": "暂停令；暂缓实施某项活动",
    "example": "",
    "weight": 3,
    "id": "sw-003626",
    "source": "Review11 Scene 204"
  },
  {
    "type": "word",
    "front": "permitting",
    "meaning": "许可证审批流程",
    "example": "",
    "weight": 3,
    "id": "sw-003627",
    "source": "Review11 Scene 204"
  },
  {
    "type": "word",
    "front": "grid connection",
    "meaning": "电网接入",
    "example": "",
    "weight": 3,
    "id": "sw-003628",
    "source": "Review11 Scene 204"
  },
  {
    "type": "word",
    "front": "capital expenditure (capex)",
    "meaning": "资本性支出",
    "example": "",
    "weight": 3,
    "id": "sw-003629",
    "source": "Review11 Scene 204"
  },
  {
    "type": "word",
    "front": "return on investment (ROI)",
    "meaning": "投资回报率",
    "example": "",
    "weight": 3,
    "id": "sw-003630",
    "source": "Review11 Scene 204"
  },
  {
    "type": "word",
    "front": "cash-rich",
    "meaning": "现金储备充足的",
    "example": "",
    "weight": 3,
    "id": "sw-003631",
    "source": "Review11 Scene 204"
  },
  {
    "type": "word",
    "front": "funding squeeze",
    "meaning": "融资压力、融资渠道收紧",
    "example": "",
    "weight": 3,
    "id": "sw-003632",
    "source": "Review11 Scene 204"
  },
  {
    "type": "word",
    "front": "capacity constraint",
    "meaning": "资源、生产或计算容量限制",
    "example": "",
    "weight": 3,
    "id": "sw-003633",
    "source": "Review11 Scene 204"
  },
  {
    "type": "word",
    "front": "competitive edge",
    "meaning": "竞争优势",
    "example": "",
    "weight": 3,
    "id": "sw-003634",
    "source": "Review11 Scene 204"
  },
  {
    "type": "word",
    "front": "policy headwind",
    "meaning": "政策带来的阻力",
    "example": "",
    "weight": 3,
    "id": "sw-003635",
    "source": "Review11 Scene 204"
  },
  {
    "type": "word",
    "front": "knock-on effect",
    "meaning": "连锁反应、间接影响",
    "example": "",
    "weight": 3,
    "id": "sw-003636",
    "source": "Review11 Scene 204"
  },
  {
    "type": "word",
    "front": "earnings miss",
    "meaning": "企业公布业绩低于市场预期",
    "example": "",
    "weight": 3,
    "id": "sw-003637",
    "source": "Review11 Scene 204"
  },
  {
    "type": "sentence",
    "front": "The same policy could put smaller developers under pressure while giving established firms a competitive edge.",
    "meaning": "同一项政策可能给小型开发商带来压力，却让成熟企业获得竞争优势。",
    "example": "",
    "weight": 3,
    "id": "sw-003638",
    "source": "Review11 Scene 204"
  },
  {
    "type": "sentence",
    "front": "A slowdown in data-centre construction could have a knock-on effect on chip suppliers.",
    "meaning": "数据中心建设放缓可能对芯片供应商产生连锁影响。",
    "example": "",
    "weight": 3,
    "id": "sw-003639",
    "source": "Review11 Scene 204"
  },
  {
    "type": "word",
    "front": "induced demand",
    "meaning": "诱导需求",
    "example": "",
    "weight": 3,
    "id": "sw-003640",
    "source": "Review11 Scene 205"
  },
  {
    "type": "word",
    "front": "lane expansion",
    "meaning": "增加车道、道路扩建",
    "example": "",
    "weight": 3,
    "id": "sw-003641",
    "source": "Review11 Scene 205"
  },
  {
    "type": "word",
    "front": "road capacity",
    "meaning": "道路通行容量",
    "example": "",
    "weight": 3,
    "id": "sw-003642",
    "source": "Review11 Scene 205"
  },
  {
    "type": "word",
    "front": "traffic congestion",
    "meaning": "交通拥堵",
    "example": "",
    "weight": 3,
    "id": "sw-003643",
    "source": "Review11 Scene 205"
  },
  {
    "type": "word",
    "front": "congestion relief",
    "meaning": "缓解交通拥堵",
    "example": "",
    "weight": 3,
    "id": "sw-003644",
    "source": "Review11 Scene 205"
  },
  {
    "type": "word",
    "front": "travel time savings",
    "meaning": "节省的出行时间",
    "example": "",
    "weight": 3,
    "id": "sw-003645",
    "source": "Review11 Scene 205"
  },
  {
    "type": "word",
    "front": "latent demand",
    "meaning": "潜在而未充分释放的需求",
    "example": "",
    "weight": 3,
    "id": "sw-003646",
    "source": "Review11 Scene 205"
  },
  {
    "type": "word",
    "front": "mode shift",
    "meaning": "交通出行方式转变",
    "example": "",
    "weight": 3,
    "id": "sw-003647",
    "source": "Review11 Scene 205"
  },
  {
    "type": "word",
    "front": "trip frequency",
    "meaning": "出行频率",
    "example": "",
    "weight": 3,
    "id": "sw-003648",
    "source": "Review11 Scene 205"
  },
  {
    "type": "word",
    "front": "vehicle miles travelled (VMT)",
    "meaning": "机动车总行驶里程",
    "example": "",
    "weight": 3,
    "id": "sw-003649",
    "source": "Review11 Scene 205"
  },
  {
    "type": "word",
    "front": "urban sprawl",
    "meaning": "城市向外围低密度蔓延",
    "example": "",
    "weight": 3,
    "id": "sw-003650",
    "source": "Review11 Scene 205"
  },
  {
    "type": "word",
    "front": "land-use pattern",
    "meaning": "土地利用格局",
    "example": "",
    "weight": 3,
    "id": "sw-003651",
    "source": "Review11 Scene 205"
  },
  {
    "type": "word",
    "front": "travel demand",
    "meaning": "出行需求",
    "example": "",
    "weight": 3,
    "id": "sw-003652",
    "source": "Review11 Scene 205"
  },
  {
    "type": "word",
    "front": "congestion pricing",
    "meaning": "拥堵收费",
    "example": "",
    "weight": 3,
    "id": "sw-003653",
    "source": "Review11 Scene 205"
  },
  {
    "type": "word",
    "front": "counterproductive",
    "meaning": "适得其反的",
    "example": "",
    "weight": 3,
    "id": "sw-003654",
    "source": "Review11 Scene 205"
  },
  {
    "type": "sentence",
    "front": "Adding more lanes may reduce congestion at first, but it can also create induced demand.",
    "meaning": "增加车道最初可能缓解拥堵，但也可能诱发更多开车需求。",
    "example": "",
    "weight": 3,
    "id": "sw-003655",
    "source": "Review11 Scene 205"
  },
  {
    "type": "sentence",
    "front": "The long-term outcome depends on how travel demand responds.",
    "meaning": "长期效果取决于出行需求会作出怎样的反应。",
    "example": "",
    "weight": 3,
    "id": "sw-003656",
    "source": "Review11 Scene 205"
  },
  {
    "type": "word",
    "front": "full-to-full fuel policy",
    "meaning": "满油取车、满油还车政策",
    "example": "",
    "weight": 3,
    "id": "sw-003657",
    "source": "Review11 Scene 206"
  },
  {
    "type": "word",
    "front": "top up the tank",
    "meaning": "把油箱补加到规定油量",
    "example": "",
    "weight": 3,
    "id": "sw-003658",
    "source": "Review11 Scene 206"
  },
  {
    "type": "word",
    "front": "fuel receipt",
    "meaning": "加油收据",
    "example": "",
    "weight": 3,
    "id": "sw-003659",
    "source": "Review11 Scene 206"
  },
  {
    "type": "word",
    "front": "return bay",
    "meaning": "指定还车停车位",
    "example": "",
    "weight": 3,
    "id": "sw-003660",
    "source": "Review11 Scene 206"
  },
  {
    "type": "word",
    "front": "drop-off deadline",
    "meaning": "归还车辆截止时间",
    "example": "",
    "weight": 3,
    "id": "sw-003661",
    "source": "Review11 Scene 206"
  },
  {
    "type": "word",
    "front": "late-return fee",
    "meaning": "延迟还车费",
    "example": "",
    "weight": 3,
    "id": "sw-003662",
    "source": "Review11 Scene 206"
  },
  {
    "type": "word",
    "front": "mileage allowance",
    "meaning": "允许行驶里程额度",
    "example": "",
    "weight": 3,
    "id": "sw-003663",
    "source": "Review11 Scene 206"
  },
  {
    "type": "word",
    "front": "excess mileage charge",
    "meaning": "超里程费用",
    "example": "",
    "weight": 3,
    "id": "sw-003664",
    "source": "Review11 Scene 206"
  },
  {
    "type": "word",
    "front": "odometer reading",
    "meaning": "累计里程表读数",
    "example": "",
    "weight": 3,
    "id": "sw-003665",
    "source": "Review11 Scene 206"
  },
  {
    "type": "word",
    "front": "walk-around inspection",
    "meaning": "绕车外观检查",
    "example": "",
    "weight": 3,
    "id": "sw-003666",
    "source": "Review11 Scene 206"
  },
  {
    "type": "word",
    "front": "vehicle condition report",
    "meaning": "车辆状况记录",
    "example": "",
    "weight": 3,
    "id": "sw-003667",
    "source": "Review11 Scene 206"
  },
  {
    "type": "word",
    "front": "after-hours return",
    "meaning": "营业时间之外还车",
    "example": "",
    "weight": 3,
    "id": "sw-003668",
    "source": "Review11 Scene 206"
  },
  {
    "type": "word",
    "front": "key drop",
    "meaning": "自助还钥匙箱或投放点",
    "example": "",
    "weight": 3,
    "id": "sw-003669",
    "source": "Review11 Scene 206"
  },
  {
    "type": "sentence",
    "front": "I've topped up the tank and kept the receipt. Could you confirm the final charges?",
    "meaning": "我已经把油箱加满并保留收据。可以确认最终费用吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003670",
    "source": "Review11 Scene 206"
  },
  {
    "type": "sentence",
    "front": "Please compare the odometer reading with my mileage allowance.",
    "meaning": "请把里程表读数与合同规定的行驶里程额度核对一下。",
    "example": "",
    "weight": 3,
    "id": "sw-003671",
    "source": "Review11 Scene 206"
  },
  {
    "type": "word",
    "front": "boardwalk",
    "meaning": "木栈道",
    "example": "",
    "weight": 3,
    "id": "sw-003672",
    "source": "Review11 Scene 207"
  },
  {
    "type": "word",
    "front": "boggy ground",
    "meaning": "含水量很高、泥泞松软的地面",
    "example": "",
    "weight": 3,
    "id": "sw-003673",
    "source": "Review11 Scene 207"
  },
  {
    "type": "word",
    "front": "peat bog",
    "meaning": "泥炭沼泽",
    "example": "",
    "weight": 3,
    "id": "sw-003674",
    "source": "Review11 Scene 207"
  },
  {
    "type": "word",
    "front": "saturated soil",
    "meaning": "被水浸透的土壤",
    "example": "",
    "weight": 3,
    "id": "sw-003675",
    "source": "Review11 Scene 207"
  },
  {
    "type": "word",
    "front": "rotting timber",
    "meaning": "正在腐朽的木材",
    "example": "",
    "weight": 3,
    "id": "sw-003676",
    "source": "Review11 Scene 207"
  },
  {
    "type": "word",
    "front": "loose plank",
    "meaning": "松动的长木板",
    "example": "",
    "weight": 3,
    "id": "sw-003677",
    "source": "Review11 Scene 207"
  },
  {
    "type": "word",
    "front": "handrail",
    "meaning": "扶手",
    "example": "",
    "weight": 3,
    "id": "sw-003678",
    "source": "Review11 Scene 207"
  },
  {
    "type": "word",
    "front": "gap between the boards",
    "meaning": "木板之间的缝隙",
    "example": "",
    "weight": 3,
    "id": "sw-003679",
    "source": "Review11 Scene 207"
  },
  {
    "type": "word",
    "front": "ankle-deep",
    "meaning": "深及脚踝的",
    "example": "",
    "weight": 3,
    "id": "sw-003680",
    "source": "Review11 Scene 207"
  },
  {
    "type": "word",
    "front": "gaiters",
    "meaning": "雪套、绑腿",
    "example": "",
    "weight": 3,
    "id": "sw-003681",
    "source": "Review11 Scene 207"
  },
  {
    "type": "word",
    "front": "boot tread",
    "meaning": "鞋底防滑花纹",
    "example": "",
    "weight": 3,
    "id": "sw-003682",
    "source": "Review11 Scene 207"
  },
  {
    "type": "word",
    "front": "caked in mud",
    "meaning": "厚厚沾满泥巴的",
    "example": "",
    "weight": 3,
    "id": "sw-003683",
    "source": "Review11 Scene 207"
  },
  {
    "type": "word",
    "front": "treacherous underfoot",
    "meaning": "脚下危险、难以安全行走的",
    "example": "",
    "weight": 3,
    "id": "sw-003684",
    "source": "Review11 Scene 207"
  },
  {
    "type": "word",
    "front": "trail erosion",
    "meaning": "步道土壤侵蚀",
    "example": "",
    "weight": 3,
    "id": "sw-003685",
    "source": "Review11 Scene 207"
  },
  {
    "type": "sentence",
    "front": "The boardwalk is damaged, and the ground around it is too boggy to cross safely.",
    "meaning": "木栈道已经损坏，周围地面太泥泞松软，无法安全通过。",
    "example": "",
    "weight": 3,
    "id": "sw-003686",
    "source": "Review11 Scene 207"
  },
  {
    "type": "sentence",
    "front": "We should retrace our steps rather than follow an unmarked path through the wetland.",
    "meaning": "我们应该原路返回，而不是沿未经标记的小路穿过湿地。",
    "example": "",
    "weight": 3,
    "id": "sw-003687",
    "source": "Review11 Scene 207"
  },
  {
    "type": "word",
    "front": "loan period",
    "meaning": "借阅期限",
    "example": "",
    "weight": 3,
    "id": "sw-003688",
    "source": "Review11 Scene 208"
  },
  {
    "type": "word",
    "front": "be due back",
    "meaning": "借出的物品应到期归还",
    "example": "",
    "weight": 3,
    "id": "sw-003689",
    "source": "Review11 Scene 208"
  },
  {
    "type": "word",
    "front": "renewal limit",
    "meaning": "续借次数或期限上限",
    "example": "",
    "weight": 3,
    "id": "sw-003690",
    "source": "Review11 Scene 208"
  },
  {
    "type": "word",
    "front": "place a hold on",
    "meaning": "预约一本目前不能借出的书",
    "example": "",
    "weight": 3,
    "id": "sw-003691",
    "source": "Review11 Scene 208"
  },
  {
    "type": "word",
    "front": "waiting list",
    "meaning": "等待名单、预约队列",
    "example": "",
    "weight": 3,
    "id": "sw-003692",
    "source": "Review11 Scene 208"
  },
  {
    "type": "word",
    "front": "on loan",
    "meaning": "物品当前已经借出",
    "example": "",
    "weight": 3,
    "id": "sw-003693",
    "source": "Review11 Scene 208"
  },
  {
    "type": "word",
    "front": "recall a book",
    "meaning": "图书馆要求提前归还图书",
    "example": "",
    "weight": 3,
    "id": "sw-003694",
    "source": "Review11 Scene 208"
  },
  {
    "type": "word",
    "front": "revised due date",
    "meaning": "调整后的归还截止日期",
    "example": "",
    "weight": 3,
    "id": "sw-003695",
    "source": "Review11 Scene 208"
  },
  {
    "type": "word",
    "front": "circulation desk",
    "meaning": "图书馆借还书服务台",
    "example": "",
    "weight": 3,
    "id": "sw-003696",
    "source": "Review11 Scene 208"
  },
  {
    "type": "word",
    "front": "library catalogue",
    "meaning": "图书馆馆藏检索目录",
    "example": "",
    "weight": 3,
    "id": "sw-003697",
    "source": "Review11 Scene 208"
  },
  {
    "type": "word",
    "front": "call number",
    "meaning": "索书号；馆藏定位编号",
    "example": "",
    "weight": 3,
    "id": "sw-003698",
    "source": "Review11 Scene 208"
  },
  {
    "type": "word",
    "front": "interlibrary loan",
    "meaning": "馆际互借",
    "example": "",
    "weight": 3,
    "id": "sw-003699",
    "source": "Review11 Scene 208"
  },
  {
    "type": "word",
    "front": "reference-only",
    "meaning": "仅供馆内查阅的",
    "example": "",
    "weight": 3,
    "id": "sw-003700",
    "source": "Review11 Scene 208"
  },
  {
    "type": "word",
    "front": "short-term loan",
    "meaning": "短期借阅",
    "example": "",
    "weight": 3,
    "id": "sw-003701",
    "source": "Review11 Scene 208"
  },
  {
    "type": "word",
    "front": "overdue fine",
    "meaning": "逾期归还罚款",
    "example": "",
    "weight": 3,
    "id": "sw-003702",
    "source": "Review11 Scene 208"
  },
  {
    "type": "word",
    "front": "book drop",
    "meaning": "非营业时间还书箱",
    "example": "",
    "weight": 3,
    "id": "sw-003703",
    "source": "Review11 Scene 208"
  },
  {
    "type": "word",
    "front": "borrowing privileges",
    "meaning": "读者借阅权限",
    "example": "",
    "weight": 3,
    "id": "sw-003704",
    "source": "Review11 Scene 208"
  },
  {
    "type": "sentence",
    "front": "I tried to renew the book, but someone else had already placed a hold on it.",
    "meaning": "我尝试续借，但其他人已经预约了这本书。",
    "example": "",
    "weight": 3,
    "id": "sw-003705",
    "source": "Review11 Scene 208"
  },
  {
    "type": "sentence",
    "front": "All copies are on loan. Could I request the title through interlibrary loan?",
    "meaning": "所有副本都借出去了。我可以通过馆际互借申请这本书吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003706",
    "source": "Review11 Scene 208"
  },
  {
    "type": "word",
    "front": "marked as delivered",
    "meaning": "被物流系统标记为已送达",
    "example": "",
    "weight": 3,
    "id": "sw-003707",
    "source": "Review11 Scene 209"
  },
  {
    "type": "word",
    "front": "delivery scan",
    "meaning": "物流送达扫描记录",
    "example": "",
    "weight": 3,
    "id": "sw-003708",
    "source": "Review11 Scene 209"
  },
  {
    "type": "word",
    "front": "delivery photo",
    "meaning": "快递员提供的送达照片",
    "example": "",
    "weight": 3,
    "id": "sw-003709",
    "source": "Review11 Scene 209"
  },
  {
    "type": "word",
    "front": "safe place",
    "meaning": "获指定或认可的包裹安全放置点",
    "example": "",
    "weight": 3,
    "id": "sw-003710",
    "source": "Review11 Scene 209"
  },
  {
    "type": "word",
    "front": "misdelivered",
    "meaning": "错误投递的",
    "example": "",
    "weight": 3,
    "id": "sw-003711",
    "source": "Review11 Scene 209"
  },
  {
    "type": "word",
    "front": "neighbouring address",
    "meaning": "附近的另一个地址",
    "example": "",
    "weight": 3,
    "id": "sw-003712",
    "source": "Review11 Scene 209"
  },
  {
    "type": "word",
    "front": "courier company",
    "meaning": "快递配送公司",
    "example": "",
    "weight": 3,
    "id": "sw-003713",
    "source": "Review11 Scene 209"
  },
  {
    "type": "word",
    "front": "parcel carrier",
    "meaning": "包裹运输承运商",
    "example": "",
    "weight": 3,
    "id": "sw-003714",
    "source": "Review11 Scene 209"
  },
  {
    "type": "word",
    "front": "signature required",
    "meaning": "配送需要签收",
    "example": "",
    "weight": 3,
    "id": "sw-003715",
    "source": "Review11 Scene 209"
  },
  {
    "type": "word",
    "front": "delivery exception",
    "meaning": "派送异常状态",
    "example": "",
    "weight": 3,
    "id": "sw-003716",
    "source": "Review11 Scene 209"
  },
  {
    "type": "word",
    "front": "redelivery attempt",
    "meaning": "再次尝试派送",
    "example": "",
    "weight": 3,
    "id": "sw-003717",
    "source": "Review11 Scene 209"
  },
  {
    "type": "word",
    "front": "collection code",
    "meaning": "包裹取件码",
    "example": "",
    "weight": 3,
    "id": "sw-003718",
    "source": "Review11 Scene 209"
  },
  {
    "type": "word",
    "front": "investigation case",
    "meaning": "客服调查案件",
    "example": "",
    "weight": 3,
    "id": "sw-003719",
    "source": "Review11 Scene 209"
  },
  {
    "type": "word",
    "front": "case reference number",
    "meaning": "案件查询参考编号",
    "example": "",
    "weight": 3,
    "id": "sw-003720",
    "source": "Review11 Scene 209"
  },
  {
    "type": "word",
    "front": "replacement shipment",
    "meaning": "重新寄送的商品",
    "example": "",
    "weight": 3,
    "id": "sw-003721",
    "source": "Review11 Scene 209"
  },
  {
    "type": "word",
    "front": "buyer protection",
    "meaning": "买家权益保障机制",
    "example": "",
    "weight": 3,
    "id": "sw-003722",
    "source": "Review11 Scene 209"
  },
  {
    "type": "word",
    "front": "file a missing-parcel claim",
    "meaning": "正式提交包裹遗失申诉",
    "example": "",
    "weight": 3,
    "id": "sw-003723",
    "source": "Review11 Scene 209"
  },
  {
    "type": "sentence",
    "front": "The parcel was marked as delivered, but the delivery photo doesn't match my address.",
    "meaning": "包裹显示已送达，但送达照片与我的地址不符。",
    "example": "",
    "weight": 3,
    "id": "sw-003724",
    "source": "Review11 Scene 209"
  },
  {
    "type": "sentence",
    "front": "Could you give me a case reference number and explain the next step in the investigation?",
    "meaning": "能提供案件编号，并解释调查的下一步吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003725",
    "source": "Review11 Scene 209"
  },
  {
    "type": "word",
    "front": "nonfarm payrolls",
    "meaning": "美国非农就业人数变化",
    "example": "",
    "weight": 3,
    "id": "sw-003726",
    "source": "Review11 Scene 210"
  },
  {
    "type": "word",
    "front": "consensus forecast",
    "meaning": "市场或分析师一致预测",
    "example": "",
    "weight": 3,
    "id": "sw-003727",
    "source": "Review11 Scene 210"
  },
  {
    "type": "word",
    "front": "beat expectations",
    "meaning": "公布数据好于预期",
    "example": "",
    "weight": 3,
    "id": "sw-003728",
    "source": "Review11 Scene 210"
  },
  {
    "type": "word",
    "front": "unemployment rate",
    "meaning": "失业率",
    "example": "",
    "weight": 3,
    "id": "sw-003729",
    "source": "Review11 Scene 210"
  },
  {
    "type": "word",
    "front": "upward revision",
    "meaning": "对之前数据进行上修",
    "example": "",
    "weight": 3,
    "id": "sw-003730",
    "source": "Review11 Scene 210"
  },
  {
    "type": "word",
    "front": "labour-market resilience",
    "meaning": "劳动力市场韧性",
    "example": "",
    "weight": 3,
    "id": "sw-003731",
    "source": "Review11 Scene 210"
  },
  {
    "type": "word",
    "front": "labour-force participation rate",
    "meaning": "劳动参与率",
    "example": "",
    "weight": 3,
    "id": "sw-003732",
    "source": "Review11 Scene 210"
  },
  {
    "type": "word",
    "front": "underemployment",
    "meaning": "就业不足",
    "example": "",
    "weight": 3,
    "id": "sw-003733",
    "source": "Review11 Scene 210"
  },
  {
    "type": "word",
    "front": "wage growth",
    "meaning": "工资增长",
    "example": "",
    "weight": 3,
    "id": "sw-003734",
    "source": "Review11 Scene 210"
  },
  {
    "type": "word",
    "front": "Treasury yield",
    "meaning": "美国国债收益率",
    "example": "",
    "weight": 3,
    "id": "sw-003735",
    "source": "Review11 Scene 210"
  },
  {
    "type": "word",
    "front": "hawkish tilt",
    "meaning": "货币政策预期向鹰派方向变化",
    "example": "",
    "weight": 3,
    "id": "sw-003736",
    "source": "Review11 Scene 210"
  },
  {
    "type": "word",
    "front": "rate hike",
    "meaning": "加息",
    "example": "",
    "weight": 3,
    "id": "sw-003737",
    "source": "Review11 Scene 210"
  },
  {
    "type": "word",
    "front": "market-implied probability",
    "meaning": "根据市场价格推算的事件概率",
    "example": "",
    "weight": 3,
    "id": "sw-003738",
    "source": "Review11 Scene 210"
  },
  {
    "type": "word",
    "front": "inflation print",
    "meaning": "某次公布的通胀数据",
    "example": "",
    "weight": 3,
    "id": "sw-003739",
    "source": "Review11 Scene 210"
  },
  {
    "type": "word",
    "front": "upside surprise",
    "meaning": "公布结果意外高于预期",
    "example": "",
    "weight": 3,
    "id": "sw-003740",
    "source": "Review11 Scene 210"
  },
  {
    "type": "word",
    "front": "discount rate",
    "meaning": "贴现率",
    "example": "",
    "weight": 3,
    "id": "sw-003741",
    "source": "Review11 Scene 210"
  },
  {
    "type": "word",
    "front": "present value",
    "meaning": "现值",
    "example": "",
    "weight": 3,
    "id": "sw-003742",
    "source": "Review11 Scene 210"
  },
  {
    "type": "word",
    "front": "a tug of war",
    "meaning": "两种力量相互拉扯、争夺主导",
    "example": "",
    "weight": 3,
    "id": "sw-003743",
    "source": "Review11 Scene 210"
  },
  {
    "type": "sentence",
    "front": "There's a tug of war between stronger earnings expectations and higher discount rates.",
    "meaning": "更强的盈利预期与更高的贴现率正在相互拉扯。",
    "example": "",
    "weight": 3,
    "id": "sw-003744",
    "source": "Review11 Scene 210"
  },
  {
    "type": "sentence",
    "front": "The jobs report beat expectations, but that doesn't automatically mean stocks will rise.",
    "meaning": "就业数据超出预期，但这不意味着股票一定上涨。",
    "example": "",
    "weight": 3,
    "id": "sw-003745",
    "source": "Review11 Scene 210"
  },
  {
    "type": "word",
    "front": "planning fallacy",
    "meaning": "计划谬误，系统性低估完成任务所需时间",
    "example": "",
    "weight": 3,
    "id": "sw-003746",
    "source": "Review11 Scene 211"
  },
  {
    "type": "word",
    "front": "overly optimistic",
    "meaning": "过度乐观的",
    "example": "",
    "weight": 3,
    "id": "sw-003747",
    "source": "Review11 Scene 211"
  },
  {
    "type": "word",
    "front": "best-case scenario",
    "meaning": "最理想情况",
    "example": "",
    "weight": 3,
    "id": "sw-003748",
    "source": "Review11 Scene 211"
  },
  {
    "type": "word",
    "front": "hidden steps",
    "meaning": "一开始容易忽略的工作环节",
    "example": "",
    "weight": 3,
    "id": "sw-003749",
    "source": "Review11 Scene 211"
  },
  {
    "type": "word",
    "front": "scope creep",
    "meaning": "需求范围逐渐扩大",
    "example": "",
    "weight": 3,
    "id": "sw-003750",
    "source": "Review11 Scene 211"
  },
  {
    "type": "word",
    "front": "task dependency",
    "meaning": "任务之间的依赖关系",
    "example": "",
    "weight": 3,
    "id": "sw-003751",
    "source": "Review11 Scene 211"
  },
  {
    "type": "word",
    "front": "cascading delay",
    "meaning": "连锁延误",
    "example": "",
    "weight": 3,
    "id": "sw-003752",
    "source": "Review11 Scene 211"
  },
  {
    "type": "word",
    "front": "unexpected setback",
    "meaning": "意外阻碍或挫折",
    "example": "",
    "weight": 3,
    "id": "sw-003753",
    "source": "Review11 Scene 211"
  },
  {
    "type": "word",
    "front": "time sink",
    "meaning": "特别耗费时间的事情",
    "example": "",
    "weight": 3,
    "id": "sw-003754",
    "source": "Review11 Scene 211"
  },
  {
    "type": "word",
    "front": "margin for error",
    "meaning": "容错空间、估算余地",
    "example": "",
    "weight": 3,
    "id": "sw-003755",
    "source": "Review11 Scene 211"
  },
  {
    "type": "word",
    "front": "contingency buffer",
    "meaning": "为意外预留的时间或资源",
    "example": "",
    "weight": 3,
    "id": "sw-003756",
    "source": "Review11 Scene 211"
  },
  {
    "type": "word",
    "front": "build in some slack",
    "meaning": "在日程中有意识地预留弹性",
    "example": "",
    "weight": 3,
    "id": "sw-003757",
    "source": "Review11 Scene 211"
  },
  {
    "type": "word",
    "front": "competing priorities",
    "meaning": "相互争夺时间的不同重要事项",
    "example": "",
    "weight": 3,
    "id": "sw-003758",
    "source": "Review11 Scene 211"
  },
  {
    "type": "word",
    "front": "realistic timeline",
    "meaning": "现实可行的时间安排",
    "example": "",
    "weight": 3,
    "id": "sw-003759",
    "source": "Review11 Scene 211"
  },
  {
    "type": "word",
    "front": "past benchmark",
    "meaning": "过去类似项目的实际参考基准",
    "example": "",
    "weight": 3,
    "id": "sw-003760",
    "source": "Review11 Scene 211"
  },
  {
    "type": "word",
    "front": "reference-class forecasting",
    "meaning": "利用类似历史项目结果进行预测",
    "example": "",
    "weight": 3,
    "id": "sw-003761",
    "source": "Review11 Scene 211"
  },
  {
    "type": "word",
    "front": "time audit",
    "meaning": "记录并分析时间的实际用法",
    "example": "",
    "weight": 3,
    "id": "sw-003762",
    "source": "Review11 Scene 211"
  },
  {
    "type": "word",
    "front": "overrun the schedule",
    "meaning": "实际耗时超出原定计划",
    "example": "",
    "weight": 3,
    "id": "sw-003763",
    "source": "Review11 Scene 211"
  },
  {
    "type": "sentence",
    "front": "My original estimate was overly optimistic because I overlooked several hidden steps.",
    "meaning": "我最初的估算过于乐观，因为忽略了几个隐藏环节。",
    "example": "",
    "weight": 3,
    "id": "sw-003764",
    "source": "Review11 Scene 211"
  },
  {
    "type": "sentence",
    "front": "We should build some slack into the schedule to allow for unexpected setbacks.",
    "meaning": "我们应该在日程中预留弹性，以应对意外困难。",
    "example": "",
    "weight": 3,
    "id": "sw-003765",
    "source": "Review11 Scene 211"
  },
  {
    "type": "word",
    "front": "industrial action",
    "meaning": "劳资集体行动，例如罢工",
    "example": "",
    "weight": 3,
    "id": "sw-003766",
    "source": "Review11 Scene 212"
  },
  {
    "type": "word",
    "front": "rail strike",
    "meaning": "铁路罢工",
    "example": "",
    "weight": 3,
    "id": "sw-003767",
    "source": "Review11 Scene 212"
  },
  {
    "type": "word",
    "front": "service disruption notice",
    "meaning": "交通服务中断通知",
    "example": "",
    "weight": 3,
    "id": "sw-003768",
    "source": "Review11 Scene 212"
  },
  {
    "type": "word",
    "front": "reduced timetable",
    "meaning": "缩减后的交通时刻表",
    "example": "",
    "weight": 3,
    "id": "sw-003769",
    "source": "Review11 Scene 212"
  },
  {
    "type": "word",
    "front": "service suspension",
    "meaning": "服务暂停运行",
    "example": "",
    "weight": 3,
    "id": "sw-003770",
    "source": "Review11 Scene 212"
  },
  {
    "type": "word",
    "front": "rail replacement bus",
    "meaning": "铁路替代巴士",
    "example": "",
    "weight": 3,
    "id": "sw-003771",
    "source": "Review11 Scene 212"
  },
  {
    "type": "word",
    "front": "replacement coach",
    "meaning": "替代铁路服务的长途大巴",
    "example": "",
    "weight": 3,
    "id": "sw-003772",
    "source": "Review11 Scene 212"
  },
  {
    "type": "word",
    "front": "temporary boarding point",
    "meaning": "临时上车地点",
    "example": "",
    "weight": 3,
    "id": "sw-003773",
    "source": "Review11 Scene 212"
  },
  {
    "type": "word",
    "front": "coach stand",
    "meaning": "大巴站台或指定发车站位",
    "example": "",
    "weight": 3,
    "id": "sw-003774",
    "source": "Review11 Scene 212"
  },
  {
    "type": "word",
    "front": "ticket acceptance",
    "meaning": "其他交通服务对原车票的接受安排",
    "example": "",
    "weight": 3,
    "id": "sw-003775",
    "source": "Review11 Scene 212"
  },
  {
    "type": "word",
    "front": "alternative operator",
    "meaning": "可以提供替代服务的运营商",
    "example": "",
    "weight": 3,
    "id": "sw-003776",
    "source": "Review11 Scene 212"
  },
  {
    "type": "word",
    "front": "revised timetable",
    "meaning": "调整后的运行时刻表",
    "example": "",
    "weight": 3,
    "id": "sw-003777",
    "source": "Review11 Scene 212"
  },
  {
    "type": "word",
    "front": "journey planner",
    "meaning": "出行规划工具",
    "example": "",
    "weight": 3,
    "id": "sw-003778",
    "source": "Review11 Scene 212"
  },
  {
    "type": "word",
    "front": "direct service",
    "meaning": "无需中途换乘的直达服务",
    "example": "",
    "weight": 3,
    "id": "sw-003779",
    "source": "Review11 Scene 212"
  },
  {
    "type": "word",
    "front": "onward connection",
    "meaning": "当前旅程之后的下一段换乘",
    "example": "",
    "weight": 3,
    "id": "sw-003780",
    "source": "Review11 Scene 212"
  },
  {
    "type": "word",
    "front": "revised itinerary",
    "meaning": "调整后的完整行程安排",
    "example": "",
    "weight": 3,
    "id": "sw-003781",
    "source": "Review11 Scene 212"
  },
  {
    "type": "word",
    "front": "journey abandonment",
    "meaning": "因交通异常而放弃原定行程",
    "example": "",
    "weight": 3,
    "id": "sw-003782",
    "source": "Review11 Scene 212"
  },
  {
    "type": "word",
    "front": "travel disruption",
    "meaning": "交通中断、正常出行受扰",
    "example": "",
    "weight": 3,
    "id": "sw-003783",
    "source": "Review11 Scene 212"
  },
  {
    "type": "sentence",
    "front": "My train was cancelled, and I need to check whether my ticket is valid on the replacement coach.",
    "meaning": "我的火车取消了，我需要确认原车票是否适用于替代大巴。",
    "example": "",
    "weight": 3,
    "id": "sw-003784",
    "source": "Review11 Scene 212"
  },
  {
    "type": "sentence",
    "front": "The revised timetable means I'll probably miss my onward connection.",
    "meaning": "调整后的时刻表意味着我很可能赶不上下一段换乘。",
    "example": "",
    "weight": 3,
    "id": "sw-003785",
    "source": "Review11 Scene 212"
  },
  {
    "type": "word",
    "front": "fog bank",
    "meaning": "一大片浓雾",
    "example": "",
    "weight": 3,
    "id": "sw-003786",
    "source": "Review11 Scene 213"
  },
  {
    "type": "word",
    "front": "roll in",
    "meaning": "云、雾或恶劣天气逐渐涌入",
    "example": "",
    "weight": 3,
    "id": "sw-003787",
    "source": "Review11 Scene 213"
  },
  {
    "type": "word",
    "front": "low cloud",
    "meaning": "低云层",
    "example": "",
    "weight": 3,
    "id": "sw-003788",
    "source": "Review11 Scene 213"
  },
  {
    "type": "word",
    "front": "cloud base",
    "meaning": "云底高度",
    "example": "",
    "weight": 3,
    "id": "sw-003789",
    "source": "Review11 Scene 213"
  },
  {
    "type": "word",
    "front": "visibility drops",
    "meaning": "能见度下降",
    "example": "",
    "weight": 3,
    "id": "sw-003790",
    "source": "Review11 Scene 213"
  },
  {
    "type": "word",
    "front": "visibility range",
    "meaning": "能见距离、可视范围",
    "example": "",
    "weight": 3,
    "id": "sw-003791",
    "source": "Review11 Scene 213"
  },
  {
    "type": "word",
    "front": "line of sight",
    "meaning": "从观察点到目标的直接视线",
    "example": "",
    "weight": 3,
    "id": "sw-003792",
    "source": "Review11 Scene 213"
  },
  {
    "type": "word",
    "front": "ridge crest",
    "meaning": "山脊顶部",
    "example": "",
    "weight": 3,
    "id": "sw-003793",
    "source": "Review11 Scene 213"
  },
  {
    "type": "word",
    "front": "steep drop-off",
    "meaning": "地形突然陡降的边缘",
    "example": "",
    "weight": 3,
    "id": "sw-003794",
    "source": "Review11 Scene 213"
  },
  {
    "type": "word",
    "front": "cliff edge",
    "meaning": "悬崖边缘",
    "example": "",
    "weight": 3,
    "id": "sw-003795",
    "source": "Review11 Scene 213"
  },
  {
    "type": "word",
    "front": "disoriented",
    "meaning": "方向感混乱的",
    "example": "",
    "weight": 3,
    "id": "sw-003796",
    "source": "Review11 Scene 213"
  },
  {
    "type": "word",
    "front": "lose your bearings",
    "meaning": "失去方向感",
    "example": "",
    "weight": 3,
    "id": "sw-003797",
    "source": "Review11 Scene 213"
  },
  {
    "type": "word",
    "front": "within earshot",
    "meaning": "处在能互相听见的距离内",
    "example": "",
    "weight": 3,
    "id": "sw-003798",
    "source": "Review11 Scene 213"
  },
  {
    "type": "word",
    "front": "regroup",
    "meaning": "分散的人重新集合",
    "example": "",
    "weight": 3,
    "id": "sw-003799",
    "source": "Review11 Scene 213"
  },
  {
    "type": "word",
    "front": "retreat route",
    "meaning": "撤退路线",
    "example": "",
    "weight": 3,
    "id": "sw-003800",
    "source": "Review11 Scene 213"
  },
  {
    "type": "word",
    "front": "the fog lifts",
    "meaning": "大雾逐渐消散",
    "example": "",
    "weight": 3,
    "id": "sw-003801",
    "source": "Review11 Scene 213"
  },
  {
    "type": "word",
    "front": "a break in the cloud",
    "meaning": "云层短暂散开形成的空隙",
    "example": "",
    "weight": 3,
    "id": "sw-003802",
    "source": "Review11 Scene 213"
  },
  {
    "type": "sentence",
    "front": "We lost our bearings in the fog, so we regrouped and followed a confirmed retreat route.",
    "meaning": "我们在浓雾中失去方向感，于是重新集合，沿确认的撤退路线返回。",
    "example": "",
    "weight": 3,
    "id": "sw-003803",
    "source": "Review11 Scene 213"
  },
  {
    "type": "sentence",
    "front": "Visibility dropped so much that we could barely make out the trail ahead.",
    "meaning": "能见度下降得很严重，我们几乎辨认不出前方步道。",
    "example": "",
    "weight": 3,
    "id": "sw-003804",
    "source": "Review11 Scene 213"
  },
  {
    "type": "word",
    "front": "print job",
    "meaning": "发送给打印机的任务",
    "example": "",
    "weight": 3,
    "id": "sw-003805",
    "source": "Review11 Scene 214"
  },
  {
    "type": "word",
    "front": "print queue",
    "meaning": "等待打印的任务队列",
    "example": "",
    "weight": 3,
    "id": "sw-003806",
    "source": "Review11 Scene 214"
  },
  {
    "type": "word",
    "front": "double-sided printing",
    "meaning": "双面打印",
    "example": "",
    "weight": 3,
    "id": "sw-003807",
    "source": "Review11 Scene 214"
  },
  {
    "type": "word",
    "front": "single-sided printing",
    "meaning": "单面打印",
    "example": "",
    "weight": 3,
    "id": "sw-003808",
    "source": "Review11 Scene 214"
  },
  {
    "type": "word",
    "front": "page orientation",
    "meaning": "页面横向或纵向设置",
    "example": "",
    "weight": 3,
    "id": "sw-003809",
    "source": "Review11 Scene 214"
  },
  {
    "type": "word",
    "front": "page range",
    "meaning": "打印页码范围",
    "example": "",
    "weight": 3,
    "id": "sw-003810",
    "source": "Review11 Scene 214"
  },
  {
    "type": "word",
    "front": "paper tray",
    "meaning": "打印机纸盒、进纸托盘",
    "example": "",
    "weight": 3,
    "id": "sw-003811",
    "source": "Review11 Scene 214"
  },
  {
    "type": "word",
    "front": "misfeed",
    "meaning": "进纸错误",
    "example": "",
    "weight": 3,
    "id": "sw-003812",
    "source": "Review11 Scene 214"
  },
  {
    "type": "word",
    "front": "clear a jam",
    "meaning": "清除卡纸等内部堵塞",
    "example": "",
    "weight": 3,
    "id": "sw-003813",
    "source": "Review11 Scene 214"
  },
  {
    "type": "word",
    "front": "test page",
    "meaning": "测试打印页",
    "example": "",
    "weight": 3,
    "id": "sw-003814",
    "source": "Review11 Scene 214"
  },
  {
    "type": "word",
    "front": "collate",
    "meaning": "逐份按页码正确顺序排列打印件",
    "example": "",
    "weight": 3,
    "id": "sw-003815",
    "source": "Review11 Scene 214"
  },
  {
    "type": "word",
    "front": "scaling",
    "meaning": "打印时对内容进行缩放",
    "example": "",
    "weight": 3,
    "id": "sw-003816",
    "source": "Review11 Scene 214"
  },
  {
    "type": "word",
    "front": "misaligned",
    "meaning": "未正确对齐、位置偏移的",
    "example": "",
    "weight": 3,
    "id": "sw-003817",
    "source": "Review11 Scene 214"
  },
  {
    "type": "word",
    "front": "ink smudge",
    "meaning": "油墨被蹭开的污迹",
    "example": "",
    "weight": 3,
    "id": "sw-003818",
    "source": "Review11 Scene 214"
  },
  {
    "type": "word",
    "front": "staple together",
    "meaning": "用订书钉订在一起",
    "example": "",
    "weight": 3,
    "id": "sw-003819",
    "source": "Review11 Scene 214"
  },
  {
    "type": "word",
    "front": "spiral binding",
    "meaning": "螺旋装订",
    "example": "",
    "weight": 3,
    "id": "sw-003820",
    "source": "Review11 Scene 214"
  },
  {
    "type": "sentence",
    "front": "My print job got stuck in the queue, and I had to clear a paper jam before printing again.",
    "meaning": "我的打印任务卡在队列里，重新打印前还得清除卡纸。",
    "example": "",
    "weight": 3,
    "id": "sw-003821",
    "source": "Review11 Scene 214"
  },
  {
    "type": "sentence",
    "front": "Make sure you enable collation when printing several copies of the report.",
    "meaning": "打印多份报告时，记得启用逐份打印。",
    "example": "",
    "weight": 3,
    "id": "sw-003822",
    "source": "Review11 Scene 214"
  },
  {
    "type": "word",
    "front": "be locked out",
    "meaning": "被锁在门外或无法进入账户",
    "example": "",
    "weight": 3,
    "id": "sw-003823",
    "source": "Review11 Scene 215"
  },
  {
    "type": "word",
    "front": "automatic locking",
    "meaning": "自动上锁机制",
    "example": "",
    "weight": 3,
    "id": "sw-003824",
    "source": "Review11 Scene 215"
  },
  {
    "type": "word",
    "front": "keyring",
    "meaning": "钥匙圈、钥匙串",
    "example": "",
    "weight": 3,
    "id": "sw-003825",
    "source": "Review11 Scene 215"
  },
  {
    "type": "word",
    "front": "spare key",
    "meaning": "备用钥匙",
    "example": "",
    "weight": 3,
    "id": "sw-003826",
    "source": "Review11 Scene 215"
  },
  {
    "type": "word",
    "front": "spare set",
    "meaning": "备用的一整套钥匙或物品",
    "example": "",
    "weight": 3,
    "id": "sw-003827",
    "source": "Review11 Scene 215"
  },
  {
    "type": "word",
    "front": "key fob",
    "meaning": "电子门禁钥匙扣",
    "example": "",
    "weight": 3,
    "id": "sw-003828",
    "source": "Review11 Scene 215"
  },
  {
    "type": "word",
    "front": "access badge",
    "meaning": "门禁卡、身份识别卡",
    "example": "",
    "weight": 3,
    "id": "sw-003829",
    "source": "Review11 Scene 215"
  },
  {
    "type": "word",
    "front": "caretaker",
    "meaning": "楼宇照看、管理或维修人员",
    "example": "",
    "weight": 3,
    "id": "sw-003830",
    "source": "Review11 Scene 215"
  },
  {
    "type": "word",
    "front": "identity verification",
    "meaning": "身份核实",
    "example": "",
    "weight": 3,
    "id": "sw-003831",
    "source": "Review11 Scene 215"
  },
  {
    "type": "word",
    "front": "let someone in",
    "meaning": "开门让某人进入",
    "example": "",
    "weight": 3,
    "id": "sw-003832",
    "source": "Review11 Scene 215"
  },
  {
    "type": "word",
    "front": "after-hours service",
    "meaning": "非正常营业时间提供的服务",
    "example": "",
    "weight": 3,
    "id": "sw-003833",
    "source": "Review11 Scene 215"
  },
  {
    "type": "word",
    "front": "call-out fee",
    "meaning": "维修人员专程上门的服务费",
    "example": "",
    "weight": 3,
    "id": "sw-003834",
    "source": "Review11 Scene 215"
  },
  {
    "type": "word",
    "front": "lock cylinder",
    "meaning": "锁芯",
    "example": "",
    "weight": 3,
    "id": "sw-003835",
    "source": "Review11 Scene 215"
  },
  {
    "type": "word",
    "front": "rekey a lock",
    "meaning": "重新配置锁芯使旧钥匙失效",
    "example": "",
    "weight": 3,
    "id": "sw-003836",
    "source": "Review11 Scene 215"
  },
  {
    "type": "word",
    "front": "replacement key",
    "meaning": "补办的钥匙",
    "example": "",
    "weight": 3,
    "id": "sw-003837",
    "source": "Review11 Scene 215"
  },
  {
    "type": "word",
    "front": "key cutting",
    "meaning": "配钥匙、复制钥匙服务",
    "example": "",
    "weight": 3,
    "id": "sw-003838",
    "source": "Review11 Scene 215"
  },
  {
    "type": "word",
    "front": "authorise access",
    "meaning": "批准某人进入的权限",
    "example": "",
    "weight": 3,
    "id": "sw-003839",
    "source": "Review11 Scene 215"
  },
  {
    "type": "sentence",
    "front": "I've accidentally locked myself out. Could someone let me in after verifying my identity?",
    "meaning": "我不小心把自己锁在门外了。核实身份后有人能帮我开门吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003840",
    "source": "Review11 Scene 215"
  },
  {
    "type": "sentence",
    "front": "Is there an after-hours call-out fee, or can the caretaker use a spare key?",
    "meaning": "非营业时间会收取上门费吗，还是管理员能用备用钥匙开门？",
    "example": "",
    "weight": 3,
    "id": "sw-003841",
    "source": "Review11 Scene 215"
  },
  {
    "type": "word",
    "front": "geopolitical risk premium",
    "meaning": "地缘政治风险溢价",
    "example": "",
    "weight": 3,
    "id": "sw-003842",
    "source": "Review11 Scene 216"
  },
  {
    "type": "word",
    "front": "de-escalation",
    "meaning": "局势缓和、冲突降级",
    "example": "",
    "weight": 3,
    "id": "sw-003843",
    "source": "Review11 Scene 216"
  },
  {
    "type": "word",
    "front": "peace talks",
    "meaning": "和平谈判",
    "example": "",
    "weight": 3,
    "id": "sw-003844",
    "source": "Review11 Scene 216"
  },
  {
    "type": "word",
    "front": "supply disruption",
    "meaning": "供应中断",
    "example": "",
    "weight": 3,
    "id": "sw-003845",
    "source": "Review11 Scene 216"
  },
  {
    "type": "word",
    "front": "shipping route",
    "meaning": "航运路线",
    "example": "",
    "weight": 3,
    "id": "sw-003846",
    "source": "Review11 Scene 216"
  },
  {
    "type": "word",
    "front": "energy market",
    "meaning": "能源市场",
    "example": "",
    "weight": 3,
    "id": "sw-003847",
    "source": "Review11 Scene 216"
  },
  {
    "type": "word",
    "front": "oil benchmark",
    "meaning": "油价基准",
    "example": "",
    "weight": 3,
    "id": "sw-003848",
    "source": "Review11 Scene 216"
  },
  {
    "type": "word",
    "front": "Brent crude",
    "meaning": "布伦特原油",
    "example": "",
    "weight": 3,
    "id": "sw-003849",
    "source": "Review11 Scene 216"
  },
  {
    "type": "word",
    "front": "risk appetite",
    "meaning": "投资者风险偏好",
    "example": "",
    "weight": 3,
    "id": "sw-003850",
    "source": "Review11 Scene 216"
  },
  {
    "type": "word",
    "front": "risk-off sentiment",
    "meaning": "市场避险情绪",
    "example": "",
    "weight": 3,
    "id": "sw-003851",
    "source": "Review11 Scene 216"
  },
  {
    "type": "word",
    "front": "relief rally",
    "meaning": "担忧缓解后的短暂反弹",
    "example": "",
    "weight": 3,
    "id": "sw-003852",
    "source": "Review11 Scene 216"
  },
  {
    "type": "word",
    "front": "broad-based rebound",
    "meaning": "多个板块共同参与的广泛反弹",
    "example": "",
    "weight": 3,
    "id": "sw-003853",
    "source": "Review11 Scene 216"
  },
  {
    "type": "word",
    "front": "energy-intensive",
    "meaning": "高耗能的",
    "example": "",
    "weight": 3,
    "id": "sw-003854",
    "source": "Review11 Scene 216"
  },
  {
    "type": "word",
    "front": "input costs",
    "meaning": "生产或服务投入成本",
    "example": "",
    "weight": 3,
    "id": "sw-003855",
    "source": "Review11 Scene 216"
  },
  {
    "type": "word",
    "front": "margin pressure",
    "meaning": "利润率受到挤压的压力",
    "example": "",
    "weight": 3,
    "id": "sw-003856",
    "source": "Review11 Scene 216"
  },
  {
    "type": "word",
    "front": "earnings catalyst",
    "meaning": "可能引发股价重估的业绩事件",
    "example": "",
    "weight": 3,
    "id": "sw-003857",
    "source": "Review11 Scene 216"
  },
  {
    "type": "word",
    "front": "staying power",
    "meaning": "某个趋势持续下去的能力",
    "example": "",
    "weight": 3,
    "id": "sw-003858",
    "source": "Review11 Scene 216"
  },
  {
    "type": "word",
    "front": "headline risk",
    "meaning": "突发新闻引发市场波动的风险",
    "example": "",
    "weight": 3,
    "id": "sw-003859",
    "source": "Review11 Scene 216"
  },
  {
    "type": "sentence",
    "front": "A fall in oil prices doesn't automatically mean stronger stock returns; the reason behind the decline matters.",
    "meaning": "油价下降不一定意味着股票回报更高；关键在于油价为什么下降。",
    "example": "",
    "weight": 3,
    "id": "sw-003860",
    "source": "Review11 Scene 216"
  },
  {
    "type": "sentence",
    "front": "I would distinguish a temporary relief rally from a lasting improvement in fundamentals.",
    "meaning": "我会区分暂时性的情绪反弹与基本面的持久改善。",
    "example": "",
    "weight": 3,
    "id": "sw-003861",
    "source": "Review11 Scene 216"
  },
  {
    "type": "word",
    "front": "probability of precipitation",
    "meaning": "降水概率",
    "example": "",
    "weight": 3,
    "id": "sw-003862",
    "source": "Review11 Scene 217"
  },
  {
    "type": "word",
    "front": "forecast horizon",
    "meaning": "天气预报向未来预测的时间跨度",
    "example": "",
    "weight": 3,
    "id": "sw-003863",
    "source": "Review11 Scene 217"
  },
  {
    "type": "word",
    "front": "forecast confidence",
    "meaning": "天气预测的可信度",
    "example": "",
    "weight": 3,
    "id": "sw-003864",
    "source": "Review11 Scene 217"
  },
  {
    "type": "word",
    "front": "weather model",
    "meaning": "天气模拟模型",
    "example": "",
    "weight": 3,
    "id": "sw-003865",
    "source": "Review11 Scene 217"
  },
  {
    "type": "word",
    "front": "model run",
    "meaning": "模型的一次计算运行及结果",
    "example": "",
    "weight": 3,
    "id": "sw-003866",
    "source": "Review11 Scene 217"
  },
  {
    "type": "word",
    "front": "ensemble forecast",
    "meaning": "集合预报，运行多组模拟",
    "example": "",
    "weight": 3,
    "id": "sw-003867",
    "source": "Review11 Scene 217"
  },
  {
    "type": "word",
    "front": "ensemble spread",
    "meaning": "集合预测结果的分散程度",
    "example": "",
    "weight": 3,
    "id": "sw-003868",
    "source": "Review11 Scene 217"
  },
  {
    "type": "word",
    "front": "initial conditions",
    "meaning": "模型计算的初始条件",
    "example": "",
    "weight": 3,
    "id": "sw-003869",
    "source": "Review11 Scene 217"
  },
  {
    "type": "word",
    "front": "atmospheric conditions",
    "meaning": "温度、气压、湿度等大气条件",
    "example": "",
    "weight": 3,
    "id": "sw-003870",
    "source": "Review11 Scene 217"
  },
  {
    "type": "word",
    "front": "nowcasting",
    "meaning": "临近预报，针对很短时间内的天气",
    "example": "",
    "weight": 3,
    "id": "sw-003871",
    "source": "Review11 Scene 217"
  },
  {
    "type": "word",
    "front": "localised shower",
    "meaning": "局部阵雨",
    "example": "",
    "weight": 3,
    "id": "sw-003872",
    "source": "Review11 Scene 217"
  },
  {
    "type": "word",
    "front": "rain band",
    "meaning": "带状降雨区域",
    "example": "",
    "weight": 3,
    "id": "sw-003873",
    "source": "Review11 Scene 217"
  },
  {
    "type": "word",
    "front": "model resolution",
    "meaning": "天气模型的空间分辨率",
    "example": "",
    "weight": 3,
    "id": "sw-003874",
    "source": "Review11 Scene 217"
  },
  {
    "type": "word",
    "front": "microclimate",
    "meaning": "局部小气候",
    "example": "",
    "weight": 3,
    "id": "sw-003875",
    "source": "Review11 Scene 217"
  },
  {
    "type": "word",
    "front": "rain gauge",
    "meaning": "雨量计",
    "example": "",
    "weight": 3,
    "id": "sw-003876",
    "source": "Review11 Scene 217"
  },
  {
    "type": "word",
    "front": "observation network",
    "meaning": "多个观测站点构成的观测网络",
    "example": "",
    "weight": 3,
    "id": "sw-003877",
    "source": "Review11 Scene 217"
  },
  {
    "type": "word",
    "front": "forecast update cycle",
    "meaning": "预报或模型定期更新的周期",
    "example": "",
    "weight": 3,
    "id": "sw-003878",
    "source": "Review11 Scene 217"
  },
  {
    "type": "word",
    "front": "forecast uncertainty",
    "meaning": "天气预报的不确定性",
    "example": "",
    "weight": 3,
    "id": "sw-003879",
    "source": "Review11 Scene 217"
  },
  {
    "type": "sentence",
    "front": "A forty-percent chance of rain doesn't mean it will rain for forty percent of the day.",
    "meaning": "40%的降雨概率不意味着当天40%的时间都会下雨。",
    "example": "",
    "weight": 3,
    "id": "sw-003880",
    "source": "Review11 Scene 217"
  },
  {
    "type": "sentence",
    "front": "The ensemble spread is wide, so we should allow for greater forecast uncertainty.",
    "meaning": "集合预报结果分散较大，因此我们应考虑更高的预测不确定性。",
    "example": "",
    "weight": 3,
    "id": "sw-003881",
    "source": "Review11 Scene 217"
  },
  {
    "type": "word",
    "front": "self-check-in",
    "meaning": "自助办理入住",
    "example": "",
    "weight": 3,
    "id": "sw-003882",
    "source": "Review11 Scene 218"
  },
  {
    "type": "word",
    "front": "entry instructions",
    "meaning": "进入住宿设施的具体说明",
    "example": "",
    "weight": 3,
    "id": "sw-003883",
    "source": "Review11 Scene 218"
  },
  {
    "type": "word",
    "front": "access code",
    "meaning": "门禁密码",
    "example": "",
    "weight": 3,
    "id": "sw-003884",
    "source": "Review11 Scene 218"
  },
  {
    "type": "word",
    "front": "keypad",
    "meaning": "数字键盘",
    "example": "",
    "weight": 3,
    "id": "sw-003885",
    "source": "Review11 Scene 218"
  },
  {
    "type": "word",
    "front": "keyless entry",
    "meaning": "无钥匙进入系统",
    "example": "",
    "weight": 3,
    "id": "sw-003886",
    "source": "Review11 Scene 218"
  },
  {
    "type": "word",
    "front": "activate a code",
    "meaning": "使密码开始有效",
    "example": "",
    "weight": 3,
    "id": "sw-003887",
    "source": "Review11 Scene 218"
  },
  {
    "type": "word",
    "front": "code expiry",
    "meaning": "密码过期或失效时间",
    "example": "",
    "weight": 3,
    "id": "sw-003888",
    "source": "Review11 Scene 218"
  },
  {
    "type": "word",
    "front": "emergency helpline",
    "meaning": "紧急服务热线",
    "example": "",
    "weight": 3,
    "id": "sw-003889",
    "source": "Review11 Scene 218"
  },
  {
    "type": "word",
    "front": "booking reference",
    "meaning": "预订识别编号",
    "example": "",
    "weight": 3,
    "id": "sw-003890",
    "source": "Review11 Scene 218"
  },
  {
    "type": "word",
    "front": "temporary access code",
    "meaning": "临时门禁密码",
    "example": "",
    "weight": 3,
    "id": "sw-003891",
    "source": "Review11 Scene 218"
  },
  {
    "type": "word",
    "front": "synchronise",
    "meaning": "使设备、系统或数据同步",
    "example": "",
    "weight": 3,
    "id": "sw-003892",
    "source": "Review11 Scene 218"
  },
  {
    "type": "word",
    "front": "override code",
    "meaning": "授权情况下覆盖普通设置的管理密码",
    "example": "",
    "weight": 3,
    "id": "sw-003893",
    "source": "Review11 Scene 218"
  },
  {
    "type": "word",
    "front": "lobby",
    "meaning": "入口大厅",
    "example": "",
    "weight": 3,
    "id": "sw-003894",
    "source": "Review11 Scene 218"
  },
  {
    "type": "word",
    "front": "lockbox",
    "meaning": "上锁的钥匙盒或保管盒",
    "example": "",
    "weight": 3,
    "id": "sw-003895",
    "source": "Review11 Scene 218"
  },
  {
    "type": "word",
    "front": "room assignment",
    "meaning": "分配给旅客的具体房间",
    "example": "",
    "weight": 3,
    "id": "sw-003896",
    "source": "Review11 Scene 218"
  },
  {
    "type": "word",
    "front": "check-out time",
    "meaning": "退房时间",
    "example": "",
    "weight": 3,
    "id": "sw-003897",
    "source": "Review11 Scene 218"
  },
  {
    "type": "word",
    "front": "late-arrival arrangement",
    "meaning": "深夜抵达的入住安排",
    "example": "",
    "weight": 3,
    "id": "sw-003898",
    "source": "Review11 Scene 218"
  },
  {
    "type": "sentence",
    "front": "The access code isn't working, and the reception desk is unattended.",
    "meaning": "门禁密码无法使用，而且接待处没有工作人员。",
    "example": "",
    "weight": 3,
    "id": "sw-003899",
    "source": "Review11 Scene 218"
  },
  {
    "type": "sentence",
    "front": "Could you issue a temporary access code and confirm my room assignment?",
    "meaning": "你能提供临时门禁密码，并确认我分配到的房间吗？",
    "example": "",
    "weight": 3,
    "id": "sw-003900",
    "source": "Review11 Scene 218"
  },
  {
    "type": "word",
    "front": "alpine pasture",
    "meaning": "高山牧场",
    "example": "",
    "weight": 3,
    "id": "sw-003901",
    "source": "Review11 Scene 219"
  },
  {
    "type": "word",
    "front": "livestock guardian dog",
    "meaning": "牲畜护卫犬",
    "example": "",
    "weight": 3,
    "id": "sw-003902",
    "source": "Review11 Scene 219"
  },
  {
    "type": "word",
    "front": "working dog",
    "meaning": "工作犬",
    "example": "",
    "weight": 3,
    "id": "sw-003903",
    "source": "Review11 Scene 219"
  },
  {
    "type": "word",
    "front": "flock",
    "meaning": "一群绵羊或鸟",
    "example": "",
    "weight": 3,
    "id": "sw-003904",
    "source": "Review11 Scene 219"
  },
  {
    "type": "word",
    "front": "herd",
    "meaning": "一群牛、鹿或其他牲畜",
    "example": "",
    "weight": 3,
    "id": "sw-003905",
    "source": "Review11 Scene 219"
  },
  {
    "type": "word",
    "front": "grazing",
    "meaning": "吃草、放牧",
    "example": "",
    "weight": 3,
    "id": "sw-003906",
    "source": "Review11 Scene 219"
  },
  {
    "type": "word",
    "front": "pasture warning sign",
    "meaning": "牧场警示牌",
    "example": "",
    "weight": 3,
    "id": "sw-003907",
    "source": "Review11 Scene 219"
  },
  {
    "type": "word",
    "front": "territorial behaviour",
    "meaning": "领地性行为",
    "example": "",
    "weight": 3,
    "id": "sw-003908",
    "source": "Review11 Scene 219"
  },
  {
    "type": "word",
    "front": "defensive posture",
    "meaning": "防御性姿态",
    "example": "",
    "weight": 3,
    "id": "sw-003909",
    "source": "Review11 Scene 219"
  },
  {
    "type": "word",
    "front": "bark at someone",
    "meaning": "朝某人吠叫",
    "example": "",
    "weight": 3,
    "id": "sw-003910",
    "source": "Review11 Scene 219"
  },
  {
    "type": "word",
    "front": "approach cautiously",
    "meaning": "谨慎接近",
    "example": "",
    "weight": 3,
    "id": "sw-003911",
    "source": "Review11 Scene 219"
  },
  {
    "type": "word",
    "front": "give something a wide berth",
    "meaning": "远远绕开、与某物保持距离",
    "example": "",
    "weight": 3,
    "id": "sw-003912",
    "source": "Review11 Scene 219"
  },
  {
    "type": "word",
    "front": "avoid direct eye contact",
    "meaning": "避免持续直接盯着眼睛",
    "example": "",
    "weight": 3,
    "id": "sw-003913",
    "source": "Review11 Scene 219"
  },
  {
    "type": "word",
    "front": "provoke an animal",
    "meaning": "刺激、激怒动物",
    "example": "",
    "weight": 3,
    "id": "sw-003914",
    "source": "Review11 Scene 219"
  },
  {
    "type": "word",
    "front": "pasture gate",
    "meaning": "牧场栅栏门",
    "example": "",
    "weight": 3,
    "id": "sw-003915",
    "source": "Review11 Scene 219"
  },
  {
    "type": "word",
    "front": "shepherd",
    "meaning": "牧羊人",
    "example": "",
    "weight": 3,
    "id": "sw-003916",
    "source": "Review11 Scene 219"
  },
  {
    "type": "sentence",
    "front": "We decided to give the flock a wide berth rather than risk provoking the guardian dog.",
    "meaning": "我们决定远远绕开羊群，而不是冒险刺激护卫犬。",
    "example": "",
    "weight": 3,
    "id": "sw-003917",
    "source": "Review11 Scene 219"
  },
  {
    "type": "sentence",
    "front": "We couldn't find a safe route around the pasture, so we retraced our steps.",
    "meaning": "我们找不到安全绕开牧场的路线，所以原路返回。",
    "example": "",
    "weight": 3,
    "id": "sw-003918",
    "source": "Review11 Scene 219"
  }
];

window.VOCABULARY = VOCABULARY;
