import { useSelector } from "react-redux";
import s from "./Features.module.css";
import { selectCampers } from "../../redux/trucks/selectors";
import { useParams } from "react-router-dom";
import Form from "../Form/Form";

const Features = () => {
  const { id } = useParams();
  const campers = useSelector(selectCampers);
  const camper = campers.find((camper) => camper.id === id);

  const firstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className={s.container}>
      <div className={s.featContainer}>
        <div className={s.featBadges}>
          {camper.transmission && (
            <div className={s.featBadgesItem}>
              <svg className={s.featBadgesIcon}>
                <use href="../../../public/symbol-defs.svg#icon-diagram" />
              </svg>
              <span className={s.featBadgesTitle}>
                {firstLetter(camper.transmission)}
              </span>
            </div>
          )}
          {camper.engine && (
            <div className={s.featBadgesItem}>
              <svg className={s.featBadgesIcon}>
                <use href="../../../public/symbol-defs.svg#icon-Group" />
              </svg>
              <span className={s.featBadgesTitle}>
                {firstLetter(camper.engine)}
              </span>
            </div>
          )}
          {camper.AC && (
            <div className={s.featBadgesItem}>
              <svg className={s.featBadgesIcon}>
                <use href="../../../public/symbol-defs.svg#icon-wind" />
              </svg>
              <span className={s.featBadgesTitle}>AC</span>
            </div>
          )}
          {camper.bathroom && (
            <div className={s.featBadgesItem}>
              <svg className={s.featBadgesIcon}>
                <use href="../../../public/symbol-defs.svg#icon-ph_shower" />
              </svg>
              <span className={s.featBadgesTitle}>Bathroom</span>
            </div>
          )}
          {camper.kitchen && (
            <div className={s.featBadgesItem}>
              <svg className={s.featBadgesIcon}>
                <use href="../../../public/symbol-defs.svg#icon-Group1" />
              </svg>
              <span className={s.featBadgesTitle}>Kitchen</span>
            </div>
          )}
          {camper.TV && (
            <div className={s.featBadgesItem}>
              <svg className={s.featBadgesIcon}>
                <use href="../../../public/symbol-defs.svg#icon-tv" />
              </svg>
              <span className={s.featBadgesTitle}>TV</span>
            </div>
          )}
          {camper.radio && (
            <div className={s.featBadgesItem}>
              <svg className={s.featBadgesIcon}>
                <use href="../../../public/symbol-defs.svg#icon-ui-radios" />
              </svg>
              <span className={s.featBadgesTitle}>Radio</span>
            </div>
          )}
          {camper.refrigerator && (
            <div className={s.featBadgesItem}>
              <svg className={s.featBadgesIcon}>
                <use href="/public/symbol-defs.svg#icon-solar_fridge-outline" />
              </svg>
              <span className={s.featBadgesTitle}>Refrigerator</span>
            </div>
          )}
          {camper.microwave && (
            <div className={s.featBadgesItem}>
              <svg className={s.featBadgesIcon1}>
                <use href="/public/symbol-defs.svg#icon-lucide_microwave" />
              </svg>
              <span className={s.featBadgesTitle}>Microwave</span>
            </div>
          )}
          {camper.gas && (
            <div className={s.featBadgesItem}>
              <svg className={s.featBadgesIcon1}>
                <use href="../../../public/symbol-defs.svg#icon-hugeicons_gas-stove" />
              </svg>
              <span className={s.featBadgesTitle}>Gas</span>
            </div>
          )}
          {camper.water && (
            <div className={s.featBadgesItem}>
              <svg className={s.featBadgesIcon1}>
                <use href="../../../public/symbol-defs.svg#icon-ion_water-outline" />
              </svg>
              <span className={s.featBadgesTitle}>Water</span>
            </div>
          )}
        </div>

        <div className={s.featVehicle}>
          <h2 className={s.vehicleTitle}>Vehicle details</h2>
          <svg className={s.icon}>
            <use href="../../../public/symbol-defs.svg#icon-divider" />
          </svg>
          <div className={s.vehicleInfo}>
            {camper.form && (
              <div className={s.vehicleList}>
                <p className={s.vehicleItem}>Form</p>
                <span className={s.vehicleItemInfo}>
                  {firstLetter(camper.form)}
                </span>
              </div>
            )}
            {camper.length && (
              <div className={s.vehicleList}>
                <p className={s.vehicleItem}>Length</p>
                <span className={s.vehicleItemInfo}>{camper.length}</span>
              </div>
            )}
            {camper.width && (
              <div className={s.vehicleList}>
                <p className={s.vehicleItem}>Width</p>
                <span className={s.vehicleItemInfo}>{camper.width}</span>
              </div>
            )}
            {camper.height && (
              <div className={s.vehicleList}>
                <p className={s.vehicleItem}>Height</p>
                <span className={s.vehicleItemInfo}>{camper.height}</span>
              </div>
            )}
            {camper.tank && (
              <div className={s.vehicleList}>
                <p className={s.vehicleItem}>Tank</p>
                <span className={s.vehicleItemInfo}>{camper.tank}</span>
              </div>
            )}
            {camper.consumption && (
              <div className={s.vehicleList}>
                <p className={s.vehicleItem}>Consumption</p>
                <span className={s.vehicleItemInfo}>{camper.consumption}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default Features;
