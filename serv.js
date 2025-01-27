const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware для CORS и обработки JSON
app.use(cors());
app.use(express.json());

// Имитация базы данных пользователей
const users = {
    1: { username: "getge", crystals: 100, keys: 5 },
    2: { username: "holiarus_user", crystals: 250, keys: 10 },
};

// Маршрут для получения данных о пользователе
app.get('/user-status', (req, res) => {
    const userId = req.query.id;
    if (users[userId]) {
        res.status(200).json(users[userId]);
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
