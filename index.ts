class Car {
  brand: string;
  color: string;
  fuelExpense: number;
  constructor(brand: string, color: string, kmPerL: number) {
    this.brand = brand;
    this.color = color;
    this.fuelExpense = 1 / kmPerL;
    console.log(`Carro da marca ${brand}, da cor ${color}, que gasta ${this.fuelExpense.toFixed(2)} litros de combustível por quilômetro`);
  }
  calcTripPrice(km: number, fuelPrice: number): string {
    return (km * this.fuelExpense * fuelPrice).toFixed(2);
  }
}

const gol: Car = new Car('Volkswagen', 'prata', 10);
console.log(`O preço da viagem é de R$ ${gol.calcTripPrice(100, 5)}`);
const uno: Car = new Car('Fiat', 'preto', 15);
console.log(`O preço da viagem é de R$ ${uno.calcTripPrice(100, 5)}`);
