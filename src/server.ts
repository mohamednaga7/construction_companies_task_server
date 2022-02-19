import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import helmet from 'helmet';
import { api } from './routes/api';

const PORT = process.env.PORT || 4001;

const app = express();

const server = createServer(app);

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use('/api', api);

server.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});
