import { useRouter } from "next/router";
import { StyledButton } from "./style";

export default function CloseButton() {
  const router = useRouter();

  function handleGoBack() {
    router.back();
  }

  return <StyledButton onClick={handleGoBack}>X</StyledButton>;
}
