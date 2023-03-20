# Sistema Tá Pago!

# Equipe:
- Caio César Silva - Desenvolvedor full-stack
- Daniel Gomes Xavier - Desenvolvedor full-stack
- Gabriel Sacoman Teixeira Silva - Scrum Master e Desenvolvedor front-end
- Lucca Silva Medeiros - Product Owner e Desenvolvedor back-end

# Explicação do sistema
Atividades físicas estão cada vez mais presentes na vida das pessoas. Exercícios como musculação, cross-fit, caminhadas… vem ganhando espaço por trazerem inúmeros benéficos à saúde dos praticantes. Além de melhorar a aptidão física, o exercício físico regular também pode melhorar a capacidade cognitiva e reduzir os níveis de ansiedade e estresse em geral. Os exercícios ajudam a melhorar a autoestima, a imagem corporal, a cognição e a função social de pacientes em risco de saúde mental. Porém é difícil ter um controle e a motivação constante para manter uma rotina saudável todos os dias. 

Haja vista essa situação pensamos em desenvolver o Tá Pago! O Sistema vem com a proposta de atuar como uma Plataforma de Gamificação, Saúde e Bem-estar visando compartilhar, acompanhar e rankear o andamento do dia a dia fitness de você e de seus amigos. Por meio dele vai ser possível  que as pessoas formem grupos e com isso definam metas semanais de exercícios! Para motivar a prática das atividades físicas, todos os integrantes terão acesso as metas individuais de cada um exibidas em um sistema de rankeamento, para pontuar, os usuários farão o registro de suas atividades diárias mandando uma foto e com isso receberão os devidos pontos. O sistema também contará com um perfil individual onde o usuário poderá compartilhar sua ficha e exercícios caso queira.

# Explicação das tecnologias utilizadas
Será desenvolvido um client (front-end) e um servidor (back-end) para suportar a aplicação. As tecnologias utilizadas serão:

- Cliente: Utilizaremos a biblioteca React, com a linguagem TypeScript.
- Servidor: Utilizaremos Node.js, mais especificamente Express.js, um framework para Node que fornece recursos mínimos para construção de servidores web. Além disso, utilizamos também o Sequelize, um ORM que auxilia na integração com o banco de dados relacional PostgreSQL (dialeto escolhido para armazenar os dados do sistema). A escolha dessas tecnologias foi baseada principalmente na experiência e familiaridade dos membros do grupo com as mesmas. Outro ponto é que são amplamente utilizadas no mercado, principalmente quando se trata de aplicações WEB.
- Versionamento e CI/CD: GitHub + GitHub Actions.

# Backlog da Sprint 1

## História #1: Como usuário eu gostaria de entrar no sistema para ter acesso ás suas funcionalidades.

Tarefas e Responsáveis:

[BACK-END]
- Inicializar e Configurar projeto node.js + Express + Sequelize:  Lucca
- Instalar e Configurar banco de dados: Lucca
- Criar e rodar as migrations de criação das tabelas: Lucca
- Criar lógica de autenticação e geração de JWT:  Daniel
- Criar rota de login: Daniel
- Testar rota usando o Postman: Caio

[FRONT-END]
- Inicializar e Configurar projeto React: Caio
- Desenvolver a tela de Login: Caio
- Configurar o Axios no projeto para se comunicar com o back end: Gabriel
- Linkar fomulário de Login com a respectiva rota do back end: Gabriel
- Testar funcionalidade de Login: Caio

## História #2: Como usuário eu gostaria de me cadastrar no sistema para ter acesso ás suas funcionalidades.

Tarefas e Responsáveis:

[BACK-END]
- Criar lógica de criação de usuários: Lucca
- Criar rota de cadastro de usuários: Daniel
- Testar rota usando o Postman: Caio

[FRONT-END]
- Desenvolver a tela de Cadastro: Gabriel
- Linkar fomulário de Cadastro com a respectiva rota do back end: Gabriel
- Testar funcionalidade de Cadastro: Caio

## História #3: Como usuário eu gostaria de criar meus exercícios no sistema para compartilhar-los com meus amigos.

Tarefas e Responsáveis:

[BACK-END]
- Criar lógica de criação de exercícios: Lucca
- Criar rota de cadastro de exercícios: Lucca
- Criar lógica de vizualização de exercícios: Daniel
- Criar rota de vizualização de exercícios: Daniel
- Testar rotas de criação exercícios usando o Postman: Caio
- Testar rotas de vizualização de exercícios usando o Postman: Caio

[FRONT-END]
- Desenvolver a Página Inicial ( apenas com o Card 1 ): Caio
- Desenvolver a tela Meus Exercícios: Caio
- Linkar o Card 1 com a tela Meus Exercícios: Gabriel
- Linkar fomulário de Cadastro de exercícios com a respectiva rota do back end: Gabriel
- Linkar componente de listaem de exercícios do usuário com a respectiva rota do back end: Gabriel

## História #4: Como usuário eu gostaria de excluir meus exercícios no sistema para manter-los atualizados.

Tarefas e Responsáveis:

[BACK-END]
- Criar lógica de remoção de exercícios: Lucca
- Criar rota de remoção de exercícios: Daniel
- Criar lógica de vizualização de exercícios ( remoção ): Daniel
- Testar rotas de remoção de exercícios usando o Postman: Caio

[FRONT-END]
- Desenvolver componente de exclusao de exercicios: Gabriel
- Linkar icone de exclusão de exercícios com a respectiva rota do back end: Gabriel
- Testar fluxo de Exercícios por completo: Caio

## História #5: Como usuário eu gostaria de criar minhas fichas de exercícios no sistema para compartilhar-las com meus amigos.

Tarefas e Responsáveis:

[BACK-END]
- Criar lógica de criação de ficha: Lucca
- Criar rota de cadastro de ficha: Lucca
- Criar lógica de vizualização de fichas: Daniel
- Criar rota de vizualização de fichas: Daniel
- Testar rotas de criacao e vizualizacao de fichas usando o Postman: Caio

[FRONT-END]
- Desenvolver a Página Inicial ( Card 2 ): Gabriel
- Desenvolver a tela Minhas Fichas: Gabriel
- Linkar o Card 2 com a tela Meus Exercícios: Gabriel
- Linkar fomulário de Cadastro de ficha com a respectiva rota do back end: Gabriel
- Linkar componente de listagem de fichas do usuário com a respectiva rota do back end: Daniel

## História #6: Como usuário eu gostaria de excluir minhas fichas de exercícios no sistema para manter-las atualizadas.

Tarefas e Responsáveis:

[BACK-END]
- Criar lógica de remoção de ficha: Lucca
- Criar rota de remoção de ficha: Daniel
- Testar rotas de exclusao de fichas usando o Postman: Caio

[FRONT-END]
- Criar componente de exclusão de fichas: Daniel
- Linkar icone de exclusão de ficha com a respectiva rota do back end: Daniel
- Testar fluxo de Fichas por completo: Caio

## História #7: Como usuário eu gostaria de criar e excluir grupos no sistema para compartilhar o meu comprometimento com as atividades fisicas.

Tarefas e Responsáveis:

[BACK-END]
- Criar lógica de criação de grupo: Lucca
- Criar rota de cadastro de grupo: Lucca
- Criar lógica de vizualização dos grupos pertencentes: Lucca
- Criar rota de vizualização dos grupos pertencentes: Lucca
- Testar rotas de Grupo criação de visualização usando o Postman: Caio

[FRONT-END]
- Desenvolver a Página Inicial ( Sessão Meus Grupos ): Daniel
- Desenvolver as Páginas de Criação do Grupo: Daniel
- Linkar fomulário de Cadastro de Grupo com a respectiva rota do back end: Gabriel
- Desenvolver a Página do Grupo ( Apenas sessão descritiva ): Gabriel
- Linkar o Card dos grupos com a tela Página do Grupo: Caio

## História #8: Como usuário eu gostaria de entrar e sair de grupos no sistema para ver o comprometimento dos meus amigos com as atividades fisicas.

Tarefas e Responsáveis:

[BACK-END]
- Criar lógica de geração do código de grupo: Lucca
- Criar rota de compartilhamento de grupo: Lucca
- Criar lógica de entrada nos grupos: Lucca
- Criar lógica de saida nos grupos: Lucca
- Aprimorar rota de vizualização dos grupos pertencentes: Lucca
- Testar rotas de Grupo usando o Postman: Caio

[FRONT-END]
- Linkar fomulário de Entrar em Um Grupo com a respectiva rota do back end: Gabriel
- Fazer o fluxo de criação de grupos por completo: Gabriel
- Desenvolver a Página do Grupo ( Restante ): Gabriel
- Linkar componente de listagem de Grupos do usuário com a respectiva rota do back end: Caio
- Linkar icone de exclusão de Grupo com a respectiva rota do back end: Caio
- Testar fluxo de Grupos por completo: Caio

## História #9: Como usuário eu gostaria de ver as fichas de exercícios dos meus amigos.

Tarefas e Responsáveis:

[BACK-END]
- Criar lógica de vizualização dos participantes do grupo: Lucca
- Criar lógica de vizualização da ficha dos participantes do grupo: Daniel
- Criar rota de vizualização da foto diaria dos participantes: Daniel
- Testar rotas de vizualização usando o Postman: Caio

[FRONT-END]
- Desenvolver a Página Dos Grupos ( Sessão Participantes ): Daniel
- Desenvolver a tela de vizualização da ficha do amigo: Gabriel
- Linkar pagina de vizualização da ficha do amigo com a respectiva rota do back end: Gabriel
- Testar fluxo de Vizualização de fichas por completo: Caio

# Backlog do Produto

## História #10: Como usuário eu gostaria de ver a pontuação dos meus amigos nos grupos que pertenço.

Tarefas e Responsáveis:

[BACK-END]
- Criar lógica de pontuação dos grupos: Lucca
- Criar rota de pontuação para cada grupo: Daniel
- Testar rotas de pontuação usando o Postman: Caio

[FRONT-END]
- Linkar componente de listagem dos participantes do Grupos a rota de pontuação do back end: Gabriel
- Testar fluxo de Pontuação por completo: Caio

## História #11: Como usuário eu gostaria de comportilhar minha foto do dia e ver a dos meus amigos de grupo.

Tarefas e Responsáveis:

[BACK-END]
- Criar lógica de envio de foto: Lucca
- Criar lógica de vizualização da foto dos participantes do grupo: Daniel
- Linkar envio da foto ao sistema de pontuação: Lucca
- Criar rota de vizualização da foto diaria dos participantes: Daniel
- Testar rotas de foto usando o Postman: Caio

[FRONT-END]
- Linkar os cards Página Dos Grupos com o status da foto: Daniel
- Desenvolver o fluxo de Envio da Foto diaria: Daniel
- Desenvolver o fluxo de Vizualizacao da Foto diaria dos amigos: Daniel
- Testar fluxo de vizualizaçao de fotos diarias e status dos amigos: Caio

## História #12: Como usuário eu gostaria de reagir as fotos do dia dos meus amigos de grupo para incentiva-los.

Tarefas e Responsáveis:

[BACK-END]
- Criar lógica de envio de emoticons: Lucca
- Criar lógica de vizualização das reações de foto dos participantes do grupo: Daniel
- Criar rota de vizualização das reações da foto diaria dos participantes: Daniel
- Testar rotas de reação usando o Postman: Caio

[FRONT-END]
- Linkar os cards Página Dos Grupos com a reação das fotos: Daniel
- Desenvolver o fluxo de Vizualização das fotos por completo: Daniel
- Testar fluxo de vizualizaçao de reações dos amigos: Caio
- Testar Sistema por completo: Caio
