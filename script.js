const BUT = document.querySelectorAll(".numbers__btn")
const BUTTONC = document.querySelector(".numbers__btn--c")
const DISPLAY = document.querySelector(".display")
const WIN = document.querySelector(".win")
const LOOSE = document.querySelector(".loose")
const SETTINGS = document.querySelector(".settings")
const OPEN_SETTINGS = document.querySelector(".btn-settings")
const CLOSE_SETTINGS = document.querySelector(".settings__close")
const NEW_CODE_INFO = document.querySelector(".newcode__info")
const PASTE_NEW_CODE = document.querySelector(".info__code")

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
    let audio = new Audio("voice/click.mp3");
    audio.play()
}

function failmusic()
{
    let audio = new Audio("voice/fail.mp3");
    audio.play()
}

function openMusic()
{
    let audio = new Audio("voice/open.mp3");
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

const SUB_NEW_CODE = document.querySelector(".newcode__sub-newcode")
SUB_NEW_CODE.addEventListener("click", function()
{
    let firstDigits = document.querySelector(".newcode__digits--first").value
    let lastDigits = document.querySelector(".newcode__digits--last").value
    currentCode = firstDigits + "#" + lastDigits
    NEW_CODE_INFO.classList.remove("hidden")
    PASTE_NEW_CODE.innerText = currentCode
    return currentCode
});

OPEN_SETTINGS.addEventListener("click", function()
{
    SETTINGS.classList.remove("hidden")
    SETTINGS.classList.add("fadein")
    setTimeout(() => {
        SETTINGS.classList.remove("fadein")
    }, 800);
})

CLOSE_SETTINGS.addEventListener("click", function()
{
    SETTINGS.classList.add("fadeout")
    setTimeout(() => {
        SETTINGS.classList.add("hidden")
        SETTINGS.classList.remove("fadeout")
        NEW_CODE_INFO.classList.add("hidden")
    }, 800);
})


