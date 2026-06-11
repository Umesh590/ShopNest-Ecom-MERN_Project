# 🛍️ ShopNest - MERN E-Commerce Platform

![React](https://img.shields.io/badge/React-19-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-38BDF8)
![Razorpay](https://img.shields.io/badge/Razorpay-Payments-blue)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)

---

# 📖 About The Project

**ShopNest** is a modern full-stack **MERN E-Commerce Platform** designed to provide a seamless online shopping experience. Users can browse products, manage carts, place secure orders, and make payments through **Razorpay**. The platform features **JWT Authentication**, **OTP Verification**, and **Cloudinary Image Management**, while administrators can efficiently manage products and orders through a dedicated **Admin Dashboard**. Built with **React, Redux Toolkit, Node.js, Express.js, MongoDB Atlas** for scalability, performance, and security.


---

# ✨ Key Features

* 👤 **User Authentication** – Secure login, registration, and JWT-based authentication.
* 📧 **OTP Verification** – Email OTP verification using Nodemailer.
* 📦 **Product Management** – Browse, search, filter, and view product details.
* 🛒 **Cart & Checkout** – Add to cart, update quantities, and place orders.
* 💳 **Secure Payments** – Integrated Razorpay payment gateway.
* ☁️ **Cloudinary Storage** – Product image upload and management.
* 📍 **Order Tracking** – Track order status and purchase history.
* 👤 **Profile Management** – Update and manage user profile information.
* 🛠️ **Admin Dashboard** – Manage products, orders, and platform activities.
* ⚡ **Fast & Responsive** – Optimized with React, Redux Toolkit, and Tailwind CSS.


---

# 📸 Screenshots

## Sign Up Page

<img width="1827" height="871" alt="registeration page" src="https://github.com/user-attachments/assets/5ba1a7f3-684e-4a7f-af1b-ee9f2f791182" />


## Login Page

<img width="1810" height="929" alt="login img" src="https://github.com/user-attachments/assets/e878cc9a-2b2a-4acf-9854-3eea38b5547d" />


## Home Page

<img width="1796" height="943" alt="home page img" src="https://github.com/user-attachments/assets/6a9a5432-9d42-464b-9933-10c2141a4af2" />


## Product Details

<img width="1788" height="891" alt="shop img" src="https://github.com/user-attachments/assets/cc3903e4-1a85-48b5-b57f-e33a190ea436" />


## Cart Page

<img width="1780" height="860" alt="cart" src="https://github.com/user-attachments/assets/bc6e23f3-ba39-4f18-bfc7-df968c95bf32" />


## Checkout Page

<img width="1796" height="1001" alt="shipping" src="https://github.com/user-attachments/assets/e8e85e6c-c505-4f53-8856-8706ef66df7e" />


## Order Success

![Order Success](screenshots/order-success.png)


## Profile Page

![Profile](screenshots/profile.png)



## Admin Dashboard

<img width="1828" height="877" alt="admin dashboard" src="https://github.com/user-attachments/assets/c388ad81-39c7-4510-ab51-8d7b02898b68" />


---

# 🏗️ Architecture

```text
User
 │
 ▼
React Frontend
 │
 ▼
Express REST API
 │
 ├── Authentication (JWT)
 ├── Products
 ├── Orders
 ├── Users
 │
 ▼
MongoDB Database

Additional Services:
 ├── Cloudinary
 └── Razorpay
```

---

# 📂 Directory Structure

```text
Directory structure:
└── umesh590-shopnest-ecom-mern_project/
    ├── package.json
    ├── Backend/
    │   ├── index.js
    │   ├── package.json
    │   ├── seed.js
    │   ├── .env.example
    │   ├── config/
    │   │   ├── cloudinary.js
    │   │   └── db.js
    │   ├── controllers/
    │   │   ├── analyticsController.js
    │   │   ├── authController.js
    │   │   ├── orderController.js
    │   │   ├── paymentController.js
    │   │   └── productController.js
    │   ├── middleware/
    │   │   ├── adminMiddleware.js
    │   │   └── authmiddleware.js
    │   ├── models/
    │   │   ├── Order.js
    │   │   ├── Product.js
    │   │   ├── Review.js
    │   │   └── User.js
    │   ├── routes/
    │   │   ├── analyticsRoutes.js
    │   │   ├── authRoutes.js
    │   │   ├── orderRoutes.js
    │   │   ├── paymentRoutes.js
    │   │   └── productRoutes.js
    │   └── utils/
    │       └── sendEmail.js
    └── Frontend/
        ├── README.md
        ├── eslint.config.js
        ├── index.html
        ├── package.json
        ├── vite.config.js
        └── src/
            ├── App.jsx
            ├── main.jsx
            ├── admin/
            │   ├── AddProduct.jsx
            │   ├── AdminDashboard.jsx
            │   ├── AdminOrders.jsx
            │   ├── AdminProducts.jsx
            │   ├── AdminUsers.jsx
            │   └── EditProduct.jsx
            ├── components/
            │   ├── Footer.jsx
            │   ├── Navbar.jsx
            │   └── ProductCard.jsx
            ├── context/
            │   └── AuthContext.jsx
            ├── pages/
            │   ├── About.jsx
            │   ├── Cart.jsx
            │   ├── Checkout.jsx
            │   ├── Disclaimer.jsx
            │   ├── Home.jsx
            │   ├── Login.jsx
            │   ├── OrderSuccess.jsx
            │   ├── ProductDetail.jsx
            │   ├── Profile.jsx
            │   ├── Register.jsx
            │   ├── ReturnPolicy.jsx
            │   ├── Shop.jsx
            │   └── VerifyOtp.jsx
            ├── redux/
            │   ├── cartSlice.jsx
            │   └── store.jsx
            └── styles/
                ├── auth.css
                ├── cart.css
                ├── global.css
                ├── navbar.css
                └── product.css

```

---

# 🛠️ Built With

- **Frontend:** React.js, Redux Toolkit, React Redux, CSS, Axios, React Router DOM
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose
- **Authentication:** JWT, Bcrypt.js, OTP Verification
- **Email Service:** Nodemailer
- **Cloud Storage:** Cloudinary
- **Payments:** Razorpay
- **Deployment:** Render


---

# ⚙️ Getting Started

## Prerequisites

- Node.js 18+
- MongoDB Atlas
- Cloudinary Account
- Razorpay Account

---

## Installation

Clone repository

```bash
git clone https://github.com/Umesh590/ShopNest-Ecom-MERN_Project.git
```

Frontend

```bash
cd frontend
npm install
npm run dev
```

Backend

```bash
cd backend
npm install
npm run dev
```

---

# 🔑 Environment Variables

Create `.env` inside backend:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/shopnest
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
GMAIL_USER=your_email@gmail.com
GMAIL_PASS=your_email_password
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

---

# 🚀 Future Roadmap

- Wishlist Feature
- Product Reviews
- Coupons & Discounts
- Sales Analytics
- Dark Mode
- Multi Vendor Support
- AI Product Recommendations

---

# 👨‍💻 Developer

### Umesh Kumar

💼 Frontend & MERN Stack Developer

GitHub:
https://github.com/Umesh590

LinkedIn:
https://www.linkedin.com/in/umesh-kumar111

---

# ⭐ Show Some Love

If you like this project, give it a ⭐ on GitHub.
