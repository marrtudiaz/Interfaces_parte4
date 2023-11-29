//Opcional 1

window.addEventListener('load', function () {
    const loadingContainer = document.querySelector(".loading-container");
    const loadingProgress = document.getElementById("loading-progress");
    const cargaTotal = 100;
    const intervalo = 50;
    let progreso = 0;

    document.body.style.overflow = 'hidden' // Se bloquea el desplazamiento de la página hasta que se cargue completamente el contenido.


    const actualizarPorcentaje = () => {
        progreso++;
        loadingProgress.textContent = progreso;
        // Una función que incrementa el progreso y actualiza el porcentaje de carga.
    };

    const cargarContenidoPrincipal = () => {
        setTimeout(() => {
            loadingContainer.style.display = "none";
            document.body.style.overflow = 'auto';
        }, 5000);
        // Simula la carga de contenido principal durante 5 segundos.

        const intervaloCarga = setInterval(() => {
            if (progreso < cargaTotal) {
                actualizarPorcentaje();
            } else {
                clearInterval(intervaloCarga);
            }
        }, intervalo);
        // Actualiza el progreso cada cierto intervalo de tiempo hasta alcanzar el 100%.
    };

    cargarContenidoPrincipal();
    // Llama a la función para cargar el contenido principal.
});

//Opcional 2
const hamburguesa = document.querySelector('.hamburguesa');
hamburguesa.addEventListener('click', () => {
    hamburguesa.classList.toggle('cruz'); //Realiza la animación de la transformación a una cruz
});

//Opcional 4
const cielo = document.getElementById('cielo');
const pasto = document.getElementById('pasto');
const paisaje = document.getElementById('paisaje');
const vengador1 = document.getElementById('vengador1');
const vengador2 = document.getElementById('vengador2');
const vengador3 = document.getElementById('vengador3');

document.addEventListener("mousemove", parallaxVengadores);

function parallaxVengadores(e) {
    //Determina el centro de la pantalla
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;

    //Determina la posicion del mouse
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;

    //Calcula la diferencia de la posición del mouse respecto del centro de la ventana
    let desplazamientoX = _mouseX - _w;
    let desplazamientoY = _mouseY - _h;


    //Calcula el desplazamiento de cada capa en proporción al desplazamiento calculado anteriormente
    cielo.setAttribute('style', 'transform: translate3d( ' + desplazamientoX * 0.01 + 'px, ' + desplazamientoY * 0.01 + 'px, 0px)');
    pasto.setAttribute('style', 'transform: translate3d( ' + desplazamientoX * 0.01 + 'px, ' + desplazamientoY * 0.01 + 'px, 0px)');
    paisaje.setAttribute('style', 'transform: translate3d( ' + desplazamientoX * 0.01 + 'px, ' + desplazamientoY * 0.01 + 'px, 0px)');
    vengador1.setAttribute('style', 'transform: translate3d( ' + desplazamientoX * 0.04 + 'px, ' + desplazamientoY * 0.04 + 'px, 0px) rotate(-12.483deg)');
    vengador2.setAttribute('style', 'transform: translate3d( ' + desplazamientoX * 0.05 + 'px, ' + desplazamientoY * 0.05 + 'px, 0px) rotate(13.615deg)');
    vengador3.setAttribute('style', 'transform: translate3d( ' + desplazamientoX * 0.06 + 'px, ' + desplazamientoY * 0.06 + 'px, 0px) rotate(7.515deg)');
}

//Opcional 5
const fondo = document.getElementById('secBlanco3')
const spidey2 = document.querySelector('.spidey2');
const gwen2 = document.querySelector('.gwen2');
const miles2 = document.querySelector('.miles2');
//Cuando el mouse pasa por arriba de algun personaje, este se agranda aumentando la escala, se achican y blurean los demás
//Además cada uno tiene su propio fondo cuando se pasa el mouse por encima
gwen2.addEventListener('mouseover', function () {
    fondo.src = "images/fondos/FondoGwen.png"; //Cambio de fondo
    gwen2.style.transform = 'scale(1.45) translate(-15px, 12px)'; //Agranda personaje
    gwen2.style.filter = 'blur(0)'; //No se le aplica desenfoque
    spidey2.style.transform = 'scale(0.7) translate(140px, -10px)'; //Achica al personaje
    spidey2.style.filter = 'blur(5px)'; //Se le aplica un desenfoque
    miles2.style.transform = 'scale(0.7)'; //Achica al personaje
    miles2.style.filter = 'blur(5px)'; //Se le aplica un desenfoque
});
spidey2.addEventListener('mouseover', function () {
    fondo.src = "images/fondos/FondoSpidey.png";
    spidey2.style.transform = 'scale(1.50) translate(0, 20px)';
    spidey2.style.filter = 'blur(0)';
    gwen2.style.transform = 'scale(0.7) translate(-55px, 90px)';
    gwen2.style.filter = 'blur(5px)';
    miles2.style.transform = 'scale(0.7) translate(60px, 130px)';
    miles2.style.filter = 'blur(5px)';
});
miles2.addEventListener('mouseover', function () {
    fondo.src = "images/fondos/FondoMiles.png";
    miles2.style.transform = 'scale(1.6) translate(0px, 0px)';
    miles2.style.filter = 'blur(0)';
    spidey2.style.transform = 'scale(0.7)';
    spidey2.style.filter = 'blur(5px)';
    gwen2.style.transform = 'scale(0.7) translate(100px, 0px)';
    gwen2.style.filter = 'blur(5px)';

});
// Restaurar al estado predeterminado cuando se retira el mouse
function resetFondoYTamanios() {
    fondo.src = "images/fondos/SecBlanco3.svg"; // La ruta original
    gwen2.style.transform = 'scale(1)';
    gwen2.style.filter = 'none';
    spidey2.style.transform = 'scale(1)';
    spidey2.style.filter = 'none';
    miles2.style.transform = 'scale(1)';
    miles2.style.filter = 'none';
}

//Llama a la función de reset cuando ya no se pasa el mouse por encima
gwen2.addEventListener('mouseout', resetFondoYTamanios);
spidey2.addEventListener('mouseout', resetFondoYTamanios);
miles2.addEventListener('mouseout', resetFondoYTamanios);
