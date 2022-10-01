let prom_1 = document.getElementById("card-1");
let prom_2 = document.getElementById("card-2");
let prom_3 = document.getElementById("card-3");
let buttonAfter = document.querySelector("#siguiente");
let buttonBefore = document.querySelector("#retroceder");
var valorCard = 2;


buttonAfter.addEventListener('click', avanzar);
buttonBefore.addEventListener('click', retroceder);



function avanzar (){  
    valorCard = valorCard + 1;
    
    if(valorCard > 3 ){
        valorCard = 1;
        
    }
    
    console.log(valorCard);
    
    switch(valorCard){
        case 1:
            prom_1.style.display = 'flex';
            prom_2.style.display = 'none';
            prom_3.style.display = 'none';
            prom_1.style.animationName = 'opacitys';
            prom_1.style.opacity = 1;
            break;
        case 2:
            prom_1.style.display = 'none';
            prom_2.style.display = 'flex';
            prom_3.style.display = 'none';
            prom_2.style.animationName = 'opacitys';
            prom_2.style.opacity = 1;
            break;
        case 3:
            prom_1.style.display = 'none';
            prom_2.style.display = 'none';
            prom_3.style.display = 'flex';
            prom_3.style.animationName = 'opacitys';
            prom_3.style.opacity = 1;
            break;
    }
}


function retroceder (){  
    valorCard = valorCard - 1;
    
    if(valorCard<1 ){
        valorCard = 3;
        
    }
    
    console.log(valorCard);
    
    switch(valorCard){
        case 1:
            prom_1.style.display = 'flex';
            prom_2.style.display = 'none';
            prom_3.style.display = 'none';
            prom_1.style.animationName = 'opacitys';
            prom_1.style.opacity = 1;
            break;
        case 2:
            prom_1.style.display = 'none';
            prom_2.style.display = 'flex';
            prom_3.style.display = 'none';
            prom_2.style.animationName = 'opacitys';
            prom_2.style.opacity = 1;
            break;
        case 3:
            prom_1.style.display = 'none';
            prom_2.style.display = 'none';
            prom_3.style.display = 'flex';
            prom_3.style.animationName = 'opacitys';
            prom_3.style.opacity = 1;
            break;
    }
}
