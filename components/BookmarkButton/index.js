import Icon from "@mdi/react";
import { mdiBookmarkOutline } from "@mdi/js";

export default function BookmarkButton() {
  return (
    <>
      <button type="button">
        <Icon path={mdiBookmarkOutline} size={1} />
      </button>
    </>
  );
}
