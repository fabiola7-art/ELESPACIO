function mostrarSeccion(id) {
    const secciones = document.querySelectorAll(".page");
    const botones = document.querySelectorAll(".menu-pdf a");
    secciones.forEach(sec => {
        sec.style.display = "none";
        sec.classList.remove("fade");
    });
    botones.forEach(btn => btn.classList.remove("active"));
    const activa = document.getElementById(id);
    if (activa) {
        activa.style.display = "block";
        setTimeout(() => activa.classList.add("fade"), 20);
    }
    const botonActivo = [...botones].find(btn => btn.getAttribute("onclick")?.includes(id));
    if (botonActivo) botonActivo.classList.add("active");
}

/* ========= STARFIELD ========= */
(function() {
    const canvas = document.getElementById("starfield");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    const numStars = 180;
    const stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            z: Math.random() * width,
        });
    }
    function animate() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "white";
        stars.forEach(star => {
            star.z -= 2;
            if (star.z <= 0) {
                star.z = width;
                star.x = Math.random() * width;
                star.y = Math.random() * height;
            }
            let k = 128 / star.z;
            let px = star.x * k + width / 2;
            let py = star.y * k + height / 2;
            if (px >= 0 && px <= width && py >= 0 && py <= height) {
                let size = (1 - star.z / width) * 2;
                ctx.fillRect(px, py, size, size);
            }
        });
        requestAnimationFrame(animate);
    }
    animate();
})();

/* ========= ENLACES EXTERNOS ========= */
document.getElementById("link-3")?.addEventListener("click", () => window.open("https://science.nasa.gov/mars/", "_blank"));
document.getElementById("link-4")?.addEventListener("click", () => window.open("https://www.worldhistory.org/trans/es/1-10341/marte/", "_blank"));
document.getElementById("link-5")?.addEventListener("click", () => window.open("https://unamglobal.unam.mx/global_revista/de-que-esta-hecho-marte/", "_blank"));
document.getElementById("link-6")?.addEventListener("click", () => window.open("https://www.esa.int/Space_in_Member_States/Spain/Historia_de_la_exploracion_de_Marte", "_blank"));

    animate();
})();

/* ========= ENLACES EN MARTE ========= */
document.getElementById("link-3").onclick = () => {
    window.open("https://science.nasa.gov/mars/", "_blank");
};

document.getElementById("link-4").onclick = () => {
    window.open("https://www.worldhistory.org/trans/es/1-10341/marte/", "_blank");
};

document.getElementById("link-5").onclick = () => {
    window.open("https://unamglobal.unam.mx/global_revista/de-que-esta-hecho-marte/", "_blank");
};

document.getElementById("link-6").onclick = () => {
    window.open("https://www.esa.int/Space_in_Member_States/Spain/Historia_de_la_exploracion_de_Marte", "_blank");
};

