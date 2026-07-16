import { listItens, removeItem } from "./carrinho.js";

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
        <p class='vlr-unitario'>${elem.valor_unitario.toFixed(2).replace('.', ',')}</p> 
        <p class='quantidade'> Quantidade:${elem.quantidade}</p>
        <button type='button' id='btn_mais' class='btn_mais'>+</button>
        <button type='button' id='btn_menos' class='btn_menos'>-</button>
        <p class="tot-item">${(elem.valor_unitario * elem.quantidade).toFixed(2).replace('.', ',')}</p>`




        sectionItensCarrinho.appendChild(sectionItem)

        // pegando elemento do "dom" dinamico criado no section item (o botoa de add)
        const btn_Mais = sectionItem.querySelector('#btn_mais')
        // arrow function do botao de add
        btn_Mais.addEventListener('click', () => {
            sectionItem.querySelector('.quantidade').innerHTML = `Quantidade:${++elem.quantidade}` // para pegar uma classe é igual css, basta usar .
            atualizaTotal()
        })
        // arrow fuction do botao de remover 
        const btn_Menos = sectionItem.querySelector('#btn_menos')
        btn_Menos.addEventListener('click', () => {
            sectionItem.querySelector('.quantidade').innerHTML = `Quantidade:${elem.quantidade <= 1 ? 1 : --elem.quantidade}` // na parte "elem.quantidade <= 1 ? 1 :" é um if "ternorio", cortesia do amigo Eric Jean me ensinar isso.
            atualizaTotal()
        })

        // pegando o elemento do dom dinamico criado no section item, desta vez o paragrafo de total
        const total = sectionItem.querySelector('.tot-item')
        // função que atualiza o total baseado na quantidade e valor unitario do item
        function atualizaTotal() {
            total.innerHTML = (elem.valor_unitario * elem.quantidade).toFixed(2).replace('.', ',') // se eu não botar to fixed aqui também o código quebra e não mostra o vlaor formatado (???????) não sei o pq tem que colocar nos dois. sinceramente.
        }



        const imgRemover = document.createElement('img')
        imgRemover.setAttribute('class', 'img_del')
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






const removerItemCarrinho = (pos) => {
    removeItem(pos)

    montaTelaCarrinho()
}

montaTelaCarrinho()