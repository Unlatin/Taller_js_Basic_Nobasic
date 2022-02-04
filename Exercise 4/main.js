
window.onload = function () {
    var imagen = document.getElementById("imagen");
    imagen.addEventListener("mouseover", cambiarImagen);
    imagen.addEventListener("mouseout", imagenInicial);
  
    function cambiarImagen() {
      this.setAttribute(
        "src",
        "https://i.pinimg.com/originals/32/bb/4f/32bb4f8245116640bf08c4b517733ca4.jpg"
      );
    }
  
    function imagenInicial() {
      this.setAttribute(
        "src",
        "https://4.bp.blogspot.com/-P-YUg6g-3xw/XhinhXahrHI/AAAAAAAATUk/z6tUkTeTA9E74BK8TJUdDZe4Ux5Nhl9bACLcBGAsYHQ/w914-h514-p-k-no-nu/vi-lol-season-2020-uhdpaper.com-4K-5.1827-wp.thumbnail.jpg"
      );
    }
  };