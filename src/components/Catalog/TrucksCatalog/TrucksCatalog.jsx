import Trucks from "../Trucks/Trucks";
import s from "./TrucksCatalog.module.css";

const TrucksCatalog = () => {
  return (
    <div className={s.catalogContainer}>
      <Trucks />
    </div>
  );
};

export default TrucksCatalog;
