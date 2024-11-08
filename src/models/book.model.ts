import mongoose, { Document, Schema } from 'mongoose';

interface Book extends Document {
  title: string;
  author: string;
  publishedDate: Date;
  publisher: string;
  description: string;
  coverImage: string;
  tags: string[];
  initialQty: number;
  qty: number;
  rating: {
    average: number;
    count: number;
  };
}

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
  publishedDate: {
    type: Date,
    required: true
  },
  publisher: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  coverImage: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  initialQty: {
    type: Number,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  rating: {
    average: { type: Number, required: true },
    count: { type: Number, required: true }
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Book = mongoose.model<Book>('Book', bookSchema);

export default Book;
