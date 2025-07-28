// Add your code to this file
let body  = document.querySelector("body");
let PokemoneImages = document.getElementsByClassName("pokemon_images")
let pokemon_names = document.getElementsByClassName("pokemon_names")
let starters_image_div =document.querySelector("img")
let footer = document.querySelector("footer")
body.style.backgroundColor = "darkblue";

for (let i = 0; i < PokemoneImages.length; i++) {
  PokemoneImages[i].style.border = "5px dotted #FDEFA6";
}

for(let i= 0;i<pokemon_names.length;i++){
    pokemon_names[i].style.color = "#FDEFA6"
}

starters_image_div.style.border = "5px dotted #FDEFA6"
footer.innerHTML = "<h1 id='foot'>ALL STAR CODE - DOM Project</h1>"
let foot = document.getElementById("foot")
foot.style.fontSize = "25px"

foot.style.color = "white"
foot.style.backgroundColor = "transparent"
foot.style.textAlign = "left"
foot.style.margin = "0"
foot.style.padding = "0"
foot.style.maxWidth = "fit-content"

foot.style.borderTop = "2px solid white"
foot.style.borderBottom = "2px solid white"
