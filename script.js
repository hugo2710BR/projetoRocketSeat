function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar na tag img e substituir a imagem
  const imagem = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    imagem.setAttribute("src", "assets/Avatar_dark.png")
    imagem.setAttribute("alt", "logo_light")
  } else {
    imagem.setAttribute("src", "assets/Avatar.png")
    imagem.setAttribute("alt", "logo_dark")
  }
}
