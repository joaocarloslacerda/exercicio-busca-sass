// import "./utilitariosListas"

const {findData, filterData} = require('./utilitariosListas')

describe("Card FIND - Retorna `Encontrado` caso seja encontrado um determinado valor na lista", () => {
    const listaValores = [1, 2, 5, 8];
    test("Encontrar valor na lista", () => {
        expect(findData(5, listaValores)).toEqual("Encontrado!");
        expect(findData(1, listaValores)).toEqual("Encontrado!");
    });
});
describe("Card FIND - Retorna `Não Encontrado` caso não seja encontrado um determinado valor na lista", () => {
    const listaValores = [6, 9, 10, 30]
    test("Encontrar valor na lista", () => {
        expect(findData(25, listaValores)).toBe("Não encontrado!");
        expect(findData(3, listaValores)).toBe("Não encontrado!");
    });
});
describe("Card FILTER - Retorna `x encontrados` caso seja encontrado um determinado valor x vezes na lista", () => {
    const listaValores = ["maça", 9, "arroz", "suco", 80]

    const listaSecundariaUm = ["maça", 9];
    const listaSecundariaDois = ["arroz", "suco", 80];

    test("Encontrar valor na lista", () => {
        expect(filterData(listaSecundariaUm, listaValores)).toBe("2 encontrados");
        expect(filterData(listaSecundariaDois, listaValores)).toBe("3 encontrados");
    });
});
describe("Card FILTER - Retorna `0 encontrados` caso não seja encontrado um determinado valor", () => {
    const listaValores = ["maça", 9, "arroz", "suco", 80]

    const listaSecundariaUm = ["feijao", 15];
    const listaSecundariaDois = [81, "batata", "uva"];
    
    test("Encontrar valor na lista", () => {
        expect(filterData(listaSecundariaUm, listaValores)).toBe("0 encontrados");
        expect(filterData(listaSecundariaDois, listaValores)).toBe("0 encontrados");
    });
});