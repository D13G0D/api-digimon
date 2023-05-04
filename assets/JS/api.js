const URL_API = "https://digimon-api.vercel.app/api/digimon/name/"
const botonBuscar = document.getElementById("buscarDigimon")
const listaDigimon = document.getElementById("digimonNombre")

botonBuscar.addEventListener('click',obtenerDigimon)

listaDigimon.addEventListener('click',() =>{
    fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.json())
    .then(data => {
        let digimones = data
        let values = document.getElementById("allDigimon")
        let listado = ``
        for (let digimon in digimones){
            listado += `
                <option value="${digimones[digimon].name}"></option>
            `
            values.innerHTML = listado
        }
    })
    .catch('no funca')
})

function obtenerDigimon(){

    let nombreDigimon = document.getElementById("digimonNombre").value;
    
    fetch(`${URL_API}${nombreDigimon}`)
    .then(response => response.json())
    .then(data => {
        let tarjeta = `
        <div class="card m-4" style="width: 25rem;">
            <img src="${data[0].img}" class="card-img-top" alt="Imagen de ${data[0].name}">
            <div class="card-body">
                <h5 class="card-title">${data[0].name}</h5>
                <p class="card-text">Level : ${data[0].level}</p>
            </div>
        </div>         
        `
        document.getElementById("digimonCard").innerHTML = tarjeta        
    })
    .catch()
}


fetch("https://digimon-api.vercel.app/api/digimon")
.then(response => response.json())
.then(data =>{
    let digimones = data  
    let contenedor = document.getElementById("digimonCards")
    let tarjetas = ''
    for (let digimon in digimones){
        tarjetas +=`
        <div class="col-md-4 col-sm-12 col-xl-3 mt-7 style="width: 15rem;"" id="digimonTarjets">
            <div class="card">
                    <img class="card-img-top" src="${digimones[digimon].img}" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${digimones[digimon].name}</h5>
                      <p class="card-text">${digimones[digimon].level}</p>
                    </div>
            </div>
        </div>
        `
    }
   contenedor.innerHTML = tarjetas

})
.catch(error => console.log(error))