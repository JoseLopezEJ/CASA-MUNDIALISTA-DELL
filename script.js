// =========================================================================
// CONFIGURACIÓN DE TU ENLACE DE GITHUB PAGES
// =========================================================================
const GITHUB_PAGES_URL = "https://joselopezej.github.io/CASA-MUNDIALISTA-DELL/scanner.html";

// Capturar parámetros 'id' desde la URL abierta desde WhatsApp
const urlParams = new URLSearchParams(window.location.search);
const idUrl = urlParams.get('id');

if (idUrl) {
  
  // Buscar información del invitado leyendo tu archivo local base.json
  fetch('base.json')
    .then(res => res.json())
    .then(invitados => {
      
      // Buscar coincidencia exacta por ID en la lista local
      const usuarioEncontrado = invitados.find(u => u.id && u.id.trim() === idUrl.trim());

      if (usuarioEncontrado) {
        // Cargar los datos dinámicamente en el HTML
        document.getElementById('user-name').innerText = usuarioEncontrado.nombre;
        document.getElementById('user-id').innerText = idUrl;

        // Generar el código QR apuntando directamente al Scanner de tu Staff con el ID del invitado
        const infoScan = `${GITHUB_PAGES_URL}?id=${encodeURIComponent(idUrl)}`;
        document.getElementById('qr-img').src = `https://chart.googleapis.com/chart?cht=qr&chs=350x350&chl=${encodeURIComponent(infoScan)}`;
        
        // ESCUCHA ACTIVA LOCAL: Verifica cada 1.5 segundos si este ID ya fue escaneado en puerta
        setInterval(() => {
          if (localStorage.getItem(`ingresado_${idUrl}`) === 'true') {
            document.getElementById('normal-view').style.display = 'none';
            document.getElementById('confirmed-view').style.display = 'block';
            document.getElementById('main-card').style.borderTop = '6px solid #2ecc71';
          }
        }, 1500);

      } else {
        document.getElementById('user-name').innerText = "Invitación No Válida";
        document.getElementById('user-name').style.color = "#e74c3c";
      }
    })
    .catch(err => {
      document.getElementById('user-name').innerText = "Error cargando la lista local";
      console.error(err);
    });
} else {
  document.getElementById('user-name').innerText = "Enlace de acceso incompleto";
}
