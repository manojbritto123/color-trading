# 🎨 Color Trading Website

A full-stack color trading game built with React (frontend), Node.js/Express (backend), and MongoDB.

---

## 🚀 Deployment

### 🔧 1. Folder Structure

```
color-trading/
├── backend/
│   └── .env
├── frontend/
│   └── .env
├── render.yaml
└── README.md
```

---

### 🖥 Backend (Render)
- Deploy `backend` folder
- Set environment variables:
  - `MONGO_URI`
  - `JWT_SECRET`

---

### 🌐 Frontend (Vercel)
- Deploy `frontend` folder
- Set environment variable:
  - `VITE_API_BASE_URL` = Backend Render URL

---

### 📦 Environment Config

#### backend/.env
```
MONGO_URI=your-mongodb-uri
JWT_SECRET=supersecretkey
```

#### frontend/.env
```
VITE_API_BASE_URL=https://color-trade-backend.onrender.com
```

---

### 🧪 Tech Stack
- Frontend: React + Tailwind CSS
- Backend: Express.js + MongoDB + JWT
- Hosting: Render + Vercel
