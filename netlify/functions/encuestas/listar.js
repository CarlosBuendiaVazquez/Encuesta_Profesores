const { getPocketBaseAdmin } = require('../utils/pocketbase');

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json'
};

exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Método no permitido' })
        };
    }

    try {
        const adminToken = event.headers.authorization?.replace('Bearer ', '');
        
        if (!adminToken) {
            return {
                statusCode: 401,
                headers,
                body: JSON.stringify({ error: 'No autorizado' })
            };
        }

        const pb = await getPocketBaseAdmin();
        const records = await pb.collection('encuestas').getFullList({
            sort: '-created'
        });

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ success: true, data: records })
        };

    } catch (error) {
        console.error('❌ Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Error al obtener encuestas' })
        };
    }
};