Page({
  data: {
    url: ""
  },

  onLoad(query) {
    const raw = String((query && query.url) || "");
    const url = decodeURIComponent(raw || "");
    if (!/^https?:\/\//i.test(url)) {
      wx.showToast({ title: "链接无效", icon: "none" });
      return;
    }
    this.setData({ url });
  }
});
