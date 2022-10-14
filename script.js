function loginValidation() {
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

window.onload = function loadedPage() {
  const btnLogin = document.querySelector('#login');
  btnLogin.addEventListener('click', loginValidation);
};