// var num = 260
// var intervalTimer = setInterval (function(){
//   num--
//   console.log(num)
//   if (num === 0){
//     clearInterval(intervalTimer)
//     alert ("Times UP!!!")
//   }
// },1000)

// $("#")

var score = 0

const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex;


startButton.addEventListener("click", startGame)


function startGame() {
    console.log("started")
    startButton.classList.add("hide")
    const instructions = document.getElementById("instructions")
    instructions.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showNextQuestion() {
    resetState()
    currentQuestionIndex++
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.choices.forEach(function (choice) {
        const button = document.createElement("button")
        button.innerText = choice
        button.classList.add("btn")
        button.dataset.correct = question.answer



        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    // nextButton.classList.add("hide")
    nextButton.addEventListener("click", showNextQuestion)
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}

function setStatusClass() {

}


function selectAnswer(e) {
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    var buttonText = selectButton.innerText
    if (buttonText === correct) {
        console.log("correctAnswer")
        selectButton.style.backgroundColor = "green"
        score++

    }
    else {
        console.log("incorrectAnswer")
        selectButton.style.backgroundColor = "red"
        score--
    }

    function gameOver()
{
    alert ("You got  " + score + " coins")

    document.getElementById("popup").innerHTML ="Game Over!";
    document.getElementById("popup").style.display = "block"; 

    setTimeout(messageHide, 5000); /* pop up appears when game is over */
}

var score = 0;

    // setStatusClass(document.body, correct)
    // Array.from(answerButtonsElement.children).forEach(function (button) { 
    //     setStatusClass(button.dataset.correct)

    // })

}

// const questions = [
//     {
//         questions: "Every HTML page beings as a what?",
//         answer: [
//             {text: "Static Content ", correct: true },
//             {text:"Conten", correct: false}
//         ]
//     }
// ]

// These are questions from the hints
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheet", "Creative Style Sheet", "Computer Style Sheet", "Creepy Style Sheet"],
        answer: "Cascading Style Sheet"
    },
    
    {
        question: "Which sign does jQuery use as a shortcut for jQuery?",
        choices: ["&", "*", "%", "$"],
        answer: "$"
    },

    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<scripting>", "<javascript>", "<script>", "<js>"],
        answer: "<script>"
    },

    {
        question: "What does HTML stand for??",
        choices: ["Home Text Mark Line", "Hyper Tone Markup", "Have no clue", "HyperText Markup Lang"],
        answer: "HyperText Markup Lang"
    },

];
