function findData(dado, listaValores){

    const resultado = listaValores.find((element) => element === dado);

    if(resultado === dado){
        return `Encontrado!`
    }
    else{
        return `Não encontrado!`
    }
};

function filterData(dado, listaValores){

    let count = listaValores.filter((element) => element === dado)

    
};

module.exports = {
    findData,
    filterData
};