function toggleMode() {
document.documentElement.classList.toggle('light')

const img = document.querySelector("#profile img")
if(HTMLAllCollection.classList.contains('light')){
    img.setAttribute('src', "assets/avatar-light.png")
}
else{
    img.setAttribute('src', "assets/avatar.png")
}
}
