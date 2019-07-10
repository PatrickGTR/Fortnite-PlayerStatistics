import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import PageLayout from "../components/PageLayout";

import getStoreData from "../components/store/getStoreData";
import { FeaturedItems, DailyItems } from "../components/store/storeItems";

const ItemShop = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStoreData();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <PageLayout>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="title">WIP! (Redesigning)</h1>
          <div className="columns">
            <div style={{ textAlign: "center" }} className="column">
              <div className="box">
                <h1 className="shop-title">Featured Items</h1>
                <FeaturedItems store={data} />
              </div>
            </div>
            <div style={{ textAlign: "center" }} className="column">
              <div className="box">
                <h1 className="shop-title">Daily Items</h1>
                <DailyItems store={data} />
              </div>
            </div>
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default ItemShop;
