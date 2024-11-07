import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    isbn: {
        type: String,
        required: true,
        trim: true
    },
    publicationDate: {
        type: Date,
        required: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
    summary: {
        type: String,
        required: true,
        trim: true
    }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
