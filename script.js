//Controlador da musica

let musicaAtiva = false;

function ativarDesativarMusica() {
  let musica = document.getElementById("musica");

  if (musicaAtiva) {
    musica.pause();
    musicaAtiva = false;
  } else {
    musica.play();
    musicaAtiva = true;
  }
}

//Logica para pegar o numero

let numeroAleatorio;
let botaoNumero;
let numeroDeTentativas = 0;
let errou;
let acertou;
let telaToda;
let ulTelaToda;

do {
  function escolherNumero(event) {
    let botaoNumero = Number(event.target.getAttribute("value"));
    console.log("Numero Sorteado " + botaoNumero);

    // Logica para gerar o numero

    numeroAleatorio = Math.floor(Math.random() * 1);
    console.log("Numero Aleatório " + numeroAleatorio);

    // Estrutura de decisão de comparação e adição de classes.

    if (botaoNumero === numeroAleatorio) {
      numeroDeTentativas++;
      acertou = document.getElementById("addTextoTelaVencedor");
      acertou.innerText = "Parabéns você advinhou o número em " + numeroDeTentativas + " tentativas";

      acertou.classList.add("textoTelaVencedor");
      setTimeout(function () {
        acertou.classList.remove("textoTelaVencedor");
      }, 1000);

      telaToda = document.getElementById("addTelaVencedor");
      telaToda.classList.add("telaToda");

      ulTelaToda = document.getElementById("liBotao");
      ulTelaToda.classList.add("comTelaToda");
      ulTelaToda.classList.remove("semTelaToda");

      errou = document.getElementById("mensagemErrouAcertou");
      errou.innerText = "Palmas palmas uhuu!";
    } else {
      errou = document.getElementById("mensagemErrouAcertou");
      errou.innerText = "Errou, Tente novamente!";

      ulTelaToda = document.getElementById("liBotao");
      ulTelaToda.classList.remove("comTelaToda");
      ulTelaToda.classList.add("semTelaToda");

      errou.classList.add("h2Animacao");
      setTimeout(function () {
        errou.classList.remove("h2Animacao");
      }, 1000);
      numeroDeTentativas++;
    }
  }
} while (botaoNumero != numeroAleatorio);

function novaRodada() {
  telaToda.classList.remove("telaToda");

  ulTelaToda.classList.remove("comTelaToda");
  ulTelaToda.classList.add("semTelaToda");

  acertou.innerText = "";

  errou.innerText = "Resultado da partida anterior " + numeroDeTentativas + " tentativas";

  numeroDeTentativas = 0;
}
