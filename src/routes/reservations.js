import express from "express";
import { validation } from "../helpers/validation";
const router = express.Router();

function createReservationsRouter({ controller }) {
  router.get(
    "/:reservationId",
    validation,
    controller.getController.getOneById
  );

  router.post("/", controller.postController.postOne);

  router.put(
    "/:reservationId",
    validation,
    controller.updateController.updateOne
  );

  router.delete(
    "/:reservationId",
    validation,
    controller.deleteController.deleteOneById
  );

  return router;
}

export { createReservationsRouter };
