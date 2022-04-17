let botaoBuscar = $("buscar-pacientes");

botaoBuscar.addEventListener("click", function () {
	console.log("buscando");
	this._externalUrl = "https://api-pacientes.herokuapp.com/pacientes";
	getPacientesFromAPI(this._externalUrl);
});

async function getPacientesFromAPI(url) {
	try {
		const response = await fetch(url);
		const result = await response.json();

		result.forEach((obj) => {
			addPaciente(obj);
		});
	} catch (err) {
		console.error("Failed retrieving information", err);
	}
}
