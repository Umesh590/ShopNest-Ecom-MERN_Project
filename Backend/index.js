const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const dns = require("dns");

dns.setServers(["1.1.1.1","8.8.8.8"])
dotenv.config();
connectDB();
const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://127.0.0.1:5173'
    ],
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/analytics', require('./routes/analyticsRoutes'));
app.use('/api/payment', require('./routes/paymentRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../Frontend/build')));
  
  app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, '../Frontend/build/index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('ShopNest API is running in Development mode...');
  });
}



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});