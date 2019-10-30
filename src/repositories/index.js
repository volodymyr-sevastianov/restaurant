import Knex from "knex";
import knexConfig from "../../knexfile";
import { buildRepository } from "./repository";

const knex = Knex(knexConfig);

const repository = buildRepository({ knex });

export default Object.freeze(repository);
