const BUT = document.querySelectorAll(".numbers__btn")
const BUTTONC = document.querySelector(".numbers__btn--c")
const DISPLAY = document.querySelector(".display")
const WIN = document.querySelector(".win")
const LOOSE = document.querySelector(".loose")

let displayArr = []
let currentCode = "62#2633"

BUTTONC.addEventListener("click", function()
{
    displayArr = []
    displayValue()
});

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

function displayValue()
{
    let newArr = displayArr.join("")
    //console.log(newArr)
    if(displayArr.length < currentCode.length)
    {
        DISPLAY.innerHTML = newArr
    }
    if(displayArr.length == currentCode.length)
    {
        if(newArr === currentCode)
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

const SUB_NEW_CODE = document.getElementById("sub-newcode")
SUB_NEW_CODE.addEventListener("click", function()
{
    let firstDigits = document.getElementById("first-digits").value
    let lastDigits = document.getElementById("last-digits").value
    currentCode = firstDigits + "#" + lastDigits
    let ccLength = currentCode.length
    console.log(ccLength)
    console.log(currentCode)
    return currentCode
});




