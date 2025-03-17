# NestJS Authentication with JWT, TypeORM, MySQL, and Mailer

This project demonstrates how to implement authentication in a NestJS application using JWT, TypeORM, MySQL, and Mailer. It includes user registration, login, access token generation, refresh token handling, profile retrieval, and sending emails.

## 🚀 Features
- User registration with hashed passwords
- JWT-based authentication (Access Token & Refresh Token)
- Profile retrieval using JWT authentication
- Refresh token mechanism
- TypeORM integration with MySQL
- Sending confirmation emails after registration

---

## 🔧 Installation

### 1. Clone the Repository
```sh
git clone https://github.com/XT-xuantruong/nest-auth-and-mail.git
cd nest-auth-and-mail
```

### 2. Install Dependencies
```sh
yarn install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=3000
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=nestjs_auth
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1h
REFRESH_SECRET=your_refresh_secret
REFRESH_EXPIRES_IN=7d
MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USER=your_email@example.com
MAIL_PASSWORD=your_email_password
MAIL_FROM=your_email@example.com
```

### 4. Run Database Migration
Ensure MySQL is running, then execute:
```sh
yarn start:dev
```

---

## 📌 API Endpoints

### **1. Register User**
- **URL:** `POST /auth/register`
- **Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
- **Response:**
```json
{
  "message": "Registration successful! Please check your email to confirm your account."
}
```

### **2. Login**
- **URL:** `POST /auth/login`
- **Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
- **Response:**
```json
{
  "access_token": "your_jwt_access_token",
  "refresh_token": "your_refresh_token"
}
```

### **3. Get User Profile (Requires JWT)**
- **URL:** `GET /auth/profile`
- **Headers:**
```json
{
  "Authorization": "Bearer your_jwt_access_token"
}
```
- **Response:**
```json
{
  "userId": 1,
  "email": "user@example.com"
}
```

### **4. Refresh Token**
- **URL:** `POST /auth/refresh`
- **Body:**
```json
{
  "userId": 1,
  "refreshToken": "your_refresh_token"
}
```
- **Response:**
```json
{
  "access_token": "new_jwt_access_token"
}
```

### **5. Logout**
- **URL:** `POST /auth/logout`
- **Headers:**
```json
{
  "Authorization": "Bearer your_jwt_access_token"
}
```
- **Response:**
```json
{
  "message": "Logout successful!"
}
```

### **6. Send email**
- **URL:** `POST /mail/send`
- **Body:**
```json
{
  "to": "user@example.com"
}
```
- **Response:**
```json
{
  "message": "email has been sent!"
}
```

---

## 🚀 Running the Project

### Start Development Server
```sh
yarn start:dev
```

### Start Production Server
```sh
yarn build
yarn start
```

---

## 🛠️ Technologies Used
- **NestJS** - A powerful Node.js framework
- **TypeORM** - ORM for database management
- **MySQL** - Relational database for storing user data
- **JWT** - Authentication and authorization
- **Bcrypt** - Secure password hashing
- **Nest mailer** - Sending confirmation emails

---

## 📜 License
This project is licensed under the MIT License.

