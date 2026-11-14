# Intro to Backend - Node.js + Express.js + MongoDB Atlas

A clean, modular REST API backend built with modern Node.js (ES Modules), Express.js, MongoDB Atlas, and Mongoose.

---

## 📁 Project Structure

```text
intro-to-backend/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── constants.js       # App constants (DB_NAME)
│   │   │   └── database.js        # MongoDB connection handling
│   │   ├── controllers/
│   │   │   ├── user.controller.js # Register, login, logout logic
│   │   │   └── post.controller.js # CRUD business logic for posts
│   │   ├── models/
│   │   │   ├── user.model.js      # User schema, validations, bcrypt hooks
│   │   │   └── post.model.js      # Post schema (name, description, age)
│   │   ├── routes/
│   │   │   ├── user.route.js      # User endpoint routes
│   │   │   └── post.route.js      # Post endpoint routes
│   │   ├── app.js                 # Express configuration and routes mounting
│   │   └── index.js               # Entry point (connects DB and listens)
│   ├── .env                       # Environment variables (ignored by Git)
│   ├── .env.example               # Environment variables template
│   ├── .gitignore                 # Ignored directories and secrets
│   ├── package.json
│   └── package-lock.json
└── README.md
```

---

## 🚀 Setup & Execution

### 1. Prerequisites
- Node.js (v18+)
- MongoDB Atlas cluster URI

### 2. Environment Configuration
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Ensure your `.env` contains:
```env
PORT=8000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Application
- **Development mode (with nodemon):**
  ```bash
  npm run dev
  ```
- **Production mode:**
  ```bash
  npm start
  ```

---

## 📡 API Reference

Base URL: `http://localhost:8000/api/v1`

### 1. Authentication Endpoints

#### Register User
- **Method:** `POST`
- **URL:** `http://localhost:8000/api/v1/users/register`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "username": "alex_doe",
    "email": "alex@example.com",
    "password": "secretpassword"
  }
  ```
- **Success Status:** `201 Created`
- **Response:**
  ```json
  {
    "message": "User registered successfully",
    "user": {
      "_id": "6735db4f3f019a12c8a2b101",
      "username": "alex_doe",
      "email": "alex@example.com",
      "createdAt": "2026-11-14T14:15:00.000Z",
      "updatedAt": "2026-11-14T14:15:00.000Z"
    }
  }
  ```

#### Login User
- **Method:** `POST`
- **URL:** `http://localhost:8000/api/v1/users/login`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "email": "alex@example.com",
    "password": "secretpassword"
  }
  ```
- **Success Status:** `200 OK`
- **Response:**
  ```json
  {
    "message": "User logged in successfully (credentials verified)",
    "user": {
      "_id": "6735db4f3f019a12c8a2b101",
      "username": "alex_doe",
      "email": "alex@example.com"
    }
  }
  ```
*Note: As per the tutorial, this endpoint verifies credentials and does not issue JWT or session cookies.*

#### Logout User
- **Method:** `POST`
- **URL:** `http://localhost:8000/api/v1/users/logout`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "email": "alex@example.com"
  }
  ```
- **Success Status:** `200 OK`
- **Response:**
  ```json
  {
    "message": "User alex@example.com logged out successfully (demonstration endpoint)"
  }
  ```

---

### 2. Post CRUD Endpoints

#### Create Post
- **Method:** `POST`
- **URL:** `http://localhost:8000/api/v1/posts/create`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "Aragorn",
    "description": "Ranger of the North",
    "age": 87
  }
  ```
- **Success Status:** `201 Created`

#### Get All Posts
- **Method:** `GET`
- **URL:** `http://localhost:8000/api/v1/posts/`
- **Headers:** None required
- **Success Status:** `200 OK`

#### Update Post
- **Method:** `PATCH`
- **URL:** `http://localhost:8000/api/v1/posts/update/:id`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "age": 88
  }
  ```
- **Success Status:** `200 OK`

#### Delete Post
- **Method:** `DELETE`
- **URL:** `http://localhost:8000/api/v1/posts/delete/:id`
- **Headers:** None required
- **Success Status:** `200 OK`
