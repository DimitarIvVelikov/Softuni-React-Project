import { api } from "./api";
const URI = "training-programs";
const dataEndpoints = {
  baseTrainingPrograms: URI + "/",
  trainingProgram: (programId) => URI + `/${programId}`,
  latestTrainings: URI + "/latest",
  signUpForTrainingProgram: (programId) => URI + `/signUp/${programId}`,
};

function getAllTrainingPrograms() {
  const data = api.get(dataEndpoints.baseTrainingPrograms);
  return data;
}

function getTrainingProgram(programId) {
  const data = api.get(dataEndpoints.trainingProgram(programId));
  return data;
}

function createTrainingProgram(trainingProgram) {
  const createdProgram = api.post(
    dataEndpoints.baseTrainingPrograms,
    trainingProgram
  );
  return createdProgram;
}

function editTrainingProgram(programId, trainingProgram) {
  const data = api.put(
    dataEndpoints.trainingProgram(programId),
    trainingProgram
  );
  return data;
}

function deleteTrainingProgram(programId) {
  const data = api.del(dataEndpoints.trainingProgram(programId));
  return data;
}

function getLatestTrainingPrograms() {
  const data = api.get(dataEndpoints.latestTrainings);
  return data;
}

function signUpForTrainingProgram(programId) {
  api.post(dataEndpoints.signUpForTrainingProgram(programId));
}

export const dataService = {
  getAllTrainingPrograms,
  createTrainingProgram,
  getTrainingProgram,
  editTrainingProgram,
  deleteTrainingProgram,
  getLatestTrainingPrograms,
  signUpForTrainingProgram,
};
