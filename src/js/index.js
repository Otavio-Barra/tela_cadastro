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
  // console.log(teste);
  teste.forEach((item) => {
    // console.log(item.value);
    if (item.value === "") {
      console.log(item.parentElement);
      item.parentElement.classList.add("bg-red-700");

      return;
    }
  });
  // if (user && password) {
  //   //fazer codigo de autenticacao depois
  // } else {
  //   console.log("tem n");
  // }
});
