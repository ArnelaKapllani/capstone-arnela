import mongoose from "mongoose";

const { Schema } = mongoose;

const bookSchema = new Schema({
  imageURL: { type: String, required: true },
  ISBN: { type: String, required: true },
  EAN: { type: String, required: true },
  language: { type: String, required: true },
  publication: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currencyCode: { type: String, required: true },
  pagenumber: { type: Number, required: true },
});

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;
