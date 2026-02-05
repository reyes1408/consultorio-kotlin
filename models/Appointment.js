import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import User from './User.js';

const Appointment = db.define('Appointment', {
    userId: { 
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: { model: User, key: 'id' }
    },
    doctorName: { type: DataTypes.STRING, allowNull: false },
    specialty: { type: DataTypes.STRING, allowNull: false },
    appointmentDate: { type: DataTypes.DATE, allowNull: false },
    status: { 
        type: DataTypes.ENUM('pendiente', 'completada', 'cancelada'), 
        defaultValue: 'pendiente' 
    },
    notes: { type: DataTypes.TEXT }
}, {
    timestamps: false // Evita el error de createdAt/updatedAt
});

export default Appointment;