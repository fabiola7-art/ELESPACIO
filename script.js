

/* ========= COLORES PRINCIPALES ========= */
:root {
    --bg-dark: #0a0f29;
    --bg-panel: rgba(20, 25, 60, 0.85);
    --accent: #4dbbff;
    --accent-strong: #5e3fd8;
    --text-light: #e8e8ff;
}

/* ========= GENERAL ========= */
body {
    margin: 0;
    background: var(--bg-dark);
    font-family: "Segoe UI", sans-serif;
    color: var(--text-light);
}

/* ========= MENÚ SUPERIOR  ========= */
.site-header {
    background: rgba(10, 15, 40, 0.9);
    padding: 30px 0;
    border-bottom: 2px solid var(--accent);
    text-align: right;
}

.menu-pdf a {
    margin: 0 16px;
    color: white;
    text-decoration: none;
    font-size: 14px;
    letter-spacing: 1px;
    transition: 0.3s;
}

.menu-pdf a:hover,
.menu-pdf a.active {
    color: var(--accent);
    text-shadow: 0 0 10px var(--accent);
}

/* ========= SECCIONES ========= */
.page {
    display: none;
    max-width: 1500px;
    margin: 50px auto;
    padding: 50px;
    background: var(--bg-panel);
    border-radius: 12px;
    backdrop-filter: blur(4px);
    opacity: 0;
    transition: 0.6s;
}

.page.fade {
    opacity: 1;
}

/* ========= TÍTULOS ========= */
.titulo {
    font-size: 50px;
    text-align: center;
    margin-top: 80px;
}

.subtitulo {
    text-align: center;
    font-size: 18px;
    opacity: 0.7;
}

/* ========= IMÁGENES ========= */
.img-venus,
.img {
    width: 100%;
    border-radius: 10px;
    margin-top: 20px;
}



/* ========= STARFIELD ========= */
#starfield {
    position: fixed;
    top: 10;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}




/* ========================================================= */
/* ======================= MARTE  ======================= */
/* ========================================================= */

.img-1 {
    border-radius: 12px;
}

.texto-1a {
    position: absolute;
    top: 450px;
    left: 900px;
    width: 260px;
    font-size: 16px;
    line-height: 20px;
}

.texto-1b {
    position: absolute;
    top: 450px;
    left: 1190px;
    width: 260px;
    font-size: 16px;
    line-height: 20px;
}

.titulo-2 {
    position: absolute;
    top: 650px;
    left: 120px;
    font-size: 28px;
    font-weight: bold;
}

.texto-2 {
    position: absolute;
    top: 720px;
    left: 900px;
    width: 260px;
    font-size: 16px;
}

.img-2 {
    position: absolute;
    top: 720px;
    left: 1190px;
    width: 260px;
    height: 260px;
    border-radius: 12px;
    background-image: url('https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9182/production/_95405273_hi038768248.jpg.webp');
    background-size: cover;
    background-position: center;
}

.franja-amarilla {
    position: absolute;
    top: 1000px;
    left: 0;
    width: 100%;
    height: 70px;
    background: var(--accent-strong);
}

.titulo-3 {
    position: absolute;
    top: 1100px;
    left: 120px;
    font-size: 26px;
    font-weight: bold;
}

/* ==== CUATRO IMAGENES ==== */
.img-3, .img-4, .img-5, .img-6 {
    position: absolute;
    width: 280px;
    height: 260px;
    border-radius: 12px;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    transition: transform 0.2s;
}

.img-3 { top: 1170px; left: 120px;
    background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp09vP3w3GKRXifHO7H5jRpnC51ZFMIg7J6vQrmvytX9hKNSTBw22C1oMFRKFBVBDOngs'); }

.img-4 { top: 1170px; left: 460px;
    background-image:url('https://i.pinimg.com/originals/d8/05/e7/d805e7130cd982ef37e534354c198b36.jpg'); }

.img-5 { top: 1170px; left: 800px;
    background-image:url('https://starwalk.space/gallery/images/what-is-mars-made-of/es/1920x1080.jpg'); }

.img-6 { top: 1170px; left: 1170px;
    background-image:url('https://c.files.bbci.co.uk/170CC/production/_117021449_diana6.jpg'); }

.img-3:hover, .img-4:hover, .img-5:hover, .img-6:hover {
    transform: scale(1.05);
}

/* ==== TEXTOS BAJO IMÁGENES ==== */
.txt-3, .txt-4, .txt-5, .txt-6 {
    position: absolute;
    font-size: 16px;
    font-weight: bold;
}

.txt-3 { top: 1440px; left: 120px; }
.txt-4 { top: 1440px; left: 460px; }
.txt-5 { top: 1440px; left: 800px; }
.txt-6 { top: 1440px; left: 1170px; }

/* ==== LÍNEAS ==== */
.linea {
    position: absolute;
    top: 1500px;
    width: 93%;
    height: 2px;
    background: #ffffff33;
}

.linea-2 {
    position: absolute;
    top: 1650px;
    width: 93%;
    height: 2px;
    background: #ffffff33;
}

/* ========================================================= */
/* =====================    NÚMEROS   ======================= */
/* ========================================================= */

.numeros {
    position: absolute;
    top: 1540px;      /* donde estaba tu fila original */
    left: 1170px;      /* alineación izquierda */
    width: 200px;     /* espacio para 2 columnas */
    display: grid;
    grid-template-columns: repeat(2, 1fr);  /* 2 columnas */
    column-gap: 50px;   /* espacio entre columnas */
    row-gap: 40px;       /* espacio vertical */
}

.numeros div {
    font-size: 42px;
    font-weight: bold;
}

.numeros span {
    display: block;
    font-size: 14px;
    font-weight: normal;
}



/* FOOTER */
.footer-logo {
    position:absolute;
    top:1900px;
    left:120px;
    font-size:22px;
    line-height:24px;
    text-align:center;
}

.footer-links {
    position:absolute;
    top:1900px;
    left:1250px;
    font-size:14px;
    line-height:18px;
}

.footer-links1 {
  position:absolute;
  top:1900px;
  left:1450px;
  font-size:14px;
  line-height:18px;
  
 
}


/* ========================================================= */
/* =====================    JUPITER   ======================= */
/* ========================================================= */
/* ==================== JÚPITER ==================== */

/* Sección general */
section#jupiter {
    background: #0b1d3a, #000);
    color: var(--text-light);
    font-family: 'Arial', sans-serif;
    position: relative;
    padding-bottom: 100px;
}

/* Título principal */
section#jupiter h1 {
    font-size: 60px;
    text-align: left;
    padding: 80px 50px 20px 50px;
    color: var(--text-light);
    text-transform: uppercase;
}

/* BLOQUE INFORMACIÓN PRINCIPAL */
.jupiter-header .logo1 {
    font-size: 18px;
    line-height: 28px;
    width: 90%;
    margin: 20px 50px;
}

/* Cajitas de información */
.jupiter-cajitas .cajita,
.jupiter-cajitas .cajita2,
.jupiter-cajitas .cajita3 {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 15px;
    font-size: 16px;
    line-height: 24px;
}

/* Cajita principal destacada */
.jupiter-cajitas .cajita {
    font-weight: bold;
}

/* IMÁGENES DESTACADAS */
.jupiter-images .cajita4,
.jupiter-images .cajita5,
.jupiter-images .cajita6,
.jupiter-images .cajita7 {
    border-radius: 12px;
    overflow: hidden;
    border: 2px solid var(--text-light);
    background-size: cover;
    background-position: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.jupiter-images .cajita4:hover,
.jupiter-images .cajita5:hover,
.jupiter-images .cajita6:hover,
.jupiter-images .cajita7:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
}

/* Textos de imágenes */
.jupiter-images .cajita8,
.jupiter-images .cajita9,
.jupiter-images .cajita10,
.jupiter-images .cajita11 {
    font-size: 14px;
    text-align: center;
    color: var(--text-light);
}

/* GALERÍA INTERACTIVA */
.jupiter-galeria .cajita12,
.jupiter-galeria .cajita13,
.jupiter-galeria .cajita14 {
    border-radius: 12px;
    overflow: hidden;
    border: 2px solid var(--text-light);
    background-size: cover;
    background-position: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.jupiter-galeria .cajita12:hover,
.jupiter-galeria .cajita13:hover,
.jupiter-galeria .cajita14:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
}

/* Botones de navegación de sección */
.jupiter-galeria .cajita15 button,
.jupiter-galeria .cajita16 button,
.jupiter-galeria .cajita17 button {
    background: var(--accent-strong);
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
}

.jupiter-galeria .cajita15 button:hover,
.jupiter-galeria .cajita16 button:hover,
.jupiter-galeria .cajita17 button:hover {
    background: #ffd700;
    color: #000;
}

/* FOOTER */
.jupiter-footer {
    margin-top: 50px;
    position: relative;
}

.jupiter-footer .cajita18,
.jupiter-footer .cajita19,
.jupiter-footer .cajita20 {
    border-radius: 12px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
}

.jupiter-footer .footer-links,
.jupiter-footer .footer-links1 {
    font-size: 14px;
    line-height: 20px;
    color: var(--text-light);
    text-align: left;
}

/* Hover general para todas las imágenes */
section#jupiter div[class^="cajita"]:hover {
    cursor: pointer;
}

/* RESPONSIVE */
@media screen and (max-width: 1500px) {
    .jupiter-cajitas .cajita,
    .jupiter-cajitas .cajita2,
    .jupiter-cajitas .cajita3,
    .jupiter-images div[class^="cajita"],
    .jupiter-galeria div[class^="cajita"] {
        position: relative !important;
        left: 0 !important;
        top: 0 !important;
        width: 90% !important;
        margin: 20px auto;
    }

    .jupiter-galeria .cajita15,
    .jupiter-galeria .cajita16,
    .jupiter-galeria .cajita17 {
        text-align: center;
        margin-top: 20px;
    }
}


/* ===== NAV SUPERIOR ===== */
.top-nav {
    display: flex;
    justify-content: flex-end;
    gap: 30px;
    padding: 20px;
    background: var(--bg-panel);
}
.top-nav a {
    color: var(--text-light);
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
}

/* ===== HERO ===== */
.hero {
    width: 100%;
    padding: 0;
   
}
.hero img {
    width: 100%;
  height: 250px;
    object-fit: cover;
  display: block;
}

/* ===== SECCIONES ===== */
.section {
    max-width: 1100px;
    margin: auto;
    padding: 40px 20px;
    background: var(--bg-panel);
    border-radius: 10px;
    margin-top: 40px;
}
h2 {
    font-size: 28px;
    margin-bottom: 10px;
}
.subtitulo {
    color: var(--text-light);
    margin-bottom: 20px;
    text-align: right;
}

/* ===== BOTÓN ===== */
.btn {
    display: inline-block;
    padding: 10px 18px;
    background: var(--accent);
    color: #fff;
    text-decoration: none;
    border-radius: 3px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s ease;
}
.btn:hover {
    background: var(--accent-strong);
}

/* ===== COLUMNAS ===== */
.columnas {
    display: flex;
  justify-content: flex-end;
    gap: 25px;
    margin-top: 30px;
}

/* ===== LISTAS ===== */
ul {
    margin-left: 500px;
}

/* ===== GALERÍA ===== */
.grid-personas {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin-left: 500px;
}
.persona img {
    width: 100%;
    border-radius: 5px;
    transition: transform 1.3s ease;
    cursor: pointer;
}
.persona h4 {
    margin: 5px 0 0 0;
    color: var(--text-light);
}
.persona p {
    font-size: 14px;
    color: var(--text-light);
    margin: 0;
}

/* ===== PREGUNTAS ===== */
.dos-columnas {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-left: 500px;
}
.preg {
    font-weight: bold;
    margin-bottom: 8px;
    cursor: pointer;
}
.respuesta {
    display: none;
    margin-bottom: 15px;
}

/* ===== FOOTER ===== */
footer {
    background: var(--bg-panel);
    padding: 40px;
    display: flex;
    justify-content: flex-end;
    gap: 40px;
    flex-wrap: wrap;
    color: var(--text-light);
    font-size: 14px;
    border-radius: 10px;
    margin-top: 40px;
}

/* Columnas */
.footer-col {
    margin: 5px 20px;
}

/* Títulos dentro del footer */
.footer-col h4 {
    margin-bottom: 8px;
    font-size: 15px;
    color: var(--accent);
}

/* Texto e items: menos espacio vertical */
footer p,
footer a,
footer li {
    margin: 3px 0;
    line-height: 1.2;
}