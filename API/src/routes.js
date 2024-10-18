const authController = require("./controllers/authController");
const trainingProgramController = require("./controllers/trainingProgramController");

const router = require("express").Router();

router.use("/api/auth", authController);
router.use("/api/training-programs", trainingProgramController);

module.exports = router;
