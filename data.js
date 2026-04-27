const PROMPT_DATA = {
  "镜头语言": [
    {
      "name": "匹配转场",
      "english": "Match cut transition, graphic similarity, 2001 bone-to-space, visual rhyme, seamless connection, clever edit, continuity bridge",
      "chinese": "匹配转场，图形相似性，2001骨头到太空，视觉韵脚，无缝连接，巧妙剪辑，连续桥梁"
    },
    {
      "name": "慢动作诗意",
      "english": "Slow motion poetry, extended time, graceful detail, Sam Peckinpah violence, temporal dilation, beauty in deceleration, poetic duration",
      "chinese": "慢动作诗意，延展时间，优雅细节，山姆·佩金法暴力，时间膨胀，减速之美，诗意时长"
    },
    {
      "name": "蒙太奇剪辑",
      "english": "Montage editing sequence, rapid juxtaposition, Soviet style, visual rhythm, compressed time, associative cutting, Eisenstein collision",
      "chinese": "蒙太奇剪辑序列，快速并置，苏联风格，视觉节奏，压缩时间，联想剪辑，爱森斯坦碰撞"
    },
    {
      "name": "跳切断裂",
      "english": "Jump cut discontinuity, Godard rupture, temporal fracture, self-conscious editing, breaking illusion, New Wave style, jarring transition",
      "chinese": "跳切断裂，戈达尔断裂，时间破碎，自觉剪辑，打破幻觉，新浪潮风格，刺耳过渡"
    },
    {
      "name": "长镜头纪实",
      "english": "Long take continuous shot, unbroken sequence, real-time observation, Tarkovsky meditation, temporal authenticity, no cuts, immersive duration",
      "chinese": "长镜头纪实，不间断序列，实时观察，塔可夫斯基冥想，时间真实性，无剪辑，沉浸时长"
    },
    {
      "name": "闪回叙事",
      "english": "Flashback narrative, temporal jump, memory sequence, past intrusion, sepia or desaturated, subjective time, non-linear story",
      "chinese": "闪回叙事，时间跳跃，记忆序列，过去入侵，棕褐或去饱和，主观时间，非线性故事"
    }
  ],
  "电影类型": [
    {
      "name": "动作大片",
      "english": "Action blockbuster, explosive set pieces, dynamic combat, high-speed chase, visceral impact, Michael Bay scale, adrenaline rush",
      "chinese": "动作大片，爆炸场面，动态战斗，高速追逐，本能冲击，迈克尔·贝规模，肾上腺素飙升"
    },
    {
      "name": "奇幻史诗",
      "english": "Fantasy epic, magical realms, mythical creatures, enchanted forests, ancient prophecies, Lord of the Rings scale, sword and sorcery",
      "chinese": "奇幻史诗，魔法王国，神话生物，迷雾森林，古老预言，魔戒尺度，剑与魔法"
    },
    {
      "name": "恐怖惊悚",
      "english": "Horror thriller atmosphere, creeping dread, supernatural menace, isolation terror, psychological horror, jump-scare setup, sinister quiet",
      "chinese": "恐怖惊悚氛围，蔓延恐惧，超自然威胁，孤立恐怖，心理惊悚，跳跃惊吓设置，邪恶寂静"
    },
    {
      "name": "悬疑推理",
      "english": "Mystery thriller, layered clues, unreliable narrator, dark secrets revealed, investigation tension, whodunit atmosphere, paranoid suspicion",
      "chinese": "悬疑推理，层层线索，不可靠叙述者，黑暗秘密揭示，调查张力，侦探氛围，偏执猜疑"
    },
    {
      "name": "战争史诗",
      "english": "War epic, battlefield chaos, military grandeur, brotherhood in combat, Saving Private Ryan intensity, historical weight, heroic sacrifice",
      "chinese": "战争史诗，战场混乱，军事宏大，战友情谊，拯救大兵瑞恩强度，历史重量，英雄牺牲"
    },
    {
      "name": "浪漫爱情",
      "english": "Romantic drama, soft focus warmth, golden hour couple, intimate close-ups, rain embrace, sunset silhouette, emotional crescendo",
      "chinese": "浪漫爱情，柔焦温暖，黄金时刻情侣，亲密特写，雨中拥抱，日落剪影，情感高潮"
    },
    {
      "name": "科幻巨制",
      "english": "Science fiction epic, vast space vistas, advanced technology, alien worlds, speculative future, hard sci-fi detail, orbital grandeur",
      "chinese": "科幻巨制，浩瀚太空，先进科技，外星世界，推测未来，硬科幻细节，轨道宏大"
    },
    {
      "name": "纪录片纪实",
      "english": "Documentary realism, observational camera, natural lighting, real-world textures, unscripted authenticity, truth-telling aesthetic, vérité style",
      "chinese": "纪录片纪实，观察性摄影机，自然光线，真实世界纹理，无剧本真实，讲述真相美学，真实电影风格"
    },
    {
      "name": "西部荒野",
      "english": "Western frontier, vast desert landscapes, lone cowboy silhouette, dusty saloon, high noon confrontation, Sergio Leone framing, frontier justice",
      "chinese": "西部荒野，广袤沙漠景观，孤独牛仔剪影，尘土酒吧，正午对决，莱昂内构图，边疆正义"
    },
    {
      "name": "赛博黑色",
      "english": "Cyber noir, neon-lit rain streets, android detectives, digital corruption, corporate dystopia, Blade Runner 2049, high-tech low-life mystery",
      "chinese": "赛博黑色电影，霓虹雨街，仿生人侦探，数字腐败，企业反乌托邦，银翼杀手2049，高科技低生活迷案"
    },
    {
      "name": "青春成长",
      "english": "Coming-of-age story, warm nostalgia, summer golden light, teenage discovery, bittersweet transition, first love innocence, fleeting youth",
      "chinese": "青春成长故事，温暖怀旧，夏日金光，少年发现，苦乐参半的转变，初恋纯真，逝去青春"
    },
    {
      "name": "黑色电影",
      "english": "Film noir style, high contrast shadows, femme fatale, rain-slicked streets, cynical detective, venetian blind shadows, moral ambiguity",
      "chinese": "黑色电影风格，高对比阴影，蛇蝎美人，雨湿街道，愤世侦探，百叶窗阴影，道德模糊"
    }
  ],
  "商业摄影风格": [
    {
      "name": "产品精修",
      "english": "Product photography perfection, studio white background, edge-lit precision, e-commerce ready, highlight details, commercial cleanliness",
      "chinese": "产品精修摄影，影棚白背景，边缘光精准，电商就绪，高光细节，商业洁净"
    },
    {
      "name": "建筑内景",
      "english": "Architectural interior photography, wide-angle rooms, balanced ambient, real estate premium, perspective correction, lifestyle space",
      "chinese": "建筑内景摄影，广角房间，平衡环境光，地产高端，透视校正，生活方式空间"
    },
    {
      "name": "时尚大片",
      "english": "High fashion editorial, Vogue-quality portrait, dramatic styling, designer clothing, avant-garde pose, luxury brand aesthetic",
      "chinese": "高级时尚大片，Vogue级人像，戏剧造型，设计师服装，前卫姿态，奢侈品牌美学"
    },
    {
      "name": "汽车动感",
      "english": "Automotive photography, panning motion blur, desert road, reflective paint, speed lines, luxury vehicle, Top Gear aesthetic",
      "chinese": "汽车动感摄影，摇摄运动模糊，沙漠公路，反射漆面，速度线，豪华车辆，Top Gear美学"
    },
    {
      "name": "珠宝闪耀",
      "english": "Jewelry photography brilliance, sparkle and fire, macro gemstone, controlled reflections, luxury darkness, Tiffany elegance",
      "chinese": "珠宝闪耀摄影，闪耀火彩，微距宝石，控制反射，奢华暗调，蒂芙尼雅韵"
    },
    {
      "name": "美食诱惑",
      "english": "Food photography temptation, steam rising, sauce drizzle, fresh ingredients, overhead flat lay, appetizing warmth, Michelin presentation",
      "chinese": "美食诱惑摄影，蒸汽升腾，酱汁淋下，新鲜食材，俯视平铺，诱人温暖，米其林摆盘"
    }
  ],
  "时间与光线": [
    {
      "name": "极昼永光",
      "english": "Midnight sun, Arctic summer, 24-hour daylight, golden hour extended, polar day, endless sunset, Scandinavian white nights",
      "chinese": "极昼永光，北极夏季，24小时白昼，延长黄金时刻，极地白昼，无尽日落，北欧白夜"
    },
    {
      "name": "正午烈阳",
      "english": "High noon harsh light, overhead sun, sharp shadows, intense brightness, midday contrast, desert sun, no shade exposure",
      "chinese": "正午烈阳，顶光，锐利阴影，强烈亮度，正午对比，沙漠太阳，无遮蔽曝光"
    },
    {
      "name": "深夜寂静",
      "english": "Deep night silence, star-filled sky, moonlit landscape, sleeping world, nocturnal peace, Milky Way visible, cosmic darkness",
      "chinese": "深夜寂静，星空满天，月光景观，沉睡世界，夜间宁静，银河可见，宇宙黑暗"
    },
    {
      "name": "闪电瞬间",
      "english": "Lightning strike moment, electric illumination, split-second flash, storm drama, night turned day, nature's strobe, powerful discharge",
      "chinese": "闪电瞬间，电光照耀，刹那闪光，暴风雨戏剧，黑夜变白昼，自然闪光灯，强力放电"
    },
    {
      "name": "阴天柔光",
      "english": "Overcast soft light, diffused clouds, even illumination, portrait-friendly, no harsh shadows, gray sky blanket, natural softbox",
      "chinese": "阴天柔光，云层散射，均匀照明，人像友好，无硬阴影，灰色天幕，天然柔光箱"
    },
    {
      "name": "黄昏魔幻",
      "english": "Magic hour dusk, purple and gold sky, day's end beauty, romantic twilight, fleeting golden moment, photographer's dream",
      "chinese": "黄昏魔幻时刻，紫金天空，白日终之美，浪漫暮光，稍纵即逝的金色时刻，摄影师梦想"
    },
    {
      "name": "黎明破晓",
      "english": "Dawn breaking, first light, pink and orange horizon, morning mist, new day beginning, awakening world, early morning glow",
      "chinese": "黎明破晓，第一缕光，粉橙地平线，晨雾，新的一天开始，苏醒世界，清晨辉光"
    }
  ],
  "人物姿态与表情": [
    {
      "name": "专业坐姿",
      "english": "Professional seated pose, crossed legs, hands on knees, confident lean, office environment, business authority, corporate portrait",
      "chinese": "专业坐姿，翘腿，双手膝盖，自信前倾，办公环境，商业权威，企业人像"
    },
    {
      "name": "亲密双人",
      "english": "Intimate couple pose, forehead touch, gentle embrace, romantic proximity, soft lighting, love connection, engagement portrait",
      "chinese": "亲密双人姿态，额头相触，温柔拥抱，浪漫亲近，柔和光线，爱情连接，订婚人像"
    },
    {
      "name": "动态奔跑",
      "english": "Dynamic running pose, motion blur legs, arms pumping, hair flowing, athletic energy, sprint power, action freeze",
      "chinese": "动态奔跑姿态，腿部运动模糊，手臂摆动，头发飘动，运动能量，冲刺力量，动作冻结"
    },
    {
      "name": "沉思侧影",
      "english": "Contemplative profile, gaze into distance, hand on chin, thoughtful expression, window silhouette, intellectual mood, pensive beauty",
      "chinese": "沉思侧影，远望，手托下巴，深思表情，窗边剪影，知识分子氛围，忧郁之美"
    },
    {
      "name": "自信站姿",
      "english": "Confident standing pose, weight on one leg, shoulders back, direct gaze, power stance, leadership presence, executive portrait",
      "chinese": "自信站姿，重心单腿，肩膀后展，直视镜头，力量姿态，领导气场，高管人像"
    },
    {
      "name": "舞蹈动态",
      "english": "Dance movement pose, extended limbs, graceful arc, ballet extension, flowing fabric, kinetic beauty, performance capture",
      "chinese": "舞蹈动态姿态，伸展四肢，优雅弧线，芭蕾延伸，流动织物，动态之美，演出捕捉"
    },
    {
      "name": "英雄姿态",
      "english": "Heroic pose, chest forward, chin up, fists at sides, superhero stance, triumphant power, victory moment, inspirational figure",
      "chinese": "英雄姿态，挺胸，下巴上扬，双拳体侧，超级英雄站姿，凯旋力量，胜利时刻，鼓舞人物"
    },
    {
      "name": "街头自然",
      "english": "Candid street pose, walking mid-stride, looking away, natural movement, urban lifestyle, fashion editorial, unposed authenticity",
      "chinese": "街头自然姿态，行走中途，看向别处，自然运动，都市生活，时尚杂志，非摆拍真实"
    }
  ],
  "世界艺术风格 > 东亚风格": [
    {
      "name": "东亚赛博都市",
      "english": "East Asian cyberpunk city, neon kanji signs, rain-slicked streets, towering architecture, holographic displays, futuristic Asian metropolis",
      "chinese": "东亚赛博都市，霓虹汉字招牌，雨湿街道，高耸建筑，全息显示，未来亚洲大都会"
    },
    {
      "name": "中国古代",
      "english": "Ancient Chinese landscape, Shan Shui painting style, ink wash, ethereal mountains, traditional architecture, flowing robes, meditative atmosphere, high detail, 8k",
      "chinese": "中国古代山水画风格，水墨，空灵群山，传统建筑，飘逸长袍，禅意氛围，高细节，8K"
    },
    {
      "name": "中国国潮新锐",
      "english": "Chinese Guochao trend, bold red and gold, modern reinterpretation of traditional motifs, streetwear meets heritage, youthful energy",
      "chinese": "中国国潮新锐，大胆红金配色，传统图案现代演绎，街头与传承结合，年轻活力"
    },
    {
      "name": "中国敦煌飞天",
      "english": "Dunhuang flying apsaras style, Buddhist art, celestial dancers, flowing silk ribbons, desert oasis colors, ancient Silk Road elegance",
      "chinese": "中国敦煌飞天风格，佛教艺术，飞天舞者，飘逸丝带，沙漠绿洲色彩，古丝绸之路雅韵"
    },
    {
      "name": "中国水墨意境",
      "english": "Chinese ink wash painting style, brush strokes, negative space, mountain mist, calligraphic elegance, traditional monochrome, poetic atmosphere",
      "chinese": "中国水墨意境风格，笔触留白，山间云雾，书法雅韵，传统黑白，诗意氛围"
    },
    {
      "name": "中国现代",
      "english": "Contemporary Chinese urbanism, Neo-Chinese style, fusion of traditional and futuristic, cyberpunk Shanghai, neon lanterns, high-tech skyscrapers, 8k, cinematic",
      "chinese": "当代中国都市主义，新中式风格，传统与未来的融合，赛博上海，霓虹灯笼，高科技摩天大楼，8K，电影感"
    },
    {
      "name": "日本侘寂美学",
      "english": "Wabi-sabi aesthetic, imperfect beauty, aged textures, natural decay, rustic simplicity, contemplative silence, weathered surfaces",
      "chinese": "侘寂美学，不完美之美，岁月质感，自然痕迹，质朴简约，沉思静默，风化表面"
    },
    {
      "name": "日本动漫清新",
      "english": "Anime fresh aesthetic, cel-shaded style, vibrant but soft colors, clean outlines, slice-of-life warmth, Studio Ghibli inspired",
      "chinese": "日本动漫清新美学，赛璐璐风格，明亮柔和色彩，干净轮廓，日常温馨，吉卜力灵感"
    },
    {
      "name": "日本和风极简",
      "english": "Japanese minimalist aesthetic, wabi-sabi philosophy, natural materials, clean lines, tatami textures, sliding shoji screens, zen tranquility",
      "chinese": "日本和风极简美学，侘寂哲学，自然材质，简洁线条，榻榻米质感，障子门，禅意宁静"
    },
    {
      "name": "日本昭和复古",
      "english": "Showa era retro Japan, 1970s-80s nostalgia, warm film grain, analog warmth, vintage Tokyo streets, nostalgic color palette",
      "chinese": "日本昭和复古，70-80年代怀旧，温暖胶片颗粒，模拟温度，复古东京街景，怀旧色调"
    },
    {
      "name": "日本浮世绘",
      "english": "Ukiyo-e style, Hokusai influence, woodblock print, bold outlines, flat colors, traditional Japanese waves, Mt Fuji, classic anime feel",
      "chinese": "浮世绘风格，北斋影响，木版画，大胆的轮廓线，扁平色彩，传统日本海浪，富士山，经典动漫感"
    },
    {
      "name": "日本赛博朋克",
      "english": "Tokyo Night, Cyberpunk 2077 style, neon rain, futuristic architecture, holographic advertisements, moody lighting, cinematic, highly detailed",
      "chinese": "东京之夜，赛博朋克2077风格，霓虹雨，未来建筑，全息广告，忧郁光影，电影感，极高细节"
    },
    {
      "name": "韩国K-pop视觉",
      "english": "K-pop visual aesthetic, high-gloss finish, bold color blocking, fashion-forward styling, energetic youth culture, polished perfection",
      "chinese": "K-pop视觉美学，高光质感，大胆色块，前卫时尚，活力青年文化，精致完美"
    },
    {
      "name": "韩国传统",
      "english": "Traditional Korean Hanbok, Joseon dynasty architecture, serene palace gardens, soft lighting, elegant and refined, historical accuracy",
      "chinese": "传统韩国韩服，朝鲜王朝建筑，宁静的宫廷花园，柔和光影，优雅精致，历史还原度高"
    },
    {
      "name": "韩国现代都市",
      "english": "Korean modern urban aesthetic, clean architecture, soft concrete, warm wood accents, contemporary Seoul vibe, sophisticated minimalism",
      "chinese": "韩国现代都市美学，简洁建筑，柔和混凝土，温暖木质，首尔当代感，精致极简"
    }
  ],
  "世界艺术风格 > 西方艺术": [
    {
      "name": "欧洲分离派",
      "english": "European Secession, decorative symbolism, Gustav Klimt gold, ornate patterns, psychological depth, Vienna elegance",
      "chinese": "欧洲分离派，装饰象征主义，克里姆特金，华丽纹样，心理深度，维也纳雅韵"
    },
    {
      "name": "欧洲印象派",
      "english": "Impressionism style, Claude Monet, visible brushstrokes, focus on light and movement, pastel colors, open air painting, dreamy",
      "chinese": "印象派风格，克劳德·莫奈，明显的笔触，关注光线与动态，柔和色调，户外绘画，梦幻感"
    },
    {
      "name": "欧洲哥特",
      "english": "European Gothic art, pointed arches, stained glass, religious symbolism, dark romanticism, medieval grandeur, dramatic verticality",
      "chinese": "欧洲哥特艺术，尖拱，彩色玻璃，宗教象征，暗黑浪漫主义，中世纪宏大，戏剧性垂直感"
    },
    {
      "name": "欧洲巴洛克",
      "english": "Baroque style, Caravaggio influence, intense dramatic lighting, deep shadows, opulent gold ornaments, emotional intensity, theatrical",
      "chinese": "巴洛克风格，卡拉瓦乔影响，强烈的戏剧化光影，深邃阴影，奢华金色装饰，情感强度高，具有舞台感"
    },
    {
      "name": "欧洲文艺复兴",
      "english": "High Renaissance style, Leonardo da Vinci, Michelangelo influence, sfumato, chiaroscuro, classical proportions, oil on canvas, museum quality",
      "chinese": "盛期文艺复兴风格，达芬奇/米开朗基罗影响，晕涂法，明暗对照法，古典比例，布面油画，博物馆级质量"
    },
    {
      "name": "欧洲新艺术",
      "english": "European Art Nouveau, organic curves, floral motifs, decorative elegance, flowing lines, Mucha inspired, Belle Époque",
      "chinese": "欧洲新艺术运动，有机曲线，花卉纹样，装饰雅致，流动线条，穆夏灵感，美好年代"
    },
    {
      "name": "欧洲浪漫主义",
      "english": "European Romanticism, emotional intensity, dramatic nature, sublime landscapes, passionate brushwork, individual expression",
      "chinese": "欧洲浪漫主义，情感强度，戏剧性自然，崇高风景，激情笔触，个人表达"
    },
    {
      "name": "欧洲野兽派",
      "english": "European Fauvism, wild brushwork, vivid unnatural colors, emotional expression, Matisse inspired, bold simplicity",
      "chinese": "欧洲野兽派，狂野笔触，鲜艳非自然色，情感表达，马蒂斯灵感，大胆简约"
    },
    {
      "name": "美国写实主义",
      "english": "American Realism, precise detail, everyday subjects, photographic accuracy, Edward Hopper solitude, urban narratives",
      "chinese": "美国写实主义，精确细节，日常题材，照片级准确，霍珀式孤独，都市叙事"
    },
    {
      "name": "美国抽象表现",
      "english": "American Abstract Expressionism, bold gestural strokes, emotional intensity, color field painting, spontaneous creation, New York School",
      "chinese": "美国抽象表现主义，大胆姿态笔触，情感强度，色域绘画，自发创作，纽约画派"
    },
    {
      "name": "美国极简主义",
      "english": "American Minimalism, geometric simplicity, industrial materials, neutral palette, clean lines, conceptual purity, less is more",
      "chinese": "美国极简主义，几何简约，工业材质，中性色调，干净线条，概念纯粹，少即是多"
    },
    {
      "name": "美国波普文化",
      "english": "American Pop Culture, mass media imagery, consumer society, bright colors, celebrity culture, advertising aesthetics",
      "chinese": "美国波普文化，大众媒体图像，消费社会，明亮色彩，名人文化，广告美学"
    },
    {
      "name": "美国波普艺术",
      "english": "Pop Art style, Andy Warhol, bold colors, high contrast, halftone dots, comic book aesthetic, vibrant, consumerism theme",
      "chinese": "波普艺术风格，安迪·沃霍尔，大胆色彩，高对比度，半色调网点，漫画书美学，鲜艳，消费主义主题"
    },
    {
      "name": "美国装饰艺术",
      "english": "1920s American Art Deco, Great Gatsby style, geometric patterns, gold and black, luxury, elegance, stylized symmetry",
      "chinese": "1920年代美国装饰艺术，盖茨比风格，几何图案，金黑配色，奢华，优雅，风格化对称"
    },
    {
      "name": "美国西部",
      "english": "American Western aesthetic, desert landscapes, cowboy culture, golden hour dust, rugged frontier, sunset canyons, pioneer spirit",
      "chinese": "美国西部美学，沙漠景观，牛仔文化，金色尘土，粗犷边疆，峡谷日落，开拓者精神"
    }
  ],
  "世界艺术风格 > 其他全球风格": [
    {
      "name": "中东伊斯兰",
      "english": "Islamic geometric patterns, intricate mosaics, Arabian nights, golden hour in the desert, grand mosques, luxury silk textures",
      "chinese": "伊斯兰几何图案，复杂马赛克，阿拉伯之夜，沙漠黄金时刻，宏伟的清真寺，奢华丝绸质感"
    },
    {
      "name": "北欧极简",
      "english": "Nordic minimalism, light wood and white, hygge comfort, Scandinavian functionality, clean lines, natural simplicity",
      "chinese": "北欧极简，浅木与白，舒适惬意，斯堪的纳维亚功能性，干净线条，自然简约"
    },
    {
      "name": "印度宝莱坞",
      "english": "Bollywood aesthetic, vibrant colors, elaborate costumes, musical exuberance, Indian grandeur, romantic fantasy, festive energy",
      "chinese": "宝莱坞美学，鲜艳色彩，华丽服饰，音乐活力，印度宏大，浪漫幻想，节日能量"
    },
    {
      "name": "印度曼陀罗",
      "english": "Indian mandala art, sacred geometry, radial symmetry, spiritual meditation, intricate patterns, cosmic order, colorful detail",
      "chinese": "印度曼陀罗艺术，神圣几何，径向对称，精神冥想，繁复纹样，宇宙秩序，多彩细节"
    },
    {
      "name": "墨西哥亡灵节",
      "english": "Mexican Day of the Dead, vibrant skeletons, marigold flowers, sugar skull art, festive remembrance, folk art celebration",
      "chinese": "墨西哥亡灵节，鲜艳骷髅，万寿菊，糖骷髅艺术，节日纪念，民间艺术庆典"
    },
    {
      "name": "摩洛哥装饰",
      "english": "Moroccan decorative style, geometric tiles, arch doorways, rich textiles, desert colors, intricate patterns, riad elegance",
      "chinese": "摩洛哥装饰风格，几何瓷砖，拱形门廊，丰富织物，沙漠色彩，繁复纹样，庭院雅韵"
    },
    {
      "name": "非洲部落",
      "english": "African tribal art, vibrant patterns, organic shapes, earth tones, strong cultural identity, bold jewelry, high-contrast",
      "chinese": "非洲部落艺术，鲜艳图案，有机形状，大地色调，强烈的文化身份，大胆的珠宝，高对比度"
    }
  ],
  "世界艺术风格 > 东亚美学": [
    {
      "name": "东方丝绸",
      "english": "Oriental silk aesthetic, flowing fabric textures, iridescent sheen, traditional patterns, luxurious drape, ancient trade route elegance",
      "chinese": "东方丝绸美学，流动织物质感，虹彩光泽，传统纹样，奢华垂坠，古丝绸之路雅韵"
    },
    {
      "name": "东方园林",
      "english": "Chinese classical garden, pavilions and ponds, borrowed scenery, winding paths, scholar rocks, poetic landscaping",
      "chinese": "中国古典园林，亭台楼阁，借景手法，曲径通幽，太湖石，诗意造景"
    },
    {
      "name": "东方金碧",
      "english": "Oriental gold and jade, imperial luxury, red lacquer and gold leaf, palace elegance, auspicious motifs, royal splendor",
      "chinese": "东方金碧辉煌，皇家奢华，红漆金箔，宫廷雅韵，吉祥纹样，皇室华彩"
    },
    {
      "name": "和风暖木",
      "english": "Japanese warm wood aesthetic, light oak and cedar, natural grain patterns, cozy minimalism, hygge meets zen",
      "chinese": "和风暖木美学，浅橡木与雪松，天然木纹，温馨极简，北欧舒适与禅意结合"
    },
    {
      "name": "新中式高定",
      "english": "Neo-Chinese high fashion, fusion of traditional silk and modern tailoring, minimalist luxury, jade accents, high-end couture",
      "chinese": "新中式高定，传统丝绸与现代剪裁的融合，极简奢华，翡翠点缀，高端定制"
    },
    {
      "name": "日系物哀",
      "english": "Mono no aware aesthetic, fleeting beauty, soft melancholic atmosphere, cherry blossoms in rain, muted colors, cinematic longing",
      "chinese": "物哀美学，转瞬即逝之美，柔和忧郁氛围，雨中樱花，低饱和色，电影感怀旧"
    },
    {
      "name": "水墨留白",
      "english": "Ink wash negative space, minimalist brushwork, breathing room, eastern philosophy, sparse composition, elegant emptiness",
      "chinese": "水墨留白，极简笔触，呼吸空间，东方哲学，疏朗构图，雅致空灵"
    },
    {
      "name": "浮世绘动漫",
      "english": "Modernized Ukiyo-e, vibrant anime colors, bold line art, flat shading, floating elements, Hokusai influence, high contrast",
      "chinese": "现代化浮世绘，鲜艳动漫色彩，大胆线条，扁平色块，悬浮元素，北斋影响，高对比度"
    },
    {
      "name": "禅意庭院",
      "english": "Zen garden aesthetic, raked sand patterns, moss and stone, contemplative stillness, Japanese courtyard, meditative simplicity",
      "chinese": "禅意庭院美学，耙沙纹理，苔藓与石，冥想静谧，日式庭院，沉思简约"
    },
    {
      "name": "禅意极简",
      "english": "Zen minimalism, Wabi-sabi aesthetic, empty space, natural textures, muted neutral tones, peaceful, meditative, high-end architecture",
      "chinese": "禅意极简，侘寂美学，留白，自然纹理，淡雅中性色，宁静冥想，高端建筑"
    },
    {
      "name": "茶道美学",
      "english": "Tea ceremony aesthetic, matcha green palette, ceramic textures, ritualistic simplicity, wabi-cha philosophy, quiet refinement",
      "chinese": "茶道美学，抹茶绿色调，陶瓷质感，仪式简约，侘茶哲学，静雅精致"
    },
    {
      "name": "赛博汉服",
      "english": "Cyber-Hanfu style, traditional Chinese robes with neon fiber-optics, glowing embroidery, futuristic Hanfu, cyberpunk Beijing, high-tech silk",
      "chinese": "赛博汉服，集成霓虹光纤的传统长袍，发光刺绣，未来感汉服，赛博北京，高科技丝绸"
    },
    {
      "name": "韩系精致",
      "english": "K-beauty aesthetic, hyper-clean glass skin, soft pastel palette, minimalist urban luxury, refined and polished, high-end skincare look",
      "chinese": "韩系精致美学，极净玻璃肌，柔和马卡龙色，极简都市奢华，精致打磨，高端护肤感"
    }
  ],
  "世界艺术风格 > 西方古典": [
    {
      "name": "古希腊经典",
      "english": "Ancient Greek classical, marble sculptures, ideal proportions, Doric columns, Olympic grandeur, philosophical elegance, Mediterranean light",
      "chinese": "古希腊经典，大理石雕塑，理想比例，多立克柱式，奥林匹克宏大，哲学雅韵，地中海光线"
    },
    {
      "name": "哥特复兴",
      "english": "Gothic Revival, pointed arches return, Victorian medievalism, romantic ruins, architectural drama, Pre-Raphaelite beauty",
      "chinese": "哥特复兴，尖拱回归，维多利亚中世纪主义，浪漫废墟，建筑戏剧，拉斐尔前派之美"
    },
    {
      "name": "巴洛克戏剧",
      "english": "Baroque theatricality, dramatic chiaroscuro, dynamic movement, ornate grandeur, Bernini sculpture, Counter-Reformation splendor",
      "chinese": "巴洛克戏剧性，戏剧明暗，动态运动，华丽宏大，贝尼尼雕塑，反宗教改革辉煌"
    },
    {
      "name": "巴洛克鼎盛",
      "english": "Baroque opulence, dramatic chiaroscuro, intense contrast, gold leaf ornaments, theatrical emotion, Caravaggio lighting",
      "chinese": "巴洛克奢华，戏剧化明暗对照，强对比，金箔装饰，舞台感情感，卡拉瓦乔光影"
    },
    {
      "name": "拜占庭圣像",
      "english": "Byzantine icon style, gold backgrounds, flat perspective, religious symbolism, mosaic brilliance, Eastern Orthodox majesty",
      "chinese": "拜占庭圣像风格，金色背景，平面透视，宗教象征，马赛克辉煌，东正教庄严"
    },
    {
      "name": "文艺复兴",
      "english": "High Renaissance, sfumato technique, divine proportions, Leonardo da Vinci style, museum lighting, oil on canvas, ethereal glow",
      "chinese": "盛期文艺复兴，晕涂法，神圣比例，达芬奇风格，博物馆光影，布面油画，空灵光辉"
    },
    {
      "name": "文艺复兴盛期",
      "english": "High Renaissance, perfect harmony, Leonardo sfumato, Raphael balance, Michelangelo power, classical ideals realized",
      "chinese": "文艺复兴盛期，完美和谐，达芬奇晕涂法，拉斐尔平衡，米开朗基罗力量，古典理想实现"
    },
    {
      "name": "新古典主义",
      "english": "Neoclassical style, symmetry and order, Greco-Roman revival, restrained elegance, Enlightenment ideals, archaeological precision",
      "chinese": "新古典主义风格，对称与秩序，希腊罗马复兴，克制雅韵，启蒙理想，考古精确"
    },
    {
      "name": "洛可可宫廷",
      "english": "Rococo court style, pastel elegance, ornate decoration, playful asymmetry, French royal chambers, delicate gold filigree",
      "chinese": "洛可可宫廷风格，粉彩雅韵，华丽装饰，俏皮不对称，法国皇室，精致金丝"
    },
    {
      "name": "洛可可浪漫",
      "english": "Rococo style, pastel colors, ornate curves, playful elegance, Marie Antoinette aesthetic, floral patterns, soft lighting",
      "chinese": "洛可可风格，柔和色调，繁复曲线，俏皮优雅，玛丽皇后美学，花卉图案，柔光"
    },
    {
      "name": "浪漫主义",
      "english": "Romanticism era, emotional intensity, vast nature, sublime landscapes, dramatic clouds, moody atmosphere, Turner influence",
      "chinese": "浪漫主义，情感强度，宏大自然，崇高景观，戏剧化云层，忧郁氛围，透纳影响"
    },
    {
      "name": "罗马帝国",
      "english": "Roman Empire aesthetic, imperial grandeur, triumphal arches, marble and gold, military power, classical orders, eternal city",
      "chinese": "罗马帝国美学，帝国宏大，凯旋门，大理石与金，军事力量，古典柱式，永恒之城"
    }
  ],
  "世界艺术风格 > 现代与先锋": [
    {
      "name": "包豪斯极简",
      "english": "Bauhaus style, functionalism, geometric precision, primary colors, clean lines, industrial modernism, architectural purity",
      "chinese": "包豪斯风格，功能主义，几何精确，三原色，干净线条，工业现代主义，建筑纯粹"
    },
    {
      "name": "后现代拼贴",
      "english": "Postmodern collage, historical mashup, ironic juxtaposition, pastiche aesthetic, David Salle layers, cultural remix",
      "chinese": "后现代拼贴，历史混搭，讽刺并置，模仿美学，大卫·萨利层次，文化重组"
    },
    {
      "name": "数字艺术",
      "english": "Digital Art aesthetic, pixel perfection, glitch effects, generative algorithms, screen-based beauty, post-internet sensibility",
      "chinese": "数字艺术美学，像素完美，故障效果，生成算法，屏幕之美，后互联网感性"
    },
    {
      "name": "新表现主义",
      "english": "Neo-Expressionism, raw emotional intensity, figurative return, bold colors, Basquiat energy, 1980s rebellion",
      "chinese": "新表现主义，原始情感强度，具象回归，大胆色彩，巴斯奎特能量，1980年代反叛"
    },
    {
      "name": "未来主义",
      "english": "Italian Futurism, speed and dynamism, fragmented forms, metallic textures, aggressive lines, industrial energy",
      "chinese": "未来主义，速度与动态，碎片化形式，金属质感，侵略性线条，工业能量"
    },
    {
      "name": "极简纯净",
      "english": "Minimalist purity, essential forms, monochrome surfaces, industrial precision, Donald Judd boxes, spatial awareness",
      "chinese": "极简纯净，本质形式，单色表面，工业精确，唐纳德·贾德盒子，空间意识"
    },
    {
      "name": "构成主义",
      "english": "Constructivism, geometric abstraction, industrial materials, revolutionary spirit, Russian avant-garde, functional beauty",
      "chinese": "构成主义，几何抽象，工业材质，革命精神，俄国先锋，功能之美"
    },
    {
      "name": "欧普艺术",
      "english": "Op Art, optical illusions, geometric patterns, visual vibration, Bridget Riley waves, perceptual tricks, eye-catching movement",
      "chinese": "欧普艺术，视觉错觉，几何图案，视觉振动，布里奇特·赖利波纹，感知把戏，吸睛运动"
    },
    {
      "name": "波普艺术",
      "english": "Pop Art, Andy Warhol style, bold saturated colors, halftone dots, mass production aesthetic, high contrast, vibrant comic look",
      "chinese": "波普艺术，安迪沃霍尔风格，大胆饱和色，半色调网点，量产美学，高对比，鲜艳漫画感"
    },
    {
      "name": "街头艺术",
      "english": "Street Art, urban intervention, Banksy stencil, graffiti culture, political commentary, public space reclamation",
      "chinese": "街头艺术，城市介入，班克西模版，涂鸦文化，政治评论，公共空间回收"
    },
    {
      "name": "观念艺术",
      "english": "Conceptual Art, idea over form, intellectual engagement, dematerialized art, Joseph Kosuth, language as medium",
      "chinese": "观念艺术，观念重于形式，智性参与，去物质化艺术，约瑟夫·科苏斯，语言即媒介"
    },
    {
      "name": "超现实主义",
      "english": "Surrealism, Salvador Dali influence, dream logic, melting objects, impossible architecture, psychedelic, subconscious exploration",
      "chinese": "超现实主义，达利影响，梦境逻辑，融化物体，不可能的建筑，迷幻，潜意识探索"
    },
    {
      "name": "超现实梦境",
      "english": "Surrealist dreamscape, subconscious imagery, Dalí melting clocks, Magritte paradoxes, impossible scenarios, Freudian symbolism",
      "chinese": "超现实梦境，潜意识意象，达利融化时钟，马格里特悖论，不可能场景，弗洛伊德象征"
    },
    {
      "name": "达达主义",
      "english": "Dadaism, anti-art movement, absurd collage, ready-made objects, satirical chaos, post-WWI disillusionment, Duchamp legacy",
      "chinese": "达达主义，反艺术运动，荒诞拼贴，现成物品，讽刺混乱，一战后幻灭，杜尚遗产"
    }
  ],
  "场景环境": [
    {
      "name": "乡村田园",
      "english": "Rural countryside, rolling hills, farmhouse charm, golden wheat field, pastoral peace, rustic simplicity, agrarian beauty",
      "chinese": "乡村田园，起伏山丘，农舍魅力，金色麦田，田园宁静，质朴简约，农耕之美"
    },
    {
      "name": "工业废墟",
      "english": "Industrial ruins, abandoned factory, rusted machinery, broken windows, post-apocalyptic, urban exploration, decay beauty",
      "chinese": "工业废墟，废弃工厂，锈蚀机械，破碎窗户，后末日，城市探索，衰败之美"
    },
    {
      "name": "森林秘境",
      "english": "Enchanted forest, ancient trees, dappled sunlight, moss-covered ground, mysterious depth, fairy tale woods, primeval nature",
      "chinese": "森林秘境，古树参天，斑驳阳光，苔藓覆盖地面，神秘深度，童话森林，原始自然"
    },
    {
      "name": "水下世界",
      "english": "Underwater realm, coral reef, tropical fish, filtered sunlight, marine life, diving depth, ocean wonder, Jacques Cousteau",
      "chinese": "水下世界，珊瑚礁，热带鱼，过滤阳光，海洋生物，潜水深度，海洋奇观，库斯托"
    },
    {
      "name": "海滨日落",
      "english": "Coastal sunset scene, golden waves, silhouetted palm, beach romance, horizon glow, vacation paradise, tropical evening",
      "chinese": "海滨日落场景，金色波浪，棕榈剪影，沙滩浪漫，地平线辉光，度假天堂，热带黄昏"
    },
    {
      "name": "豪华内景",
      "english": "Luxury interior, marble floors, crystal chandelier, designer furniture, penthouse view, high-end lifestyle, architectural digest",
      "chinese": "豪华内景，大理石地面，水晶吊灯，设计师家具，顶层景观，高端生活，建筑文摘"
    },
    {
      "name": "都市夜景",
      "english": "Urban night scene, city lights, skyscraper canyon, neon reflections, busy intersection, metropolitan energy, sleepless city",
      "chinese": "都市夜景，城市灯光，摩天楼峡谷，霓虹反射，繁忙路口，大都会能量，不夜城"
    },
    {
      "name": "雪山巅峰",
      "english": "Mountain peak summit, snow-capped majesty, alpine grandeur, climber's triumph, thin air, above clouds, conquering nature",
      "chinese": "雪山巅峰，雪冠雄伟，阿尔卑斯宏大，登山者凯旋，稀薄空气，云层之上，征服自然"
    }
  ],
  "专业视觉技术 > 构图与美学": [
    {
      "name": "S曲线",
      "english": "S-curve composition, flowing river lines, winding road, serpentine flow, sensual movement, natural grace, dynamic diagonal",
      "chinese": "S曲线构图，流动河线，蜿蜒道路，蛇形流动，感性运动，自然优雅，动态对角"
    },
    {
      "name": "三分法",
      "english": "Rule of thirds composition, off-center subject, balanced asymmetry, natural focal points, professional framing, dynamic equilibrium",
      "chinese": "三分法构图，偏心主体，平衡不对称，自然焦点，专业构图，动态平衡"
    },
    {
      "name": "中心对称",
      "english": "Center symmetry, bilateral mirror, formal balance, Wes Anderson precision, architectural perfection, satisfying order",
      "chinese": "中心对称，双边镜像，正式平衡，韦斯·安德森精准，建筑完美，令人满足的秩序"
    },
    {
      "name": "前景框架",
      "english": "Foreground framing, natural vignette, archway portal, window frame composition, depth layering, tunnel vision focus",
      "chinese": "前景框架构图，自然暗角，拱门入口，窗框构图，深度分层，隧道视野焦点"
    },
    {
      "name": "动态对角线",
      "english": "Diagonal composition, dynamic leading lines, sense of movement, tension, energetic perspective",
      "chinese": "对角线构图，动态引导线，运动感，紧张感，充满能量的视角"
    },
    {
      "name": "对称平衡",
      "english": "Perfectly symmetrical composition, mirror effect, architectural precision, centered subject, stability and order",
      "chinese": "完美对称构图，镜像效果，建筑精确，主体居中，稳定性与秩序"
    },
    {
      "name": "引导线条",
      "english": "Leading lines composition, converging perspective, directional flow, road or railway vanishing point, visual highway, depth accelerator",
      "chinese": "引导线构图，汇聚透视，方向流动，道路或铁路消失点，视觉通道，深度加速器"
    },
    {
      "name": "极端留白",
      "english": "Extreme negative space, minimalist void, isolated subject, breathing room, Zen emptiness, dramatic simplicity, Apple advertising",
      "chinese": "极端留白，极简虚空，孤立主体，呼吸空间，禅意空灵，戏剧性简约，苹果广告式"
    },
    {
      "name": "负空间留白",
      "english": "Minimalist composition, heavy negative space, focus on solitude, clean background, conceptual art",
      "chinese": "极简构图，大量负空间留白，聚焦孤独感，干净背景，概念艺术"
    },
    {
      "name": "重复图案",
      "english": "Repetition pattern, rhythmic recurrence, visual echo, wallpaper effect, obsessive order, hypnotic grid, Warhol multiplication",
      "chinese": "重复图案，节奏性重复，视觉回声，壁纸效果，强迫秩序，催眠网格，沃霍尔式复制"
    },
    {
      "name": "黄金分割",
      "english": "Golden ratio composition, Fibonacci spiral, naturally balanced, harmonic proportion, professional layout",
      "chinese": "黄金比例构图，斐波那契螺旋，自然平衡，和谐比例，专业布局"
    }
  ],
  "专业视觉技术 > 电影镜头与视角": [
    {
      "name": "低角度权力",
      "english": "Low angle shot, worm's eye view, heroic perspective, imposing stature, dramatic power, exaggerated height",
      "chinese": "低角度拍摄，虫眼视角，英雄视角，庄严身材，戏剧化权力感，夸张高度"
    },
    {
      "name": "倾斜构图",
      "english": "Dutch angle tilt, diagonal composition, psychological unease, dynamic tension, Batman villain framing, off-kilter energy",
      "chinese": "倾斜构图，对角线构图，心理不安，动态张力，蝙蝠侠反派构图，失衡能量"
    },
    {
      "name": "宽银幕史诗",
      "english": "Anamorphic lens, wide aspect ratio, cinematic scope, sweeping panorama, epic scale, subtle lens flare",
      "chinese": "宽银幕变形镜头，极宽画幅，电影叙事感，横扫全景，史诗比例，细微镜头光晕"
    },
    {
      "name": "微距探入",
      "english": "Macro probe lens, extreme close-up penetration, microscopic world, insect-eye detail, hidden universe, textures magnified",
      "chinese": "微距探针镜头，极限特写深入，微观世界，虫眼细节，隐藏宇宙，纹理放大"
    },
    {
      "name": "快速拉远",
      "english": "Fast pull-back, sudden zoom out, context reveal, dramatic shift, comedy beat, world expansion, surprise opening",
      "chinese": "快速拉远，突然缩出，情境揭示，戏剧转换，喜剧节奏，世界扩展，惊喜开场"
    },
    {
      "name": "慢速推近",
      "english": "Slow push-in, gradual zoom, building tension, Hitchcock zoom, creeping approach, psychological pressure, growing intimacy",
      "chinese": "慢速推近，渐进缩放，建立张力，希区柯克式缩放， creeping靠近，心理压力，增长亲密"
    },
    {
      "name": "手持摇晃",
      "english": "Handheld shaky cam, documentary rawness, urgent energy, instability tension, authentic chaos, visceral immediacy",
      "chinese": "手持摇晃镜头，纪录片原生感，紧迫能量，不稳定张力，真实混乱，本能即时感"
    },
    {
      "name": "旋转环绕",
      "english": "Orbital rotation, 360-degree spin around subject, Matrix bullet time, spatial disorientation, dramatic reveal, dynamic circular",
      "chinese": "旋转环绕，围绕主体360度旋转，黑客帝国子弹时间，空间迷失，戏剧揭示，动态环绕"
    },
    {
      "name": "极端广角",
      "english": "Extreme wide angle, barrel distortion, immersive expanse, fish-eye effect, architectural drama, exaggerated perspective",
      "chinese": "极端广角，桶形畸变，沉浸广袤，鱼眼效果，建筑戏剧，夸张透视"
    },
    {
      "name": "水下视角",
      "english": "Underwater camera angle, half-submerged split view, aquatic distortion, snorkel perspective, floating weightlessness, pool-bottom view",
      "chinese": "水下视角，半潜分割视图，水生扭曲，浮潜透视，漂浮失重，池底视角"
    },
    {
      "name": "滑轨横移",
      "english": "Dolly slide lateral, smooth horizontal glide, parallel movement, revealing composition, Kubrick precision, lateral storytelling",
      "chinese": "滑轨横向移动，平滑水平滑行，平行运动，揭示构图，库布里克精准，横向叙事"
    },
    {
      "name": "特写微距",
      "english": "Extreme macro shot, microscope detail, shallow depth of field, bokeh, hyper-detailed texture, organic patterns",
      "chinese": "极近微距拍摄，微观细节，极浅景深，背景虚化，高细节纹理，有机图案"
    },
    {
      "name": "窥视视角",
      "english": "Voyeuristic POV, through doorway crack, hidden camera feel, surveillance tension, Rear Window perspective, unsettling observation",
      "chinese": "窥视视角，门缝窥视，隐藏摄像头感，监控张力，后窗视角，不安观察"
    },
    {
      "name": "第一视角POV",
      "english": "First-person perspective, POV shot, immersive experience, handheld motion, realistic eye-level view",
      "chinese": "第一视角，POV 拍摄，沉浸式体验，手持动态，写实眼睛高度视角"
    },
    {
      "name": "航拍全景",
      "english": "Aerial drone panorama, sweeping vista, vast landscape reveal, impossible vantage, soaring perspective, epic scale",
      "chinese": "航拍全景，无人机广角，壮阔视野揭示，不可能的视角，翱翔透视，史诗尺度"
    },
    {
      "name": "跟随运动",
      "english": "Tracking shot follow, Steadicam movement, subject in motion, fluid following, smooth pursuit, documentary immersion",
      "chinese": "跟随运动镜头，斯坦尼康运动，运动中的主体，流畅跟随，平稳追踪，纪录片沉浸"
    },
    {
      "name": "镜中反射",
      "english": "Mirror reflection shot, doppelganger framing, visual doubling, narcissistic composition, through the looking glass, reflective narrative",
      "chinese": "镜中反射镜头，双重构图，视觉双重性，自恋构图，穿镜叙事，反射叙事"
    },
    {
      "name": "鸟瞰俯视",
      "english": "Bird's eye view, top-down perspective, god-like overview, geometric patterns, abstracted landscape, surveillance aesthetic",
      "chinese": "鸟瞰俯视，自上而下视角，上帝视角总览，几何图案，抽象景观，监控美学"
    }
  ],
  "专业视觉技术 > 灯光与大气": [
    {
      "name": "伦勃朗光",
      "english": "Rembrandt lighting, classic portrait light, triangular highlight on cheek, deep shadows, timeless elegance",
      "chinese": "伦勃朗光，经典人像光，脸颊三角高光，深邃阴影，永恒优雅"
    },
    {
      "name": "体积光影",
      "english": "Volumetric lighting, God rays, Tyndall effect, hazy atmosphere, light shafts through dust, dramatic mood",
      "chinese": "体积光，耶稣光，丁达尔效应，朦胧氛围，尘埃中的光束，戏剧化情绪"
    },
    {
      "name": "光束耶稣光",
      "english": "God rays crepuscular light, visible light beams, dust particles, cathedral windows, forest gaps, divine atmosphere, volumetric shafts",
      "chinese": "耶稣光/曙暮辉光，可见光束，尘埃颗粒，教堂窗户，森林缝隙，神圣氛围，体积光柱"
    },
    {
      "name": "分割光",
      "english": "Split lighting, half face illuminated, dramatic contrast, mysterious mood, chiaroscuro portrait, dual personality",
      "chinese": "分割光，半面照明，戏剧对比，神秘氛围，明暗法人像，双重人格"
    },
    {
      "name": "大气雾气",
      "english": "Atmospheric haze, fog and mist, depth through layers, ethereal diffusion, mountain morning, cinematic atmosphere, dreamy distance",
      "chinese": "大气雾气，烟雾弥漫，层次深度，虚幻散射，山间清晨，电影氛围，梦幻远景"
    },
    {
      "name": "宽光",
      "english": "Broad lighting, illuminated side toward camera, flattering expansion, friendly portrait, even exposure, approachable feel",
      "chinese": "宽光，面部宽侧朝相机，修饰扩展，友好人像，均匀曝光，亲切感"
    },
    {
      "name": "影棚硬光",
      "english": "Studio hard light, crisp shadows, fashion photography, stark contrast, editorial sharpness, dramatic precision",
      "chinese": "影棚硬光，锐利阴影，时尚摄影，强烈对比，杂志锐度，戏剧精准"
    },
    {
      "name": "月光冷调",
      "english": "Moonlight cool blue, nocturnal atmosphere, silver-touched shadows, mysterious stillness, cold ethereal glow, night photography",
      "chinese": "月光冷蓝调，夜间氛围，银色阴影，神秘静谧，冰冷虚幻光芒，夜景摄影"
    },
    {
      "name": "柔光箱美颜",
      "english": "Softbox beauty light, diffused even illumination, flawless skin rendering, commercial portrait, gradient shadows, professional polish",
      "chinese": "柔光箱美颜光，散射均匀照明，无瑕肌肤渲染，商业人像，渐变阴影，专业质感"
    },
    {
      "name": "水下光影",
      "english": "Underwater caustics, rippling light patterns, aquatic blue-green, submerged serenity, refracted sunlight, deep sea mystery",
      "chinese": "水下焦散光，波纹光影，水生蓝绿，水下宁静，折射阳光，深海神秘"
    },
    {
      "name": "火焰动态光",
      "english": "Firelight dynamic, flickering warm orange, campfire intimacy, moving shadows, primal warmth, survival atmosphere",
      "chinese": "火焰动态光，摇曳暖橙，篝火亲密，移动阴影，原始温暖，生存氛围"
    },
    {
      "name": "烛光暖调",
      "english": "Candlelight warm glow, intimate atmosphere, flickering warmth, golden skin tones, romantic shadows, old masters painting quality",
      "chinese": "烛光暖调，亲密氛围，摇曳温暖，金色肤色，浪漫阴影，古典大师油画质感"
    },
    {
      "name": "环形光",
      "english": "Loop lighting, subtle nose shadow, natural portrait, versatile key light, commercial beauty standard, approachable warmth",
      "chinese": "环形光，微妙鼻影，自然人像，万能主光，商业美颜标准，亲和温暖"
    },
    {
      "name": "窗光散射",
      "english": "Window light diffused, soft directional light, natural portrait, Rembrandt variation, north-facing quality, painterly softness",
      "chinese": "窗光散射，柔和方向光，自然人像，伦勃朗变体，北向光质，绘画柔感"
    },
    {
      "name": "自然黄金时刻",
      "english": "Golden hour, soft warm glow, long shadows, backlit, ethereal atmosphere, sunset lighting, emotional warmth",
      "chinese": "黄金时刻，柔和温暖光晕，长阴影，逆光，空灵氛围，黄昏光影，情感温暖"
    },
    {
      "name": "蝴蝶光",
      "english": "Butterfly lighting, paramount glamour, shadow under nose, classic Hollywood portrait, beauty lighting, above-camera key",
      "chinese": "蝴蝶光/派拉蒙光，鼻下阴影，经典好莱坞人像，美颜光，摄影机上方主光"
    },
    {
      "name": "逆光剪影",
      "english": "Backlight silhouette, rim lighting, dramatic outline, subject in shadow, glowing edges, mystery and drama, sunset profile",
      "chinese": "逆光剪影，轮廓光，戏剧性轮廓，主体在阴影中，发光边缘，神秘与戏剧，日落侧影"
    },
    {
      "name": "霓虹夜景",
      "english": "Neon night lighting, multicolored glow, urban darkness, cyberpunk atmosphere, reflections on wet surfaces, Blade Runner mood",
      "chinese": "霓虹夜景，多色发光，城市黑暗，赛博朋克氛围，湿润表面反射，银翼杀手氛围"
    },
    {
      "name": "霓虹对比",
      "english": "Neon noir lighting, bi-color contrast, pink and teal, sharp rim light, high saturation, deep blacks",
      "chinese": "霓虹黑色电影光，双色对比，粉青色调，锐利轮廓光，高饱和度，深邃黑色"
    }
  ],
  "专业视觉技术 > 色彩分级": [
    {
      "name": "HDR高动态",
      "english": "HDR high dynamic range, expanded tonal range, every detail visible, hyper-real clarity, dramatic sky, vivid reality",
      "chinese": "HDR高动态范围，扩展色调范围，每个细节可见，超现实清晰，戏剧性天空，生动现实"
    },
    {
      "name": "低调阴郁",
      "english": "Low-key lighting, moody atmosphere, deep blacks, cinematic gloom, noir aesthetic, mysterious and dark",
      "chinese": "低调照明，忧郁氛围，深邃黑色，电影般阴郁，黑色电影美学，神秘黑暗"
    },
    {
      "name": "低饱和高级灰",
      "english": "Desaturated muted tones, sophisticated gray palette, understated luxury, editorial restraint, high-fashion subtlety",
      "chinese": "低饱和高级灰，精致灰色调，低调奢华，杂志克制，高级时装微妙"
    },
    {
      "name": "冷蓝电影",
      "english": "Cold blue cinematic, David Fincher style, desaturated cool, thriller atmosphere, clinical precision, moody tension",
      "chinese": "冷蓝电影调，大卫·芬奇风格，去饱和冷调，惊悚氛围，临床精准，情绪张力"
    },
    {
      "name": "复古胶片",
      "english": "Vintage film stock, Kodak Portra 400, grainy texture, muted colors, nostalgic atmosphere, authentic analog look",
      "chinese": "复古胶片质感，柯达 Portra 400，颗粒感，低饱和，怀旧氛围，真实模拟感"
    },
    {
      "name": "复古胶片暖",
      "english": "Vintage warm film, Kodak Portra tones, golden skin, organic grain, analog nostalgia, sun-kissed warmth",
      "chinese": "复古胶片暖调，柯达Portra色调，金色肌肤，有机颗粒，模拟怀旧，阳光温暖"
    },
    {
      "name": "好莱坞青橙",
      "english": "Teal and Orange color grade, blockbuster cinematic look, complementary colors, high contrast, professional finish",
      "chinese": "好莱坞青橙色调，商业大片感，互补色，高对比，专业成品感"
    },
    {
      "name": "日系清新",
      "english": "Japanese fresh pastel, overexposed highlights, soft contrast, Fuji Pro 400H, airy lightness, gentle warmth, dreamy youth",
      "chinese": "日系清新色调，过曝高光，柔和对比，富士Pro 400H，通透轻盈，温柔暖意，梦幻青春"
    },
    {
      "name": "日落橘红",
      "english": "Sunset orange-red grading, golden hour warmth, amber sky, romantic dusk, fire horizon, passionate glow",
      "chinese": "日落橘红色调，黄金时刻温暖，琥珀天空，浪漫黄昏，火焰地平线，热情辉光"
    },
    {
      "name": "暗夜深蓝",
      "english": "Deep midnight blue, navy darkness, indigo shadows, nocturnal elegance, deep sea mystery, cosmic depth",
      "chinese": "深蓝午夜调，深海军蓝，靛蓝阴影，夜间雅韵，深海神秘，宇宙深度"
    },
    {
      "name": "柔粉梦幻",
      "english": "Soft pink dreamy, cotton candy palette, pastel rose, feminine warmth, gentle diffusion, romantic haze, spring blossoms",
      "chinese": "柔粉梦幻调，棉花糖配色，粉彩玫瑰，女性温暖，柔和散射，浪漫雾化，春日花开"
    },
    {
      "name": "森林绿意",
      "english": "Forest green tones, emerald depth, natural vitality, mossy warmth, woodland shadows, organic richness, bioluminescence hint",
      "chinese": "森林绿调，翡翠深度，自然活力，苔藓温暖，林地阴影，有机丰富，生物发光暗示"
    },
    {
      "name": "沙漠暖金",
      "english": "Desert warm gold, amber and terracotta, sun-baked earth tones, Lawrence of Arabia palette, golden expanse, arid beauty",
      "chinese": "沙漠暖金调，琥珀与赤陶，日晒大地色调，阿拉伯的劳伦斯配色，金色广袤，干旱之美"
    },
    {
      "name": "胶片颗粒",
      "english": "Film grain texture, organic noise, analog imperfection, 35mm character, vintage cinema, tactile warmth, nostalgic surface",
      "chinese": "胶片颗粒质感，有机噪点，模拟不完美，35mm特性，复古电影，触感温暖，怀旧表面"
    },
    {
      "name": "赛博霓虹",
      "english": "Cyberpunk neon grading, saturated magenta and cyan, artificial vibrance, dystopian glow, electric energy, future noir",
      "chinese": "赛博霓虹色调，饱和品红与青色，人工鲜艳，反乌托邦辉光，电能，未来黑色"
    },
    {
      "name": "金属冷灰",
      "english": "Metallic cold gray, steel and chrome, industrial precision, desaturated silver, modernist cool, automotive finish",
      "chinese": "金属冷灰调，钢铁与铬合金，工业精准，去饱和银色，现代主义冷感，汽车漆面"
    },
    {
      "name": "高调纯净",
      "english": "High-key lighting, bright and airy, white dominates, soft shadows, clean and fresh, luxury commercial look",
      "chinese": "高调照明，明亮通透，白色主调，柔和阴影，干净清新，奢华商业感"
    },
    {
      "name": "黑白高对比",
      "english": "High contrast black and white, Ansel Adams zone system, dramatic shadows, pure whites, tonal mastery, monochrome power",
      "chinese": "黑白高对比，安塞尔·亚当斯区域系统，戏剧性阴影，纯白，色调掌控，单色力量"
    }
  ],
  "情绪与氛围": [
    {
      "name": "壮阔震撼",
      "english": "Grand awe-inspiring mood, epic scale revelation, sublime nature, human insignificance, cosmic wonder, jaw-dropping vastness",
      "chinese": "壮阔震撼情绪，史诗尺度揭示，崇高自然，人类渺小，宇宙奇观，令人窒息的广袤"
    },
    {
      "name": "孤独寂寥",
      "english": "Lonely desolate mood, single figure isolation, vast emptiness, Edward Hopper melancholy, quiet solitude, contemplative silence",
      "chinese": "孤独寂寥情绪，单人孤立，广袤空虚，霍珀式忧郁，安静独处，沉思沉默"
    },
    {
      "name": "忧郁诗意",
      "english": "Melancholic poetic mood, rainy window reflection, autumn leaves falling, noir cigarette smoke, beautiful sadness, romantic despair",
      "chinese": "忧郁诗意情绪，雨天窗面反射，秋叶飘落，黑色电影烟雾，美丽的悲伤，浪漫绝望"
    },
    {
      "name": "怀旧温情",
      "english": "Nostalgic warmth, faded photograph memories, childhood summers, sepia-tinted recollection, bittersweet longing, time-passed tenderness",
      "chinese": "怀旧温情，褪色照片记忆，童年夏天，棕褐色回忆，苦乐参半的思念，时光流逝的温柔"
    },
    {
      "name": "梦幻迷离",
      "english": "Dreamy ethereal mood, soft focus diffusion, floating elements, Alice in Wonderland, between waking and sleeping, surreal haze",
      "chinese": "梦幻迷离情绪，柔焦散射，漂浮元素，爱丽丝仙境，半梦半醒，超现实雾化"
    },
    {
      "name": "欢快活力",
      "english": "Joyful energetic mood, vibrant burst, dance celebration, colorful confetti, sunlight play, infectious happiness, festival spirit",
      "chinese": "欢快活力情绪，鲜艳迸发，舞蹈庆祝，彩色纸屑，阳光嬉戏，感染性快乐，节日精神"
    },
    {
      "name": "温暖治愈",
      "english": "Warm healing atmosphere, gentle sunlight, cozy interior, comfort food, soft blankets, hygge moment, peaceful restoration",
      "chinese": "温暖治愈氛围，温柔阳光，舒适室内，治愈食物，柔软毯子，惬意时刻，宁静修复"
    },
    {
      "name": "神秘诡异",
      "english": "Mysterious uncanny mood, fog-shrouded secrets, half-seen figures, David Lynch unease, something lurking, twilight zone ambiguity",
      "chinese": "神秘诡异情绪，雾中秘密，半影人物，大卫·林奇不安，潜伏之物，阴阳魔界模糊"
    },
    {
      "name": "紧张压迫",
      "english": "Tense oppressive atmosphere, claustrophobic framing, dripping sounds, narrow corridor, countdown pressure, anxiety build-up",
      "chinese": "紧张压迫氛围，幽闭构图，滴水声，狭窄走廊，倒计时压力，焦虑积累"
    },
    {
      "name": "英雄史诗",
      "english": "Heroic epic mood, triumphant rise, swelling orchestral moment, against-all-odds courage, dawn breaking, inspirational power, legendary stature",
      "chinese": "英雄史诗情绪，凯旋崛起，澎湃管弦乐时刻，逆境勇气，黎明破晓，鼓舞力量，传奇气度"
    }
  ],
  "导演风格": [
    {
      "name": "丹尼斯维伦纽瓦",
      "english": "Denis Villeneuve style, monumental scale, minimal dialogue, immersive sound design, desolate beauty, slow-burn tension, atmospheric dread",
      "chinese": "维伦纽瓦风格，纪念碑尺度，极简对白，沉浸声音设计，荒凉之美，慢燃张力，氛围恐惧"
    },
    {
      "name": "克里斯托弗诺兰",
      "english": "Christopher Nolan style, IMAX grandeur, non-linear narrative, practical effects scale, Hans Zimmer bass, temporal manipulation, cerebral spectacle",
      "chinese": "诺兰风格，IMAX宏大，非线性叙事，实拍规模，汉斯·季默低音，时间操控，理性奇观"
    },
    {
      "name": "大卫芬奇",
      "english": "David Fincher style, desaturated green-yellow palette, meticulous framing, dark psychological undertone, smooth camera movement, obsessive detail",
      "chinese": "大卫·芬奇风格，去饱和绿黄调，精准构图，暗黑心理底色，流畅摄影机运动，强迫细节"
    },
    {
      "name": "宫崎骏",
      "english": "Hayao Miyazaki style, hand-painted watercolor backgrounds, flying machines, nature spirits, environmental harmony, childhood wonder, gentle magic",
      "chinese": "宫崎骏风格，手绘水彩背景，飞行器，自然精灵，环境和谐，童年奇观，温柔魔法"
    },
    {
      "name": "张艺谋",
      "english": "Zhang Yimou style, sweeping color symbolism, mass choreography, Chinese cultural grandeur, red lantern warmth, visual poetry, epic ceremony",
      "chinese": "张艺谋风格，宏大色彩象征，群体编舞，中国文化宏大，红灯笼温暖，视觉诗意，史诗仪式"
    },
    {
      "name": "斯坦利库布里克",
      "english": "Stanley Kubrick style, one-point perspective symmetry, cold detachment, clinical precision, unsettling beauty, wide-angle distortion, slow zoom",
      "chinese": "斯坦利·库布里克风格，一点透视对称，冷酷疏离，临床精准，不安之美，广角畸变，缓慢缩放"
    },
    {
      "name": "新海诚",
      "english": "Makoto Shinkai style, hyper-detailed sky, golden hour anime, lens flare beauty, ethereal clouds, long-distance longing, photorealistic animation backgrounds",
      "chinese": "新海诚风格，超精细天空，黄金时刻动漫，镜头光晕之美，虚幻云彩，远距离思念，照片级动画背景"
    },
    {
      "name": "昆汀塔伦蒂诺",
      "english": "Quentin Tarantino style, trunk-shot POV, non-linear chapters, stylized violence, pop culture dialogue, bold color, homage cinema",
      "chinese": "昆汀风格，后备箱视角，非线性章节，风格化暴力，流行文化对白，大胆色彩，致敬电影"
    },
    {
      "name": "王家卫",
      "english": "Wong Kar-wai style, step-printing motion blur, saturated colors, neon reflections, romantic melancholy, handheld intimacy, urban loneliness",
      "chinese": "王家卫风格，抽帧运动模糊，饱和色彩，霓虹反射，浪漫忧郁，手持亲密，都市孤独"
    },
    {
      "name": "贾樟柯",
      "english": "Jia Zhangke style, long-take observation, social realism, provincial China, muted everyday, documentary fiction, temporal passage",
      "chinese": "贾樟柯风格，长镜头观察，社会写实，中国县城，低沉日常，纪录片式虚构，时间流逝"
    },
    {
      "name": "雷德利斯科特",
      "english": "Ridley Scott style, atmospheric world-building, detailed production design, epic scale with intimate moments, smoke and haze, painterly lighting",
      "chinese": "雷德利·斯科特风格，氛围世界构建，细致制作设计，宏大中含亲密，烟雾弥漫，绘画光感"
    },
    {
      "name": "韦斯安德森",
      "english": "Wes Anderson style, symmetrical framing, pastel color palette, whimsical diorama, deadpan humor, meticulously curated sets, storybook composition",
      "chinese": "韦斯·安德森风格，对称构图，粉彩色调，奇想微缩，冷面幽默，精心布置场景，故事书构图"
    }
  ],
  "时代背景 > 远古与神话": [
    {
      "name": "凯尔特神秘",
      "english": "Celtic mysticism, standing stones, druid rituals, knotwork patterns, misty highlands, ancient forests, tribal spirituality",
      "chinese": "凯尔特神秘主义，巨石阵，德鲁伊仪式，结绳纹样，雾蒙高地，古老森林，部落灵性"
    },
    {
      "name": "北欧维京",
      "english": "Norse Viking era, longships on fjords, runic inscriptions, Valhalla mythology, frozen landscapes, warrior culture, northern lights",
      "chinese": "北欧维京时代，峡湾长船，卢恩铭文，英灵殿神话，冰冻景观，战士文化，北极光"
    },
    {
      "name": "古埃及神权",
      "english": "Ancient Egypt, gold and lapis lazuli, monumental pyramids, divine symmetry, hieroglyphics, scorching desert sun",
      "chinese": "古埃及，金与青金石，宏伟金字塔，神圣对称，象形文字，灼热沙漠之阳"
    },
    {
      "name": "古巴比伦",
      "english": "Ancient Babylon, Hanging Gardens, ziggurat towers, cuneiform tablets, Ishtar Gate blue, Mesopotamian grandeur, cradle of civilization",
      "chinese": "古巴比伦，空中花园，金字形神塔，楔形文字，伊斯塔门蓝，美索不达米亚宏大，文明摇篮"
    },
    {
      "name": "古罗马角斗",
      "english": "Ancient Roman gladiator arena, Colosseum grandeur, sand and blood, imperial spectacle, bronze armor, crowd roaring, epic combat",
      "chinese": "古罗马角斗场，斗兽场宏大，沙与血，帝国奇观，青铜铠甲，人群咆哮，史诗战斗"
    },
    {
      "name": "史前原始",
      "english": "Primal prehistoric world, raw earth, gargantuan beasts, cave art textures, cinematic nature, primordial fog",
      "chinese": "史前原始世界，纯粹大地，巨兽，洞穴壁画纹理，电影感自然，原始浓雾"
    },
    {
      "name": "希腊神话",
      "english": "Ancient Greek mythology, white marble temples, divine proportions, ethereal, Olympian atmosphere, soft golden light",
      "chinese": "古希腊神话，白色大理石神庙，神圣比例，空灵，奥林匹斯氛围，柔和金光"
    },
    {
      "name": "玛雅文明",
      "english": "Mayan civilization, jungle pyramids, astronomical precision, feathered serpent, stone carvings, ceremonial sacrifice, tropical mystery",
      "chinese": "玛雅文明，丛林金字塔，天文精准，羽蛇神，石刻浮雕，祭祀仪式，热带神秘"
    }
  ],
  "时代背景 > 中古与近古": [
    {
      "name": "丝绸之路",
      "english": "Silk Road caravan, desert trade route, spice and silk, cultural exchange, oasis stops, merchant adventure, East meets West",
      "chinese": "丝绸之路商队，沙漠贸易路线，香料与丝绸，文化交流，绿洲驿站，商旅冒险，东西交汇"
    },
    {
      "name": "中世纪黑暗",
      "english": "Dark Ages, gothic stone architecture, torchlight, mud and iron, gritty realism, oppressive atmosphere, candlelight",
      "chinese": "中世纪黑暗，哥特石造建筑，火炬光，泥泞与钢铁，粗粝写实，压抑氛围，烛光"
    },
    {
      "name": "大航海时代",
      "english": "Age of Discovery, galleon ships, uncharted waters, New World exploration, cartographic wonder, maritime adventure, colonial encounters",
      "chinese": "大航海时代，盖伦帆船，未知水域，新大陆探索，制图奇迹，海上冒险，殖民邂逅"
    },
    {
      "name": "文艺复兴市集",
      "english": "Renaissance marketplace, merchant quarter, Leonardo inventions, Medici patronage, artisan workshops, Florence golden age",
      "chinese": "文艺复兴市集，商人街区，达芬奇发明，美第奇赞助，工匠作坊，佛罗伦萨黄金时代"
    },
    {
      "name": "日本战国",
      "english": "Sengoku Japan, samurai armor, castle towns, katana duels, daimyo warfare, cherry blossom and blood, bushido spirit",
      "chinese": "日本战国时代，武士铠甲，城下町，武士刀决斗，大名战争，樱花与血，武士道精神"
    },
    {
      "name": "维多利亚工业",
      "english": "Victorian Steampunk, brass and steam, cobblestone London, gas lamps, velvet costumes, foggy industrial city",
      "chinese": "维多利亚蒸汽朋克，黄铜与蒸汽，鹅卵石伦敦，煤气灯，天鹅绒服装，雾气工业城"
    },
    {
      "name": "美好年代",
      "english": "Belle Époque, Art Nouveau, flowing organic lines, opulent cafes, Parisian elegance, soft pastel lighting",
      "chinese": "美好年代，新艺术运动，流畅有机线条，奢华咖啡馆，巴黎优雅，柔和马卡龙光"
    },
    {
      "name": "骑士时代",
      "english": "Medieval knight era, chainmail and plate armor, castle sieges, chivalric code, tournament jousting, feudal grandeur, crusader banners",
      "chinese": "中世纪骑士时代，锁子甲与板甲，城堡围攻，骑士精神，比武大赛，封建宏大，十字军旗帜"
    }
  ],
  "时代背景 > 现代与超越": [
    {
      "name": "中世纪现代",
      "english": "Mid-century modern, 1950s aesthetic, Eames style, organic curves, warm wood, optimistic futurism, clean composition",
      "chinese": "中世纪现代，1950年代美学，伊姆斯风格，有机曲线，温暖木材，乐观未来感，干净构图"
    },
    {
      "name": "原子时代",
      "english": "Atomic Age 1950s, space-age optimism, jet-set modernism, pastel diners, tailfin cars, suburban dream, Sputnik anxiety",
      "chinese": "原子时代1950年代，太空乐观主义，喷气现代主义，粉彩餐厅，尾翼汽车，郊区梦想，人造卫星焦虑"
    },
    {
      "name": "复古未来",
      "english": "Retro-futurism, 1960s space age vision, vintage tomorrow, Tomorrowland optimism, atomic modernism, future as imagined past",
      "chinese": "复古未来主义，1960年代太空时代愿景，复古明天，明日乐园乐观主义，原子现代主义，过去想象中的未来"
    },
    {
      "name": "太阳朋克",
      "english": "Solarpunk utopia, renewable harmony, green architecture, sustainable beauty, garden cities, solar-powered elegance, hopeful future",
      "chinese": "太阳朋克乌托邦，可再生和谐，绿色建筑，可持续之美，花园城市，太阳能雅韵，充满希望的未来"
    },
    {
      "name": "柴油朋克",
      "english": "Dieselpunk 1930s-40s, art deco machinery, wartime industrial, diesel-powered aesthetic, interwar grit, retro-futuristic military",
      "chinese": "柴油朋克1930-40年代，装饰艺术机械，战时工业，柴油驱动美学，战间期粗粝，复古未来军事"
    },
    {
      "name": "生物朋克",
      "english": "Biopunk future, organic technology, genetic modification, living architecture, bio-luminescent, body horror beauty, wetware aesthetic",
      "chinese": "生物朋克未来，有机科技，基因改造，活体建筑，生物发光，身体恐怖之美，湿件美学"
    },
    {
      "name": "蒸汽朋克",
      "english": "Steampunk Victorian, brass and copper machinery, steam-powered contraptions, gear mechanisms, Jules Verne adventure, industrial romance",
      "chinese": "蒸汽朋克维多利亚，黄铜铜制机械，蒸汽驱动装置，齿轮机构，儒勒·凡尔纳冒险，工业浪漫"
    },
    {
      "name": "赛博朋克",
      "english": "Cyberpunk dystopia, high-tech low-life, neon rain, rainy asphalt, holographic advertisements, chrome and plastic",
      "chinese": "赛博朋克反乌托邦，高科技低生活，霓虹雨，雨夜沥青，全息广告，铬合金与塑料"
    },
    {
      "name": "迷幻60年代",
      "english": "Psychedelic 1960s, acid colors, warped patterns, Woodstock freedom, counterculture revolution, trippy visuals, flower power",
      "chinese": "迷幻60年代，酸性色彩，扭曲图案，伍德斯托克自由，反文化革命，致幻视觉，花的力量"
    }
  ],
  "专业技术提示词 > 色调氛围": [
    {
      "name": "冰蓝未来",
      "english": "Ice blue future tone, cryogenic cool, sterile technology, clinical modernity, frozen precision, arctic futurism",
      "chinese": "冰蓝未来色调，冷冻冷调，无菌科技，临床现代性，冰冷精准，北极未来主义"
    },
    {
      "name": "复古棕褐",
      "english": "Sepia vintage tone, aged photograph warmth, brown monochrome, historical nostalgia, antique paper, time-worn elegance",
      "chinese": "复古棕褐色调，老照片温暖，棕色单色，历史怀旧，古董纸张，时光磨损雅韵"
    },
    {
      "name": "好莱坞青橙",
      "english": "Teal and orange color grading, cinematic blockbuster look, high contrast, professional color correction",
      "chinese": "青橙色调，好莱坞大片观感，高对比度，专业色彩校正"
    },
    {
      "name": "忧郁暗调",
      "english": "Moody dark tones, deep blacks, muted colors, melancholic, noir atmosphere, cinematic shadows",
      "chinese": "忧郁暗色调，深邃黑色，低饱和色彩，忧郁，黑色电影氛围，电影级阴影"
    },
    {
      "name": "琥珀暖阳",
      "english": "Amber warm sunshine, honey-gold glow, autumn warmth, ripe harvest, golden hour extended, bronzed skin tones",
      "chinese": "琥珀暖阳色调，蜜金辉光，秋天温暖，成熟丰收，延长黄金时刻，古铜肤色"
    },
    {
      "name": "紫红奢华",
      "english": "Purple-red luxury tone, royal plum, velvet richness, imperial decadence, wine-dark opulence, regal warmth",
      "chinese": "紫红奢华色调，皇家梅子色，天鹅绒丰富，帝国颓废，酒红色华丽，皇室温暖"
    },
    {
      "name": "翡翠浓郁",
      "english": "Emerald rich tones, deep green luxury, jewel-box intensity, tropical depth, jungle canopy, verdant opulence",
      "chinese": "翡翠浓郁色调，深绿奢华，珠宝盒强度，热带深度，丛林冠层，翠绿富丽"
    },
    {
      "name": "莫兰迪高级灰",
      "english": "Morandi muted palette, sophisticated gray-tones, Italian still life, understated elegance, painterly restraint, gallery-worthy subtlety",
      "chinese": "莫兰迪高级灰调，精致灰色调，意大利静物，低调雅韵，绘画克制，美术馆级别微妙"
    },
    {
      "name": "马卡龙梦幻",
      "english": "Pastel color palette, soft pinks and light blues, dreamy atmosphere, whimsical, airy and light",
      "chinese": "马卡龙色调，柔和粉色与浅蓝色，梦幻氛围，奇异幻想，空灵轻盈"
    },
    {
      "name": "高能亮色",
      "english": "Hyper-vibrant colors, saturated palette, electric tones, high energy, pop art inspiration",
      "chinese": "极高饱和色彩，鲜艳色盘，电能色调，高能量，波普艺术灵感"
    }
  ],
  "专业技术提示词 > 画面构图": [
    {
      "name": "对称走廊",
      "english": "Symmetrical corridor, one-point perspective, Stanley Kubrick, receding walls, institutional unease, infinite hallway, ordered dread",
      "chinese": "对称走廊，一点透视，斯坦利·库布里克，后退墙壁，机构不安，无限走廊，秩序恐惧"
    },
    {
      "name": "戏剧视角",
      "english": "Dutch angle, low angle shot, high angle shot, worm's eye view, dramatic perspective, dynamic tension",
      "chinese": "荷兰角/倾斜构图，低视角拍摄，高视角拍摄，虫眼视角，戏剧化透视，动态紧张感"
    },
    {
      "name": "景深层次",
      "english": "Deep depth of field, layered composition, foreground midground background, sharp throughout, Orson Welles deep focus, dimensional storytelling",
      "chinese": "景深层次构图，前后景分层，前景中景背景，全画面锐利，奥森·威尔斯深焦，维度叙事"
    },
    {
      "name": "极简人物",
      "english": "Minimalist figure in landscape, tiny human vast nature, Caspar David Friedrich, existential scale, lone wanderer, sublime isolation",
      "chinese": "极简人物风景，渺小人类广袤自然，弗里德里希式，存在尺度，孤独漫游者，崇高孤寂"
    },
    {
      "name": "框架构图",
      "english": "Natural framing, window frame, over-the-shoulder shot, silhouette, negative space, minimalist composition",
      "chinese": "自然框架，窗框构图，过肩镜头，剪影，留白，极简构图"
    },
    {
      "name": "经典法则",
      "english": "Rule of thirds, golden ratio, symmetrical composition, leading lines, balanced frame, professional photography",
      "chinese": "三分法，黄金比例，对称构图，引导线，平衡构图，专业摄影"
    },
    {
      "name": "视觉三角",
      "english": "Visual triangle composition, three-point arrangement, eye-flow guidance, balanced tension, dynamic triad, stable yet energetic",
      "chinese": "视觉三角构图，三点排列，视线引导，平衡张力，动态三合一，稳定而有力"
    },
    {
      "name": "门框构图",
      "english": "Doorway framing, threshold composition, inside-outside duality, portal narrative, architectural vignette, liminal space",
      "chinese": "门框构图，阈值构图，内外双重性，入口叙事，建筑暗角，阈限空间"
    }
  ],
  "专业技术提示词 > 视频运镜": [
    {
      "name": "亲密细节",
      "english": "Extreme close-up, macro shot, shallow depth of field, bokeh, focus on detail, emotional intimacy",
      "chinese": "极近特写，微距拍摄，浅景深，背景虚化，聚焦细节，情感亲密度"
    },
    {
      "name": "动态快切",
      "english": "Dynamic motion, fast pan, shaky cam, action shot, cinematic blur, high energy, immersive perspective",
      "chinese": "动态运动，快速平移，手持抖动感，动作镜头，电影模糊，高能量，沉浸式视角"
    },
    {
      "name": "升降镜头",
      "english": "Crane jib shot, vertical movement, rising revelation, descending intimacy, height drama, sweeping vertical narrative",
      "chinese": "升降镜头，垂直运动，上升揭示，下降亲密，高度戏剧，垂直叙事"
    },
    {
      "name": "史诗宏大",
      "english": "Extreme wide shot, aerial view, drone shot, bird's eye view, sweeping landscape, scale contrast",
      "chinese": "极大广角镜头，航拍视图，无人机拍摄，鸟瞰视角，横扫景观，规模对比感"
    },
    {
      "name": "延时摄影",
      "english": "Time-lapse hyperlapse, accelerated time flow, clouds racing, day-night transition, urban pulse, hours in seconds",
      "chinese": "延时摄影，加速时间流动，云朵飞驰，昼夜转换，城市脉动，数小时压缩成秒"
    },
    {
      "name": "快慢变速",
      "english": "Speed ramp effect, slow-motion to fast-cut, time manipulation, dramatic beat sync, action emphasis, 300-style combat flow",
      "chinese": "快慢变速效果，慢动作到快切，时间操控，戏剧节拍同步，动作强调，300勇士式战斗流"
    },
    {
      "name": "快速闪回",
      "english": "Quick flashback montage, memory fragments, strobe recall, traumatic flash, temporal jump, non-linear narrative, mental jump-cut",
      "chinese": "快速闪回蒙太奇，记忆碎片，闪光回忆，创伤闪回，时间跳跃，非线性叙事，心理跳切"
    },
    {
      "name": "无缝转场",
      "english": "Seamless transition, match cut, in-camera wipe, morphing dissolve, continuous flow, invisible edit, optical illusion cut",
      "chinese": "无缝转场，匹配剪辑，摄影机内擦除，变形溶解，连续流动，隐形剪辑，视觉错觉剪切"
    },
    {
      "name": "时间静止",
      "english": "Time freeze frame, bullet-time stop, frozen moment, suspended action, 360-degree frozen world, Matrix pause, temporal stasis",
      "chinese": "时间冻结帧，子弹时间停止，冻结瞬间，悬停动作，360度冻结世界，黑客帝国暂停，时间静止"
    },
    {
      "name": "流畅滑行",
      "english": "Smooth dolly shot, gliding camera, steadycam, elegant transition, slow motion, professional cinematography",
      "chinese": "流畅的移动拍摄，滑轨镜头，稳定器，优雅过渡，慢动作，专业电影拍摄"
    }
  ],
  "专业技术提示词 > 美术方向": [
    {
      "name": "哥特风格",
      "english": "Gothic architecture, dark fantasy, eerie atmosphere, pointed arches, gargoyles, gloomy moonlight",
      "chinese": "哥特建筑，暗黑幻想，阴森氛围，尖拱，滴水嘴兽，阴郁月光"
    },
    {
      "name": "太空歌剧",
      "english": "Space opera aesthetic, galactic empires, starship grandeur, alien civilizations, cosmic battles, Star Wars scale, interstellar romance",
      "chinese": "太空歌剧美学，银河帝国，星舰宏大，外星文明，宇宙战役，星球大战尺度，星际浪漫"
    },
    {
      "name": "废土末日",
      "english": "Wasteland post-apocalyptic, Mad Max aesthetic, rust and decay, scavenged machinery, desert desolation, survival grit, makeshift armor",
      "chinese": "废土末日美学，疯狂麦克斯风格，锈蚀衰败，拾荒机械，沙漠荒凉，生存粗粝，拼凑装甲"
    },
    {
      "name": "暗黑童话",
      "english": "Dark fairytale aesthetic, twisted folklore, Tim Burton whimsy, gothic nursery, haunted innocence, Brothers Grimm, eerie enchantment",
      "chinese": "暗黑童话美学，扭曲民间传说，蒂姆·伯顿奇想，哥特摇篮，被困扰的纯真，格林兄弟，诡异迷人"
    },
    {
      "name": "有机自然",
      "english": "Organic natural aesthetic, flowing biological forms, tree bark textures, leaf patterns, living architecture, biomorphic design",
      "chinese": "有机自然美学，流动生物形态，树皮纹理，叶片图案，活体建筑，生物形态设计"
    },
    {
      "name": "极大主义",
      "english": "Maximalist style, intricate details, cluttered elegance, vibrant explosion of colors, complex textures",
      "chinese": "极大主义风格，复杂细节，繁复的优雅，色彩的绚丽爆发，复杂纹理"
    },
    {
      "name": "极简主义",
      "english": "Minimalist style, clean white space, simplicity, zen-like, focus on a single object, soft tones",
      "chinese": "极简主义风格，干净白空间，简单，禅意，聚焦单一物体，柔和色调"
    },
    {
      "name": "水下深渊",
      "english": "Abyssal underwater aesthetic, deep sea creatures, bioluminescence, pressure darkness, Jacques Cousteau mystery, benthic wonder",
      "chinese": "深渊水下美学，深海生物，生物发光，压力黑暗，库斯托神秘，海底奇观"
    },
    {
      "name": "水晶几何",
      "english": "Crystal geometric aesthetic, faceted surfaces, prismatic light, mineral formations, digital gemstones, geometric purity",
      "chinese": "水晶几何美学，切割表面，棱镜光线，矿物形态，数字宝石，几何纯粹"
    },
    {
      "name": "蒸汽工业",
      "english": "Steam industrial aesthetic, Victorian factory, brass pipes, pressure gauges, soot and steam, mechanical beauty, Industrial Revolution",
      "chinese": "蒸汽工业美学，维多利亚工厂，黄铜管道，压力表，煤烟与蒸汽，机械之美，工业革命"
    },
    {
      "name": "赛博朋克美术",
      "english": "Cyberpunk aesthetic, high-tech low-life, rainy streets, neon signs, synthetic materials, robotic components",
      "chinese": "赛博朋克美学，高科技低生活，雨夜街道，霓虹灯招牌，合成材料，机器人组件"
    }
  ],
  "专业技术提示词 > 灯光氛围": [
    {
      "name": "商业工作室光",
      "english": "Professional studio lighting, softbox, three-point lighting, clean background, high-end product photography, sharp focus",
      "chinese": "专业工作室光效，柔光箱，三点照明，干净背景，高端产品摄影，锐利聚焦"
    },
    {
      "name": "工业冷光",
      "english": "Industrial cold light, fluorescent harshness, institutional white, hospital sterility, factory floor, clinical observation",
      "chinese": "工业冷光，荧光灯刺眼，机构白色，医院无菌，工厂地面，临床观察"
    },
    {
      "name": "电影级光影",
      "english": "Cinematic lighting, volumetric fog, God rays, dramatic chiaroscuro, rim lighting, atmosphere, high contrast",
      "chinese": "电影级光影，体积雾，耶稣光，戏剧化明暗对照，轮廓光，氛围感，高对比度"
    },
    {
      "name": "篝火暖光",
      "english": "Campfire warm glow, flickering orange light, intimate circle, survival warmth, storytelling atmosphere, primal gathering",
      "chinese": "篝火暖光，摇曳橙色光线，亲密圆圈，生存温暖，讲故事氛围，原始聚会"
    },
    {
      "name": "自然光影",
      "english": "Golden hour, soft morning light, blue hour, moonlight, dappled sunlight through leaves, warm glow",
      "chinese": "黄金时刻，柔软晨光，蓝色时刻，月光，叶间斑驳阳光，温暖光晕"
    },
    {
      "name": "舞台聚光",
      "english": "Stage spotlight, theatrical illumination, single point focus, dramatic isolation, performance lighting, cabaret glamour",
      "chinese": "舞台聚光灯，戏剧照明，单点焦点，戏剧性孤立，演出灯光，卡巴莱魅力"
    },
    {
      "name": "蓝色时刻",
      "english": "Blue hour twilight, pre-dawn or post-sunset, cool ambient glow, city lights emerging, transitional magic, peaceful melancholy",
      "chinese": "蓝色时刻暮光，黎明前或日落后，冷调环境光，城市灯光浮现，过渡魔力，宁静忧郁"
    },
    {
      "name": "蓝调时刻",
      "english": "Blue hour cityscape, twilight urban, cool blue ambient, warm window lights, day-night transition, metropolitan romance",
      "chinese": "蓝调时刻城市，暮光都市，冷蓝环境光，温暖窗灯，昼夜过渡，都市浪漫"
    },
    {
      "name": "霓虹赛博光",
      "english": "Neon lighting, cyberpunk glow, pink and teal palette, fluorescent lights, high contrast night scene",
      "chinese": "霓虹灯光，赛博朋克光辉，粉青色调，荧光灯，高对比度夜景"
    },
    {
      "name": "黄金时刻",
      "english": "Golden hour magic, warm low-angle sun, long shadows, honey light, photographer's favorite, skin tone perfection, natural warmth",
      "chinese": "黄金时刻魔力，温暖低角度阳光，长阴影，蜜色光线，摄影师最爱，完美肤色，自然温暖"
    }
  ],
  "时代特征": [
    {
      "name": "中世纪",
      "english": "Dark ages, medieval castle, stone walls, torchlight, knights in armor, muddy streets, gritty realism, cinematic",
      "chinese": "黑暗时代，中世纪城堡，石墙，火炬光，身穿盔甲的骑士，泥泞街道，粗粝写实，电影感"
    },
    {
      "name": "史前时代",
      "english": "Prehistoric cave paintings, primal nature, raw earth, mammoth, primitive tools, cinematic lighting, ancient atmosphere",
      "chinese": "史前洞穴壁画，原始自然，粗糙大地，长毛象，原始工具，电影光影，古老氛围"
    },
    {
      "name": "未来主义",
      "english": "Far future, interstellar travel, Dyson spheres, galactic empire, sleek white chrome, holographic interfaces, transcendental",
      "chinese": "遥远的未来，星际旅行，戴森球，银河帝国，流畅的白色铬合金，全息界面，超凡脱俗"
    },
    {
      "name": "现代主义",
      "english": "20th century modernism, Bauhaus style, clean lines, functionalism, minimal color palette, architectural precision",
      "chinese": "20世纪现代主义，包豪斯风格，干净线条，功能主义，极简色调，建筑精确度"
    },
    {
      "name": "维多利亚时代",
      "english": "Victorian era, steampunk elements, cobblestone streets, gas lamps, corsets and top hats, moody fog, industrial revolution",
      "chinese": "维多利亚时代，蒸汽朋克元素，鹅卵石街道，煤气灯，紧身胸衣与高礼帽，忧郁浓雾，工业革命"
    }
  ],
  "材质与纹理": [
    {
      "name": "丝绸流动",
      "english": "Flowing silk texture, iridescent sheen, soft draping, luxurious folds, light-catching movement, fabric in motion, Chinese brocade",
      "chinese": "流动丝绸纹理，虹彩光泽，柔软垂坠，奢华褶皱，光线捕捉运动，织物动态，中国锦缎"
    },
    {
      "name": "大理石光滑",
      "english": "Marble polished surface, veined stone texture, cool elegance, classical sculpture quality, high-gloss reflection, Mediterranean luxury",
      "chinese": "大理石光滑表面，纹理石质感，冷调雅韵，古典雕塑质感，高光反射，地中海奢华"
    },
    {
      "name": "木材温暖",
      "english": "Warm wood grain texture, natural rings and knots, oak and walnut, handcrafted warmth, organic patterns, forest-brought-home",
      "chinese": "温暖木纹纹理，天然年轮和结疤，橡木与胡桃木，手工温暖，有机图案，森林入室"
    },
    {
      "name": "水面波纹",
      "english": "Water surface ripples, reflective distortion, liquid mirror, concentric circles, pond surface, rainfall texture, aquatic calm",
      "chinese": "水面波纹纹理，反射扭曲，液态镜面，同心圆，池塘表面，雨滴纹理，水面宁静"
    },
    {
      "name": "混凝土粗犷",
      "english": "Concrete brutalist texture, raw cement, architectural honesty, exposed aggregate, modernist roughness, unfinished beauty",
      "chinese": "混凝土粗犷主义纹理，原始水泥，建筑诚实，裸露骨料，现代主义粗糙，未完成之美"
    },
    {
      "name": "烟雾缥缈",
      "english": "Smoke ethereal texture, wispy tendrils, incense curls, atmospheric diffusion, mysterious haze, floating particles, ghostly trails",
      "chinese": "烟雾缥缈纹理，纤细烟丝，焚香袅袅，大气散射，神秘薄雾，漂浮颗粒，幽灵轨迹"
    },
    {
      "name": "玻璃折射",
      "english": "Glass refraction texture, transparent distortion, prismatic rainbow edges, frosted surfaces, crystal clarity, light bending",
      "chinese": "玻璃折射纹理，透明扭曲，棱镜彩虹边缘，磨砂表面，水晶清晰，光线弯曲"
    },
    {
      "name": "皮革质感",
      "english": "Leather texture, aged patina, stitched grain, premium hide, luxury goods quality, warm brown tones, tactile richness",
      "chinese": "皮革质感，陈年光泽，缝线纹理，优质皮料，奢侈品品质，温暖棕调，触感丰富"
    },
    {
      "name": "苔藓生机",
      "english": "Moss living texture, verdant micro-world, forest floor carpet, dewdrop-covered, Japanese garden ground, ancient stone colonization",
      "chinese": "苔藓生机纹理，翠绿微观世界，森林地面地毯，露珠覆盖，日式庭院地面，古石殖民"
    },
    {
      "name": "金属锈蚀",
      "english": "Rusted metal texture, oxidized iron, weathered steel, industrial decay, patina beauty, corroded copper, abandonment aesthetics",
      "chinese": "金属锈蚀纹理，氧化铁，风化钢，工业衰败，锈蚀之美，腐蚀铜，废弃美学"
    }
  ],
  "电影类型扩展": [
    {
      "name": "科幻巨制",
      "english": "Sci-fi epic, futuristic cityscapes, advanced technology, space opera, Blade Runner aesthetic, cyberpunk elements, alien worlds, starship battles",
      "chinese": "科幻巨制，未来城市景观，先进科技，太空歌剧，银翼杀手美学，赛博朋克元素，外星世界，星际战舰"
    },
    {
      "name": "黑色电影",
      "english": "Film noir, dramatic shadows, femme fatale, moral ambiguity, cynical detective, rain-slicked streets, venetian blind shadows, hard-boiled dialogue",
      "chinese": "黑色电影，戏剧性阴影，致命女郎，道德模糊，愤世嫉俗侦探，雨湿街道，百叶窗阴影，硬汉对白"
    },
    {
      "name": "西部片",
      "english": "Western frontier, dusty towns, showdown at noon, saloon doors, cowboy hats, vast deserts, horses, outlaw justice, sunset silhouettes",
      "chinese": "西部边疆，尘土小镇，正午决斗，酒吧门，牛仔帽，广袤沙漠，马匹，亡命正义，日落剪影"
    },
    {
      "name": "武侠江湖",
      "english": "Wuxia martial arts, flying swordsmen, bamboo forest duel, ancient China, honor and betrayal, flowing robes, mystical powers, poetic combat",
      "chinese": "武侠江湖，飞剑侠客，竹林决斗，古代中国，荣誉与背叛，飘逸长袍，神秘力量，诗意战斗"
    },
    {
      "name": "爱情片",
      "english": "Romance film, intimate close-ups, soft lighting, yearning glances, romantic tension, emotional vulnerability, love story, heartfelt moments",
      "chinese": "爱情片，亲密特写，柔和光线，渴望眼神，浪漫张力，情感脆弱，爱情故事，心动时刻"
    },
    {
      "name": "喜剧片",
      "english": "Comedy film, bright colors, expressive faces, slapstick humor, witty dialogue, awkward situations, feel-good energy, laugh-out-loud moments",
      "chinese": "喜剧片，明亮色彩，丰富表情，滑稽幽默，机智对白，尴尬情境，愉悦能量，爆笑时刻"
    },
    {
      "name": "纪录片风格",
      "english": "Documentary style, raw authenticity, handheld camera, natural lighting, real subjects, observational, unscripted feel, vérité approach",
      "chinese": "纪录片风格，原始真实，手持摄影，自然光线，真实主体，观察式，无剧本感，真实电影手法"
    },
    {
      "name": "音乐歌舞片",
      "english": "Musical film, choreographed dance, synchronized movement, song and dance numbers, theatrical staging, colorful costumes, rhythmic editing, show-stopping performances",
      "chinese": "音乐歌舞片，编舞舞蹈，同步动作，歌舞表演，舞台调度，华丽服装，节奏剪辑，惊艳演出"
    },
    {
      "name": "动画电影",
      "english": "Animated film, stylized characters, vibrant colors, expressive animation, imaginative worlds, fluid motion, cartoon aesthetic, family-friendly",
      "chinese": "动画电影，风格化角色，鲜艳色彩，丰富动画，想象世界，流畅运动，卡通美学，老少皆宜"
    },
    {
      "name": "实验电影",
      "english": "Experimental cinema, non-linear narrative, abstract imagery, avant-garde techniques, dream logic, unconventional editing, artistic expression, challenging viewing",
      "chinese": "实验电影，非线性叙事，抽象意象，先锋技法，梦境逻辑，非传统剪辑，艺术表达，挑战性观看"
    }
  ],
  "画幅比例": [
    {
      "name": "超宽画幅 2.39:1",
      "english": "Cinemascope 2.39:1, ultra wide aspect ratio, epic panoramic, letterboxed, anamorphic lens, widescreen spectacle, theatrical framing",
      "chinese": "宽银幕 2.39:1，超宽画幅比例，史诗全景，信箱模式，变形镜头，宽屏奇观，影院构图"
    },
    {
      "name": "宽银幕 16:9",
      "english": "Widescreen 16:9, standard HD ratio, balanced composition, modern screen format, video standard, horizontal emphasis",
      "chinese": "宽银幕 16:9，标准高清比例，平衡构图，现代屏幕格式，视频标准，横向强调"
    },
    {
      "name": "经典画幅 4:3",
      "english": "Academy ratio 4:3, classic Hollywood framing, vintage aesthetic, square-ish frame, old-school composition, nostalgic format",
      "chinese": "学院比例 4:3，经典好莱坞构图，复古美学，方形画框，老派构图，怀旧格式"
    },
    {
      "name": "竖屏 9:16",
      "english": "Vertical 9:16, portrait orientation, mobile format, TikTok style, Instagram stories, tall composition, phone screen",
      "chinese": "竖屏 9:16，纵向方向，移动端格式，抖音风格，Instagram 快拍，高构图，手机屏幕"
    },
    {
      "name": "正方形 1:1",
      "english": "Square format 1:1, Instagram aesthetic, centered composition, balanced frame, social media ready, symmetrical",
      "chinese": "正方形 1:1，Instagram 美学，居中构图，平衡画框，社交媒体就绪，对称"
    },
    {
      "name": "超宽全景 21:9",
      "english": "Ultra-wide 21:9, cinematic immersion, panoramic vista, extended horizontal, movie theater feel, epic landscape",
      "chinese": "超宽全景 21:9，电影沉浸感，全景视野，延伸横向，影院感觉，史诗风景"
    },
    {
      "name": "IMAX 画幅",
      "english": "IMAX ratio 1.43:1, massive scale, immersive experience, towering frame, premium cinema, larger than life, vertical expansion",
      "chinese": "IMAX 比例 1.43:1，巨大规模，沉浸体验，高耸画框，高端影院，超越现实，纵向扩展"
    },
    {
      "name": "黄金比例",
      "english": "Golden ratio 1.618:1, divine proportion, aesthetically perfect, classical harmony, Fibonacci spiral, balanced beauty",
      "chinese": "黄金比例 1.618:1，神圣比例，美学完美，古典和谐，斐波那契螺旋，平衡之美"
    }
  ],
  "电影镜头扩展": [
    {
      "name": "航拍镜头",
      "english": "Aerial shot, drone perspective, bird's eye view, sweeping vista, top-down angle, helicopter shot, vast landscape reveal",
      "chinese": "航拍镜头，无人机视角，鸟瞰视角，扫视全景，俯视角度，直升机镜头，广袤风景揭示"
    },
    {
      "name": "跟拍镜头",
      "english": "Tracking shot, following movement, steady motion alongside, dolly track, smooth pursuit, character following, continuous flow",
      "chinese": "跟拍镜头，跟随运动，平稳并排移动，轨道推拉，平滑追踪，角色跟随，连续流动"
    },
    {
      "name": "摇臂镜头",
      "english": "Crane shot, sweeping arc, rising perspective, jib movement, dramatic reveal, vertical sweep, grand gesture",
      "chinese": "摇臂镜头，扫视弧线，上升视角，摇臂运动，戏剧性揭示，纵向扫视，宏大姿态"
    },
    {
      "name": "斯坦尼康",
      "english": "Steadicam shot, floating camera, smooth handheld, stabilized motion, operator following, fluid movement, gliding effect",
      "chinese": "斯坦尼康镜头，漂浮摄影机，平滑手持，稳定运动，操作员跟随，流畅运动，滑行效果"
    },
    {
      "name": "主观镜头",
      "english": "POV shot, first-person perspective, through character's eyes, subjective view, immersive angle, what they see",
      "chinese": "主观镜头，第一人称视角，透过角色眼睛，主观视角，沉浸角度，他们所见"
    },
    {
      "name": "过肩镜头",
      "english": "Over-the-shoulder shot, OTS framing, dialogue setup, connection between characters, shoulder in foreground, spatial relationship",
      "chinese": "过肩镜头，OTS 构图，对话设置，角色间联系，前景肩膀，空间关系"
    },
    {
      "name": "双人镜头",
      "english": "Two-shot, both characters in frame, relationship dynamic, paired composition, dialogue scene, balanced framing",
      "chinese": "双人镜头，两角色同框，关系动态，配对构图，对话场景，平衡构图"
    },
    {
      "name": "反应镜头",
      "english": "Reaction shot, emotional response, listening face, cutaway reaction, character expression, response to action",
      "chinese": "反应镜头，情感反应，倾听面孔，切出反应，角色表情，对动作的反应"
    },
    {
      "name": "插入镜头",
      "english": "Insert shot, detail close-up, narrative detail, cutaway insert, important object, story element",
      "chinese": "插入镜头，细节特写，叙事细节，切出插入，重要物品，故事元素"
    },
    {
      "name": "建立镜头",
      "english": "Establishing shot, location introduction, wide opening, setting the scene, context setting, place identification",
      "chinese": "建立镜头，地点介绍，宽广开场，场景设置，背景交代，地点识别"
    }
  ],
  "色彩分级扩展": [
    {
      "name": "青橙色调",
      "english": "Teal and orange grade, blockbuster color scheme, complementary contrast, Hollywood look, warm skin cool background, cinematic color",
      "chinese": "青橙调色，大片配色方案，互补对比，好莱坞外观，暖肤色冷背景，电影色彩"
    },
    {
      "name": "复古胶片",
      "english": "Vintage film look, faded colors, film grain, warm cast, nostalgic tone, analog aesthetic, Kodak Portra style",
      "chinese": "复古胶片外观，褪色色彩，胶片颗粒，暖色偏，怀旧色调，模拟美学，柯达 Portra 风格"
    },
    {
      "name": "高对比黑白",
      "english": "High contrast B&W, dramatic monochrome, deep blacks bright whites, noir aesthetic, timeless quality, graphic impact",
      "chinese": "高对比黑白，戏剧性单色，深黑亮白，黑色电影美学，永恒质感，图形冲击"
    },
    {
      "name": "低饱和调",
      "english": "Desaturated grade, muted palette, subtle colors, understated tone, melancholic mood, restrained color, documentary feel",
      "chinese": "低饱和调色，柔和调色板，微妙色彩，低调色调，忧郁情绪，克制色彩，纪录片感"
    },
    {
      "name": "霓虹赛博",
      "english": "Neon cyberpunk grade, saturated neon colors, pink and cyan, electric glow, futuristic palette, Blade Runner colors",
      "chinese": "霓虹赛博调色，饱和霓虹色，粉红青蓝，电光，未来调色板，银翼杀手色彩"
    },
    {
      "name": "暖色黄金",
      "english": "Warm golden hour, amber tones, sunset palette, honeyed light, romantic warmth, golden glow, magic hour colors",
      "chinese": "暖色黄金时刻，琥珀色调，日落调色板，蜜色光线，浪漫温暖，金色光，魔幻时刻色彩"
    },
    {
      "name": "冷色蓝调",
      "english": "Cool blue grade, icy tones, steel palette, cold atmosphere, clinical feel, moonlight colors, winter chill",
      "chinese": "冷色蓝调，冰冷色调，钢铁调色板，冷氛围，临床感，月光色彩，冬日寒意"
    },
    {
      "name": "双色调",
      "english": "Duotone effect, two-color palette, graphic style, split toning, poster aesthetic, bold color statement",
      "chinese": "双色调效果，双色调色板，图形风格，分离调色，海报美学，大胆色彩宣言"
    }
  ],
  "氛围情绪扩展": [
    {
      "name": "紧张悬疑",
      "english": "Tense suspense, edge of seat, nervous anticipation, building dread, anxious atmosphere, psychological tension, heart-pounding",
      "chinese": "紧张悬疑，屏息以待，紧张期待，恐惧累积，焦虑氛围，心理张力，心跳加速"
    },
    {
      "name": "温馨治愈",
      "english": "Warm and healing, cozy atmosphere, comforting embrace, gentle moments, feel-good warmth, safe haven, tender care",
      "chinese": "温馨治愈，舒适氛围，安慰拥抱，温柔时刻，愉悦温暖，安全港湾，温柔关怀"
    },
    {
      "name": "神秘莫测",
      "english": "Mysterious enigma, cryptic atmosphere, hidden secrets, puzzling presence, unknown forces, intriguing mystery, unanswered questions",
      "chinese": "神秘莫测，谜样氛围，隐藏秘密，谜样存在，未知力量，引人入胜的谜，未解之谜"
    },
    {
      "name": "史诗壮阔",
      "english": "Epic grandeur, monumental scale, awe-inspiring vastness, heroic magnitude, larger than life, sweeping majesty, legendary proportions",
      "chinese": "史诗壮阔，纪念碑规模，令人敬畏的广阔，英雄气概，超越现实，扫视庄严，传奇比例"
    },
    {
      "name": "忧郁沉思",
      "english": "Melancholic contemplation, somber reflection, quiet sadness, introspective mood, wistful longing, bittersweet emotion",
      "chinese": "忧郁沉思，阴郁反思，安静悲伤，内省情绪，惆怅渴望，苦乐情感"
    },
    {
      "name": "活力四射",
      "english": "Vibrant energy, dynamic life, pulsing activity, kinetic motion, alive with movement, energetic pulse, bustling vitality",
      "chinese": "活力四射，动态生命，脉动活动，动态运动，生机勃勃，能量脉动，繁华活力"
    },
    {
      "name": "宁静祥和",
      "english": "Serene tranquility, peaceful calm, quiet stillness, meditative peace, harmonious balance, undisturbed quiet, restful calm",
      "chinese": "宁静祥和，平静安宁，安静静止，冥想平和，和谐平衡，不受打扰的安静，安详"
    },
    {
      "name": "危险迫近",
      "english": "Imminent danger, threatening presence, perilous situation, looming threat, hazardous atmosphere, life-threatening tension",
      "chinese": "危险迫近，威胁存在，危险处境，逼近威胁，有害氛围，生命威胁张力"
    }
  ],
  "质感材质扩展": [
    {
      "name": "金属光泽",
      "english": "Metallic sheen, chrome reflection, steel surface, polished metal, brushed aluminum, reflective shine, industrial gleam",
      "chinese": "金属光泽，铬反射，钢表面，抛光金属，拉丝铝，反射光，工业光泽"
    },
    {
      "name": "玻璃透明",
      "english": "Glass transparency, clear refraction, transparent surface, crystalline quality, see-through, light passing through, fragile beauty",
      "chinese": "玻璃透明，清晰折射，透明表面，水晶质感，透视，光线穿透，脆弱之美"
    },
    {
      "name": "皮革纹理",
      "english": "Leather texture, aged hide, supple surface, rich grain, worn leather, tactile quality, luxury material",
      "chinese": "皮革纹理，老化皮革，柔韧表面，丰富纹理，磨损皮革，触感质量，奢华材质"
    },
    {
      "name": "丝绸光泽",
      "english": "Silk luster, flowing fabric, shimmering surface, luxurious drape, satin sheen, elegant folds, delicate shine",
      "chinese": "丝绸光泽，流动面料，闪烁表面，奢华垂坠，缎面光泽，优雅褶皱，精致光"
    },
    {
      "name": "木质纹理",
      "english": "Wood grain texture, natural timber, organic patterns, warm brown tones, aged wood, rustic material, forest origin",
      "chinese": "木纹纹理，天然木材，有机图案，暖棕色调，老化木材，乡村材质，森林来源"
    },
    {
      "name": "石材质感",
      "english": "Stone texture, rocky surface, mineral quality, rough granite, marble veins, geological material, solid permanence",
      "chinese": "石材质感，岩石表面，矿物质量，粗糙花岗岩，大理石纹理，地质材质，坚固永恒"
    },
    {
      "name": "布料纤维",
      "english": "Fabric weave, textile fibers, woven texture, cloth material, thread patterns, soft surface, material detail",
      "chinese": "布料编织，纺织纤维，编织纹理，布料材质，线纹图案，柔软表面，材质细节"
    },
    {
      "name": "液体流动",
      "english": "Liquid fluidity, flowing water, fluid dynamics, rippling surface, reflective liquid, wet texture, aqueous movement",
      "chinese": "液体流动，流水，流体动力学，涟漪表面，反射液体，湿润纹理，水态运动"
    }
  ],
  "艺术家绘画风格": [
    {
      "name": "梵高后印象派",
      "english": "Vincent van Gogh style, swirling brushstrokes, thick impasto, vibrant yellow and cobalt blue, Starry Night spirals, emotional intensity, post-impressionist color, expressive texture, sunflower warmth",
      "chinese": "梵高风格，旋转笔触，厚重堆彩，鲜明黄与钴蓝，星月夜螺旋，情感强烈，后印象派色彩，表现性纹理，向日葵暖调"
    },
    {
      "name": "莫奈印象派",
      "english": "Claude Monet style, soft dappled light, broken color technique, water lily reflections, haystack color shifts, atmospheric haze, en plein air, pastel blending, impressionist dissolve",
      "chinese": "莫奈风格，柔和斑驳光影，色彩分离技法，睡莲倒影，干草垛色彩变化，大气朦胧，户外写生，粉彩融合，印象派消融"
    },
    {
      "name": "毕加索立体主义",
      "english": "Pablo Picasso style, fragmented planes, geometric deconstruction, multiple viewpoints, cubist abstraction, bold outlines, flattened perspective, Les Demoiselles d'Avignon, analytical cubism",
      "chinese": "毕加索风格，碎片化平面，几何解构，多重视角，立体主义抽象，粗犷轮廓，扁平透视，亚维农少女，分析立体主义"
    },
    {
      "name": "达利超现实主义",
      "english": "Salvador Dali style, melting clocks, dreamlike distortion, hyperdetailed surrealism, impossible landscapes, paranoid-critical method, persistence of memory, double images, Spanish desert dreamscape",
      "chinese": "达利风格，融化的时钟，梦幻扭曲，超精细超现实，不可能的风景，偏执批判法，记忆的永恒，双重影像，西班牙沙漠梦境"
    },
    {
      "name": "弗里达卡罗",
      "english": "Frida Kahlo style, intimate self-portrait, Mexican folk symbolism, vibrant tropical palette, unibrow intensity, botanical backdrop, surreal autobiography, pain and beauty, Diego Rivera influence",
      "chinese": "弗里达风格，亲密自画像，墨西哥民间象征，鲜明热带色调，一字眉力度，植物背景，超现实自传，痛苦与美，迭戈·里维拉影响"
    },
    {
      "name": "克里姆特金色装饰",
      "english": "Gustav Klimt style, golden phase, ornate decorative patterns, Byzantine gold leaf, The Kiss embrace, geometric ornament, erotic elegance, Vienna Secession, floral spirals, gilded surface",
      "chinese": "克里姆特风格，金色时期，华丽装饰图案，拜占庭金箔，吻之拥抱，几何纹饰，情色优雅，维也纳分离派，花卉螺旋，镀金表面"
    },
    {
      "name": "莫迪利亚尼肖像",
      "english": "Amedeo Modigliani style, elongated neck, almond eyes without pupils, mask-like face, graceful linear simplicity, warm earthy palette, sculptural portrait, Parisian bohemian, melancholic beauty",
      "chinese": "莫迪利亚尼风格，修长脖颈，无瞳仁杏仁眼，面具般面容，优雅线性简洁，温暖大地色调，雕塑感肖像，巴黎波西米亚，忧郁之美"
    },
    {
      "name": "蒙克表现主义",
      "english": "Edvard Munch style, The Scream anxiety, wavy distorted lines, blood-red sky, psychological tension, expressionist agony, existential dread, stark color contrast, Nordic melancholy",
      "chinese": "蒙克风格，呐喊焦虑，波浪扭曲线条，血红天空，心理张力，表现主义痛苦，存在恐惧，强烈色彩对比，北欧忧郁"
    },
    {
      "name": "伦勃朗明暗法",
      "english": "Rembrandt van Rijn style, chiaroscuro mastery, dramatic single-source lighting, deep golden shadows, rich impasto, The Night Watch composition, Dutch Golden Age, psychological depth through darkness",
      "chinese": "伦勃朗风格，明暗法大师，戏剧性单一光源，深邃金色阴影，丰富堆彩，夜巡构图，荷兰黄金时代，通过黑暗展现心理深度"
    },
    {
      "name": "透纳光影",
      "english": "J.M.W. Turner style, luminous atmospheric haze, dissolved forms in light, sublime seascape, fiery sunset, turbulent vortex, Romantic transcendence, watercolor translucency, industrial mist",
      "chinese": "透纳风格，发光大气朦胧，光线中溶解的形体，崇高海景，炽热日落，湍流漩涡，浪漫主义超越，水彩透明感，工业雾气"
    },
    {
      "name": "沃霍尔波普",
      "english": "Andy Warhol style, silkscreen repetition, Campbell's soup pop culture, flat bold colors, celebrity portrait grid, mass production aesthetic, neon pink and yellow, consumer art, factory style",
      "chinese": "沃霍尔风格，丝网印刷重复，坎贝尔汤罐波普文化，平面大胆色彩，名人肖像网格，批量生产美学，霓虹粉与黄，消费艺术，工厂风格"
    },
    {
      "name": "蒙德里安几何",
      "english": "Piet Mondrian style, De Stijl grid, primary color blocks, bold black lines, rectangular purity, red yellow blue composition, neoplastic abstraction, geometric harmony, minimal balance",
      "chinese": "蒙德里安风格，风格派网格，原色色块，粗黑线条，矩形纯粹，红黄蓝构成，新造型主义抽象，几何和谐，极简平衡"
    },
    {
      "name": "草间弥生",
      "english": "Yayoi Kusama style, infinite polka dots, obsessive repetition, pumpkin sculpture, infinity mirror room, hallucinatory pattern, red and white dots, immersive installation, cosmic dot field",
      "chinese": "草间弥生风格，无限圆点，强迫性重复，南瓜雕塑，无限镜屋，幻觉图案，红白圆点，沉浸式装置，宇宙圆点场"
    },
    {
      "name": "奈良美智",
      "english": "Yoshitomo Nara style, big-eyed child figure, innocent yet rebellious, flat acrylic painting, pastel background, punk spirit, Japanese contemporary, melancholic cuteness, solitary character",
      "chinese": "奈良美智风格，大眼小孩形象，天真又叛逆，平面丙烯画，粉彩背景，朋克精神，日本当代艺术，忧郁可爱，孤独角色"
    },
    {
      "name": "村上隆超扁平",
      "english": "Takashi Murakami style, superflat aesthetic, smiling flower, anime-influenced pop art, Mr. DOB character, kawaii consumerism, neon rainbow palette, Louis Vuitton collaboration, otaku culture",
      "chinese": "村上隆风格，超扁平美学，微笑花朵，动漫波普艺术，DOB先生角色，卡哇伊消费主义，霓虹彩虹色调，路易威登联名，御宅族文化"
    }
  ],
  "中国传统艺术风格": [
    {
      "name": "唐卡",
      "english": "Thangka painting style, Tibetan Buddhist art, mineral pigment brilliance, gold thread detailing, mandala composition, deity portrait with aureole, sacred geometry, silk brocade border, Himalayan spiritual iconography",
      "chinese": "唐卡绘画风格，藏传佛教艺术，矿物颜料辉煌，金线描边，曼陀罗构图，神佛肖像配光环，神圣几何，丝绸锦缎边框，喜马拉雅灵性图像"
    },
    {
      "name": "敦煌壁画",
      "english": "Dunhuang Mogao cave mural, flying apsaras Feitian, mineral oxide pigments, oxidized earth tones, Buddhist paradise scene, lotus and cloud motifs, Silk Road fusion, cave ceiling composition, Tang dynasty elegance",
      "chinese": "敦煌莫高窟壁画，飞天仙女，矿物氧化物颜料，氧化大地色调，佛教净土场景，莲花与云纹，丝路融合，洞窟穹顶构图，唐代优雅"
    },
    {
      "name": "工笔花鸟",
      "english": "Gongbi meticulous brushwork, fine line drawing, layered color washing, Song dynasty bird-and-flower, silk scroll painting, hyperdetailed feather and petal, mineral pigment delicacy, imperial court refinement",
      "chinese": "工笔精细笔法，细线勾勒，层层晕染，宋代花鸟画，绢本卷轴，超精细羽毛花瓣，矿物颜料精致，皇家宫廷雅致"
    },
    {
      "name": "写意水墨",
      "english": "Xieyi freehand ink wash, spontaneous brushstroke, negative space mastery, bamboo and orchid motif, Qi Shi Hao dynamic splash, monochrome ink gradation, literati painting spirit, intentional randomness",
      "chinese": "写意水墨，挥洒笔触，留白大师，竹兰主题，气势豪放泼墨，单色墨色渐变，文人画精神，有意为之的随机"
    },
    {
      "name": "青绿山水",
      "english": "Qinglu shanshui blue-green landscape, azurite and malachite mineral pigments, gold-outlined peaks, Tang Song court landscape, layered mountain recession, ethereal cloud mist, decorative grandeur, Wang Ximeng style",
      "chinese": "青绿山水，石青石绿矿物颜料，金线勾勒山峰，唐宋宫廷山水，层叠远山，飘渺云雾，装饰性宏大，王希孟风格"
    },
    {
      "name": "年画",
      "english": "Chinese New Year woodblock print, Door God guardian, chubby baby holding fish, auspicious red and gold, folk art bold lines, peach blossom and lantern, nianhua decorative charm, lunar celebration joy",
      "chinese": "中国年画木版印，门神守护，抱鱼胖娃娃，吉祥红金，民间艺术粗犷线条，桃花灯笼，年画装饰韵味，农历喜庆"
    },
    {
      "name": "剪纸",
      "english": "Chinese paper cutting jianzhi, red silhouette on white, intricate negative space, symmetric pattern, zodiac animals, double-happiness motif, folk geometric precision, scissor-cut delicacy, festival decoration",
      "chinese": "中国剪纸，红色剪影白底，精致镂空，对称图案，生肖动物，双喜纹样，民间几何精度，剪刀裁切精巧，节庆装饰"
    },
    {
      "name": "景泰蓝",
      "english": "Cloisonne enamel style, copper wire inlay pattern, vivid blue glaze, royal palace craft, floral and dragon motif, glossy enamel surface, Ming dynasty treasure, metallic groove and jewel fill, ornamental luxury",
      "chinese": "景泰蓝珐琅风格，铜丝镶嵌图案，鲜艳蓝釉，皇家宫殿工艺，花卉龙纹，光泽珐琅表面，明代珍宝，金属凹槽嵌宝石，装饰奢华"
    },
    {
      "name": "瓷器青花",
      "english": "Blue and white porcelain style, cobalt blue on white clay, Ming dynasty vase pattern, lotus scroll and dragon, ceramic glaze translucency, Jingdezhen craft, delicate brush on curved surface, export treasure",
      "chinese": "青花瓷风格，钴蓝白瓷，明代瓶身图案，缠枝莲与龙纹，瓷釉透亮，景德镇工艺，弧面精细笔触，外销珍品"
    },
    {
      "name": "皮影戏",
      "english": "Chinese shadow puppet style, translucent leather silhouette, articulated joint figures, warm backlight glow, folk tale drama, intricate cut-out pattern, donkey hide craft, Shaanxi theater tradition",
      "chinese": "皮影戏风格，半透明皮革剪影，关节可动人偶，暖色背光，民间故事戏剧，精致镂花图案，驴皮工艺，陕西戏曲传统"
    },
    {
      "name": "漆器",
      "english": "Chinese lacquerware style, deep red and black layers, carved cinnabar surface, mother-of-pearl inlay, botanical relief carving, glossy resin depth, imperial court elegance, time-intensive craft",
      "chinese": "中国漆器风格，深红与黑层叠，雕漆朱砂表面，螺钿镶嵌，植物浮雕，光泽树脂深度，皇家宫廷雅致，耗时工艺"
    },
    {
      "name": "绢本仕女",
      "english": "Silk scroll court lady painting, Tang dynasty plump beauty, delicate gauze drapery, hairpin and rouge detail, Zhou Fang elegance, palace garden setting, soft contoured line, aristocratic leisure",
      "chinese": "绢本仕女画，唐代丰腴美人，薄纱轻裾，发簪胭脂细节，周昉雅致，宫苑场景，柔美轮廓线，贵族闲适"
    },
    {
      "name": "汉画像砖",
      "english": "Han dynasty brick relief style, stamped clay narrative, mythological creature, hunting and banquet scene, primitive bold outline, earthy terracotta texture, ancient storytelling, archaeological patina",
      "chinese": "汉代画像砖风格，模印泥质叙事，神话瑞兽，狩猎宴饮场景，原始粗犷轮廓，陶土质感，古老叙事，考古铜绿"
    },
    {
      "name": "苗绣",
      "english": "Miao ethnic embroidery style, vivid silk thread on indigo cloth, geometric butterfly and bird motif, cross-stitch density, silver ornament pairing, Guizhou highland heritage, textile masterpiece, tribal color burst",
      "chinese": "苗族刺绣风格，鲜亮丝线靛蓝底布，几何蝴蝶鸟纹，十字绣密度，银饰搭配，贵州高原传承，纺织杰作，部落色彩爆发"
    }
  ],
  "动漫电影风格": [
    {
      "name": "宫崎骏吉卜力",
      "english": "Studio Ghibli style, Hayao Miyazaki direction, lush hand-painted backgrounds, watercolor sky, Totoro forest spirit, wind-swept grass, child protagonist wonder, environmental harmony, Japanese pastoral fantasy, Joe Hisaishi warmth",
      "chinese": "吉卜力工作室风格，宫崎骏执导，丰富手绘背景，水彩天空，龙猫森林精灵，风吹草动，孩童主角惊奇，环境和谐，日式田园幻想，久石让温暖"
    },
    {
      "name": "新海诚光影",
      "english": "Makoto Shinkai style, hyperdetailed sky with volumetric clouds, lens flare romance, Your Name comet, twilight orange and indigo, photorealistic background, emotional light beam, Japanese urban melancholy, celluloid glow",
      "chinese": "新海诚风格，超精细天空体积云，镜头光晕浪漫，你的名字彗星，黄昏橙与靛蓝，照片级真实背景，情感光束，日式都市忧郁，赛璐珞辉光"
    },
    {
      "name": "今敏心理剪辑",
      "english": "Satoshi Kon style, Perfect Blue psychological fracture, rapid match cut, reality-blurring transition, Paprika dreamscape, subjective viewpoint collapse, thriller montage, identity dissolution, anime noir",
      "chinese": "今敏风格，未麻的部屋心理碎裂，快速匹配剪辑，现实模糊转场，红辣椒梦境，主观视角坍塌，惊悚蒙太奇，身份消解，动画黑色电影"
    },
    {
      "name": "大友克洋赛博",
      "english": "Katsuhiro Otomo style, Akira neon neo-Tokyo, motorcycle light trail, cyberpunk dystopia, detailed mechanical rendering, psychic explosion, biker gang energy, metallic reflection, 1988 visionary future",
      "chinese": "大友克洋风格，阿基拉霓虹新东京，摩托车光轨，赛博朋克反乌托邦，精密机械渲染，超能力爆炸，暴走族能量，金属反射，1988远见未来"
    },
    {
      "name": "汤浅政明",
      "english": "Masaaki Yuasa style, wild fluid animation, stretched distorted bodies, Mind Game surrealism, vibrant acid palette, experimental freedom, dancing lines, unconventional perspective, kinetic chaos",
      "chinese": "汤浅政明风格，狂放流动动画，拉伸扭曲人体，心灵游戏超现实，鲜艳迷幻色彩，实验自由，舞动线条，非传统透视，动态混乱"
    },
    {
      "name": "皮克斯3D温情",
      "english": "Pixar Animation style, UP house floating, Toy Story warmth, subsurface scattering skin, expressive big eyes, global illumination render, emotional storytelling, vibrant saturated color, dimensional hair and cloth sim",
      "chinese": "皮克斯动画风格，飞屋环游记漂浮房子，玩具总动员温暖，次表面散射皮肤，传神大眼，全局光照渲染，情感叙事，鲜艳饱和色彩，维度化头发布料模拟"
    },
    {
      "name": "迪士尼经典",
      "english": "Disney golden age style, Snow White fairy tale, hand-drawn musical sequence, exaggerated squash and stretch, Broadway-style song, enchanted castle, villain dramatic shadow, princess sparkle, warm cel animation",
      "chinese": "迪士尼黄金时代风格，白雪公主童话，手绘音乐段落，夸张挤压拉伸，百老汇式歌曲，魔法城堡，反派戏剧阴影，公主闪光，温暖赛璐珞动画"
    },
    {
      "name": "迪士尼现代3D",
      "english": "Disney modern CG style, Frozen ice magic, Zootopia fur detail, Tangled lantern scene, stylized realism, big expressive eyes, magical particle effects, Disney glow, hair physics simulation",
      "chinese": "迪士尼现代CG风格，冰雪奇缘冰魔法，疯狂动物城毛发细节，魔发奇缘天灯场景，风格化写实，大传神眼睛，魔法粒子特效，迪士尼辉光，头发物理模拟"
    },
    {
      "name": "梦工厂",
      "english": "DreamWorks Animation style, How to Train Your Dragon flight, Kung Fu Panda action, snappy comedic timing, dynamic camera angle, textured scale and fur, epic scope with humor, moonlit Viking village",
      "chinese": "梦工厂动画风格，驯龙高手飞行，功夫熊猫动作，利落喜剧节奏，动态摄影角度，纹理鳞片和毛发，宏大叙事加幽默，月光维京村庄"
    },
    {
      "name": "蜘蛛侠平行宇宙",
      "english": "Spider-Verse style, comic book halftone dots, chromatic aberration, mixed frame rates, Ben-Day dots texture, graffiti splatter, multi-dimensional glitch, pop-art color punch, printed ink misregistration",
      "chinese": "蜘蛛侠平行宇宙风格，漫画半调网点，色差分离，混合帧率，本戴点纹理，涂鸦泼溅，多维度故障，波普色彩冲击，印刷错位"
    },
    {
      "name": "攻壳机动队",
      "english": "Ghost in the Shell 1995 style, Mamoru Oshii direction, green-tinted cyberpunk, philosophical solitude, Hong Kong decayed cityscape, thermoptic camouflage, basset hound stillness, Kenji Kawai chant, existential AI",
      "chinese": "攻壳机动队1995风格，押井守执导，绿色调赛博朋克，哲学孤独，香港衰败城市景观，光学迷彩，巴吉度猎犬静默，川井宪次吟唱，存在主义AI"
    },
    {
      "name": "EVA新世纪福音战士",
      "english": "Neon Genesis Evangelion style, Hideaki Anno direction, stark red on black, religious symbolism cross, LCL orange fluid, experimental title cards, psychological inner monologue, Unit-01 berserk purple, terminal dogma dread",
      "chinese": "新世纪福音战士风格，庵野秀明执导，黑底鲜红，宗教象征十字，LCL橙色液体，实验性字幕卡，心理独白，初号机暴走紫色，终端教条恐惧"
    },
    {
      "name": "法国动画美学",
      "english": "French animation style, The Adventures of Tintin ligne claire, Persepolis black and white memoir, Kirikou silhouette, Ernest and Celestine watercolor sketch, European art-house animation, Societe Francaise elegance",
      "chinese": "法国动画风格，丁丁历险记清晰线条，我在伊朗长大黑白回忆，基里kou剪影，艾特熊和赛娜鼠水彩速写，欧洲文艺动画，法式优雅"
    },
    {
      "name": "拉美动画魔幻",
      "english": "Latin American animation style, Coco Dia de los Muertos, Book of Life wooden puppet, vibrant marigold bridge, skeleton musician, ancestral spirit realm, Mexican folk art color, magical realism heritage",
      "chinese": "拉美动画风格，寻梦环游记亡灵节，生命之书木偶，鲜艳万寿菊桥，骷髅音乐家，先灵世界，墨西哥民间艺术色彩，魔幻现实传承"
    },
    {
      "name": "国产水墨动画",
      "english": "Chinese ink wash animation, Little Tadpoles Look for Their Mother, Teller of Tales landscape, Qi Baishi shrimp and fish, brushstroke dissolve transition, Shan Shui movement, Shanghai Animation Film Studio heritage",
      "chinese": "中国水墨动画，小蝌蚪找妈妈，山水情风景，齐白石虾鱼，笔触消融转场，山水运动，上海美术电影制片厂传承"
    },
    {
      "name": "哪吒之魔童降世",
      "english": "Ne Zha 2019 style, Chinese mythology 3D animation, fire lotus transformation, Chaos Pearl duality, dramatic lightning and flame VFX, stylized deity character design, domestic blockbuster scale, fate defiance",
      "chinese": "哪吒2019风格，中国神话3D动画，火莲变身，混沌珠二元性，戏剧性雷电火焰特效，风格化神灵角色设计，国产大片规模，逆天改命"
    }
  ]
};