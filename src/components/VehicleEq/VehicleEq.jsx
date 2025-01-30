import s from "./VehicleEq.module.css";

const VehicleEq = () => {
  return (
    <div className={s.eqContainer}>
      <h2 className={s.eqTitle}>Vehicle equipment</h2>
      <svg className={s.icon}>
        <use href="/public/symbol-defs.svg#icon-divider" />
      </svg>
      <ul className={s.eqBoard}>
        <li className={s.eqList}>
          <div className={s.eqItem}>
            <svg className={s.eqIcon}>
              <use href="/public/symbol-defs.svg#icon-wind" />
            </svg>
            <p className={s.iconTitle}>AC</p>
          </div>
        </li>
        <li className={s.eqList}>
          <div className={s.eqItem}>
            <svg className={s.eqIcon}>
              <use href="/public/symbol-defs.svg#icon-diagram" />
            </svg>
            <p className={s.iconTitle}>Automatic</p>
          </div>
        </li>
        <li className={s.eqList}>
          <div className={s.eqItem}>
            <svg className={s.eqIcon}>
              <use href="/public/symbol-defs.svg#icon-Group" />
            </svg>
            <p className={s.iconTitle}>Kitchen</p>
          </div>
        </li>
        <li className={s.eqList}>
          <div className={s.eqItem}>
            <svg className={s.eqIcon}>
              <use href="/public/symbol-defs.svg#icon-tv" />
            </svg>
            <p className={s.iconTitle}>TV</p>
          </div>
        </li>
        <li className={s.eqList}>
          <div className={s.eqItem}>
            <svg className={s.eqIcon}>
              <use href="/public/symbol-defs.svg#icon-ph_shower" />
            </svg>
            <p className={s.iconTitle}>Bathroom</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default VehicleEq;
