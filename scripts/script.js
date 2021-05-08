let colorLock = [0, 0, 0, 0, 0];
let colorPalet = ["0", "0", "0", "0", "0"];
let lockIcon =document.querySelectorAll(".lock-color");
generateColor();
appendColorsToDives();
setColorName();


for (let i = 0; i < lockIcon.length; i++) {
    lockIcon[i].addEventListener("click", function() {
        if(lockIcon[i].name==0){
            lockIcon[i].name=1;
            colorLock[lockIcon[i].value]=1;
            let icon=document.getElementById(`i${lockIcon[i].value}`);
            icon.className="fas fa-lock";
        }
        else{
            lockIcon[i].name=0;
            colorLock[lockIcon[i].value]=0;
            let icon=document.getElementById(`i${lockIcon[i].value}`);
            icon.className="fas fa-lock-open";   
        }
    });
}


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
    setColorName();
}


 
function appendColorsToDives()
{
    for (let i=0;i<colorLock.length ;i++)
    {
     let colorDiv = document.querySelectorAll(".color")[i];
    colorDiv.style.backgroundColor = "#" + colorPalet[i];
    }
}
function setColorName(){
    for (let index = 0; index <=4; index++) {
        document.getElementById(`l${index+1}`).innerHTML="#"+colorPalet[index];
    }
}

 