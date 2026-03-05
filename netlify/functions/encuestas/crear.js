const { getPocketBaseAdmin } = require('../utils/pocketbase');

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
};

exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Método no permitido' })
        };
    }

    try {
        const datos = JSON.parse(event.body);
        
        if (!datos.profesor?.nombre || !datos.profesor?.correo) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Nombre y correo obligatorios' })
            };
        }

        const pb = await getPocketBaseAdmin();
        datos.fecha = new Date().toISOString();
        const record = await pb.collection('encuestas').create(datos);
        
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ success: true, id: record.id })
        };

    } catch (error) {
        console.error('❌ Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Error interno' })
        };
    }
};