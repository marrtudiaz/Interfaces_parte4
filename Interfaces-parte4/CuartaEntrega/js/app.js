//Punto 4
/*Controla que mostrar o esconder dependiendo de la posicion del scroll en la pagina*/
document.addEventListener("scroll", () => {
    function clean() {
        document.querySelectorAll(".demoImg").forEach((s) => {
            s.classList.remove("active");
        });
        document.querySelectorAll(".info").forEach((s) => {
            s.classList.remove("active");
        });
    }
    if (window.scrollY < 4000) {
        clean();
        document.querySelector("#demoImg1").classList.add("active");
        document.querySelector("#info1").classList.add("active");
    }
    if (window.scrollY > 4000 && window.screenY < 4500) {
        clean();
        document.querySelector("#demoImg2").classList.add("active");
        document.querySelector("#info2").classList.add("active");
    }
    if (window.scrollY > 4500 && window.screenY < 4900) {
        clean();
        document.querySelector("#demoImg3").classList.add("active");
        document.querySelector("#info3").classList.add("active");
    }
    if (window.scrollY > 4900) {
        clean();
        document.querySelector("#demoImg4").classList.add("active");
        document.querySelector("#info4").classList.add("active");
    }
});
//Punto 5
const navbar = document.querySelector(".navbar");
const logoGrande = document.querySelector("#titulo");
const logoChico = document.querySelector(".navbarMedio");
document.addEventListener("scroll", () => {
    // Control de la opacidad del logo en función del desplazamiento vertical
    if (window.scrollY < 103) {
        logoChico.style.opacity = 0; // Si el scroll es menor a 103, establece la opacidad del logo chico en 0
    }
    if (window.scrollY > 103) {
        logoChico.style.opacity = window.scrollY / 400; // Ajusta la opacidad del logo chico en función del desplazamiento
    }
    // Control de la opacidad y escala del logo grande en función del desplazamiento
    logoGrande.style.opacity = 1 - window.scrollY / 120;
    const scaleValue = Math.max(1 - window.scrollY / 200, 0.0);
    logoGrande.style.scale = scaleValue; // Ajusta la escala del logo grande
});

//Punto 6 
window.addEventListener('scroll', function () {
    var duende = document.getElementById('duende');
    var posicionInicial = 638; // Posición inicial del duende
    var posicionFinal = 797; // Posición a la que el duende debe llegue al hacer scroll
    var velocidadScroll = 0.3; // Velocidad

    // Calcula la distancia que se ha desplazado desde la posición inicial
    var distancia = window.scrollY - posicionInicial;

    // Calcula la nueva posición del duende en función del scroll
    var nuevaPosicion = Math.min(distancia * velocidadScroll + posicionInicial, posicionFinal);

    // Limita la posición para que no se pase de la posición final
    nuevaPosicion = Math.max(nuevaPosicion, posicionInicial);

    // Aplica la nueva posición al duende utilizando la propiedad top
    duende.style.top = nuevaPosicion + 'px';
});

//Punto 7
//Animacion de entrada
const logo = document.getElementById('titulo');
const layer1 = document.getElementById('layer1');
const layer2 = document.getElementById('layer2');
const layer3 = document.getElementById('layer3');
const layer4 = document.getElementById('layer4');
const gwen = document.getElementById('gwen');
const spidey = document.getElementById('spidey');
const miles = document.getElementById('miles');
const tela = document.getElementById('tela');
const tela2 = document.getElementById('tela2');
const layers = [logo, layer2, layer3, layer4, gwen, spidey, miles, tela, tela2];
const cargarElem = () => {
    layers.forEach((c, index) => {
        c.style.transition = `opacity 0.5s ease ${index * 0.2}s`; // Ajusta la duración y el retraso de la transición
        c.style.opacity = '1';
        c.classList.add('animacion-entrada'); //Activa la animación
    });
    setTimeout(() => { logo.style.transition = `` }, 1000);
};
// Llama a la función después de 5 segundos (para que ocurra despúes del loader)
setTimeout(cargarElem, 5000);

//Parallax
//Definimos 2 arreglos distintos ya que los spidermans se moveran hacia arriba y el fondo hacia abajo
const layersSpidey = [logo, gwen, spidey, miles, tela, tela2];
const layersEdificios = [layer2, layer3, layer4];

window.addEventListener('scroll', () => {
    layersSpidey.forEach((s) => {
        let speed = s.getAttribute('data-speed'); // Obtiene la velocidad de desplazamiento
        s.style.transform = `translateY(-${window.scrollY * speed}px)`;
        let speedCielo = layer1.getAttribute('data-speed'); // Obtiene la velocidad de desplazamiento
        layer1.style.transform = `translateY(${window.scrollY * speedCielo}px)`;        
        let speedGwen = gwen.getAttribute('data-speed'); // Obtiene la velocidad de desplazamiento
        gwen.style.transform = `translate(-${window.scrollY * speedGwen}px,-${window.scrollY * speedGwen}px)`;
        let speedMiles = miles.getAttribute('data-speed'); // Obtiene la velocidad de desplazamiento
        miles.style.transform = `translate(${window.scrollY * speedMiles}px,-${window.scrollY * speedMiles}px)`;
        let speedTela2 = tela2.getAttribute('data-speed'); // Obtiene la velocidad de desplazamiento
        tela2.style.transform = `translate(${window.scrollY * speedTela2}px,-${window.scrollY * speedTela2}px)`;
        // Mueve el elemento hacia arriba o hacia abajo dependiendo del valor de la velocidad y del desplazamiento vertical de la ventana.
        //En este caso, hacia arriba
    })
});

window.addEventListener('scroll', () => {
    layersEdificios.forEach((e) => {
        const speed = e.getAttribute('data-speed'); // Obtiene la velocidad de desplazamiento
        e.style.transform = `translateY(${window.scrollY * speed}px)`; //Mueve los elementos hacia abajo
    });
});



//Punto 9
const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
document.addEventListener("scroll", () => {
    if (window.scrollY > 1350) { //Si la altura en Y es mayor a 1350, realizo la animacion en las cards
        card1.classList.add("animacionCard");
        card2.classList.add("animacionCard");
        card3.classList.add("animacionCard");
    }
});


//Punto 11
const c1 = document.querySelector("#ruta1");
const c2 = document.querySelector("#ruta2");
const c3 = document.querySelector("#ruta3");
window.addEventListener("scroll", function () {
    const pos = c1.getBoundingClientRect(); //devuelve la posicion
    const desplazamiento = window.scrollY;
    // Verifica si parte de las cards están dentro del área visible de la ventana
    if (pos.top < window.innerHeight && pos.bottom > 0) {
        let valorInicial = -44
        // Aplica transformaciones a las cards solo si están visibles en la ventana
        // Mueve las cards en el eje Y y las rota con un valor proporcional al desplazamiento vertical y la posición de cada una en la ventana
        c1.style.transform = `translateY(${valorInicial + ((desplazamiento - pos.top) * 0.027)}px) rotate(-13.078deg)`;
        c2.style.transform = `translateY(${valorInicial + ((desplazamiento - pos.top) * 0.027)}px) rotate(-26.474deg)`;
        c3.style.transform = `translateY(${valorInicial + ((desplazamiento - pos.top) * 0.027)}px) rotate(-36.016deg)`;
    }
});


document.querySelector('.imagenSonido').addEventListener('click', function () {
    reproducirSonido('audio/videoplayback.mp3');
});

function reproducirSonido(rutaSonido) {
    var audio = document.getElementById('audio');
    audio.src = rutaSonido;
    audio.play();
}


