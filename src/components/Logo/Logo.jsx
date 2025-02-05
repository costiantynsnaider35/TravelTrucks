import s from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={s.logo}>
      <img src="/src/img/Logo.png" alt="Logo" />
    </div>
  );
};

export default Logo;
