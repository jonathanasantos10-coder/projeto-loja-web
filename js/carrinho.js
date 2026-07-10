const FRETE_FIXO = 5.00;


const secaoItens = document.getElementById("card_item");
const divValores = document.getElementById("valores");
const divTotal   = document.getElementById("total");


function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}


function obterCarrinho() {
    return JSON.parse(localStorage.getItem("carrinho")) || [];
}

function salvarCarrinho(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}


function removerItem(idProduto, nomeproduto) {
    const confirmado = confirm(`Deseja remover "${nomeproduto}" do carrinho?`);
    if (!confirmado) return;

    const carrinho = obterCarrinho().filter(item => item.id_produto !== idProduto);
    salvarCarrinho(carrinho);
    renderizarCarrinho();
}


function alterarQuantidade(idProduto, delta) {
    const carrinho = obterCarrinho();
    const item = carrinho.find(i => i.id_produto === idProduto);
    if (!item) return;

    item.quantidade += delta;

    if (item.quantidade <= 0) {
        removerItem(idProduto, item.descricao_produto);
        return;
    }

    salvarCarrinho(carrinho);
    renderizarCarrinho();
}


function criarItemHTML(item) {
    const div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = `
        <img src="${item.caminho_da_imagem}" alt="${item.descricao_produto}" class="img_item">
        <div class="info">
            <h2 class="title-card">${item.descricao_produto}</h2>
            <h3 class="value-card">${formatarPreco(item.valor_unitario)}</h3>
        </div>
        <div class="controles-quantidade">
            <button class="btn-menos" data-id="${item.id_produto}">−</button>
            <button class="btn_und" data-id="${item.id_produto}">
                ${item.quantidade} Unidade${item.quantidade > 1 ? "s" : ""}
            </button>
            <button class="btn-mais-qtd" data-id="${item.id_produto}">+</button>
        </div>
    `;

    div.querySelector(".btn-menos").addEventListener("click", () => {
        alterarQuantidade(item.id_produto, -1);
    });

    div.querySelector(".btn-mais-qtd").addEventListener("click", () => {
        alterarQuantidade(item.id_produto, +1);
    });

    return div;
}


function atualizarValores(carrinho) {
    const subtotal = carrinho.reduce(
        (acc, item) => acc + item.valor_unitario * item.quantidade, 0
    );
    const frete = carrinho.length > 0 ? FRETE_FIXO : 0;
    const total  = subtotal + frete;

    divValores.innerHTML = `
        <h1>VALOR TOTAL</h1>
        <h2>${formatarPreco(subtotal)}</h2>
        <h1>VALOR FRETE</h1>
        <h2>${formatarPreco(frete)}</h2>
    `;

    divTotal.innerHTML = `
        <h1>TOTAL A PAGAR</h1>
        <h2>${formatarPreco(total)}</h2>
    `;
}


function renderizarCarrinho() {
    const carrinho = obterCarrinho();

    secaoItens.innerHTML = "";

    if (carrinho.length === 0) {
        secaoItens.innerHTML = `<p class="sem-resultados">Seu carrinho está vazio.</p>`;
        atualizarValores([]);
        return;
    }

    carrinho.forEach(item => secaoItens.appendChild(criarItemHTML(item)));
    atualizarValores(carrinho);
}


document.querySelector(".btn_mais").addEventListener("click", () => {
    window.location.href = "../index.html";
});


renderizarCarrinho();