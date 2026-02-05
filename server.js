
import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import authRoutes from './routes/authRoutes.js';
// Importa tus otras rutas aquí...

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);

// Conexión a DB y Servidor
const PORT = process.env.PORT || 3000;

db.sync().then(() => {
    console.log('Base de datos conectada');
    app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
}).catch(err => console.log('Error en DB: ' + err));