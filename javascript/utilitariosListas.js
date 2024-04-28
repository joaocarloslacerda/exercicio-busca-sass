function findData(dado, listaValores){
    const resultado = listaValores.find((element) => element === dado);

    if(resultado === dado){
        return `Encontrado!`
    }
    else{
        return `Não encontrado!`
    };
};

function filterData(dado, listaValores){
    const arrayResult = listaValores.filter((element) => element === dado);

    const count = arrayResult.length;

    return `${count} encontrados`
};

module.exports = {
    findData,
    filterData
};