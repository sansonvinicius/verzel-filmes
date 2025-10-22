# 🎬 Desafio Verzel — Lista de Filmes (Python/Django + React)

Este projeto foi desenvolvido como parte do **desafio técnico Verzel**, que consiste em construir uma aplicação completa para **buscar filmes**, **exibir detalhes**, **gerenciar uma lista de favoritos** e **gerar um link compartilhável** dessa lista.

A solução foi implementada utilizando **Python/Django (DRF)** no back-end e **React (Vite)** no front-end, com banco de dados **SQLite**.

---

## 🌐 Deploys Online

- **Frontend (Vercel):** [https://verzel-filmes.vercel.app/](https://verzel-filmes.vercel.app/)
- **Backend (Render):** [https://verzel-filmes.onrender.com/](https://verzel-filmes.onrender.com/)

> ⚠️ **Importante:** O backend hospedado no Render pode ficar **em modo “sleep”** após um tempo sem uso (limitação do plano gratuito).  
> Antes de acessar a aplicação em https://verzel-filmes.vercel.app/ acessar o backend https://verzel-filmes.onrender.com/ para que o serviço seja reativado.

---

## 🚀 Funcionalidades

### Front-End
- Interface de busca de filmes utilizando a API pública da TMDb (The Movie Database).
- Exibição de **detalhes do filme**, com a **nota (rating)** em destaque.
- Adição e remoção de filmes da **lista de favoritos**.
- Geração de **link compartilhável** da lista de favoritos.
- Visualização de listas compartilhadas via URL.

### Back-End
- API REST construída com **Django + Django REST Framework**.
- Integração com a **TMDb API** (chave segura no `.env`).
- Persistência de dados com **SQLite** via ORM do Django.
- Endpoints REST para busca, detalhes, favoritos e compartilhamento.


---

## 📡 Estrutura de Pastas

```
verzel-filmes/
├── backend-django/        # API Django + TMDb + SQLite
│   ├── api/               # Configurações principais
│   ├── movies/            # App de filmes
│   └── requirements.txt
└── frontend/              # Interface React + Vite
    ├── src/
    ├── public/
    └── package.json
```

---

---

## ⚙️ Tecnologias Utilizadas

### Backend
- Python 3.11
- Django 5
- Django REST Framework
- Django CORS Headers
- Gunicorn
- Render (deploy)

### Frontend
- React + Vite
- Axios / Fetch API
- Vercel (deploy)

---


## 🚀 Como Rodar Localmente

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/sansonvinicius/verzel-filmes.git
cd verzel-filmes
```

---

### 2️⃣ Iniciar o Backend (Django)

Acesse o diretório do backend:

```bash
cd backend-django
```

Crie o ambiente virtual e instale as dependências:

```bash
python -m venv .venv
source .venv/bin/activate   # (Mac/Linux)
# ou no Windows:
# .venv\Scripts\activate

pip install -r requirements.txt
```

Crie o arquivo `.env` (opcional, se desejar usar sua própria chave TMDb):

```
TMDB_API_KEY=suachave_tmdb
```

Execute as migrações e inicie o servidor:

```bash
python manage.py migrate
python manage.py runserver 0.0.0.0:4000
```

O backend estará disponível em:  
👉 **http://localhost:4000**

Para testar se a API está funcionando corretamente, acesse no navegador:  
👉 [http://localhost:4000/api/search?query=NOMEFILME](http://localhost:4000/api/search?query=NOMEFILME)

Exemplo:  
👉 [http://localhost:4000/api/search?query=Lego](http://localhost:4000/api/search?query=Lego)


### 3️⃣ Iniciar o Frontend (React/Vite)

Abra outro terminal e acesse o diretório do frontend:

```bash
cd ../frontend
```

Instale as dependências e execute o servidor local:

```bash
npm install
npm run dev
```

A aplicação estará disponível em:  
👉 **http://localhost:5173**

### ⚙️ Dica: Versão do Node.js

Este projeto utiliza **Vite + React**, que requer **Node.js 18 ou superior** (recomendado Node **22**).  
Se estiver usando uma versão antiga (por exemplo `v14` ou `v16`), atualize com o **NVM** (Node Version Manager):

```bash
nvm install 22
nvm use 22
npm install -g npm@latest
```

Verifique as versões ativas:
```bash
node -v
npm -v
```

Se o terminal não reconhecer o comando `nvm`, ative-o manualmente com:

```bash
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh" && nvm use 22
```

> 💡 Esse comando carrega o NVM no terminal atual e garante que a versão correta do Node (22) seja usada.

---

## 💡 Dica: Sobre o ambiente virtual

Para isolar as dependências do projeto, é recomendado usar um ambiente virtual (`venv`):

1. **Criar o ambiente (somente uma vez):**
   ```bash
   python -m venv .venv
   ```

2. **Ativar o ambiente:**
   - **Mac/Linux:**
     ```bash
     source .venv/bin/activate
     ```
   - **Windows (PowerShell):**
     ```bash
     .venv\Scripts\activate
     ```

3. **Desativar quando terminar:**
   ```bash
   deactivate
   ```

> Isso garante que as bibliotecas instaladas fiquem isoladas do sistema, evitando conflitos e tornando o ambiente reprodutível.

---

## 👨‍💻 Autor

**Vinícius Sanson**  
💼 [LinkedIn](https://www.linkedin.com/in/vinicius-henrique-sanson-51066229/)

---

**Deploys:**  
Frontend → [https://verzel-filmes.vercel.app/](https://verzel-filmes.vercel.app/)  
Backend → [https://verzel-filmes.onrender.com/](https://verzel-filmes.onrender.com/)