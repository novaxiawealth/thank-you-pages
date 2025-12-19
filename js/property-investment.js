// =============================================================
// Property Investment Project pages – common download pdf logic
// =============================================================

// Read query parameters
const params = new URLSearchParams(window.location.search);

// Handle PDF download redirection
const pdfUrl = params.get("pdfUrl");
const downloadBtn = document.getElementById("download-btn");

if (pdfUrl && downloadBtn) {
  downloadBtn.href = pdfUrl;
}

// Clean URL (remove query params after use)
const cleanUrl = window.location.origin + window.location.pathname;
window.history.replaceState({}, document.title, cleanUrl);
