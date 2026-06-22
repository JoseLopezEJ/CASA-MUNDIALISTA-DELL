// =========================================================================
// CONFIGURACIÓN DE TU ENLACE DE GITHUB PAGES
// =========================================================================
const GITHUB_PAGES_URL = "https://joselopezej.github.io/CASA-MUNDIALISTA-DELL/scanner.html";

// =========================================================================
// BASE DE DATOS LOCAL EMBEDIDA (Mapeo idéntico de tu Excel)
// =========================================================================
const invitados = [
  {"id":"DELL-IM-260001","tel":"3204219740","nombre":"Andres Londoño","canal":"Ingram Micro"},
  {"id":"DELL-IM-260002","tel":"3155771574","nombre":"Lina Valeria Cárdenas Piragauta","canal":"Ingram Micro"},
  {"id":"DELL-IM-260003","tel":"3218275774","nombre":"Moni Rodriguez","canal":"Dell"},
  {"id":"DELL-IM-260004","tel":"3177880644","nombre":"Arhenius Giron","canal":"Aconpiexpress s.a.s"},
  {"id":"DELL-IM-260005","tel":"3180637463","nombre":"Astrid Rincòn","canal":"Aconpiexpress s.a.s"},
  {"id":"DELL-IM-260006","tel":"3115319104","nombre":"leidy Stephanie Ibañez Urrego","canal":"Aconpiexpress s.a.s"},
  {"id":"DELL-IM-260007","tel":"3008545194","nombre":"Tomas Bayona Zuluaga","canal":"Aconpiexpress s.a.s"},
  {"id":"DELL-IM-260008","tel":"3174026242","nombre":"Leonardo Mariño","canal":"Alfacomputers"},
  {"id":"DELL-IM-260009","tel":"3058147834","nombre":"Santiago Mariño","canal":"Alfacomputers"},
  {"id":"DELL-IM-260010","tel":"3167041399","nombre":"MARIA FERNANDA PLATA RAMOS","canal":"ASC SISTEMAS Y CIA SAS"},
  {"id":"DELL-IM-260011","tel":"3167041399","nombre":"ALEJANDRO ESTRADA","canal":"ASC SISTEMAS Y CIA SAS"},
  {"id":"DELL-IM-260012","tel":"3167041399","nombre":"NELSON ESTRADA","canal":"ASC SISTEMAS Y CIA SAS"},
  {"id":"DELL-IM-260013","tel":"3019191054","nombre":"Laura sahian anacona camelo","canal":"controles empresariales"},
  {"id":"DELL-IM-260014","tel":"3013806779","nombre":"María Fernanda Garavito Merchan","canal":"Compurent"},
  {"id":"DELL-IM-260015","tel":"3176571903","nombre":"GLORIA CASTAÑEDA","canal":"COMPUTEL SYSTEM"},
  {"id":"DELL-IM-260016","tel":"3045311855","nombre":"José Esteban López Jaime","canal":"Ingram micro"},
  {"id":"DELL-IM-260017","tel":"3222621688","nombre":"Juan Carlos Castro Molano","canal":"Comware"},
  {"id":"DELL-IM-260018","tel":"3114646004","nombre":"Carlos Andres Quintero Ramirez","canal":"Ingram micro"},
  {"id":"DELL-IM-260019","tel":"3227422877","nombre":"Andres Felipe Agudelo Guayara","canal":"Controles Empresariales"},
  {"id":"DELL-IM-260020","tel":"3178542513","nombre":"Yuli Guzmán","canal":"Controles empresariales"},
  {"id":"DELL-IM-260021","tel":"3054104063","nombre":"Ashleys Carolina De la hoz Ponton","canal":"Controles empresariales"},
  {"id":"DELL-IM-260022","tel":"3144293857","nombre":"Ingrid Yomara Roa Hurtado","canal":"Controles Empresariales"},
  {"id":"DELL-IM-260023","tel":"3007069349","nombre":"lorena obando","canal":"controles empresariales"},
  {"id":"DELL-IM-260024","tel":"3194977678","nombre":"Andrea Borda","canal":"CONTROLES EMPRESARIALES"},
  {"id":"DELL-IM-260025","tel":"3182451685","nombre":"ALISON LOPEZ","canal":"CONTROLES EMPRESARIALES"},
  {"id":"DELL-IM-260026","tel":"3102673942","nombre":"Juan Pablo Amador","canal":"Dell"},
  {"id":"DELL-IM-260027","tel":"3134130564","nombre":"Leidy Nataly Alba Lombana","canal":"Controles empresariales"},
  {"id":"DELL-IM-260028","tel":"3008591995","nombre":"Diego Quevedo","canal":"Controles Empresariales"},
  {"id":"DELL-IM-260029","tel":"3173740922","nombre":"Luis Mantilla","canal":"Controles Empresariales SAS"},
  {"id":"DELL-IM-260030","tel":"3133093046","nombre":"Stiven villamil","canal":"Dasa High Technology"},
  {"id":"DELL-IM-260031","tel":"3212158717","nombre":"sandra penagos","canal":"Dasa High Technology"},
  {"id":"DELL-IM-260032","tel":"3102597339","nombre":"NICOLAS ROMERO QUIJANO","canal":"Dasa High Technology"},
  {"id":"DELL-IM-260033","tel":"3174307035","nombre":"Daniel santiago acevedo","canal":"Dasa High Technology"},
  {"id":"DELL-IM-260034","tel":"3143596259","nombre":"Gabriela acevedo","canal":"Dasa high technology"},
  {"id":"DELL-IM-260035","tel":"3122816648","nombre":"Jonathan Stiven Bonilla Avila","canal":"Dasa High Technology"},
  {"id":"DELL-IM-260036","tel":"3204203204","nombre":"BLANCA CECILIA CAÑON DIAZ","canal":"Dasa High Technology"},
  {"id":"DELL-IM-260037","tel":"3174307035","nombre":"alexander acevedo","canal":"Dasa High Technology"},
  {"id":"DELL-IM-260038","tel":"3204650775","nombre":"viktor murcia","canal":"Disc-itbs latam sas"},
  {"id":"DELL-IM-260039","tel":"3144555164","nombre":"Dayana Aparicio","canal":"Disc-itbs latam sas"},
  {"id":"DELL-IM-260040","tel":"3208396195","nombre":"Andres Martinez","canal":"disc-itbs latam sas"},
  {"id":"DELL-IM-260041","tel":"3168330182","nombre":"martha del rio, diana zea, felipe mejia","canal":"DELL"},
  {"id":"DELL-IM-260042","tel":"3115035267","nombre":"Leydi Vargas","canal":"Disc-itbs latam sas"},
  {"id":"DELL-IM-260043","tel":"3168330182","nombre":"DIANA ZEA","canal":"DELL"},
  {"id":"DELL-IM-260044","tel":"3168330182","nombre":"FELIPE MEJIA","canal":"DELL"},
  {"id":"DELL-IM-260045","tel":"3168330182","nombre":"MARTHA L. DEL RIO","canal":"DELL"},
  {"id":"DELL-IM-260046","tel":"3003219535","nombre":"Camilo Aguirre","canal":"disc-itbs latam sas"},
  {"id":"DELL-IM-260047","tel":"3114534151","nombre":"Jonnathan Niño","canal":"Evolutech Consulting S.A.S"},
  {"id":"DELL-IM-260048","tel":"3004377938","nombre":"ANDREA CATALINA PRIETO","canal":"HEKAL SOLUCIONES SAS"},
  {"id":"DELL-IM-260049","tel":"3123195358","nombre":"CESAR RUEDA","canal":"HEKAL SOLUCIONES SAS"},
  {"id":"DELL-IM-260050","tel":"3024682373","nombre":"DANIEL RUEDA PRIETO","canal":"HEKAL SOLUCIONES SAS"},
  {"id":"DELL-IM-260141","tel":"3132754450","nombre":"Julian saldana","canal":"Dell"}
];

// =========================================================================
// LÓGICA DE PROCESAMIENTO
// =========================================================================
const urlParams = new URLSearchParams(window.location.search);
const idUrl = urlParams.get('id');

if (idUrl) {
  const usuarioEncontrado = invitados.find(u => u.id && u.id.trim().toUpperCase() === idUrl.trim().toUpperCase());

  if (usuarioEncontrado) {
    // Setea el ID en la cápsula negra
    document.getElementById('user-id').innerText = usuarioEncontrado.id;

    // Crea el enlace codificado del QR hacia el escáner
    const infoScan = `${GITHUB_PAGES_URL}?id=${encodeURIComponent(usuarioEncontrado.id)}`;
    
    // Renderizado del QR dentro del contenedor punteado
    document.getElementById("qrcode").innerHTML = "";
    new QRCode(document.getElementById("qrcode"), {
      text: infoScan,
      width: 240,
      height: 240,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
    
    // Monitoreo de estado mediante LocalStorage
    setInterval(() => {
      if (localStorage.getItem(`ingresado_${usuarioEncontrado.id}`) === 'true') {
        document.getElementById('normal-view').style.display = 'none';
        document.getElementById('confirmed-view').style.display = 'block';
      }
    }, 1500);

  } else {
    document.getElementById('user-id').innerText = "ID ERROR";
  }
} else {
  document.getElementById('user-id').innerText = "SIN ID";
}
