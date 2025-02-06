import { selectVehicleEquipmentFilter } from "../../redux/filters/selectors";
import { setVehicleEquipmentFilter } from "../../redux/filters/slice";
import s from "./VehicleEq.module.css";
import { useDispatch, useSelector } from "react-redux";

const VehicleEq = () => {
  const dispatch = useDispatch();
  const selectedEquipment = useSelector(selectVehicleEquipmentFilter);
  const activeItems = selectedEquipment || [];

  const handleItemClick = (item) => {
    const newSelectedItems = activeItems.includes(item)
      ? activeItems.filter((i) => i !== item)
      : [...activeItems, item];
    dispatch(setVehicleEquipmentFilter(newSelectedItems));
  };

  const equipment = [
    { id: "AC", label: "AC", icon: "icon-wind" },
    { id: "transmission", label: "Automatic", icon: "icon-diagram" },
    { id: "kitchen", label: "Kitchen", icon: "icon-Group1" },
    { id: "TV", label: "TV", icon: "icon-tv" },
    { id: "bathroom", label: "Bathroom", icon: "icon-ph_shower" },
  ];

  return (
    <div className={s.eqContainer}>
      <h2 className={s.eqTitle}>Vehicle equipment</h2>
      <svg className={s.icon}>
        <use href="/img/symbol-defs.svg#icon-divider" />
      </svg>
      <ul className={s.eqBoard}>
        {equipment.map((item) => (
          <li
            key={item.id}
            className={`${s.eqList} ${
              activeItems.includes(item.id) ? s.selected : ""
            }`}
            onClick={() => handleItemClick(item.id)}
          >
            <div className={s.eqItem}>
              <svg className={s.eqIcon}>
                <use href={`/img/symbol-defs.svg#${item.icon}`} />
              </svg>
              <p className={s.iconTitle}>{item.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleEq;
