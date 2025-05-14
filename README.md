<h1 align="center">Flip The Coin | devChallenges</h1>

<div align="center">
   Solução para o desafio <a href="https://devchallenges.io/challenge/flip-the-coin" target="_blank">Flip The Coin</a> do <i>site</i> <a href="http://devchallenges.io" target="_blank">devChallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://hugo-moreira91.github.io/flip-coin/">
      Solução
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenge/flip-the-coin">
      Desafio
    </a>
  </h3>
</div>

## Tabela de Conteúdos

- [Visão geral](#visão-geral)
  - [O que aprendi](#o-que-aprendi)
  - [Recursos úteis](#recursos-úteis)
- [Construído com](#construído-com)
- [Características](#características)
- [Autor](#autor)

## Visão geral

![demonstração](./public/medias/project-flip-coin-demonstration.gif)

Acima temos uma breve demonstração do projeto em funcionamento. 

Seu funcionamento gira em torno do botão "RANDOM": ao pressioná-lo, gera-se randomicamente os lados de uma moeda, *Heads* (Cara) e *Tails* (Coroa).

### O que aprendi

Além da estruturação do projeto via HTML, estilização e responsividade através do CSS, o foco maior foi em planejar e construir o funcionamento do projeto via JavaScript.

Após selecionar o elemento *button* do DOM via método *getElementById* adicionei a ele um "ouvinte" através do evento *addEventListener*, detectando os cliques sobre o botão.

A cada clique, o método *random()* da biblioteca *Math* gera um valor entre 0 (zero) e 1 (um). Definiu-se que, para valores menores que 0.5 teríamos o lado Cara (Heads). Logo, para valores entre 0.5 e 1, o lado Coroa (Tails).

Adicionei ao projeto um contador para sequências de Caras e Coroas.

Para exibir os elementos HTML na tela, utilizei a propriedade *innerHTML*.

### Recursos úteis

- [Evento *addEventListener*](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener): artigo da MDN Web Docs que traz a explicação, sintaxe e exemplos de uso do evento em questão;

- [Método Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random): artigo da MDN explicando o uso do método *random* da biblioteca *Math*;

- [Element.innerHTML](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML): artigo da MDN o qual traz bons exemplos de uso da propriedade *innerHTML*, além da diferença do *textContent*.

### Construído com

- Marcações semânticas HTML
- Propriedades personalizadas CSS
- Flexbox
- JavaScript
- Responsividade

## Características

Este projeto foi desenvolvido para submissão de um desafio do *site* [DevChallenges](https://devchallenges.io/challenges-dashboard).

## Autor

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/129432443?s=400&u=ff3281ddf2cf31d4a71b01d46fcb4d8452398749&v=4" alt="Foto do autor" width="128" style="border-radius: 50%;">
</p>

<p align="center">
  <a href="https://github.com/Hugo-Moreira91">Hugo Moreira 🚀</a>
</p>

<p align="center">
  Feito com ❤️
</p>

Entre em contato! ✍🏽

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Hugo%20Moreira-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/hugo-c%C3%A9sar-santos-moreira-a10823248/)
[![Gmail Badge](https://img.shields.io/badge/-hugo.cesar91@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:hugo.cesar91@gmail.com)](mailto:hugo.cesar91@gmail.com)
