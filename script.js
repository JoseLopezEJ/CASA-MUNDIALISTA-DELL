// =========================================================================
// CONFIGURACIÓN DE TU ENLACE DE GITHUB PAGES
// =========================================================================
const GITHUB_PAGES_URL = "https://TU_USUARIO.github.io/TU_REPOSITORIO/scanner.html";

// Capturar parámetros 'id' y 'tel' desde la URL abierta desde WhatsApp
const urlParams = new URLSearchParams(window.location.search);
const idUrl = urlParams.get('id');
const telUrl = urlParams.get('tel');

if (idUrl && telUrl) {
  
  // Buscar información del invitado leyendo tu archivo local base.json
  fetch('base.json')
    .then(res => res.json())
    .then(invitados => {
      
      // Buscar coincidencia exacta removiendo espacios en blanco
      const usuarioEncontrado = invitados.find(u => 
        u.id.trim() === idUrl.trim() && 
        u.tel.replace(/\s+/g, '') === telUrl.replace(/\s+/g, '')
      );

      if (usuarioEncontrado) {
        // Cargar los datos dinámicamente en el HTML
        document.getElementById('user-name').innerText = usuarioEncontrado.nombre;
        document.getElementById('user-id').innerText = idUrl;

        // Generar el código QR apuntando directamente al Scanner de tu Staff
        const infoScan = `${GITHUB_PAGES_URL}?id=${encodeURIComponent(idUrl)}&tel=${encodeURIComponent(telUrl)}`;
        document.getElementById('qr-img').src = `https://chart.googleapis.com/chart?cht=qr&chs=350x350&chl=${encodeURIComponent(infoScan)}`;
        
        // ESCUCHA ACTIVA LOCAL: Verifica si este dispositivo ya marcó el ingreso
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
    });
} else {
  document.getElementById('user-name').innerText = "Enlace de acceso incompleto";
}