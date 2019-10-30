import { createGetController } from "./getController";
import { createPostController } from "./postController";
import { createUpdateController } from "./updateController";
import { createDeleteController } from "./deleteController";
import { findFreeTables } from "../../helpers/findFreeTables";

function createReservationsController({ repository }) {
  const getController = createGetController({ repository });
  const postController = createPostController({ repository, findFreeTables });
  const updateController = createUpdateController({
    repository,
    findFreeTables
  });
  const deleteController = createDeleteController({ repository });
  return { getController, postController, updateController, deleteController };
}

export { createReservationsController };
