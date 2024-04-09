# Documentação do Projeto - CoreNotes

Este documento tem como objetivo fornecer instruções claras sobre como configurar e executar o projeto, além de fornecer informações sobre as tecnologias utilizadas.

## Instalação

### Pré-requisitos

Certifique-se de ter o Node.js e o gerenciador de pacotes Yarn instalados em sua máquina antes de prosseguir.

### Passos de Instalação

1. Clone este repositório em sua máquina local:

    ```bash
    git clone https://github.com/theronaldostar/core-notes.git
    ```

2. Navegue até a pasta raiz do projeto:

    ```bash
    cd nome-do-projeto
    ```

3. Instale as dependências do projeto usando Yarn:

    ```bash
    yarn install
    ```

4. Na pasta `apps/api/backup`, você encontrará um arquivo `.sql` contendo o banco de dados e as tabelas necessárias. Certifique-se de importá-lo em seu sistema de banco de dados MySQL.

5. Crie um arquivo `.env` na pasta `apps/api` e forneça as configurações necessárias, como credenciais de banco de dados, chaves de API, etc.

## Execução do Projeto

Após a conclusão da instalação e configuração inicial, você está pronto para iniciar o projeto.

1. Abra o terminal na raiz do projeto.

2. Execute o seguinte comando para iniciar o servidor:

    ```bash
    yarn dev
    ```

Isso iniciará o servidor API/Web.

## Tecnologias Utilizadas

### Front-End

-   Next.js: Framework React para renderização do lado do servidor.
-   Turbo: Biblioteca JavaScript para aceleração do tempo de renderização.

### Back-End

-   Node.js: Ambiente de execução JavaScript do lado do servidor.
-   Express: Framework web para Node.js.
-   MySQL: Sistema de gerenciamento de banco de dados relacional.
-   Nodemon + ts-node: Ferramentas para reinicialização automática do servidor durante o desenvolvimento e suporte a TypeScript.

Obrigado por considerar este projeto! Em caso de dúvidas ou problemas, não hesite em entrar em contato!

### Email:

-   ronaldo.rs44@gmail.com
