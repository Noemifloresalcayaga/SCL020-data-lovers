//DEFINICION DEL FILTRADO EN VISTA DE UN HTML
export function renderChampion(champion) {
  //html
  return `<div class="card">
            <img src=${champion.splash}>
            <div class="decoration">
              <p class="name">${champion.name}</p> 
              <p class="title">${champion.title}</p>
              <p class="tags">${champion.tags}</p>
              <p class="info">DIFFICULTY: ${champion.info.difficulty}</p>
            </div>
        </div>`;
}

//RECORRIDO DE TODA LA DATA
export function renderAllChampions(champions) {
  let allChampionsHtml = "";
  champions.forEach((champion) => {
    allChampionsHtml += renderChampion(champion);
  });

  return allChampionsHtml;
}

//FILTRADO DE ROLES POR CAMPEON//

export const filterAssassins = (allData) => {
  let filtro = allData.filter((rol1) => {
    return rol1.tags.includes("Assassin");
  });

  return filtro;
};

export const filterFighters = (allData) => {
  let filtro = allData.filter((rol2) => {
    return rol2.tags.includes("Fighter");
  });

  return filtro;
};

export const filterMages = (allData) => {
  let filtro = allData.filter((rol3) => {
    return rol3.tags.includes("Mage");
  });

  return filtro;
};

export const filterMarksmans = (allData) => {
  let filtro = allData.filter((rol4) => {
    return rol4.tags.includes("Marksman");
  });

  return filtro;
};

export const filterSupports = (allData) => {
  let filtro = allData.filter((rol5) => {
    return rol5.tags.includes("Support");
  });

  return filtro;
};

export const filterTanks = (allData) => {
  let filtro = allData.filter((rol6) => {
    return rol6.tags.includes("Tank");
  });

  return filtro;
};

//FILTRADO DE ASCENDENTE Y DESCENDENTE

export const infoSort = (allData, infoSortSelect) => {
  if (infoSortSelect === "sortA") {
    let sortInfoA = allData.sort((a, b) => {
      return a.info.difficulty < b.info.difficulty ? -1 : 1;
      // if (a.info.difficulty < b.info.difficulty) return -1;
      //return 1;
    });
    return sortInfoA;
  } else if (infoSortSelect === "sortB") {
    let sortInfoB = allData.sort((a, b) => {
      return a.info.difficulty < b.info.difficulty ? 1 : -1;
      // if (a.info.difficulty < b.info.difficulty) return 1;
      //return -1;
    });
    return sortInfoB;
  }
};

//console.log(infoSort(allData, "sortB"));

//console.log(infoSort);

/*console.log(filterAssassins("Assassin"));
console.log(filterFighters("Fighter"));
console.log(filterMages("Mage"));
console.log(filterMarksmens("Marksman"));
console.log(filterSupports("Support"));
console.log(filterTanks("Tank"));*/
