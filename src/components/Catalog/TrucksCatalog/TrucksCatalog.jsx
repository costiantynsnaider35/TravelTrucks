import { useState } from "react";
import Trucks from "../Trucks/Trucks";

const TrucksCatalog = () => {
  const [visibleItems, setVisibleItems] = useState(4);

  const loadMoreItems = () => {
    setVisibleItems((prevValue) => prevValue + 4);
  };
  return (
    <div>
      <Trucks visibleItems={visibleItems} loadMoreItems={loadMoreItems} />
    </div>
  );
};

export default TrucksCatalog;
