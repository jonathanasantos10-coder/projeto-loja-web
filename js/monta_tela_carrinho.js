import { listItens, removeItem, alteraQuantidade } from "./carrinho.js";

//MONTANDO A TELA CARRINHO
const montaTelaCarrinho = () => {
    //PEGANDO ELEMENTOS DO DOM
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    sectionItensCarrinho.innerHTML = ''

    listItens().forEach((elem, i) => {
        const sectionItem = document.createElement('section')
        sectionItem.setAttribute('class', 'item')
        sectionItem.innerHTML = `<img src='${elem.caminho_da_imagem}' alt=${elem.descricao_produto}/> 
        <p class='descricao'>${elem.descricao_produto}</p> 
        <p class='vlr-unitario'>${elem.valor_unitario}</p> 
        <input type="number" name="quant${i}" id="quant${i}" class="input-item" value=${1}> 
        <p class="tot-item">${elem.valor_unitario * 2}</p>`

        sectionItensCarrinho.appendChild(sectionItem)

        const imgRemover = document.createElement('img')
        imgRemover.setAttribute('src', '../images/icons/trash.png')
        imgRemover.setAttribute('alt', 'img-remover')

        imgRemover.addEventListener('click', () => {
            if (confirm(`Deseja remover ${elem.descricao_produto} da sua lista?`)) {
                removerItemCarrinho(i)
            }
        })

        sectionItem.appendChild(imgRemover)


    });
}

const removerItemCarrinho = (pos)=>{
    removeItem(pos)

    montaTelaCarrinho()
}

montaTelaCarrinho()