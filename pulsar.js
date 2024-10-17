function mostrarGaleria() {
    var imagenes = document.getElementById('imagenes');
    if (imagenes.classList.contains('hidden')) {
        imagenes.classList.remove('hidden');
    } else {
        imagenes.classList.add('hidden');
    }
}

// Opcional: Validar el formulario
document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario para demostración
    alert('Formulario enviado correctamente.');
});
