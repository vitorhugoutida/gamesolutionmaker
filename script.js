let menu = document.getElementById("menu")
// let header = document.getElementById("menu-header")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abrirFecharMenu() {

    // se o menu esta fechado

    if (menu.classList.contains("menu-fechado")) {

        // abrir o menu

        menu.classList.remove("menu-fechado")

        // mostrar icone x

        iconeX.style.display = "inline"

        // esconder icone barras

        iconeBarras.style.display = "none"

    } else {

        // fechar o menu

        menu.classList.add("menu-fechado")
        

        // esconder icone x

        iconeX.style.display = "none"

        // Mostrar icone Barras

        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
} 

// ------------------------------------------------------------------------------------

const solicitarOrcamento = (event) => {
    // Pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorTelefone = document.getElementById("campo-telefone").value
    let valorDescricao = document.getElementById("campo-descricao").value

    // Organizar objeto com os valores

    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        telefone: valorTelefone,
        descricao: valorDescricao
    }
    // enviar requisicao para a api
    // 127.0.0.1 = localhost
    // Metodo HTTP POST - Create -> Cadastrar ou criar

    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        }, 
        body: JSON.stringify(dadosForm)

    })

    .then(resposta => {
        console.log(resposta)

        // Limpar os campos (inputs)
        document.querySelector("#contato-form form").reset()
        
    // Mostrar alert com msg de sucesso
    alert("Solicitação cadastrada")

})
// Caso ERRO - alert com msg erro
    .catch(erro => {
        console.error(erro)
        alert("Erro na requisição")
    })

    event.preventDefault()
}