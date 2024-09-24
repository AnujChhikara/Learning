
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRoute from './user.route.js';

dotenv.config({
    path: "../../../.env"
});


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/user',userRoute);

const port = process.env.PORT || 5000;

mongoose.connect(process.env.LOCAL_MONGODB_URL)    
.then(()=>{
    console.log("Connected to mongodb");
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })}
)
.catch((err)=>{
    console.log(err);
});


