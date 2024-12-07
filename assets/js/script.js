// function pintar(elementoId) {
//   ele.style.backgroundColor = "yellow";
// }
// const ele = document.getElementById("ele1");
// ele.addEventListener("click", pintar);

const pintar = (elemento, color) => {
  if (color === undefined) {
    elemento.style.backgroundColor = "green";
  } else {
      elemento.style.backgroundColor = color;
  }
};

const ele = document.getElementById("ele1");
ele.addEventListener("click", () => {
  pintar(ele, 'yellow');
});

pintar(ele);
