const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// База данных (можно заменить на реальную)
const users = {};

// Эндпоинт для обработки команды /start
app.post('/start', (req, res) => {
    const { userId, username } = req.body;

    // Сохраняем или обновляем данные пользователя
    users[userId] = { username };

    // Возвращаем ответ
    res.send({ message: `Добро пожаловать, ${username}!` });
});

// Эндпоинт для мини-приложения (проверка пользователя)
app.get('/user-status', (req, res) => {
    const { id } = req.query;
    if (users[id]) {
        res.send(users[id]);
    } else {
        res.status(404).send({ message: 'Пользователь не найден' });
    }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
