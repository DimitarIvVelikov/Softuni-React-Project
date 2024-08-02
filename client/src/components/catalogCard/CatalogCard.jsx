import { Link } from "react-router-dom";

export default function Card() {
  return (
    <>
      <div className="catalog-card-wrapper">
        <img
          className="catalog-card-img"
          src="workout.jpg"
          alt="Workout"
          width={200}
        />
        <div className="catalog-card-body">
          <h5 className="catalog-card-title">Workout 1</h5>
          <div className="workout-info">
            <span>Group : Abs</span>
            <span>Difficulty : Beginner</span>
            <span>Duration : 30 min</span>
          </div>
          <Link className="link">More Details</Link>
        </div>
        0
      </div>
    </>
  );
}
