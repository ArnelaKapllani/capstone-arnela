import React from "react";
import Image from "next/image";
import { StyledDetailsPage } from "./BookDetails.style";
import { StyledImage } from "./BookDetails.style";
import { StyledListDetails } from "./BookDetails.style";
import { StyledDescription } from "./BookDetails.style";

export default function BookDetails({
  imageURL,
  title,
  author,
  category,
  ISBN,
  EAN,
  language,
  publication,
  pagenumber,
  price,
  currencyCode,
  description,
  handleOnClose,
  id,
}) {
  const bookDetails = [
    { label: "Title", value: title },
    { label: "Author", value: author },
    { label: "Category", value: category },
    { label: "ISBN", value: ISBN },
    { label: "EAN", value: EAN },
    { label: "Language", value: language },
    { label: "Publication", value: publication },
    { label: "Number of pages", value: pagenumber },
    { label: "Price", value: `${price} ${currencyCode}` },
  ];

  return (
    <>
      <StyledDetailsPage>
        <StyledImage>
          <Image src={imageURL} alt={title} width={300} height={400} />
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
        <p>{description}</p>
      </StyledDescription>
    </>
  );
}
