import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

const app = express();

app.use(helmet());

app.use(
    cors({
        origin: 'http://localhost:3000',
    }),
);

app.use(express.json());

app.get('/health', (_req, res) => {
    res.status(200).json({
        status: 'ok',
        service: 'persona-ai-backend',
    });
});

export default app;
