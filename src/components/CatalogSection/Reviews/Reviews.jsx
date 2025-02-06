import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./Reviews.module.css";
import { selectCampers } from "../../../redux/trucks/selectors";
import Form from "../Form/Form";

const Reviews = () => {
  const { id } = useParams();
  const campers = useSelector(selectCampers);
  const camper = campers.find((camper) => camper.id === id);

  const firstLetter = (str) => str.charAt(0).toUpperCase();

  if (!camper) {
    return <p>No camper found with ID: {id}</p>;
  }

  const reviews = camper.reviews || [];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg key={i} className={i < rating ? s.starFilled : s.starEmpty}>
          <use href="/img/symbol-defs.svg#icon-Property-1Default1" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className={s.container}>
      <div className={s.reviewsContainer}>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className={s.reviewsList}>
              <div className={s.reviewsItem}>
                <h3 className={s.reviewsName}>
                  {firstLetter(review.reviewer_name)}
                </h3>
                <div className={s.reviewsRating}>
                  <h3 className={s.reviewsAuthorName}>
                    {review.reviewer_name}
                  </h3>
                  <div className={s.starsRating}>
                    {renderStars(review.reviewer_rating)}
                  </div>
                </div>
              </div>

              <p className={s.reviewsComment}>{review.comment}</p>
            </div>
          ))
        ) : (
          <p className={s.noReviews}>No reviews available for this camper.</p>
        )}
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default Reviews;
