const { isAuth } = require("../middleware/authMiddleware");
const trainingProgramService = require("../services/trainingProgramService");

const router = require("express").Router();

// const bsonToJson = (data) => {
//   return JSON.parse(JSON.stringify(data));
// };

router.get("/latest", async (req, res) => {
  console.log("Latest training program");
  try {
    const latestTrainingPrograms =
      await trainingProgramService.getLatestTrainingPrograms();
    res.status(200).send(latestTrainingPrograms);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const trainingPrograms = await trainingProgramService.getTrainingPrograms();

    res.status(200).send(trainingPrograms);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const trainingProgram = await trainingProgramService.getTrainingProgram(
      req.params.id
    );
    res.status(200).send(trainingProgram);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.post("/", isAuth, async (req, res) => {
  const trainingProgramReq = req.body;
  trainingProgramReq.owner = req.user._id;
  try {
    const trainingProgram = await trainingProgramService.createTrainingProgram(
      trainingProgramReq
    );
    res.status(200).send(trainingProgram);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.put("/:id", isAuth, async (req, res) => {
  //TODO Implement proper middleware/helper func
  const id = req.params.id;
  const editedTrainingProgram = req.body;
  try {
    const trainingProgram = await trainingProgramService.getTrainingProgram(id);
    const owner = trainingProgram.owner;

    if (req?.user._id != owner) {
      res.status(401).send("Not Authorized");
      return;
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
    return;
  }

  try {
    const updatedTrainingProgram =
      await trainingProgramService.updateTrainingProgram(
        id,
        editedTrainingProgram
      );
    res.status(200).send(updatedTrainingProgram);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.delete("/:id", isAuth, async (req, res) => {
  const id = req.params.id;
  const userId = req.user._id;
  //TODO Implement proper middleware/helper func

  try {
    const trainingProgram = await trainingProgramService.getTrainingProgram(id);
    const owner = trainingProgram.owner;
    if (req?.user._id != owner) {
      res.status(401).send("Not Authorized");
      return;
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }

  try {
    const deletedTrainingProgram =
      await trainingProgramService.deleteTrainingProgram(id, userId);
    res.status(200).send(deletedTrainingProgram);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.post("/signUp/:id", isAuth, async (req, res) => {
  const programId = req.params.id;
  const user = req.user._id;

  try {
    await trainingProgramService.signUp(user, programId);
    res.status(200).send({ message: "Signed up!" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = trainingProgramController = router;
