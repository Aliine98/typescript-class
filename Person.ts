export class Person {
	name: string;
	weight: number;
	height: number;

	constructor(name: string, weight: number, height: number) {
		this.name = name;
		this.weight = weight;
		this.height = height;
	}

	calculateIMC(): string {
		return (this.weight / (this.height * this.height)).toFixed(1);
	}
}
