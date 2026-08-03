# 🚀 CareerNest – Full Stack Job Portal

CareerNest is a **production-ready Full Stack Job Portal** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. It connects **Job Seekers** and **Recruiters** through a secure, scalable, and user-friendly platform.

The application enables recruiters to post and manage job opportunities while allowing job seekers to search, filter, and apply for jobs seamlessly. CareerNest implements **JWT-based authentication**, **role-based authorization**, **password reset via email using Brevo API**, **responsive UI**, and **RESTful APIs**, making it a complete end-to-end web application.

---

# 📖 Project Summary

CareerNest simplifies the recruitment process by providing a centralized platform where recruiters can efficiently manage job postings and applications, while job seekers can discover relevant opportunities and track their applications.

The project follows modern software development practices with a scalable MERN architecture, secure authentication, cloud deployment, and responsive design suitable for both desktop and mobile devices.

---

# ✨ Key Features

## 👨‍💼 Job Seeker

- Secure User Registration & Login
- JWT Authentication
- Profile Management
- Forgot & Reset Password via Email
- Browse Available Jobs
- Search Jobs by Keywords
- Filter Jobs by Location & Job Type
- Apply for Jobs
- View Applied Jobs
- Responsive User Interface

---

## 🏢 Recruiter

- Recruiter Registration & Login
- Create New Job Posts
- Edit Existing Jobs
- Delete Job Posts
- View Posted Jobs
- View Applicants for Each Job
- Recruiter Dashboard

---

## 🔐 Security

- JWT Authentication
- Role-Based Authorization
- Password Hashing using bcrypt
- Protected API Routes
- Helmet Security Middleware
- Express Rate Limiting
- Secure Password Reset using Brevo Email API
- Environment Variable Configuration

---

# 🛠 Technology Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Hook Form
- React Toastify

---

## Backend

- Node.js
- Express.js
- JWT Authentication
- bcrypt
- Express Rate Limit
- Helmet
- Multer
- Brevo Email API

---

## Database

- MongoDB Atlas
- Mongoose ODM



## Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas



Example:

# 🏗 System Architecture


                   ┌──────────────────────┐
                   │      React.js        │
                   │      Frontend        │
                   └──────────┬───────────┘
                              │
                         REST API Calls
                              │
                              ▼
                   ┌──────────────────────┐
                   │  Node.js + Express   │
                   │      Backend API     │
                   └──────┬───────┬───────┘
                          │       │
                          │       │
                          ▼       ▼
                 MongoDB Atlas   Brevo API
                   (Database)   (Email Service)


# 📂 Project Structure

CareerNest
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
└── README.md


---

# ⚙ Installation Guide

## Clone Repository

```bash
git clone https://github.com/Yashwanth-HN/CareerNest.git
```

```bash
cd CareerNest
```

---

## Install Frontend

```bash
cd client
npm install
```

---

## Install Backend

```bash
cd ../server
npm install
```

---

# 🔑 Environment Variables

### Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

JWT_EXPIRE=7d

CLIENT_URL=http://localhost:5173

BREVO_API_KEY=your_brevo_api_key

SENDER_EMAIL=your_verified_email
```

---

# 🚀 Running the Project

### Backend

```bash
cd server
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

### Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint |
|----------|--------------------------------|
| POST | /api/auth/register |
| POST | /api/auth/login |
| GET | /api/auth/profile |
| PUT | /api/auth/profile |
| POST | /api/auth/forgot-password |
| POST | /api/auth/reset-password/:token |

---

## Jobs

| Method | Endpoint |
|----------|----------------------|
| GET | /api/jobs |
| GET | /api/jobs/:id |
| POST | /api/jobs |
| PUT | /api/jobs/:id |
| DELETE | /api/jobs/:id |

---

## Applications

| Method | Endpoint |
|----------|-------------------------------|
| POST | /api/applications/:jobId |
| GET | /api/applications/my |
| GET | /api/applications/job/:jobId |

---

# 🌐 Deployment

### Frontend

**Vercel**

https://career-nest-eight.vercel.app/

---

### Backend

**Render**

https://careernest-api-xgwh.onrender.com

---

### Database

MongoDB Atlas

---

# 🔮 Future Enhancements

- Resume Upload & Download
- Company Profiles
- Saved/Favorite Jobs
- Resume PDF Preview
- Job Recommendation System
- AI Resume Analysis
- AI Job Matching
- AI Interview Question Generator
- Email Notifications
- Recruiter Analytics Dashboard
- Admin Dashboard
- Real-Time Chat
- Interview Scheduling

---

# 👨‍💻 Author

**Yashwanth H N**

📧 Email: yashwanth89710@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/yashwanth-h-n-ba60a9293/

💻 GitHub: https://github.com/Yashwanth-HN

---

# 📜 License

This project is licensed under the **MIT License**.

Feel free to use, modify, and contribute to this project.

⭐ If you found this project useful, consider giving it a **Star** on GitHub!
