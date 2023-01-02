const sumaCacasRocha = document.getElementById("sumaRocha");
const sumaCacasFede = document.getElementById("sumaFede");
const sumaCacasCarlitos = document.getElementById("sumaCarlitos");
const sumaCacasCalde = document.getElementById("sumaCalde");
const sumaCacasRama = document.getElementById("sumaRama");
const sumaCacasOmarcito = document.getElementById("sumaOmarcito");

const sumaPajasRocha = document.getElementById("sumaPajasRocha");
const sumaPajasFede = document.getElementById("sumaPajasFede");
const sumaPajasCarlitos = document.getElementById("sumaPajasCarlitos");
const sumaPajasCalde = document.getElementById("sumaPajasCalde");
const sumaPajasRama = document.getElementById("sumaPajasRama");
const sumaPajasOmarcito = document.getElementById("sumaPajasOmarcito");

const restaCacasRocha = document.getElementById("restaRocha");
const restaCacasFede = document.getElementById("restaFede");
const restaCacasCarlitos = document.getElementById("restaCarlitos");
const restaCacasCalde = document.getElementById("restaCalde");
const restaCacasRama = document.getElementById("restaRama");
const restaCacasOmarcito = document.getElementById("restaOmarcito");

const restaPajasRocha = document.getElementById("restaPajasRocha");
const restaPajasFede = document.getElementById("restaPajasFede");
const restaPajasCarlitos = document.getElementById("restaPajasCarlitos");
const restaPajasCalde = document.getElementById("restaPajasCalde");
const restaPajasRama = document.getElementById("restaPajasRama");
const restaPajasOmarcito = document.getElementById("restaPajasOmarcito");

const contadorCacasRocha = document.getElementById("contarCacasRocha");
const contadorPajasRocha = document.getElementById("contarPajasRocha");
const contadorCacasFede = document.getElementById("contarCacasFede");
const contadorPajasFede = document.getElementById("contarPajasFede");
const contadorCacasCarlitos = document.getElementById("contarCacasCarlitos");
const contadorPajasCarlitos = document.getElementById("contarPajasCarlitos");
const contadorCacasCalde = document.getElementById("contarCacasCalde");
const contadorPajasCalde = document.getElementById("contarPajasCalde");
const contadorCacasRama = document.getElementById("contarCacasRama");
const contadorPajasRama = document.getElementById("contarPajasRama");
const contadorCacasOmarcito = document.getElementById("contarCacasOmarcito");
const contadorPajasOmarcito = document.getElementById("contarPajasOmarcito");

let numeroCacasRocha = 0;
let numeroCacasFede = 0;
let numeroCacasCarlitos = 0;
let numeroCacasCalde = 0;
let numeroCacasRama = 0;
let numeroCacasOmarcito = 0;

let numeroPajasRocha = 0;
let numeroPajasFede = 0;
let numeroPajasCarlitos = 0;
let numeroPajasCalde = 0;
let numeroPajasRama = 0;
let numeroPajasOmarcito = 0;


sumaCacasRocha.addEventListener("click", ()=>{
    numeroCacasRocha++;
    contadorCacasRocha.innerHTML = numeroCacasRocha;
})

sumaCacasFede.addEventListener("click", ()=>{
    numeroCacasFede++;
    contadorCacasFede.innerHTML = numeroCacasFede;
})

sumaCacasCarlitos.addEventListener("click", ()=>{
    numeroCacasCarlitos++;
    contadorCacasCarlitos.innerHTML = numeroCacasCarlitos;
})

sumaCacasCalde.addEventListener("click", ()=>{
    numeroCacasCalde++;
    contadorCacasCalde.innerHTML = numeroCacasCalde;
})

sumaCacasRama.addEventListener("click", ()=>{
    numeroCacasRama++;
    contadorCacasRama.innerHTML = numeroCacasRama;
})

sumaCacasOmarcito.addEventListener("click", ()=>{
    numeroCacasOmarcito++;
    contadorCacasOmarcito.innerHTML = numeroCacasOmarcito;
})

restaCacasRocha.addEventListener("click", ()=>{
    numeroCacasRocha--;
    contadorCacasRocha.innerHTML = numeroCacasRocha;
})

restaCacasFede.addEventListener("click", ()=>{
    numeroCacasFede--;
    contadorCacasFede.innerHTML = numeroCacasFede;
})

restaCacasCarlitos.addEventListener("click", ()=>{
    numeroCacasCarlitos--;
    contadorCacasCarlitos.innerHTML = numeroCacasCarlitos;
})

restaCacasCalde.addEventListener("click", ()=>{
    numeroCacasCalde--;
    contadorCacasCalde.innerHTML = numeroCacasCalde;
})

restaCacasRama.addEventListener("click", ()=>{
    numeroCacasRama--;
    contadorCacasRama.innerHTML = numeroCacasRama;
})

restaCacasOmarcito.addEventListener("click", ()=>{
    numeroCacasOmarcito--;
    contadorCacasOmarcito.innerHTML = numeroCacasOmarcito;
})

sumaPajasRocha.addEventListener("click", ()=>{
    numeroPajasRocha++;
    contadorPajasRocha.innerHTML = numeroPajasRocha;
})

sumaPajasFede.addEventListener("click", ()=>{
    numeroPajasFede++;
    contadorPajasFede.innerHTML = numeroPajasFede;
})

sumaPajasCarlitos.addEventListener("click", ()=>{
    numeroPajasCarlitos++;
    contadorPajasCarlitos.innerHTML = numeroPajasCarlitos;
})

sumaPajasCalde.addEventListener("click", ()=>{
    numeroPajasCalde++;
    contadorPajasCalde.innerHTML = numeroPajasCalde;
})

sumaPajasRama.addEventListener("click", ()=>{
    numeroPajasRama++;
    contadorPajasRama.innerHTML = numeroPajasRama;
})

sumaPajasOmarcito.addEventListener("click", ()=>{
    numeroPajasOmarcito++;
    contadorPajasOmarcito.innerHTML = numeroPajasOmarcito;
})

restaPajasRocha.addEventListener("click", ()=>{
    numeroPajasRocha--;
    contadorPajasRocha.innerHTML = numeroPajasRocha;
})

restaPajasFede.addEventListener("click", ()=>{
    numeroPajasFede--;
    contadorPajasFede.innerHTML = numeroPajasFede;
})

restaPajasCarlitos.addEventListener("click", ()=>{
    numeroPajasCarlitos--;
    contadorPajasCarlitos.innerHTML = numeroPajasCarlitos;
})

restaPajasCalde.addEventListener("click", ()=>{
    numeroPajasCalde--;
    contadorPajasCalde.innerHTML = numeroPajasCalde;
})

restaPajasRama.addEventListener("click", ()=>{
    numeroPajasRama--;
    contadorPajasRama.innerHTML = numeroPajasRama;
})

restaPajasOmarcito.addEventListener("click", ()=>{
    numeroPajasOmarcito--;
    contadorPajasOmarcito.innerHTML = numeroPajasOmarcito;
})