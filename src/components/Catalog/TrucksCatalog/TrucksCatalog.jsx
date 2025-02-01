import { useState } from "react";
import Trucks from "../Trucks/Trucks";
import s from "./TrucksCatalog.module.css";

const TrucksCatalog = () => {
  const [visibleItems, setVisibleItems] = useState(4);

  const loadMoreItems = () => {
    setVisibleItems((prevValue) => prevValue + 4);
  };
  return (
    <div className={s.catalogContainer}>
      <div className={s.camperContainer}>
        <Trucks visibleItems={visibleItems} loadMoreItems={loadMoreItems} />
      </div>
    </div>
  );
};

export default TrucksCatalog;
