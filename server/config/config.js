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

process.env.CADUCIDAD_TOKEN = '24 h'


// ==================
// SEED de autenticación
// ==================

process.env.SEED = process.env.SEED || 'este-es-seed-desarrollo';
// ==================
// Google client id
// ==================

process.env.CLIENT_ID = process.env.CLIENT_ID || '263850638244-aj469273njatnifhhd6t305vg9dufus7.apps.googleusercontent.com';
