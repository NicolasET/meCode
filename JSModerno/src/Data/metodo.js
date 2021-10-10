import { heroes } from "./heroes";
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);