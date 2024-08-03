import { Link } from "react-router-dom";

export default function CatalogCard() {
  return (
    <>
      <div className="catalog-card-wrapper">
        <Link className="link" to={"/"}>
          <img
            className="catalog-card-img"
            src="workout.jpg"
            alt="Workout"
            width={200}
          />
          <div className="catalog-card-body">
            <div className="catalog-workout-info">
              <span>Group : Abs</span>
              <span>Difficulty : Beginner</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
