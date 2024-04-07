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
function switchModal(sectionAtual, sectionAlternativa) {
  sectionAtual.classList.add("hidden");
  sectionAlternativa.classList.remove("hidden");
}

///////////////////////////////////////////

const btnCadastrarModal = document.querySelector("[data-btn-cadastrar-modal]");
const btncCadastro = document.querySelector("[data-btn-cadastro]");
const cadastroModal = document.querySelector("[data-modal-cadastro]");
const mensagem = "este campo precisa de no  mínimo 6 caracteres";
const span = document.createElement("span");
span.textContent = mensagem;
span.classList.add("text-red-800");

btnCadastrarModal.addEventListener("click", () => {
  sectionBemVindo.classList.add("hidden");
  cadastroModal.classList.remove("hidden");
  switchModal(sectionBemVindo, cadastroModal);
});

btncCadastro.addEventListener("click", saveNewUser);

function saveNewUser() {
  const campos = document.querySelectorAll("[data-cadastro]");
  const user = new Usuario();
  user.validaCadastro(campos[0], campos[1], campos[2]);
  const teste = checkExistUser(getUser(), campos[0].value, campos[1].value);
  if (user.valid === true && !teste) {
    saveUserLocalStorage(user);
    alert(`Usuário cadastrado com sucesso!`);
    console.log(localStorage);
    switchModal(cadastroModal, sectionBemVindo);
  }
}

function checkExistUser(users, nomeUser, emailUser) {
  return users.find((user) => {
    if (user.Email === emailUser) {
      alert("Este email já esta em uso!");
      return true;
    } else if (user.Nome === nomeUser) {
      alert("Este nome já esta em uso!");
      return true;
    } else {
      console.log("nao encontrou o usuario");
      return false;
    }
  });
}

function getUser() {
  return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function saveUserLocalStorage(user) {
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
    if (user && pass && email) {
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
    input.parentElement.classList.add("bg-red-700");
    if (!input.parentElement.parentElement.querySelector("span")) {
      input.parentElement.parentElement.appendChild(span);
    }
    return false;
  }

  removeError(input) {
    input.parentElement.classList.remove("bg-red-700");
    if (input.parentElement.parentElement.querySelector("span")) {
      input.parentElement.parentElement.removeChild(span);
    }
    return true;
  }
}

console.log(localStorage.usuarios);

const btnProvisorio = document.querySelector(".excluir");
btnProvisorio.addEventListener("click", () => {
  localStorage.clear();
  console.log(localStorage);
});
