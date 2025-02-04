const { Router } = require("express");
const usersController = require("../controllers/usersController");
const userRouter = Router();

userRouter.get("/", usersController.usersListGet);
userRouter.get("/create", usersController.usersCreateGet);
userRouter.post("/create", usersController.usersCreatePost);

userRouter.get("/:id/update", usersController.usersUpdateGet);
userRouter.post("/:id/update", usersController.usersUpdatePost);

module.exports = userRouter;
