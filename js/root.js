function cambiarEstilos() {
    var estilos1 = document.getElementById("style-pc");
    var estilos2 = document.getElementById("style-mobile");

    if (window.matchMedia("(max-width: 480px)").matches) {
      estilos1.disabled = true;
      estilos2.disabled = false;
    } else {
      estilos1.disabled = false;
      estilos2.disabled = true;
    }
  }
  cambiarEstilos();
  window.addEventListener("resize", cambiarEstilos);