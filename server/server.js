import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';

const app = express(); // object to which all the routes and middleware are added to this app

await connectDB()

// Middleware
app.use(cors())
app.use(express.json()) //parse data

app.get('/', (req,res)=> res.send("API is Working")) //whenoutputs "API is Working"

const PORT = process.env.PORT || 3000; //take post from .env if defined else take 3000

app.listen(PORT, ()=>{
    console.log('Server is running on port '+ PORT) //terminal output
}) 

export default app;