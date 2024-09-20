// Cálculo de aceleración
document.getElementById('mruv-aceleracion-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const velocidadInicial = parseFloat(document.getElementById('velocidad-inicial').value);
    const velocidadFinal = parseFloat(document.getElementById('velocidad-final').value);
    const tiempo = parseFloat(document.getElementById('tiempo-mruv').value);
    const aceleracion = (velocidadFinal - velocidadInicial) / tiempo;
    document.getElementById('resultado-aceleracion').textContent = aceleracion.toFixed(2) + ' m/s²';
});

// Cálculo de Velocidad Final
document.getElementById('mruv-velocidad-final-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const velocidadInicial = parseFloat(document.getElementById('velocidad-inicial-mruv').value);
    const aceleracion = parseFloat(document.getElementById('aceleracion-mruv').value);
    const tiempo = parseFloat(document.getElementById('tiempo-final-mruv').value);
    const velocidadFinal = velocidadInicial + aceleracion * tiempo;
    document.getElementById('resultado-velocidad-final').textContent = velocidadFinal.toFixed(2) + ' m/s';
});

// Cálculo de Distancia Recorrida
document.getElementById('mruv-distancia-recorrida-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const velocidadInicial = parseFloat(document.getElementById('velocidad-inicial-distancia').value);
    const velocidadFinal = parseFloat(document.getElementById('velocidad-final-distancia').value); // ID corregido
    const tiempo = parseFloat(document.getElementById('tiempo-final1-mruv').value);
    const distancia = ((velocidadFinal + velocidadInicial) / 2) * tiempo;
    document.getElementById('resultado-distancia-recorrida').textContent = distancia.toFixed(2) + ' m';
});
