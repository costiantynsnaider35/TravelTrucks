import CatalogSection from "../../components/CatalogSection/CatalogSection";
import FilterSection from "../../components/FilterSection/FilterSection";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={s.catalogPage}>
      <FilterSection />
      <CatalogSection />
    </div>
  );
};

export default CatalogPage;
