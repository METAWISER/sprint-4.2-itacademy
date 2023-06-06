import { Router } from "express";

import PlayersController from "../controllers/PlayersController";

const router = Router();
const playersController: PlayersController = new PlayersController();

router.get("/", playersController.getPlayers.bind(playersController));
router.get("/:id", playersController.getPlayer.bind(playersController));
router.post("/", playersController.createPlayer.bind(playersController));
router.put("/:id", playersController.updatePlayer.bind(playersController));

export default router;
