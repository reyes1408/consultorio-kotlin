
import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const User = db.define('User', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM('paciente', 'medico'), defaultValue: 'paciente' }
}, {
    timestamps: false 
});

export default User;