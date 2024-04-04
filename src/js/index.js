const btnLoginModal = document.querySelector("[data-btn-login-modal]");
const btnEntrarConta = document.querySelector("[data-btn-entrar]");
const sectionBemVindo = document.querySelector("[data-modal-inicio]");

btnLoginModal.addEventListener("click", () => {
  const LoginModal = document.querySelector("[data-modal-login]");
  sectionBemVindo.classList.add("hidden");
  // console.log(btnLoginModal.parentNode.parentNode);

  LoginModal.classList.remove("hidden");
});

btnEntrarConta.addEventListener("click", () => {
  const teste = document.querySelectorAll("[data-login]");
  validaInput(teste);
});

function validaInput(input) {
  input.forEach((item) => {
    if (item.value === "") {
      item.parentElement.classList.add("bg-red-700");
    } else {
      item.parentElement.classList.remove("bg-red-700");
    }
  });
}
