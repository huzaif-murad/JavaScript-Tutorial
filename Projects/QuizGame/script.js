//Questions list
const questionsData = [
    {
        question: "Which language runs in the browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correctIndex: 3
    },
    {
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Object Model",
            "Digital Output Method",
            "Desktop Oriented Mode"
        ],
        correctIndex: 0
    },
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: ["var", "let", "const", "static"],
        correctIndex: 2
    },
    {
        question: "Which method is used to fetch data from an API in JavaScript?",
        options: ["getData()", "fetch()", "request()", "callAPI()"],
        correctIndex: 1
    },
    {
        question: "What will typeof null return in JavaScript?",
        options: ["null", "object", "undefined", "number"],
        correctIndex: 1
    }
];

//start screen
const startBtn = document.querySelector("#start-btn");
const startScreen = document.querySelector("#start-screen")
//quiz screen 
const quizScreen = document.querySelector("#quiz-screen");
const questionText = document.querySelector("#question-text");
const currentQuestionNum = document.querySelector("#current-question")
const totalQuestions = document.querySelector('#total-questions');
const score = document.querySelector('#score');
const progress = document.querySelector("#progress");
const answersContainer = document.querySelector("#answers-container")
const finalScore = document.querySelector("#final-score");
const maxScore = document.querySelector("#max-score");
const restartBtn = document.querySelector("#restart-btn");


//Result screen

const resultScreen = document.querySelector("#result-screen")
let currenQIndex = 0;
let scoreValue = 0;
let hasAnswered = 0;
let quizStarted = false;

function handleAnswer(answer) {

}

function showQuestion(currenQIndex) {
    answersContainer.innerHTML = "";

    let currentQuestion = questionsData[currenQIndex];
    console.log(currentQuestion);
    questionText.innerHTML = currentQuestion.question;
    currentQuestionNum.innerHTML = currenQIndex + 1;
    totalQuestions.innerHTML = questionsData.length;
    score.innerHTML = scoreValue;

    //creating answers buttons
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("answer-btn")
        button.textContent = option;
        button.addEventListener("click", function () {
            handleAnswer(index)
        })
        answersContainer.appendChild(button);
    });
}
function showScreen(screen) {

    startScreen.classList.remove("active");
    quizScreen.classList.remove("active");
    resultScreen.classList.remove("active");
    screen.classList.add("active");

}


startBtn.addEventListener("click", function () {
    showScreen(quizScreen);
    showQuestion(currenQIndex)
});


