📚 REST API for Books & Products

This project is a RESTful API built using Node.js, Express.js, and MongoDB.
It provides CRUD operations for Books and Products, following a clean folder structure using Controllers, Routes, Models, and Environment Variables (.env).

🚀 Features

✅ Create, Read, Update, Delete (CRUD) operations

✅ Separate controllers & routes for Books and Products

✅ MongoDB database connection using Mongoose

✅ Environment variables managed via .env file

✅ Proper error handling and modular structure

📂 Project Structure

📦 your-project-name
├── 📁 controllers
│   ├── bookController.js
│   └── productController.js
├── 📁 models
│   ├── Book.js
│   └── Product.js
├── 📁 routes
│   ├── bookRoutes.js
│   └── productRoutes.js
├── 📁 database
│   └── db.js
├── .env
├── index.js
├── package.json
└── README.md

# Clone the repository: https://github.com/lokesperni/REST
# Render Link: https://rest-4nf2.onrender.com
📌 API Endpoints
📘 Books
Method	Endpoint	Description
GET	/api/books	Get all books
POST	/api/books	Add a new book
GET	/api/books/:id	Get a single book
PUT	/api/books/:id	Update a book
DELETE	/api/books/:id	Delete a book

📦 Products
Method	Endpoint	Description
GET	/api/products	Get all products
POST	/api/products	Add a new product
GET	/api/products/:id	Get single product
PUT	/api/products/:id	Update product
DELETE	/api/products/:id	Delete product

🛠️ Tech Stack
Technology	Usage
Node.js	Backend runtime
Express.js	Server framework
MongoDB + Mongoose	Database
dotenv	Environment configuration
