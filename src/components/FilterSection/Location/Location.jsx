import { useDispatch, useSelector } from "react-redux";
import s from "./Location.module.css";
import { useCallback, useEffect, useState } from "react";
import { selectError } from "../../../redux/filters/selectors";
import {
  fetchAllCampers,
  fetchCampersByLocation,
} from "../../../redux/filters/operations";
import { setLocationFilter } from "../../../redux/filters/slice";

const extractCity = (location) => {
  const parts = location.split(", ");
  return parts.length > 1 ? parts[1].trim() : location.trim();
};

const Location = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  const error = useSelector(selectError);

  const handleFetchCampers = useCallback(() => {
    const city = extractCity(location);
    if (city) {
      dispatch(fetchCampersByLocation(city));
    } else {
      dispatch(fetchAllCampers());
    }
  }, [location, dispatch]);
  useEffect(() => {
    handleFetchCampers();
  }, [location, handleFetchCampers]);

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    dispatch(setLocationFilter(value));
    handleFetchCampers();
  };

  return (
    <div className={s.location}>
      <div className={s.inputContainer}>
        <svg className={s.inputIcon}>
          <use href="/img/symbol-defs.svg#icon-Map" />
        </svg>
        <input
          type="text"
          placeholder="Location"
          className={s.input}
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      {error && error === "Location not found" ? (
        <div>Location not found!</div>
      ) : (
        error && <div>Error: {error}</div>
      )}
    </div>
  );
};

export default Location;
