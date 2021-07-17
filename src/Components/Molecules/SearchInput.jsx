import { PrimaryButton } from "../Atom/Button/PrimaryButton";
import { Input } from "../Atom/input/Input";
import styled from "styled-components";
import { memo } from "react";
export const SearchInput = memo((props) => {
  console.log("SearchInput");
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
