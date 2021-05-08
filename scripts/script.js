let colorLock = [0, 0, 0, 0, 0];
let colorPalet = ["0", "0", "0", "0", "0"];



document.getElementById("generator").addEventListener("click", generateColor)

function generateColor() {
    let index = 0;
    colorLock.forEach(element => {
        if (element == 0) {
            randomColor = Math.floor(Math.random() * 16777215).toString(16);
            colorPalet[index] = randomColor;
        }
    index++;});
    console.log(colorPalet);
    appendColorsToDives();
}


function stateChanging(){
   
}


function appendColorsToDives()
{
    for (let i=0;i<colorLock.length ;i++)
    {
     let colorDiv = document.querySelectorAll(".color")[i];
    colorDiv.style.backgroundColor = "#" + colorPalet[i];
    }
}

function save()
{
    
}