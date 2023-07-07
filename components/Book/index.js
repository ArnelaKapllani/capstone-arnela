import Image from "next/image";

export default function Book({ book }) {
  return (
    <>
      <Image src={book.imageURL} width={80} height={80} />
      <h3>{book.ISBN}</h3>
      <h3>{book.EAN}</h3>
      <h3>{book.language}</h3>
      <h3>{book.pagenumber}</h3>
      <h3>{book.publication}</h3>
      <h3>{book.price}</h3>
      <p>{book.description}</p>
    </>
  );
}
