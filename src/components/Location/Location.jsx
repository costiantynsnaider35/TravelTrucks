import { useDispatch, useSelector } from "react-redux";
import s from "./Location.module.css";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { selectError, selectLoading } from "../../redux/filters/selectors";
import {
  fetchAllCampers,
  fetchCampersByLocation,
} from "../../redux/filters/operations";
import { setLocationFilter } from "../../redux/filters/slice";

const Location = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (location.trim()) {
      dispatch(fetchCampersByLocation(location.trim()));
    } else {
      dispatch(fetchAllCampers());
    }
  }, [location, dispatch]);

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    if (value.trim()) {
      dispatch(setLocationFilter(value));
      dispatch(fetchCampersByLocation(value.trim()));
    } else {
      dispatch(setLocationFilter(""));
      dispatch(fetchAllCampers());
    }
  };

  return (
    <div className={s.location}>
      <p className={s.inputTitle}>Location</p>
      <div className={s.inputContainer}>
        <svg className={s.inputIcon}>
          <use href="/symbol-defs.svg#icon-Map" />
        </svg>
        <input
          type="text"
          placeholder="Location"
          className={s.input}
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      {loading && <Loader />}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default Location;
