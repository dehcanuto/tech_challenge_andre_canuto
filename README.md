![WedClass](.github/logo-oncar.svg)

![Version](https://img.shields.io/badge/1.0.0-beta?label=version)
![WedClass](https://img.shields.io/badge/powered_by-OnCar-29a1ff)
![NextJS version](https://img.shields.io/badge/NextJS-14.1.0-black?style=flat-square&logo=next.js&logoColor=white)
![NestJS version](https://img.shields.io/badge/NestJS-10.0.0-e0244f.svg?style=flat-square&logo=nestjs)

# ONCar - Tech Challenge

A **ONCar** está em busca de pessoas incríveis que integrem nossa equipe para criarmos incríveis produtos digitais, e gostaríamos de ter você aqui conosco.

Para iniciar o processo, pedimos um teste que não vai tomar muito do seu tempo e nos dará uma perspectiva da sua forma de trabalhar. Queremos entender seu nível de habilidade em todas as áreas envolvidas na construção de um projeto: **Front e Back.**

Você não precisa entregar ambos, mas qualquer adicional as suas habilidades específicas é interessante.

## 🛠️ Desenvolvido com
*  [NodeJS](https://nodejs.org/en/docs/) - Ambiente de execução JavaScript
*  [NextJS](https://nextjs.org/docs) - Framework web TypeScript para front-end
*  [NestJS](https://docs.nestjs.com/) - Framework TypeScript para back-end
*  [Tailwind CSS](https://tailwindcss.com/docs) - Framework para estilização

## Build

O projeto foi totalmente hospedado no Vercel.

- [Frontend](https://tech-challenge-andre-canuto.vercel.app/)
- [Backend NestJS](https://tech-challenge-andre-canuto-wlfc.vercel.app/)

## Guia da API

Voce pode baixar o Postman ou seguir o guia abaixo:



# Requisitos do desafio

Crie uma aplicação que permitirá a gestão de veículos com suas determinadas caracteristicas como:
* Modelo
* Marca
* Cor

Além das informações adicionais que achar necessária;

Crie uma simulação para financiamento deste veículo, 
solicitando dados do cliente, gerando um SCORE de aprovação aleatório de 1 a 999 permitindo assim ele obter o carro 
com formas de pagamentos específicas.

Crie uma API Restful, que permitirá:

- Veículo
  - **GET**: Listará todos ou apenas um veículo
  - **POST**: Deve inserir uma novo veículo.
  - **DELETE**: Remove um veículo

- Simulação
  - **POST**: Insere uma nova simulação para ser analisada

Quando o usuário inserir uma simulação, deve ter uma aprovação automática do sistema, que sua regra será:

Crie uma rotina que verificará a pontuação de crédito do usuário que será uma rotina que devolva uma pontuação **aleatória** entre 1 a 999, para ser utilizada como score de credito.

Por exemplo:

```
import random
random.randint(1, 999)
```

Sendo que, dependendo do score retornado a solicitação é aprovada ou não, também alterando o seu limite de crédito, que deverá seguir a seguinte lógica:

| Score     | Crédito                                        |
| --------- | ---------------------------------------------- |
| 1 a 299   | Reprovado                                      |
| 300 a 599 | 70% de entrada, 30% do comprometimento da renda|
| 600 a 799 | 50% de entrada, 25% do comprometimento da renda|
| 800 a 950 | 30% de entrada, 20% do comprometimento da renda|
| 951 a 999 | 100% de financiamento, taxa zero.              |

No Front, deverá ser listado todos os carros, com a possibilidade da inclusão de uma solicitação de crédito.

As rotas de alteração/deleção deverão ser expostas de alguma maneira, para serem utilizadas ou por um painel administrativo ou por ferramentas de requisições http (**POSTMAN**)

O **Back-End** do projeto deverá ser feito em **Golang ou Node.JS**, utilizando um framework de sua escolha.

O **Front-End** deverá ser feito a seu critério e justificando o porque da solução escolhida, nós achamos o React interessante.

Qualquer dúvida sobre os requisitos, você pode enviar um e-mail para lucas.melo@oncar.com.br

# Como fazer?

Sugerimos um prazo de 7 dias para a entrega. Caso precise de mais nos avise e Justifique.

Sobre a entrega:

- **Pedimos que você nos envie um e-mail, para sinalizar seu início no desenvolvimento do desafio.**
- Seu código deve estar disponível em um repositório no Github.
- Você pode utilizar plataformas como Heroku ou AWS para nos mostrar a aplicação funcionando em produção.
- Quando estiver pronto nos envie o link do repositório.

Boa Sorte!