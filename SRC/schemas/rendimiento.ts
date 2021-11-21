// El diseño de este esquema tiene el objetivo de de hacer como base para la subida de datos a la colección "Rendimientos"
import {Schema, model } from 'mongoose'

// Definimos el Schema
const rendimientoSchema = new Schema({
    _id: {
        type: Number
    },
    _precioCompra: {
        type: Number
    },
    _precioVenta: {
        type: Number
    },
    _rendimiento: {
        type: Number
    }
},{ versionKey: false })


export type iRend = {
    _id: Number | null,
    _precioCompra: Number | null,
    _precioVenta: Number | null,
    _rendimiento: Number | null,
  }

// La colección de la BD (Plural siempre)
export const Rendimientos = model('rendimientos', rendimientoSchema)