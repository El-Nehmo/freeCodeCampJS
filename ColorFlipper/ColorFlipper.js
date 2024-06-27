const colors = ["#007bff", "#6610f2", "#6f42c1", "#e83e8c", "#dc3545", "#fd7e14", "#ffc107", "#28a745", "#20c997", "#17a2b8", "#6c757d", "#343a40", "#495057"];

const btn = document.getElementById('btn');
const body = document.body;

btn.addEventListener('click', changeColor);

function changeColor() {
    // Générer un nombre aléatoire entre 0 et la longueur de l'array `colors`
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    // Changer la couleur de fond du body avec la couleur aléatoire
    body.style.backgroundColor = colors[randomColorIndex];
}
