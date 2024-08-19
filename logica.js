/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function encript() {
  let texto = document.getElementById("text").value;
  let info = texto
    .normalize("NFD")
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
  let tituloMensaje = document.getElementById("message__title");
  let parrafo = document.getElementById("paragraph");
  let muñeco = document.getElementById("img__result");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if ((texto.length != 0, texto == info, texto == texto.toLowerCase())) {
    document.getElementById("text").value = textoCifrado;
    tituloMensaje.textContent = "El texto se ha encriptado";
    parrafo.textContent = "";
    muñeco.src = "./imagenes/checkmark-icon-2797531_1280.png";
  } else {
    muñeco.src = "./imagenes/Muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingrese el texto que desee encriptar o desencriptar";

    swal({
      title: "Inténtelo de nuevo",
      text: "El texto debe ser sin acentos",
      icon: "/imagenes/icon-6026650_1280.png",
      buttons: "Aceptar",
    });
  }

  if (texto == info) {
    let info = texto
      .normalize("NFD")
      .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
  } else {
    muñeco.src = "./imagenes/Muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingrese el texto que desee encriptar o desencriptar";

    swal({
      title: "Inténtelo de nuevo",
      text: "El texto debe ser sin acentos",
      icon: "/imagenes/icon-6026650_1280.png",
      buttons: "Aceptar",
    });
  }

  if (texto == texto.toLowerCase()) {
    let info = texto
      .normalize("NFD")
      .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
  } else {
    muñeco.src = "./imagenes/Muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingrese el texto que desee encriptar o desencriptar";

    swal({
      title: "Inténtelo de nuevo",
      text: "El texto debe ser en minúscula",
      icon: "/imagenes/icon-6026650_1280.png",
      buttons: "Aceptar",
    });
  }
}

function desencript() {
  let texto = document.getElementById("text").value;
  let info = texto
    .normalize("NFD")
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
  let tituloMensaje = document.getElementById("message__title");
  let parrafo = document.getElementById("paragraph");
  let muñeco = document.getElementById("img__result");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if ((texto.length != 0, texto == info, texto == texto.toLowerCase())) {
    document.getElementById("text").value = textoCifrado;
    tituloMensaje.textContent = "El texto se ha desencriptado";
    parrafo.textContent = "";
    muñeco.src = "./imagenes/checkbox-303113_1280.png";
  } else {
    muñeco.src = "./imagenes/Muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingrese el texto que desee encriptar o desencriptar";

    swal({
      title: "Inténtelo de nuevo",
      text: "Ingrese un texto",
      icon: "/imagenes/icon-6026650_1280.png",
      buttons: "Aceptar",
    });
  }

  if (texto == info) {
    let info = texto
      .normalize("NFD")
      .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
  } else {
    muñeco.src = "./imagenes/Muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingrese el texto que desee encriptar o desencriptar";

    swal({
      title: "Inténtelo de nuevo",
      text: "El texto debe ser sin acentos",
      icon: "/imagenes/icon-6026650_1280.png",
      buttons: "Aceptar",
    });
  }

  if (texto == texto.toLowerCase()) {
    let info = texto
      .normalize("NFD")
      .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
  } else {
    muñeco.src = "./imagenes/Muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingrese el texto que desee encriptar o desencriptar";

    swal({
      title: "Inténtelo de nuevo",
      text: "El texto debe ser en minúscula",
      icon: "/imagenes/icon-6026650_1280.png",
      buttons: "Aceptar",
    });
  }
}
