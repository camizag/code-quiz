let mainQuestion = document.getElementById("main-question");
let optionContainer = document.getElementsByClassName("option-container");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let answerContainer = document.getElementById("answer-container");

// Array of questions
// All the information for the options came from: https://developer.mozilla.org/en-US/
let quiz = [
    {
        title: "What is an array?",
        options: ["A variable that stores multiple data types under a single variable.", "A group of statements that can perform a task or calculate a value.", "A set of programming features that can manipulate the browser and the running operating system.", "A group of actions or occurances that happen in the system."],
        answer: "A variable that stores multiple data types under a single variable.",
    },
    {
        title: "What does NaN mean in JavaScript?",
        options: ["Not-A-Name", "Not-A-Number", "No-Action-Necessary", "Names-And-Nicknames"],
        answer: "Not-A-Number",
    },
    {
        title: "What does DOM stand for?",
        options: ["Document Object Module", "Data Object Model", "Document Object Model", "Data Output Message"],
        answer: "Document Object Model",
    },
    {
        title: "Who invented JavaScript?",
        options: ["Brendan Eich", "Guido van Rossum", "Tim Berners-Lee", "Yukihiro Matsumoto"],
        answer: "Brendan Eich",
    },
];

//Timer variables
let timerContainer = document.getElementsByClassName("timer-container");
let timer = document.getElementById("timer");

//Timer


// Quiz variables
let playingQuestion = 0;
let score = 0;
let allQuestions = quiz.length;

// Function to display the question
function showQuestion() {
    
    let question = quiz[playingQuestion];
    mainQuestion.innerHTML = question.title;
    option1.innerHTML = question.options[0];
    option2.innerHTML = question.options[1];
    option3.innerHTML = question.options[2];
    option4.innerHTML = question.options[3];
}

// Fuction to check if the answer is correct or not
function checkAnswer(answer) {
    if (answer === quiz[playingQuestion].answer) {
        score++;
        answerContainer.innerHTML = "Correct Answer";
    } else {
        answerContainer.innerHTML = "Wrong Answer";
    }
}

function quizTimer(duration, display) {
    
}

// Function to change the question on clicking the next button
function nextQuestion() {
    playingQuestion++;
    if (playingQuestion === allQuestions) {
        alert("Quiz Over");
    } else {
        showQuestion();
    }
}

//function to change the question on click and check the answer
function changeQuestion(event) {
    event.preventDefault();
    let answer = event.target.innerHTML;
    checkAnswer(answer);
    nextQuestion();
}

// Add event listener to the question options
option1.addEventListener("click", changeQuestion);
option2.addEventListener("click", changeQuestion);
option3.addEventListener("click", changeQuestion);
option4.addEventListener("click", changeQuestion);
// Display the first question

showQuestion();