import styled from "styled-components";
import { BaseButton } from "./BaseButtton";
export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;