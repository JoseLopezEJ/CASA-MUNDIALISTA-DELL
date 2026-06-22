// =========================================================================
// CONFIGURACIÓN DE TU ENLACE DE GITHUB PAGES
// =========================================================================
const GITHUB_PAGES_URL = "https://joselopezej.github.io/CASA-MUNDIALISTA-DELL/scanner.html";

// Capturar parámetros 'id' desde la URL abierta desde WhatsApp
const urlParams = new URLSearchParams(window.location.search);
const idUrl = urlParams.get('id');

if (idUrl) {
  
  // Buscar información del invitado leyendo tu archivo local base.json
  fetch('base.json') // Asegúrate de que el archivo en GitHub se llame exactamente así
    .then(res => res.json())
    .then(invitados => {
      
      // Buscar coincidencia exacta por ID en la lista local
      const usuarioEncontrado = invitados.find(u => u.id && u.id.trim() === idUrl.trim());

      if (usuarioEncontrado) {
        // Cargar los datos dinámicamente en el HTML
        document.getElementById('user-name').innerText = usuarioEncontrado.nombre;
        document.getElementById('user-id').innerText = idUrl;

        // Generar el código QR de forma INSTANTÁNEA en el celular
        const infoScan = `${GITHUB_PAGES_URL}?id=${encodeURIComponent(idUrl)}`;
        
        // Limpiar el contenedor por si acaso
        document.getElementById("qrcode").innerHTML = "";
        
        // Crear el QR nativo
        new QRCode(document.getElementById("qrcode"), {
          text: infoScan,
          width: 240,
          height: 240,
          colorDark : "#000000",
          colorLight : "#ffffff",
          correctLevel : QRCode.CorrectLevel.H
        });
        
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
