import { useEffect, useState } from "react";
import CatalogCard from "../catalogCard/CatalogCard";
import { dataService } from "../../apiAndServices/dataService";
export default function Catalog() {
  const [trainingPrograms, setTrainingProgram] = useState([]);
  useEffect(() => {
    (async () => {
      const trainingProgramsArray = await dataService.getAllTrainingPrograms();

      setTrainingProgram(trainingProgramsArray);
    })();
  }, []);
  return (
    <>
      <h1 className="home-title catalog-title">Catalog</h1>

      <div className="catalog-wrapper">
        {!trainingPrograms || trainingPrograms.length === 0 ?  (
          <h2 className="no-training">No Training Programs Found</h2>
        ): (
          trainingPrograms.map((trainingProgram) => {
            return (
              <CatalogCard
                key={trainingProgram._id}
                trainingProgram={trainingProgram}
              />
            );
          })
        ) }
      </div>
    </>
  );
}
