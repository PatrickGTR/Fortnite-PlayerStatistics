import React from "react";

const FeaturedItems = ({ store }) => {
  return store.data.map(
    element =>
      element.store.isFeatured && (
        <>
          <img
            style={{ marginRight: "5px" }}
            key={element.item.name}
            src={element.item.images.information + "?cache={lastupdate}"}
            className="shop-images"
          />
        </>
      )
  );
};

const DailyItems = ({ store }) => {
  return store.data.map(
    element =>
      !element.store.isFeatured && (
        <img
          key={element.item.name}
          src={element.item.images.information + "?cache={lastupdate}"}
          className="shop-images"
        />
      )
  );
};

export { FeaturedItems, DailyItems };
