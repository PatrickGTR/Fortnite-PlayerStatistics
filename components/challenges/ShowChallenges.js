export default ({ free, data, week }) => {
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
