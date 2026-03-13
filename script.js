/* Función para abrir el menú superpuesto y mostrar el fondo oscuro */
function abrirMenu() {
    document.getElementById("miMenuLateral").style.width = "250px";
    document.getElementById("fondoOscuro").style.display = "block";
}

/* Función para cerrar el menú y ocultar el fondo oscuro */
function cerrarMenu() {
    document.getElementById("miMenuLateral").style.width = "0";
    document.getElementById("fondoOscuro").style.display = "none";
}

/* Función para validar el acceso a la página del Superintendente */
function solicitarPassword() {
    var password = prompt("Ingrese la contraseña de seguridad:");
    
    if (password === "1914#2026") {
        window.location.href = "superintendente.html";
    } else if (password !== null) { 
        /* Verifica que el usuario no haya presionado "Cancelar" */
        alert("Contraseña incorrecta. Acceso denegado.");
    }
}