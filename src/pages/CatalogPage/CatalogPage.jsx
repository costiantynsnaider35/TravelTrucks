import Location from "../../components/Location/Location";
import Trucks from "../../components/Trucks/Trucks";
import VehicleEq from "../../components/VehicleEq/VehicleEq";
import VehicleType from "../../components/VehicleType/VehicleType";
import s from "./CatalogPage.css";

const CatalogPage = () => {
  return (
    <div className={s.catalogPage}>
      <div>
        <Location />
        <VehicleEq />
        <VehicleType />
      </div>
      <div>
        <Trucks />
      </div>
    </div>
  );
};

export default CatalogPage;
