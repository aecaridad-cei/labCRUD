import mongoose from "mongoose";
import dotenv from "dotenv";
import Ticket from "./models/Tickets.js"

dotenv.config()

const ejecutarCicloCrud = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Conectado a MongoDB Atlas');

        await Ticket.deleteMany({})
        console.log('Colección anterior ha sido limpiada');

        console.log('\n---1. Fase Create: Insertando Ticket Iniciales')

        const ticketsCreados = await Ticket.insertMany([
        {
            codigo: "TCK-001",
            titulo: "Error al iniciar sesión",
            prioridad: "Alta",
            estado: "Abierto",
            agenteAsignado: "Carlos",
            horasInvertidas: 1.5,
            etiquetas: ["login", "autenticacion", "web"]
        },
        {
            codigo: "TCK-002",
            titulo: "Problema con la base de datos",
            prioridad: "Critica",
            estado: "En Progreso",
            agenteAsignado: "Maria",
            horasInvertidas: 5,
            etiquetas: ["database", "backend"]
        },
        {
            codigo: "TCK-003",
            titulo: "Actualizar perfil de usuario",
            prioridad: "Baja",
            estado: "Resuelto",
            agenteAsignado: "Pedro",
            horasInvertidas: 0.5,
            etiquetas: ["perfil", "usuarios"]
        },
        {
            codigo: "TCK-004",
            titulo: "Fallo en el sistema de pagos",
            prioridad: "Critica",
            estado: "Abierto",
            agenteAsignado: "Laura",
            horasInvertidas: 8,
            etiquetas: ["pagos", "backend", "urgente"]
        },
        {
            codigo: "TCK-005",
            titulo: "Mejorar diseño del dashboard",
            prioridad: "Media",
            estado: "En Progreso",
            agenteAsignado: "Carlos",
            horasInvertidas: 3.5,
            etiquetas: ["frontend", "dashboard"]
        },
        {
            codigo: "TCK-006",
            titulo: "Error al cargar imágenes",
            prioridad: "Alta",
            estado: "Abierto",
            agenteAsignado: "Ana",
            horasInvertidas: 2,
            etiquetas: ["imagenes", "frontend"]
        },
        {
            codigo: "TCK-007",
            titulo: "Crear módulo de reportes",
            prioridad: "Media",
            estado: "En Progreso",
            agenteAsignado: "Pedro",
            horasInvertidas: 12,
            etiquetas: ["reportes", "backend"]
        },
        {
            codigo: "TCK-008",
            titulo: "Optimizar consultas SQL",
            prioridad: "Alta",
            estado: "Resuelto",
            agenteAsignado: "Maria",
            horasInvertidas: 6.75,
            etiquetas: ["database", "optimizacion"]
        },
        {
            codigo: "TCK-009",
            titulo: "Error en recuperación de contraseña",
            prioridad: "Alta",
            estado: "Cerrado",
            agenteAsignado: "Laura",
            horasInvertidas: 1,
            etiquetas: ["password", "seguridad"]
        },
        {
            codigo: "TCK-010",
            titulo: "Actualizar documentación técnica",
            prioridad: "Baja",
            estado: "Abierto",
            agenteAsignado: "Ana",
            horasInvertidas: 0,
            etiquetas: ["documentacion"]
        },
        {
            codigo: "TCK-011",
            titulo: "Implementar autenticación JWT",
            prioridad: "Alta",
            estado: "En Progreso",
            agenteAsignado: "Carlos",
            horasInvertidas: 4,
            etiquetas: ["jwt", "seguridad"]
        },
        {
            codigo: "TCK-012",
            titulo: "Error al enviar correos electrónicos",
            prioridad: "Media",
            estado: "Resuelto",
            agenteAsignado: "Pedro",
            horasInvertidas: 2.25,
            etiquetas: ["email", "backend"]
        },
        {
            codigo: "TCK-013",
            titulo: "Agregar filtros a la búsqueda",
            prioridad: "Media",
            estado: "Abierto",
            agenteAsignado: "Maria",
            horasInvertidas: 3,
            etiquetas: ["busqueda", "frontend"]
        },
        {
            codigo: "TCK-014",
            titulo: "Caída del servidor principal",
            prioridad: "Critica",
            estado: "Cerrado",
            agenteAsignado: "Laura",
            horasInvertidas: 15,
            etiquetas: ["servidor", "infraestructura"]
        },
        {
            codigo: "TCK-015",
            titulo: "Corregir errores de responsive",
            prioridad: "Baja",
            estado: "Resuelto",
            agenteAsignado: "Ana",
            horasInvertidas: 1.75,
            etiquetas: ["css", "responsive"]
        },
        {
            codigo: "TCK-016",
            titulo: "Implementar sistema de notificaciones",
            prioridad: "Media",
            estado: "En Progreso",
            agenteAsignado: "Carlos",
            horasInvertidas: 7,
            etiquetas: ["notificaciones", "backend"]
        },
        {
            codigo: "TCK-017",
            titulo: "Problema con permisos de usuario",
            prioridad: "Alta",
            estado: "Abierto",
            agenteAsignado: "Pedro",
            horasInvertidas: 2.5,
            etiquetas: ["permisos", "seguridad"]
        },
        {
            codigo: "TCK-018",
            titulo: "Actualizar versión de Node",
            prioridad: "Baja",
            estado: "Cerrado",
            agenteAsignado: "Maria",
            horasInvertidas: 0.75,
            etiquetas: ["nodejs", "actualizacion"]
        },
        {
            codigo: "TCK-019",
            titulo: "Error al generar facturas",
            prioridad: "Critica",
            estado: "En Progreso",
            agenteAsignado: "Laura",
            horasInvertidas: 9,
            etiquetas: ["facturacion", "backend"]
        },
        {
            codigo: "TCK-020",
            titulo: "Añadir exportación a Excel",
            prioridad: "Media",
            estado: "Abierto",
            agenteAsignado: "Ana",
            horasInvertidas: 4.5,
            etiquetas: ["excel", "reportes"]
        },
        {
            codigo: "TCK-021",
            titulo: "Corregir error en formulario",
            prioridad: "Baja",
            estado: "Resuelto",
            agenteAsignado: "Carlos",
            horasInvertidas: 1,
            etiquetas: ["formularios", "frontend"]
        },
        {
            codigo: "TCK-022",
            titulo: "Problema con conexión API externa",
            prioridad: "Alta",
            estado: "En Progreso",
            agenteAsignado: "Pedro",
            horasInvertidas: 6,
            etiquetas: ["api", "integracion"]
        },
        {
            codigo: "TCK-023",
            titulo: "Implementar paginación de resultados",
            prioridad: "Media",
            estado: "Abierto",
            agenteAsignado: "Maria",
            horasInvertidas: 2,
            etiquetas: ["paginacion", "backend"]
        },
        {
            codigo: "TCK-024",
            titulo: "Error crítico en producción",
            prioridad: "Critica",
            estado: "Abierto",
            agenteAsignado: "Laura",
            horasInvertidas: 20,
            etiquetas: ["produccion", "urgente"]
        },
        {
            codigo: "TCK-025",
            titulo: "Mejorar rendimiento del frontend",
            prioridad: "Media",
            estado: "Resuelto",
            agenteAsignado: "Ana",
            horasInvertidas: 5.5,
            etiquetas: ["rendimiento", "frontend"]
        },
        {
            codigo: "TCK-026",
            titulo: "Añadir validación de formularios",
            prioridad: "Alta",
            estado: "En Progreso",
            agenteAsignado: "Carlos",
            horasInvertidas: 3,
            etiquetas: ["validacion", "formularios"]
        },
        {
            codigo: "TCK-027",
            titulo: "Error al eliminar registros",
            prioridad: "Media",
            estado: "Abierto",
            agenteAsignado: "Pedro",
            horasInvertidas: 1.25,
            etiquetas: ["crud", "database"]
        },
        {
            codigo: "TCK-028",
            titulo: "Configurar copias de seguridad",
            prioridad: "Alta",
            estado: "Cerrado",
            agenteAsignado: "Maria",
            horasInvertidas: 4,
            etiquetas: ["backup", "infraestructura"]
        },
        {
            codigo: "TCK-029",
            titulo: "Actualizar librerías del proyecto",
            prioridad: "Baja",
            estado: "En Progreso",
            agenteAsignado: "Laura",
            horasInvertidas: 2,
            etiquetas: ["dependencias"]
        },
        {
            codigo: "TCK-030",
            titulo: "Problema con carga de archivos",
            prioridad: "Alta",
            estado: "Resuelto",
            agenteAsignado: "Ana",
            horasInvertidas: 3.75,
            etiquetas: ["archivos", "upload"]
        },
        {
            codigo: "TCK-031",
            titulo: "Crear endpoint de usuarios",
            prioridad: "Media",
            estado: "Abierto",
            agenteAsignado: "Carlos",
            horasInvertidas: 0,
            etiquetas: ["api", "usuarios"]
        },
        {
            codigo: "TCK-032",
            titulo: "Corregir error de caché",
            prioridad: "Baja",
            estado: "Cerrado",
            agenteAsignado: "Pedro",
            horasInvertidas: 1.5,
            etiquetas: ["cache", "backend"]
        },
        {
            codigo: "TCK-033",
            titulo: "Implementar autenticación OAuth",
            prioridad: "Alta",
            estado: "En Progreso",
            agenteAsignado: "Maria",
            horasInvertidas: 8.5,
            etiquetas: ["oauth", "seguridad"]
        },
        {
            codigo: "TCK-034",
            titulo: "Error en el menú de navegación",
            prioridad: "Media",
            estado: "Resuelto",
            agenteAsignado: "Laura",
            horasInvertidas: 0.5,
            etiquetas: ["menu", "frontend"]
        },
        {
            codigo: "TCK-035",
            titulo: "Crear sistema de auditoría",
            prioridad: "Critica",
            estado: "Abierto",
            agenteAsignado: "Ana",
            horasInvertidas: 10,
            etiquetas: ["auditoria", "seguridad"]
        },
        {
            codigo: "TCK-036",
            titulo: "Actualizar interfaz de administración",
            prioridad: "Baja",
            estado: "En Progreso",
            agenteAsignado: "Carlos",
            horasInvertidas: 6,
            etiquetas: ["admin", "frontend"]
        },
        {
            codigo: "TCK-037",
            titulo: "Problema con zona horaria",
            prioridad: "Media",
            estado: "Cerrado",
            agenteAsignado: "Pedro",
            horasInvertidas: 2.75,
            etiquetas: ["fechas", "configuracion"]
        },
        {
            codigo: "TCK-038",
            titulo: "Error al actualizar productos",
            prioridad: "Alta",
            estado: "Abierto",
            agenteAsignado: "Maria",
            horasInvertidas: 4,
            etiquetas: ["productos", "crud"]
        },
        {
            codigo: "TCK-039",
            titulo: "Implementar búsqueda avanzada",
            prioridad: "Media",
            estado: "Resuelto",
            agenteAsignado: "Laura",
            horasInvertidas: 7.25,
            etiquetas: ["busqueda", "filtros"]
        },
        {
            codigo: "TCK-040",
            titulo: "Revisar configuración de seguridad",
            prioridad: "Critica",
            estado: "En Progreso",
            agenteAsignado: "Ana",
            horasInvertidas: 12,
            etiquetas: ["seguridad", "configuracion"]
        },
        {
            codigo: "TCK-041",
            titulo: "Error en generación de PDF",
            prioridad: "Media",
            estado: "Abierto",
            agenteAsignado: "Carlos",
            horasInvertidas: 3.5,
            etiquetas: ["pdf", "reportes"]
        },
        {
            codigo: "TCK-042",
            titulo: "Mejorar experiencia de usuario",
            prioridad: "Baja",
            estado: "Resuelto",
            agenteAsignado: "Pedro",
            horasInvertidas: 5,
            etiquetas: ["ux", "frontend"]
        },
        {
            codigo: "TCK-043",
            titulo: "Corregir error de conexión",
            prioridad: "Alta",
            estado: "En Progreso",
            agenteAsignado: "Maria",
            horasInvertidas: 1,
            etiquetas: ["conexion", "backend"]
        },
        {
            codigo: "TCK-044",
            titulo: "Implementar sistema de comentarios",
            prioridad: "Media",
            estado: "Abierto",
            agenteAsignado: "Laura",
            horasInvertidas: 8,
            etiquetas: ["comentarios", "usuarios"]
        },
        {
            codigo: "TCK-045",
            titulo: "Error al procesar solicitudes",
            prioridad: "Critica",
            estado: "Cerrado",
            agenteAsignado: "Ana",
            horasInvertidas: 18,
            etiquetas: ["solicitudes", "backend"]
        },
        {
            codigo: "TCK-046",
            titulo: "Actualizar estilos de botones",
            prioridad: "Baja",
            estado: "En Progreso",
            agenteAsignado: "Carlos",
            horasInvertidas: 0.25,
            etiquetas: ["css", "diseño"]
        },
        {
            codigo: "TCK-047",
            titulo: "Problema con envío de notificaciones",
            prioridad: "Alta",
            estado: "Abierto",
            agenteAsignado: "Pedro",
            horasInvertidas: 2,
            etiquetas: ["notificaciones"]
        },
        {
            codigo: "TCK-048",
            titulo: "Crear módulo de estadísticas",
            prioridad: "Media",
            estado: "Resuelto",
            agenteAsignado: "Maria",
            horasInvertidas: 9.5,
            etiquetas: ["estadisticas", "reportes"]
        },
        {
            codigo: "TCK-049",
            titulo: "Revisar errores de servidor",
            prioridad: "Critica",
            estado: "En Progreso",
            agenteAsignado: "Laura",
            horasInvertidas: 14,
            etiquetas: ["servidor", "backend"]
        },
        {
            codigo: "TCK-050",
            titulo: "Optimizar experiencia de navegación",
            prioridad: "Baja",
            estado: "Abierto",
            agenteAsignado: "Ana",
            horasInvertidas: 0,
            etiquetas: ["navegacion", "ux"]
        }
])
        console.log(`Se crearon ${ticketsCreados.length} tickets`)

        console.log('\n--- 2. Fase Read: Consulta con operadores')

        const urgenteOComplejos = await Ticket.find({
            $or: [{prioridad: 'Critica'}, {horasInvertidas: {$gt: 4}}],
        }).select('codigo titulo prioridad horasInvertidas -_id')
        console.log('A) Criticos o con > 4 horas ($or):', urgenteOComplejos)

    } catch (error) {

        console.error('\nError en el Lab:', error.message)

    } finally {
        await mongoose.disconnect()
        console.log('\nDesconectado de MongoDB Atlas')
    }
}

ejecutarCicloCrud()