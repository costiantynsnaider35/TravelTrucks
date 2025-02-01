import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import s from "./Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCampers, selectLoading } from "../../redux/trucks/selectors";
import Loader from "../Loader/Loader";
import { Suspense, useEffect, useRef } from "react";
import { fetchAllCampers } from "../../redux/trucks/operations";
import clsx from "clsx";

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const campers = useSelector(selectCampers);
  const camper = campers.find((camper) => camper.id === id);
  const prevLocationRef = useRef(null);

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  useEffect(() => {
    const currentPath = location.pathname.split("/").slice(0, 3).join("/");
    const prevPath = prevLocationRef.current?.pathname
      .split("/")
      .slice(0, 3)
      .join("/");

    if (!prevLocationRef.current || currentPath !== prevPath) {
      window.scrollTo(0, 0);
    }
    prevLocationRef.current = location;
  }, [location]);

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);

  if (loading) {
    return (
      <div className={s.detailsLoader}>
        <Loader />
      </div>
    );
  }

  if (!camper) {
    return <div>Camper not found</div>;
  }

  return (
    <div className={s.detailsContainer}>
      <div className={s.detailsTitle}>
        <h3 className={s.detailsModel}>{camper.name}</h3>
        <div className={s.detailsLocation}>
          <svg className={s.detailsIcon}>
            <use href="/public/symbol-defs.svg#icon-Property-1Default1" />
          </svg>
          <p>
            {camper.rating}({camper.reviews.length}Reviews)
          </p>
          <svg className={s.detailsIconMap}>
            <use href="/public/symbol-defs.svg#icon-Map" />
          </svg>
          <p>{camper.location}</p>
        </div>
        <p className={s.detailsPrice}>{camper.price.toFixed(2)}€</p>
      </div>

      <div className={s.detailsGallery}>
        {camper.gallery.map((image, index) => (
          <img
            key={index}
            src={image.thumb}
            alt={`Truck ${camper.id} image ${index + 1}`}
            className={s.detailsImage}
          />
        ))}
      </div>
      <p className={s.detailsDesc}>{camper.description}</p>

      <div className={s.detailsLinkTitle}>
        <div className={s.detailsLinkItem}>
          <NavLink to="features" className={buildLinkClass}>
            Features
          </NavLink>
          <NavLink to="reviews" className={buildLinkClass}>
            Reviews
          </NavLink>
        </div>
      </div>
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Details;
