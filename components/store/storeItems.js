import React from "react";

const FeaturedItems = ({ store }) => {
  return store.data.map(
    (element, index) =>
      element.store.isFeatured && (
        <div key={index} className="shop-images">
          <img
            src={
              element.item.images.information +
              "?cache={lastupdate}&size=medium"
            }
          />
          <div className="shop-text">
            <p>{element.item.name}</p>
            <p>
              <img
                src="/static/vbucks.png"
                alt="vbucks"
                style={{
                  verticalAlign: "middle",
                  padding: "0px 5px 5px 0px"
                }}
              />
              {element.store.cost}
            </p>
          </div>
        </div>
      )
  );
};

const DailyItems = ({ store }) => {
  return store.data.map(
    (element, index) =>
      !element.store.isFeatured && (
        <div key={index} className="shop-images">
          <img
            src={
              element.item.images.information +
              "?cache={lastupdate}&size=medium"
            }
          />
          <div className="shop-text">
            <p>{element.item.name}</p>
            <p>
              <img
                src="/static/vbucks.png"
                alt="vbucks"
                style={{
                  verticalAlign: "middle",
                  padding: "0px 5px 5px 0px"
                }}
              />
              {element.store.cost}
            </p>
          </div>
        </div>
      )
  );
};

export { FeaturedItems, DailyItems };
