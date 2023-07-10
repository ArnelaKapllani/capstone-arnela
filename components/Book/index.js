import Image from "next/image";

export default function Book({ book }) {
  const {
    imageURL,
    title,
    // ISBN,
    // EAN,
    // language,
    // pagenumber,
    // publication,
    // price,
    // description,
  } = book;

  return (
    <div>
      <Image src={imageURL} alt={title} width={150} height={200} />
      {/* <h3>{title}</h3>
      <h3>{ISBN}</h3>
      <h3>{EAN}</h3>
      <h3>{language}</h3>
      <h3>{pagenumber}</h3>
      <h3>{publication}</h3>
      <h3>{price}</h3>
      <p>{description}</p> */}
    </div>
  );
}
