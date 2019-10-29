import { createReservationsController } from "./reservations";

function buildController({ repository }) {
  const reservationsController = createReservationsController({ repository });
  return { reservationsController };
}

export default buildController;
