import React from "react";
import Link from "next/link";
import PageLayout from "../components/PageLayout";

const News = () => {
  return (
    <>
      <PageLayout>
        You are currently viewing the news page.
        <Link href="/">
          <a>Send me to index</a>
        </Link>
      </PageLayout>
    </>
  );
};

export default News;
