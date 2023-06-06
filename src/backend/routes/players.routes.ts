import { Router } from "express";

import UsersController from "../controllers/UsersController";

const router = Router();
const usersController: UsersController = new UsersController();

router.get("/", usersController.getPlayers.bind(usersController));
router.get("/:id", usersController.getPlayer.bind(usersController));
router.post("/", usersController.createPlayer.bind(usersController));
router.put("/:id", usersController.updatePlayer.bind(usersController));

export default router;
