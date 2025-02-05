import s from "./VehicleType.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setVehicleFormFilter } from "../../redux/filters/slice";
import {
  fetchAllCampers,
  fetchCampersByForm,
} from "../../redux/filters/operations";
import { selectVehicleFormFilter } from "../../redux/filters/selectors";

const VehicleType = () => {
  const dispatch = useDispatch();
  const selectedForms = useSelector(selectVehicleFormFilter);
  const activeType = selectedForms[0] || "";

  const handleTypeClick = (type) => {
    if (activeType === type) {
      dispatch(setVehicleFormFilter([]));
      dispatch(fetchAllCampers());
    } else {
      dispatch(setVehicleFormFilter([type]));
      dispatch(fetchCampersByForm([type]));
    }
  };

  return (
    <div className={s.typeContainer}>
      <h2 className={s.typeTitle}>Vehicle type</h2>
      <svg className={s.icon}>
        <use href="/src/img/symbol-defs.svg#icon-divider" />
      </svg>
      <ul className={s.typeBoard}>
        <li
          className={`${s.typeList} ${
            activeType === "panelTruck" ? s.active : ""
          }`}
          onClick={() => handleTypeClick("panelTruck")}
        >
          <div className={s.typeItem}>
            <svg className={s.typeIcon}>
              <use href="/src/img/symbol-defs.svg#icon-bi_grid-1x2" />
            </svg>
            <p className={s.iconTitle}>Panel Truck</p>
          </div>
        </li>
        <li
          className={`${s.typeList} ${
            activeType === "fullyIntegrated" ? s.active : ""
          }`}
          onClick={() => handleTypeClick("fullyIntegrated")}
        >
          <div className={s.typeItem}>
            <svg className={s.typeIcon}>
              <use href="/src/img/symbol-defs.svg#icon-bi_grid" />
            </svg>
            <p className={s.iconTitle}>Fully Integrated</p>
          </div>
        </li>
        <li
          className={`${s.typeList} ${activeType === "alcove" ? s.active : ""}`}
          onClick={() => handleTypeClick("alcove")}
        >
          <div className={s.typeItem}>
            <svg className={s.typeIcon}>
              <use href="/src/img/symbol-defs.svg#icon-bi_grid-3x3-gap" />
            </svg>
            <p className={s.iconTitle}>Alcove</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default VehicleType;
