import React from "react";
import Head from "next/head";

const HeadContent = () => (
  <Head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
    />
    <link rel="stylesheet" href="/static/style.css" />
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js" />
    <title>Fortnite Statistics</title>
  </Head>
);

export default HeadContent;
