
import torneosArray from './torneosArray.js';

// Función para crear la tabla desplegable
function calendarioDesplegable() {
    const tbody = document.querySelector('.table.table-striped tbody');
    tbody.innerHTML = ''; // Limpiamos el contenido del tbody

    // Recorremos el array de torneos y creamos las filas de la tabla
    torneosArray.forEach(torneo => {
        const fila = document.createElement('tr');
        fila.classList.add('fila-clickeable');
        fila.setAttribute('data-bs-toggle', 'collapse');
        fila.setAttribute('data-bs-target', `#${torneo.nombre.replace(/\s+/g, '')}`);
        fila.setAttribute('aria-expanded', 'false');
        fila.setAttribute('aria-controls', `${torneo.nombre.replace(/\s+/g, '')}`);
        fila.innerHTML = `
        <td>${torneo.fecha}</td>
        <td>${torneo.nombre}</td>
        <td>${torneo.localidad}</td>
        `;
        tbody.appendChild(fila);

        // Creamos la fila colapsable con la información detallada del torneo
        const filaDetallada = document.createElement('tr');
        filaDetallada.id = `${torneo.nombre.replace(/\s+/g, '')}`;
        filaDetallada.classList.add('collapse');
        filaDetallada.innerHTML = `
        <td colspan="3">
            <div class="card-body">
            <div class="depegable-tabla row">
                <div class="col-md-8 p-3">
                <p>Información del Torneo</p>
                <table class="table">
                    <tbody>
                    <tr>
                        <th>Fecha</th>
                        <td>${torneo.informacion.fecha}</td>
                    </tr>
                    <tr>
                        <th>Ritmo de juego</th>
                        <td>${torneo.informacion.ritmo}</td>
                    </tr>
                    <!-- Agrega más filas según la información que quieras mostrar -->
                    </tbody>
                </table>
                </div>
                <div class="col-md-4 p-3">
                <p>Tabla de Horarios</p>
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th>Ronda</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                    </tr>
                    </thead>
                    <tbody>
                    ${torneo.horarios.map(horario => `
                        <tr>
                        <td>${horario.ronda}</td>
                        <td>${horario.fecha}</td>
                        <td>${horario.hora}</td>
                        </tr>
                    `).join('')}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </td>
        `;
        tbody.appendChild(filaDetallada);
    });
}

export default calendarioDesplegable;

// Llamamos a la función para crear la tabla desplegable al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    calendarioDesplegable();
});