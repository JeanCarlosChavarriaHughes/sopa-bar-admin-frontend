import env from './environment';
import express from 'express';
const app = express();

const PORT = env.getPort();
app.get('/', (req, res) => res.json({ Puerto: PORT }));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
