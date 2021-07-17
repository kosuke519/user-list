import { Header } from "../Atom/layout/Header";

import styled from "styled-components";
export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
