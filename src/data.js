import data from "./lol2.js";

const saveData = data;
const allData = Object.values(saveData.data);

export function renderChampion(champion) {
    return `
      <section class="champions-container">
      <div class="card">
      <img  class= "img"src=${champion.splash}>
            <div class="name">
            <p>${champion.name}</p>  
            </div>
        </div>
    `;
  }
  export function renderAllChampions(champions) {
    let allChampionsHtml = "";
    champions.forEach((champion) => {
      allChampionsHtml += renderChampion(champion);
    });
  
    return allChampionsHtml;
  }
  
