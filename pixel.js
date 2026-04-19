Page({
  data: {
    cpName: "",
    memo: "",
    modeIndex: 0,
    modeOptions: ["普通模式（无像素）", "像素风模式"],
    img1: "",
    img2: "",
    img1Meta: { w: 0, h: 0, nonSquare: false },
    img2Meta: { w: 0, h: 0, nonSquare: false },
    crop1X: 0,
    crop1Y: 0,
    crop2X: 0,
    crop2Y: 0
  },

  onReady() {
    const query = wx.createSelectorQuery().in(this);
    query.select("#c").fields({ node: true, size: true, rect: true });
    query.exec((res) => {
      const r = res && res[0] ? res[0] : null;
      if (!r) return;
      this.canvas = r.node;
      this.ctx = this.canvas.getContext("2d");
      const dpr = wx.getSystemInfoSync().pixelRatio || 2;
      this.canvas.width = Math.round(r.width * dpr);
      this.canvas.height = Math.round(r.height * dpr);
      this.ctx.scale(dpr, dpr);
      this.drawTemplate();
    });
  },

  onCpName(e) {
    this.setData({ cpName: e.detail.value });
  },
  onMemo(e) {
    this.setData({ memo: e.detail.value });
  },
  onModeChange(e) {
    this.setData({ modeIndex: Number(e.detail.value || 0) }, () => this.generate());
  },

  clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  },

  onCrop1X(e) { this.setData({ crop1X: this.clamp(Number(e.detail.value || 0), -50, 50) }, () => this.generate()); },
  onCrop1Y(e) { this.setData({ crop1Y: this.clamp(Number(e.detail.value || 0), -50, 50) }, () => this.generate()); },
  onCrop2X(e) { this.setData({ crop2X: this.clamp(Number(e.detail.value || 0), -50, 50) }, () => this.generate()); },
  onCrop2Y(e) { this.setData({ crop2Y: this.clamp(Number(e.detail.value || 0), -50, 50) }, () => this.generate()); },

  getInfo(path, cb) {
    wx.getImageInfo({
      src: path,
      success: (r) => {
        const w = Number(r.width || 0);
        const h = Number(r.height || 0);
        cb({ w, h, nonSquare: !!(w && h && w !== h) });
      },
      fail: () => cb({ w: 0, h: 0, nonSquare: false })
    });
  },

  pick1() {
    wx.chooseImage({
      count: 1,
      sizeType: ["compressed"],
      success: (res) => {
        const p = res.tempFilePaths && res.tempFilePaths[0] ? res.tempFilePaths[0] : "";
        this.getInfo(p, (meta) => {
          this.setData({ img1: p, img1Meta: meta, crop1X: 0, crop1Y: 0 }, () => this.generate());
        });
      }
    });
  },
  pick2() {
    wx.chooseImage({
      count: 1,
      sizeType: ["compressed"],
      success: (res) => {
        const p = res.tempFilePaths && res.tempFilePaths[0] ? res.tempFilePaths[0] : "";
        this.getInfo(p, (meta) => {
          this.setData({ img2: p, img2Meta: meta, crop2X: 0, crop2Y: 0 }, () => this.generate());
        });
      }
    });
  },

  drawTemplate() {
    if (!this.ctx) return;
    const W = 345;
    const H = 500;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#f0e6d2";
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#ac211c";
    ctx.fillRect(0, 0, W, 76);
    ctx.fillStyle = "rgba(255,255,255,0.92)";
    ctx.font = "700 18px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(this.data.cpName || "请输入CP名称", W / 2, 44);
    ctx.fillStyle = "#2a2118";
    ctx.font = "700 13px sans-serif";
    ctx.fillText("CP 结婚照", W / 2, 96);
    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(18, 112, W - 36, 270);
    ctx.fillStyle = "#111827";
    ctx.fillRect(0, H - 120, W, 120);
    ctx.fillStyle = "rgba(229,231,235,0.9)";
    ctx.font = "11px monospace";
    ctx.textAlign = "left";
    const certNo = this._certNo || this.makeCertNo();
    ctx.fillText("持证人：" + (this.data.cpName || "未填写"), 18, H - 92);
    ctx.fillText("登记日期：" + this.today(), 18, H - 72);
    ctx.fillText("结婚证字号：" + certNo, 18, H - 52);
    ctx.fillText("备注：" + (this.data.memo || (this.data.modeIndex === 1 ? "像素风模式" : "普通模式")), 18, H - 32);
  },

  today() {
    const d = new Date();
    const yyyy = String(d.getFullYear());
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  },

  makeCertNo() {
    const s = (Date.now().toString(16) + Math.random().toString(16).slice(2)).replace(/\./g, "");
    return `CPZ-${s.slice(0, 8).toUpperCase()}`;
  },

  loadImage(path, cb) {
    if (!this.canvas) return null;
    const img = this.canvas.createImage();
    img.onload = () => cb(img);
    img.onerror = () => cb(null);
    img.src = path;
  },

  drawCover(img, x, y, size, offX, offY) {
    if (!this.ctx || !img) return;
    const srcW = Number(img.width || 0);
    const srcH = Number(img.height || 0);
    if (!srcW || !srcH) return;
    const baseSide = Math.min(srcW, srcH);
    const cropSide = Math.max(1, baseSide);
    const roomX = (srcW - cropSide) / 2;
    const roomY = (srcH - cropSide) / 2;
    const sx = Math.max(0, Math.min(srcW - cropSide, roomX + roomX * (this.clamp(Number(offX || 0), -50, 50) / 50)));
    const sy = Math.max(0, Math.min(srcH - cropSide, roomY + roomY * (this.clamp(Number(offY || 0), -50, 50) / 50)));
    this.ctx.drawImage(img, sx, sy, cropSide, cropSide, x, y, size, size);
  },

  drawPixel(img, x, y, size, offX, offY) {
    if (!this.ctx || !img) return;
    const srcW = Number(img.width || 0);
    const srcH = Number(img.height || 0);
    if (!srcW || !srcH) return;
    const baseSide = Math.min(srcW, srcH);
    const roomX = (srcW - baseSide) / 2;
    const roomY = (srcH - baseSide) / 2;
    const sx0 = Math.max(0, Math.min(srcW - baseSide, roomX + roomX * (this.clamp(Number(offX || 0), -50, 50) / 50)));
    const sy0 = Math.max(0, Math.min(srcH - baseSide, roomY + roomY * (this.clamp(Number(offY || 0), -50, 50) / 50)));
    const block = 10;
    const scale = baseSide / size;
    for (let yy = 0; yy < size; yy += block) {
      for (let xx = 0; xx < size; xx += block) {
        this.ctx.drawImage(
          img,
          sx0 + xx * scale,
          sy0 + yy * scale,
          Math.max(1, block * scale),
          Math.max(1, block * scale),
          x + xx,
          y + yy,
          block,
          block
        );
      }
    }
  },

  generate() {
    if (!this.ctx) return;
    this._certNo = this.makeCertNo();
    this.drawTemplate();
    const ctx = this.ctx;
    const y = 132;
    const size = 160;
    const x1 = 28;
    const x2 = 345 - 28 - size;

    const done = () => {
      ctx.fillStyle = "#ac211c";
      ctx.font = "900 38px serif";
      ctx.textAlign = "center";
      ctx.fillText("♡", 345 / 2, y + 104);
    };

    let pending = 0;
    const checkDone = () => {
      pending -= 1;
      if (pending <= 0) done();
    };

    const pixelMode = Number(this.data.modeIndex || 0) === 1;
    if (this.data.img1) {
      pending += 1;
      this.loadImage(this.data.img1, (img) => {
        if (img) {
          if (pixelMode) this.drawPixel(img, x1, y, size, this.data.crop1X, this.data.crop1Y);
          else this.drawCover(img, x1, y, size, this.data.crop1X, this.data.crop1Y);
        }
        checkDone();
      });
    }
    if (this.data.img2) {
      pending += 1;
      this.loadImage(this.data.img2, (img) => {
        if (img) {
          if (pixelMode) this.drawPixel(img, x2, y, size, this.data.crop2X, this.data.crop2Y);
          else this.drawCover(img, x2, y, size, this.data.crop2X, this.data.crop2Y);
        }
        checkDone();
      });
    }
    if (pending === 0) done();
  },

  save() {
    if (!this.canvas) return;
    wx.canvasToTempFilePath({
      canvas: this.canvas,
      success: (res) => {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath
        });
      }
    });
  }
});
