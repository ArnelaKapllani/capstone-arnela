import Image from "next/image";
import Link from "next/link";
import { StyledDetailsPage } from "./style";
import { StyledImage } from "./style";
import { StyledListDetails } from "./style";
import { StyledDescription } from "./style";

export default function BookDetails({ book }) {
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
        <button>
          <Link href="/">X</Link>
        </button>
      </StyledDetailsPage>
      <StyledDescription>
        <h4>Description:</h4>
        <p>{book.description}</p>
      </StyledDescription>
    </>
  );
}
