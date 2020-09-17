// ==================
// Puerto
// ==================
process.env.PORT = process.env.PORT || 3000;

// ==================
// Entorno
// ==================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ==================
// Base de datos
// ==================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb+srv://dbAdmin:Climatologia2020@cluster0.ysbbc.azure.mongodb.net/Cafe';
}else {
    urlDB = 'mongodb+srv://dbAdmin:Climatologia2020@cluster0.ysbbc.azure.mongodb.net/Cafe';
}
process.env.URLDB = urlDB;

// ==================
// Vencimiento del token
// ==================
// 60 segundos
// 60 minutos
// 24 horas
// = 30 días

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// ==================
// SEED de autenticación
// ==================

process.env.SEED = process.env.SEED || 'este-es-seed-desarrollo';