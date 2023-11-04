<script>
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('registroForm');
    const usuarios = [];

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const contrasena = document.getElementById('contrasena').value;

        const usuario = {
            nombre: nombre,
            correo: correo,
            contrasena: contrasena
        };

        usuarios.push(usuario);

        
        console.log('Usuario registrado:', usuario);
    });
});
</script>