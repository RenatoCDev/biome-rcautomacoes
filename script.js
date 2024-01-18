function /*Função do JS*/ toggleMode() {
  /*Constante*/ const html =
    document.documentElement /* Propriedade que se refere à todo o documento exibido na página*/

  /*Condicional*/ if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  /*Configurações para a trova de avatar */
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/Programador de coque Logo.jpg")
  } else {
    img.setAttribute("src", "./assets/assets/Programador de coque ok 2.jpg")
  }
}
