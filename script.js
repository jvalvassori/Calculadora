window.onload = init;

function init() {
    var numeros = document.querySelectorAll("#btn-numerico");
    numeros.forEach(function(botao) {
      botao.addEventListener("click", function() {
        inserir(botao.textContent);
      });
    });
  
    var operadores = document.querySelectorAll("#btn-operador");
    operadores.forEach(function(botao) {
      botao.addEventListener("click", function() {
        inserir(botao.textContent);
      });
    });
  
    var botaoLimpar = document.getElementById("btn1");
    botaoLimpar.addEventListener("click", limpar);
  
    var botaoVoltar = document.getElementById("btn2");
    botaoVoltar.addEventListener("click", voltar);
  
    var botaoResultado = document.getElementById("btn16");
    botaoResultado.addEventListener("click", resultado);

    var botaoPonto = document.getElementById("btn18");
    botaoPonto.addEventListener("click", function() {
      inserirPonto();
    });

  }
  
  function inserir(num) {
    var insere = document.querySelector(".result");
    insere.innerHTML += num;
  }
  
  function limpar() {
    var insere = document.querySelector(".result");
    insere.innerHTML = "";
  }
  
  function inserirPonto() {
    var insere = document.querySelector(".result");
    if (insere.innerHTML.indexOf(".") === -1) {
      if (insere.innerHTML === "") {
        insere.innerHTML += "0.";
      } else {
        insere.innerHTML += ".";
      }
    }
}
  function voltar() {
    var insere = document.querySelector(".result");
    insere.innerHTML = insere.innerHTML.slice(0, -1);
  }

  function resultado() {
    var insere = document.querySelector(".result");
    var expressao = insere.innerHTML;
  
    if (expressao) {
      var resultado = avaliarExpressao(expressao);
      if (resultado !== null) {
        insere.innerHTML = resultado;
      } else {
        insere.innerHTML = "Expressão inválida";
      }
    } else {
      insere.innerHTML = "Nenhum comando digitado";
    }
  }
  
  function avaliarExpressao(expressao) {
    try {
      
      var resultado = Function(`'use strict'; return (${expressao})`)();

      if (Number.isFinite(resultado)) {
        return resultado;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }

  