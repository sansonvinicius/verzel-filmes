# 🎬 Desafio Verzel — Lista de Filmes (Python/Django + React)

Este projeto foi desenvolvido como parte do **desafio técnico Verzel**, que consiste em construir uma aplicação completa para **buscar filmes**, **exibir detalhes**, **gerenciar uma lista de favoritos** e **gerar um link compartilhável** dessa lista.

A solução foi implementada utilizando **Python/Django (DRF)** no back-end e **React (Vite)** no front-end, com banco de dados **SQLite**.

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

## 🧱 Arquitetura
verzel-filmes/
├── backend-django/ # API em Python/Django
│ ├── api/ # Projeto principal (settings, urls)
│ ├── movies/ # App com as rotas e lógica do desafio
│ ├── db.sqlite3 # Banco de dados SQLite
│ ├── .env # Variáveis de ambiente
│ └── requirements.txt # Dependências Python
└── frontend/ # Interface em React (Vite)
├── src/ # Código-fonte do front-end
├── .env # Configuração de URL da API
└── package.json

---

## ⚙️ Tecnologias Utilizadas

### 🐍 Backend
- **Python 3.10+**
- **Django 4.2**
- **Django REST Framework**
- **django-cors-headers**
- **requests**
- **python-dotenv**
- Banco de dados: **SQLite**

### ⚛️ Frontend
- **React 18**
- **Vite**
- **React Router DOM**

---

## 💾 Configuração e Execução

### 1. Clonar o projeto
```bash
git clone https://github.com/sansonvinicius/verzel-filmes.git
cd verzel-filmes

