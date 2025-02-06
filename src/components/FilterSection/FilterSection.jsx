import Location from "./Location/Location";
import VehicleEq from "./VehicleEq/VehicleEq";
import VehicleType from "./VehicleType/VehicleType";
import s from "./FilterSection.module.css";

const FilterSection = () => {
  return (
    <div className={s.filter}>
      <div className={s.filterLoc}>
        <p className={s.filterLocTitle}>Location</p>
        <Location />
      </div>
      <div className={s.filtersVehicle}>
        <p className={s.filtersVehicleTitle}>Filters</p>
        <VehicleEq />
        <VehicleType />
      </div>
    </div>
  );
};

export default FilterSection;
