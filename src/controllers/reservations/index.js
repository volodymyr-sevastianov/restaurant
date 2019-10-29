import { createGetController } from "./getController";

function createReservationsController({ repository }) {
  const getController = createGetController({ repository });
  return getController;
}

export { createReservationsController };
