import Icon from "@mdi/react";
import { mdiBookmarkOutline } from "@mdi/js";
import { mdiBookmark } from "@mdi/js";
import { StyledButton } from "../StyledButton/style.js";

export default function BookmarkButton({ isBookmarked, onClick }) {
  return (
    <>
      <StyledButton type="button" onClick={onClick}>
        {isBookmarked ? (
          <Icon path={mdiBookmark} size={0.8} />
        ) : (
          <Icon path={mdiBookmarkOutline} size={0.8} />
        )}
      </StyledButton>
    </>
  );
}
