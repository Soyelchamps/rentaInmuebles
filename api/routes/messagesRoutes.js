import express from "express";
import * as messagesController from "../controllers/messagesController.js";
import { authValidator } from "../middlewares/authValidator.js";
import { messagesEditValidator } from "../middlewares/messagesEditValidator.js";

const router = express.Router();

router.route("/").post(messagesController.create).get(messagesController.read);
router
  .route("/:id")
  .get(messagesController.readById)
  .put(messagesController.edit)

  // .put(messagesEditValidator, authValidator, messagesController.edit)
  .delete(messagesController.remove);

export default router;
