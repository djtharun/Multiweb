// script.js
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        }
    });

    // Dynamic color theme
    const colors = ['#ff7eb3', '#8ed1fc', '#f5a623', '#50e3c2'];
    let i = 0;
    setInterval(() => {
        document.body.style.background = `linear-gradient(45deg, ${colors[i]}, ${colors[(i + 1) % colors.length]})`;
        i = (i + 1) % colors.length;
    }, 3000);
});

