// Simulación de número de jugadores y score
// Simula la actualización de jugadores
let totalJugadores = 0;

function actualizarJugadores() {
    totalJugadores++;
    document.getElementById("total-jugadores").textContent = totalJugadores;
}

// Simula la llegada de nuevos jugadores cada 5 segundos
setInterval(actualizarJugadores, 5000);

document.getElementById('total-jugadores').textContent = totalJugadores;

function verScores() {
    alert("Top 3 Jugadores:\n" +
        `1. ${scoreJugadores[0].nombre} - ${scoreJugadores[0].score} puntos\n` +
        `2. ${scoreJugadores[1].nombre} - ${scoreJugadores[1].score} puntos\n` +
        `3. ${scoreJugadores[2].nombre} - ${scoreJugadores[2].score} puntos`);
}
