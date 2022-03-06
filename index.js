import { Produto } from "./produto.js"
import { Fabricante } from "./fabricante.js"

const produto1 = new Produto(1, 'Notebook', 1000, 1500)
const fabricante1 = new Fabricante('Distridor X', '00.000.000/0001-00')

produto1.novoCusto(1200)
produto1.vendaMargem(50)

console.log(`Seu ${produto1.descricaoItem} tem o custo de R$ ${produto1.custo} e será vendido a R$${produto1.venda}`)
