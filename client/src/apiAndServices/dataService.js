import { api } from "./api";
const URI = "training-programs";
const dataEndpoints = {
  getAllTrainingPrograms: URI + "/",
};

async function getAllTrainingPrograms() {
  const data = await api.get(dataEndpoints.getAllTrainingPrograms);
  return data;
}

export const dataService = {
  getAllTrainingPrograms,
};
