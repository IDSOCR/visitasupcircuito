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

function solicitarPassword() {
    var password = prompt("Ingrese la contraseña de seguridad:");
    
    // Validación para el Superintendente
    if (password === "1914#2026") {
        window.location.href = "superintendente.html";
    } 
    // Nueva validación para Conmemoración
    else if (password === "C#2026") {
        window.location.href = "conm2026.html";
    } 
    else if (password !== null) { 
        alert("Contraseña incorrecta. Acceso denegado.");
    }
}

function copiarTexto(idElemento) {
    const texto = document.getElementById(idElemento).innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado: " + texto);
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
