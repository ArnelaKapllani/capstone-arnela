import { StyledFrame } from "../BookDetails/style.js";
import { StyledImage } from "../BookImage/style.js";

export default function BookImage({ book }) {
  const { imageURL, title, dimensions } = book;

  return (
    <StyledFrame>
      <StyledImage
        src={imageURL}
        alt={title}
        width={dimensions.width}
        height={dimensions.height}
      />
    </StyledFrame>
  );
}
