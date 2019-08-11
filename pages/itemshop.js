import React from "react";
import PageLayout from "../components/PageLayout";

import getStoreData from "../components/store/getStoreData";
import { FeaturedItems, DailyItems } from "../components/store/storeItems";

const ItemShop = ({ data }) => {
  return (
    <PageLayout>
      <h1 className="title">WIP! (Redesigning)</h1>
      <div className="columns has-text-centered">
        <div className="column">
          <div className="box">
            <h1 className="shop-title">Featured Items</h1>
            <FeaturedItems store={data} />
          </div>
        </div>

        <div className="column">
          <div className="box">
            <h1 className="shop-title">Daily Items</h1>
            <DailyItems store={data} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

ItemShop.getInitialProps = async () => {
  const data = await getStoreData();
  return {
    data
  };
};

export default ItemShop;
