// Esta función toma los datos del array de torneos y los inserta en la tabla HTML dentro del elemento con id "calendarioTitulos"
function llenarTablaTorneos() {
    // Obtener la referencia al tbody de la tabla en HTML
    const titulos = document.getElementById('calendarioTitulos');
    const table = document.createElement('table');
    table.classList.add('table', 'table-responsive', 'table-striped');
  
    // Crear el encabezado de la tabla
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    const thFecha = document.createElement('th');
    const thNombre = document.createElement('th');
    const thUbicacion = document.createElement('th');
  
    thFecha.textContent = 'Fecha';
    thNombre.textContent = 'Nombre';
    thUbicacion.textContent = 'Ubicación';
  
    trHead.appendChild(thFecha);
    trHead.appendChild(thNombre);
    trHead.appendChild(thUbicacion);
    thead.appendChild(trHead);
  
    // Crear el cuerpo de la tabla
    const tbody = document.createElement('tbody');
  
    // Iterar sobre cada torneo y crear una fila para cada uno
    torneos.forEach(torneo => {
      const tr = document.createElement('tr');
      const tdFecha = document.createElement('td');
      const tdNombre = document.createElement('td');
      const tdUbicacion = document.createElement('td');
  
      tdFecha.textContent = torneo.fecha;
      tdNombre.textContent = torneo.nombre;
      tdUbicacion.textContent = torneo.lugar;
  
      tr.appendChild(tdFecha);
      tr.appendChild(tdNombre);
      tr.appendChild(tdUbicacion);
      tbody.appendChild(tr);
    });
  
    // Agregar el encabezado y cuerpo de la tabla al elemento con id "calendarioTitulos"
    table.appendChild(thead);
    table.appendChild(tbody);
    titulos.appendChild(table);
  }
  
  // Llamar a la función para llenar la tabla de torneos al cargar la página
  llenarTablaTorneos();