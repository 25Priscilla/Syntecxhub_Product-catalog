# ✅ Product Catalog Management API

**Syntecxhub Internship – Week 2 Project**

---

## 📌 Project Overview

The **Product Catalog Management API** is a backend service built using **Node.js**, **Express.js**, and **MongoDB**.

It allows users to:

* Create products
* View single or multiple products
* Search products
* Filter products by category
* Apply pagination
* Update product details
* Delete products
* Generate analytics using MongoDB Aggregation

This project demonstrates **real-world backend skills** such as REST API development, database modeling, CRUD operations, and API testing using Postman.

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose ODM**
* **Dotenv**
* **Postman** (for testing)

---

## 📁 Folder Structure

```
product-catalog/
│
├── app.js
├── package.json
├── package-lock.json
├── .env
└── README.md
```

---

## ⚙️ Prerequisites

* Node.js installed ([Download Node.js](https://nodejs.org/))
* MongoDB installed locally or use MongoDB Atlas
* Git installed ([Download Git](https://git-scm.com/))

---

## ⚙️ Setup & Installation

1️⃣ **Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/Syntecxhub_ProductCatalog.git
cd product-catalog
```

2️⃣ **Install dependencies**

```bash
npm install
```

3️⃣ **Setup Environment Variables**
Create a `.env` file in the project root:

```
MONGO_URI=mongodb://localhost:27017/product_catalog
PORT=3002
```

4️⃣ **Start MongoDB**
Ensure MongoDB is running locally.

5️⃣ **Run the server**

```bash
node app.js
```

Server will start at:

```
http://localhost:3002
```

---

## 🧪 API Endpoints

### 1. Create Product

```
POST /api/products
```

**Body:**

```json
{
            "_id": "69271945d6f522828f0016f8",
            "name": "Laptop",
            "category": "Electronics",
            "price": 45000,
            "description": "Good laptop",
            "inStock": true,
            "createdAt": "2025-11-26T15:14:13.680Z",
            "__v": 0
        },
```

### 2. Get All Products

```
GET /api/products
```

### 3. Search Products

```
GET /api/products?search=phone
```

### 4. Filter by Category

```
GET /api/products?category=electronics
```

### 5. Pagination

```
GET /api/products?page=1&limit=5
```

### 6. Get Single Product

```
GET /api/products/:id
```

### 7. Update Product

```
PUT /api/products/:id
```

### 8. Delete Product

```
DELETE /api/products/:id
```

### 9. Analytics – Average Price per Category

```
GET /api/stats/avg-price-per-category
```

**Response:**

```json
[
    {
        "_id": "Electronics",
        "avgPrice": 45000,
        "count": 3
    }
]

---

## 🧪 Testing With Postman

| Feature           | Method | Endpoint                          |
| ----------------- | ------ | --------------------------------- |
| Create product    | POST   | /api/products                     |
| View all products | GET    | /api/products                     |
| View one product  | GET    | /api/products/:id                 |
| Update product    | PUT    | /api/products/:id                 |
| Delete product    | DELETE | /api/products/:id                 |
| Search product    | GET    | /api/products?search=phone        |
| Filter            | GET    | /api/products?category=clothing   |
| Pagination        | GET    | /api/products?page=1&limit=10     |
| Aggregation       | GET    | /api/stats/avg-price-per-category |



## 🎯 Conclusion

This project demonstrates proficiency in:

* REST API development
* MongoDB CRUD and Aggregation
* Express routing
* Pagination and searching


