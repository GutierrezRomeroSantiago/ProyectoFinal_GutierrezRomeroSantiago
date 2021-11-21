import { Prenda } from './prenda';

export class Pedido {
    protected _id: number;
    protected _precioBase: number;
    protected _diasAprox: number;
    private _compañia: string;
    protected _fechaEnvio: Date;
    private _paisSalida: string;
    protected _estado: boolean
    private _arrayPrendas: Array<Prenda>

    constructor(
        id: number, 
        precioBase: number, 
        diasAprox: number, 
        compañia: string, 
        fechaEnvio:Date, 
        paisSalida:string,
        estado: boolean ) {
        
        this._id = id;
        this._precioBase = precioBase;
        this._diasAprox = diasAprox;
        this._compañia = compañia;
        this._fechaEnvio = fechaEnvio;
        this._paisSalida = paisSalida;
        this._estado = estado;
        this._arrayPrendas = new Array<Prenda>()
    }
    
    // Metodos GET
get id() { 
    return this._id;
}
get precioBase() {
    return this._precioBase;
}
get diasAprox() {
    return this._diasAprox;
}
get compañia() {
    return this._compañia;
}
get fechaEnvio() {
    return this._fechaEnvio;
}
get paisSalida() {
    return this._paisSalida
}
get estado() {
    return this._estado
}
get arrayPrendas() {
    return this._arrayPrendas
}

// Calculos correspondientes a la clase PEDIDOS:
    // Calculo para modificar el precio de los productos en función de su pais de origen
    // si el pais de origen es diferente a España se aplicara una cantidad de IVA mayor



public addPrenda(arrayPrendas: Prenda) {
    this._arrayPrendas.push(arrayPrendas);
  }

costoPedido(): number {
    let costo: number
    costo = this._precioBase
    costo = costo*1.21
    return costo
}

public beneficioPedido(){
    let costo2: number = 0;
    for (let prenda of this._arrayPrendas) {
        costo2 += prenda.precioXmayorPrenda()
    }
    return costo2
}

public precioFinalped(){
    let precioFin: number = 0;
    for (let prenda of this._arrayPrendas) {
        precioFin += prenda.precioFinalPrenda()
    }
    return precioFin
}




}


