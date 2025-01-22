import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js';



// // App Config
const app = express();
const port = process.env.PORT || 9000;
connectDB()
connectCloudinary()

// // Middlewares
app.use(express.json());
app.use(cors());

// // API Endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)

app.get('/', (req, res) => {
    res.send('All good here')
})



app.listen(port, () => console.log(`Listening on localhost:${port}`));