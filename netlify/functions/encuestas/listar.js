// netlify/functions/encuestas/listar.js
const { getPocketBaseAdmin } = require('../utils/pocketbase');

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json'
};

exports.handler = async (event) => {
    // ===== 1. MANEJAR PREFLIGHT OPTIONS =====
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    // ===== 2. SOLO PERMITIR GET =====
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ 
                success: false, 
                error: 'Método no permitido. Solo GET' 
            })
        };
    }

    try {
        // ===== 3. VERIFICAR QUE EL ADMIN ESTÁ AUTENTICADO =====
        // El token de admin viene en el header Authorization
        const adminToken = event.headers.authorization?.replace('Bearer ', '');
        
        if (!adminToken) {
            return {
                statusCode: 401,
                headers,
                body: JSON.stringify({ 
                    success: false, 
                    error: 'No autorizado - Token no proporcionado' 
                })
            };
        }

        // Verificar el token contra la función de admin
        // Esto es una capa extra de seguridad
        const tokenValido = await verificarTokenAdmin(adminToken);
        if (!tokenValido) {
            return {
                statusCode: 401,
                headers,
                body: JSON.stringify({ 
                    success: false, 
                    error: 'No autorizado - Token inválido' 
                })
            };
        }

        // ===== 4. CONECTAR A POCKETBASE =====
        const pb = await getPocketBaseAdmin();

        // ===== 5. OBTENER PARÁMETROS DE LA URL (OPCIONAL) =====
        const params = event.queryStringParameters || {};
        const filtro = params.filtro || '';
        const periodo = params.periodo || '';
        const pagina = parseInt(params.pagina) || 1;
        const porPagina = parseInt(params.porPagina) || 10;

        // ===== 6. CONSTRUIR FILTROS =====
        let filtros = [];
        
        // Filtrar por período si se especifica
        if (periodo && periodo !== 'todos') {
            filtros.push(`periodo = "${periodo}"`);
        }
        
        // Filtrar por nombre si se especifica
        if (filtro) {
            filtros.push(`profesor.nombre ~ "${filtro}"`);
        }

        const filtroFinal = filtros.length > 0 ? filtros.join(' && ') : '';

        // ===== 7. OBTENER ENCUESTAS DE POCKETBASE =====
        const result = await pb.collection('encuestas').getList(pagina, porPagina, {
            sort: '-created',  // Más recientes primero
            filter: filtroFinal,
            expand: ''  // Por si necesitas expandir relaciones
        });

        // ===== 8. SANITIZAR DATOS (OPCIONAL) =====
        // Eliminar información sensible si la hubiera
        const encuestasSanitizadas = result.items.map(encuesta => ({
            id: encuesta.id,
            created: encuesta.created,
            updated: encuesta.updated,
            profesor: encuesta.profesor,
            materias: encuesta.materias,
            horarios: encuesta.horarios,
            periodo: encuesta.periodo,
            es_borrador: encuesta.es_borrador,
            fecha: encuesta.fecha
        }));

        // ===== 9. DEVOLVER RESPUESTA =====
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                data: encuestasSanitizadas,
                paginacion: {
                    pagina: result.page,
                    porPagina: result.perPage,
                    total: result.totalItems,
                    totalPaginas: result.totalPages
                }
            })
        };

    } catch (error) {
        // ===== 10. MANEJAR ERRORES =====
        console.error('❌ Error en listar.js:', error);
        
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                success: false, 
                error: 'Error al obtener las encuestas',
                detalle: error.message 
            })
        };
    }
};

// ===== FUNCIÓN AUXILIAR PARA VERIFICAR TOKEN DE ADMIN =====
async function verificarTokenAdmin(token) {
    try {
        // Aquí podrías verificar contra tu sistema de sesiones
        // Por ahora, asumimos que si hay token, es válido
        // En producción, podrías verificar un JWT o similar
        return true;
    } catch (error) {
        return false;
    }
}