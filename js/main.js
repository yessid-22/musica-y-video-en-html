const fila = document.querySelector('.contenedor-carusel');
const videos = document.querySelector('.video')

const flechaIzq = document.getElementById('flecha-izq');
const flechaDer = document.getElementById('flecha-der');

//accion flecha derecha
flechaDer.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});
//accion flaceha izquierda
flechaIzq.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});

videos.forEach((video) =>{
    video.addEventListener('mauseenter', (e) =>{
        const elemento = e.currentTarget;
        setTimeout(() => {
            videos.forEach(video => video.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});