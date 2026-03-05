// netlify/functions/encuestas/listar.js
const { getPocketBaseAdmin } = require('../utils/pocketbase');

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json'
};

exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

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

        const pb = await getPocketBaseAdmin();

        const params = event.queryStringParameters || {};
        const filtro = params.filtro || '';
        const periodo = params.periodo || '';
        const pagina = parseInt(params.pagina) || 1;
        const porPagina = parseInt(params.porPagina) || 10;

        let filtros = [];
        
        if (periodo && periodo !== 'todos') {
            filtros.push(`periodo = "${periodo}"`);
        }
        
        if (filtro) {
            filtros.push(`profesor.nombre ~ "${filtro}"`);
        }

        const filtroFinal = filtros.length > 0 ? filtros.join(' && ') : '';

        const result = await pb.collection('encuestas').getList(pagina, porPagina, {
            sort: '-created',
            filter: filtroFinal
        });

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