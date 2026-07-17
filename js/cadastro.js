// PEGANDO ELEMENTO DO DOM
const inputCEP = document.querySelector('#cep')

// CAPTURANDO O EVENTO AO PERDER O FOCO 
inputCEP.addEventListener('input', (evt) => {
    const numCep = evt.target.value.replace(/\D/g, "''")

    if (numCep.length === 8) {
        buscaDadosCep(numCep)
    }
    // chamando a função  para buscar os dados do cep no viacep
})

// BUSCAR DADOS DO CEP NO VIACEP
const buscaDadosCep = async (cep) => {
    try {
        // BUSCA OS DADOS NO VIACEP
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        // CONVERTE OS DADOS NO FORMATO JSON
        const dadosEndereco = await response.json();
        if (dadosEndereco.erro) {
            throw new Error("O CEP digitado não existe. Tente novamente.");
        }
        // FUNCTION PARA EXIBIR OS DADOS NO FORMULÁRIO
        exibeDados(dadosEndereco)
        console.log('dadosEndereco: ', dadosEndereco)
    } catch (error) { // CASO HAJA ALGUM ERRO É CAPUTADO PELO CATCH
        cepInvalido()
    }

}

// OBJETO LITERAL CAMPOS QUE CRIA CADA CHAVE 
const campos = {
    logradouro: document.querySelector('#logradouro'),
    bairro: document.querySelector('#bairro'),
    localidade: document.querySelector('#localidade'),
    uf: document.querySelector('#uf'),
}
function cepInvalido() {
    const divCepManual = document.querySelector('#div-dados-endereco')
    divCepManual.classList.remove('oculto')
    alert(`CEP Invalido! Por favor, Digite o CEP e seus dados manualmente.`)
    document.querySelector('#cep').focus()
    

}
// FUNÇÃO EXIBE DADOS
const exibeDados = (objDados) => {
    // PERCORRE CADA CHAVE DO OBJETO CAMPOS
    const divEndereco = document.querySelector('#div-dados-endereco')
    /// REMOVE O DIV DA CLASS OCULTO
    divEndereco.classList.remove('oculto')
    // PERCORE O OBJETO NO FORMATO JSON DO VIA CEP
    for (let chave in campos) {
        // ATRIBUI O VALOR AO INPUT NO FORMULÁRIO DE ACORDO COM A CHAVE DO OBJETO

        campos[chave].value = objDados[chave]

        campos[chave].setAttribute('disabled', 'disabled')

        document.querySelector('#numeroR').focus()
}}
    
    
//  FUNÇÃO DOS BOTÕES
/*const btnSubmit = document.querySelector('btn-submit')

btnSubmit = addEventListener('click', (evt) => {
    evt.preventDefault()

    // aqui seria pra dar push em um array onde tem pessoas cadastradas, mas não existe ainda, caso o professor faça já tá pelo menos preparada essa parte.
})
*/ 

// O outro botao que tem na página só redireciona você pra página de login.