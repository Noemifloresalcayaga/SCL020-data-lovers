document
  .getElementById("boton1")
  .addEventListener("click", function siguientePagina() {
    window.scrollTo({
      top: 2000,
      behavior: "smooth",
    });
  });

import { example } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);
