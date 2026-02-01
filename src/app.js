import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './models/associations.js';
import sequelize from './config/database.js';
import userRoutes from './routes/userRoutes.js';
import scanRoutes from './routes/scanRoutes.js';
import auditRoutes from './routes/auditRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/scans', scanRoutes);
app.use('/audits', auditRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Sync Database and start server
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected...');

        // Sync models (force: false means it won't drop tables if they exist)
        await sequelize.sync({ force: false });

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();
