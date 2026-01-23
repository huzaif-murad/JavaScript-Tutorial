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

//result screen
const finalScore = document.querySelector("#final-score");
const maxScore = document.querySelector("#max-score");
const restartBtn = document.querySelector("#restart-btn");
const timer = document.querySelector("#timer");

//Result screen

const resultScreen = document.querySelector("#result-screen");
let currenQIndex = 0;
let scoreValue = 0;
let hasAnswered = false;
let quizStarted = false;
let timeLeft = 15;
let timerId = null;

restartBtn.addEventListener("click", function () {

    // STOP ANY RUNNING TIMER
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }

    // RESET ALL STATE
    currenQIndex = 0;
    scoreValue = 0;
    hasAnswered = false;
    timeLeft = 15;

    // RESET UI
    score.innerHTML = 0;
    progress.style.width = "0%";
    timer.innerHTML = timeLeft;

    // GO BACK TO START SCREEN
    showScreen(startScreen);
});


function handleAnswer(selectedIndex) {
    //clear timeout if user already answered
    clearInterval(timerId);
    const buttons = answersContainer.children;

    if (hasAnswered == true) {
        return;
    }

    //change the answer state
    hasAnswered = true;

    //update score
    if (selectedIndex === questionsData[currenQIndex].correctIndex) {
        scoreValue += 5;
        score.innerHTML = scoreValue;

    }

    //Changing color of the options based on selected answer
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        if (i === questionsData[currenQIndex].correctIndex) {
            button.classList.add("correct")
        } else if (i === selectedIndex) {
            button.classList.add("wrong")
        }

        //Disable buttons
        button.disabled = true;
    }
    setTimeout(() => {
        goToNextQuestion();
    }, 1000);
}

function showResult() {
    clearInterval(timerId);
    showScreen(resultScreen);

    finalScore.innerHTML = scoreValue;
    maxScore.innerHTML = questionsData.length * 5;
}

function goToNextQuestion() {
    currenQIndex++;

    if (currenQIndex < questionsData.length) {
        showQuestion(currenQIndex);
    } else {
        showResult();
    }

}


function handleTimeout() {
    //adding the guard
    if (hasAnswered) return;
    hasAnswered = true;


    const buttons = answersContainer.children;
    const correctIndex = questionsData[currenQIndex].correctIndex;

    // Show correct answer only
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];

        if (i === correctIndex) {
            button.classList.add("correct");
        }

        button.disabled = true;
    }
    setTimeout(() => {
        goToNextQuestion();
    }, 1000);
}

function startTimer() {
    timerId = setInterval(() => {
        timeLeft--;
        timer.innerHTML = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerId);
            handleTimeout();
        }
    }, 1000);
}

function showQuestion(currenQIndex) {

    //clear old UI
    answersContainer.innerHTML = "";
    hasAnswered = false;

    let currentQuestion = questionsData[currenQIndex];

    //clear timer 
    if (timerId != null) {
        clearInterval(timerId);
    }

    questionText.innerHTML = currentQuestion.question;
    currentQuestionNum.innerHTML = currenQIndex + 1;
    totalQuestions.innerHTML = questionsData.length;
    score.innerHTML = scoreValue;

    // UPDATE PROGRESS BAR
    const progressPercent = ((currenQIndex + 1) / questionsData.length) * 100;
    progress.style.width = progressPercent + "%";

    //creating answers buttons
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("answer-btn")
        button.textContent = option;
        button.addEventListener("click", function () {
            //call to handle answers
            handleAnswer(index);
        })
        answersContainer.appendChild(button);
    });
    timeLeft = 15;
    timer.innerHTML = timeLeft;
    startTimer();

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




// /* =========================
//    QUIZ DATA
// ========================= */

// const questionsData = [
//     {
//         question: "Which language runs in the browser?",
//         options: ["Java", "C", "Python", "JavaScript"],
//         correctIndex: 3
//     },
//     {
//         question: "What does DOM stand for?",
//         options: [
//             "Document Object Model",
//             "Data Object Model",
//             "Digital Output Method",
//             "Desktop Oriented Mode"
//         ],
//         correctIndex: 0
//     },
//     {
//         question: "Which keyword is used to declare a constant in JavaScript?",
//         options: ["var", "let", "const", "static"],
//         correctIndex: 2
//     },
//     {
//         question: "Which method is used to fetch data from an API in JavaScript?",
//         options: ["getData()", "fetch()", "request()", "callAPI()"],
//         correctIndex: 1
//     },
//     {
//         question: "What will typeof null return in JavaScript?",
//         options: ["null", "object", "undefined", "number"],
//         correctIndex: 1
//     }
// ];


// /* =========================
//    DOM ELEMENTS
// ========================= */

// // Screens
// const startScreen = document.querySelector("#start-screen");
// const quizScreen = document.querySelector("#quiz-screen");
// const resultScreen = document.querySelector("#result-screen");

// // Buttons
// const startBtn = document.querySelector("#start-btn");
// const restartBtn = document.querySelector("#restart-btn");

// // Quiz UI
// const questionText = document.querySelector("#question-text");
// const currentQuestionNum = document.querySelector("#current-question");
// const totalQuestions = document.querySelector("#total-questions");
// const score = document.querySelector("#score");
// const answersContainer = document.querySelector("#answers-container");
// const progress = document.querySelector("#progress");
// const timer = document.querySelector("#timer");

// // Result UI
// const finalScore = document.querySelector("#final-score");
// const maxScore = document.querySelector("#max-score");


// /* =========================
//    APPLICATION STATE
// ========================= */

// let currenQIndex = 0;
// let scoreValue = 0;
// let hasAnswered = false;

// let timeLeft = 15;
// let timerId = null;


// /* =========================
//    SCREEN CONTROL
// ========================= */

// function showScreen(screen) {
//     startScreen.classList.remove("active");
//     quizScreen.classList.remove("active");
//     resultScreen.classList.remove("active");
//     screen.classList.add("active");
// }


// /* =========================
//    QUIZ FLOW CONTROL
// ========================= */

// function goToNextQuestion() {
//     currenQIndex++;

//     if (currenQIndex < questionsData.length) {
//         showQuestion(currenQIndex);
//     } else {
//         showResult();
//     }
// }


// /* =========================
//    TIMER ENGINE
// ========================= */

// function startTimer() {
//     timerId = setInterval(() => {
//         timeLeft--;
//         timer.innerHTML = timeLeft;

//         if (timeLeft === 0) {
//             clearInterval(timerId);
//             handleTimeout();
//         }

//     }, 1000);
// }

// function handleTimeout() {

//     if (hasAnswered) return;
//     hasAnswered = true;

//     const buttons = answersContainer.children;
//     const correctIndex = questionsData[currenQIndex].correctIndex;

//     // Show only correct answer
//     for (let i = 0; i < buttons.length; i++) {
//         const button = buttons[i];

//         if (i === correctIndex) {
//             button.classList.add("correct");
//         }

//         button.disabled = true;
//     }

//     setTimeout(goToNextQuestion, 1000);
// }


// /* =========================
//    ANSWER HANDLING
// ========================= */

// function handleAnswer(selectedIndex) {

//     if (hasAnswered) return;

//     // Stop timer immediately
//     clearInterval(timerId);

//     hasAnswered = true;

//     const buttons = answersContainer.children;
//     const correctIndex = questionsData[currenQIndex].correctIndex;

//     // Update score
//     if (selectedIndex === correctIndex) {
//         scoreValue += 5;
//         score.innerHTML = scoreValue;
//     }

//     // Visual feedback + lock
//     for (let i = 0; i < buttons.length; i++) {
//         const button = buttons[i];

//         if (i === correctIndex) {
//             button.classList.add("correct");
//         }
//         else if (i === selectedIndex) {
//             button.classList.add("wrong");
//         }

//         button.disabled = true;
//     }

//     setTimeout(goToNextQuestion, 1000);
// }


// /* =========================
//    QUESTION RENDERING
// ========================= */

// function showQuestion(index) {

//     // Reset UI state
//     answersContainer.innerHTML = "";
//     hasAnswered = false;

//     // Stop old timer
//     if (timerId !== null) {
//         clearInterval(timerId);
//         timerId = null;
//     }

//     // Reset timer state
//     timeLeft = 15;
//     timer.innerHTML = timeLeft;

//     const currentQuestion = questionsData[index];

//     // Update UI
//     questionText.innerHTML = currentQuestion.question;
//     currentQuestionNum.innerHTML = index + 1;
//     totalQuestions.innerHTML = questionsData.length;
//     score.innerHTML = scoreValue;

//     // Update progress bar
//     const progressPercent = ((index + 1) / questionsData.length) * 100;
//     progress.style.width = progressPercent + "%";

//     // Create answer buttons
//     currentQuestion.options.forEach((option, optionIndex) => {

//         const button = document.createElement("button");
//         button.classList.add("answer-btn");
//         button.textContent = option;

//         button.addEventListener("click", () => {
//             handleAnswer(optionIndex);
//         });

//         answersContainer.appendChild(button);
//     });

//     // Start timer for this question
//     startTimer();
// }


// /* =========================
//    RESULT + RESTART
// ========================= */

// function showResult() {

//     if (timerId !== null) {
//         clearInterval(timerId);
//         timerId = null;
//     }

//     showScreen(resultScreen);

//     finalScore.innerHTML = scoreValue;
//     maxScore.innerHTML = questionsData.length * 5;
// }

// restartBtn.addEventListener("click", () => {

//     // Stop any running timer
//     if (timerId !== null) {
//         clearInterval(timerId);
//         timerId = null;
//     }

//     // Reset state
//     currenQIndex = 0;
//     scoreValue = 0;
//     hasAnswered = false;
//     timeLeft = 15;

//     // Reset UI
//     score.innerHTML = 0;
//     progress.style.width = "0%";
//     timer.innerHTML = timeLeft;

//     // Go back to start screen
//     showScreen(startScreen);
// });


// /* =========================
//    START QUIZ
// ========================= */

// startBtn.addEventListener("click", () => {
//     showScreen(quizScreen);
//     showQuestion(currenQIndex);
// });
