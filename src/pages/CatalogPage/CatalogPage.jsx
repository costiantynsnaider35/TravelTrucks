import TrucksCatalog from "../../components/Catalog/TrucksCatalog/TrucksCatalog";
import Header from "../../components/Header/Header";
import Location from "../../components/Location/Location";
import VehicleEq from "../../components/VehicleEq/VehicleEq";
import VehicleType from "../../components/VehicleType/VehicleType";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={s.catalogPage}>
      <Header />
      <div className={s.location}>
        <p>Location</p>
        <Location />
      </div>

      <div className={s.VehicleEq}>
        <p className={s.filtersTitle}>Filters</p>
        <VehicleEq />
      </div>
      <div className={s.VehicleType}>
        <VehicleType />
      </div>
      <div className={s.TrucksCatalog}>
        <TrucksCatalog />
      </div>
    </div>
  );
};

export default CatalogPage;
