# 1. 鸣佐（抖音）数据分析报告

1. 执行概况

- 数据来源：抖音词条相关视频 + 评论区
- 抓取文件：data/raw/douyin_12_1776490399902.json
- 抓取视频数：15
- 抓取评论数：275
- 入库场景数：15
- 平均情感烈度：3.27 / 5

2. 场景结构统计

场景关键词分布

- 其他：15

互动类型分布

- 台词：9
- 其他：4
- 肢体：2

3. 高热视频样本（Top 10）

1. 380828 赞
文本片段：佐助：“其实我使用了幻术”#火影忍者#佐...
链接：https://www.douyin.com/video/7626215661158015609

2. 257191 赞
文本片段：古早第七班#佐助#鸣人#春野樱|古早第七...
链接：https://www.douyin.com/video/7628101069126521435

3. 16626 赞
文本片段：就是神圣吧#火影忍者疾风传#鸣人#佐助#...
链接：https://www.douyin.com/video/7628395438965608538

4. 15584 赞
文本片段：超越一切的羁绊，鸣佐救赎彼此的唯一，#充...
链接：https://www.douyin.com/video/7619757413670898971

5. 14965 赞
文本片段：如果佐助是女主，她会爱上鸣人吗，#火影忍...
链接：https://www.douyin.com/video/7621103159179529508

6. 12291 赞
文本片段：天台大战，鸣人VS佐助#火影忍者#动漫解...
链接：https://www.douyin.com/video/7622661214518168841

7. 8865 赞
文本片段：无论多久佐助还是喜欢叫鸣人“大笨蛋”#佐...
链接：https://www.douyin.com/video/7628169297143112616

8. 8061 赞
文本片段：当成为火影的鸣人和过去的佐助见面#我在抖...
链接：https://www.douyin.com/video/7628615522468318490

9. 7187 赞
文本片段：终结谷之战，漩涡鸣人对战宇智波佐助#火影...
链接：https://www.douyin.com/video/7628997486287392015

10. 6727 赞
文本片段：当火影进入大寸头时代#火影忍者疾风传#鸣...
链接：https://www.douyin.com/video/7629669750540373283

4. 高赞评论样本（Top 10）

1. 54160 赞：佐助比鸣人聪明不到哪去，只不过长得比较精明[图片表情]
2. 26229 赞：
3. 21471 赞：佐助总是用他的高冷和沉默掩盖了他愚钝的本质[黑脸]
4. 9258 赞：佐助对鸣人的任何馊主意都是无脑跟[呲牙]
5. 8325 赞：成长的代价是什么？
6. 7324 赞：他们俩在最帅的时期一个剃了寸头，一个戴上了奇怪的头巾
7. 6859 赞：画完佐助才想起来佐助不是女主，只能匆匆配平结尾
8. 5769 赞：恋柱癖[图片表情]
9. 5701 赞：怎么甜蜜吗
10. 4090 赞：鸣人看见佐助的时候[图片表情]

5. 当前结论

- 当前链路已完成“词条 -> 高赞视频 -> 评论 -> 场景入库”的端到端闭环。
- 数据量已达到可分析级别，但场景词全部落入“其他”，说明关键词体系仍需贴合鸣佐语料进行细化。
- 下一步优先事项：扩充鸣佐专属场景词表，并重跑抽取以提升知识库结构化质量。

---

# 2. 五条悟 × 夏油杰（B站）数据分析报告

1. 执行概况

- 数据来源：B站关键词相关视频 + 评论区（关键词：五条悟x夏油杰）
- 抓取文件：`data/raw/bilibili_wuxia_1776532053962.json`
- 抓取视频数：10
- 抓取评论数：120
- 入库场景数：10
- 平均情感烈度：3.23 / 5

2. 场景结构统计

场景关键词分布

- 其他：64
- 刀向：29
- 搞笑：21
- 情感：6

互动类型分布

- 其他：94
- 台词：16
- 肢体：10

3. 高热视频样本（Top 10）

1. 307715 播放  
文本片段：【五条悟×夏油杰】你是他最恨的世界里最爱的人……  
链接：[https://www.bilibili.com/video/BV1kfmEBrExr/](https://www.bilibili.com/video/BV1kfmEBrExr/)

2. 282220 播放  
文本片段：【五夏硝】當你被好友屏蔽時  
链接：[https://www.bilibili.com/video/BV1MDXhBNEdt/](https://www.bilibili.com/video/BV1MDXhBNEdt/)

3. 228319 播放  
文本片段：“夏油杰身体被脑花占据，五条悟直接破防了…”  
链接：[https://www.bilibili.com/video/BV1wm4y1L7fJ/](https://www.bilibili.com/video/BV1wm4y1L7fJ/)

4. 160764 播放  
文本片段：♥拽的没边，帅的过分♥！【五条悟x夏油杰 】  
链接：[https://www.bilibili.com/video/BV1i14y1R7KG/](https://www.bilibili.com/video/BV1i14y1R7KG/)

5. 17525 播放  
文本片段：【五条悟X夏油杰】DK日常  
链接：[https://www.bilibili.com/video/BV1T841197Jm/](https://www.bilibili.com/video/BV1T841197Jm/)

6. 7902 播放  
文本片段：吐槽五条悟夏油杰男同cp  
链接：[https://www.bilibili.com/video/BV1keXqBuE3k/](https://www.bilibili.com/video/BV1keXqBuE3k/)

7. 4399 播放  
文本片段：【4K中译|咒术回战】是敌是友-五条悟＆夏油杰｜X-RAY  
链接：[https://www.bilibili.com/video/BV1Zs6hYtEXm/](https://www.bilibili.com/video/BV1Zs6hYtEXm/)

8. 3750 播放  
文本片段：Crazy - 五条悟 X 夏油杰  
链接：[https://www.bilibili.com/video/BV18F411U7uP/](https://www.bilibili.com/video/BV18F411U7uP/)

9. 1088 播放  
文本片段：“只有你能让我不寂寞”| 五条悟x夏油杰  
链接：[https://www.bilibili.com/video/BV1RwDCBBETS/](https://www.bilibili.com/video/BV1RwDCBBETS/)

10. 434 播放  
文本片段：劝住了五条却没劝住自己#咒术回战#五条悟#夏油杰  
链接：[https://www.bilibili.com/video/BV1h8QjBtEX8/](https://www.bilibili.com/video/BV1h8QjBtEX8/)

4. 高赞评论样本（Top 10）

1. 7838 赞：我笑死了，小夏一直在给五进行社会化训练哈哈哈哈  
2. 1891 赞：我还以为五条会把格调拍上去  
3. 1851 赞：大胆猜一下，五条悟死后，羂索占据五条悟身体……  
4. 1721 赞：最后是让他们理解了什么叫无量空处了吧  
5. 1363 赞：五条悟这辈子都学不会“社交分寸感”  
6. 1360 赞：求你再做多一点同人，就算让我去打宿傩也愿意  
7. 1212 赞：看到五条悟发挚友限定的两人be like  
8. 1109 赞：夏油：  
9. 898 赞：舅舅散步～(悟&夏 加长特典哦～(硝  
10. 861 赞：脑花怎么是白的呀，跟豆腐似地

5. 当前结论

- 当前链路已完成“关键词 -> 热门视频 -> 热门评论 -> 结构化入库”的端到端闭环。
- 数据量已达到可分析级别，且“刀向/搞笑/情感”已初步分层，但“其他”占比仍高。
- 下一步优先事项：补充五夏专属场景词表（如“狱门疆”“脑花”“挚友”“dk日常”等），并重跑抽取以提升结构化质量。

---

# 3. 金希澈 × 利特（B站）数据分析报告

1. 执行概况

- 数据来源：B站关键词相关视频 + 评论区（关键词：金希澈 利特）
- 抓取文件：`data/raw/bilibili_xiche_lite_1776532257703.json`
- 抓取视频数：15
- 抓取评论数：221
- 入库场景数：14
- 平均情感烈度：3.10 / 5

2. 场景结构统计

场景关键词分布

- 其他：183
- 综艺：27
- 关系：8
- 冲突：3

互动类型分布

- 其他：183
- 台词：26
- 肢体：12

3. 高热视频样本（Top 10）

1. 867931 播放  
文本片段：老少年83line著名撕逼事件“仁川大战”现场，你若安好，撕逼到老  
链接：[https://www.bilibili.com/video/BV1HA411q7VK/](https://www.bilibili.com/video/BV1HA411q7VK/)

2. 656812 播放  
文本片段：Super junior | 金希澈超讨厌23岁时利特的女朋友 原因竟然是......  
链接：[https://www.bilibili.com/video/BV1Fr4y1M7np/](https://www.bilibili.com/video/BV1Fr4y1M7np/)

3. 245675 播放  
文本片段：队内 Kiss & BoBo【Super Junior 利特 希澈 艺声 神童 银赫 东海 始源 厉旭 圭贤】  
链接：[https://www.bilibili.com/video/BV1MV411o746/](https://www.bilibili.com/video/BV1MV411o746/)

4. 175085 播放  
文本片段：【SuperJunior】利特希澈到底是什么关系 揭秘83line的爱情故事  
链接：[https://www.bilibili.com/video/BV174411i7w7/](https://www.bilibili.com/video/BV174411i7w7/)

5. 159364 播放  
文本片段：【83line】让爱换个季节再开花结果  
链接：[https://www.bilibili.com/video/BV1Y7411k7YC/](https://www.bilibili.com/video/BV1Y7411k7YC/)

6. 110822 播放  
文本片段：【SJ】 希澈：你姐姐结婚为什么不叫我。 利特：我姐姐还没结婚。  
链接：[https://www.bilibili.com/video/BV12N411y7Kh/](https://www.bilibili.com/video/BV12N411y7Kh/)

7. 56941 播放  
文本片段：【83line】利特是suju的，朴正洙是金希澈的  
链接：[https://www.bilibili.com/video/BV1ds4y1T7sH/](https://www.bilibili.com/video/BV1ds4y1T7sH/)

8. 53156 播放  
文本片段：【83line】希澈利特我们同居了（上）  
链接：[https://www.bilibili.com/video/BV1gU4y1E78x/](https://www.bilibili.com/video/BV1gU4y1E78x/)

9. 51015 播放  
文本片段：他是他紧攥的根系，他是他托举的花朵 | 澈特83line新粉入坑指引 | 最全糖点整理  
链接：[https://www.bilibili.com/video/BV1y5wdeZEwF/](https://www.bilibili.com/video/BV1y5wdeZEwF/)

10. 32225 播放  
文本片段：仁川大战事件【高清中字丨全视角】  
链接：[https://www.bilibili.com/video/BV1cvuhzAEab/](https://www.bilibili.com/video/BV1cvuhzAEab/)

4. 高赞评论样本（Top 10）

1. 9964 赞：气得利特跳舞力度都快赶上李赫了  
2. 6673 赞：你们蓝人从没有表情管理，有没有吵架看现场谁不开心就知道了  
3. 6024 赞：不是粉，他们好敢说呀  
4. 5300 赞：你若安好，那还得了哈哈哈哈哈  
5. 4391 赞：没解散，主要仇没报完  
6. 3977 赞：刚开始看哥哥们，还以为是同性恋  
7. 3918 赞：老特眼神太吓人了，背对背那段像修罗场  
8. 2850 赞：给特哥气的，走位还老挨着希澈  
9. 2720 赞：请吃饭的漂亮姐姐哈哈哈  
10. 2433 赞：反复看“喂，我不是乞丐”那句，语气和神情特别好笑

5. 当前结论

- 当前链路已完成“关键词 -> 高热视频 -> 高赞评论 -> 场景入库”的端到端闭环。  
- 数据量已达可分析级别，但“其他”占比仍高，说明场景词库还不够贴合“83line”语料。  
- 下一步优先事项：补充“83line/仁川大战/同居梗/修罗场/和解叙事”等专属词表，并重跑抽取提升结构化质量。

---

# 4. 克劳德 × 萨菲罗斯（B站）数据分析报告

1. 执行概况

- 数据来源：B站关键词相关视频 + 评论区（关键词：克劳德 x 萨菲罗斯）
- 抓取文件：`data/raw/bilibili_cloud_sephiroth_1776533117633.json`
- 抓取视频数：15
- 抓取评论数：281
- 入库场景数：15
- 平均情感烈度：3.20 / 5

2. 场景结构统计

场景关键词分布

- 其他：209
- 玩梗：43
- 关系：21
- 对抗：8

互动类型分布

- 其他：202
- 台词：43
- 肢体：36

3. 高热视频样本（Top 10）

1. 2472062 播放  
文本片段：“进来感受宇宙级𝑨𝒍𝒑𝒉𝒂的压迫感”  
链接：[https://www.bilibili.com/video/BV1Mu411r7kw/](https://www.bilibili.com/video/BV1Mu411r7kw/)

2. 525277 播放  
文本片段：SC｜绝涩矿工调教纯情小狗｜萨菲罗斯*克劳德  
链接：[https://www.bilibili.com/video/BV1xW421R7Xs/](https://www.bilibili.com/video/BV1xW421R7Xs/)

3. 479495 播放  
文本片段：人类建模史上的天花板【最终幻想7】  
链接：[https://www.bilibili.com/video/BV17yB4YGEh4/](https://www.bilibili.com/video/BV17yB4YGEh4/)

4. 461217 播放  
文本片段：【最终幻想7重生】萨菲罗斯rua克劳德的手法越看越不对劲！  
链接：[https://www.bilibili.com/video/BV1k6421c7BZ/](https://www.bilibili.com/video/BV1k6421c7BZ/)

5. 345856 播放  
文本片段：【4K60帧】克劳德 vs 萨菲罗斯 | 最终幻想Ⅶ：圣子降临  
链接：[https://www.bilibili.com/video/BV1QA411T7qj/](https://www.bilibili.com/video/BV1QA411T7qj/)

6. 303305 播放  
文本片段：[FF7][AC云]克劳德帅没边了  
链接：[https://www.bilibili.com/video/BV14Q8HekEdW/](https://www.bilibili.com/video/BV14Q8HekEdW/)

7. 286006 播放  
文本片段：10分钟带你了解克劳德对萨菲罗斯的爱恨纠葛  
链接：[https://www.bilibili.com/video/BV1pH4y1T7yq/](https://www.bilibili.com/video/BV1pH4y1T7yq/)

8. 262269 播放  
文本片段：萨菲罗斯附体的克劳德太帅了！【最终幻想7重生】  
链接：[https://www.bilibili.com/video/BV1NK42147wy/](https://www.bilibili.com/video/BV1NK42147wy/)

9. 170494 播放  
文本片段：在cp深 情 隐 忍  
链接：[https://www.bilibili.com/video/BV1sz4weuESE/](https://www.bilibili.com/video/BV1sz4weuESE/)

10. 165362 播放  
文本片段：史上最A长发男  
链接：[https://www.bilibili.com/video/BV1vJXRBkENM/](https://www.bilibili.com/video/BV1vJXRBkENM/)

4. 高赞评论样本（Top 10）

1. 16975 赞：剪的太好了  
2. 10215 赞：别看他在外人面前神气，在床上喘息很狼狈  
3. 7901 赞：压迫感太强了  
4. 7099 赞：深情隐忍攻和阳光开朗受  
5. 6498 赞：信息素是皮革加烟草再加檀香雪松的味道  
6. 6432 赞：封面一看就知道是白发散发鼻祖萨菲罗斯  
7. 5452 赞：只有萨菲罗斯才能“填满”克劳德空壳  
8. 5304 赞：银色巨蟒狩猎金色陆行鸟  
9. 4734 赞：像偶像塌房回踩但内心仍爱，爱恨并存  
10. 4513 赞：萨菲罗斯一直在引诱Cloud共赴深渊

5. 当前结论

- 当前链路已完成“关键词 -> 高赞视频 -> 评论 -> 场景入库”的端到端闭环。  
- 数据量达到可分析级别，且“玩梗/关系/对抗”已初步分层，但“其他”占比仍然最高。  
- 下一步优先事项：补充 FF7 专属词表（如“重生/圣子降临/共赴深渊/宿敌/蛇塑/陆行鸟”等）并重跑抽取，提升结构化质量。