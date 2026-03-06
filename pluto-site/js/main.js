const buttonA = document.getElementById('buttonA')
const buttonB = document.getElementById('buttonB')
const buttonC = document.getElementById('buttonC')
const buttonD = document.getElementById('buttonD')
const question = document.getElementById('question')
const randomFact = document.getElementById('RandomFact')
const moonDropdownButton = document.getElementById('plutoMoonDropdownButton')
const plutoMoonFactsDropDown = document.getElementById('plutoMoonFactsDropDown')
let questionNum = 0

const questions = [
    {
        question: "What type of object is Pluto currently classified as?",
        choices: ["Gas giant", "Dwarf planet", "Asteroid", "Ice giant"],
        answer: "B"
    },
    {
        question: "In what year was Pluto reclassified as a dwarf planet by the International Astronomical Union?",
        choices: ["1999", "2003", "2006", "2012"],
        answer: "C"
    },
    {
        question: "What spacecraft performed the first flyby of Pluto in 2015?",
        choices: ["Voyager 1", "Cassini", "Galileo", "New Horizons"],
        answer: "D"
    }
]  

let plutoMoonFactsToggle = false
const plutoMoonFacts = [
    "Nix was discovered in 2005 using the Hubble Space Telescope.",
    "Charon was discovered in 1978 by James W. Christy, which allowed scientists to calculate Pluto’s mass.",
    "Hydra spins very rapidly and chaotically, meaning its rotation is not stable."
]

const plutoFunFacts = [
    "Pluto was discovered in 1930 by Clyde Tombaugh.",
    "Pluto was considered the ninth planet of the solar system for 76 years before being reclassified as a dwarf planet in 2006.",
    "Pluto is located in the Kuiper Belt, a region of icy objects beyond Neptune.",
    "A year on Pluto lasts about 248 Earth years.",
    "Pluto’s largest moon, Charon, is so large that Pluto and Charon orbit a point in space outside of Pluto.",
    "Pluto has five known moons: Charon, Nix, Hydra, Kerberos, and Styx.",
    "The spacecraft New Horizons flew past Pluto in 2015 and gave us the first close-up images.",
    "Pluto has a large heart-shaped glacier called Tombaugh Regio.",
    "Pluto is smaller than Earth’s Moon.",
    "Temperatures on Pluto can drop to about −375°F (−225°C)."
]
function pasteQuestion() {
    if (!(questionNum > questions.length - 1)) {
        question.innerHTML = `Question Number ${questionNum + 1}: ${questions[questionNum].question}`
        
        buttonA.innerHTML = `<h1>${questions[questionNum].choices[0]}</h1>`
        buttonB.innerHTML = `<h1>${questions[questionNum].choices[1]}</h1>`
        buttonC.innerHTML = `<h1>${questions[questionNum].choices[2]}</h1>`
        buttonD.innerHTML = `<h1>${questions[questionNum].choices[3]}</h1>`

    }
}
function answerQuestioN(answerWith) {
    if (answerWith == questions[questionNum].answer) {
        questionNum += 1
        pasteQuestion()
        if (questionNum > questions.length - 1) {
            question.innerHTML = "Good Job! You WIN!"
            buttonA.remove()
            buttonB.remove()
            buttonC.remove()
            buttonD.remove()
        }
    }else {
        alert("Wrong Answer Try again later")
    }
}

function handlePlutoMoonFactsDropdown() {
    if (plutoMoonFactsToggle) {
        plutoMoonFactsDropDown.innerHTML = ""
        for (let i = 0; i < plutoMoonFacts.length; i++) {
            const fact = document.createElement("h1")
            fact.innerText = plutoMoonFacts[i]
            plutoMoonFactsDropDown.appendChild(fact)
        }
    }else {
        plutoMoonFactsDropDown.innerHTML = ""
    }
}
function handleRandomFunFact() {
    alert(plutoFunFacts[Math.floor(Math.random() * plutoFunFacts.length)])
}
randomFact.addEventListener("click", ()=>{
    handleRandomFunFact()
})
buttonA.addEventListener("click", ()=>{
    answerQuestioN('A')
})
buttonB.addEventListener("click", ()=>{
    answerQuestioN('B')
})
buttonC.addEventListener("click", ()=>{
    answerQuestioN('C')
})
buttonD.addEventListener("click", ()=>{
    answerQuestioN('D')
})
moonDropdownButton.addEventListener("click", ()=>{
    plutoMoonFactsToggle = !plutoMoonFactsToggle
    handlePlutoMoonFactsDropdown()
})
pasteQuestion()
