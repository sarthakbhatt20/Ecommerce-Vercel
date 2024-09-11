import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authroute.js'
import cors from "cors"
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from 'path'
import { fileURLToPath } from 'url'
//config env
dotenv.config();

//databseconfig
connectDB();

//esmodeule fix
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
//rest object
const app = express()

//midwares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
// app.use(express.static(path.join(__dirname, './client/build')))

//routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);

//rest api
app.use("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//PORT 
const PORT = process.env.PORT || 8080;

//listen run hosts server
app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`.bgCyan.white)
})
