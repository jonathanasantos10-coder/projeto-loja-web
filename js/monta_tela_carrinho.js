import { listItens, removeItem, atualizaQuantidade } from "./carrinho.js";

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
           // sectionItem.querySelector('.quantidade').innerHTML = `Quantidade:${++elem.quantidade}` // para pegar uma classe é igual css, basta usar .
           // atualizaTotal()
           atualizaQuantidade(i, elem.quantidade + 1)
           montaTelaCarrinho()
        })
        // arrow fuction do botao de remover 
        const btn_Menos = sectionItem.querySelector('#btn_menos')
        btn_Menos.addEventListener('click', () => {
           // sectionItem.querySelector('.quantidade').innerHTML = `Quantidade:${elem.quantidade <= 1 ? 1 : --elem.quantidade}` // na parte "elem.quantidade <= 1 ? 1 :" é um if "ternorio", cortesia do amigo Eric Jean me ensinar isso.
            //atualizaTotal()
            const novaQtd = elem.quantidade <= 1 ? 1 : elem.quantidade - 1;
            atualizaQuantidade(i, novaQtd)
            montaTelaCarrinho()
        })

        // pegando o elemento do dom dinamico criado no section item, desta vez o paragrafo de total
       // const total = sectionItem.querySelector('.tot-item')
        // função que atualiza o total baseado na quantidade e valor unitario do item
       /* function atualizaTotal() {
         total.innerHTML = (elem.valor_unitario * elem.quantidade).toFixed(2).replace('.', ',') // se eu não botar to fixed aqui também o código quebra e não mostra o vlaor formatado (???????) não sei o pq tem que colocar nos dois. sinceramente.
        }*/
        // calculando o total de todos os itens no carrinho 
        /* function totalItens() {
            const totalCarrinho = listItens().reduce((acc, elem) => acc + (elem.valor_unitario * elem.quantidade), 0)
            return totalCarrinho
        }*/

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
    montaTelaCheckout();
}


// pra fazer o código do checkout é só montar uma section dinamica igual o professor fez com o section item. (amanhã dia 17) justificativa: tomei dramin antes do intervalo pois estava passando mal e tô com sono e dor de cabeça, não consigo pensar direito e nem focar.

// FUNÇÃO PARA CRIAR O CHECKOUT DO ZERO
const montaTelaCheckout = () => {
    const sectionCheckout = document.querySelector('#checkout');
    const itens = listItens();

    // VERIFICA SE O CARRINHO ESTÁ VAZIO, SE ESTIVER EXIBE UMA MENSAGEM 
    if (itens.length === 0) {
        sectionCheckout.innerHTML = '<h2>Seu carrinho está vazio.</h2>';
        return;
    }

    // vARÍAVVEIS COM CALCULOS DE VALORES 
    const totalProdutos = itens.reduce((acc, elem) => acc + (elem.valor_unitario * elem.quantidade), 0); // essa parte quem fez foi o gemini, aparentemene, o que ele faz é reduzir o array para uma string ou objeto único (?) nesse caso ele estaria juntando todos os valores unitarios e todoas as quantidades de todos os itens no carrinho em um objeto só e multiplicando as duas, pelo oq eu entendi !
    const valorFrete = 5.00; // frete fixo em 5 reais desde o inicio da aula
    const totalAPagar = totalProdutos + valorFrete;

    // Aqui é a parte que eu falei de só copiar oq o professor fez. não fui eu que fiz por limite de horário e preguiça mas é a mesma lógica de criar seções e divs e inserir classes, etc. Só que pelo visto, não precisa usar todos aqueles comandos, dá pra fazer literalmente o html, interessante. Entretanto acho que isso só funciona pra esse caso aqui, no caso de montar cards acho que seria necessário todo aquele trabalho que o professor teve.
    sectionCheckout.innerHTML = `
        <div id="form">
            <form id="form-cep">
                <h1>CEP</h1> 
                <input type="text" maxlength="9" required placeholder="Digite o CEP" name="cep" id="cep" class="cep">
            </form>
        </div>

        <div id="valores">
            <h1> VALOR TOTAL </h1>
            <h2> R$ ${totalProdutos.toFixed(2).replace('.', ',')} </h2>

            <h1> VALOR FRETE </h1>
            <h2> R$ ${valorFrete.toFixed(2).replace('.', ',')} </h2>
        </div>

        <div id="total">
            <h1> TOTAL A PAGAR </h1>
            <h2> R$ ${totalAPagar.toFixed(2).replace('.', ',')} </h2>
        </div>

        <div id="botoes_checkout">
            <button class="btn_contCompra" id="btn-continuar"> Continuar Comprando </button>
            <button class="btn_checkout" id="btn-finalizar"> Finalizar Compra </button>
        </div>
    `;

    const btnContinuar = sectionCheckout.querySelector('#btn-continuar');
    btnContinuar.addEventListener('click', () => {
        window.location.href = "../index.html"; // Redireciona para o index (pra adicionar mais itens no carrinho)
    });

  /*  const btnFinalizar = sectionCheckout.querySelector('#btn-finalizar');
    btnFinalizar.addEventListener('click', () => {
        
    }); */
}



const removerItemCarrinho = (pos) => {
    removeItem(pos)

    montaTelaCarrinho()
}

montaTelaCarrinho()

