const PocketBase = require('pocketbase/cjs');

let pbInstance = null;

async function getPocketBaseAdmin() {
    if (pbInstance) return pbInstance;

    if (!process.env.POCKETBASE_URL) {
        throw new Error('❌ Falta POCKETBASE_URL en variables de entorno');
    }
    if (!process.env.POCKETBASE_ADMIN_EMAIL) {
        throw new Error('❌ Falta POCKETBASE_ADMIN_EMAIL en variables de entorno');
    }
    if (!process.env.POCKETBASE_ADMIN_PASSWORD) {
        throw new Error('❌ Falta POCKETBASE_ADMIN_PASSWORD en variables de entorno');
    }

    const pb = new PocketBase(process.env.POCKETBASE_URL);
    
    try {
        await pb.admins.authWithPassword(
            process.env.POCKETBASE_ADMIN_EMAIL,
            process.env.POCKETBASE_ADMIN_PASSWORD
        );
        
        console.log('✅ Conectado a PocketBase como admin');
        pbInstance = pb;
        return pb;
        
    } catch (error) {
        console.error('❌ Error al autenticar con PocketBase:', error);
        throw new Error('No se pudo autenticar con PocketBase');
    }
}

module.exports = { getPocketBaseAdmin };