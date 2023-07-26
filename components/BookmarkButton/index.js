import Icon from "@mdi/react";
import { mdiBookmarkOutline } from "@mdi/js";
import { mdiBookmark } from "@mdi/js";

export default function BookmarkButton({ isBookmarked, onClick }) {
  return (
    <>
      <button type="button" onClick={onClick}>
        {isBookmarked ? (
          <Icon path={mdiBookmark} size={1} />
        ) : (
          <Icon path={mdiBookmarkOutline} size={1} />
        )}
      </button>
    </>
  );
}
