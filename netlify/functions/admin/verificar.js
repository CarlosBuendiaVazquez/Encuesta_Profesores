exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

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
        const { token } = JSON.parse(event.body);
        
        if (token === process.env.ADMIN_SECRET) {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ success: true })
            };
        }
        
        return {
            statusCode: 401,
            headers,
            body: JSON.stringify({ error: 'Token inválido' })
        };
        
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Error del servidor' })
        };
    }
};