document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validación básica
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Por favor, introduce un correo electrónico válido.');
            return;
        }

        // Aquí normalmente enviarías los datos a un servidor
        // Para este ejemplo, solo simularemos un envío exitoso

        // Ocultar el formulario
        form.style.display = 'none';

        // Mostrar el mensaje de éxito
        successMessage.classList.remove('hidden');
    });

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});