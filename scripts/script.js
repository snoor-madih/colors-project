let colorLock = [0, 0, 0, 0, 0];
let colorPalet = ["0", "0", "0", "0", "0"];

//document.getElementById("generate").addEventListener("click", "generateColor")

function generate() {
    let index = 0;
    colorLock.forEach(element => {
        if (element == 0) {
            randomColor = Math.floor(Math.random() * 16777215).toString(16);
            colorPalet[index] = randomColor;
        }
    index++;});
}
generate();
console.log(colorPalet);