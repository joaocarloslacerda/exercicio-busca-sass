import "../scss/index.scss";
// const { findData, filterData } = require("./utilitariosListas.js");
import { findData, filterData } from "./utilitariosListas";
import { converter } from "./converterString.js";

document.getElementById("findButton").addEventListener("click", encontrar);
document.getElementById("filterButton").addEventListener("click", filtrar);

function encontrar(){
    const valores = document.getElementById("listaDadosFind").value;
    const arrayValores = converter(valores);

    const dado = document.getElementById("dadoFind").value;

    const result = findData(dado, arrayValores);

    const campoResultFind = document.getElementById("resultFind");

    if(result === "Encontrado!"){
        campoResultFind.innerText = result;
        campoResultFind.style.background = "#20B2AA";
        campoResultFind.style.border = "#20B2AA"; 
    }
    else{
        campoResultFind.innerText = result;
        campoResultFind.style.background = "#DC143C";
        campoResultFind.style.border = "#DC143C";
    };
};

function filtrar(){
    const valores = document.getElementById("listaDadosFilter").value;
    const arrayValores = converter(valores);

    const dado = document.getElementById("dadoFilter").value;

    const result = filterData(dado, arrayValores);

    const campoResultFilter = document.getElementById("resultFilter");

    if(result === "0 encontrados"){
        campoResultFilter.innerText = result;
        campoResultFilter.style.background = "#DC143C";
        campoResultFilter.style.border = "#DC143C"; 
    }
    else{
        campoResultFilter.innerText = result;
        campoResultFilter.style.background = "#20B2AA";
        campoResultFilter.style.border = "#DC143C";
    }
};