import { useEffect } from "react";

import s from "./Trucks.module.css";
import {
  selectCampers,
  selectError,
  selectLoading,
} from "../../../redux/trucks/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampers } from "../../../redux/trucks/operations";

const Trucks = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={s.camperContainer}>
      {campers.map((camper) => (
        <div key={camper.id}>
          <div>
            {camper.gallery.map((image, index) => (
              <img
                key={index}
                src={image.thumb}
                alt={`Truck ${camper.id} image ${index + 1}`}
              />
            ))}
          </div>
          <h3>{camper.name}</h3>
          <p>{camper.price.toFixed(2)}€</p>
          <p>
            <svg>
              <use href="#icon-star" />
            </svg>
            {camper.rating}({camper.reviews.length}Reviews)
          </p>
          <p>{camper.description}</p>
          <p>{camper.location}</p>
          <div>
            {camper.transmission && (
              <svg>
                <use href="#icon-ac" />
              </svg>
            )}
            {camper.engine && (
              <svg>
                <use href="#icon-ac" />
              </svg>
            )}
            {camper.AC && (
              <svg>
                <use href="#icon-ac" />
              </svg>
            )}
            {camper.bathroom && (
              <svg>
                <use href="#icon-bathroom" />
              </svg>
            )}
            {camper.kitchen && (
              <svg>
                <use href="#icon-kitchen" />
              </svg>
            )}
            {camper.TV && (
              <svg>
                <use href="#icon-tv" />
              </svg>
            )}
            {camper.radio && (
              <svg>
                <use href="#icon-radio" />
              </svg>
            )}
            {camper.refrigerator && (
              <svg>
                <use href="#icon-refrigerator" />
              </svg>
            )}
            {camper.microwave && (
              <svg>
                <use href="#icon-microwave" />
              </svg>
            )}
            {camper.gas && (
              <svg className="icon">
                <use href="#icon-gas" />
              </svg>
            )}
            {camper.water && (
              <svg>
                <use href="#icon-water" />
              </svg>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trucks;
