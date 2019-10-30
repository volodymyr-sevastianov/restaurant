import express from "express";
import { createReservationsRouter } from "./reservations";
const router = express.Router();

function buildReservationsRouter({ controller }) {
  const reservationsRouter = createReservationsRouter({
    controller: controller.reservationsController
  });

  router.use("/reservations", reservationsRouter);
  return router;
}

export default buildReservationsRouter;
