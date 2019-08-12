import React, { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";
import PageLayout from "../components/PageLayout";
import Loader from "../components/Loader";

import ShowChallenges from "../components/challenges/ShowChallenges";

const Challenges = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [clicked, setClicked] = useState(null);

  useEffect(() => {
    const getChallenges = async () => {
      const resp = await fetch(
        "https://fortnite-api.theapinetwork.com/challenges/get?season=current",
        {
          method: "GET",
          headers: {
            Authorization: process.env.FORTNITE_API_KEY
          }
        }
      );
      setData(await resp.json());
      setLoading(false);
    };

    getChallenges();
  }, []);

  const handleClick = week => {
    if (clicked != week) {
      setClicked(week);
    }
  };

  const backChallenge = () => {
    setClicked(clicked - 1);
  };

  const nextChallenge = () => {
    if (clicked + 1 > 10) {
      return;
    }

    setClicked(clicked + 1);
  };

  const ShowWeeks = ({ week1to5 }) => {
    const _season = data.season;

    return data.challenges.map(({ week, value }) => {
      return (
        <React.Fragment key={week}>
          {(week1to5 ? week <= 5 : week > 5) && (
            <div
              className="column"
              onClick={() => handleClick(week)}
              onMouseOver={event => (event.target.style.cursor = "pointer")}
            >
              <div
                style={{
                  backgroundColor: "white",
                  boxShadow: "10px 10px rgba(0, 0, 0, 0.5)"
                }}
                className="box has-text-centered"
              >
                <img src="/static/book.png" />
                <h1
                  style={{
                    fontFamily: "Burbank Big Condensed",
                    fontSize: "40px"
                  }}
                  className="title"
                >
                  {value}
                </h1>
                <h1
                  style={{
                    fontFamily: "Burbank Big Condensed",
                    fontSize: "25px"
                  }}
                  className="subtitle"
                >
                  Season {_season}
                </h1>
              </div>
            </div>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <PageLayout>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!clicked ? (
            <>
              <h1 className="fortnite-title has-text-centered">
                Season 10 Challenges
              </h1>
              <div className="columns">
                <ShowWeeks week1to5={true} />
              </div>
              <div className="columns">
                <ShowWeeks week1to5={false} />
              </div>
            </>
          ) : (
            <>
              <h1 className="fortnite-title has-text-centered">
                Week {data.challenges[clicked - 1].week} Challenges
              </h1>

              <div className="level">
                <h1
                  className="level-item challenges-btn level-left"
                  onClick={() => backChallenge()}
                >
                  <a href="#">🢀 Back</a>
                </h1>

                <h1
                  className="level-item challenges-btn level-right"
                  onClick={() => nextChallenge()}
                >
                  <a href="#">Next 🢂</a>
                </h1>
              </div>
              <div className="columns">
                <div className="column">
                  <h1 className="title" style={{ color: "white" }}>
                    Free
                  </h1>
                  <ShowChallenges free={true} data={data} week={clicked} />
                </div>
                <div className="column">
                  <h1 className="title" style={{ color: "white" }}>
                    Battle Pass
                  </h1>
                  <ShowChallenges free={false} data={data} week={clicked} />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </PageLayout>
  );
};

export default Challenges;
