import repository from "./repositories";
import createController from "./controllers";
import buildReservationRouter from "./routes";

const controller = createController({ repository });
console.log(controller);

const reservationsRouter = buildReservationRouter({
  controller: controller.reservationsController
});

export default reservationsRouter;
