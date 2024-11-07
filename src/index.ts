import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db-connection'; // Sesuaikan jalur import sesuai struktur Anda

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Database Connection
connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
