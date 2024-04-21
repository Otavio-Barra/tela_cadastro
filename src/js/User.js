const mensagem = "este campo precisa de no  mínimo 6 caracteres";
const span = document.createElement("span");
span.textContent = mensagem;
span.classList.add("text-red-800");
class User {
  constructor(name, email, password) {
    this.user = name;
    this.Email = email;
    this.Senha = password;
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

export default User;
