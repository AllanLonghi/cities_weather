# **cities_weather**
Aplicação WEB que permite cadastrar cidade e exibir a previsão do tempo.


# **Pré-requisito**

- Instalar nodejs na máquina que irá rodar as aplicações. Pode ser feito o download em: [NodeJs](https://nodejs.org/en/download/)

- Instalar o pacote serve com o comando: `npm install -g serve`.

- Ter recursos para o IIS (Internet Information Services) adicionados.

# **Estrutura de pastas**

**WebApp:**

	- Pasta **api** contêm duas sub-pastas: **CityWeatherService** possui os fontes para a API backend em C#. **Publish** possui a publicação da API em C#.

	- **build** contêm os arquivos bildados da aplicação reactjs.

	- **src** possui os fontes da aplicação reactjs.

**rock-paper-scissors:**

	- Teste de lógica proposto.


# **Iniciando os serviços**

- Opção 1: 

 	-Configurar manualmente um site no IIS com os arquivos encontrados em api/Publish, na porta 49985:, com a App Pool configurada para LocalSystem e usuário administrador nas credenciais de caminho físico do site.

 	-Subir servidor da WebApp via promp, navegando até onde foi salvo este repositório e executando: `serve -s build`. Isso ira rodar um servidor bom base nos arquivos que estão na pasta **build**.

- Opção 2:

	-Executar como administrador o arquivo **ConfiguraSITEeAPI.bat**. Este bat irá criar um novo site no IIS, chamado CityWeather, e subir o servidor da WebApp.

	-Abrir o IIS e alterar as credenciais de caminho físico do site CityWeather para um usuário administrador


# **Detalhes**

Aplicação consiste em uma WebApp criada com ReactJs em conjunto com JQuery, e uma API C# construida com Entity Framework utilizando Migration Code-First para cuidar das requisições para busca e inserção das cidades.

- A WebApp consiste em quatro componentes reactjs:

	- Os componentes que são referentes a cidade (CityForm e CityList) são agrupados no high order CityBox.

	- As requisições para as APIs de cidades (C#, desenvolvida para esta aplicação) e OpenWeather (terceira) são separadas utilizando modelo de funções callBack, onde o componente delega uma função para lidar com o sucesso ou fracasso da requisição.

	- Para poder gerenciar rotas, para indexar um componente a uma rota e poder transmitir estados foi utilizado React-Router. O roteamento é feito no componente App, o qual é o diretamente chamado na index.html.

A API C# é simples, possui apenas um modelo de cidades e um contexto de dados. Utiliza Migration Code-First do Entity Framework e através dela é possivel cadastrar e recuperar lista de cidades.

Para o cadastro de cidades existem duas validações principais: Esta cidade deve retornar dados pela API de tempo e não pode estar cadastrada. Validação de cidade já cadastrada é feita na API C#, antes de ser salva, caso já esteja registrada, irá retornar um BadRequest. A verificação se a cidade retorna dados pela API OpenWeather é feita antes mesmo de ser chamada a API de cidades.