import { useEffect, useState } from "react";
import Card from "../card/Card";
import { dataService } from "../../apiAndServices/dataService";

export default function Home() {
  const [latestTrainingsPrograms, setLatestTrainingsPrograms] = useState([]);

  useEffect(() => {
    (async () => {
      const latestTrainings = await dataService.getLatestTrainingPrograms();
      setLatestTrainingsPrograms(latestTrainings);
    })();
  }, []);
  return (
    <>
      <div className="img-container">
        <div className="title-container">
          <h1 className="home-title">Welcome to the best fitness forum</h1>
          <h3 className="home-title-sub">Get to your dream physic!</h3>
        </div>
      </div>

      <div className="about-trainer">
        <div className="info-wrapper">
          <h2 className="about-trainer-title">About the trainer</h2>
          <p className="about-trainer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            quam id ipsum ultricies viverra. Sed efficitur, felis at tristique
            placerat, nunc nunc faucibus nunc, a consectetur velit nunc eu
            massa. Donec vel ligula vitae ligula maximus faucibus. Nulla
            facilisi. Sed facilisis, ipsum at pellentesque cursus, urna velit
            tincidunt tellus, a egestas velit arcu at mauris. Sed vel diam at
            velit placerat finibus.
          </p>

          <p>Experience : 5 years</p>
          <p>Currently practicing : Sport gymnastics </p>
        </div>
        <img
          className="about-trainer-img"
          src="trainer.jpg"
          alt="Trainer"
          width={300}
        />
      </div>

      <h1 className="home-title">Our most popular workouts</h1>
      <div className="popular-workouts">
        {latestTrainingsPrograms.length != 0 ? (
          latestTrainingsPrograms.map((training) => {
            return <Card key={training._id} trainingProgram={training} />;
          })
        ) : (
          <h3>No Trainings Found</h3>
        )}
      </div>
    </>
  );
}
