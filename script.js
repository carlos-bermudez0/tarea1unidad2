// Obtener elementos del DOM
const opcion1 = document.getElementById('opcion1');
const opcion2 = document.getElementById('opcion2');
const contenidoCentral = document.getElementById('contenido-central');
const botonSaludar = document.getElementById('boton-saludar');

// Manejar click en opción 1 (Saludar)
opcion1.addEventListener('click', function() {
    // Mostrar botón de Saludar y ocultar formulario si está visible
    botonSaludar.style.display = 'block';
    document.getElementById('formulario').remove();
    document.getElementById('boton-saludar').style.display = 'block';
});

// Manejar click en opción 2 (Mostrar Formulario)
opcion2.addEventListener('click', function() {
    // Ocultar botón de Saludar si está visible
    botonSaludar.style.display = 'none';
    // Construir dinámicamente el formulario si no está presente
    if (!document.getElementById('formulario')) {
        const formulario = document.createElement('div');
        formulario.id = 'formulario';
        formulario.className = 'formulario';
        formulario.innerHTML = `
            <form>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br><br>
                <label for="mensaje">Mensaje:</label><br>
                <textarea id="mensaje" name="mensaje" rows="4" required></textarea><br><br>
                <button type="submit">Enviar</button>
            </form>
        `;
        contenidoCentral.appendChild(formulario);
    }
});

// Mostrar mensaje de bienvenida al hacer clic en el botón Saludar
botonSaludar.addEventListener('click', function() {
    alert('¡Bienvenido! Este mensaje se puede cerrar.');
});
