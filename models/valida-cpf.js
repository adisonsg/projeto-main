function validaCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, ''); 

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma;
  let resto;

  soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  resto = (soma * 10) % 11;
  if ((resto === 10) || (resto === 11)) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = (soma * 10) % 11;
  if ((resto === 10) || (resto === 11)) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) return false;

  return true;
}

function verificaCPF() {
  const cpf = document.getElementById('cpf').value;
  const resultado = document.getElementById('resultado');

  if (validaCPF(cpf)) {
      resultado.innerText = 'CPF válido!';
      resultado.style.color = 'green';
  } else {
      resultado.innerText = 'CPF inválido!';
      resultado.style.color = 'red';
  }
}
