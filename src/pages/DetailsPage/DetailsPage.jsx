import Details from "../../components/Details/Details";
import Header from "../../components/Header/Header";
import s from "./DetailsPage.module.css";

const DetailsPage = () => {
  return (
    <div className={s.detailsPage}>
      <div>
        <Header />
      </div>
      <div className={s.details}>
        <Details />
      </div>
    </div>
  );
};

export default DetailsPage;
