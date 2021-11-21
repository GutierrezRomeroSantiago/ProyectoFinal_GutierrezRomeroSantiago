import { leerTeclado } from '../vistas/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Crear nuevo abrigo en memoria')
    console.log('2.- Crear nuevo calzado en memoria')
    console.log('3.- Crear nueva joya en memoria')
    console.log('4.- Crear nuevo pedido normal en memoria')
    console.log('5.- Crear nuevo pedido expres en memoria')
    console.log('6.- SALVAR PRENDAS EN BD')
    console.log('7.- SALVAR PEDIDOS EN BD')
    console.log('8.- Mostrar pedidos listos')
    console.log('9.- Hacer persistentes pedidos ya enviados')
    console.log('10.- Mostrar precio total de todo el pedido')
    console.log('11.- Cambiar una prenda de pedido')
    console.log('12.- Mostrar el beneficio de cada pedido y el beneficio total')
    console.log('13.- Borrar un pedido y todas sus prendas de la BD')
    console.log('14.- Hacer persistentes los mejores rendimientos')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}