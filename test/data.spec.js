import { filterAssassins } from "../src/data.js";

/*let sortedA = {
  Aatrox: {
    name: "Aatrox",
    info: { attack: 8, defense: 4, magic: 3, difficulty: 4 },
    tags: ["Fighter", "Tank"],
  },
  Ahri: {
    name: "Ahri",
    info: { attack: 3, defense: 4, magic: 8, difficulty: 5 },
    tags: ["Mage", "Assassin"],
  },
  Akali: {
    name: "Akali",
    info: { attack: 5, defense: 3, magic: 8, difficulty: 7 },
    tags: ["Assassin"],
  },
};

//const sortA = Object.values(sortedA);

let sortedB = {
  Akali: {
    name: "Akali",
    info: { attack: 5, defense: 3, magic: 8, difficulty: 7 },
    tags: ["Assassin"],
  },
  Ahri: {
    name: "Ahri",
    info: { attack: 3, defense: 4, magic: 8, difficulty: 5 },
    tags: ["Mage", "Assassin"],
  },
  Aatrox: {
    name: "Aatrox",
    info: { attack: 8, defense: 4, magic: 3, difficulty: 4 },
    tags: ["Fighter", "Tank"],
  },
};

//const sortB = Object.values(sortedB);*/

let saveData = {
  Aatrox: {
    name: "Aatrox",
    info: { attack: 8, defense: 4, magic: 3, difficulty: 4 },
    tags: ["Fighter", "Tank"],
  },
  Ahri: {
    name: "Ahri",
    info: { attack: 3, defense: 4, magic: 8, difficulty: 5 },
    tags: ["Mage", "Assassin"],
  },
  Akali: {
    name: "Akali",
    info: { attack: 5, defense: 3, magic: 8, difficulty: 7 },
    tags: ["Assassin"],
  },
};

const allData = Object.values(saveData);

//TEST DE FILTRADO POR ROL
describe("test for filterByAssassin", () => {
  it("test if it's a function", () => {
    const rolChoice = "Assassin";
    const funrol = filterAssassins(rolChoice, allData);
    expect(typeof filterAssassins).toBe("function"); //espera que filterByRole sea una funcion
    expect(funrol).toContain(allData[2]); //espera que el filtro por rol se aplique segun la eleccion del usuario
  });
});

/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
