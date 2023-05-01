export class Person {
	nome: string;
	peso: number;
	altura: number;

	constructor(nome: string, peso: number, altura: number) {
		this.nome = nome;
		this.peso = peso;
		this.altura = altura;
	}

	calculateIMC(): string {
		return (this.peso / (this.altura * this.altura)).toFixed(1);
	}
}
