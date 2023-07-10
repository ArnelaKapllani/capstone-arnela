import Image from "next/image";

export default function Book({ book }) {
  const { imageURL, title } = book;

  return (
    <div>
      <Image src={imageURL} alt={title} width={150} height={200} />
    </div>
  );
}
