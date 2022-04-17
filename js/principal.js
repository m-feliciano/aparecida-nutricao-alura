const $ = document.getElementById.bind(document);

(function atualizarTabela() {
	let pacientes = document.querySelectorAll(".paciente");
	pacientes.forEach((p) => {
		const $$ = p.querySelector.bind(p);
		let tdPeso = $$(".info-peso");
		let tdAltura = $$(".info-altura");
		let tdImc = $$(".info-imc");
		const peso = tdPeso.textContent;
		const altura = tdAltura.textContent;

		if (!validarPeso(peso)) {
			tdPeso.classList.add("paciente-invalido");
			tdImc.textContent = "Peso Invalido.";
			return;
		}

		if (!validarAltura(altura)) {
			tdAltura.classList.add("paciente-invalido");
			tdImc.textContent = "Altura inválida.";
			return;
		}
		tdImc.textContent = calcularImc(peso, altura);
	});
})(); // IIFE  (Immediately Invoked Function Expression)

function validarAltura(altura) {
	return altura > 0 && altura < 3;
}

function validarPeso(peso) {
	return peso > 0 && peso < 500;
}

function validarNome(nome) {
	return !!nome.match(/[A-Z][a-zà-ú]*/);
}

function validarGordura(gordura) {
	return gordura > 0 && gordura <= 80;
}

function calcularImc(peso, altura) {
	return (peso / (altura * altura)).toFixed(2);
}
