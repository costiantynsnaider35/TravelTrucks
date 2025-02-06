import Details from "../../components/CatalogSection/Details/Details";
import s from "./DetailsPage.module.css";

const DetailsPage = () => {
  return (
    <div className={s.detailsPage}>
      <div className={s.details}>
        <Details />
      </div>
    </div>
  );
};

export default DetailsPage;
