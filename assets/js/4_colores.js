const azul = document.getElementById("azul");
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const amarillo = document.getElementById("amarillo");

const pintarCuadrado = (elementoId) => {
  const elemento = document.getElementById(elementoId);
  elemento.style.backgroundColor = "black";
};

azul.addEventListener("click", () => {
  pintarCuadrado("azul");
});

rojo.addEventListener("click", () => {
  pintarCuadrado("rojo");
});

verde.addEventListener("click", () => {
  pintarCuadrado("verde");
});

amarillo.addEventListener("click", () => {
  pintarCuadrado("amarillo");
});

/* ----------------------------------------------------- */

const key = document.getElementById('key');


document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    key.style.backgroundColor = 'pink';
    key.innerHTML = 'A';
  } else if (event.key === "s") {
    key.style.backgroundColor = 'orange';
    key.innerHTML = 'S';
  } else if (event.key === "d") {
    key.style.backgroundColor = 'skyBlue';
    key.innerHTML = 'D';
  }
});

/* ----------------------------------------------------- */
const padre = document.getElementById('padre');

document.addEventListener("keydown", function (event) {
  if (event.key === "q") {
    crearNuevoDiv('purple', 'Q');
  } else if (event.key === "w") {
    crearNuevoDiv('grey', 'W');
  } else if (event.key === "e") {
    crearNuevoDiv('brown', 'E');
  }
});

const crearNuevoDiv = (color, letra) => {
    const elemento = document.createElement("div");
    elemento.style.backgroundColor = color;
    elemento.style.width = "200px";
    elemento.style.height = "200px";
    elemento.style.display = "flex";
    elemento.style.justifyContent = "center";
    elemento.style.alignItems = "center";
    elemento.style.fontSize = "50px";
    elemento.innerHTML = letra

    padre.appendChild(elemento);
}