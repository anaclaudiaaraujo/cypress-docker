# Automação de testes utilizando Cypress com Docker

Este projeto demonstra como configurar e executar testes automatizados utilizando o framework Cypress em um ambiente Docker. O objetivo é facilitar a execução de testes em diferentes ambientes, garantindo consistência e eficiência no processo de desenvolvimento.
Há inúmeras possibilidades de configuração, mas o foco deste projeto é apresentar uma configuração básica e funcional.


## Pré-requisitos
Certifique-se de ter os seguintes itens instalados na sua máquina:
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/anaclaudiaaraujo/cypress-docker.git
   cd cypress-docker
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute os testes:
    ```bash
    docker-compose up --build
    ```

4. Estrutura do projeto:
    ```bash
    .
    ├── .github/workflows
    ├── cypress
    │   ├── e2e
    │   ├── fixtures
    │   └── support
    ├── docker-compose.yml
    ├── Dockerfile
    ├── package.json
    └── README.md
    ```