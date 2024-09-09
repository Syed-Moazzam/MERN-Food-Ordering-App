import express from "express";
import cors from 'cors';
import path from 'path';
import { connectDB } from "./config/db.js";
import 'dotenv/config';
import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import emailRouter from "./routes/emailRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;

const __dirname = path.resolve();

// middlewares
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// Serve client build files
app.use('/client', express.static(path.join(__dirname, '../client/dist')));

// Serve admin build files
app.use('/admin', express.static(path.join(__dirname, '../admin/dist')));

// Fallback to the client app for any route not caught by the server
app.get('/client/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Fallback to the admin app for /admin routes
app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../admin/dist', 'index.html'));
});


// api endpoints
app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use('/api', emailRouter);

// Redirect root to client
app.get('/', (req, res) => {
  res.redirect('/client');
});

app.listen(port, () => console.log(`Server started on http://localhost:${port}`));