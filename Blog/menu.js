<script>
    // Seleccionamos el botón "Menú" y el contenido del menú
    const menuBtn = document.getElementById('menu-btn');
    const menuContent = document.getElementById('menu-content');

    // Cuando se haga clic en el botón "Menú"
    menuBtn.addEventListener('click', function() {
        // Alternamos la clase 'show' para mostrar/ocultar el menú
        menuContent.classList.toggle('show');
    });

    // Si se hace clic fuera del menú, lo cerramos
    document.addEventListener('click', function(event) {
        if (!menuContent.contains(event.target) && event.target !== menuBtn) {
            menuContent.classList.remove('show');
        }
    });
</script>
