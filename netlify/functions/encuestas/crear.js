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
            body: JSON.stringify({ error: 'Método no permitido. Solo POST' })
        };
    }

    try {
        let datos;
        try {
            datos = JSON.parse(event.body);
        } catch (e) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'El cuerpo de la petición no es JSON válido' })
            };
        }

        if (!datos.profesor?.nombre) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'El nombre del profesor es obligatorio' })
            };
        }

        if (!datos.profesor?.correo || !datos.profesor.correo.includes('@')) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Correo electrónico inválido' })
            };
        }

        const pb = await getPocketBaseAdmin();
        
        datos.fecha = new Date().toISOString();
        
        const record = await pb.collection('encuestas').create(datos);
        
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ 
                success: true, 
                id: record.id,
                mensaje: 'Encuesta guardada exitosamente'
            })
        };

    } catch (error) {
        console.error('❌ Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Error interno del servidor' })
        };
    }
};

