// Función para crear la tabla completa con el estilo deseado y comportamiento colapsable
function crearTablaCompleta(eventosFide) {
  // Obtener el elemento donde se insertará la tabla
  const contenedorTabla = document.getElementById('eventos-tabla-colapsable');

  // Crear la tabla principal
  const tablaPrincipal = document.createElement('table');
  tablaPrincipal.classList.add('table', 'table-bordered', 'table-hover');

  // Crear el encabezado de la tabla principal
  const encabezadoPrincipal = tablaPrincipal.createTHead();
  const filaEncabezado = encabezadoPrincipal.insertRow();
  filaEncabezado.innerHTML = `
    <th>Fecha</th>
    <th>Evento</th>
    <th>Sede</th>
  `;

  // Crear el cuerpo de la tabla principal
  const cuerpoPrincipal = tablaPrincipal.createTBody();

  // Iterar sobre los eventosFide para crear las filas de la tabla principal
  eventosFide.forEach((evento, indice) => {
    const filaEvento = cuerpoPrincipal.insertRow();
    filaEvento.classList.add('fila-clickeable');
    filaEvento.dataset.bsToggle = 'collapse';
    filaEvento.dataset.bsTarget = `#collapseEvento${indice + 1}`;
    filaEvento.setAttribute('aria-expanded', 'false');
    filaEvento.setAttribute('aria-controls', `collapseEvento${indice + 1}`);
    filaEvento.innerHTML = `
      <td>${evento.detalles_evento.find(item => item.fecha_publicacion)?.fecha_publicacion}</td>
      <td>${evento.detalles_evento.find(item => item.nombre)?.nombre}</td>
      <td>${evento.detalles_evento.find(item => item.ciudad_sede)?.ciudad_sede}</td>
    `;

    // Crear la fila colapsable para la información detallada del evento
    const filaDetallada = document.createElement('tr');
    filaDetallada.classList.add('collapse');
    filaDetallada.id = `collapseEvento${indice + 1}`;
    filaDetallada.innerHTML = `
      <td colspan="3">
        <div class="card-body">
          <div class="desplegable-tabla row">
            <div class="col-md-8 p-3">
              <p>Detalles del Torneo</p>
              <table class="table table-sm">
                <tbody>
                  ${crearFilasInformacion(evento.detalles_evento)}
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
                  ${crearFilasHorarios(evento.rondas)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </td>
    `;

    // Agregar las filas al cuerpo principal
    cuerpoPrincipal.appendChild(filaEvento);
    cuerpoPrincipal.appendChild(filaDetallada);
  });

  // Limpiar el contenedor antes de insertar la tabla
  contenedorTabla.innerHTML = '';

  // Agregar la tabla principal al contenedor
  contenedorTabla.appendChild(tablaPrincipal);
}

// Función para crear las filas de información detallada del evento
function crearFilasInformacion(detallesEvento) {
  let filas = '';
  detallesEvento.forEach(detalle => {
    const clave = Object.keys(detalle)[0];
    const valor = Object.values(detalle)[0];
    filas += `<tr><th>${clave.replace(/_/g, ' ')}</th><td>${valor}</td></tr>`;
  });
  return filas;
}

// Función para crear las filas de horarios del evento
function crearFilasHorarios(rondas) {
  let filas = '';
  rondas.forEach(ronda => {
    filas += `<tr><td>${ronda.numero}</td><td>${ronda.fecha}</td><td>${ronda.hora}</td></tr>`;
  });
  return filas;
}

// Llamar a la función para crear la tabla completa al cargar la página
crearTablaCompleta(eventosFide);

