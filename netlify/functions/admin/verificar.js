// netlify/functions/admin/verificar.js
exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ 
                success: false, 
                error: 'Método no permitido. Solo POST' 
            })
        };
    }

    try {
        const { token } = JSON.parse(event.body);
        
        if (!token) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ 
                    success: false, 
                    error: 'Token no proporcionado' 
                })
            };
        }

        if (token === process.env.ADMIN_SECRET) {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ 
                    success: true,
                    message: 'Acceso concedido'
                })
            };
        }
        
        return {
            statusCode: 401,
            headers,
            body: JSON.stringify({ 
                success: false, 
                error: 'Token inválido' 
            })
        };
        
    } catch (error) {
        console.error('Error en verificar.js:', error);
        
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                success: false, 
                error: 'Error interno del servidor' 
            })
        };
    }
};