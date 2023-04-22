import { Car } from "./Car";

const gol: Car = new Car('Volkswagen', 'prata', 10);
console.log(`O preço da viagem é de R$ ${gol.calcTripPrice(100, 5)}`);
const uno: Car = new Car('Fiat', 'preto', 15);
console.log(`O preço da viagem é de R$ ${uno.calcTripPrice(100, 5)}`);
