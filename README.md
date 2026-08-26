# HK Bus ETA

香港巴士到站時間的行動優先資訊看板。專案支援 PWA 安裝、離線保留已瀏覽的應用程式介面，並以 GitHub Pages 自動發布。

## 本機開發

```bash
pnpm install
pnpm dev
```

## GitHub Pages

推送至 `main` 後，GitHub Actions 會以 repository 名稱作為網站子路徑建置並發布。首次發布時，請在 repository 的 **Settings → Pages** 將來源選為 **GitHub Actions**。

## PWA

在支援的行動瀏覽器開啟已發布網站後，可使用瀏覽器選單的「加入主畫面」或「安裝應用程式」。PWA 會快取應用程式介面與已瀏覽的同源資產；即時 ETA、地圖與第三方 API 仍需要網絡連線。
