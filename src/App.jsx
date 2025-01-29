import { Route, Routes } from "react-router-dom";
import "./App.css";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
      <Routes>
        <Route path="/catalog/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
