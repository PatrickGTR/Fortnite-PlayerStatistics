// --
// Main
// --
import React from "react";
import Link from "next/link";

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
      <section className="section">
        <div className="container">
          <nav
            className="has-text-centered"
            style={{
              padding: "20px"
            }}
          >
            <Link href="/">
              <a>
                <button
                  style={{ marginRight: "10px" }}
                  className="button is-link"
                >
                  Homepage
                </button>
              </a>
            </Link>
            <Link href="/news">
              <a>
                <button className="button is-link">News</button>
              </a>
            </Link>
          </nav>

          {children}
        </div>
      </section>
      <FooterContent />
    </>
  );
};

export default PageLayout;
