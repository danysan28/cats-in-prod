import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get('/health', (req, res) => {
    res.json({
        status: "ok",
        env: process.env.NODE_ENV,
        timestamp: new Date().toISOString(),
    });
});

app.get("/api/cats", (req, res) => {
    res.json([
        { id: 1, name: "Michi"},
        { id: 2, name: "Pelusa"},
        { id: 3, name: "Bigotes"},
    ]);
});

app.listen(PORT, () => {
    console.log(`😼 Backend running on port ${PORT}`);
});