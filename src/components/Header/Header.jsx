import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
