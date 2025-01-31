import Trucks from "../Trucks/Trucks";
import s from "./TrucksCatalog.module.css";

const TrucksCatalog = () => {
  return (
    <div className={s.catalogContainer}>
      <div className={s.camperContainer}>
        <Trucks />
      </div>
    </div>
  );
};

export default TrucksCatalog;
