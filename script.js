let menu = document.getElementById("menu")
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