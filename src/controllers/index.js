import { createReservationsController } from "./reservations";

function buildController({ repository }) {
  const reservationsController = createReservationsController({ repository });
  return Object.freeze({ reservationsController });
}

export default buildController;
