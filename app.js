const readlineSync = require('readline-sync');
const { generarnumeroaleatorio, verificarAdivinanza } = require('./adivinanza');
const obtenerNumeroUsuario = () => {
return readlineSync.question('Ingresa un número: ');
};
const juegoAdivinanza = () => {
const numeroSecreto = generarnumeroaleatorio();
let numeroAdivinado = 0;
console.log('¡Bienvenido a Adivina el número secreto!');
console.log('Intenta adivinar el número del 1 al 100.\n');
while (numeroAdivinado !== numeroSecreto) {
numeroAdivinado = obtenerNumeroUsuario();
verificarAdivinanza(numeroSecreto, numeroAdivinado);
}
};
juegoAdivinanza();
