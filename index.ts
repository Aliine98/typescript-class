class Car {
  brand: string;
  color: string;
  fuelExpense: number;
  constructor(brand: string, color: string, fuelExpense: number) {
    this.brand = brand;
    this.color = color;
    this.fuelExpense = fuelExpense;
    console.log(`Carro ${brand} da cor ${color}`);
  }
  calcTripPrice(km: number, fuelPrice: number): string {
    return ((km / this.fuelExpense) * fuelPrice).toFixed(2);
  }
}

const gol: Car = new Car('gol', 'prata', 10);
console.log(`O preço da viagem é de R$ ${gol.calcTripPrice(100, 5)}`);
const uno: Car = new Car('Uno Mili', 'preto', 15);
console.log(`O preço da viagem é de R$ ${uno.calcTripPrice(100, 5)}`);
