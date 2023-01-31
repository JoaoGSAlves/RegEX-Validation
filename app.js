document.getElementById('nome').addEventListener('blur', validateName);
document.getElementById('cep').addEventListener('blur', validateCep);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('celular').addEventListener('blur', validateCelular);

function validateName() {
	const name = document.getElementById('nome');
	const re = /^[a-zA-Z]{2,10}$/;

	if (!re.test(nome.value)) {
		name.classList.add('is-invalid');
	} else {
		name.classList.remove('is-invalid');
	}
}
function validateCep() {
	const cep = document.getElementById('cep');
	const re = /^[0-9]{5}(-[0-9]{3})?$/;

	if (!re.test(cep.value)) {
		cep.classList.add('is-invalid');
	} else {
		cep.classList.remove('is-invalid');
	}
}
function validateEmail() {
	const email = document.getElementById('email');
	const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)([a-zA-Z]{2,5})$/;

	if (!re.test(email.value)) {
		email.classList.add('is-invalid');
	} else {
		email.classList.remove('is-invalid');
	}
}
function validateCelular() {
	const celular = document.getElementById('celular');
	const re = /^\(?\d{2}\)?[-. ]?\d{5}[-. ]?\d{4}$/;

	if (!re.test(celular.value)) {
		celular.classList.add('is-invalid');
	} else {
		celular.classList.remove('is-invalid');
	}
}
