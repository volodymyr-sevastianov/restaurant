import Knex from "knex";
import knexKonfig from "../../knexfile";
import { buildRepository } from "./repository";

const knex = Knex(knexKonfig);

const repository = buildRepository({ knex });

export default repository;
