import { leerTeclado } from '../vistas/entradaTeclado'
import { Abrigo } from '../clases/abrigos'
import { Prenda } from '../clases/prenda'
import { Joya } from '../clases/joyas';
import { Calzado } from '../clases/calzados';
import { Pedido } from '../clases/pedido'
import { Normal } from '../clases/pedidosN'
import { Expres } from '../clases/expres'

import { Prendas, iJoya, iCalzado, iAbrigo, iPrenda } from '../schemas/prenda'
import { Pedidos, tPedido, iNormal, iExpres, iPedido } from '../schemas/pedido'

import { db } from '../database/database'
import { Enviados ,iEnv } from '../schemas/enviados';
import {Rendimientos, iRend} from '../schemas/rendimiento'


// FUNCIÓN 1 CREAR OBJETOS DE TIPO ABRIGO
export const nuevoAbrigo = async (prendas: Array<Prenda>) =>  {                                 
    let prend: Abrigo;
    const id = Number(await leerTeclado('ID de la prenda'));
    const precioXmayor = parseInt(await leerTeclado('Precio de compra al por mayor'));
    const precioPublico = parseInt(await leerTeclado('Precio de Venta en tienda')) ;
    const fechaCompra =  new Date(await leerTeclado('Fecha de Compra del producto'));
    const material = String( await leerTeclado('Material de fabricación') );
    const paisFabric = String( await leerTeclado('Pais de fabricación del producto') );
    const pedi = Number( await leerTeclado('Indica el ID del pedido al que pertenece esta prenda') );
    const manga = String( await leerTeclado('Tipo de manga del abrigo') );
    const cremallera = Boolean( await leerTeclado('Abrigo con cremallera') );
    const cuello = String( await leerTeclado('Tipo de cuello del abrigo') );
    prend = new Abrigo (
        id, 
        precioXmayor, 
        precioPublico, 
        fechaCompra,  
        material,
        paisFabric,
        pedi,
        manga,
        cremallera,
        cuello);
    prendas.push(prend);
}


// FUNCIÓN 2 CREAR OBJETOS DE TIPO JOYA
export const nuevaJoya = async (prendas: Array<Prenda>) =>  {                                 
    let prend: Joya;
    const id = Number(await leerTeclado('ID de la prenda'));
    const precioXmayor = parseInt(await leerTeclado('Precio de compra al por mayor'));
    const precioPublico = parseInt(await leerTeclado('Precio de Venta en tienda')) ;
    const fechaCompra =  new Date(await leerTeclado('Fecha de Compra del producto'));
    const material = String( await leerTeclado('Material de fabricación') );
    const paisFabric = String( await leerTeclado('Pais de fabricación del producto') );
    const pedi = Number( await leerTeclado('Indica el ID del pedido al que pertenece esta prenda') );
    const quilates = parseInt( await leerTeclado('Indica los quilates de la Joya') );
    const peso = parseInt( await leerTeclado('Indica el peso de la joya') );
    prend = new Joya (
        id, 
        precioXmayor, 
        precioPublico, 
        fechaCompra,  
        material,
        paisFabric,
        pedi,
        quilates,
        peso,);
    prendas.push(prend);
}


// FUNCIÓN 3 CREAR OBJETOS DE TIPO CALZADO
export const nuevoCalzado = async (prendas: Array<Prenda>) =>  {                                 
    let prend: Calzado;
    const id = Number(await leerTeclado('ID de la prenda'));
    const precioXmayor = parseInt(await leerTeclado('Precio de compra al por mayor'));
    const precioPublico = parseInt(await leerTeclado('Precio de Venta en tienda')) ;
    const fechaCompra =  new Date(await leerTeclado('Fecha de Compra del producto'));
    const material = String( await leerTeclado('Material de fabricación') );
    const paisFabric = String( await leerTeclado('Pais de fabricación del producto') );
    const pedi = Number( await leerTeclado('Indica el ID del pedido al que pertenece esta prenda') );
    const suela = String( await leerTeclado('Tipo de suela del calzado') );
    const unidadesEnmercado = Number( await leerTeclado('Unidades existentes en mercado') );
    const calidad = String( await leerTeclado('Calidad del calzado') );
    prend = new Calzado (
        id, 
        precioXmayor, 
        precioPublico, 
        fechaCompra,
        material,
        paisFabric,
        pedi,
        suela,
        unidadesEnmercado,
        calidad);
    prendas.push(prend);
}


// FUNCIÓN 4 CREAR OBJETOS DE TIPO PEDIDO NORMAL
export const nuevoPnormal = async (pedidos: Array <Pedido>) => {
    let ped: Normal
    const id = Number(await leerTeclado('Id del pedido'));
    const precioBase = parseInt(await leerTeclado('Precio Base del pedido'));
    const diasAprox = parseInt(await leerTeclado('Dias que tarda en llegar aproximadamente')) ;
    const compañia =  String(await leerTeclado('Compañia de reparto'));
    const fechaEnvio = new Date( await leerTeclado('Fecha de Envio') );
    const paisSalida = String( await leerTeclado('Pais desde el que sale el envio') );
    const estado = Boolean( await leerTeclado('Estado del producto') );
    const incremento = parseInt( await leerTeclado('Porcentaje de incremento al pedido') );
    const impuesto = parseInt( await leerTeclado('Impuesto aplicado al pedido') );
    ped = new Normal (
        id, 
        precioBase, 
        diasAprox, 
        compañia, 
        fechaEnvio, 
        paisSalida,
        estado,
        incremento,
        impuesto,);
    pedidos.push(ped);
}


// FUNCIÓN 4 CREAR OBJETOS DE TIPO PEDIDO NORMAL
export const nuevoPexpres = async (pedidos: Array <Pedido>) => {
    let ped: Expres
    const id = Number(await leerTeclado('Id del pedido'));
    const precioBase = parseInt(await leerTeclado('Precio Base del pedido'));
    const diasAprox = parseInt(await leerTeclado('Dias que tarda en llegar aproximadamente')) ;
    const compañia =  String(await leerTeclado('Compañia de reparto'));
    const fechaEnvio = new Date( await leerTeclado('Fecha de Envio') );
    const paisSalida = String( await leerTeclado('Pais desde el que sale el envio') );
    const estado = Boolean( await leerTeclado('Estado del producto') );
    const material = String( await leerTeclado('Material del paquete') );
    const volumen = parseInt( await leerTeclado('Volumen del paquete') );
    const proteccion = Boolean( await leerTeclado('Proteccion del paquete') );
    ped = new Expres (
        id, 
        precioBase, 
        diasAprox, 
        compañia, 
        fechaEnvio, 
        paisSalida,
        estado,
        material,
        volumen,
        proteccion);
    pedidos.push(ped);
}


// FUNCIÓN 5
// SALVAR LAS PRENDAS EN LA BD
export let salvarTodo = async (prendas: Array<Prenda>) => {
    
    //CREAMOS EL OBJETO ESCHEMA
    let oSchema: any
    //DEFINIMOS LOS DOCUMENTOS SCHEMA DE TIPOS PRENDA
    let dSchemaPrenda: iPrenda = {
     _tipoPrenda: null,
     _id: null,
     _precioXmayor: null,
     _precioPublico: null,
     _fechaCompra: null,
     _material: null,
     _paisFabric: null,
     _pedi: null,
    }
    let dSchemaAbrigo: iAbrigo =
    {
     _tipoPrenda: null,
     _id: null,
     _precioXmayor: null,
     _precioPublico: null,
     _fechaCompra: null,
     _material: null,
     _paisFabric: null,
     _pedi: null,
     _manga: null,
     _cremallera: null,
     _cuello: null
    }
    let dSchemaCalzado: iCalzado =
    {
     _tipoPrenda: null,
     _id: null,
     _precioXmayor: null,
     _precioPublico: null,
     _fechaCompra: null,
     _material: null,
     _paisFabric: null,
     _pedi: null,
     _suela: null,
     _unidadesEnmercado: null,
     _calidad: null,
    }
    let dSchemaJoya: iJoya =
    {
     _tipoPrenda: null,
     _id: null,
     _precioXmayor: null,
     _precioPublico: null,
     _fechaCompra: null,
     _material: null,
     _paisFabric: null,
     _pedi: null,
     _quilates: null,
     _peso: null,
    }
    
    await db.conectarBD()
    //Recorremos array prendas
    for (let ped of prendas) {
     //Introducimos los valores comunes a todas las prendas
         dSchemaPrenda._id = dSchemaAbrigo._id = dSchemaCalzado._id = dSchemaJoya._id = ped.id
         dSchemaPrenda._precioXmayor = dSchemaAbrigo._precioXmayor = dSchemaCalzado._precioXmayor = dSchemaJoya._precioXmayor = ped.precioXmayor
         dSchemaPrenda._precioPublico = dSchemaAbrigo._precioPublico = dSchemaCalzado._precioPublico = dSchemaJoya._precioPublico = ped.precioPublico
         dSchemaPrenda._fechaCompra = dSchemaAbrigo._fechaCompra = dSchemaCalzado._fechaCompra = dSchemaJoya._fechaCompra = ped.fechaCompra
         dSchemaPrenda._material = dSchemaAbrigo._material = dSchemaCalzado._material = dSchemaJoya._material = ped.material
         dSchemaPrenda._paisFabric = dSchemaAbrigo._paisFabric = dSchemaCalzado._paisFabric = dSchemaJoya._paisFabric = ped.paisFabric
         dSchemaPrenda._pedi = dSchemaAbrigo._pedi = dSchemaCalzado._pedi = dSchemaJoya._pedi = ped.pedi
        
         if (ped instanceof Joya){
             dSchemaJoya._tipoPrenda = "Joya"
             dSchemaJoya._quilates = ped.quilates
             dSchemaJoya._peso = ped.peso
             oSchema = new Prendas(dSchemaJoya)
         }else if (ped instanceof Abrigo) {
             dSchemaAbrigo._tipoPrenda = "Abrigo"
             dSchemaAbrigo._manga = ped.manga
             dSchemaAbrigo._cremallera = ped.cremallera
             dSchemaAbrigo._cuello = ped.cuello
             oSchema = new Prendas(dSchemaAbrigo)
         }else if (ped instanceof Calzado) {
             dSchemaCalzado._tipoPrenda = "Calzado"
             dSchemaCalzado._suela = ped.suela
             dSchemaCalzado._unidadesEnmercado = ped.unidadesEnmercado
             dSchemaCalzado._calidad = ped.calidad
             oSchema = new Prendas(dSchemaCalzado)
         }
         await oSchema.save()
    }
    await db.desconectarBD()
 }


// FUNCIÓN 6 SALVAR EN BD LOS PEDIDOS PREVIAMENTE CREADOS
 export let salvarTodo2 = async (pedidos: Array<Pedido>) => {
         //CREAMOS EL OBJETO ESCHEMA
    let aSchema: any
    //DEFINIMOS LOS DOCUMENTOS SCHEMA DE TIPOS PEDIDOS
    let sSchemaPedido: iPedido = {
    _tipoPedido: null,
    _id: null,
    _precioBase: null,
    _diasAprox: null,
    _compañia: null,
    _fechaEnvio: null,
    _paisSalida: null,
    _estado: null,
    _arrayPrendas: null,
    }
    let sSchemaNormal: iNormal = {
    _tipoPedido: null,
    _id: null,
    _precioBase: null,
    _diasAprox: null,
    _compañia: null,
    _fechaEnvio: null,
    _paisSalida: null,
    _estado: null,
    _arrayPrendas: null,
    _incremento: null,
    _impuesto: null
    }
    let sSchemaExpres: iExpres = {
    _tipoPedido: null,
    _id: null,
    _precioBase: null,
    _diasAprox: null,
    _compañia: null,
    _fechaEnvio: null,
    _paisSalida: null,
    _estado: null,
    _arrayPrendas: null,
    _material: null,
    _volumen : null,
    _proteccion : null,  
    }
 
    await db.conectarBD()
    //Recorremos array pedidos
    for (let pedx of pedidos) {
        sSchemaPedido._id = sSchemaNormal._id = sSchemaExpres._id = pedx.id
        sSchemaPedido._precioBase = sSchemaNormal._precioBase = sSchemaExpres._precioBase = pedx.precioBase
        sSchemaPedido._diasAprox = sSchemaNormal._diasAprox = sSchemaExpres._diasAprox = pedx.diasAprox
        sSchemaPedido._compañia = sSchemaNormal._compañia = sSchemaExpres._compañia = pedx.compañia
        sSchemaPedido._fechaEnvio = sSchemaNormal._fechaEnvio = sSchemaExpres._fechaEnvio = pedx.fechaEnvio
        sSchemaPedido._paisSalida = sSchemaNormal._paisSalida = sSchemaExpres._paisSalida = pedx.paisSalida
        sSchemaPedido._estado = sSchemaNormal._estado = sSchemaExpres._estado = pedx.estado
        sSchemaPedido._arrayPrendas = sSchemaNormal._arrayPrendas = sSchemaExpres._arrayPrendas = pedx.arrayPrendas

        if (pedx instanceof Normal) {
            sSchemaNormal._tipoPedido = "Normal"
            sSchemaNormal._incremento = pedx.incremento
            sSchemaNormal._impuesto = pedx.impuesto
            aSchema = new Pedidos(sSchemaNormal)
        } else if (pedx instanceof Expres) {
            sSchemaExpres._tipoPedido = "Expres"
            sSchemaExpres._material = pedx.material
            sSchemaExpres._volumen = pedx.volumen
            sSchemaExpres._proteccion = pedx.proteccion
            aSchema = new Pedidos(sSchemaExpres)
        }
        await aSchema.save()
    }
    await db.desconectarBD()
 }



 //FUNCIÓN CON ESTA FUNCIÓN BUSCAMOS UNIR LAS COLECIONES DE PRENAS Y PEDIDOS, CON EL FIN DE MOSTRAR TODAS LAS PRENDAS QUE CORRESPONDEN
 //A CADA PEDIDO.
 export const pedidosAsignados = async () => {
     await db.conectarBD()

     let d: any
     let dPedido: tPedido
     let tmpPedido: Pedido = new Pedido(0, 0, 0, "",d, "", false)
     let tmpPrenda: Prenda = new Prenda(0,0,0,d,"","",0)
     let query: any = await Pedidos.find( {} )

     for (dPedido of query) {
         if (dPedido._tipoPedido == "Normal"){
            tmpPedido = new Normal(
                dPedido._id, 
                dPedido._precioBase, 
                dPedido._diasAprox, 
                dPedido._compañia, 
                dPedido._fechaEnvio, 
                dPedido._paisSalida,
                dPedido._estado,
                dPedido._incremento, 
                dPedido._impuesto)
            let query2: any = await Prendas.find( {_pedi: dPedido._id} )

            for (let dPrenda of query2) {
                if (dPrenda._tipoPrenda == "Abrigo"){
                    tmpPrenda = new Abrigo(
                        dPrenda._id, 
                        dPrenda._precioXmayor, 
                        dPrenda._precioPublico, 
                        dPrenda._fechaCompra, 
                        dPrenda._material, 
                        dPrenda._paisFabric, 
                        dPrenda._pedi, 
                        dPrenda._manga, 
                        dPrenda._cremallera, 
                        dPrenda._cuello)
                }
                if (dPrenda._tipoPrenda == "Calzado") {
                    tmpPrenda = new Calzado(
                        dPrenda._id, 
                        dPrenda._precioXmayor, 
                        dPrenda._precioPublico, 
                        dPrenda._fechaCompra, 
                        dPrenda._material, 
                        dPrenda._paisFabric, 
                        dPrenda._pedi, 
                        dPrenda._suela, 
                        dPrenda._unidadesEnmercado, 
                        dPrenda._calidad)
                } 
                if (dPrenda._tipoPrenda == "Joya"){
                    tmpPrenda = new Joya(
                        dPrenda._id, 
                        dPrenda._precioXmayor, 
                        dPrenda._precioPublico, 
                        dPrenda._fechaCompra, 
                        dPrenda._material, 
                        dPrenda._paisFabric, 
                        dPrenda._pedi, 
                        dPrenda._quilates, 
                        dPrenda._peso)
                    
                }
                tmpPedido.addPrenda(tmpPrenda)
            }
         } else {
            tmpPedido = new Expres(
                dPedido._id, 
                dPedido._precioBase, 
                dPedido._diasAprox, 
                dPedido._compañia, 
                dPedido._fechaEnvio, 
                dPedido._paisSalida,
                dPedido._estado,
                dPedido._material,
                dPedido._volumen, 
                dPedido._proteccion)
            let query2: any = await Prendas.find( {_pedi: dPedido._id} )

            for (let dPrenda of query2) {
                if (dPrenda._tipoPrenda == "Abrigo"){
                    tmpPrenda = new Abrigo(
                        dPrenda._id, 
                        dPrenda._precioXmayor, 
                        dPrenda._precioPublico, 
                        dPrenda._fechaCompra, 
                        dPrenda._material, 
                        dPrenda._paisFabric, 
                        dPrenda._pedi, 
                        dPrenda._manga, 
                        dPrenda._cremallera, 
                        dPrenda._cuello)
                } 
                if (dPrenda._tipoPrenda == "Calzado") {
                    tmpPrenda = new Calzado(
                        dPrenda._id, 
                        dPrenda._precioXmayor, 
                        dPrenda._precioPublico, 
                        dPrenda._fechaCompra, 
                        dPrenda._material, 
                        dPrenda._paisFabric, 
                        dPrenda._pedi, 
                        dPrenda._suela, 
                        dPrenda._unidadesEnmercado, 
                        dPrenda._calidad)
                } 
                if (dPrenda._tipoPrenda == "Joya"){
                    tmpPrenda = new Joya(
                        dPrenda._id, 
                        dPrenda._precioXmayor, 
                        dPrenda._precioPublico, 
                        dPrenda._fechaCompra, 
                        dPrenda._material, 
                        dPrenda._paisFabric, 
                        dPrenda._pedi, 
                        dPrenda._quilates, 
                        dPrenda._peso)
                }
                tmpPedido.addPrenda(tmpPrenda)
            } 
        }
            console.log(tmpPedido)    
     }
    await db.desconectarBD()
 }

// Con esta función creamos la colección enviados, en esta coleccion guardamos el ID del pedido, la compañia que se ocupo del envio
// y el pais desde el que procede el envio. Unicamente se guardaran aquellos documentos que en la coleccion pedidos tenga marcado en TRUE
// el campo estado, el cual hace referencia al estado del pedido TRUE: Enviado FALSE: Pendiente de envio. 
 export const enviados = async () => {
    await db.conectarBD()
    let dPedido: tPedido
    let query: any = await Pedidos.find( { _estado : { $eq: true } } )
    let oSchema: any
    let dSchemaEnv: iEnv =
        {
            _id: null,
            _compañia: null,
            _paisSalida: null,
            _fechaEntrega: null
        }
    for (dPedido of query){
        
        const suma = dPedido._diasAprox
        const entrega=new Date(dPedido._fechaEnvio);
        entrega.setDate(entrega.getDate()+ suma)

        dSchemaEnv._id = dPedido._id
        dSchemaEnv._compañia = dPedido._compañia
        dSchemaEnv._paisSalida = dPedido._paisSalida
        dSchemaEnv._fechaEntrega = entrega

        oSchema = new Enviados(dSchemaEnv)
        await oSchema.save()
    }
    await db.desconectarBD()
}

//Calculamos el costo de cada uno de los pedidos mediante el uso de metodos especificos de cada pedido y cada prenda, al final procedemos a 
// realizar la suma del precio del pedido mas el de las prendas que este lleva dentro, dando como resultado el precio final del pedido.

export const total = async () => {
    await db.conectarBD()
     let d: any
     let dPedido: tPedido
     let tmpPedido: Pedido = new Pedido(0, 0, 0, "",d, "", false)
     let tmpPrenda: Prenda = new Prenda(0,0,0,d,"","",0)
     let query: any = await Pedidos.find( {} )

     for (dPedido of query){
        if (dPedido._tipoPedido == "Normal"){
            tmpPedido = new Normal(
                dPedido._id, 
                dPedido._precioBase, 
                dPedido._diasAprox, 
                dPedido._compañia, 
                dPedido._fechaEnvio, 
                dPedido._paisSalida,
                dPedido._estado,
                dPedido._incremento, 
                dPedido._impuesto)
            let query2: any = await Prendas.find( {_pedi: dPedido._id} )

            for (let dPrenda of query2) {
                if (dPrenda._tipoPrenda == "Abrigo"){
                    tmpPrenda = new Abrigo(
                        dPrenda._id, 
                        dPrenda._precioXmayor, 
                        dPrenda._precioPublico, 
                        dPrenda._fechaCompra, 
                        dPrenda._material, 
                        dPrenda._paisFabric, 
                        dPrenda._pedi, 
                        dPrenda._manga, 
                        dPrenda._cremallera, 
                        dPrenda._cuello)
                }
                if (dPrenda._tipoPrenda == "Calzado") {
                    tmpPrenda = new Calzado(
                        dPrenda._id, 
                        dPrenda._precioXmayor, 
                        dPrenda._precioPublico, 
                        dPrenda._fechaCompra, 
                        dPrenda._material, 
                        dPrenda._paisFabric, 
                        dPrenda._pedi, 
                        dPrenda._suela, 
                        dPrenda._unidadesEnmercado, 
                        dPrenda._calidad)
                } 
                if (dPrenda._tipoPrenda == "Joya"){
                    tmpPrenda = new Joya(
                        dPrenda._id, 
                        dPrenda._precioXmayor, 
                        dPrenda._precioPublico, 
                        dPrenda._fechaCompra, 
                        dPrenda._material, 
                        dPrenda._paisFabric, 
                        dPrenda._pedi, 
                        dPrenda._quilates, 
                        dPrenda._peso)
                    
                }
                tmpPedido.addPrenda(tmpPrenda)
            }
         } else {
            tmpPedido = new Expres(
                dPedido._id, 
                dPedido._precioBase, 
                dPedido._diasAprox, 
                dPedido._compañia, 
                dPedido._fechaEnvio, 
                dPedido._paisSalida,
                dPedido._estado,
                dPedido._material,
                dPedido._volumen, 
                dPedido._proteccion)
            let query2: any = await Prendas.find( {_pedi: dPedido._id} )

            for (let dPrenda of query2) {
                if (dPrenda._tipoPrenda == "Abrigo"){
                    tmpPrenda = new Abrigo(
                        dPrenda._id, 
                        dPrenda._precioXmayor, 
                        dPrenda._precioPublico, 
                        dPrenda._fechaCompra, 
                        dPrenda._material, 
                        dPrenda._paisFabric, 
                        dPrenda._pedi, 
                        dPrenda._manga, 
                        dPrenda._cremallera, 
                        dPrenda._cuello)
                } 
                if (dPrenda._tipoPrenda == "Calzado") {
                    tmpPrenda = new Calzado(
                        dPrenda._id, 
                        dPrenda._precioXmayor, 
                        dPrenda._precioPublico, 
                        dPrenda._fechaCompra, 
                        dPrenda._material, 
                        dPrenda._paisFabric, 
                        dPrenda._pedi, 
                        dPrenda._suela, 
                        dPrenda._unidadesEnmercado, 
                        dPrenda._calidad)
                } 
                if (dPrenda._tipoPrenda == "Joya"){
                    tmpPrenda = new Joya(
                        dPrenda._id, 
                        dPrenda._precioXmayor, 
                        dPrenda._precioPublico, 
                        dPrenda._fechaCompra, 
                        dPrenda._material, 
                        dPrenda._paisFabric, 
                        dPrenda._pedi, 
                        dPrenda._quilates, 
                        dPrenda._peso)
                }
                tmpPedido.addPrenda(tmpPrenda)
            } 
        }

            let pedd = tmpPedido.costoPedido()

            let prend = tmpPedido.precioFinalped()

            let final = pedd + prend
            console.log("El precio final del pedido con id:", dPedido._id)
            console.log("es igual a:", final, "€")
     }
     await db.desconectarBD()
}


//Con esta función buscamos realizar un cambio en el campo de las prendas que hace referencia
// al pedido al que pertenecen, todo ello se trabajara en BD

export const cambiarPrenda = async () => {
    let d: any
    let tmpPrenda: Prenda

    //Preguntamos por el ID del pedido donde se encuentra la prenda
    const identificador = Number(await leerTeclado('Indica el identificador del pedido donde meteras la prenda'))

    await db.conectarBD()

    // Vamos a proceder a realizar un query en la BD de prendas a traves del ID de dicha prenda, 
    //es decir ,vamos a buscar una preda en concreto

    const identificador2 = await leerTeclado('Indica el identificador de la prenda a modificar')
    let query2: any = await Prendas.findOne({_id: identificador2})
    //Procederemos a montar el objeto:
    if (query2._tipoPrenda == "Abrigo"){
        tmpPrenda = new Abrigo(
            query2._id, 
            query2._precioXmayor, 
            query2._precioPublico, 
            query2._fechaCompra, 
            query2._material, 
            query2._paisFabric, 
            identificador, 
            query2._manga, 
            query2._cremallera, 
            query2._cuello)
    console.log("El pedido modificado quedara de la siguiente manera:")
    console.log(tmpPrenda)
    } 
    if (query2._tipoPrenda == "Calzado") {
        tmpPrenda = new Calzado(
            query2._id, 
            query2._precioXmayor, 
            query2._precioPublico, 
            query2._fechaCompra, 
            query2._material, 
            query2._paisFabric, 
            identificador, 
            query2._suela, 
            query2._unidadesEnmercado, 
            query2._calidad)
    console.log("El pedido modificado quedara de la siguiente manera:")
    console.log(tmpPrenda)
    } 
    if (query2._tipoPrenda == "Joya"){
        tmpPrenda = new Joya(
            query2._id, 
            query2._precioXmayor, 
            query2._precioPublico, 
            query2._fechaCompra, 
            query2._material, 
            query2._paisFabric, 
            identificador, 
            query2._quilates, 
            query2._peso)
    console.log("El pedido modificado quedara de la siguiente manera:")
    console.log(tmpPrenda)
    }
    await Prendas.findOneAndUpdate( {_id: identificador2}, {_pedi: identificador}, {runValidators: true} )
    .then(() => console.log('Modificado Correctamente') )
    .catch( (err: any) => console.log('Error: '+err))
    
    await db.desconectarBD()
}

//Con este función nos planteamos el objetivo de calcular el beneficio total de todos los pedidos
//y el beneficio individual de cada uno de los pedidos.

export const benTotalInd = async () => {
    await db.conectarBD()
     let d: any
     let dPedido: tPedido
     let tmpPedido: Pedido = new Pedido(0, 0, 0, "",d, "", false)
     let tmpPrenda: Prenda = new Prenda(0,0,0,d,"","",0)
     let query: any = await Pedidos.find( {} )
     let count: number = 0
     let suma: number = 0

     for (dPedido of query){
        if (dPedido._tipoPedido == "Normal"){
            tmpPedido = new Normal(
                dPedido._id, 
                dPedido._precioBase, 
                dPedido._diasAprox, 
                dPedido._compañia, 
                dPedido._fechaEnvio, 
                dPedido._paisSalida,
                dPedido._estado,
                dPedido._incremento, 
                dPedido._impuesto)
            let query2: any = await Prendas.find( {_pedi: dPedido._id} )

            for (let dPrenda of query2) {
                if (dPrenda._tipoPrenda == "Abrigo"){
                    tmpPrenda = new Abrigo(
                        dPrenda._id, 
                        dPrenda._precioXmayor, 
                        dPrenda._precioPublico, 
                        dPrenda._fechaCompra, 
                        dPrenda._material, 
                        dPrenda._paisFabric, 
                        dPrenda._pedi, 
                        dPrenda._manga, 
                        dPrenda._cremallera, 
                        dPrenda._cuello)
                }
                if (dPrenda._tipoPrenda == "Calzado") {
                    tmpPrenda = new Calzado(
                        dPrenda._id, 
                        dPrenda._precioXmayor, 
                        dPrenda._precioPublico, 
                        dPrenda._fechaCompra, 
                        dPrenda._material, 
                        dPrenda._paisFabric, 
                        dPrenda._pedi, 
                        dPrenda._suela, 
                        dPrenda._unidadesEnmercado, 
                        dPrenda._calidad)
                } 
                if (dPrenda._tipoPrenda == "Joya"){
                    tmpPrenda = new Joya(
                        dPrenda._id, 
                        dPrenda._precioXmayor, 
                        dPrenda._precioPublico, 
                        dPrenda._fechaCompra, 
                        dPrenda._material, 
                        dPrenda._paisFabric, 
                        dPrenda._pedi, 
                        dPrenda._quilates, 
                        dPrenda._peso)
                    
                }
                tmpPedido.addPrenda(tmpPrenda)
            }
         } else {
            tmpPedido = new Expres(
                dPedido._id, 
                dPedido._precioBase, 
                dPedido._diasAprox, 
                dPedido._compañia, 
                dPedido._fechaEnvio, 
                dPedido._paisSalida,
                dPedido._estado,
                dPedido._material,
                dPedido._volumen, 
                dPedido._proteccion)
            let query2: any = await Prendas.find( {_pedi: dPedido._id} )

            for (let dPrenda of query2) {
                if (dPrenda._tipoPrenda == "Abrigo"){
                    tmpPrenda = new Abrigo(
                        dPrenda._id, 
                        dPrenda._precioXmayor, 
                        dPrenda._precioPublico, 
                        dPrenda._fechaCompra, 
                        dPrenda._material, 
                        dPrenda._paisFabric, 
                        dPrenda._pedi, 
                        dPrenda._manga, 
                        dPrenda._cremallera, 
                        dPrenda._cuello)
                } 
                if (dPrenda._tipoPrenda == "Calzado") {
                    tmpPrenda = new Calzado(
                        dPrenda._id, 
                        dPrenda._precioXmayor, 
                        dPrenda._precioPublico, 
                        dPrenda._fechaCompra, 
                        dPrenda._material, 
                        dPrenda._paisFabric, 
                        dPrenda._pedi, 
                        dPrenda._suela, 
                        dPrenda._unidadesEnmercado, 
                        dPrenda._calidad)
                } 
                if (dPrenda._tipoPrenda == "Joya"){
                    tmpPrenda = new Joya(
                        dPrenda._id, 
                        dPrenda._precioXmayor, 
                        dPrenda._precioPublico, 
                        dPrenda._fechaCompra, 
                        dPrenda._material, 
                        dPrenda._paisFabric, 
                        dPrenda._pedi, 
                        dPrenda._quilates, 
                        dPrenda._peso)
                }
                tmpPedido.addPrenda(tmpPrenda)
            } 
        }
            let pedd = tmpPedido.costoPedido()

            let prend = tmpPedido.precioFinalped()

            let beni = tmpPedido.beneficioPedido()

            let final = pedd + prend
            let beniF = final - beni
            
            suma += beniF
            count += 1
            
            console.log("El beneficio del pedido con id:", dPedido._id)
            console.log("es igual a:", beniF, "€")
            if (count == query.length){
                console.log("El beneficio total de todos los pedidos es:", suma, "€")
            }
     }
            
     await db.desconectarBD()
}


// En esta función nos plateamos le objetivo de borrar de la BD aquellos pedidos que tengan ID  concreto, además también se borrarán
// las prendas asociadas a dicho pedido, todo este trabajo se realizará dentro de la BD.
export const borrPedPrendas = async () => {
    await db.conectarBD()
    let d: any
    let tmpPrenda: Prenda = new Prenda(0,0,0,d,"","",0)

    const idePed = Number(await leerTeclado('Indica el identificador del pedido que quieres borrar'))
    console.log("ATENCION: Todas las prendas asociadas a dicho pedido tambien se eliminaran")

    await Pedidos.findOneAndDelete( {_id: idePed} )

    let query2: any = await Prendas.find( {_pedi: idePed} )

    for (let dPrenda of query2) {
        if (dPrenda._tipoPrenda == "Abrigo"){
            tmpPrenda = new Abrigo(
                dPrenda._id, 
                dPrenda._precioXmayor, 
                dPrenda._precioPublico, 
                dPrenda._fechaCompra, 
                dPrenda._material, 
                dPrenda._paisFabric, 
                dPrenda._pedi, 
                dPrenda._manga, 
                dPrenda._cremallera, 
                dPrenda._cuello)
            await Prendas.findOneAndDelete( {_pedi: idePed} )
            .then(() => console.log("La prenda con id", dPrenda._id, "se ha eliminado") )
            .catch( (err: any) => console.log('Error: '+err))
            console.log(tmpPrenda)
        }
        if (dPrenda._tipoPrenda == "Calzado") {
            tmpPrenda = new Calzado(
                dPrenda._id, 
                dPrenda._precioXmayor, 
                dPrenda._precioPublico, 
                dPrenda._fechaCompra, 
                dPrenda._material, 
                dPrenda._paisFabric, 
                dPrenda._pedi, 
                dPrenda._suela, 
                dPrenda._unidadesEnmercado, 
                dPrenda._calidad)
            await Prendas.findOneAndDelete( {_pedi: idePed} )
            .then(() => console.log("La prenda con id", dPrenda._id, "se ha eliminado") )
            .catch( (err: any) => console.log('Error: '+err))
            console.log(tmpPrenda)
        } 
        if (dPrenda._tipoPrenda == "Joya"){
            tmpPrenda = new Joya(
                dPrenda._id, 
                dPrenda._precioXmayor, 
                dPrenda._precioPublico, 
                dPrenda._fechaCompra, 
                dPrenda._material, 
                dPrenda._paisFabric, 
                dPrenda._pedi, 
                dPrenda._quilates, 
                dPrenda._peso)
            await Prendas.findOneAndDelete( {_pedi: idePed} )
            .then(() => console.log("La prenda con id", dPrenda._id, "se ha eliminado") )
            .catch( (err: any) => console.log('Error: '+err))
            console.log(tmpPrenda)
            
        }
    }
    await db.desconectarBD()
}

// En esta función nos planteamos el objetivo de hacer persistente en una coleccion de las prendas que han tenido un mejor rendimiento de venta,
// es decir, aquellas prendas culla diferencia entre el precio de compra y venta ha sido mayor, concretamente al 30%

export const rendimientos = async () => {
    await db.conectarBD()
    let d: any
    let tmpPrenda: Prenda = new Prenda(0,0,0,d,"","",0)
    let query2: any = await Prendas.find( {} )
    let oSchema: any
    let dSchemaRend: iRend =
        {
        _id:  null,
        _precioCompra:  null,
        _precioVenta: null,
        _rendimiento: null,
        }


    for (let dPrenda of query2) {
        if (dPrenda._tipoPrenda == "Abrigo"){
            tmpPrenda = new Abrigo(
                dPrenda._id, 
                dPrenda._precioXmayor, 
                dPrenda._precioPublico, 
                dPrenda._fechaCompra, 
                dPrenda._material, 
                dPrenda._paisFabric, 
                dPrenda._pedi, 
                dPrenda._manga, 
                dPrenda._cremallera, 
                dPrenda._cuello)
        }
        if (dPrenda._tipoPrenda == "Calzado") {
            tmpPrenda = new Calzado(
                dPrenda._id, 
                dPrenda._precioXmayor, 
                dPrenda._precioPublico, 
                dPrenda._fechaCompra, 
                dPrenda._material, 
                dPrenda._paisFabric, 
                dPrenda._pedi, 
                dPrenda._suela, 
                dPrenda._unidadesEnmercado, 
                dPrenda._calidad)
        } 
        if (dPrenda._tipoPrenda == "Joya"){
            tmpPrenda = new Joya(
                dPrenda._id, 
                dPrenda._precioXmayor, 
                dPrenda._precioPublico, 
                dPrenda._fechaCompra, 
                dPrenda._material, 
                dPrenda._paisFabric, 
                dPrenda._pedi, 
                dPrenda._quilates, 
                dPrenda._peso)
            
        }
        
        let xMa = tmpPrenda.precioXmayorPrenda()
        let tieD = tmpPrenda.precioFinalPrenda()
        let rend: number
        let rend1: number
        let rendFin: number
        rend = xMa / tieD
        rend1 = rend*100
        rendFin = 100-rend1

        if (rendFin > 65){

            dSchemaRend._id = dPrenda._id
            dSchemaRend._precioCompra = xMa
            dSchemaRend._precioVenta = tieD
            dSchemaRend._rendimiento = rendFin

            oSchema = new Rendimientos(dSchemaRend)
            await oSchema.save()
        }
    }
    await db.desconectarBD()
}