// ... dentro de tu bloque forEach que renderiza la tabla:

// Crear el botón de eliminar dinámicamente
const celdaAccion = document.createElement("td");
const btnEliminar = document.createElement("button");
btnEliminar.textContent = "Eliminar";
btnEliminar.className = "btn-danger"; // Asegúrate de tener esta clase en tu CSS
btnEliminar.onclick = () => eliminarProducto(item.sku);
celdaAccion.appendChild(btnEliminar);
fila.appendChild(celdaAccion);

// ... (código existente del renderizado)

// FUNCIÓN PARA ELIMINAR (fuera del forEach)
function eliminarProducto(sku) {
  let carrito = JSON.parse(localStorage.getItem("db_simulada_carrito")) || [];

  // Filtrar el arreglo para eliminar el producto con ese SKU
  carrito = carrito.filter((item) => item.sku !== sku);

  // Guardar el nuevo estado
  localStorage.setItem("db_simulada_carrito", JSON.stringify(carrito));

  // Recargar la página para refrescar la tabla
  location.reload();
}
