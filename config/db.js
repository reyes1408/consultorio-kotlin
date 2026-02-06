import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try {
    
        const uri = process.env.MONGODB_URI;
        await mongoose.connect(uri);
        console.log("Conexión exitosa a MongoDB Atlas usando variables de entorno");
    } catch (error) {
        console.error("Error conectando a MongoDB:", error);
        process.exit(1);
    }
};
