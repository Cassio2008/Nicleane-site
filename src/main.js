const textElement = document.querySelector(".typing-text");

const text = "Feliz Dia das Mães 💖";

let index = 0;

/* EFEITO DE DIGITAÇÃO */
function typingEffect(){

  if(index < text.length){

    textElement.textContent += text.charAt(index);

    index++;

    setTimeout(typingEffect, 100);
  }

}

typingEffect();

/* BOTÃO CONTINUAR */
const continueBtn = document.getElementById("continueBtn");

const intro = document.getElementById("intro");

const mainContent = document.getElementById("mainContent");

continueBtn.addEventListener("click", () => {

  intro.classList.add("fade-out");

  setTimeout(() => {

    intro.style.display = "none";

    mainContent.classList.remove("hidden");

  }, 1000);

});