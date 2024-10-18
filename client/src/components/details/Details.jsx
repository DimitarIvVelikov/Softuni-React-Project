import { Link, useNavigate, useParams } from "react-router-dom";
import { dataService } from "../../apiAndServices/dataService";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

export default function Details() {
  const userContext = useAuthContext();
  const [signedUp, setSignedUp] = useState(false);
  const { id: trainingProgramId } = useParams();
  const navigate = useNavigate();
  const [trainingProgram, setTrainingProgram] = useState({
    created_at: "",
    description: "",
    difficulty: "",
    duration: 0,
    imageUrl: "",
    name: "",
    owner: "",
    signUpList: [],
    updatedAt: "",
    __v: 0,
    _id: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const responseTrainingProgram = await dataService.getTrainingProgram(
          trainingProgramId
        );

        setTrainingProgram(responseTrainingProgram);
        setSignedUp(trainingProgram.signUpList.includes(userContext._id));
      } catch (error) {
        console.log("Error Details");
      }
    })();
  }, []);

  const deleteHandler = async () => {
    if (confirm("Are you sure you want to delete this program?")) {
      try {
        await dataService.deleteTrainingProgram(trainingProgramId);
        navigate(`/catalog`);
        console.log("Training Program deleted");
      } catch (error) {
        console.log("Error Delete");
      }
    }
  };

  const signUpHandler = async () => {
    try {
      await dataService.signUpForTrainingProgram(trainingProgramId);
      setSignedUp(!signedUp);
    } catch (error) {
      console.log("Error Sign Up");
    }
  };

  return (
    <>
      <div className="details-card-wrapper">
        <h1>{trainingProgram.name}</h1>

        <img
          className="details-card-img"
          src={trainingProgram.imageUrl}
          alt="Workout"
          width={200}
        />
        <div className="details-card-body">
          <div className="details-workout-info">
            <span>Difficulty : {trainingProgram.difficulty}</span>
            <span>Duration : {trainingProgram.duration}</span>
          </div>
          <div className="buttons-wrapper">
            {userContext.isAuthenticated ? (
              userContext._id === trainingProgram.owner ? (
                <>
                  <Link
                    to={`/program/${trainingProgram._id}/edit`}
                    className="link-details"
                  >
                    Edit
                  </Link>
                  <button className="link-details" onClick={deleteHandler}>
                    Delete
                  </button>
                </>
              ) : signedUp ? (
                <>
                  <h3>You are already signed up for this program</h3>
                </>
              ) : (
                <>
                  <button className="link-details" onClick={signUpHandler}>
                    Sign Up
                  </button>
                </>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <Link
to={`/program/${trainingProgram._id}/edit`}
className="link-details"
>
Edit
</Link>
<button className="link-details" onClick={deleteHandler}>
Delete
</button>
<button className="link-details" onClick={signUpHandler}>
Sign Up
</button> */
}
