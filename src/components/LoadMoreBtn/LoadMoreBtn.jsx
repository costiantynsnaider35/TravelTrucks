import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, isLoading }) => {
  return (
    <button onClick={onClick} className={s.loadMoreButton} disabled={isLoading}>
      {isLoading ? "Loading..." : "Load More"}
    </button>
  );
};

export default LoadMoreBtn;
