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
              <p>
                {camper.price.toFixed(2)}€
                <svg>
                  <use href="/public/symbol-defs.svg#icon-Property-1Default" />
                </svg>
              </p>
            </div>
            <div>
              <p>
                <svg>
                  <use href="/public/symbol-defs.svg#icon-Property-1Default1" />
                </svg>
                {camper.rating}({camper.reviews.length}Reviews)
              </p>
              <p>{camper.location}</p>
            </div>

            <p>{camper.description}</p>

            <div>
              {camper.transmission && (
                <div>
                  <svg>
                    <use href="/public/symbol-defs.svg#icon-diagram" />
                  </svg>
                  <span>{firstLetter(camper.transmission)}</span>
                </div>
              )}
              {camper.engine && (
                <div>
                  <svg>
                    <use href="/public/symbol-defs.svg#icon-Group" />
                  </svg>
                  <span>{firstLetter(camper.engine)}</span>
                </div>
              )}
              {camper.AC && (
                <div>
                  <svg>
                    <use href="/public/symbol-defs.svg#icon-wind" />
                  </svg>
                  <span>AC</span>
                </div>
              )}
              {camper.bathroom && (
                <div>
                  <svg>
                    <use href="/public/symbol-defs.svg#icon-ph_shower" />
                  </svg>
                  <span>Bathroom</span>
                </div>
              )}
              {camper.kitchen && (
                <div>
                  <svg>
                    <use href="/public/symbol-defs.svg#icon-Group1" />
                  </svg>
                  <span>Kitchen</span>
                </div>
              )}
              {camper.TV && (
                <div>
                  <svg>
                    <use href="/public/symbol-defs.svg#icon-tv" />
                  </svg>
                  <span>TV</span>
                </div>
              )}
              {camper.radio && (
                <div>
                  <svg>
                    <use href="/public/symbol-defs.svg#icon-ui-radios" />
                  </svg>
                  <span>Radio</span>
                </div>
              )}
              {camper.refrigerator && (
                <div>
                  <svg>
                    <use href="/public/symbol-defs.svg#icon-solar_fridge-outline" />
                  </svg>
                  <span>Refrigerator</span>
                </div>
              )}
              {camper.microwave && (
                <div>
                  <svg>
                    <use href="/public/symbol-defs.svg#icon-lucide_microwave" />
                  </svg>
                  <span>Microwave</span>
                </div>
              )}
              {camper.gas && (
                <div>
                  <svg>
                    <use href="/public/symbol-defs.svg#icon-hugeicons_gas-stove" />
                  </svg>
                  <span>Gas</span>
                </div>
              )}
              {camper.water && (
                <div>
                  <svg>
                    <use href="/public/symbol-defs.svg#icon-ion_water-outline" />
                  </svg>
                  <span>Water</span>
                </div>
              )}
            </div>
            <button>Show more</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trucks;
