import { useRouter } from "next/router";
import { books } from "../../lib/books.js";
import BookDetails from "../../components/BookDetails/BookDetails.js";

export default function BookDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const book = books.find((book) => book.id === id);

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <div>
      <BookDetails
        imageURL={book.imageURL}
        title={book.title}
        author={book.author}
        category={book.category}
        ISBN={book.ISBN}
        EAN={book.EAN}
        language={book.language}
        publication={book.publication}
        pagenumber={book.pagenumber}
        price={book.price}
        currencyCode={book.currencyCode}
        description={book.description}
      />
    </div>
  );
}
