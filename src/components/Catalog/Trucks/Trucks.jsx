import { useEffect } from "react";

import s from "./Trucks.module.css";
import {
  selectCampers,
  selectError,
  selectLoading,
} from "../../../redux/trucks/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampers } from "../../../redux/trucks/operations";
import Loader from "../../Loader/Loader";

const Trucks = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const firstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={s.camperCatalog}>
      {campers.map((camper) => (
        <div className={s.camperBoard} key={camper.id}>
          <div className={s.camperImg}>
            <img
              src={camper.gallery[0].original}
              alt={`Truck ${camper.id} image 1`}
            />
          </div>
          <div className={s.camperInfo}>
            <div className={s.camperTitle}>
              <h3 className={s.camperModel}>{camper.name}</h3>
              <div className={s.camperPrice}>
                <p>{camper.price.toFixed(2)}€</p>
                <svg className={s.priceIcon}>
                  <use href="/public/symbol-defs.svg#icon-Property-1Default" />
                </svg>
              </div>
            </div>
            <div className={s.camperLocation}>
              <svg className={s.locationIcon}>
                <use href="/public/symbol-defs.svg#icon-Property-1Default1" />
              </svg>
              <p>
                {camper.rating}({camper.reviews.length}Reviews)
              </p>
              <svg className={s.locationIconMap}>
                <use href="/public/symbol-defs.svg#icon-Map" />
              </svg>
              <p>{camper.location}</p>
            </div>

            <p className={s.camperDesc}>{camper.description}</p>

            <div className={s.badgesContainer}>
              {camper.transmission && (
                <div className={s.badgesItem}>
                  <svg className={s.badgesIcon}>
                    <use href="/public/symbol-defs.svg#icon-diagram" />
                  </svg>
                  <span className={s.badgesTitle}>
                    {firstLetter(camper.transmission)}
                  </span>
                </div>
              )}
              {camper.engine && (
                <div className={s.badgesItem}>
                  <svg className={s.badgesIcon}>
                    <use href="/public/symbol-defs.svg#icon-Group" />
                  </svg>
                  <span className={s.badgesTitle}>
                    {firstLetter(camper.engine)}
                  </span>
                </div>
              )}
              {camper.AC && (
                <div className={s.badgesItem}>
                  <svg className={s.badgesIcon}>
                    <use href="/public/symbol-defs.svg#icon-wind" />
                  </svg>
                  <span className={s.badgesTitle}>AC</span>
                </div>
              )}
              {camper.bathroom && (
                <div className={s.badgesItem}>
                  <svg className={s.badgesIcon}>
                    <use href="/public/symbol-defs.svg#icon-ph_shower" />
                  </svg>
                  <span className={s.badgesTitle}>Bathroom</span>
                </div>
              )}
              {camper.kitchen && (
                <div className={s.badgesItem}>
                  <svg className={s.badgesIcon}>
                    <use href="/public/symbol-defs.svg#icon-Group1" />
                  </svg>
                  <span className={s.badgesTitle}>Kitchen</span>
                </div>
              )}
              {camper.TV && (
                <div className={s.badgesItem}>
                  <svg className={s.badgesIcon}>
                    <use href="/public/symbol-defs.svg#icon-tv" />
                  </svg>
                  <span className={s.badgesTitle}>TV</span>
                </div>
              )}
              {camper.radio && (
                <div className={s.badgesItem}>
                  <svg className={s.badgesIcon}>
                    <use href="/public/symbol-defs.svg#icon-ui-radios" />
                  </svg>
                  <span className={s.badgesTitle}>Radio</span>
                </div>
              )}
              {camper.refrigerator && (
                <div className={s.badgesItem}>
                  <svg className={s.badgesIcon}>
                    <use href="/public/symbol-defs.svg#icon-solar_fridge-outline" />
                  </svg>
                  <span className={s.badgesTitle}>Refrigerator</span>
                </div>
              )}
              {camper.microwave && (
                <div className={s.badgesItem}>
                  <svg className={s.badgesIcon1}>
                    <use href="/public/symbol-defs.svg#icon-lucide_microwave" />
                  </svg>
                  <span className={s.badgesTitle}>Microwave</span>
                </div>
              )}
              {camper.gas && (
                <div className={s.badgesItem}>
                  <svg className={s.badgesIcon1}>
                    <use href="/public/symbol-defs.svg#icon-hugeicons_gas-stove" />
                  </svg>
                  <span className={s.badgesTitle}>Gas</span>
                </div>
              )}
              {camper.water && (
                <div className={s.badgesItem}>
                  <svg className={s.badgesIcon1}>
                    <use href="/public/symbol-defs.svg#icon-ion_water-outline" />
                  </svg>
                  <span className={s.badgesTitle}>Water</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trucks;
