let colorLock = [0, 0, 0, 0, 0];
let colorPalet = ["0", "0", "0", "0", "0"];
let lockIcon = document.querySelectorAll(".lock-color");
generateColor();
appendColorsToDives();
setColorName();


for (let i = 0; i < lockIcon.length; i++) {
    lockIcon[i].addEventListener("click", function () {
        if (lockIcon[i].name == 0) {
            lockIcon[i].name = 1;
            colorLock[lockIcon[i].value] = 1;
            let icon = document.getElementById(`i${lockIcon[i].value}`);
            icon.className = "fas fa-lock";
        } else {
            lockIcon[i].name = 0;
            colorLock[lockIcon[i].value] = 0;
            let icon = document.getElementById(`i${lockIcon[i].value}`);
            icon.className = "fas fa-lock-open";
        }
    });
}


document.getElementById("generator").addEventListener("click", generateColor)

function generateColor() {
    let colorindex = 0;
    colorLock.forEach(element => {
        if (element == 0) {
            randomColor = Math.floor(Math.random() * 16777215).toString(16);
            colorPalet[colorindex] = randomColor;
        }
        colorindex++;
    });
    console.log(colorPalet);
    appendColorsToDives();
    setColorName();
}



function appendColorsToDives() {
    for (let i = 0; i < colorLock.length; i++) {
        let colorDiv = document.querySelectorAll(".color")[i];
        colorDiv.style.backgroundColor = "#" + colorPalet[i];
    }
}

function setColorName() {
    for (let index = 0; index <= 4; index++) {
        document.getElementById(`l${index+1}`).innerHTML = "#" + colorPalet[index];
    }
}

document.getElementById("save").addEventListener("click", save)

let index = localStorage.getItem("index");
if (index == null) {
    index = 0;
}

function save() {
    document.getElementById('popup').style.display = "block";
    let span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        document.getElementById('popup').style.display = "none";
    }
    document.getElementById("palletName").value = "";
    document.getElementById("saveStatus").innerHTML = "";

    document.querySelector("#popup button").onclick = function () {
        let paletname = document.getElementById("palletName").value;
  
        if (paletname != "") {
            localStorage.setItem(index, paletname); // saving pallet name in local storage
            localStorage.setItem(paletname, colorPalet); // saving pallet colors with the name 
            document.getElementById("saveStatus").innerHTML = "Your pallet is saved";
            document.getElementById("palletName").value = "";
            index++;
            localStorage.setItem("index", index); // saving index
        } else {
            document.getElementById("saveStatus").innerHTML = "Please enter a name";
        }
    }

}


document.getElementById("library").addEventListener("click", library)

function library() {
 
    document.getElementById('popup2').style.display = "block";
    // let div = document.getElementById('savedPalet');
    // while(div.firstChild){
    //     div.removeChild(div.firstChild);
    // }
    
    
    let span = document.getElementsByClassName("close")[1];
    span.onclick = function () {
        document.getElementById('popup2').style.display = "none";
        let div = document.getElementsByClassName('savedPalet')[0];
        if(div){
            while(div.firstChild){
            div.removeChild(div.firstChild);
        }
        }
    }
    let savedIndex = localStorage.getItem("index");

    if (localStorage.length == 0) {
        document.getElementById("header").innerHTML = "You don't have any saved palete";
    } else {
    
        document.getElementById("header").innerHTML = "Pick your pallete";
        //setting color
        for (let i = 0; i < index; i++) {
            console.log("hi");
            let savedName = document.createElement("label");
            savedName.className = "savedName";
            let name = localStorage.getItem(i);
            savedName.innerHTML = name;
            let paletdiv = document.createElement("div");
            paletdiv.className = "palet";
            paletdiv.append(savedName);
            document.getElementsByClassName("savedPalet")[0].append(paletdiv);

            let savedPaletColor = document.createElement("div");
            savedPaletColor.className = "savedPaletColor";

            let colors = localStorage.getItem(name);
            colorarr = colors.split(',');

            for (let colorIndex = 0; colorIndex < colorarr.length; colorIndex++) {

                let colordiv = document.createElement("div");
                colordiv.className = colorIndex;
                colordiv.style.backgroundColor = "#" + colorarr[colorIndex];
                savedPaletColor.append(colordiv);
            }
            let select = document.createElement("div");
            select.className = "select";
            select.innerHTML="Select";
            savedPaletColor.append(select);
            paletdiv.append(savedPaletColor);

        }
    }
    // document.querySelector(".select").onclick = function () {
    //     console.log(savedIndex);
    // }

}