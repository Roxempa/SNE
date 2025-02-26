document.addEventListener("DOMContentLoaded", function() {
    // Obtener los elementos de los radio buttons y el div del alquiler
    const alquilerOption = document.getElementById("alquiler");
    const opcionesAlquiler = document.getElementById("opciones-alquiler");
    const replicaSelect = document.getElementById("replica");

    // Escuchar los cambios en las opciones de equipación
    alquilerOption.addEventListener("change", function() {
        opcionesAlquiler.style.display = "block"; // Mostrar opciones de alquiler
    });

    const propioOption = document.getElementById("propio");
    propioOption.addEventListener("change", function() {
        opcionesAlquiler.style.display = "none"; // Ocultar opciones de alquiler
    });

    // Eliminar una réplica cuando sea seleccionada
    replicaSelect.addEventListener("change", function() {
        const selectedReplica = replicaSelect.value;
        const options = replicaSelect.options;
        
        // Rehabilitar todas las opciones antes de deshabilitar la seleccionada
        for (let i = 0; i < options.length; i++) {
            options[i].disabled = false;
        }

        // Deshabilitar la opción seleccionada
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === selectedReplica) {
                options[i].disabled = true; // Deshabilitar la opción
                break;
            }
        }
    });
});