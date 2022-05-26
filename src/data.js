import data from "./lol2.js";

const saveData = data;
const allData = Object.values(saveData.data);

export function renderChampion(champion) {
  return `
    <main class="ORDEN">
      <div class="card">
       <img src=${champion.splash}>
            <div class="name">
              <p>${champion.name}</p> 
            </div>
        </div>
    <main/>

  
    `;
}

export function renderAllChampions(champions) {
  let allChampionsHtml = "";
  champions.forEach((champion) => {
    allChampionsHtml += renderChampion(champion);
  });

  return allChampionsHtml;
}

//FILTRADO DE ROLES POR CAMPEON//

 export const filterAssassins = (assassin) => {
    let filtro = allData.filter((rol1) => {
      return rol1.tags.includes(assassin);
    });
  
    return filtro;
    
  
    
  }
  /*console.log(filterAssassins("Assassin"));*/
  
  export const filterFighters = (fighter) => {
    let filtro = allData.filter((rol2) => {
      return rol2.tags.includes(fighter);
    });
  
    return filtro;
  }
  
  export const filterMages = (mage) => {
    let filtro = allData.filter((rol3) => {
      return rol3.tags.includes(mage);
    });
  
    return filtro;
  }
  
  export const filterMarksmans = (marksman) => {
    let filtro = allData.filter((rol4) => {
      return rol4.tags.includes(marksman);
    });
  
    return filtro;
  }
  
  export const filterSupports = (support) => {
    let filtro = allData.filter((rol5) => {
      return rol5.tags.includes(support);
    });
  
    return filtro;
  }
  
  export const filterTanks = (tank) => {
    let filtro = allData.filter((rol6) => {
      return rol6.tags.includes(tank);
    });
  
    return filtro;
  }
  
  /*FILTRADO DE ASCENDENTE Y DESCENDENTE*/ 
 
  export const infoSort = (allData, infoSortSelect) => {
    if (infoSortSelect === "sortA") {
      let sortInfoA = allData.sort((a, b) => {
        if (a.info.difficulty < b.info.difficulty) return -1;
        return 1;
      });
      return sortInfoA;
    } else if (infoSortSelect === "sortB") {
      let sortInfoB = allData.sort((a, b) => {
        if (a.info.difficulty < b.info.difficulty) return 1;
        return -1;
      });
      return sortInfoB;
    }}
 
    console.log(infoSort(allData,"sortA"));
    /* console.log(infoSort(allData, "sortB"));*/




//console.log(infoSort);


/*console.log(filterAssassins("Assassin"));
console.log(filterFighters("Fighter"));
console.log(filterMages("Mage"));
console.log(filterMarksmens("Marksman"));
console.log(filterSupports("Support"));
console.log(filterTanks("Tank"));*/
