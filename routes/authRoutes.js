const express = require("express");

const { registerController, loginController, currentUserController } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
// const {
//   registerController
//   //loginController,
//   //currentUserController,
// } = require("../controllers/authController");
//const authMiddelware = require("../middlewares/authMiddelware");

const router = express.Router();

//routes
//register
router.post("/register", registerController);

router.post("/login",loginController);//login



//GET CURRENT USER || GET
router.get("/current-user", authMiddleware, currentUserController);

module.exports = router;

