import "./index.scss"

console.log("teste webpack")

document.getElementById("findButton").addEventListener("click", encontrarDado)
document.getElementById("filterButton").addEventListener("click", filtrarDado)

function encontrarDado(){
    console.log("teste encontrar")
}

function filtrarDado(){
    console.log("teste filtrar")
} 