/*import { example } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);*/

import {} from "./data.js";
import data from "./data/lol/lol.js";

const saveData = data;
const allData = Object.values(saveData.data);
console.log(allData);

document.getElementById("boton1").addEventListener("click", function () {
  window.scrollTo({
    top: 2000,
    behavior: "smooth",
  });
});
