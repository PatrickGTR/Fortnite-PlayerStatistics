// --
// Main
// --
import React from "react";

// --
// Style
// --
import "react-bulma-components/dist/react-bulma-components.min.css";

// --
// Body
// --
import HeadContent from "../components/headContent";
import FooterContent from "../components/footerContent";

const PageLayout = ({ children }) => {
  return (
    <>
      <HeadContent />
      <div className="container">{children}</div>
      <FooterContent />
    </>
  );
};

export default PageLayout;
