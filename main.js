const tablero = []
const divTablero = document.getElementById('tablero')
let posicionGato = []
let anchoTablero = 11
let altoTablero = 11
document.addEventListener('DOMContentLoaded',()=>{
    cargarTableroMatriz();
    ponerTablero();
    for (let index = 0; index < tablero.length; index++) {
        const fila = document.createElement('div');
        fila.classList.add('fila');
        tablero[index].forEach(element => {
            fila.appendChild(element)
        });
        divTablero.appendChild(fila);
    }
    //console.log(tablero);
});






function ponerTablero() {
    divTablero.innerHTML = '';
    for (let index = 0; index < tablero.length; index++) {
        const fila = document.createElement('div');
        fila.classList.add('fila');
        tablero[index].forEach(element => {
            fila.appendChild(element)
        });
        divTablero.appendChild(fila);
    }
}



function cargarTableroMatriz() {
    
    for (let index = 0; index < altoTablero; index++) {
        const fila = []
        for (let index = 0; index < anchoTablero; index++) {
            const estado = document.createElement('button');
            estado.classList.add('estado');
            const img = document.createElement('img');
            img.src = 'img/activo.png';
            estado.appendChild(img);
            estado.addEventListener("click", e => {
                e.preventDefault()
                if (e.target.src = 'img/activo.png') {
                    e.target.src = 'img/ocupado.png'
                    generarEstados(tablero);
                }
            })
            // console.log(estado)
            fila.push(estado);
            
            
        }
        tablero.push(fila);
    }
    posicionGato = [(tablero.length-1)/2,(tablero[0].length-1)/2]
    tablero[posicionGato[0]][posicionGato[1]].children[0].src = 'img/gato.png';
    tablero[posicionGato[0]][posicionGato[1]].disabled = true

}


function moverGatito(){
    
    let fuente= ''
    let numero = 0
    while (numero<4) {
        switch (numero) {
            //Mover Izquierda
            case 0:
                try {
                    fuente =tablero[posicionGato[0]][posicionGato[1]-1].children[0].src;
                    if (fuente.split('img/')[1] == 'activo.png') {
                        const elementoTemp = tablero[posicionGato[0]][posicionGato[1]-1];
    
                        tablero[posicionGato[0]][posicionGato[1]-1] = tablero[posicionGato[0]][posicionGato[1]];
                        tablero[posicionGato[0]][posicionGato[1]] = elementoTemp;
                        posicionGato = [posicionGato[0],posicionGato[1]-1]
                        ponerTablero();
                        numero=4
                    }else{
                        console.log('no movio')
                        
                        //
                    }
                } catch (error) {
                    console.log('Gano el gato')
                    numero=4
                }
                
                break;
            //Mover Derecha
            case 1:
                try {
                    fuente =tablero[posicionGato[0]][posicionGato[1]+1].children[0].src;
                    if (fuente.split('img/')[1] == 'activo.png') {
                        const elementoTemp = tablero[posicionGato[0]][posicionGato[1]+1];
    
                        tablero[posicionGato[0]][posicionGato[1]+1] = tablero[posicionGato[0]][posicionGato[1]];
                        tablero[posicionGato[0]][posicionGato[1]] = elementoTemp;
                        posicionGato = [posicionGato[0],posicionGato[1]+1]
                        ponerTablero();
                        numero=4
                    }else{
                        console.log('no movio')
                        
                        //
                    }
                } catch (error) {
                    console.log('Gano el gato')
                    numero=4
                }
                break;
    
    
    
            //Mover Arriba
            case 2:
                try {
                    fuente =tablero[posicionGato[0]-1][posicionGato[1]].children[0].src;
                    if (fuente.split('img/')[1] == 'activo.png') {
                        const elementoTemp = tablero[posicionGato[0]-1][posicionGato[1]];
    
                        tablero[posicionGato[0]-1][posicionGato[1]] = tablero[posicionGato[0]][posicionGato[1]];
                        tablero[posicionGato[0]][posicionGato[1]] = elementoTemp;
                        posicionGato = [posicionGato[0]-1,posicionGato[1]]
                        ponerTablero();
                        numero=4;
                    }else{
                        console.log('no movio')
                        
                        //
                    }
                } catch (error) {
                    console.log('Gano el gato')
                    numero=4
                }
                break;
            //Mover Abajo
            case 3:
                try {
                    fuente =tablero[posicionGato[0]+1][posicionGato[1]].children[0].src;
                    if (fuente.split('img/')[1] == 'activo.png') {
                        const elementoTemp = tablero[posicionGato[0]+1][posicionGato[1]];
    
                        tablero[posicionGato[0]+1][posicionGato[1]] = tablero[posicionGato[0]][posicionGato[1]];
                        tablero[posicionGato[0]][posicionGato[1]] = elementoTemp;
                        posicionGato = [posicionGato[0]+1,posicionGato[1]]
                        ponerTablero();
                        numero=4
                    }else{
                        console.log('no movio')
                        console.log('ganaste')
                        //
                    }
                } catch (error) {
                    console.log('Gano el gato')
                    numero=4
                }
                break;
        }
        numero++;
    }
        
    
    
}

function generarEstadis(tablero) {
    for (let index = 0; index < 4; index++) {
        
        
    }
}
