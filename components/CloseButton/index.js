import Icon from "@mdi/react";
import { mdiWindowClose } from "@mdi/js";
import { useRouter } from "next/router";
import { StyledButton } from "./style";

export default function CloseButton() {
  const router = useRouter();
  const tooltipText = "Close";

  function handleGoBack() {
    router.back();
  }

  return (
    <StyledButton onClick={handleGoBack} title={tooltipText}>
      <Icon path={mdiWindowClose} size={0.8} />
    </StyledButton>
  );
}
