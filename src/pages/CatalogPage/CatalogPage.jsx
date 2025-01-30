import Header from "../../components/Header/Header";
import Location from "../../components/Location/Location";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={s.catalogPage}>
      <Header />
      <div className={s.location}>
        <Location />
      </div>
      <h1 className={s.titleFilters}>Filters</h1>
    </div>
  );
};

export default CatalogPage;
