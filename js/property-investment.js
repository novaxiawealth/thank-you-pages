const params = new URLSearchParams(window.location.search);

const pdfUrl = params.get("pdfUrl");
const downloadBtn = document.getElementById("download-btn");

if (downloadBtn) {
  if (!pdfUrl || ["null", "undefined"].includes(pdfUrl)) {
    downloadBtn.classList.add("hidden");
  } else {
    downloadBtn.href = pdfUrl;
  }
}

// Clean URL only if param existed
if (pdfUrl !== null) {
  const cleanUrl = window.location.origin + window.location.pathname;
  window.history.replaceState({}, document.title, cleanUrl);
}
