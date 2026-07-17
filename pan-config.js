(() => {
  const API_BASE_URL = "";
  window.PAN_CONFIG = Object.freeze({ API_BASE_URL });
  if (!API_BASE_URL || window.__PAN_FETCH_CONFIGURED__) return;
  const originalFetch = window.fetch.bind(window);
  window.fetch = (input, init) => originalFetch(typeof input === "string" && input.startsWith("/api/") ? API_BASE_URL + input : input, init);
  window.__PAN_FETCH_CONFIGURED__ = true;
})();
