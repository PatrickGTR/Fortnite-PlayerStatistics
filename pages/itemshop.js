import React from "react";
import PageLayout from "../components/PageLayout";

// --
// Store
// --
import { DailyItems, FeaturedItems } from "../components/store/storeItems";
import getStoreData from "../components/store/getStoreData";

const ItemShop = ({ storeData }) => {
  return (
    <PageLayout>
      <h1 className="title">WIP! (Redesigning)</h1>
      <div className="columns">
        <div style={{ textAlign: "center" }} className="column">
          <div className="box">
            <h1 className="shop-title">Featured Items</h1>
            <FeaturedItems store={storeData} />
          </div>
        </div>
        <div style={{ textAlign: "center" }} className="column">
          <div className="box">
            <h1 className="shop-title">Daily Items</h1>
            <DailyItems store={storeData} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

ItemShop.getInitialProps = async () => {
  const storeData = await getStoreData();
  return { storeData };
};

export default ItemShop;
