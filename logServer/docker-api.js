const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 6000;


app.use(express.json());

// TODO: 按按鈕時間，按下的按鈕
app.post('/api/log', (req, res) => {
    const { buttonName, currentTime } = req.body;
    console.log(`Logging: Button ${buttonName} clicked at ${currentTime}`);

    // 這裡可以使用 Docker 的日誌驅動或其他方式來記錄日誌
    // 假設直接使用 stdout/stderr，這些會被 Docker 日誌系統捕獲

    res.status(200).send('Log recorded');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});