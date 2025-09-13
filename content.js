chrome.storage.local.get("selectedBg", (data) => {
  if (!data.selectedBg) return;

  const bgUrl = data.selectedBg;

  // Inserisci subito CSS nel documento (document_start)
  const style = document.createElement("style");
  style.textContent = `
    .img-right {
      background: url(${bgUrl}) !important;
      background-size: cover !important;
    }
  `;
  document.head.appendChild(style);

  // Usa MutationObserver per catturare div creati dinamicamente
  const observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (node.nodeType === 1) { // Element
          const div = node.matches(".img-right") ? node : node.querySelector(".img-right");
          if (div) {
            div.style.background = `url(${bgUrl})`;
            div.style.backgroundSize = "cover";
          }
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
