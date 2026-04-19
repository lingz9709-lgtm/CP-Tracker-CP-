const CHAT_COMPLETIONS_URL = "https://api.deepseek.com/chat/completions";
const DEEPSEEK_API_KEY = "sk-0ff72ba75f25465a9a86bcee821388df";
const MODEL = "deepseek-chat"; // 可替换为您需要的模型名称

function safePickAssistantText(payload) {
  const txt = payload && payload.choices && payload.choices[0] && payload.choices[0].message && payload.choices[0].message.content;
  if (typeof txt === "string" && txt.trim()) return txt;
  const alt = payload && payload.choices && payload.choices[0] && payload.choices[0].text;
  if (typeof alt === "string" && alt.trim()) return alt;
  return "";
}

function safePickError(payload) {
  const e = payload && payload.error;
  if (!e) return "";
  if (typeof e === "string") return e;
  if (typeof e.message === "string") return e.message;
  return "";
}

function requestChat(messages, systemText) {
  const system = typeof systemText === "string" && systemText.trim() ? systemText.trim() : "You are a helpful assistant.";
  const merged = [{ role: "system", content: system }, ...(Array.isArray(messages) ? messages : [])];

  return new Promise((resolve, reject) => {
    wx.request({
      url: CHAT_COMPLETIONS_URL,
      method: "POST",
      header: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + DEEPSEEK_API_KEY
      },
      data: {
        model: MODEL,
        messages: merged,
        stream: false
      },
      timeout: 30000,
      success(res) {
        const data = res && res.data ? res.data : null;
        if (!res || res.statusCode < 200 || res.statusCode >= 300) {
          const msg = safePickError(data) || ("HTTP " + (res ? res.statusCode : "请求失败"));
          reject(new Error(msg));
          return;
        }
        const out = safePickAssistantText(data);
        if (!out) {
          resolve({ text: "", raw: data });
          return;
        }
        resolve({ text: out, raw: data });
      },
      fail(err) {
        reject(new Error((err && err.errMsg) || "网络异常"));
      }
    });
  });
}

module.exports = {
  requestChat
};
