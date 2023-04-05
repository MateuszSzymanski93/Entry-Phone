const BUT = document.querySelectorAll(".numbers__btn")
const BUTTONC = document.querySelector(".numbers__btn--c")
const DISPLAY = document.querySelector(".display")
const WIN = document.querySelector(".win")
const LOOSE = document.querySelector(".loose")

let displayArr = []

BUTTONC.addEventListener("click", function()
{
    displayArr = []
    displayValue()
});

function displayValue()
{
    let newArr = displayArr.join("")
    //console.log(newArr)
    if(displayArr.length <= 6)
    {
        DISPLAY.innerHTML = newArr
    }
    if(displayArr.length == 7)
    {
        if(newArr === "62#2633")
        {
            DISPLAY.classList.add("green")
            DISPLAY.innerHTML = "OTWARTE"
            WIN.classList.add("moveit")
            setTimeout(() => {
                WIN.classList.remove("moveit");
                DISPLAY.classList.remove("green");
                displayArr = []
            }, "6000");
            openMusic();
            //console.log("otwarte")
        }
        else 
        {
            DISPLAY.classList.add("red")
            DISPLAY.innerHTML = "Err"
            LOOSE.classList.add("moveit")
            setTimeout(() => {
                LOOSE.classList.remove("moveit");
                DISPLAY.classList.remove("red");
                displayArr = []
            }, "6000");
            failmusic();
        }
    }
}

function clickMusic()
{
    let audio = new Audio("click.mp3");
    audio.play()
}

function failmusic()
{
    let audio = new Audio("fail.mp3");
    audio.play()
}

function openMusic()
{
    let audio = new Audio("open.mp3");
    audio.play()
}

BUT.forEach((button) =>
{
    button.addEventListener("click", function()
    {
        displayArr.splice(displayArr.length, 0, button.innerText)
        displayValue()
        clickMusic()
        if(button.innerText == "C")
        {
            displayArr = []
        }
    });
});

