// Cargar dinámicamente el JSON
fetch('torneos.json')
  .then(response => response.json())
  .then(data => {
    const calendarioDesplegable = document.getElementById('calendarioDesplegable');

    data.forEach(torneo => {
      const fila = document.createElement('tr');
      fila.classList.add('fila-clickeable');
      fila.setAttribute('data-bs-toggle', 'collapse');
      fila.setAttribute('data-bs-target', '#collapseOne');
      fila.setAttribute('aria-expanded', 'false');
      fila.setAttribute('aria-controls', 'collapseOne');

      const fechaTd = document.createElement('td');
      fechaTd.textContent = torneo.fecha;
      fila.appendChild(fechaTd);

      const nombreTd = document.createElement('td');
      nombreTd.textContent = torneo.nombre;
      fila.appendChild(nombreTd);

      const lugarTd = document.createElement('td');
      lugarTd.textContent = torneo.lugar;
      fila.appendChild(lugarTd);

      calendarioDesplegable.appendChild(fila);
    });
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });
