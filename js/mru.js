
document.getElementById('mru-velocidad-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const distancia = parseFloat(document.getElementById('distancia').value);
    const tiempo = parseFloat(document.getElementById('tiempo').value);
    const velocidad = distancia / tiempo;
    document.getElementById('resultado-velocidad').textContent = velocidad.toFixed(2) + ' m/s';
});

// Cálculo de Distancia
document.getElementById('mru-distancia-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const velocidad = parseFloat(document.getElementById('velocidad-mru').value);
    const tiempo = parseFloat(document.getElementById('tiempo-mru').value);
    const distancia = velocidad * tiempo;
    document.getElementById('resultado-distancia').textContent = distancia.toFixed(2) + ' m';
});

// Cálculo de Tiempo
document.getElementById('mru-tiempo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const distancia = parseFloat(document.getElementById('distancia-mru').value);
    const velocidad = parseFloat(document.getElementById('velocidad-mru-tiempo').value);
    const tiempo = distancia / velocidad;
    document.getElementById('resultado-tiempo').textContent = tiempo.toFixed(2) + ' s';
});
