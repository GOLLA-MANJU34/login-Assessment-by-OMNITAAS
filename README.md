# OMNITAAS – Full Stack Login Application:
==========================================
OMNITAAS is a simple **Full-Stack Login Application** built using **React (Frontend)** and **Node.js with Express (Backend)**.
The application demonstrates authentication logic, REST API integration, React Hooks usage, and clean UI design.

---

## Features
=======================================================
* Login page with **username and password**
* Backend API to validate user credentials
* Displays **error message for invalid login**
* Redirects to **Welcome page after successful login**
* Stores username using **localStorage** for future logins
* Clean and responsive UI
* Uses proper **HTTP status codes**

---

## Tech Stack

### Frontend
===========================================
* React
* React Router
* Axios
* CSS

### Backend
============================================
* Node.js
* Express.js
* CORS

---

## Project Structure
================================================
```
OMNITAAS
│
├── backend
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── src
    │   ├── components
    │   │   ├── Login.js
    │   │   └── Welcome.js
    │   │
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    │
    └── package.json
```

---

## ⚙️ Installation

### Clone the Repository
=========================================================
```
git clone https://github.com/your-username/OMNITAAS.git
```

```
cd OMNITAAS
```

---

### Backend Setup
==================================
```
cd backend
npm install
```

Run backend server:
====================================
```
node server.js
```

Backend runs on:
=======================================
```
http://localhost:5000
```

---

### Frontend Setup
===========================================================
Open another terminal.

```
cd frontend
npm install
```

Run frontend:
====================================================================
```
npm start
```

Frontend runs on:
======================================================================
```
http://localhost:3000
```

---

## Test Credentials
=========================================================================
```
Username: admin
Password: admin
```

If the credentials are correct, the user will be redirected to the **Welcome Page**.

---

## 📡 API Endpoint

### Login API
===========================================
```
POST /login
```

Request body:
=============================================

```
{
  "username": "admin",
  "password": "admin"
}
```

Responses:
====================================================
| Status Code | Meaning                      |
| ----------- | ---------------------------- |
| 200         | Login successful             |
| 400         | Missing username or password |
| 401         | Invalid credentials          |

---

## Concepts Used
===================================================
* React Hooks (`useState`, `useEffect`)
* REST API integration
* Axios for HTTP requests
* Express middleware
* LocalStorage for remembering username
* Client-side routing using React Router

---

##  Application Flow
======================================================
1. User enters username and password.
2. React sends a **POST request** to the backend.
3. Backend validates credentials.
4. If valid → user redirected to Welcome page.
5. If invalid → error message displayed.

---

## Future Improvements

* JWT authentication
* Password hashing using bcrypt
* User registration
* Protected routes
* MongoDB database integration

---

## Author
==================================

Manju
MERN Full Stack Developer

*Small GitHub tip:
===================================
After adding README run:

-> git add .
-> git commit -m "Added README"
-> git push
