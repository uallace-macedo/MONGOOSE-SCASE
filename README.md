# 🚀 Aplicação de Anúncios

Uma plataforma onde empresas podem criar anúncios de produtos e serviços de forma simples e direta! 💼📢

> 🧪 Este é um projeto apenas backend, criado com o objetivo de estudar e entender melhor o uso do MongoDB, Mongoose, e outras libs do ecossistema Node.js. Nada muito complexo, só um projeto prático pra fixar e entender os conceitos.

---

## 🛠️ Tecnologias usadas

### 📦 Dependências:

- Express – framework web rápido e leve
- Mongoose – modelagem de dados MongoDB
- bcryptjs – para hash de senhas 🔐
- dotenv – variáveis de ambiente 🌱
- jsonwebtoken – autenticação com JWT 🔑
- mongoose-paginate-v2 – paginação de dados
- Yup – validação de dados do lado do backend ✅
- mongo-seeding-cli – ferramenta de seed para MongoDB, útil pra popular o banco com dados iniciais 🌱📂
    ```bash
        seed -u 'mongodb://127.0.0.1:27017/db_name' --drop-database ./src/configs/database/seeders
    ```

### 🛠️ Dev Dependencies:
- Nodemon – recarrega o servidor automaticamente no modo dev 🔁

---

## 🔐 Como funciona?

1. A empresa se cadastra na plataforma 📝
2. Um administrador (adm) revisa o cadastro e libera o acesso ✅
3. Com o acesso liberado, a empresa pode usar o sistema tranquilamente! 🎉

---

## 🧭 O que a empresa pode fazer

- ✏️ Atualizar seus dados cadastrais
- 📢 Criar novos anúncios (announcements)
