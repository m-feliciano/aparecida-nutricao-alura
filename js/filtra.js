var campoFiltro = $("filtrar-tabela");

campoFiltro.addEventListener("input", function () {
	document.querySelectorAll(".paciente").forEach((paciente) => {
		let nome = paciente.querySelector(".info-nome").textContent;

		if (nome.substring(0, this.value.length).toLowerCase() !== this.value.toLowerCase()) {
			paciente.classList.add("invisivel");
		} else {
			paciente.classList.remove("invisivel");
		}
		if (this.value.length === 0) {
			paciente.classList.remove("invisivel");
		}
	});
});
