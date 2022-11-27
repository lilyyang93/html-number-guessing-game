const randomNum = randNum(100)
let numValue
let numValueInt
console.log(randomNum)

function randNum(number) {
    return Math.floor((Math.random() * number+1))
}

function displayGuessedNum(event) {
    event.preventDefault()
    const inputNum = document.getElementById("input-number")
    numValue = inputNum.value
    numValueInt = parseInt(numValue)
    const numText = document.createTextNode(numValue)
    document.getElementById("guessed-num").replaceChildren(numText) 
    compareNums()
}

function compareNums() {
    const resultHigh = document.createTextNode('Too High')
    const resultLow = document.createTextNode('Too Low')
    const resultCorrect = document.createTextNode('Correct answer')

    if (numValueInt > randomNum) {
        document.getElementById('result').replaceChildren(resultHigh)
    } else if (numValueInt < randomNum) {
        document.getElementById('result').replaceChildren(resultLow)
    } else {
        document.getElementById('result').replaceChildren(resultCorrect)
    }   
}
