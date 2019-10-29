import express from "express";
const router = express.Router();

function createReservationsRouter({ controller }) {
  router.get("/:reservationId", controller.getOneById);

  router.post("/", (req, res) => {
    res.status(200).json({ message: "I am alive!" });
  });

  router.put("/:reservationId", (req, res) => {
    res.status(200).json({ message: "I am alive!" });
  });

  router.delete("/:reservationId", (req, res) => {
    res.status(200).json({ message: "I am alive!" });
  });

  return router;
}

export { createReservationsRouter };
