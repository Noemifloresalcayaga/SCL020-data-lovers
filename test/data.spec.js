import {
  renderAllChampions,
  renderChampion,
  infoSort,
  filterAssassins,
  filterFighters,
  filterMarksmans,
  filterMages,
  filterSupports,
  filterTanks,
} from "../src/data.js";

const dataTest = {
  data: {
    Aatrox: {
      name: "Aatrox",
      title: "the Darkin Blade",

      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
      info: {
        difficulty: 4,
      },
      tags: ["Fighter", "Tank", "Marksman"],
    },
    Ahri: {
      name: "Ahri",
      title: "the Nine-Tailed Fox",

      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
      info: {
        difficulty: 5,
      },

      tags: ["Mage", "Assassin", "Support"],
    },
  },
};

const saveData = dataTest.data;
const aallData = Object.values(saveData);

/*const data2 = data;*/

describe("Testing data.js file", () => {
  /*it("Should return a string with a champion's html", () => {
 expect(typeof renderChampion(mockedData["Hola"])).toBe('string');

  })*/

  test("renderChampion should be a function", () => {
    expect(typeof renderChampion).toBe("function");
  });

  test("renderAllChampions should be a function", () => {
    expect(typeof renderAllChampions).toBe("function");
  });
  //TESTEANDO FILTRO ASESINOS//
  test("it filterAssassins be a function", () => {
    expect(typeof filterAssassins).toBe("function");
  });
  test("filterAssassins should return assassins", () => {
    expect(filterAssassins(aallData)).toHaveLength(1);
  });
  //TESTEANDO FILTRO LUCHADOES//
  test("filterFighters should be a function", () => {
    expect(typeof filterFighters).toBe("function");
  });
  test("filterFighters should return fighters", () => {
    expect(filterFighters(aallData)).toHaveLength(1);
  });
  //TESTEANDO FILTRO MAGOS//
  test("filterMages should be a function", () => {
    expect(typeof filterMages).toBe("function");
  });
  test("filterMages should return mages", () => {
    expect(filterMages(aallData)).toHaveLength(1);
  });
  //TESTEANDO FILTRO TIRADORES//
  test("filterMarksmans should be a function", () => {
    expect(typeof filterMarksmans).toBe("function");
  });
  test("filterMarkmans should return marksmans", () => {
    expect(filterMarksmans(aallData)).toHaveLength(1);
  });
  //TESTEANDO FILTRO SOPORTES//
  test("filterSupports should be a function", () => {
    expect(typeof filterSupports).toBe("function");
  });
  test("filterSupports should return supports", () => {
    expect(filterSupports(aallData)).toHaveLength(1);
  });
  //TESTEANDO FILTRO TANKES//
  test("filterTanks should be a function", () => {
    expect(typeof filterTanks).toBe("function");
  });
  test("filterTanks should return tanks", () => {
    expect(filterTanks(aallData)).toHaveLength(1);
  });
  //TESTEANDO SORT//
  test("infoSort should be a function", () => {
    expect(typeof infoSort).toBe("function");
  });
  test("SortA should returns orden ascendente", () => {
    expect(infoSort(aallData, "sortA")).toEqual([
      {
        name: "Aatrox",
        title: "the Darkin Blade",

        splash:
          "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
        info: {
          difficulty: 4,
        },
        tags: ["Fighter", "Tank", "Marksman"],
      },
      {
        name: "Ahri",
        title: "the Nine-Tailed Fox",

        splash:
          "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
        info: {
          difficulty: 5,
        },

        tags: ["Mage", "Assassin", "Support"],
      },
    ]);
  });

  test("SortB should returns orden descendente", () => {
    expect(infoSort(aallData, "sortB")).toEqual([
      {
        name: "Ahri",
        title: "the Nine-Tailed Fox",
        splash:
          "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",

        info: {
          difficulty: 5,
        },

        tags: ["Mage", "Assassin", "Support"],
      },
      {
        name: "Aatrox",
        title: "the Darkin Blade",

        splash:
          "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
        info: {
          difficulty: 4,
        },
        tags: ["Fighter", "Tank", "Marksman"],
      },
    ]);
  });
});
