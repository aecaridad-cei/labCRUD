import mongoose, { Mongoose } from "mongoose";

const ticketSchema = new mongoose.Schema(
    {
        codigo: {
            type: String,
            required: [true, 'El codigo del ticket es obligatorio'],
            unique: true,
            uppercase: true,
            trim: true
        },
        titulo: {
            type: String,
            required: [true, 'El titulo es obligatorio'],
            unique: true,
            trim: true,
            minlength: [5, "El titulo debe contener como minimo 5 caracteres"]
        },
        prioridad: {
            type: String,
            required: true,
            enum: {
                values: ['Baja', 'Media', 'Alta', 'Critica'],
                message: '{VALUE} no es una prioridad valida'
            },
            default: 'Media'
        },
        estado: {
            type: String,
            required: true,
            enum: {
                values: ['Abierto', 'En Progreso', 'Resuelto', 'Cerrado'],
                message: '{VALUE} no es un estado valido'
            },
            default: 'Abierto'
        },
        agenteAsignado: {
            type: String,
            trim: true
        },
        horasInvertidas: {
            type: Number,
            default: 0,
            min: [0, 'Las horas no pueden ser un numero negativo']
        },
        etiquetas: {
            type: [String],
            default: []
        }
    },
    {
        timestamps: true
    }
)

// En servidores que recargan modulos reutiliza el modelo ya registrado para evitar el error de intentar compilarlos 2 veces
const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema)

export default Ticket
