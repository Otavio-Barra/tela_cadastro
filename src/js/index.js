import User from "./User.js";

const btnLoginModal = document.querySelector("[data-btn-login-modal]");
const btnEntrarConta = document.querySelector("[data-btn-entrar]");
const sectionBemVindo = document.querySelector("[data-modal-inicio]");
const LoginModal = document.querySelector("[data-modal-login]");
const btnCadastrarModal = document.querySelector("[data-btn-cadastrar-modal]");
const btnCadastro = document.querySelector("[data-btn-cadastro]");
const cadastroModal = document.querySelector("[data-modal-cadastro]");
let touchDevice = "ontouchstart" in document.documentElement;
const cadastroToHomeBtn = document.querySelector("[data-cadastro-home]");
const loginToHomeBtn = document.querySelector("[data-login-home]");

cadastroToHomeBtn.addEventListener("click", () =>
  switchModal(cadastroModal, sectionBemVindo)
);
loginToHomeBtn.addEventListener("click", () =>
  switchModal(LoginModal, sectionBemVindo)
);

function switchModal(sectionAtual, sectionAlternativa) {
  sectionAtual.classList.add("hidden");
  sectionAtual.classList.add("lg:hidden");
  sectionAlternativa.classList.remove("hidden");
  sectionAlternativa.classList.remove("lg:hidden");
}

btnLoginModal.addEventListener("click", () => {
  if (touchDevice) {
    switchModal(sectionBemVindo, LoginModal);
  } else {
    switchModal(cadastroModal, LoginModal);
  }
});

btnEntrarConta.addEventListener("click", login);

function login() {
  const campos = document.querySelectorAll("[data-login]");
  const inputName = campos[0];
  const inputSenha = campos[1];
  const validacao = validaLogin(getUser(), inputName, inputSenha);
  if (validacao) {
    alert("logando");
    window.location.replace("./logado.html");
  }
}

function validaLogin(users, inputName, inputSenha) {
  const userName = users.find((user) => {
    if (user.Nome === inputName.value) {
      inputName.parentElement.classList.remove("bg-red-700");
      return user;
    } else {
      inputName.parentElement.classList.add("bg-red-700");
      return false;
    }
  });
  try {
    if (userName.Senha === inputSenha.value) {
      inputSenha.parentElement.classList.remove("bg-red-700");
      return true;
    } else {
      inputSenha.parentElement.classList.add("bg-red-700");
      return false;
    }
  } catch (err) {
    inputSenha.parentElement.classList.add("bg-red-700");
  }
}

btnCadastrarModal.addEventListener("click", () => {
  if (touchDevice) {
    switchModal(sectionBemVindo, cadastroModal);
  } else {
    switchModal(LoginModal, cadastroModal);
  }
});

btnCadastro.addEventListener("click", saveNewUser);

function saveNewUser() {
  const campos = document.querySelectorAll("[data-cadastro]");
  const user = new User();
  user.validaCadastro(campos[0], campos[1], campos[2]);
  const userExist = checkExistUser(getUser(), campos[0].value, campos[1].value);
  if (user.valid === true && !userExist) {
    saveUserLocalStorage(user);
    alert(`Usuário cadastrado com sucesso!`);
    if (touchDevice) {
      switchModal(cadastroModal, sectionBemVindo);
    }
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
