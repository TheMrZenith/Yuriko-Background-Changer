const urls = {
  bgBase: "https://img.animeworld.ac/general/YurikoBasev2.png",
  bg2020: "https://img.animeworld.ac/general/YurikoEstiva2020.png",
  bgChrismas2020: "https://img.animeworld.ac/general/YurikoNatale2020.png",
  bg2021: "https://img.animeworld.ac/general/YurikoEstiva2021.png",
  bg2022: "https://img.animeworld.ac/general/YurikoEstiva2022.png",
  bg2023: "https://img.animeworld.ac/general/YurikoEstiva2023.png",
  bg2024: "https://img.animeworld.ac/general/YurikoEstiva2024.png",
  bg2025: "https://img.animeworld.ac/general/YurikoEstiva2025.png",
  bg9years: "https://img.animeworld.ac/general/yuriko9anni.png"
};

// Event listener per tutti i bottoni
for (let id in urls) {
  document.getElementById(id).addEventListener("click", () => {
    chrome.storage.local.set({ selectedBg: urls[id] }, () => {
      // Applica subito sul tab attivo
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: (url) => {
            const div = document.querySelector(".img-right");
            if (div) {
              div.style.background = `url(${url})`;
              div.style.backgroundSize = "cover";
            }
          },
          args: [urls[id]]
        });
      });
    });
  });
}

// Bottone RESET
const resetBtn = document.createElement("button");
resetBtn.textContent = "RESET";
resetBtn.style.marginTop = "12px";
resetBtn.onclick = () => {
  chrome.storage.local.remove("selectedBg", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          const div = document.querySelector(".img-right");
          if (div) div.style.background = "";
        }
      });
    });
  });
};
document.body.appendChild(resetBtn);
