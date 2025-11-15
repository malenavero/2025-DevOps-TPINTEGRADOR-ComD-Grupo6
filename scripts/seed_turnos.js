const Turno = require("../models/turno_model");
const Paciente = require("../models/paciente_model");
const { SERVICIOS } = require("../utils/constants");


async function seedTurnos() {
  try {
    const pacientes = await Paciente.find().limit(5).lean();
    if (pacientes.length < 5) {
      return console.log("⚠️ No hay suficientes pacientes para generar turnos.");
    }

    const turnos = [
      {
        fecha: "2025-06-10",
        hora: "10:00",
        servicio: SERVICIOS[0],
        precio: 2500,
        pacienteId :pacientes[0]._id
      },
      {
        fecha: "2025-06-11",
        hora: "12:00",
        servicio: SERVICIOS[0],
        precio: 3500,
        pacienteId :pacientes[1]._id
      },
      {
        fecha: "2025-06-12",
        hora: "15:00",
        servicio: SERVICIOS[1],
        precio: 4500,
        pacienteId :pacientes[2]._id
      },
      {
        fecha: "2025-06-13",
        hora: "11:30",
        servicio: SERVICIOS[1],
        precio: 2800,
        pacienteId :pacientes[3]._id
      },
      {
        fecha: "2025-06-14",
        hora: "09:45",
        servicio: SERVICIOS[1],
        precio: 2200,
        pacienteId :pacientes[4]._id
      }
    ];

    const count = await Turno.countDocuments();
    if (count === 0) {
      await Turno.insertMany(turnos);
      console.log("✅ Turnos iniciales creados.");
    } else {
      console.log("ℹ️ Turnos ya existen. Seed no ejecutado.");
    }
  } catch (error) {
    console.error("❌ Error al ejecutar el seed de turnos:", error);
  }
}

module.exports = seedTurnos;
