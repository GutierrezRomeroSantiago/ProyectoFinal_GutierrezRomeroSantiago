// El diseño de este esquema tiene el objetivo de de hacer como base para la subida de datos a la colección "Enviados"

import {Schema, model } from 'mongoose'

// Definimos el Schema
const enviadoSchema = new Schema({
    _id: {
        type: Number
    },
    _compañia: {
        type: String
    },
    _paisSalida: {
        type: String
    },
    _fechaEntrega: {
        type: Date
    }
},{ versionKey: false })


export type iEnv = {
    _id: Number | null,
    _compañia: String | null,
    _paisSalida: String | null,
    _fechaEntrega: Date | null
  }

// La colección de la BD (Plural siempre)
export const Enviados = model('enviados', enviadoSchema)