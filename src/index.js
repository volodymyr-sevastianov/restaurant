import repository from "./repositories";
import createController from "./controllers";
import buildReservationRouter from "./routes";

const controller = createController({ repository });
const reservationsRouter = buildReservationRouter({
  controller: controller
});

export default reservationsRouter;
