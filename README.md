# **cities_weather**
Aplica��o WEB que permite cadastrar cidade e exibir a previs�o do tempo.


# **Pr�-requisito**

- Instalar nodejs na m�quina que ir� rodar as aplica��es. Pode ser feito o download em: [NodeJs](https://nodejs.org/en/download/)

- Instalar o pacote serve com o comando: `npm install -g serve`.

- Ter recursos para o IIS (Internet Information Services) adicionados.

# **Estrutura de pastas**

**WebApp:**

	- Pasta **api** cont�m duas sub-pastas: **CityWeatherService** possui os fontes para a API backend em C#. **Publish** possui a publica��o da API em C#.

	- **build** cont�m os arquivos bildados da aplica��o reactjs.

	- **src** possui os fontes da aplica��o reactjs.

**rock-paper-scissors:**

	- Teste de l�gica proposto.


# **Iniciando os servi�os**

- Op��o 1: 

 	-Configurar manualmente um site no IIS com os arquivos encontrados em api/Publish, na porta 49985:, com a App Pool configurada para LocalSystem e usu�rio administrador nas credenciais de caminho f�sico do site.

 	-Subir servidor da WebApp via promp, navegando at� onde foi salvo este reposit�rio e executando: `serve -s build`. Isso ira rodar um servidor bom base nos arquivos que est�o na pasta **build**.

- Op��o 2:

	-Executar como administrador o arquivo **ConfiguraSITEeAPI.bat**. Este bat ir� criar um novo site no IIS, chamado CityWeather, e subir o servidor da WebApp.

	-Abrir o IIS e alterar as credenciais de caminho f�sico do site CityWeather para um usu�rio administrador


# **Detalhes**

Aplica��o consiste em uma WebApp criada com ReactJs em conjunto com JQuery, e uma API C# construida com Entity Framework utilizando Migration Code-First para cuidar das requisi��es para busca e inser��o das cidades.

- A WebApp consiste em quatro componentes reactjs:

	- Os componentes que s�o referentes a cidade (CityForm e CityList) s�o agrupados no high order CityBox.

	- As requisi��es para as APIs de cidades (C#, desenvolvida para esta aplica��o) e OpenWeather (terceira) s�o separadas utilizando modelo de fun��es callBack, onde o componente delega uma fun��o para lidar com o sucesso ou fracasso da requisi��o.

	- Para poder gerenciar rotas, para indexar um componente a uma rota e poder transmitir estados foi utilizado React-Router. O roteamento � feito no componente App, o qual � o diretamente chamado na index.html.

A API C# � simples, possui apenas um modelo de cidades e um contexto de dados. Utiliza Migration Code-First do Entity Framework e atrav�s dela � possivel cadastrar e recuperar lista de cidades.

Para o cadastro de cidades existem duas valida��es principais: Esta cidade deve retornar dados pela API de tempo e n�o pode estar cadastrada. Valida��o de cidade j� cadastrada � feita na API C#, antes de ser salva, caso j� esteja registrada, ir� retornar um BadRequest. A verifica��o se a cidade retorna dados pela API OpenWeather � feita antes mesmo de ser chamada a API de cidades.