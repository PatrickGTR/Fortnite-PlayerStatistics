import React, { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import Loader from "../components/Loader";

const ShowChallenges = ({ free, data, week }) => {
  const difficultyLevel = input => {
    switch (input) {
      case "hard": {
        return "#DAA520";
      }
      case "normal": {
        return "#24B95B";
      }
      default: {
        return "white";
      }
    }
  };

  return data.challenges[week - 1].entries
    .filter((_, index) => (free ? index <= 2 : index > 2))
    .map((element, index) => {
      return (
        <React.Fragment key={index}>
          <div
            className="box level"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            <h1
              key={index}
              style={{
                fontFamily: "Burbank Big Condensed",
                fontSize: "25px",
                color: "white",
                textShadow: "2px 2px black"
              }}
            >
              {element.challenge}
              <p>
                <span style={{ color: difficultyLevel(element.difficulty) }}>
                  {element.difficulty.toUpperCase()}
                </span>
                <span style={{ marginLeft: "10px" }}>0 / {element.total}</span>
              </p>
            </h1>
            <span className="has-text-centered">
              <img src="/static/star.png" style={{ width: "32px" }} />
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                  color: "white",
                  textShadow: "2px 2px black"
                }}
              >
                {element.stars}
              </h1>
            </span>
          </div>
        </React.Fragment>
      );
    });
};

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

    return data.challenges.map(({ week, value, entries }) => {
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
                  className="challenges-btn level-left"
                  onClick={() => backChallenge()}
                >
                  <a href="#">🢀 Back</a>
                </h1>
                <h1
                  className="challenges-btn level-right"
                  onClick={() => nextChallenge()}
                >
                  <a href="#">Next 🢂</a>
                </h1>
              </div>
              <div className="columns">
                <div className="column">
                  <h1 className="title">Free</h1>
                  <ShowChallenges free={true} data={data} week={clicked} />
                </div>
                <div className="column">
                  <h1 className="title">Battle Pass</h1>
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
