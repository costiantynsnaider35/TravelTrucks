import Location from "../../components/Location/Location";
import Trucks from "../../components/Trucks/Trucks";
import VehicleEq from "../../components/VehicleEq/VehicleEq";
import VehicleType from "../../components/VehicleType/VehicleType";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={s.catalogPage}>
      <Location />
      <VehicleEq />
      <VehicleType />
      <Trucks />
    </div>
  );
};

export default CatalogPage;
