import { StyledFrame } from "../BookImage/style.js";
import { StyledImage } from "../BookImage/style.js";

export default function BookImage({ book, priority }) {
  const { imageURL, title, dimensions } = book;

  return (
    <StyledFrame>
      <StyledImage
        priority={priority}
        src={imageURL}
        alt={title}
        width={dimensions.width}
        height={dimensions.height}
      />
    </StyledFrame>
  );
}
