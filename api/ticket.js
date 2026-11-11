import mongoose from "mongoose";
import Ticket from '.. /models/Tickets.js'

export default async function handler (req, res) {
    try {
        
        if(mongoose.connect.readyState === 0){
            await mongoose.connect(process.env.MONGODB_URI)
        }
        
        const {method} = req
        if(method === 'GET') {
            const {prioridad, estado, buscar, sinAsignar} = req.query
            const filtro = {}

            if(prioridad) filtro.prioridad = prioridad
            if(estado) filtro.estado = estado
            if(buscar) {
                filtro.titulo = { $regex: buscar, $options: 'i'}
            }

            if(sinAsignar === 'true') {
                filtro.agenteAsignado = { $exists: false}
            }

            const tickets = await Ticket.find(filtro).sort({createdAt: -1})
            return res.status(200).json({total: tickets.length, datos: tickets})

        }

        return res.status(405).json({error: `Method ${method} no permitido`})

    } catch (error) {
        return res.status(500).json({
            error: "Error al consultar la base de datos",
            detalle: error.message,
        })

    }
}
//