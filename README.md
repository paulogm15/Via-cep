# Consulta de CEP utilizando AJAX, Fetch API e Async/Await

Este projeto implementa uma interface para consultar dados de **CEP** através da [API ViaCep](https://viacep.com.br/) utilizando três abordagens diferentes: **AJAX (XMLHttpRequest)**, **Fetch API** e **Async/Await**.

## Estrutura do Projeto

1. **`index.html`**: Página HTML que contém o formulário e três botões para cada método.
2. **`xmlhttpResquest.js`**: Script que realiza a consulta utilizando **AJAX**.
3. **`fetchAPI.js`**: Script que faz a consulta utilizando **Fetch API**.
4. **`asyncAwait.js`**: Script que usa **Async/Await** para a busca.

---

## 📋 Assincronismo - Métodos de Requisição Assíncrona

### XMLHttpResquest

XMLHttpRequest é um objeto que permite a transferência de dados entre cliente e servidor sem recarregar a página inteira, essencial para a programação AJAX. Embora seu nome sugira uso apenas com XML, ele suporta diferentes tipos de dados e protocolos além do HTTP, como *file* e *ftp*.

### Fetch API

A **Fetch API** é uma evolução do XMLHttpRequest, oferecendo uma interface mais flexível para buscar recursos. Ela define objetos como **Request** e **Response**, usados em diversos contextos (como service workers e Cache API) e unifica conceitos como **CORS** e cabeçalhos HTTP.

O método principal é **fetch()**, disponível em interfaces como **Window** e **WorkerGlobalScope**, retornando uma **promessa** com a resposta da solicitação. Ele aceita um URL como argumento obrigatório e um objeto de opções como opcional. Também há métodos para manipular o corpo de respostas e requisições.

**Principais interfaces**:  

- **GlobalFetch**: Contém o método fetch().  
- **Headers**: Manipula cabeçalhos.  
- **Request**: Representa uma solicitação.  
- **Response**: Representa uma resposta.  
- **Body**: Define o tratamento do corpo da requisição ou resposta.

### Async Function

A **async function** define uma função assíncrona que retorna uma **Promise**. Ela pode ser declarada de forma tradicional ou como uma expressão.

**Sintaxe:**  

```javascript
async function nome([param1, param2, ...]) {
   instruções
}
```

- **Nome:** Nome da função.
- **Parâmetros:** Valores passados para a função.
- **Instruções:** Corpo da função com a lógica desejada.

**Descrição:**  
Ao ser chamada, uma função assíncrona retorna uma **Promise**:

- Se retornar um valor, a **Promise** é resolvida com esse valor.
- Se lançar uma exceção, a **Promise** é rejeitada.

Dentro da função, é possível usar **await**, que pausa a execução até que a **Promise** resolva, retomando após isso com o valor obtido.

**Objetivo:**  
As funções **async/await** simplificam o uso de Promises, permitindo um estilo mais próximo ao código síncrono e facilitando a manipulação de várias Promises em conjunto, similar à combinação de generators com Promises.

---

## **Comparação dos Métodos**

| Método          | Vantagens                           | Desvantagens                                       |
| --------------- | ----------------------------------- | -------------------------------------------------- |
| **AJAX**        | Compatível com navegadores antigos. | Sintaxe mais verbosa e difícil de ler.             |
| **Fetch API**   | Código mais legível e moderno.      | Não funciona em navegadores antigos sem polyfills. |
| **Async/Await** | Facilidade na leitura e manutenção. | Requer conhecimento de **Promises** e **ES6+.**    |

---

## 📋 Outros Tópicos

### 1. **Hoisting**

**Descrição**: Hoisting refere-se ao processo pelo qual o interpretador parece mover a declaração de funções, variáveis, classes ou importações para o topo do escopo, antesda execução do código.
Hoisting não é um termo definido na especificação do ECMAScript. A especificação define um grupo de declarações como HoistableDeclararion, mas isso inclui apenas declarações de `function`, `function*`, `async function`, e `async function*`. O hoisting também costuma ser considerado um recurso das declarações `var`, embora de uma forma diferente. Em termos coloquiais, qualquer um dos comportamentos a seguir pode ser considerado como hoisting:

1. Ser capaz de user o valor de uma variável em seu escopo antes da linha em que é declarada. ("Value hoisting")
2. Poder fazer referência a uma variável em seu escopo antes da linha em que ela é declarada, sem lançar um `ReferenceError`, mas o valor é sempre `undefined` ("Declaration hoisting")
3. A declaração da variável causa alterações de comportamento em seu escopo antes da linha em que é declarada
4. Os efeitos colaterais de uma declaração são produzidos antes da avaliação do restante do código que a contém


##### **Resumo dos Tipos de Hoisting**

| **Tipo**                 | **Hoisting**     | **Valor Inicial**                             |
| ------------------------ | ---------------- | --------------------------------------------- |
| `var`                    | Sim              | `undefined`                                   |
| `let`                    | Sim              | Erro se acessada antes da inicialização (TDZ) |
| `const`                  | Sim              | Erro se acessada antes da inicialização (TDZ) |
| **Function Declaration** | Sim              | Função disponível                             |
| **Function Expression**  | Sim (como `var`) | `undefined` até ser atribuída                 |

---

## **Exemplos**

1. **`var`**
```javascript
console.log(myVar); // undefined
var myVar = 5;
console.log(myVar); // 5
```
- **Declaração içada, mas valor inicial é `undefined`**

---

2. `let` e `const`
```javascript
console.log(myLet); // Erro: Cannot access 'myLet' before initialization
let myLet = 10;
```
- Variáveis são içadas, mas entram em **"zona morta temporal" (TDZ)** e geram erro se acessadas antes da inicialização.

---

3. **Function Declaration**
```javascript
sayHello(); // Funciona: "Hello!"

function sayHello() {
  console.log("Hello!");
}
```
- **Funções declaradas** são içadas e podem ser chamadas antes da definição.

---

4. **Function Expression**
```javascript
sayHello(); // Erro: sayHello não é uma função

var sayHello = function () {
  console.log("Hello!");
};
```
- A variável é içada, mas seu valor inicial é `undefined`. Por isso, chamar a função antes da atribuição gera erro.

---

### 2. **Arrow Functions vs. Funções Normais**

- **Descrição**: Introduzidas no **ES6**, as **Arrow Functions** são uma sintaxe mais curta e moderna para declarar funções. Embora úteis, diferem das funções tradicionais (normais) em alguns aspectos importantes, especialmente no comportamento do contexto de `this` e no uso de `arguments`.

#### **Diferenças entre Arrow Functions e Funções Normais**

| Aspecto                  | Arrow Function                              | Função Normal                                   |
| ------------------------ | ------------------------------------------- | ----------------------------------------------- |
| **Sintaxe**              | Concisa e fácil para funções simples.       | Mais verbosa.                                   |
| **`this` Contexto**      | `this` é herdado do escopo externo.         | `this` depende de como a função é chamada.      |
| **Objeto `arguments`**   | Não possui `arguments`.                     | Acesso ao objeto `arguments`.                   |
| **Uso como Construtora** | Não pode ser usada como função construtora. | Pode ser usada para criar instâncias com `new`. |
| **Métodos em Objetos**   | Não recomendada para métodos de objetos.    | Pode ser usada como método em objetos.          |

#### **Exemplos**

1. **Diferença no uso do `this`:**

```javascript
// Função normal: 'this' depende de como a função é chamada.
const obj = {
  valor: 42,
  func: function() {
    console.log(this.valor);
  },
};
obj.func(); // 42

// Arrow function: 'this' é herdado do escopo em que foi criada.
const obj2 = {
  valor: 42,
  func: () => {
    console.log(this.valor); // 'this' refere-se ao contexto externo, não ao objeto.
  },
};
obj2.func(); // undefined
```

2. **Callback com arrow function:**

```javascript
// Arrow function como callback em um evento.
const button = document.getElementById('meuBotao');
button.addEventListener('click', () => console.log('Botão clicado!'));
```

3. **Objeto `arguments`:**

```javascript
// Função normal: pode acessar o objeto 'arguments'.
function soma() {
  console.log(arguments);
}
soma(1, 2, 3); // [1, 2, 3]

// Arrow function: não possui 'arguments'.
const somaArrow = () => {
  console.log(arguments); // Erro: 'arguments' não existe aqui.
};
somaArrow(1, 2, 3);
```

#### **Casos de Uso Ideais**

- **Arrow Functions**:

  - Callbacks (event listeners, `map`, `filter`, `reduce`).
  - Funções curtas e simples, especialmente em componentes React.
  - Funções em escopos onde é necessário herdar o contexto de `this`.
- **Funções Normais**:

  - Métodos de objetos que precisam do próprio contexto.
  - Funções construtoras (usadas com `new`).
  - Funções que precisam acessar o objeto `arguments`.

|**Vantagens**|**Desvantagens**|### 1. **Hosting (Hospedagem de Aplicações)**

- **Descrição**: Processo de publicação de sites ou aplicações em servidores para torná-los acessíveis na web.
- **Exemplos de Serviços**: Vercel, Netlify, Heroku, AWS, DigitalOcean.

|**Vantagens**|**Desvantagens**|
|---|---|
|Acesso global e disponibilidade online.|Pode envolver custos contínuos.|
|Diversos tipos de hospedagem para diferentes necessidades (compartilhada, VPS, cloud).|Hospedagem compartilhada pode afetar desempenho.|
|Escalabilidade com servidores em nuvem.|Complexidade na configuração em VPS ou Cloud.|

|---|---|
|Sintaxe curta e fácil de ler.|Não podem ser usadas como funções construtoras.|
|Mantêm o contexto de `this` do escopo externo.|Não possuem o objeto `arguments`.|
|Ideais para callbacks e funções de uso rápido.|Não são apropriadas para métodos em objetos.|

---

### 3. **Desestruturação (Destructuring)**

- **Descrição**: Técnica em ES6 para extrair valores de arrays e objetos e atribuí-los a variáveis.

|**Vantagens**|**Desvantagens**|
|---|---|
|Código mais limpo e conciso.|Pode ser confuso em estruturas complexas.|
|Reduz a necessidade de múltiplas atribuições.|Pode gerar erros se o nome da propriedade estiver errado.|
|Fácil extração de dados de objetos e arrays.|Não é suportado por versões antigas do JavaScript.|

```javascript
const pessoa = { 
 nome: 'Paulo',
 idade: 28
 };
const { nome, idade } = pessoa;
console.log(nome); // Paulo
```

---

### 4. **Closure**

- **Descrição**: Um **Closure** ocorre quando uma função "lembra" do ambiente em que foi criada, mesmo após esse ambiente ter sido executado.

| **Vantagens**                                           | **Desvantagens**                                   |
| ------------------------------------------------------- | -------------------------------------------------- |
| Permite encapsular variáveis e manter estados privados. | Pode dificultar a depuração de escopo.             |
| Útil para criar variáveis privadas.                     | Pode causar problemas de memória se mal utilizado. |
| Ajuda a manter dados entre execuções da função.         | Uso excessivo pode tornar o código confuso.        |

**Exemplo**:

```javascript
function criarContador() {
  let contador = 0;
  return () => {
    contador++;
    console.log(contador);
  };
}

const contador1 = criarContador();
contador1(); // 1
contador1(); // 2
```

---

## 🔗 Referências

- [API ViaCep](https://viacep.com.br/)
- [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Hoisting - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [Arrow Functions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Destructuring - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Closures - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [Web Hosting - Wikipedia](https://en.wikipedia.org/wiki/Web_hosting_service)
