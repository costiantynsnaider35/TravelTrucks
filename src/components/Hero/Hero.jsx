import { Link } from "react-router-dom";
import s from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={s.hero}>
      <img src="/src/img/Picture.png" alt="Hero img" />
      <div className={s.heroSection}>
        <div className={s.heroTitle}>
          <h1 className={s.title}>Campers of your dreams</h1>
          <h2 className={s.text}>
            You can find everything you want in our catalog
          </h2>
        </div>
        <div>
          <Link className={s.viewNow} to="/catalog">
            <p>View Now</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
