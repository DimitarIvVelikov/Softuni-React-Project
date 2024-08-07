import { Link } from "react-router-dom";

export default function Card({ trainingProgram }) {
  return (
    <>
      <div className="card-wrapper">
        <img
          className="card-img"
          src={trainingProgram.imageUrl}
          alt="Workout"
          width={200}
        />
        <div className="card-body">
          <h5 className="card-title">{trainingProgram.name}</h5>
          <div className="workout-info">
            <span>Difficulty : {trainingProgram.difficulty}</span>
            <span>Duration : {trainingProgram.duration}</span>
          </div>
          <Link className="link" to={`/program/${trainingProgram._id}`}>
            More Details
          </Link>
        </div>
      </div>
    </>
  );
}
