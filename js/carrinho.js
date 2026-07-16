
//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(localStorage.getItem('itensSessao')) || []

// criando um arry de produtos com dados pertinentes somente ao que será usado pela lógica do carrinho
const fObjItem = (objProduto) => {
    const item = {
        id_produto: objProduto.id_produto,
        descricao_produto: objProduto.descricao_produto,
        caminho_da_imagem: objProduto.caminho_da_imagem,
        valor_unitario: objProduto.valor_unitario,
        quantidade: 1
    }

    return item
}

        
//FUNÇÃO PARA ADCIONAR O ITEM NO ARRAY
const addItem = (objItem) => {

    const index = itensCarrinho.findIndex(elem => elem.id_produto == objItem.id_produto)
    if (index !== -1) {
        itensCarrinho[index].quantidade += 1
    }else {
        itensCarrinho.push(fObjItem(objItem))
    }

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}

//LISTAR ITENS DO CARRINHO
const listItens = () => {

    const itensSelecionados = JSON.parse(localStorage.getItem('itensSessao')) || []

    return itensSelecionados
}

const removeItem = (pos) => {
    itensCarrinho.splice(pos,1)

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}


console.log("índice do array -->", itensCarrinho.findIndex(elem => elem.id_produto == 1))

export { addItem, listItens, removeItem } 