const $buttonsContainer = document.getElementById("buttons-container")
const $screen = document.querySelector('#screen')

$buttonsContainer.addEventListener("click", event => {
    if(event.target.textContent === "1") {
        $screen.textContent += "1"
    } else if(event.target.textContent === "2") {
        $screen.textContent += "2"
    } else if(event.target.textContent === "3") {
        $screen.textContent += "3"
    } else if(event.target.textContent === "4") {
        $screen.textContent += "4"
    } else if(event.target.textContent === "5") {
        $screen.textContent += "5"
    } else if(event.target.textContent === "6") {
        $screen.textContent += "6"
    } else if(event.target.textContent === "7") {
        $screen.textContent += "7"
    } else if(event.target.textContent === "8") {
        $screen.textContent += "8"
    } else if(event.target.textContent === "9") {
        $screen.textContent += "9"
    } else if(event.target.textContent === "0") {
        $screen.textContent += "0"
    } else if(event.target.textContent === "C") {
        $screen.textContent = ""
    } else if(event.target.textContent === "x") {
        $screen.textContent += "*"
    } else if(event.target.textContent === "÷") {
        $screen.textContent += "/"
    } else if(event.target.textContent === "+") {
        $screen.textContent += "+"
    } else if(event.target.textContent === "-") {
        $screen.textContent += "-"
    } else if(event.target.textContent === "=") {
        const $result = eval($screen.textContent)
        $screen.textContent = $result
    }
})









