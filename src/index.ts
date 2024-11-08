import express from 'express';
import connectDB from './db-connection';
import bookRoutes from './routes/book.route';

connectDB();

const app = express();
app.use(express.json()); // Middleware untuk parse JSON

connectDB()

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/book', bookRoutes); // Gunakan book routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
