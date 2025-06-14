# Backend - Cadastro e Acompanhamento de Obras

Este é o backend que realiza o **cadastro e acompanhamento de obras em andamento**, com funcionalidades completas de CRUD, envio de e-mail e suporte a imagens via base64 ou URL.

---

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB + Mongoose
- Nodemailer
- dotenv
- CORS

---

## Estrutura do Projeto

```
backend-obras/
│
├── controllers/
│   ├── obraController.js
│   └── fiscalizacaoController.js
│
├── models/
│   ├── Obra.js
│   └── Fiscalizacao.js
│
├── routes/
│   ├── obraRoutes.js
│   └── fiscalizacaoRoutes.js
│
├── uploads/
│   └── (para salvar imagens, se necessário)
│
├── utils/
│   └── sendEmail.js
│
├── .env      
├── .env.exemple      
├── app.js           
├── package.json
└── README.md
```

---

## Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/alessandramacedodev/backend-obras.git
cd backend_construcao
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o `.env`

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
MONGO_URI=sua_string_de_conexao_mongodb
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_senha_de_app
```

> Para testar envio de e-mail localmente, use [senhas de app do Gmail](https://myaccount.google.com/apppasswords) ou um serviço como Mailtrap.

### 4. Execute o servidor

```bash
npm run dev
```

O backend estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## Endpoints 

### 🔹 Obras

| Método | Rota | Descrição |
|--------|------|-----------|
| POST   | `/obras` | Cria uma nova obra |
| GET    | `/obras` | Lista todas as obras |
| GET    | `/obras/:id` | Busca uma obra por ID |
| PUT    | `/obras/:id` | Atualiza uma obra por ID |
| DELETE | `/obras/:id` | Deleta uma obra por ID |

---

### 🔹 Fiscalizações

| Método | Rota | Descrição |
|--------|------|-----------|
| POST   | `/fiscalizacoes` | Cria uma nova fiscalização |
| GET    | `/fiscalizacoes` | Lista todas as fiscalizações |
| GET    | `/fiscalizacoes/obra/:id` | Lista fiscalizações de uma obra específica |
| PUT    | `/fiscalizacoes/:id` | Atualiza uma fiscalização |
| DELETE | `/fiscalizacoes/:id` | Deleta uma fiscalização |

---

## Upload de Imagens (Base64 ou URL)

O campo `foto` em obras e fiscalizações aceita imagens em dois formatos:

### 🔹 Opção 1 – URL de imagem:
```json
"foto": "https://exemplo.com/imagem.jpg"
```

### 🔹 Opção 2 – Base64:
```json
"foto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
```

> Essas imagens são armazenadas como texto no banco MongoDB.

---

## 📧 Envio de E-mail

Quando uma **nova obra é cadastrada**, o sistema envia automaticamente um e-mail com os dados da obra para o endereço configurado no `.env`.

---

## Testes com Postman

Você pode testar os endpoints com o [Postman](https://www.postman.com/).


```





