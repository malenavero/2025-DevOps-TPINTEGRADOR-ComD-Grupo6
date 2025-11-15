// Este script es para correr todos los seeds de una sola vez
require('dotenv').config({ path: '../.env' });
const connectDB = require('../db.js'); 
const mongoose = require('mongoose');

// 1. Importamos todos los scripts de seed
const seedUsuarios = require("./seed_usuarios.js");
const seedProductos = require("./seed_productos.js");
const seedPacientes = require("./seed_pacientes.js");
const seedBusquedas = require("./seed_busquedas.js");
const seedTurnos = require("./seed_turnos.js");

// 2. Creamos la función principal que ejecuta todo
const runAllSeeds = async () => {
  try {
    console.log('Conectando a la BDD local de Docker...');
    await connectDB(); 

    console.log('¡Conectado! Ejecutando seeds...');
    
    // 3. Ejecutamos todos los seeds, uno por uno
    await seedUsuarios();
    await seedProductos();
    await seedPacientes();
    await seedBusquedas();
    await seedTurnos();

    console.log('¡Todos los seeds se ejecutaron con éxito!');
  
  } catch (error) {
    console.error('Error durante el proceso de seeding:', error);
  } finally {
    // 4. Nos desconectamos de la BDD
    await mongoose.disconnect();
    console.log('Desconectado de la BDD.');
  }
};

// 5. Ejecutamos la función
runAllSeeds();