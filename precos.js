import { Produto } from "./produto"

export class Preco extends Produto{
    constructor(codigo, custo,venda){
        super(codigo)
        this.custo = custo
        this.venda = venda
    }
}