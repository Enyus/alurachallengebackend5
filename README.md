# Alura Challenge Back-end 5 - Alura Flix API (WIP)

Este repositório guarda a minha versão do back-end do site Alura Flix, desenvolvido no Alura Challenge Back-End 5, entre 24/10 e XX/11/2022.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Alura Challenge Back-end 5 - Alura Flix**
| :label: Tecnologias | NodeJs, Express, Prisma, SQLite, Hopscotch
| :rocket: URL         | 

<!-- Inserir imagem com a #vitrinedev ao final do link -->
![](https://i.imgur.com/4BTHvAB.png#vitrinedev)

## Detalhes do Projeto
O projeto tem o objetivo de construir um back-end para o front do site Aluraflix. Resolvi utilizar as tecnologias NodeJs, Express, Prisma, SQLite e o Hopscotch como ambiente de testes.

### Semana 1 ✅
Iniciar o banco de dados e criar requisições CRUD básicas.

<table>
    <tr>
        <th>Listar todos os Vídeos</th>
        <th>Listar um vídeo</th>
    </tr>
    <tr>
        <td><img src="https://media.giphy.com/media/GKgLn6YVLOV3vvU1gD/giphy.gif" alt="listar todos os vídeos"></td>
        <td><img src="https://media.giphy.com/media/Xd9LB4DXW5qrsbACk6/giphy.gif" alt="listar um vídeo"></td>
    </tr>
    <tr>
        <th>Adicionar um vídeo</th>
        <th>Alterar um vídeo</th>
    </tr>
    <tr>
        <td><img src="https://media.giphy.com/media/LHuiLK4yAxf7ccCjed/giphy.gif" alt="adicionar um vídeo"></td>
        <td><img src="https://media.giphy.com/media/s8frXNCj7aqn9uOo1G/giphy.gif" alt="alterar um vídeo"></td>
    </tr>
    <tr>
        <th>Deletar um Vídeo</th>
    </tr>
    <tr>
        <td><img src="https://media.giphy.com/media/sVKV194PR6sZFqEKmw/giphy.gif" alt="deletar um vídeo"></td>
    </tr>
</table>

### Semana 2 ✅
Criar nova tabela para categorias com relação de categoria 1:n vídeos; fazer rotas CRUD para as categorias; criar rota para listar vídeos por categoria; e criar rota com parâmetros de busca para os vídeos.

<table>
    <tr>
        <th>Listar todas as Categorias</th>
        <th>Listar uma categoria</th>
    </tr>
    <tr>
        <td><img src="https://media.giphy.com/media/Bcm9ymed9Ifrf3EqtW/giphy.gif" alt="listar todas as categoria"></td>
        <td><img src="https://media.giphy.com/media/71m2L0VKhG200AGSs4/giphy.gif" alt="listar uma categoria"></td>
    </tr>
    <tr>
        <th>Adicionar uma categoria</th>
        <th>Alterar uma categoria</th>
    </tr>
    <tr>
        <td><img src="https://media.giphy.com/media/CNkUsSuKNSH11E8DCF/giphy.gif" alt="adicionar uma categoria"></td>
        <td><img src="https://media.giphy.com/media/uMtOlu1JhBdn3E3pr2/giphy.gif" alt="alterar uma categoria"></td>
    </tr>
    <tr>
        <th>Deletar uma categoria</th>
        <th>Listar vídeos por categoria</th>
    </tr>
    <tr>
        <td><img src="https://media.giphy.com/media/kyw4BGcovUpKsr2bqO/giphy.gif" alt="deletar uma categoria"></td>
        <td><img src="https://media.giphy.com/media/I3hRYTRvQBjKzYIT7j/giphy.gif" alt="listar videos por categoria"></td>
    </tr>
    <tr>
        <th>Procurar um vídeo</th>
    </tr>
    <tr>
        <td><img src="https://media.giphy.com/media/9SLWi7oer4ksCI2mn8/giphy.gif" alt="procurar um vídeo"></td>
    </tr>
</table>

### Semanas 3 e 4 ✅
Criar funcionalidades de paginação, autenticação, rota para requisições sem autentticação e fazer o deploy da API.

Para a autenticação, resolvi usar o Json Web Token (JWT), criado com login de um usuário. Para testar usar o `"username": "admin"` e a `"password":"parangaricotirimirruaru"`. Entendo que seria melhor uma criptografia da senha, mas escolhi pela simplicidade usar apenas a lib `jsonwebtoken` como autenticação.

<table>
    <tr>
        <th>Paginação</th>
        <th>Autenticação</th>
    </tr>
    <tr>
        <td><img src="https://media.giphy.com/media/aLfWDHfKVm19xSiuFb/giphy.gif" alt="paginação"></td>
        <td><img src="https://media.giphy.com/media/9br23mrTnZg3kXcmNu/giphy.gif" alt="autenticação"></td>
    </tr>
</table>
<table>
    <tr>
        <th>Rota Free</th>
    </tr>
    <tr>
        <td><img src="https://media.giphy.com/media/zuHK05Rw28lYrylvDS/giphy.gif" alt="rota free"></td>
    </tr>
</table>

## Para rodar o projeto
- Faça o clone do repositório com `git clone https://github.com/Enyus/alurachallengefrontend5.git`
- Faça a instalação das dependências com `npm install`
- Inicie o prisma com `npx prisma generate`
- Se ainda não existir a pasta prisma/migrations, executar `npx prisma migrate dev`
- Faça o seed dos primeiros vídeos do banco de dados com `npx prisma db seed` (opcional)
- Inicie o servidor com `npm run dev`
- Para ver uma representação gráfica do banco dedados, abra outro prompt de comando e use `npx prisma studio` (opcional)