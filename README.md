# 🛍️ E-Commerce Full‑Stack Application

A fully functional e-commerce platform built using the **MERN stack**, designed for performance, scalability, and clean UI/UX. This project includes:

- A customer-facing frontend
- An admin dashboard
- A backend API

All integrated for a seamless online shopping experience — fully deployable and scalable.

---

## 🔍 Features

### 🛒 Customer Panel
- Browse products by category
- View product details (images, descriptions, price)
- Add/remove items from cart
- Checkout with billing & GST calculation
- User login/signup (JWT-based)
- View order history

### 🧑‍💼 Admin Panel
- Admin login authentication
- Add, edit, delete products
- Upload product images
- View/manage all orders
- Sidebar navigation for quick actions

### ⚙️ Backend & API
- Express-based REST API
- MongoDB for product/order/user data
- Authentication using JWT
- Cloudinary for image uploads
- Multer middleware for file handling
- Role-based access control

---

## 🧰 Tech Stack

| Layer       | Technologies                                 |
|-------------|----------------------------------------------|
| Frontend    | React, Vite, Tailwind CSS                    |
| Admin Panel | React, Tailwind, Vite                        |
| Backend     | Node.js, Express.js                          |
| Database    | MongoDB (Mongoose ODM)                       |
| Storage     | Cloudinary (image uploads), Multer middleware |
| Auth        | JSON Web Tokens (JWT)                        |

---

## 📁 Folder Structure

E-Commerce-Fullstack/
├── admin/ # Admin dashboard (React)
├── frontend/ # Customer-facing UI (React)
├── backend/ # Express backend and API
├── .gitignore
├── README.md

yaml
Copy code

---

## 🚀 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Eng-Hari/E-Commerce-fullstack-.git
cd E-Commerce-fullstack-


2️⃣ Backend Setup

bash
Copy code
cd backend
npm install
npm run dev


3️⃣ Frontend Setup (Customer UI)
bash

Copy code
cd ../frontend
npm install
npm run dev


4️⃣ Admin Panel Setup

bash
Copy code
cd ../admin
npm install
npm run dev


🌐 Access Locally

Customer UI: http://localhost:5173

Admin Panel: http://localhost:5174

API Server: http://localhost:5000

---

🔐 Environment Variables

Create a .env file in the backend/ directory with the following:

env
Copy code
PORT=5000
MONGO_URL=mongodb+srv://<your_mongo_connection_string>
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

---

📦 Deployment

You can deploy each module separately or in a monorepo setup.

Module	Recommended Platform
Frontend	Vercel / Netlify
Backend	Render / Railway
Admin Panel	Vercel / Netlify

---

📜 License

This project is open-source and available under the MIT License.

---

👤 Author

Hariharan S
📧 Email: hariharan03.eng@gmail.com
🔗 GitHub: @Eng-Hari

---

⭐ Support

If you found this project useful, give it a ⭐ on GitHub.
Your support is much appreciated!
