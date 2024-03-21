// Esta función toma los datos del array de torneos y los inserta en la tabla HTML
function llenarCalendarioTitulos() {
    // Obtener la referencia al tbody de la tabla en HTML
    const tbody = document.getElementById('calendarioDesplegable');
  
    // Iterar sobre cada torneo en el array
    torneos.forEach((torneo, indice) => {
      // Crear una nueva fila para el torneo
      const fila = document.createElement('tr');
      fila.classList.add('fila-clickeable');
      fila.dataset.bsToggle = 'collapse';
      fila.dataset.bsTarget = `#collapse${indice + 1}`;
      fila.setAttribute('aria-expanded', 'false');
      fila.setAttribute('aria-controls', `collapse${indice + 1}`);
  
      // Insertar las celdas con los datos del torneo
      fila.innerHTML = `
        <td>${torneo.fecha}</td>
        <td>${torneo.nombre}</td>
        <td>${torneo.lugar}</td>
      `;
  
      // Agregar la fila al tbody
      tbody.appendChild(fila);
  
      // Crear la fila colapsable para la información detallada del torneo
      const filaDetallada = document.createElement('tr');
      filaDetallada.id = `collapse${indice + 1}`;
      filaDetallada.classList.add('collapse');
      filaDetallada.innerHTML = `
        <td colspan="3">
          <div class="card-body">
            <div class="depegable-tabla row">
              <div class="col-md-8 p-3">
                <p>Detalles del Torneo</p>
                <table class="table table-sm">
                  <tbody>
                    ${crearFilasInformacion(torneo.informacion)}
                  </tbody>
                </table>
              </div>
              <div class="col-md-4 p-3">
                <p>Tabla de Horarios</p>
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th>Ronda</th>
                      <th>Fecha</th>
                      <th>Hora</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${crearFilasHorarios(torneo.horarios)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </td>
      `;
  
      // Agregar la fila colapsable al tbody
      tbody.appendChild(filaDetallada);
    });

    // Llamar a la función para insertar títulos en el elemento con id "calendarioTitulos"
    insertarTitulos();
  }
  
  // Función para insertar los títulos en el elemento con id "calendarioTitulos"
  function insertarTitulos() {
    const titulos = document.getElementById('calendarioTitulos');
    torneos.forEach(torneo => {
      const titulo = document.createElement('h3');
      titulo.textContent = `${torneo.fecha} - ${torneo.nombre} (${torneo.lugar})`;
      titulos.appendChild(titulo);
    });
  }
  
  // Función para crear las filas de información detallada del torneo
  function crearFilasInformacion(informacion) {
    let filas = '';
    for (const [clave, valor] of Object.entries(informacion)) {
      filas += `<tr><th>${clave}</th><td>${valor}</td></tr>`;
    }
    return filas;
  }
  
  // Función para crear las filas de horarios del torneo
  function crearFilasHorarios(horarios) {
    let filas = '';
    horarios.forEach(horario => {
      filas += `<tr><td>${horario.ronda}</td><td>${horario.fecha}</td><td>${horario.hora}</td></tr>`;
    });
    return filas;
  }
  
  // Llamar a la función para llenar la tabla de torneos al cargar la página
  llenarCalendarioTitulos();
