// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const vocabulary = {
  animals: [
    { id: 1, en: 'Lion', vi: 'Sư tử', img: '🦁' },
    { id: 2, en: 'Elephant', vi: 'Voi', img: '🐘' },
    { id: 3, en: 'Monkey', vi: 'Khỉ', img: '🐒' },
  ],
  fruits: [
    { id: 1, en: 'Apple', vi: 'Táo', img: '🍎' },
    { id: 2, en: 'Banana', vi: 'Chuối', img: '🍌' },
  ],
  // ... Thêm đủ 8 chủ đề: colors, body, numbers, food, family, nature
};

app.get('/api/vocab/:topic', (req, res) => {
  const topic = req.params.topic;
  res.json(vocabulary[topic] || []);
});

app.listen(5000, () => console.log('Backend Rio đang chạy tại port 5000'));