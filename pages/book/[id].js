import { useRouter } from "next/router";
import { books } from "../../lib/books.js";
import Image from "next/image";
import styled from "styled-components";

const StyledDetailsPage = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const StyledImage = styled.image`
  flex-shrink: 0;
  margin-right: 20px;
  padding-top: 25px;
  padding-left: 25px;
`;

const StyledListDetails = styled.details`
  padding-top: 30px;
  flex-grow: 1;
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
  padding-right: 25px;
  line-height: 1.8;
`;

const StyledDescription = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  font-size: 14px;
  line-height: 1.4;
`;

export default function BookDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const book = books.find((book) => book.id === id);

  if (!book) {
    return <div>Book not found.</div>;
  }

  const bookDetails = [
    { label: "Title", value: book.title },
    { label: "Author", value: book.author },
    { label: "Category", value: book.category },
    { label: "ISBN", value: book.ISBN },
    { label: "EAN", value: book.EAN },
    { label: "Language", value: book.language },
    { label: "Publication", value: book.publication },
    { label: "Number of pages", value: book.pagenumber },
    { label: "Price", value: `${book.price} ${book.currencyCode}` },
  ];

  const handleOnClose = () => {
    router.push("/");
  };

  return (
    <>
      <StyledDetailsPage>
        <StyledImage>
          <Image
            src={book.imageURL}
            alt={book.title}
            width={300}
            height={400}
          />
        </StyledImage>
        <StyledListDetails>
          <ul>
            {bookDetails.map((detail) => (
              <li key={detail.label}>
                <strong>{detail.label}:</strong> {detail.value}
              </li>
            ))}
          </ul>
        </StyledListDetails>
        <button onClick={handleOnClose}>Close</button>
      </StyledDetailsPage>
      <StyledDescription>
        <h4>Description:</h4>
        <p>{book.description}</p>
      </StyledDescription>
    </>
  );
}
