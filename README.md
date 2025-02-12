# 【練習專案】倒數計時器
來源：[五倍學院線上課程「JavaScript 入門」練習範例檔案](https://github.com/5xTraining/JS101)

本專案主要為練習 JavaScript 技術。我負責撰寫核心的 JS 邏輯部分，特別是處理倒數計時的功能實現。

## 功能
簡易倒數計時器，具備以下功能：
1. 點擊 **Start** 按鈕後，開始倒數，以秒為單位遞減。
2. 當計時器到達 `00:00` 時，自動停止計時。
3. 在計時期間，**Start** 按鈕會自動禁用，避免重複啟動。
4. 倒數結束後，**Start** 按鈕會恢復可用狀態。

## 主要技術點
1. 事件監聽器（`EventListener`）用於監聽按鈕點擊事件。
2. 使用 `setInterval` 和 `clearInterval` 來實現每秒遞減和計時結束時的停止。
3. DOM 操作來抓取和更新計時器的顯示時間。
4. 使用 `padStart` 方法來確保時間顯示為兩位數格式（例如，`09:05`）。
