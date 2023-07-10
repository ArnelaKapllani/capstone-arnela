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
      <h3>{book.title}</h3>
      <h3>{book.ISBN}</h3>
      <h3>{book.EAN}</h3>
      <h3>{book.language}</h3>
      <h3>{book.pagenumber}</h3>
      <h3>{book.publication}</h3>
      <h3>{book.price}</h3>
      <p>{book.description}</p>
    </div>
  );
}
