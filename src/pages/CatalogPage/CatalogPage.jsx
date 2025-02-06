import TrucksCatalog from "../../components/Catalog/TrucksCatalog/TrucksCatalog";
import Location from "../../components/Location/Location";
import VehicleEq from "../../components/VehicleEq/VehicleEq";
import VehicleType from "../../components/VehicleType/VehicleType";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={s.catalogPage}>
      <div>
        <div className={s.location}>
          <p>Location</p>
          <Location />
        </div>
        <div>
          <p className={s.filtersTitle}>Filters</p>
          <VehicleEq />
        </div>
        <div>
          <VehicleType />
        </div>
      </div>
      <div>
        <TrucksCatalog />
      </div>
    </div>
  );
};

export default CatalogPage;
