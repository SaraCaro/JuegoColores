function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

function colorRandom(){
     return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

function rightColor() {
    let colores = []
    let divs = document.getElementsByClassName("color");
    for (i=0;i<divs.length;i++){
        let color = colorRandom()
        divs[i].style.backgroundColor = color;
        colores.push(color)
    }

    let randomIndex = Math.floor(Math.random() * colores.length);
    let choosenColor = colores[randomIndex];
    document.getElementById("rgbColor").innerHTML = choosenColor;

    for(i=0;i<divs.length;i++){
        divs[i].addEventListener("click", (e) => {
            if(e.target.style.backgroundColor == choosenColor){
                document.getElementById("resultado").innerHTML = "Lo has acertado";
            }
            else {
                document.getElementById("resultado").innerHTML = "Sigue Intentandolo";
            }
        })
    }
};

window.onload = () => {
  
    let newColors = document.querySelector("a");
    newColors.addEventListener("click", rightColor);
    rightColor();
  };