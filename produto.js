export class Produto {
    constructor(codigo, descricao, custo, venda) {
        this.codigo = codigo
        this.descricaoItem = descricao
        this.custo = custo
        this.venda = venda
    }
    novoCusto(novoCusto){
        this.custo = novoCusto
    }
    novaPrecoVenda(novoPreco){
        this.venda = novoPreco
    }
    vendaMargem(margemDesejada){
        this.venda = this.custo * parseFloat((margemDesejada/100))
        //validar formula precificacao por margem, será informado pelo usuario quantos % será o preço de venda
    }
}
