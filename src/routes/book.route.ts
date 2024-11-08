import express from 'express';
import { addBook, getAllBooks, getBookById, updateBook, deleteBook } from '../controllers/book.controller';

const router = express.Router();

router.post('/', addBook);
router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
