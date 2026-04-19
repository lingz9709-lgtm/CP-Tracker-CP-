const verdictHtml = require("../../data/verdict_html");

Page({
  data: {
    stage: "intro",
    qIndex: 0,
    answers: [],
    questions: [],
    current: { dim: "", text: "", opts: [] },
    currentOpts: [],
    progressText: "",
    canPrev: false,
    canNext: false,
    isLast: false,
    pct: 0,
    qNo: "01",
    letters: ["A", "B", "C"],
    result: { name: "—", sub: "", desc: "", why: "" },
    previewOpen: false,
    previewIndex: 0,
    previewHtmls: verdictHtml,
    previewTotal: 4,
    previewIndexText: 1
  },

  onLoad() {
    const questions = [
      { dim: "自我模型 · 自尊自信", text: "当你犯了一个错误，你第一个反应是什么？", opts: ["立刻自责，觉得自己很差劲", "分析原因，想办法改正", "这没什么大不了，看情况再说"] },
      { dim: "自我模型 · 自我清晰度", text: "你对自己的了解程度如何？", opts: ["有些模糊，常常搞不清自己要什么", "还算清楚，基本知道自己是谁", "非常清晰，我知道我要去哪"] },
      { dim: "自我模型 · 核心价值", text: "对你而言，什么是绝对不能让步的？", opts: ["他人的认可与接纳", "自己内心的判断与信念", "目标的达成，无论代价"] },
      { dim: "情感模型 · 依恋安全感", text: "在亲密关系里，你更担心哪件事？", opts: ["对方会离开我，我总需要确认", "我会失去自己，被关系吞噬", "两者都有，取决于关系"] },
      { dim: "情感模型 · 情感投入度", text: "爱上一个人时，你通常会怎样？", opts: ["为对方改变自己，有时失去自我", "保持自我的同时深深在乎", "情感上克制，行动上付出"] },
      { dim: "情感模型 · 边界与依赖", text: "关系让你不舒服时，你会怎么做？", opts: ["忍着，不想制造冲突", "说出来，我的边界很重要", "先逃开，再慢慢想清楚"] },
      { dim: "态度模型 · 世界观倾向", text: "你觉得世界本质上是什么样的？", opts: ["对抗性的，弱肉强食", "流动变化的", "有规则的，秩序带来安全"] },
      { dim: "态度模型 · 规则灵活度", text: "当规则明显不公平时，你的选择是？", opts: ["打破它，即使要付代价", "找规则内的空间绕过去", "接受它，用结果证明自己"] },
      { dim: "态度模型 · 人生意义感", text: "你觉得人活着最根本的意义是？", opts: ["让重要的人幸福", "成就某件有价值的事", "找到自我，成为更好的自己"] },
      { dim: "行动驱力 · 动机导向", text: "你主要的行动动力来自哪里？", opts: ["不想让人失望，害怕拖累别人", "想变得更强，保护在乎的人", "想让世界变得更好"] },
      { dim: "行动驱力 · 决策风格", text: "面对紧急决策时，你倾向于？", opts: ["跟着直觉走，相信本能", "快速分析利弊，选最优解", "先征求别人意见再行动"] },
      { dim: "行动驱力 · 执行模式", text: "遇到强大的阻碍时，你会？", opts: ["越难越上，哪怕失败也不后悔", "寻找最优路径，不做无谓冒险", "退一步，等待更好时机"] },
      { dim: "社交模型 · 社交主动性", text: "在一段关系里，你更像哪种角色？", opts: ["主动靠近的那一个", "被动等待对方", "看情况切换"] },
      { dim: "社交模型 · 人际边界感", text: "对你来说，最理想的亲密关系是？", opts: ["彼此依存，你中有我", "保持独立，但深度连接", "保持适当距离"] },
      { dim: "社交模型 · 表达真实度", text: "你习惯以什么方式表达爱？", opts: ["直接说出来，哪怕尴尬", "用行动代替语言，让对方感受", "藏着"] },
      { dim: "社交模型 · 情感参与方式", text: "在你喜欢的CP关系中，你更接近哪种状态？", opts: ["经常产粮", "偶尔参与", "主要吃粮"] }
    ];

    this.personas = [
      { name: "同好召唤师", sub: "社交E人", scores: [1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1], desc: "关系不是等来的，是我主动召唤你的。", why: "你主动出击，是评论区最活跃的召唤师。" },
      { name: "风解意", sub: "深度理解者", scores: [2, 3, 3, 2, 2, 2, 1, 2, 3, 2, 2, 2, 2, 2, 2, 2], desc: "风如解意，不必说太多，我就是对cp了解最深的人。", why: "你擅长洞察关系本质，是真正的懂王。" },
      { name: "三分糖", sub: "理性克制", scores: [3, 3, 2, 2, 2, 3, 3, 3, 2, 3, 3, 2, 3, 3, 3, 3], desc: "你对cp的刚刚好，像奶茶加了三分糖。理性又克制。", why: "你懂得保持距离，爱得清醒而舒适。" }
    ];

    this.setData({
      questions,
      answers: new Array(questions.length).fill(0)
    });
    this.syncQuizView();
  },

  start() {
    this.setData({ stage: "quiz", qIndex: 0, answers: new Array(this.data.questions.length).fill(0) });
    this.syncQuizView();
  },

  select(e) {
    const v = Number(e.currentTarget.dataset.v || 0);
    const idx = this.data.qIndex;
    const next = this.data.answers.slice();
    next[idx] = v;
    this.setData({ answers: next });
    this.syncQuizView();
  },

  next() {
    if (this.data.qIndex < this.data.questions.length - 1) {
      this.setData({ qIndex: this.data.qIndex + 1 });
      this.syncQuizView();
    }
  },

  prev() {
    if (this.data.qIndex > 0) {
      this.setData({ qIndex: this.data.qIndex - 1 });
      this.syncQuizView();
    }
  },

  finish() {
    let best = this.personas[0];
    let bestDist = Infinity;
    for (const p of this.personas) {
      const dist = p.scores.reduce((s, v, i) => s + Math.abs(v - (this.data.answers[i] || 2)), 0);
      if (dist < bestDist) {
        bestDist = dist;
        best = p;
      }
    }
    this.setData({ stage: "result", result: best });
  },

  copyShare() {
    const r = this.data.result;
    const text = `【CP侦探局·人格报告】\n我的人格：${r.name} · ${r.sub}\n判词：${r.desc}\n你也来测测你的CP人格吧！`;
    wx.setClipboardData({ data: text });
  },

  reset() {
    this.setData({ stage: "intro", previewOpen: false, previewIndex: 0 });
  },

  syncQuizView() {
    const qs = this.data.questions || [];
    const idx = Math.max(0, Math.min(this.data.qIndex || 0, Math.max(0, qs.length - 1)));
    const current = qs[idx] || { dim: "", text: "", opts: [] };
    const pct = qs.length ? Math.round((idx / qs.length) * 100) : 0;
    const qNo = String(idx + 1).padStart(2, "0");
    const selected = this.data.answers[idx] || 0;
    const currentOpts = (current.opts || []).map((text, i) => ({
      text,
      letter: this.data.letters[i] || "",
      value: i + 1,
      selected: selected === i + 1
    }));
    this.setData({
      current,
      currentOpts,
      pct,
      qNo,
      progressText: `第 ${idx + 1} 题 / 共 ${qs.length} 题 · ${pct}%`,
      canPrev: idx > 0,
      canNext: !!selected,
      isLast: idx >= qs.length - 1
    });
  },

  openPreview() {
    const total = (this.data.previewHtmls || []).length || 4;
    this.setData({ previewOpen: true, previewIndex: 0, previewTotal: total, previewIndexText: 1 });
  },

  closePreview() {
    this.setData({ previewOpen: false });
  },

  nextPreview() {
    const total = Number(this.data.previewTotal || 4);
    const next = (Number(this.data.previewIndex || 0) + 1) % total;
    this.setData({ previewIndex: next, previewIndexText: next + 1 });
  },

  prevPreview() {
    const total = Number(this.data.previewTotal || 4);
    const prev = (Number(this.data.previewIndex || 0) - 1 + total) % total;
    this.setData({ previewIndex: prev, previewIndexText: prev + 1 });
  },

  onPreviewStart(e) {
    const t = e.touches && e.touches[0];
    if (!t) return;
    this._sx = t.clientX;
    this._sy = t.clientY;
  },

  onPreviewEnd(e) {
    const t = e.changedTouches && e.changedTouches[0];
    if (!t) return;
    const dx = t.clientX - (this._sx || 0);
    const dy = t.clientY - (this._sy || 0);
    if (Math.abs(dx) > 35 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) this.nextPreview();
      if (dx > 0) this.prevPreview();
    }
  },

  noop() {}
});
