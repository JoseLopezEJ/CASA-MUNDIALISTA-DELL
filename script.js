// =========================================================================
// CONFIGURACIÓN DE TU ENLACE DE GITHUB PAGES
// =========================================================================
const GITHUB_PAGES_URL = "https://joselopezej.github.io/CASA-MUNDIALISTA-DELL/scanner.html";

// =========================================================================
// BASE DE DATOS LOCAL EMBEDIDA (Extraída directamente de DATA CASA MUNDIALISTA.xlsx)
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
  {"id":"DELL-IM-260051","tel":"3144534996","nombre":"Luis Marín","canal":"Intelligence it"},
  {"id":"DELL-IM-260052","tel":"3011811417","nombre":"Camilo Andrés Jiménez Pérez","canal":"Kennertch"},
  {"id":"DELL-IM-260053","tel":"3102528090","nombre":"Bibiana torres","canal":"Kennertch"},
  {"id":"DELL-IM-260054","tel":"3104806337","nombre":"Johana Giron Cuervo","canal":"Linalca Informática"},
  {"id":"DELL-IM-260055","tel":"3186846515","nombre":"Laura Alejandra Cortés Naranjo","canal":"Linalca Informática"},
  {"id":"DELL-IM-260056","tel":"3017595012","nombre":"Diana Marcela Rubiano Anaya","canal":"Linalca Informática"},
  {"id":"DELL-IM-260057","tel":"3188377514","nombre":"CRISTIAN JAIR TORRES RODRIGUEZ","canal":"Linalca Informática"},
  {"id":"DELL-IM-260058","tel":"3236146603","nombre":"Mariana Alexandra Torres Romero","canal":"Lomutech S.A.S"},
  {"id":"DELL-IM-260059","tel":"3144908649","nombre":"Lorainy Diaz Martinez","canal":"Lomutech S.A.S"},
  {"id":"DELL-IM-260060","tel":"3507437834","nombre":"Jorge Suarez","canal":"Lomutech S.A.S"},
  {"id":"DELL-IM-260061","tel":"3183589868","nombre":"campo elias bonilla reyes","canal":"Makro Office Ltda"},
  {"id":"DELL-IM-260062","tel":"3113339915","nombre":"valentina bastidas","canal":"Makro Office Ltda"},
  {"id":"DELL-IM-260063","tel":"3204718484","nombre":"SIRLEY BORBON","canal":"Makro Office Ltda"},
  {"id":"DELL-IM-260064","tel":"3183723478","nombre":"ERNESTINA OROZCO APARICIO","canal":"Microhome"},
  {"id":"DELL-IM-260065","tel":"3134217480","nombre":"Juan David acevedo","canal":"Microhome"},
  {"id":"DELL-IM-260066","tel":"3058195122","nombre":"Sergio castro rodriguez","canal":"Microhome"},
  {"id":"DELL-IM-260067","tel":"3176688937","nombre":"Ximena Gonzalez","canal":"Microhome"},
  {"id":"DELL-IM-260068","tel":"3023616915","nombre":"Valentina Abello","canal":"Microhome"},
  {"id":"DELL-IM-260069","tel":"3102071915","nombre":"alejandra roa","canal":"Microhome"},
  {"id":"DELL-IM-260070","tel":"3001638743","nombre":"Duvan Fernando Galindo","canal":"Microhome"},
  {"id":"DELL-IM-260071","tel":"3177677674","nombre":"Elizabeth Angulo","canal":"Microhome"},
  {"id":"DELL-IM-260072","tel":"3124659594","nombre":"Luisa Rincon","canal":"Milenio PC"},
  {"id":"DELL-IM-260073","tel":"3107597747","nombre":"Edward Felipe Arque Muñoz","canal":"MILENIO PC"},
  {"id":"DELL-IM-260074","tel":"3132702026","nombre":"Andres Poveda Enriquez","canal":"PC COM"},
  {"id":"DELL-IM-260075","tel":"3505349471","nombre":"María Paola Briceño Muñoz","canal":"Provexpress"},
  {"id":"DELL-IM-260076","tel":"3214523554","nombre":"ANDREA VARGAS","canal":"Provexpress"},
  {"id":"DELL-IM-260077","tel":"3057061004","nombre":"Johanna Jaime","canal":"Provexpress"},
  {"id":"DELL-IM-260078","tel":"3178836838","nombre":"MIller Leonardo Romero","canal":"Provexpress"},
  {"id":"DELL-IM-260079","tel":"3122181328","nombre":"Alejandra Velásquez","canal":"Provexpress"},
  {"id":"DELL-IM-260080","tel":"3144371953","nombre":"Jessica Valencia Isaza","canal":"Provexpress"},
  {"id":"DELL-IM-260081","tel":"3113006800","nombre":"Alexandra hernández","canal":"Provexpress"},
  {"id":"DELL-IM-260082","tel":"3165295785","nombre":"Nini Beltran","canal":"Provexpress"},
  {"id":"DELL-IM-260083","tel":"3214444114","nombre":"Fernando Sepulveda","canal":"Ingram Micro"},
  {"id":"DELL-IM-260084","tel":"3122181328","nombre":"Alejandra Velásquez","canal":"Provexpress"},
  {"id":"DELL-IM-260085","tel":"3112955869","nombre":"Mayerly velasco","canal":"Dell"},
  {"id":"DELL-IM-260086","tel":"3193070656","nombre":"Dafne ruiz","canal":"Provexpress"},
  {"id":"DELL-IM-260087","tel":"3105571772","nombre":"Paola Garcia Q","canal":"Provexpress"},
  {"id":"DELL-IM-260088","tel":"3157763919","nombre":"Andres Peña S","canal":"Provexpress"},
  {"id":"DELL-IM-260089","tel":"3194823042","nombre":"JOANA ADRAIZ MURILLO GALEANO","canal":"Ingram Micro"},
  {"id":"DELL-IM-260090","tel":"3108562079","nombre":"Angela Mercedes Paris Beltran","canal":"Provexpress"},
  {"id":"DELL-IM-260091","tel":"3204681998","nombre":"Fernando Quiñonez","canal":"Provexpress"},
  {"id":"DELL-IM-260092","tel":"3102149253","nombre":"Mario Reyes","canal":"Provexpress"},
  {"id":"DELL-IM-260093","tel":"3178951682","nombre":"Maribel Virguez Zarate","canal":"Provexpress"},
  {"id":"DELL-IM-260094","tel":"3002880329","nombre":"yovanny herrera","canal":"Provexpress"},
  {"id":"DELL-IM-260095","tel":"3124727428","nombre":"Dayana Chala","canal":"Provexpress"},
  {"id":"DELL-IM-260096","tel":"3103319732","nombre":"Maria Angelica Caballero Daza","canal":"Provexpress"},
  {"id":"DELL-IM-260097","tel":"3222492025","nombre":"LICETH ALEJANDRA MENDIETA ALDANA","canal":"QUALITY GROUP SERVICES"},
  {"id":"DELL-IM-260098","tel":"3132199502","nombre":"AIDA ARRIETA","canal":"QUALITY GROUP SERVICES"},
  {"id":"DELL-IM-260099","tel":"3212753084","nombre":"ANDREY CIFUENTES","canal":"QUALITY GROUP SERVICES"},
  {"id":"DELL-IM-260100","tel":"3153525772","nombre":"Leidi Vanessa Bedoya","canal":"QUALITY GROUP SERVICES"},
  {"id":"DELL-IM-260101","tel":"3163917326","nombre":"Fadid Andres Rodríguez","canal":"QUALITY GROUP SERVICES"},
  {"id":"DELL-IM-260102","tel":"3502129969","nombre":"karol Dayanne Gonzalez Mora","canal":"QUALITY GROUP SERVICES"},
  {"id":"DELL-IM-260103","tel":"3016365683","nombre":"Diana Marcela Fonseca Parra","canal":"QUALITY GROUP SERVICES"},
  {"id":"DELL-IM-260104","tel":"3169114614","nombre":"Maira Alejandra Lancheros Gil","canal":"RICOH COLOMBIA"},
  {"id":"DELL-IM-260105","tel":"3114413119","nombre":"Erwin Mateus","canal":"RICOH COLOMBIA"},
  {"id":"DELL-IM-260106","tel":"3213710903","nombre":"NICOLAS IBAÑEZ DOSMAN","canal":"RICOH COLOMBIA"},
  {"id":"DELL-IM-260107","tel":"3204367641","nombre":"JOSE ALEXANDER ARANGO ZAPATA","canal":"RICOH COLOMBIA"},
  {"id":"DELL-IM-260108","tel":"3108138985","nombre":"Michael Ortegon Vela","canal":"RICOH COLOMBIA"},
  {"id":"DELL-IM-260109","tel":"3104273525","nombre":"FIORELLA RAMIREZ","canal":"RICOH COLOMBIA"},
  {"id":"DELL-IM-260110","tel":"3018027913","nombre":"Mauricio Parales","canal":"RICOH COLOMBIA"},
  {"id":"DELL-IM-260111","tel":"3102577004","nombre":"MARISOL CARVAJAL","canal":"RICOH COLOMBIA"},
  {"id":"DELL-IM-260113","tel":"3108747480","nombre":"OSCAR MORALES NEIRA","canal":"RIO TECHNOLOGY SAS"},
  {"id":"DELL-IM-260114","tel":"3125882641","nombre":"Angie Lorena cruz","canal":"RIT enterprise"},
  {"id":"DELL-IM-260115","tel":"3125449792","nombre":"JOHN ALEJANDRO RAMIREZ MEDELLIN","canal":"S.O.S SOLUCIONES DE OFICINA & SUMINISTROS S.A.S"},
  {"id":"DELL-IM-260116","tel":"3013420647","nombre":"Tatiana Malaver Jerena","canal":"SISTETRONICS SAS"},
  {"id":"DELL-IM-260117","tel":"3012562823","nombre":"Oscar Alonso Mosquera","canal":"Sort Technology SAS"},
  {"id":"DELL-IM-260118","tel":"3007272192","nombre":"Yudy Montealegre","canal":"Sort Technology SAS"},
  {"id":"DELL-IM-260119","tel":"3044367280","nombre":"Valerie Camila Mejia","canal":"Sort Technology SAS"},
  {"id":"DELL-IM-260120","tel":"3144302974","nombre":"XIMENA DEL PILAR MURCIA JARAMILLO","canal":"SOS SOLUCIONES DE OFICINA & SUMINISTROS S.A.S"},
  {"id":"DELL-IM-260121","tel":"3164725586","nombre":"carolina lozano perdomo","canal":"STP CONSULTORES"},
  {"id":"DELL-IM-260122","tel":"3105299715","nombre":"Haydee Perez","canal":"STP CONSULTORES"},
  {"id":"DELL-IM-260123","tel":"3138560478","nombre":"Julieth Quevedo","canal":"STP CONSULTORES"},
  {"id":"DELL-IM-260124","tel":"3107691348","nombre":"Omar Portillo","canal":"STP CONSULTORES"},
  {"id":"DELL-IM-260125","tel":"3043085801","nombre":"Anyela Torres","canal":"Team IT SAS"},
  {"id":"DELL-IM-260126","tel":"3142146364","nombre":"Deisy Johana Casas Latorre","canal":"Tecnologia informatica tecinf"},
  {"id":"DELL-IM-260127","tel":"3143960268","nombre":"paola andrea amaya cortes","canal":"Tecnologia informatica tecinf"},
  {"id":"DELL-IM-260128","tel":"3133581928","nombre":"Erick castro","canal":"Tecnologia informatica tecinf"},
  {"id":"DELL-IM-260129","tel":"3219874479","nombre":"Angela niño","canal":"Tecnologia informatica tecinf"},
  {"id":"DELL-IM-260130","tel":"3105698129","nombre":"Jenny Cancharo Acosta","canal":"Tecnologia informatica tecinf"},
  {"id":"DELL-IM-260131","tel":"3123666772","nombre":"Gabriela Aponte cadena","canal":"Tek soluciones"},
  {"id":"DELL-IM-260132","tel":"3124979863","nombre":"JEIMMY ROCHA","canal":"THEIAX"},
  {"id":"DELL-IM-260133","tel":"3124979863","nombre":"JEIMMY ROCHA","canal":"THEIAX"},
  {"id":"DELL-IM-260134","tel":"3118272179","nombre":"SANTIAGO MURCIA","canal":"THEIAX"},
  {"id":"DELL-IM-260135","tel":"3192717030","nombre":"Vanessa Morales","canal":"UNIPLES"},
  {"id":"DELL-IM-260136","tel":"3002687840","nombre":"Ivon Fonseca","canal":"UNIPLES"},
  {"id":"DELL-IM-260137","tel":"3144845372","nombre":"Yeisson Julian Arias Colmenares","canal":"UNIPLES"},
  {"id":"DELL-IM-260138","tel":"3243383214","nombre":"jaime zapata","canal":"venta equipos"},
  {"id":"DELL-IM-260139","tel":"3245453335","nombre":"Diana ortiz","canal":"Venta equipos"},
  {"id":"DELL-IM-260140","tel":"3213285380","nombre":"ANTONIO LADINO","canal":"VENTA EQUIPOS"},
  {"id":"DELL-IM-260141","tel":"3132754450","nombre":"Julian saldana","canal":"Dell"}
];

// =========================================================================
// LÓGICA DE DETECCIÓN Y GENERACIÓN INSTANTÁNEA
// =========================================================================
const urlParams = new URLSearchParams(window.location.search);
const idUrl = urlParams.get('id');

if (idUrl) {
  // BÚSQUEDA ESTRICTA POR ID
  const usuarioEncontrado = invitados.find(u => u.id && u.id.trim().toUpperCase() === idUrl.trim().toUpperCase());

  if (usuarioEncontrado) {
    // SE REMOVIÓ LA CARGA DEL NOMBRE COMPLETO. SÓLO SE MUESTRA EL ID EN LA TARJETA.
    document.getElementById('user-id').innerText = usuarioEncontrado.id;

    // Crear la URL exacta codificada para el QR
    const infoScan = `${GITHUB_PAGES_URL}?id=${encodeURIComponent(usuarioEncontrado.id)}`;
    
    // Limpiar el contenedor de QR
    document.getElementById("qrcode").innerHTML = "";
    
    // Generar el código QR nativo
    new QRCode(document.getElementById("qrcode"), {
      text: infoScan,
      width: 240,
      height: 240,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
    
    // ESCUCHA ACTIVA (Local Storage): Verifica si el ID escaneado en puerta ya ingresó
    setInterval(() => {
      if (localStorage.getItem(`ingresado_${usuarioEncontrado.id}`) === 'true') {
        document.getElementById('normal-view').style.display = 'none';
        document.getElementById('confirmed-view').style.display = 'block';
        document.getElementById('main-card').style.borderTop = '6px solid #2ecc71';
      }
    }, 1500);

  } else {
    // Manejo de errores simplificado sin exponer nombres
    document.getElementById('user-id').innerText = "ID de Invitación No Válido";
    document.getElementById('user-id').style.color = "#e74c3c";
  }
} else {
  document.getElementById('user-id').innerText = "Enlace de acceso incompleto";
}
