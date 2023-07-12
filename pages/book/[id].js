import { useRouter } from "next/router";
import { books } from "../../lib/books.js";
import BookDetails from "../../components/BookDetails/index.js";

export default function BookDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const book = books.find((book) => book.id === id);

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <div>
      <BookDetails book={book} />
    </div>
  );
}
