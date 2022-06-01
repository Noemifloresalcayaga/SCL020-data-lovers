import data from "./data/lol/lol.js";
import {
  renderAllChampions,
  infoSort,
  filterAssassins,
  filterFighters,
  filterMarksmans,
  filterMages,
  filterSupports,
  filterTanks,
} from "./data.js";

//TRANSFORMACION DE LA DATA A UN ARRAY

const saveData = data;
const allData = Object.values(saveData.data);
const allDataToSort = [...allData]; //copia del array original hacia un array vacio.

//SCROLL DE EMPEZAR
document.getElementById("boton1").addEventListener("click", function () {
  window.scrollTo({
    top: 720,
    behavior: "smooth",
  });
});

//MUESTRA DE CAMPEONES EN LA PAGINA
const championsElement = document.getElementById("champions");
championsElement.innerHTML = renderAllChampions(allData);

//FILTRADO POR ROL EN LOS BOTONES DEL HTML

const btnassassin = document.getElementById("assassin");
btnassassin.addEventListener("click", function (event) {
  event.preventDefault();
  const filterDone = filterAssassins(allData);
  championsElement.innerHTML = renderAllChampions(filterDone);
});

const btnfighter = document.getElementById("fighter");
btnfighter.addEventListener("click", function (event) {
  event.preventDefault();
  const filterDone = filterFighters(allData);
  championsElement.innerHTML = renderAllChampions(filterDone);
});

const btnmage = document.getElementById("mage");
btnmage.addEventListener("click", function (event) {
  event.preventDefault();
  const filterDone = filterMages(allData);
  championsElement.innerHTML = renderAllChampions(filterDone);
});

const btnmarksman = document.getElementById("marksman");
btnmarksman.addEventListener("click", function (event) {
  event.preventDefault();
  const filterDone = filterMarksmans(allData);
  championsElement.innerHTML = renderAllChampions(filterDone);
});

const btnsupport = document.getElementById("support");
btnsupport.addEventListener("click", function (event) {
  event.preventDefault();
  const filterDone = filterSupports(allData);
  championsElement.innerHTML = renderAllChampions(filterDone);
});

const btntank = document.getElementById("tank");
btntank.addEventListener("click", function (event) {
  event.preventDefault();
  const filterDone = filterTanks(allData);
  championsElement.innerHTML = renderAllChampions(filterDone);
});

//BOTON PARA QUE SE VEAN TODOS
const btnall = document.getElementById("all");
btnall.addEventListener("click", function (event) {
  event.preventDefault();
  const filterDone = allData;
  championsElement.innerHTML = renderAllChampions(filterDone);
});

//FILTRADO POR ASCENDENTE
const btnasc = document.getElementById("ascendente");
btnasc.addEventListener("click", function (event) {
  event.preventDefault();
  const filterDone = infoSort(allDataToSort, "sortA");
  championsElement.innerHTML = renderAllChampions(filterDone);
});

//FILTRADO POR DESCENDENTE
const btndesc = document.getElementById("descendente");
btndesc.addEventListener("click", function (event) {
  event.preventDefault();
  const filterDone = infoSort(allDataToSort, "sortB");
  championsElement.innerHTML = renderAllChampions(filterDone);
});
