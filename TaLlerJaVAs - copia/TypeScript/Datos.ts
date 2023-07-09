let Region: string = 'Caribe';
let Hemperatura: number = 32.5;
let Humedad: number = 85;
let Condiciones = ['soleado','humedo','brisa ligera'];
let Pronostico: object = {Dia:'juves', Clima: 'Parcialmente nublado'};

let Ciudades: Array<string> = ['Cartagena','Medellin','Barranquilla'];

interface Ciudad {
    Nombre: string;
    TemperaturaActual: number;
    Pronostico: string;
}

let CiudadPrincipal: Ciudad = {
    Nombre:'Medellin',
    TemperaturaActual: 23,
    Pronostico: 'Soleado'
};

function Extraer(Temperatura: number, Humedad: number): number {
    return Math.round(-42.379 + 2.04901523 * Temperatura + 10.14333127 * Humedad - 0.22475541 * Temperatura * Humedad - 6.83783 * Math.pow(10, -3) * Math.pow(Temperatura, 2) - 5.481717 * Math.pow(10, -2) * Math.pow(Humedad, 2) + 1.22874 * Math.pow(10, -3) * Math.pow(Temperatura, 2) * Humedad + 8.5282 * Math.pow(10, -4) * Temperatura * Math.pow(Humedad, 2) - 1.99 * Math.pow(10, -6) * Math.pow(Temperatura, 2) * Math.pow(Humedad, 2));
}

console.log(`Region:${Region}`);
console.log(`Aqui esta la tempertura: ${Temperatura}°C`);

console.log(`Mira el pronostico de Juancho es este:`,Pronostico);

console.log(`En mi Rancho: ${CiudadPrincipal.Nombre}`);

console.log(``);




