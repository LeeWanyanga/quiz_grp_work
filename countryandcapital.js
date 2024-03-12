const questions = [
    {
    question: "What is the capital city of Austria?",
    choices: ["A. Vienna", "B. Baku", "C. Sofia", "D. Lusail"],
    correctAnswer: "A"
},
{
    question: "Which continent is Peru found in?",
    choices: ["A. North America", "B. South America", "C. Europe", "D. Asia"],
    correctAnswer: "B"
},
{
    question: "What is the capital city of Canada?",
    choices: ["A. Toronto", "B. Ottawa", "C. Ontario", "D. Vancouver"],
    correctAnswer: "B"
},
{
    question: "Which country has one of the seven wonders of the world?",
    choices: ["A. Belgium", "B. Botswana", "C. India", "D. China"],
    correctAnswer: "D"
},
{
    question: "Which country is popularly referred to as 'Holland'?",
    choices: ["A. Portugal", "B. Belgium", "C. Netherlands", "D. Australia"],
    correctAnswer: "C"
}
];

const quizForm = document.getElementById("quizForm");
const feedback = document.getElementById("feedback");

let currentQuestionIndex = 0;

//Load initial question
loadQuestion();

//Function to load question
function loadQuestion(){
    const currentQuestion = questions[currentQuestionIndex]

document.getElementById("question").textContent = currentQuestion.question;
document.getElementById("choiceA").textContent = currentQuestion.choices[0];
document.getElementById("choiceB").textContent = currentQuestion.choices[1];
document.getElementById("choiceC").textContent = currentQuestion.choices[2];
document.getElementById("choiceD").textContent = currentQuestion.choices[3];
}

//Function to handle form submission
quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) {
        feedback.textContent = "Please select an answer";
        return;
    }

    const answer = selectedAnswer.value;

    if (answer === questions[currentQuestionIndex].correctAnswer) {
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = "Incorrect. The correct answer is " + questions[currentQuestionIndex].correctAnswer;
    }




    // Move to the next question or end the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(function() {
            loadQuestion();
            feedback.textContent = "";
        }, 800); // Load next question after 1.5 seconds
    } else {
        setTimeout(function() {
            feedback.textContent = "Quiz Completed!";
        }, 800); // Show quiz completion message after 1.5 seconds
    }

// let result = document.getElementById("result");
// let message = document.getElementById("message");
// let score = score;

// if (score == 5){
//     alert("Congratulations on your perfect score!");
// }

// if (score == 3 || score == 4){
//     alert("Good job, keep trying.");
// }


    // Clear selection
    selectedAnswer.checked = false;
});





























    // function checkAnswer(userAnswer) {
    //     if (answer === questions[currentQuestionIndex].correctAnswer) {
    //         alert("Correct!");
    //         score = score + 1;
    //     } else {
    //         alert("Sorry, that's not correct.");
    //     }
    
    //     currentQuestion = currentQuestion + 1;
    //     nextQuestion(questions[currentQuestion]);
    // };
    


// function checkAnswer(userAnswer) {
//     if (userAnswer === question1.answer)
//     {
//         alert("Correct!");
//     }
//     else
//      {
//         alert("Sorry, that's not correct.");
//     }
// }

// let score = 0;

// function checkAnswer(userAnswer) {
//     if (userAnswer === question1.answer) {
//         alert("Correct!");
//         score = score + 1;
//     }
//     else {
//         alert("Sorry, that's not correct.");
//     }
// }

// function nextQuestion(question) {
//     document.getElementById("question").innerText = question.question;
//     document.getElementById("option1").innerText = question.options[0];
//     document.getElementById("option2").innerText = question.options[1];
//     document.getElementById("option3").innerText = question.options[2];
//     document.getElementById("option4").innerText = question.options[3];
// }


 


// const questions = [
//     {
//         question1: "What is the language used to style a website?",
//         choices: ["A. HTML", "B. CSS", "C. Javascript", "D. React "],
//         correctAnswer: "B."
//     },
//     {
//         question2: "What is the language used to show the skeleton of a website?",
//         choices: ["A. HTML", "B. CSS", "C. Javascript", "D. React "],
//         Answer: "A."
//     },
//     {
//         question3: "What is the language used for functionality in a website?",
//         choices: ["A. HTML", "B. CSS", "C. Javascript", "D. React "],
//         correct: "C."
//     },
//     {
//     question4: "What element is used to show a line break?",
//     choices: ["A. ol", "B. ul", "C. th", "D. br"],
//     correct: "D."
//     }
//