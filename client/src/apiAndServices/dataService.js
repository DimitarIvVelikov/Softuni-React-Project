import { api } from "./api";
const URI = "training-programs";
const dataEndpoints = {
  baseTrainingPrograms: URI + "/",
};

function getAllTrainingPrograms() {
  const data = api.get(dataEndpoints.baseTrainingPrograms);
  return data;
}

function createTrainingProgram(trainingProgram) {
  const createdProgram = api.post(
    dataEndpoints.baseTrainingPrograms,
    trainingProgram
  );
  return createdProgram;
}

export const dataService = {
  getAllTrainingPrograms,
  createTrainingProgram,
};
