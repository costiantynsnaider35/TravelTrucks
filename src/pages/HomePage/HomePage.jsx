import Hero from "../../components/WelcomeSection/Hero/Hero";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <Hero />
    </div>
  );
};

export default HomePage;
