import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    doctorName: String,
    specialty: String,
    date: String,
    status: { type: String, default: 'pendiente' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Appointment', appointmentSchema);