import {listItens} from "./carrinho.js";

//MONTANDO A TELA CARRINHO
const montaTelaCarrinho = () => {
    //PEGANDO ELEMENTOS DO DOM
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    listItens().forEach((elem, i) => {
        const sectionItem = document.createElement('section')
        sectionItem.setAttribute('class', 'item')
        sectionItem.innerHTML = `<img src='${elem.caminho_da_imagem}' alt=${elem.descricao_produto}/> 
        <p class='descricao'>${elem.descricao_produto}</p> 
        <p class='vlr-unitario'>${elem.valor_unitario}</p> 
        <input type="number" name='quant${i}' id='quant${i}' class="input-item" value=${1}> 
        <p class="tot-item">${elem.valor_unitario * 1}</p>
        <img src="../imagens/icones/remover.png" alt="" class="img-remover">`

        sectionItensCarrinho.appendChild(sectionItem)
    });
}

montaTelaCarrinho()