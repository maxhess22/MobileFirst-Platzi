let prom_1 = document.getElementById("card-1");
let prom_2 = document.getElementById("card-2");
let prom_3 = document.getElementById("card-3");
let buttonAfter = document.querySelector("#siguiente");
let buttonBefore = document.querySelector("#retroceder");



buttonAfter.addEventListener('click', avanzar);
buttonBefore.addEventListener('click', retroceder);


function avanzar () {
    prom_1.style.display = 'none';
    prom_2.style.display = 'none';
    prom_3.style.display = 'flex';
    prom_3.style.animationName = 'opacitys';
}
function retroceder (){
    prom_3.style.display = 'none';
    prom_2.style.display = 'none';
    prom_1.style.display = 'flex';
    prom_1.style.animationName = 'opacitys';
}


