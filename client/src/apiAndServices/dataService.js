import { api } from "./api";
const URI = "/training-programs";
const dataEndpoints = {
  getAllTrainingPrograms: "/",
};

async function getAllTrainingPrograms() {
  const data = await api.get(URI + dataEndpoints.getAllTrainingPrograms);
  return data;
}

export const dataService = {
  getAllTrainingPrograms,
};
