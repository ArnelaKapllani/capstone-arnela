import React from "react";
import { useRouter } from "next/router";
import { books } from "../../lib/books.js";
import Image from "next/image";

export default function BookDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const book = books.find((book) => book.id === id);

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <div>
      <Image src={book.imageURL} alt={book.title} width={150} height={200} />
      <h4>Title: {book.title}</h4>
      <h4>Author: {book.author}</h4>
      <h4>Category: {book.category}</h4>
      <h4>ISBN: {book.ISBN}</h4>
      <h4>EAN: {book.EAN}</h4>
      <h4>Language: {book.language}</h4>
      <h4>Publication: {book.publication}</h4>
      <h4>
        Price: {book.price} {book.currencyCode}
      </h4>
      <h4>Number of page: {book.pagenumber}</h4>
      <h4>Description:</h4>
      <p>{book.description}</p>
    </div>
  );
}
