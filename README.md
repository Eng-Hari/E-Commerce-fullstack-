# 🛍️ E-Commerce Full‑Stack Application

A fully functional e-commerce platform built using the **MERN stack**, designed for performance, scalability, and clean UI/UX. This project includes a customer-facing frontend, an admin dashboard, and a backend API — all integrated for a seamless online shopping experience.

---

## 🔍 Features

### 🛒 Customer Features
- Browse products by category
- Product detail pages with images and descriptions
- Add to cart, manage cart items
- Place orders with checkout functionality
- User login, signup, and authentication
- View past orders

### 🧑‍💼 Admin Features
- Secure admin login
- Add, edit, delete products
- Manage orders from customers
- Upload product images
- Sidebar navigation for admin pages

### 📦 Backend & API
- RESTful API built with Express.js
- MongoDB database integration
- Auth middleware (JWT-based)
- Multer + Cloudinary for image uploads
- Role-based access control

---

## ⚙️ Tech Stack

- **Frontend:** React + Vite + Tailwind CSS  
- **Admin Panel:** React + Tailwind + Custom Components  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB  
- **Image Uploads:** Cloudinary  
- **Authentication:** JWT  
- **Deployment Ready:** Vercel / Netlify / Render / Railway

---

## 📁 Folder Structure

E-Commerce-Fullstack/
├── admin/ → Admin dashboard frontend
├── frontend/ → Customer-facing frontend
├── backend/ → Node.js + Express backend
├── .gitignore
├── README.md


---

## 🚀 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Eng-Hari/E-Commerce-fullstack-.git
cd E-Commerce-fullstack-

2️⃣ Backend Setup
cd backend
npm install
npm run dev

3️⃣ Frontend Setup (Customer UI)
cd ../frontend
npm install
npm run dev

4️⃣ Admin Panel Setup
cd ../admin
npm install
npm run dev

🔗 Access Locally

Customer UI: http://localhost:5173

Admin Panel: http://localhost:5174 (or whichever port Vite assigns)

API Server: http://localhost:5000

🔐 Environment Variables

Create a .env file in the backend directory:

PORT=5000
MONGO_URL=mongodb+srv://<your_mongo_connection_string>
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

📦 Deployment

You can deploy each part separately or combine them:

Frontend: Netlify / Vercel (static build)

Backend: Render / Railway / Heroku

Admin Panel: Same as frontend or separate

📜 License

This project is open-source and available under the MIT License.

👤 Author

Hariharan S
📧 Email: hariharan03.eng@gmail.com

🔗 GitHub: @Eng-Hari

⭐ Support

If you find this project useful, feel free to give it a ⭐ on GitHub
. Your support means a lot!
