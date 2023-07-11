import Image from "next/image";
import { StyledFrame } from "../BookDetails/style.js";
import { StyledImage } from "../BookDetails/style.js";

export default function Book({ book }) {
  const { imageURL, title, dimensions } = book;

  return (
    <StyledFrame>
      <div>
        <StyledImage>
          <Image
            src={imageURL}
            alt={title}
            width={dimensions.width}
            height={dimensions.height}
          />
        </StyledImage>
      </div>
    </StyledFrame>
  );
}
