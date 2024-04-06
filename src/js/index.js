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
const mensagem = "este campo precisa de no  mínimo 6 caracteres";
const span = document.createElement("span");
span.textContent = mensagem;
span.classList.add("text-red-800");

btnCadastrarModal.addEventListener("click", () => {
  const cadastroModal = document.querySelector("[data-modal-cadastro]");
  sectionBemVindo.classList.add("hidden");
  cadastroModal.classList.remove("hidden");
});

btncCadastro.addEventListener("click", () => {
  const teste = document.querySelectorAll("[data-cadastro]");
  const user = new Usuario();
  user.validaCadastro(teste[0], teste[1], teste[2]);
  if (user.valid === true) {
    saveUser(user);
    alert(`Usuário cadastrado com sucesso!`);
  }
});

function getUser() {
  return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function saveUser(user) {
  const users = getUser();
  users.push(user);
  localStorage.setItem("usuarios", JSON.stringify(users));
}

class Usuario {
  constructor(nome, email, senha) {
    this.user = nome;
    this.Email = email;
    this.Senha = senha;
    this.valid = false;
  }

  validaCadastro(inputUser, inputEmail, inputSenha) {
    const user = this.validaName(inputUser);
    const pass = this.validaSenha(inputSenha);
    const email = this.validaEmail(inputEmail);
    console.log(user);
    if (user && pass && email) {
      console.log("validado");
      return (this.valid = true);
    }
  }

  validaName(inputUser) {
    if (inputUser.value === "" && inputUser.value < 6) {
      return this.setError(inputUser);
    } else {
      this.Nome = inputUser.value;
      return this.removeError(inputUser);
    }
  }
  validaSenha(inputSenha) {
    if (inputSenha.value === "" && inputSenha.value < 6) {
      return this.setError(inputSenha);
    } else {
      this.Senha = inputSenha.value;
      return this.removeError(inputSenha);
    }
  }
  validaEmail(inputEmail) {
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (inputEmail.value.match(regexEmail)) {
      inputEmail.parentElement.classList.remove("bg-red-700");
      this.Email = inputEmail.value;
      return true;
    } else {
      inputEmail.parentElement.classList.add("bg-red-700");
      return false;
    }
  }

  setError(input) {
    console.log(input.id + " tem erro!");
    if (input.value === "" && input.value < 6) {
      input.parentElement.classList.add("bg-red-700");
      if (!input.parentElement.parentElement.querySelector("span")) {
        input.parentElement.parentElement.appendChild(span);
      }
      return false;
    }
  }

  removeError(input) {
    input.parentElement.classList.remove("bg-red-700");
    input.parentElement.parentElement.removeChild(span);
    return true;
  }
}

console.log(localStorage);
