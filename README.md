# 💻 Yuriko Background Changer - AnimeWorld Extension

**⚠️ FOR EDUCATIONAL PURPOSES ONLY. DO NOT USE ON SITES WITHOUT PERMISSION.**  
This Chrome extension is intended for personal customization on [AnimeWorld](https://www.animeworld.ac/)
 only. Using it on other sites may break functionality or violate terms of service.

---

## 🚀 Features

- 🎨 Change background of .img-right: Apply custom backgrounds from 2020 to 2025 and a base version
- 💾 Persistent backgrounds: Your selected background remains even after refreshing the page
- 🔄 Reset button: Quickly restore the default background
- ⚡ Instant application: Uses CSS injection + MutationObserver to minimize flickering

---

## 🧠 Requirements

- Google Chrome (or Chromium-based browser supporting Manifest V3)
- No additional libraries needed

---

## ⚙️ Setup

1. **Clone or Download the Repo**:
```
git clone https://github.com/TheMrZenith/Yuriko-Background-Changer
```

or download the ZIP and extract it.

2. **Load the Extension in Chrome**:  
- Go to `chrome://extensions/`  
- Enable Developer mode  
- Click Load unpacked and select the extension folder  

3. **Use the Extension**:  
- Open AnimeWorld  
- Click the extension icon and choose a background  
- Hit RESET to revert to the default

---

## 📝 How It Works

1. Select a background from the popup → it’s immediately applied to `.img-right` and saved in Chrome storage.  
2. The background persists across page reloads thanks to a content script using CSS injection + **MutationObserver** .
3. Press **RESET** to clear the stored background and restore the original.

---

## ⚡ Notes

- The extension applies the background as early as possible (document_start) to reduce flash of the default background.  
- Some micro-flashes may still occur due to dynamic content loading on the site.

---

## 🛠️ File Overview

- `manifest.json` → Chrome extension manifest, declares permissions and content scripts  
- `popup.html / popup.js` → UI for choosing backgrounds and resetting  
- `content.js` → Applies and maintains selected background on page load  
- `assets/` → Icons and image assets

---

## 📝 License

This project is distributed under the MIT License. See [LICENSE](https://github.com/TheMrZenith/Yuriko-Background-Changer/blob/main/LICENSE) for details.
