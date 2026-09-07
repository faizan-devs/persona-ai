import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
    res.json({
        status: 200,
        service: 'Persona-AI Backend Service',
    });
});

app.get('/health', (_req, res) => {
    res.json({
        status: 200,
        service: 'persona-ai-api',
    });
});

export default app;
