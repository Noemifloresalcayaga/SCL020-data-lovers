import data from "./lol2.js";
import {
  renderAllChampions,
  filterAssassins,
  filterFighters,
  filterMages,
  filterMarksmens,
  filterSupports,
  filterTanks,
} from "./data.js";

const saveData = data;
const allData = Object.values(saveData.data);

document.getElementById("boton1").addEventListener("click", function () {
  window.scrollTo({
    top: 720,
    behavior: "smooth",
  });
});

const championsElement = document.getElementById("champions");
championsElement.innerHTML = renderAllChampions(allData);

//const filteredData = allData.filter((element) => element.age >= 29);

//championsElement.innerHTML = renderAllChampions(filteredData);
