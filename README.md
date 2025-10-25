# User CRUD App (Node.js + Express + PostgreSQL + Neon)

This is a simple CRUD project to manage users with fields:
`name`, `age`, `phone`, and `city`.

The project uses:
- Node.js + Express (Backend API)
- PostgreSQL (Neon Cloud Database)
- pg (PostgreSQL Client)

---

## 🏗 Project Structure

project-folder/
│
├── server.js
├── db.js
├── .env
└── package.json

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Huzaifa-io/express-postgres-crud-api
cd express-postgres-crud-api
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Setup Environment Variables
Create a file named .env and paste your database URL:


DATABASE_URL=postgresql://YOUR_USER:YOUR_PASS@YOUR_HOST/YOUR_DB?sslmode=require
4️⃣ Create Database Table
Go to https://console.neon.tech → SQL Editor and run:


CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  age INT,
  phone TEXT,
  city TEXT
);
▶️ Run Server


npm start
Server will start on:

http://localhost:5000
📌 API Endpoints (CRUD)
Method	Endpoint	Description	Body Example
GET	/users	Get all users	—
GET	/users/:id	Get single user	—
POST	/users	Create new user	{ "name":"Ali","age":22,"phone":"0300","city":"Karachi" }
PUT	/users/:id	Update user	same as POST
DELETE	/users/:id	Delete user	—

📦 Example JSON Body (POST/PUT)


{
  "name": "Ali Khan",
  "age": 20,
  "phone": "03123456789",
  "city": "Lahore"
}
✅ Features
Clean folder structure

Neon PostgreSQL support

Fully REST API CRUD operations

Easy to modify and extend

🤝 Contributing
Pull requests are welcome.
For major changes, open an issue first to discuss.