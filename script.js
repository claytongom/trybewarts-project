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

const agree = document.getElementById('agreement');
const btnSubmitForm = document.getElementById('submit-btn');

agree.addEventListener('click', () => {
  if (btnSubmitForm.disabled === true) {
    btnSubmitForm.disabled = false;
  } else {
    btnSubmitForm.disabled = true;
  }
});



