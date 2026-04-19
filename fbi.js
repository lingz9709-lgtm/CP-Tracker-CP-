const { requestChat } = require("../../utils/deepseek");

const CP_ITEMS = [
  {
    id: 12,
    name: "鸣佐（抖音）",
    aliases: ["佐助×鸣人", "鸣人×佐助"],
    type: "宿敌救赎 · 高热讨论",
    stats: { videos: 15, comments: 275, heat: "3.27" },
    defaultAnalysis: "该CP呈现“冲突驱动型依恋”。双方关系以高强度对抗起势，以反复确认收束；表面是立场冲突，底层是高度互相定义。建议重点观察“转折节点中的非语言回应”。",
    evidence: [
      { id: "12v1", text: "佐助：“其实我使用了幻术”", likes: 380828, link: "https://www.douyin.com/video/7626215661158015609" },
      { id: "12v2", text: "古早第七班高热混剪", likes: 257191, link: "https://www.douyin.com/video/7628101069126521435" },
      { id: "12v3", text: "就是神圣吧（鸣人佐助）", likes: 16626, link: "https://www.douyin.com/video/7628395438965608538" },
      { id: "12v4", text: "超越一切的羁绊", likes: 15584, link: "https://www.douyin.com/video/7619757413670898971" },
      { id: "12v5", text: "如果佐助是女主会爱上鸣人吗", likes: 14965, link: "https://www.douyin.com/video/7621103159179529508" }
    ],
    commentSamples: [
      { text: "佐助比鸣人聪明不到哪去，只不过长得比较精明", likes: 54160 },
      { text: "佐助总是用他的高冷掩盖愚钝本质", likes: 21471 },
      { text: "佐助对鸣人的任何馊主意都是无脑跟", likes: 9258 },
      { text: "成长的代价是什么？", likes: 8325 },
      { text: "他们俩在最帅时期一个寸头一个头巾", likes: 7324 }
    ]
  },
  {
    id: 47,
    name: "五条悟 × 夏油杰",
    aliases: ["五夏", "GojoGeto"],
    type: "挚友裂隙 · 刀糖并存",
    stats: { videos: 10, comments: 120, heat: "3.23" },
    defaultAnalysis: "该CP为“挚友裂隙型羁绊”。关系核心在“共同理想破裂后的持续牵引”，典型特征是情绪压抑与记忆回响并存。建议围绕“再会场景”做高权重研判。",
    evidence: [
      { id: "47v1", text: "你是他最恨世界里最爱的人", likes: 307715, link: "https://www.bilibili.com/video/BV1kfmEBrExr/" },
      { id: "47v2", text: "当你被好友屏蔽时", likes: 282220, link: "https://www.bilibili.com/video/BV1MDXhBNEdt/" },
      { id: "47v3", text: "夏油杰身体被脑花占据", likes: 228319, link: "https://www.bilibili.com/video/BV1wm4y1L7fJ/" },
      { id: "47v4", text: "DK日常", likes: 17525, link: "https://www.bilibili.com/video/BV1T841197Jm/" },
      { id: "47v5", text: "是敌是友中译剪辑", likes: 4399, link: "https://www.bilibili.com/video/BV1Zs6hYtEXm/" }
    ],
    commentSamples: [
      { text: "小夏一直在给五条做社会化训练", likes: 7838 },
      { text: "五条悟这辈子都学不会社交分寸感", likes: 1363 },
      { text: "最后让他们理解了什么叫无量空处", likes: 1721 },
      { text: "看到挚友限定两人组直接破防", likes: 1212 },
      { text: "求你再做多一点同人", likes: 1360 }
    ]
  },
  {
    id: 83,
    name: "金希澈 × 利特",
    aliases: ["83line", "希澈利特"],
    type: "修罗场互怼 · 长线和解",
    stats: { videos: 15, comments: 221, heat: "3.10" },
    defaultAnalysis: "该CP具备“长期博弈型亲密”特征。高频互怼是外显行为，深层协同才是关系底座。建议在公开互动与私域线索之间做交叉验证，识别稳定互相依赖证据。",
    evidence: [
      { id: "83v1", text: "仁川大战现场全记录", likes: 867931, link: "https://www.bilibili.com/video/BV1HA411q7VK/" },
      { id: "83v2", text: "23岁女友话题争议", likes: 656812, link: "https://www.bilibili.com/video/BV1Fr4y1M7np/" },
      { id: "83v3", text: "揭秘83line关系", likes: 175085, link: "https://www.bilibili.com/video/BV174411i7w7/" },
      { id: "83v4", text: "你姐姐结婚为什么不叫我", likes: 110822, link: "https://www.bilibili.com/video/BV12N411y7Kh/" },
      { id: "83v5", text: "朴正洙是金希澈的", likes: 56941, link: "https://www.bilibili.com/video/BV1ds4y1T7sH/" }
    ],
    commentSamples: [
      { text: "气得利特跳舞力度都快赶上李赫了", likes: 9964 },
      { text: "你们蓝人从没有表情管理", likes: 6673 },
      { text: "没解散，主要仇没报完", likes: 4391 },
      { text: "背对背那段真的像修罗场", likes: 3918 },
      { text: "不是粉都觉得他们太敢说了", likes: 6024 }
    ]
  },
  {
    id: 77,
    name: "克劳德 × 萨菲罗斯",
    aliases: ["CloudSephiroth", "FF7"],
    type: "宿敌纠缠 · 爱恨并存",
    stats: { videos: 15, comments: 281, heat: "3.20" },
    defaultAnalysis: "该CP属于“宿敌纠缠型高张力关系”。矛盾并非削弱连接，反而构成持续关注与意义投射。建议优先抽取“对决后情绪残留”作为关键证据。",
    evidence: [
      { id: "77v1", text: "宇宙级压迫感混剪", likes: 2472062, link: "https://www.bilibili.com/video/BV1Mu411r7kw/" },
      { id: "77v2", text: "绝涩矿工调教纯情小狗", likes: 525277, link: "https://www.bilibili.com/video/BV1xW421R7Xs/" },
      { id: "77v3", text: "克劳德vs萨菲罗斯", likes: 345856, link: "https://www.bilibili.com/video/BV1QA411T7qj/" },
      { id: "77v4", text: "爱恨纠葛十分钟梳理", likes: 286006, link: "https://www.bilibili.com/video/BV1pH4y1T7yq/" },
      { id: "77v5", text: "共赴深渊向剪辑", likes: 170494, link: "https://www.bilibili.com/video/BV1sz4weuESE/" }
    ],
    commentSamples: [
      { text: "剪得太好了", likes: 16975 },
      { text: "压迫感太强了", likes: 7901 },
      { text: "深情隐忍攻和阳光开朗受", likes: 7099 },
      { text: "银色巨蟒狩猎金色陆行鸟", likes: 5304 },
      { text: "爱恨并存的拉扯感太到位", likes: 4734 }
    ]
  },
  {
    id: 120,
    name: "佐鸣（抖音二创）",
    aliases: ["鸣佐反向词条", "第七班"],
    type: "热梗复盘 · 弹幕高活",
    stats: { videos: 15, comments: 275, heat: "3.27" },
    defaultAnalysis: "该CP呈现“热梗共创型关系传播”。高热来自二创回路与集体情绪共振，核心在于可复用叙事模板。建议持续跟踪评论语料中的高频称谓与复读句式。",
    evidence: [
      { id: "120v1", text: "天台大战：鸣人 VS 佐助", likes: 12291, link: "https://www.douyin.com/video/7622661214518168841" },
      { id: "120v2", text: "佐助叫鸣人大笨蛋", likes: 8865, link: "https://www.douyin.com/video/7628169297143112616" },
      { id: "120v3", text: "火影鸣人与过去佐助见面", likes: 8061, link: "https://www.douyin.com/video/7628615522468318490" },
      { id: "120v4", text: "终结谷之战", likes: 7187, link: "https://www.douyin.com/video/7628997486287392015" },
      { id: "120v5", text: "火影大寸头时代", likes: 6727, link: "https://www.douyin.com/video/7629669750540373283" }
    ],
    commentSamples: [
      { text: "画完佐助才想起来佐助不是女主", likes: 6859 },
      { text: "恋柱癖", likes: 5769 },
      { text: "怎么甜蜜吗", likes: 5701 },
      { text: "鸣人看见佐助的时候这个表情太绝了", likes: 4090 },
      { text: "第七班的化学反应永远顶级", likes: 3600 }
    ]
  }
];

function nowId(prefix) {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function estWidth(text, fontSize) {
  const s = String(text || "");
  return Math.max(60, Math.round(s.length * fontSize * 0.62));
}

function sanitizeDanmuText(input) {
  const s = String(input || "").replace(/\r?\n/g, " ").trim();
  if (!s) return "";
  if (/^[a-zA-Z]:\\/.test(s)) return "";
  if (/file:\/\//i.test(s)) return "";
  if (/#L\d+(-L\d+)?$/i.test(s)) return "";
  return s.slice(0, 120);
}

function getCpItems() {
  return CP_ITEMS;
}

function allocAgentCode() {
  const key = "FBI_AGENT_SEQ";
  let current = Number(wx.getStorageSync(key) || 6);
  if (!Number.isFinite(current) || current < 6) current = 6;
  const next = current + 1;
  wx.setStorageSync(key, next);
  return String(next).padStart(3, "0");
}

Page({
  data: {
    cpQuery: "",
    cpOptionsVisible: false,
    cpOptions: [],
    currentCpId: 12,
    cpName: "佐助 × 鸣人",
    cpType: "宿敌—救赎—双向执念",
    statVideos: 15,
    statComments: 275,
    statHeat: "3.27",

    fontSize: 12,
    danmuBoxW: 320,
    danmuBoxH: 176,
    danmus: [],
    tracks: [],
    tempTracks: 0,

    filter: "all",
    search: "",
    filtered: [],
    timeline: [],
    evidence: [],
    commentPool: [],

    agentId: "",
    agentLog: "",
    agentAnalysis: "",
    aiOut: "",
    reportOut: "",
    reportModalOpen: false,
    reportCardText: "",
    busy: false,

    openAddModal: false,
    mDate: "",
    mTitle: "",
    mDesc: "",
    typeOptions: ["关键节点（红色）", "高热事件（金色）", "普通记录（灰色）"],
    typeIndex: 2,

    toast: ""
  },

  onLoad() {
    const options = getCpItems().map((x) => ({
      id: x.id,
      name: x.name,
      aliases: Array.isArray(x.aliases) ? x.aliases : [],
      aliasText: Array.isArray(x.aliases) ? x.aliases.join(" / ") : ""
    }));
    this.setData({ cpOptions: options, agentId: allocAgentCode() });
    this.applyCpEffect(12);
    this.syncFiltered();
  },

  onReady() {
    this.initDanmuBox();
    this.initTracks();
    this.seedInitialDanmu();
    this.startTicker();
  },

  onShow() {
    const hasTimeline = Array.isArray(this.data.timeline) && this.data.timeline.length > 0;
    const hasEvidence = Array.isArray(this.data.evidence) && this.data.evidence.length > 0;
    if (!hasTimeline || !hasEvidence) this.applyCpEffect(this.data.currentCpId || 12);
    else this.syncFiltered();
  },

  onUnload() {
    if (this._tickTimer) clearInterval(this._tickTimer);
    if (this._spawnTimer) clearInterval(this._spawnTimer);
    this._tickTimer = 0;
    this._spawnTimer = 0;
  },

  getFiltered() {
    const s = String(this.data.search || "").trim().toLowerCase();
    const f = this.data.filter;
    return (this.data.timeline || []).filter((n) => {
      if (f !== "all" && n.type !== f) return false;
      if (!s) return true;
      return (n.date + n.title + n.desc).toLowerCase().includes(s);
    });
  },

  syncFiltered() {
    this.setData({ filtered: this.getFiltered() });
  },

  initDanmuBox() {
    const q = wx.createSelectorQuery().in(this);
    q.select("#danmuBox").boundingClientRect();
    q.exec((res) => {
      const r = res && res[0] ? res[0] : null;
      if (!r) return;
      this.setData({ danmuBoxW: Math.round(r.width), danmuBoxH: Math.round(r.height) });
    });
  },

  initTracks() {
    const fontSize = this.data.fontSize;
    const lineH = fontSize + 8;
    const base = 8;
    const tracks = [];
    for (let i = 0; i < base; i++) tracks.push({ y: i * lineH, lastRight: -99999 });
    this._lineH = lineH;
    this.setData({ tracks, tempTracks: 0 });
  },

  pickTrack(width, w) {
    const safeGap = 42;
    const tracks = this.data.tracks || [];
    let bestIdx = 0;
    let bestRight = Infinity;

    for (let i = 0; i < tracks.length; i++) {
      const tr = tracks[i];
      if (tr.lastRight < -safeGap) return { idx: i, speedScale: 1 };
      if (tr.lastRight < bestRight) {
        bestRight = tr.lastRight;
        bestIdx = i;
      }
    }

    if (bestRight < width - safeGap * 1.2) return { idx: bestIdx, speedScale: 0.7 };

    if (this.data.tempTracks < 4) {
      const t = this.data.tempTracks + 1;
      const y = this.data.danmuBoxH - this._lineH * t;
      const next = [...tracks, { y: Math.max(0, y), lastRight: -99999, temp: true }];
      this.setData({ tracks: next, tempTracks: t });
      return { idx: next.length - 1, speedScale: 1 };
    }

    return { idx: bestIdx, speedScale: 0.7 };
  },

  pushDanmu(text) {
    const cleanText = sanitizeDanmuText(text);
    if (!cleanText) return;
    const id = nowId("dm");
    const fontSize = this.data.fontSize;
    const w = estWidth(cleanText, fontSize);
    const width = this.data.danmuBoxW;
    const pick = this.pickTrack(width, w);
    const tracks = this.data.tracks || [];
    const y = tracks[pick.idx] ? tracks[pick.idx].y : 0;
    const speed = 120 * pick.speedScale;
    const item = { id, text: cleanText, x: width, top: y, w, speed, liked: false, likes: 0 };

    const nextDanmus = [item, ...(this.data.danmus || [])].slice(0, 120);
    const nextTracks = tracks.map((t, i) => (i === pick.idx ? { ...t, lastRight: width + w } : t));
    this.setData({ danmus: nextDanmus, tracks: nextTracks });
  },

  getCurrentCp() {
    const arr = getCpItems();
    return arr.find((x) => Number(x.id) === Number(this.data.currentCpId)) || arr[0] || null;
  },

  seedInitialDanmu() {
    const current = this.getCurrentCp();
    const cpComments = current && Array.isArray(current.commentSamples) ? current.commentSamples : [];
    const seeds = [
      `情报归档：CP-${this.data.currentCpId}`,
      "弹幕内容来自高赞评论样本",
      "点击弹幕可为这条评论 +1",
      ...cpComments.slice(0, 5).map((x) => `${x.text}  ▲${x.likes}`)
    ];
    for (const s of seeds) this.pushDanmu(s);
  },

  seedDanmu() {
    const pool = this.data.commentPool || [];
    if (!pool.length) return;
    if (typeof this._commentCursor !== "number") this._commentCursor = 0;
    const item = pool[this._commentCursor % pool.length];
    this._commentCursor += 1;
    const t = `${item.text}  ▲${item.likes}`;
    this.pushDanmu(t);
  },

  startTicker() {
    let last = Date.now();
    this._tickTimer = setInterval(() => {
      const now = Date.now();
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      this.tick(dt);
    }, 30);

    this._spawnTimer = setInterval(() => {
      this.seedDanmu();
    }, 1100);
  },

  tick(dt) {
    const width = this.data.danmuBoxW;
    const killX = -width - 320;
    const danmus = (this.data.danmus || []).map((d) => ({ ...d, x: d.x - d.speed * dt }));
    const alive = danmus.filter((d) => d.x > killX);

    const tracks = (this.data.tracks || []).map((t) => ({ ...t }));
    for (const t of tracks) t.lastRight = -99999;
    for (const d of alive) {
      const right = d.x + d.w;
      for (let i = 0; i < tracks.length; i++) {
        if (tracks[i].y === d.top) tracks[i].lastRight = Math.max(tracks[i].lastRight, right);
      }
    }

    const keepTracks = tracks.filter((t) => !t.temp || t.lastRight > -99999);
    const tempCount = keepTracks.filter((t) => t.temp).length;
    this.setData({ danmus: alive, tracks: keepTracks, tempTracks: tempCount });
  },

  onDanmuTap(e) {
    const id = e && e.target && e.target.dataset ? e.target.dataset.id : "";
    if (!id) return;
    const next = (this.data.danmus || []).map((d) => {
      if (d.id !== id) return d;
      return { ...d, liked: true, likes: Number(d.likes || 0) + 1 };
    });
    this.setData({ danmus: next });
  },

  onEvidenceTap(e) {
    const link = String(e.currentTarget.dataset.link || "").trim();
    if (!link) {
      this.showToast("该证据暂无链接");
      return;
    }
    wx.setClipboardData({
      data: link,
      success: () => this.showToast("证据链接已复制，可粘贴到浏览器打开")
    });
  },

  onTimelineLinkTap(e) {
    const link = String(e.currentTarget.dataset.link || "").trim();
    if (!link) {
      this.showToast("该时间线暂无原链接");
      return;
    }
    wx.setClipboardData({
      data: link,
      success: () => this.showToast("原链接已复制，可直接在浏览器打开")
    });
  },

  onCpName(e) { this.setData({ cpName: e.detail.value }); },
  onCpType(e) { this.setData({ cpType: e.detail.value }); },

  onCpQueryFocus() {
    const list = getCpItems().slice(0, 5).map((x) => ({
      id: x.id,
      name: x.name,
      aliases: Array.isArray(x.aliases) ? x.aliases : [],
      aliasText: Array.isArray(x.aliases) ? x.aliases.join(" / ") : ""
    }));
    this.setData({ cpOptionsVisible: true, cpOptions: list, cpQuery: this.data.cpQuery || this.data.cpName });
  },

  onCpQueryBlur() {
    setTimeout(() => this.setData({ cpOptionsVisible: false }), 120);
  },

  onCpQueryInput(e) {
    const q = String(e.detail.value || "");
    const nq = q.trim().toLowerCase();
    const list = getCpItems()
      .filter((x) => {
        if (!nq) return true;
        const n = String(x.name || "").toLowerCase();
        const aliases = Array.isArray(x.aliases) ? x.aliases.join(" ").toLowerCase() : "";
        return n.includes(nq) || aliases.includes(nq);
      })
      .slice(0, 5)
      .map((x) => ({
        id: x.id,
        name: x.name,
        aliases: Array.isArray(x.aliases) ? x.aliases : [],
        aliasText: Array.isArray(x.aliases) ? x.aliases.join(" / ") : ""
      }));
    this.setData({ cpQuery: q, cpOptions: list, cpOptionsVisible: true });
  },

  onSelectCp(e) {
    const id = Number(e.currentTarget.dataset.id || 0);
    if (!id) return;
    const cp = getCpItems().find((x) => Number(x.id) === id) || null;
    this.applyCpEffect(id);
    this.setData({ cpOptionsVisible: false, cpQuery: cp ? cp.name : this.data.cpName });
    this.showToast(`已切换：${cp ? cp.name : "当前CP"}`);
  },

  applyCpEffect(id) {
    const arr = getCpItems();
    const cp = arr.find((x) => Number(x.id) === Number(id)) || arr[0];
    if (!cp) return;

    const hotEvidence = Array.isArray(cp.evidence)
      ? [...cp.evidence]
          .sort((a, b) => Number(b.likes || 0) - Number(a.likes || 0))
          .map((x, i) => ({
            ...x,
            tier: i < 2 ? 1 : i < 4 ? 2 : 3,
            evRank: String(i + 1).padStart(2, "0")
          }))
      : [];

    const timeline = hotEvidence.slice(0, 5).map((x, i) => ({
      id: `tl_${cp.id}_${i + 1}`,
      date: `热点证据 #${i + 1}`,
      title: x.text,
      desc: `热度 ${x.likes}`,
      link: x.link || "",
      type: i < 2 ? "key" : i < 4 ? "hot" : "normal",
      badgeText: i < 2 ? "KEY" : i < 4 ? "HOT" : "—",
      likes: Math.max(1, Math.round(Number(x.likes || 0) / 1000)),
      userLiked: false
    }));

    const evidence = Array.isArray(cp.commentSamples)
      ? [...cp.commentSamples]
          .sort((a, b) => Number(b.likes || 0) - Number(a.likes || 0))
          .map((x, i) => ({
            id: `cmt_${cp.id}_${i + 1}`,
            text: x.text || "（空评论）",
            likes: Number(x.likes || 0),
            tier: i < 2 ? 1 : i < 4 ? 2 : 3,
            evRank: String(i + 1).padStart(2, "0")
          }))
      : [];

    const stats = cp.stats || {};
    this.setData(
      {
        currentCpId: cp.id,
        cpName: cp.name,
        cpType: cp.type || "",
        cpQuery: cp.name,
        agentAnalysis: cp.defaultAnalysis || this.data.agentAnalysis || "",
        statVideos: Number(stats.videos || 0),
        statComments: Number(stats.comments || 0),
        statHeat: String(stats.heat || "2.50"),
        evidence,
        commentPool: Array.isArray(cp.commentSamples) ? cp.commentSamples : [],
        timeline,
        filter: "all",
        search: ""
      },
      () => {
        this.syncFiltered();
        this.setData({ danmus: [] });
        this._commentCursor = 0;
        this.initTracks();
        this.seedInitialDanmu();
      }
    );
  },

  onSearch(e) {
    this.setData({ search: e.detail.value });
    this.syncFiltered();
  },

  setFilter(e) {
    const t = e.currentTarget.dataset.t;
    this.setData({ filter: t });
    this.syncFiltered();
  },

  likeTimeline(e) {
    const id = e.currentTarget.dataset.id;
    let likedTitle = "";
    const next = (this.data.timeline || []).map((n) => {
      if (n.id !== id) return n;
      if (n.userLiked) return n;
      likedTitle = n.title;
      return { ...n, userLiked: true, likes: n.likes + 1 };
    });
    const logText = likedTitle ? `最近点赞时间线：${likedTitle}` : this.data.agentLog;
    this.setData({ timeline: next, agentLog: logText }, () => this.syncFiltered());
  },

  openAdd() { this.setData({ openAddModal: true }); },
  closeAdd() { this.setData({ openAddModal: false }); },
  noop() {},
  onMDate(e) { this.setData({ mDate: e.detail.value }); },
  onMTitle(e) { this.setData({ mTitle: e.detail.value }); },
  onMDesc(e) { this.setData({ mDesc: e.detail.value }); },
  onMType(e) { this.setData({ typeIndex: Number(e.detail.value || 0) }); },

  showToast(msg) {
    this.setData({ toast: msg });
    if (this._toastT) clearTimeout(this._toastT);
    this._toastT = setTimeout(() => this.setData({ toast: "" }), 2200);
  },

  saveNode() {
    const title = String(this.data.mTitle || "").trim();
    if (!title) {
      this.showToast("请填写事件标题");
      return;
    }
    const type = this.data.typeIndex === 0 ? "key" : this.data.typeIndex === 1 ? "hot" : "normal";
    const n = {
      id: nowId("tl"),
      date: String(this.data.mDate || "未填写日期"),
      title,
      desc: String(this.data.mDesc || "").trim(),
      type,
      badgeText: type === "key" ? "KEY" : type === "hot" ? "HOT" : "—",
      likes: 0,
      userLiked: false
    };
    const next = [...(this.data.timeline || []), n];
    this.setData({ timeline: next, openAddModal: false, mDate: "", mTitle: "", mDesc: "", typeIndex: 2 });
    this.syncFiltered();
    this.showToast("节点已添加");
  },

  onAgentId() {},
  onAgentLog(e) { this.setData({ agentLog: e.detail.value }); },
  onAgentAnalysis(e) { this.setData({ agentAnalysis: e.detail.value }); },

  buildReportCard() {
    const cp = this.data.cpName || "未命名CP";
    const agent = this.data.agentId || "匿名特工";
    const log = (this.data.agentLog || "（无追踪日志）").trim();
    const ana = (this.data.agentAnalysis || "（无侧写分析）").trim();
    const now = new Date();
    const d = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    return [
      "【CP侦探局 · 结案报告】",
      `案件编号：CP-${this.data.currentCpId}`,
      `结案日期：${d}`,
      "────────────────",
      `目标CP：${cp}`,
      `特工代号：${agent}`,
      "",
      "【追踪日志】",
      log,
      "",
      "【侧写分析】",
      ana,
      "",
      "【结案判定】",
      "该案件已形成可复核的证据链：热点证据、评论语料与时间线节点相互印证，满足阶段性结案标准。",
      "",
      "【后续建议】",
      "持续监测新证据入库，并每 7 日复核一次高热词条波动。"
    ].join("\n");
  },

  async aiPolish() {
    const t = String(this.data.agentAnalysis || "").trim();
    this.showToast("提示：请先在 utils/deepseek.js 配置有效 API Key");
    if (!t) {
      this.showToast("请先写下侧写");
      return;
    }
    this.setData({ busy: true, aiOut: "正在润色中…", reportOut: "" });
    try {
      const r = await requestChat([{ role: "user", content: t }], "你是一名FBI案件分析师。请将用户输入的CP侧写分析润色为侦探报告风格，中文输出。");
      this.setData({ aiOut: r.text || "收到响应但未获得有效内容，请稍后重试。" });
    } catch (e) {
      this.setData({ aiOut: "润色失败：" + (e && e.message ? e.message : "网络异常或 Key 失效") });
    } finally {
      this.setData({ busy: false });
    }
  },

  async genReport() {
    const card = this.buildReportCard();
    this.setData({ reportOut: card, reportCardText: card, reportModalOpen: true });
  },

  closeReportModal() {
    this.setData({ reportModalOpen: false });
  },

  copyReportCard() {
    const txt = this.data.reportCardText || this.buildReportCard();
    wx.setClipboardData({ data: txt, success: () => this.showToast("结案报告已复制") });
  }
});
