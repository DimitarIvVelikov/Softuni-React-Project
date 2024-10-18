const TrainingProgram = require("../model/TrainingProgram");
const User = require("../model/User");

const createTrainingProgram = async (trainingProgram) => {
  const createdProgram = await TrainingProgram.create({ ...trainingProgram });
  await User.findByIdAndUpdate(
    createdProgram.owner,
    {
      $push: { createdList: createdProgram._id },
    },
    { runValidators: true }
  );
  return createdProgram;
};

const getTrainingPrograms = async () => {
  const trainingPrograms = await TrainingProgram.find();
  return trainingPrograms;
};

const getTrainingProgram = async (id) => {
  const trainingProgram = await TrainingProgram.findById(id);
  return trainingProgram;
};

const updateTrainingProgram = async (id, trainingProgram) => {
  const updatedTrainingProgram = await TrainingProgram.findByIdAndUpdate(
    id,
    trainingProgram,
    { runValidators: true }
  );
  return updatedTrainingProgram;
};

const deleteTrainingProgram = async (id, userId) => {
  const deletedTrainingProgram = await TrainingProgram.findByIdAndDelete(id);
  const users = await User.find({ signUpList: id });
  await User.findByIdAndUpdate(
    userId,
    { $pull: { createdList: id } },
    { runValidators: true }
  );

  await Promise.all(
    users.map((user) => {
      user.signUpList.pull(id);
      return user.save();
    })
  );

  return deletedTrainingProgram;
};

const signUp = async (userId, id) => {
  await User.findByIdAndUpdate(
    userId,
    { $push: { signUpList: id } },
    { runValidators: true }
  );

  return await TrainingProgram.findByIdAndUpdate(id, {
    $push: { signUpList: userId },
  });
};

const getLatestTrainingPrograms = async () => {
  return await TrainingProgram.find().sort({ created_at: -1 }).limit(3);
};

const trainingProgramService = {
  createTrainingProgram,
  getTrainingPrograms,
  getTrainingProgram,
  updateTrainingProgram,
  deleteTrainingProgram,
  signUp,
  getLatestTrainingPrograms,
};

module.exports = trainingProgramService;
