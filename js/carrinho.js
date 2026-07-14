//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(localStorage.getItem('itensSessao')) || []

//FUNÇÃO PARA ADCIONAR O ITEM NO ARRAY
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    localStorage.setItem('itensSessao', itensCarrinho)
}

//LISTAR ITENS DO CARRINHO
const listItens = () => {
    const itensSelecionados = JSON.stringify(localStorage.getItem('itensSessao'))

    return itensSelecionados
}



export { addItem }