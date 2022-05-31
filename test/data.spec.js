
import {renderAllChampions, renderChampion, infoSort,
  filterAssassins,
  filterFighters,
  filterMarksmans,
  filterMages,
  filterSupports,
  filterTanks,} from '../src/data.js';
  

  const dataTest = 
  {
    type: "champion",
  format: "standAloneComplex",
  version: "6.24.1",
  data: {
    Aatrox: {
      version: "6.24.1",
      id: "Aatrox",
      key: "266",
      name: "Aatrox",
      title: "the Darkin Blade",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
      blurb:
        "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
      info: {
        attack: 8,
        defense: 4,
        magic: 3,
        difficulty: 4
      },
      image: {
        full: "Aatrox.png",
        sprite: "champion0.png",
        group: "champion",
        x: 0,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Fighter", "Tank","Marksman"],
      partype: "BloodWell",
      stats: {
        hp: 537.8,
        hpperlevel: 85,
        mp: 105.6,
        mpperlevel: 45,
        movespeed: 345,
        armor: 24.384,
        armorperlevel: 3.8,
        spellblock: 32.1,
        spellblockperlevel: 1.25,
        attackrange: 150,
        hpregen: 6.59,
        hpregenperlevel: 0.5,
        mpregen: 0,
        mpregenperlevel: 0,
        crit: 0,
        critperlevel: 0,
        attackdamage: 60.376,
        attackdamageperlevel: 3.2,
        attackspeedoffset: -0.04,
        attackspeedperlevel: 3
      }
    },
    Ahri: {
      version: "6.24.1",
      id: "Ahri",
      key: "103",
      name: "Ahri",
      title: "the Nine-Tailed Fox",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
      blurb:
        "Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...",
      info: {
        attack: 3,
        defense: 4,
        magic: 8,
        difficulty: 5
      },
      image: {
        full: "Ahri.png",
        sprite: "champion0.png",
        group: "champion",
        x: 48,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Mage", "Assassin", "Support"],
      partype: "MP",
      stats: {
        hp: 514.4,
        hpperlevel: 80,
        mp: 334,
        mpperlevel: 50,
        movespeed: 330,
        armor: 20.88,
        armorperlevel: 3.5,
        spellblock: 30,
        spellblockperlevel: 0,
        attackrange: 550,
        hpregen: 6.505,
        hpregenperlevel: 0.6,
        mpregen: 6,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 53.04,
        attackdamageperlevel: 3,
        attackspeedoffset: -0.065,
        attackspeedperlevel: 2
      }
    }
  }
}

const saveData = dataTest.data;
const aallData = Object.values(saveData);


/*const data2 = data;*/



describe("Data", () => {
  /*it("Should return a string with a champion's html", () => {
 expect(typeof renderChampion(mockedData["Hola"])).toBe('string');

  })*/

  test('renderChampion should be a function', ()=> {
    expect(typeof renderChampion).toBe('function');
  })

  test('renderAllChampions should be a function', ()=> {
    expect(typeof renderAllChampions).toBe('function');
  })
  //TESTEANDO FILTRO ASESINOS//
  test('it filterAssassins be a function', ()=> {
    expect(typeof filterAssassins).toBe('function');
  
  })
  test ('filterAssassins should return assassins', ()=> {
    expect(filterAssassins(aallData)).toHaveLength(1);
  })
  //TESTEANDO FILTRO LUCHADOES//
  test('filterFighters should be a function', ()=> {
    expect(typeof filterFighters).toBe('function');
  })
  test ('filterFighters should return fighters', ()=> {
    expect(filterFighters(aallData)).toHaveLength(1);
  })
//TESTEANDO FILTRO MAGOS//
  test('filterMages should be a function', ()=> {
    expect(typeof filterMages).toBe('function');
  })
  test ('filterMages should return mages', ()=> {
    expect(filterMages(aallData)).toHaveLength(1);
  })
  //TESTEANDO FILTRO TIRADORES//
  test('filterMarksmans should be a function', ()=> {
    expect(typeof filterMarksmans).toBe('function');
  })
  test ('filterMarkmans should return marksmans', ()=> {
    expect(filterMarksmans(aallData)).toHaveLength(1);
  })
  //TESTEANDO FILTRO SOPORTES//
  test('filterSupports should be a function', ()=> {
    expect(typeof filterSupports).toBe('function');
  })
  test ('filterSupports should return supports', ()=> {
    expect(filterSupports(aallData)).toHaveLength(1);
  })
  //TESTEANDO FILTRO TANKES//
  test('filterTanks should be a function', ()=> {
    expect(typeof filterTanks).toBe('function');
  })
  test ('filterTanks should return tanks', ()=> {
    expect(filterTanks(aallData)).toHaveLength(1);
  })
  //TESTEANDO SORT//
  test('infoSort should be a function', ()=> {
    expect(typeof infoSort).toBe('function');
  });
  test('SortA should returns orden ascendente', ()=> {
    expect(infoSort(aallData,"sortA")).toEqual([{
        version: "6.24.1",
        id: "Aatrox",
        key: "266",
        name: "Aatrox",
        title: "the Darkin Blade",
        img:
          "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
        splash:
          "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
        blurb:
          "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
        info: {
          attack: 8,
          defense: 4,
          magic: 3,
          difficulty: 4
        },
        image: {
          full: "Aatrox.png",
          sprite: "champion0.png",
          group: "champion",
          x: 0,
          y: 0,
          w: 48,
          h: 48
        },
        tags: ["Fighter", "Tank","Marksman"],
        partype: "BloodWell",
        stats: {
          hp: 537.8,
          hpperlevel: 85,
          mp: 105.6,
          mpperlevel: 45,
          movespeed: 345,
          armor: 24.384,
          armorperlevel: 3.8,
          spellblock: 32.1,
          spellblockperlevel: 1.25,
          attackrange: 150,
          hpregen: 6.59,
          hpregenperlevel: 0.5,
          mpregen: 0,
          mpregenperlevel: 0,
          crit: 0,
          critperlevel: 0,
          attackdamage: 60.376,
          attackdamageperlevel: 3.2,
          attackspeedoffset: -0.04,
          attackspeedperlevel: 3
        }
      },
      {
        version: "6.24.1",
        id: "Ahri",
        key: "103",
        name: "Ahri",
        title: "the Nine-Tailed Fox",
        img:
          "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png",
        splash:
          "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
        blurb:
          "Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...",
        info: {
          attack: 3,
          defense: 4,
          magic: 8,
          difficulty: 5
        },
        image: {
          full: "Ahri.png",
          sprite: "champion0.png",
          group: "champion",
          x: 48,
          y: 0,
          w: 48,
          h: 48
        },
        tags: ["Mage", "Assassin", "Support"],
        partype: "MP",
        stats: {
          hp: 514.4,
          hpperlevel: 80,
          mp: 334,
          mpperlevel: 50,
          movespeed: 330,
          armor: 20.88,
          armorperlevel: 3.5,
          spellblock: 30,
          spellblockperlevel: 0,
          attackrange: 550,
          hpregen: 6.505,
          hpregenperlevel: 0.6,
          mpregen: 6,
          mpregenperlevel: 0.8,
          crit: 0,
          critperlevel: 0,
          attackdamage: 53.04,
          attackdamageperlevel: 3,
          attackspeedoffset: -0.065,
          attackspeedperlevel: 2
        }
      }])
    });

  test('SortB should returns orden descendente', ()=> {
    expect(infoSort(aallData,"sortB")).toEqual([{
      version: "6.24.1",
      id: "Ahri",
      key: "103",
      name: "Ahri",
      title: "the Nine-Tailed Fox",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
      blurb:
        "Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...",
      info: {
        attack: 3,
        defense: 4,
        magic: 8,
        difficulty: 5
      },
      image: {
        full: "Ahri.png",
        sprite: "champion0.png",
        group: "champion",
        x: 48,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Mage", "Assassin"],
      partype: "MP",
      stats: {
        hp: 514.4,
        hpperlevel: 80,
        mp: 334,
        mpperlevel: 50,
        movespeed: 330,
        armor: 20.88,
        armorperlevel: 3.5,
        spellblock: 30,
        spellblockperlevel: 0,
        attackrange: 550,
        hpregen: 6.505,
        hpregenperlevel: 0.6,
        mpregen: 6,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 53.04,
        attackdamageperlevel: 3,
        attackspeedoffset: -0.065,
        attackspeedperlevel: 2
      }}, {
        version: "6.24.1",
        id: "Aatrox",
        key: "266",
        name: "Aatrox",
        title: "the Darkin Blade",
        img:
          "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
        splash:
          "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
        blurb:
          "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
        info: {
          attack: 8,
          defense: 4,
          magic: 3,
          difficulty: 4
        },
        image: {
          full: "Aatrox.png",
          sprite: "champion0.png",
          group: "champion",
          x: 0,
          y: 0,
          w: 48,
          h: 48
        },
        tags: ["Fighter", "Tank"],
        partype: "BloodWell",
        stats: {
          hp: 537.8,
          hpperlevel: 85,
          mp: 105.6,
          mpperlevel: 45,
          movespeed: 345,
          armor: 24.384,
          armorperlevel: 3.8,
          spellblock: 32.1,
          spellblockperlevel: 1.25,
          attackrange: 150,
          hpregen: 6.59,
          hpregenperlevel: 0.5,
          mpregen: 0,
          mpregenperlevel: 0,
          crit: 0,
          critperlevel: 0,
          attackdamage: 60.376,
          attackdamageperlevel: 3.2,
          attackspeedoffset: -0.04,
          attackspeedperlevel: 3
        }
      }]);
    });

});





 


