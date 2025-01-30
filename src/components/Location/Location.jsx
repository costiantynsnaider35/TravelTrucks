import s from "./Location.module.css";

const Location = () => {
  return (
    <div className={s.location}>
      <p className={s.inputTitle}>Location</p>
      <div className={s.inputContainer}>
        <svg className={s.inputIcon}>
          <use href="/public/symbol-defs.svg#icon-Map" />
        </svg>
        <input type="text" placeholder="Location" className={s.input} />
      </div>
    </div>
  );
};

export default Location;
