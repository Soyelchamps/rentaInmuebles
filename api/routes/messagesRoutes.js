import express from "express";
import * as messagesController from "../controllers/messagesController.js";
import { authValidator } from "../middlewares/authValidator.js";
import { messagesEditValidator } from "../middlewares/messagesEditValidator.js";

const router = express.Router();

router.route("/").post(authValidator, messagesController.create);
router
  .route("/:id")
  .put(messagesEditValidator, authValidator, messagesController.edit)
  .delete(messagesController.remove);

export default router;
