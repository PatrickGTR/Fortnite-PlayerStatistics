import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";

import Moment from "react-moment";

import Loader from "../components/Loader";
import PageLayout from "../components/PageLayout";

const News = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const getNewsData = async () => {
      const res = await fetch(
        "https://fortnite-api.theapinetwork.com/br_motd/get",
        {
          method: "GET",
          headers: {
            Authorization: process.env.FORTNITE_API_KEY
          }
        }
      );
      const news = await res.json();
      setData(news);
      setLoading(false);
    };
    getNewsData();
  }, []);

  /*
    TODO: Fix the image sizes
  const label = label => {
    switch (label) {
      case "NEW!": {
        return <img src="/static/new.png" />;
      }
      case "UPDATED!": {
        return <img src="/static/updated.png" />;
      }
      default: {
        return null;
      }
    }
  }; */

  return (
    <>
      <PageLayout>
        <h1 className="fortnite-title has-text-centered">NEWS</h1>

        {isLoading && <Loader />}

        <div className="columns">
          {!isLoading &&
            data.data.map((item, index) => {
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
                        <h1
                          className="subtitle has-text-left"
                          style={{ fontFamily: "Burbank Big Condensed" }}
                        >
                          {item.body}
                        </h1>
                      </div>
                    </article>
                  </div>
                )
              );
            })}
        </div>
      </PageLayout>
    </>
  );
};

export default News;
