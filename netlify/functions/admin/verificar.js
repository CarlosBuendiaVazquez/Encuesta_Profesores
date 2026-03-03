// netlify/functions/admin/verificar.js
exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    // Manejar preflight OPTIONS (importante para CORS)
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    // Solo permitir POST
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
        // Obtener el token del cuerpo de la petición
        const { token } = JSON.parse(event.body);
        
        // Validar que se envió un token
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

        // Verificar contra variable de entorno de Netlify
        // ADMIN_SECRET debe estar configurada en Netlify (value = "admin2026")
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
        
        // Token incorrecto
        return {
            statusCode: 401,
            headers,
            body: JSON.stringify({ 
                success: false, 
                error: 'Token inválido' 
            })
        };
        
    } catch (error) {
        // Error al parsear JSON o error interno
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