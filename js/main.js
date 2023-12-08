//variable fijo de contenedores carusel
const fila1 = document.querySelector('.contenedor-carusel');
const fila2 = document.querySelector('.contenedor-carusel-musica');

//variables para las flechas
const flechaIzq = document.getElementById('flecha-izq');
const flechaDer = document.getElementById('flecha-der');

const flechaIzqMusic = document.getElementById('flecha-izq-music');
const flechaDerMusic = document.getElementById('flecha-der-music');

//accion flecha derecha
flechaDer.addEventListener('click', () => {
    fila1.scrollLeft += fila1.offsetWidth;
});
//accion flaceha izquierda
flechaIzq.addEventListener('click', () => {
    fila1.scrollLeft -= fila1.offsetWidth;
});

//accion flecha derecha para musica
flechaDerMusic.addEventListener('click', () => {
    fila2.scrollLeft += fila2.offsetWidth;
});
//accion flaceha izquierda para musica
flechaIzqMusic.addEventListener('click', () => {
    fila2.scrollLeft -= fila2.offsetWidth;
});
