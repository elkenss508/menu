function animateValue(id, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        document.getElementById(id).textContent = id === 'revenue' ? '$' + value.toLocaleString() : value.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Simular carga de datos y animación
setTimeout(() => {
    animateValue("users", 0, 20000000, 2000);
    animateValue("sales", 0, 17000, 2000);
    animateValue("products", 0, 3500, 2000);
    animateValue("revenue", 0, 50000000, 2000);
}, 500);


