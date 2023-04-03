const BUT = document.querySelectorAll(".numbers__btn")
const BUTTONC = document.querySelector(".numbers__btn--c")
const DISPLAY = document.querySelector(".display")

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
    if(displayArr.length <= 7)
    {
        DISPLAY.innerHTML = newArr
    }
    if(displayArr.length > 6)
    {
        if(newArr === "62#2633")
        {
            DISPLAY.innerHTML = "OTWARTE"
            //console.log("otwarte")
        }
        else 
        {
            DISPLAY.innerHTML = "Err"
        }
    }
}

BUT.forEach((button) =>
{
    button.addEventListener("click", function()
    {
        displayArr.splice(displayArr.length, 0, button.innerText)
        displayValue()
        if(button.innerText == "C")
        {
            displayArr = []
        }
    });
});