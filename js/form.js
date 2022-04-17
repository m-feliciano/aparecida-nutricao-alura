const addPacienteButton = $("adicionar-paciente").addEventListener("click", function (e) {
	e.preventDefault();
	const form = $("form-adiciona");
	const paciente = obtemPacienteDoFormulario(form);
	addPaciente(paciente);
	form.reset();
});

function montaTr(paciente) {
	let pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
	return pacienteTr;
}

function montaTd(dado, classe) {
	let td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}

function obtemPacienteDoFormulario(form) {
	const nome = form.nome.value;
	const peso = form.peso.value;
	const altura = form.altura.value;
	const gordura = form.gordura.value;
	const imc = calcularImc(peso, altura);
	return { nome, peso, gordura, altura, imc };
}

function validarPaciente(paciente) {
	const erros = [];
	if (!validarNome(paciente.nome)) erros.push("Nome Invalido.");
	if (!validarAltura(paciente.altura)) erros.push("Altura Invalida.");
	if (!validarPeso(paciente.peso)) erros.push("Peso Invalido.");
	if (!validarGordura(paciente.gordura)) erros.push("Gordura Invalida.");
	return erros.length > 0 ? erros : false;
}

function addPaciente(paciente) {
	const tabela = $("tabela-pacientes");
	let registro = montaTr(paciente);
	const erro = $("mensagem-erro");
	erro.textContent = "";

	const erros = validarPaciente(paciente);
	if (erros) return erros.forEach((err) => (erro.textContent += `${err} `));

	tabela.appendChild(registro);
}
