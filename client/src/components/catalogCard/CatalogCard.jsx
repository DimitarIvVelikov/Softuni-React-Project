import { Link } from "react-router-dom";

export default function CatalogCard({ trainingProgram }) {
  console.log(trainingProgram);

  return (
    <>
      <div className="catalog-card-wrapper">
        <Link className="link" to={"/"}>
          <img
            className="catalog-card-img"
            src={trainingProgram.imageUrl}
            alt="Workout"
            width={200}
          />
          <div className="catalog-card-body">
            <div className="catalog-workout-info">
              <span>Group : {trainingProgram.name}</span>
              <span>Difficulty : {trainingProgram.difficulty}</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
