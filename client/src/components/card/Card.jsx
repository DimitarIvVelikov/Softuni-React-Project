import { Link } from "react-router-dom";

export default function Card() {
  return (
    <>
      <div className="card-wrapper">
        <img className="card-img" src="workout.jpg" alt="Workout" width={200} />
        <div className="card-body">
          <h5 className="card-title">Workout 1</h5>
          <div className="workout-info">
            <span>Group : Abs</span>
            <span>Difficulty : Beginner</span>
            <span>Duration : 30 min</span>
          </div>
          <Link className="link">More Details</Link>
        </div>
      </div>
    </>
  );
}
