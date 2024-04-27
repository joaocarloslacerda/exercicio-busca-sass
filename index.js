import "./index.scss";
// import "./utilitariosListas";
import { converter } from "./converterString.js"
const { findData, filterData } = require("./utilitariosListas")

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
        campoResultFind.style.background = "#8FBCB3";
    }
    else{
        campoResultFind.innerText = result;
        campoResultFind.style.background = "#B22222";
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
        campoResultFilter.style.background = "#B22222";
    }
    else{
        campoResultFilter.innerText = result;
        campoResultFilter.style.background = "#8FBCB3";
    }
};