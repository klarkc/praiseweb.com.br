---
title: Como eu aprendi a gostar de funções
date: 2021-04-09
published: true
cover_image: /images/grandcanyon2016.jpg
cover_alt: 
---

Esse é o primeiro artigo de uma série que pretendo escrever sobre a minha experiência com programação funcional. Nessa primeira parte eu conto minha história com o CakePHP

---

**Série**

- Como eu aprendi a gostar de funções
- Santo Graal: seres que saibam resolver problemas de forma eficiente
- Programação funcional é utopia?
- TDD e programação funcional
- Refatoração e programação funcional
- E a tal da injeção e inversão de dependência?

Nos idos dos anos dez (2010) estava eu desenvolvendo um projeto relativamente grande para um cliente usando o famigerado CakePHP (então na sua versão 2.x). Ele prometia ser o framework que tornaria toda a minha vida mais fácil: baixa curva de aprendizado, totalmente orientado a objetos, arquitetura MVC com aquelas belas divisões de camadas, convenção sobre configuração, código escalável, um CLI adorável, etc. Finalmente poderia colocar em prática tudo que tinha aprendido na faculdade sobre arquitetura, sobre testes, sobre reaproveitamento de software, enfim, melhores práticas. Me planejei muito para isso! Fizemos aquele famoso [BEDUF](https://k21.global/blog/bduf) ~~como todo mundo já fez na vida, vai admite~~!

Começamos modelando o banco de dados, claro, afinal não queremos ser pegos de surpresa! Depois de muitas idas e vindas, reuniões, entendimentos e desentendimentos, chegamos a um consenso sobre como começar a lidar com todas aquelas regras de negócio. Nosso [modelo relacional](https://pt.wikipedia.org/wiki/Modelo_relacional) estava maravilhoso, parecia que poderíamos conquistar o mundo com ele.

Então partimos para o código, a meta era conseguir 80% de cobertura nos testes, adotando 100% das boas práticas do framework, se estava na documentação do CakePHP, era lei. No começo era lindo, precisava adicionar lógica de negócio? Claro que era na Model. Precisava reaproveitar código entre as Models? Simples! ModelBehavior! E assim seguimos, não era lento, e o fato de você estar colocando muito código de PESO (sabe aquela classe que herda cinco outras classes, uma parente da outra) dava um sentimento gostosinho de, "nossa olha como eu coloco tanto código em produção".

O tempo todo eu fico me perguntando se estou sendo ingênuo, é quase como um mantra dentro da minha cabeça, sempre medindo, sempre ponderando, sempre me questionando. Mas esse sou eu hoje, nessa época a confiança era o meu crachá.