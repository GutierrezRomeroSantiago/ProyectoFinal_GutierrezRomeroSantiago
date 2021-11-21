import { Prenda } from '../SRC/clases/prenda'
import { Joya } from '../SRC/clases/joyas'
import { Abrigo } from '../SRC/clases/abrigos'
import { Calzado } from '../SRC/clases/calzados'

import { Pedido } from '../SRC/clases/pedido'
import { Normal } from '../SRC/clases/pedidosN'
import { Expres } from '../SRC/clases/expres'

import { db } from '../SRC/database/database'

import { menuPral } from './vistas/menuPral'

import { Prendas, iJoya, iCalzado, iAbrigo, iPrenda } from '../SRC/schemas/prenda'
import { Pedidos, tPedido, iNormal, iExpres, iPedido } from '../SRC/schemas/pedido'

import { nuevoAbrigo, nuevaJoya, nuevoCalzado, nuevoPnormal, nuevoPexpres, salvarTodo, salvarTodo2, pedidosAsignados, enviados, total, cambiarPrenda, benTotalInd, borrPedPrendas, rendimientos } from './acciones/funciones'



const main = async () => {
    let prendas: Array<Prenda> = new Array<Prenda>();
    let pedidos: Array<Pedido> = new Array<Pedido>();
    let n: number

    do {
        n = await menuPral()
        switch(n){
            case 1:
                await nuevoAbrigo(prendas)
                break
            case 2:
                await nuevoCalzado(prendas)
                break
            case 3:
                await nuevaJoya(prendas)
                break
            case 4:
                await nuevoPnormal(pedidos)
                break
            case 5:
                await nuevoPexpres(pedidos)
                break
            case 6:
                salvarTodo(prendas)
                break
            case 7:
                salvarTodo2(pedidos)
                break
            case 8:
                await pedidosAsignados()
                break
            case 9:
                await enviados()
                break
            case 10:
                await total()
                break
            case 11:
                await cambiarPrenda()
                break
            case 12:
                await benTotalInd()
                break
            case 13:
                await borrPedPrendas()
                break
            case 14:
                await rendimientos()
                break
            case 0:
                console.log('\nAdios')
        }
    }while (n != 0)
}
main()