const tablero = []
const divTablero = document.getElementById('tablero')



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
    
    for (let index = 0; index < 11; index++) {
        const fila = []
        for (let index = 0; index < 11; index++) {
            const estado = document.createElement('button');
            estado.classList.add('estado');
            const img = document.createElement('img');
            img.src = 'img/activo.png';
            estado.appendChild(img);
            estado.addEventListener("click", e => {
                e.preventDefault()
                if (e.target.src = 'img/activo.png') {
                    e.target.src = 'img/ocupado.png'
                }
            })
            // console.log(estado)
            fila.push(estado);
            
            
        }
        tablero.push(fila);
    }
    tablero[5][5].children[0].src = 'img/gato.png';
    tablero[5][5].disabled = true

}


