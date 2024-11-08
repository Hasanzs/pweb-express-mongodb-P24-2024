import Book from '../models/book.model';
import { Request, Response } from 'express';

export const addBook = async (req: Request, res: Response) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).send(newBook);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getAllBooks = async (req: Request, res: Response) => {
    try {
        const books = await Book.find({});
        res.status(200).send(books);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getBookById = async (req: Request, res: Response) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
             res.status(404).send();
        }
        res.send(book);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateBook = async (req: Request, res: Response) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!book) {
             res.status(404).send();
        }
        res.send(book);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteBook = async (req: Request, res: Response) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            res.status(404).send();
        }
        res.send(book);
    } catch (error) {
        res.status(500).send(error);
    }
};
