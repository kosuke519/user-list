import { Header } from "../Atom/layout/Header";

import { Footer } from "../Atom/layout/Footer";
export const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
