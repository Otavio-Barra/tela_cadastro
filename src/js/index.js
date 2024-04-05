const btnLoginModal = document.querySelector("[data-btn-login-modal]");
const btnEntrarConta = document.querySelector("[data-btn-entrar]");
const sectionBemVindo = document.querySelector("[data-modal-inicio]");

btnLoginModal.addEventListener("click", () => {
  const LoginModal = document.querySelector("[data-modal-login]");
  sectionBemVindo.classList.add("hidden");
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

///////////////////////////////////////////

const btnCadastrarModal = document.querySelector("[data-btn-cadastrar-modal]");
const btncCadastro = document.querySelector("[data-btn-cadastro]");

btnCadastrarModal.addEventListener("click", () => {
  const cadastroModal = document.querySelector("[data-modal-cadastro]");
  sectionBemVindo.classList.add("hidden");
  cadastroModal.classList.remove("hidden");
});

btncCadastro.addEventListener("click", () => {
  const teste = document.querySelectorAll("[data-cadastro]");
  const user = new Usuario();
  user.validaCadastro(teste[0], teste[1], teste[2]);
  console.log(user);
});
const regexEmail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// function validaCadastro(input) {
//   input.forEach((item) => {
//     switch (item.id) {
//       case "user":
//         if (item.value !== "" && item.value.length > 5) {
//           item.parentElement.classList.remove("bg-red-700");
//         } else {
//           item.parentElement.classList.add("bg-red-700");
//         }
//         break;
//       case "email":
//         if (item.value.match(regexEmail)) {
//           item.parentElement.classList.remove("bg-red-700");
//           console.log("email");
//         } else if (!item.value.match(regexEmail)) {
//           item.parentElement.classList.add("bg-red-700");
//         }
//         break;
//       case "password":
//         if (item.value !== "" && item.value.length > 5) {
//           item.parentElement.classList.remove("bg-red-700");
//         } else {
//           item.parentElement.classList.add("bg-red-700");
//         }
//         break;
//       default:
//         break;
//     }
//   });
// }

class Usuario {
  constructor(nome, email, senha) {
    this.Nome = nome;
    this.Email = email;
    this.Senha = senha;
  }

  validaCadastro(inputUser, inputEmail, inputSenha) {
    this.validaName(inputUser);
    this.validaSenha(inputSenha);
  }

  validaName(inputUser) {
    if (inputUser.value === "" && inputUser.value < 6) {
      inputUser.parentElement.classList.add("bg-red-700");
    } else {
      inputUser.parentElement.classList.remove("bg-red-700");
      this.Nome = inputUser.value;
    }
  }
  validaSenha(inputSenha) {
    if (inputSenha.value === "" && inputSenha.value < 6) {
      inputSenha.parentElement.classList.add("bg-red-700");
    } else {
      inputSenha.parentElement.classList.remove("bg-red-700");
      this.Senha = inputSenha.value;
    }
  }

  setError(index) {}
}
