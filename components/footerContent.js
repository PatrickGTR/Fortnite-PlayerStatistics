import React from "react";
const FooterContent = () => (
  <footer style={{ marginTop: "30px" }}>
    <div className="content has-text-centered">
      <p>
        <strong style={{ color: "white", textShadow: "1px 1px black" }}>
          Fortnite Statistics by{" "}
          <a
            style={{ color: "gold" }}
            href="https://patrickgtr.github.io"
            target="_blank"
            rel="noopener"
          >
            Patrick Subang
          </a>{" "}
          &copy; 2019
        </strong>
      </p>
    </div>
  </footer>
);

export default FooterContent;
