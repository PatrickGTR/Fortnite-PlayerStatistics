import React from "react";

const FeaturedItems = ({ store }) => {
  return store.data.map(
    (element, index) =>
      element.store.isFeatured && (
        <div key={index} className="item-images">
          <img
            src={
              element.item.images.information +
              "?cache={lastupdate}&size=medium"
            }
          />
          <div className="item-box">
            <p className="item-title">{element.item.name}</p>
            <p className="item-price">
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
        <div key={index} className="item-images">
          <img
            src={
              element.item.images.information +
              "?cache={lastupdate}&size=medium"
            }
          />
          <div className="item-box">
            <p className="item-title">{element.item.name}</p>
            <p className="item-price">
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
