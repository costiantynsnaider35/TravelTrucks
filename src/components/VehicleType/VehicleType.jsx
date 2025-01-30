import s from "./VehicleType.module.css";

const VehicleType = () => {
  return (
    <div className={s.typeContainer}>
      <h2 className={s.typeTitle}>Vehicle type</h2>
      <svg className={s.icon}>
        <use href="/public/symbol-defs.svg#icon-divider" />
      </svg>
      <ul className={s.typeBoard}>
        <li className={s.typeList}>
          <div className={s.typeItem}>
            <svg className={s.typeIcon}>
              <use href="/public/symbol-defs.svg#icon-bi_grid-1x2" />
            </svg>
            <p className={s.iconTitle}>van</p>
          </div>
        </li>
        <li className={s.typeList}>
          <div className={s.typeItem}>
            <svg className={s.typeIcon}>
              <use href="/public/symbol-defs.svg#icon-bi_grid" />
            </svg>
            <p className={s.iconTitle}>Fully Integrated</p>
          </div>
        </li>
        <li className={s.typeList}>
          <div className={s.typeItem}>
            <svg className={s.typeIcon}>
              <use href="/public/symbol-defs.svg#icon-bi_grid-3x3-gap" />
            </svg>
            <p className={s.iconTitle}>Alcove</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default VehicleType;
