# React_ES_Trabalho
Esboço de aplicativo para estudo da biblioteca.<br>
Simulação de SPA com React e React-Router

## Demo
[MOVIX - Live DEMO](https://movix-movies.000webhostapp.com/)


## Vídeos

[Parte 1 - 4:55 min](https://www.youtube.com/watch?v=LF3GsXNsxQQ&feature=youtu.be)<br>
[Parte 2](https://movix-movies.000webhostapp.com/)<br>
[Parte 3](https://movix-movies.000webhostapp.com/)




# React #

[React](https://facebook.github.io/react/) é uma biblioteca open source construída pelo Facebook, que fornece a camada<br>
de view para dados renderizados em HTML.

React utiliza uma extensão de sintaxe do JavaScript chamada JSX.

 **Virtual DOM**
 
 O que faz com que o React seja famoso é a sua alta performance que é<br>
 conseguida através do [Virtual DOM](https://www.codecademy.com/articles/react-virtual-dom). Que é uma feature que garante que apenas<br>
 os elementos do DOM que sofreram alterações sejam atualizados.
 
 # Dependências Necessárias #
 
  - [React](https://facebook.github.io/react/);
  - [React-Router](https://www.npmjs.com/package/react-router);
  - [React-Router-DOM](https://www.npmjs.com/package/react-router-dom);
  - [Node.js](https://nodejs.org/en/) - ecosistema de pacotes;
  - [Webpack](https://webpack.github.io/) - gerenciamento de módulos e dependências;
  - [Babel](https://babeljs.io/) - tradução dos componentes JSX.
  
 
# Inicialização do Projeto #

Criação de diretório e instalação do React e ReactDOM

 ``` $ mkdir meu-projeto ```
 
 ``` $ npm install --save react react-dom ```
 
 ``` $ npm init # aperte enter em tudo que vier ```
 
 Instalação do Webpack
 
``` $ cd meu-projeto ```

``` npm install --save-dev webpack ```

``` npm install webpack -g ```

Crie um arquivo [webpack.config.js](https://github.com/brunaNobre/React_ES_Trabalho/blob/master/webpack.config.js)

Instalação do Babel

``` $ npm install --save-dev babel-core babel-loader babel-preset-react ```

Instalação do React-Rouer e React-Router-DOM

``` npm install --save react-router ```

``` npm install --save react-router-dom ```




