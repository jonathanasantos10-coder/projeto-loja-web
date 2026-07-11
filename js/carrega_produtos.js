import { produtos } from "./produtos.js";

// ===== Referências do DOM =====
const containerProdutos = document.getElementById("produtos-container");
const listaSecoes = document.getElementById("lista-secoes");
const inputPesquisa = document.getElementById("pesquisa");
const btnTodos = document.getElementById("btn-todos");

// ===== Formatação de preço em Real =====
function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// ===== Cria o elemento (card) de um produto =====
function criarCardProduto(produto) {
    const card = document.createElement("article");
    card.classList.add("card-produto");
    card.dataset.idProduto = produto.id_produto;

    card.innerHTML = `
        <div class="card-imagem">
            <img src="${produto.caminho_da_imagem}" alt="${produto.descricao_produto}">
        </div>
        <div class="card-info">
            <span class="card-secao">${produto.nome_secao}</span>
            <h3 class="card-descricao">${produto.descricao_produto}</h3>
            <p class="card-preco">${formatarPreco(produto.valor_unitario)}</p>
            <button class="btn-comprar" data-id="${produto.id_produto}">
                Adicionar ao carrinho
            </button>
        </div>
    `;

    // Evento do botão adicionar
    card.querySelector(".btn-comprar").addEventListener("click", () => {
        adicionarAoCarrinho(produto);
    });

    return card;
}

// ===== Renderiza uma lista de produtos na tela =====
function renderizarProdutos(lista) {
    containerProdutos.innerHTML = "";

    if (lista.length === 0) {
        containerProdutos.innerHTML = `<p class="sem-resultados">Nenhum produto encontrado.</p>`;
        return;
    }

    const fragmento = document.createDocumentFragment();
    lista.forEach(produto => {
        fragmento.appendChild(criarCardProduto(produto));
    });
    containerProdutos.appendChild(fragmento);
}

// ===== Monta o menu de seções dinamicamente a partir do array =====
function montarMenuSecoes() {
    // Pega as seções únicas (id_secao + nome_secao) presentes no array
    const secoesUnicas = [];
    const idsJaAdicionados = new Set();

    produtos.forEach(produto => {
        if (!idsJaAdicionados.has(produto.id_secao)) {
            idsJaAdicionados.add(produto.id_secao);
            secoesUnicas.push({
                id_secao: produto.id_secao,
                nome_secao: produto.nome_secao
            });
        }
    });

    // Ordena pelo id da seção, só por organização
    secoesUnicas.sort((a, b) => a.id_secao - b.id_secao);

    secoesUnicas.forEach(secao => {
        const li = document.createElement("li");
        const botao = document.createElement("button");
        botao.textContent = secao.nome_secao;
        botao.dataset.secao = secao.id_secao;
        li.appendChild(botao);
        listaSecoes.appendChild(li);
    });
}

// ===== Controla qual botão do menu está marcado como ativo =====
function marcarBotaoAtivo(botaoClicado) {
    document.querySelectorAll("#lista-secoes button").forEach(botao => {
        botao.classList.remove("ativo");
    });
    botaoClicado.classList.add("ativo");
}

// ===== Filtra produtos pela seção clicada =====
function filtrarPorSecao(idSecao) {
    if (idSecao === "todos") {
        renderizarProdutos(produtos);
        return;
    }

    const produtosFiltrados = produtos.filter(
        produto => produto.id_secao === Number(idSecao)
    );
    renderizarProdutos(produtosFiltrados);
}

// ===== Delegação de evento de clique no menu (seções + todos) =====
listaSecoes.addEventListener("click", (evento) => {
    const botao = evento.target.closest("button");
    if (!botao) return;

    marcarBotaoAtivo(botao);
    filtrarPorSecao(botao.dataset.secao);

    // Ao clicar numa seção, limpa a pesquisa para não confundir o usuário
    inputPesquisa.value = "";
});

// ===== Pesquisa por relevância =====
// Quebra o termo digitado em palavras e dá uma pontuação para cada produto
// de acordo com quantas dessas palavras aparecem na descrição.
function pesquisarProdutos(termo) {
    const termoNormalizado = termo.trim().toLowerCase();

    if (termoNormalizado === "") {
        return produtos;
    }

    const palavrasChave = termoNormalizado
        .split(" ")
        .filter(palavra => palavra.length > 0);

    const resultados = produtos
        .map(produto => {
            const descricaoNormalizada = produto.descricao_produto.toLowerCase();
            const secaoNormalizada = produto.nome_secao.toLowerCase();

            let pontuacao = 0;

            palavrasChave.forEach(palavra => {
                if (descricaoNormalizada.includes(palavra)) {
                    pontuacao += 2; // peso maior pra descrição
                }
                if (secaoNormalizada.includes(palavra)) {
                    pontuacao += 1; // peso menor pra nome da seção
                }
            });

            // Bônus se a frase inteira aparecer na descrição
            if (descricaoNormalizada.includes(termoNormalizado)) {
                pontuacao += 5;
            }

            return { produto, pontuacao };
        })
        .filter(item => item.pontuacao > 0)
        .sort((a, b) => b.pontuacao - a.pontuacao)
        .map(item => item.produto);

    return resultados;
}

// ===== Evento de digitação na pesquisa =====
inputPesquisa.addEventListener("input", (evento) => {
    const termo = evento.target.value;
    const resultados = pesquisarProdutos(termo);
    renderizarProdutos(resultados);

    // Ao pesquisar, tira o destaque de qualquer seção marcada como ativa
    document.querySelectorAll("#lista-secoes button").forEach(botao => {
        botao.classList.remove("ativo");
    });
    if (termo.trim() === "") {
        btnTodos.classList.add("ativo");
    }
});

// ===== Inicialização da página =====
function iniciar() {
    montarMenuSecoes();
    renderizarProdutos(produtos);
    aplicarFiltroDaURL();
}

iniciar();

function adicionarAoCarrinho(produto) {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const itemExistente = carrinho.find(item => item.id_produto === produto.id_produto);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert(`"${produto.descricao_produto}" adicionado ao carrinho!`);
}

function aplicarFiltroDaURL() {
    const parametros = new URLSearchParams(window.location.search);

    const secao = parametros.get("secao");

    if (!secao) return;

    // filtra os produtos
    filtrarPorSecao(secao);

    // destaca o botão correto
    const botao = document.querySelector(
        `#lista-secoes button[data-secao="${secao}"]`
    );

    if (botao) {
        marcarBotaoAtivo(botao);
    }
}