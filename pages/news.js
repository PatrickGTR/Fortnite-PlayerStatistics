import React from "react";
import Link from "next/link";

import Moment from "react-moment";

import PageLayout from "../components/PageLayout";

const News = ({ news }) => {
  return (
    <>
      <PageLayout>
        <h1
          className="has-text-centered"
          style={{
            color: "white",
            fontSize: "200px",
            textShadow: "2px 2px black",
            fontFamily: "Burbank Big Condensed",
            lineHeight: "250px"
          }}
        >
          NEWS
        </h1>
        <div className="columns">
          {news.data
            .map((item, index) => {
              return (
                index <= 2 && (
                  <div key={index} className="column has-text-centered">
                    <article
                      className="message is-link"
                      style={{ height: "100%" }}
                    >
                      <div className="message-header">
                        <p>
                          {item.meta.adSpace !== null ? item.meta.adSpace : ""}
                        </p>
                        <p>
                          <strong>
                            <Moment format=" DD MMMM, YYYY" unix>
                              {item.time}
                            </Moment>
                          </strong>
                        </p>
                      </div>
                      <div className="message-body">
                        <img style={{ height: "200px" }} src={item.image} />

                        <h1
                          className="title has-text-left"
                          style={{ fontFamily: "Burbank Big Condensed" }}
                        >
                          {item.title.toUpperCase()}
                        </h1>
                        <h1 className="subtitle has-text-left">{item.body}</h1>
                      </div>
                    </article>
                  </div>
                )
              );
            })
            .reverse()}
        </div>
      </PageLayout>
    </>
  );
};

News.getInitialProps = async () => {
  const res = await fetch(
    "https://fortnite-api.theapinetwork.com/br_motd/get",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.FORTNITE_API_KEY
      }
    }
  );
  const news = await res.json();
  return { news };
};

export default News;
