function mostrarContenido(id) {
  const elemento = document.getElementById(id);

  console.log("Se hizo clic en: " + id); // Esta línea muestra en consola qué carpeta se activó

  // Si el contenido está oculto, lo mostramos
  if (elemento.style.display === "none" || elemento.style.display === "") {
    elemento.style.display = "block";
  } else {
    // Si está visible, lo ocultamos
    elemento.style.display = "none";
  }
}