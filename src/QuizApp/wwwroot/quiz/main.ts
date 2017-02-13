/// <reference path="quiz.ts"/>
/// <reference path="question.ts"/>

const fadeInSpeed: number = 500;
const fadeOutSpeed: number = 1000;

let chooseQuizUI = $('#chooseQuizUI');
let takeQuizUI = $('#takeQuizUI');
let makeQuizUI = $('#makeQuizUI');
let makeQuestionsFormUI = $('#makeQuestionsFormUI');
let scoresUI = $('#scoresUI');
let currentScene = chooseQuizUI;
let currentQuiz;


//UI STUFF

// TAKE A QUIZ UI //

let quizName = $('#quizName');
let quizQuestion = $('#quizQuestion');
let ans1 = $('#ans1 span');
let ans2 = $('#ans2 span');
let ans3 = $('#ans3 span');
let ans4 = $('#ans4 span');
let ans1Radio = ('#ans1Radio');
let ans2Radio = ('#ans2Radio');
let ans3Radio = ('#ans3Radio');
let ans4Radio = ('#ans4Radio');
let takeQuizButton = $('#takeQuizButton');
let currentQuestionNumber = 0;

// END TAKE A QUIZ UI //

function main() {
    let questions = [
        new Question("What color is the sky?", ["Orange", "Green", "Blue", "Red"], "C", 20),
        new Question("What color is grass?", ["Orange", "Green", "Blue", "Red"], "B", 10),
        new Question("How many legs does a dog have?", ["1", "2", "3", "4"], "D", 5),
        new Question("What is the capital of Texas?", ["Houston", "Dallas", "Austin", "San Antonio"], "C", 50),
        new Question("Is TypeScript awesome?", ["Yes", "No", "Not Sure", "Possibly"], "A", 15)
    ];

    currentQuiz = new Quiz("basics", questions);

    saveQuiz();


    //quiz.runQuiz();

    currentScene.fadeIn(250);
}


function saveQuiz() {

    localStorage.setItem(currentQuiz.quizTitle, currentQuiz.toJSON());


}

function retrieveQuiz(quizTitle) {

    return JSON.parse(localStorage.getItem(quizTitle));

}

function switchScene(uiElement) {

    if (uiElement == currentScene) {
        return false;
    }

    currentScene.toggle('slide');

    uiElement.fadeIn(fadeInSpeed);

    currentScene = uiElement;

}

function loadQuiz(quizTitle) {

    currentQuiz = retrieveQuiz(quizTitle);

    quizName.text(currentQuiz.title);

    quizQuestion.html(currentQuiz.questions[currentQuestionNumber].question);
    ans1.text(currentQuiz.questions[currentQuestionNumber].answers[0]);
    ans2.text(currentQuiz.questions[currentQuestionNumber].answers[1]);
    ans3.text(currentQuiz.questions[currentQuestionNumber].answers[2]);
    ans4.text(currentQuiz.questions[currentQuestionNumber].answers[3]);

    console.log(currentQuiz.questions[currentQuestionNumber].answers[0]);
    switchScene(takeQuizUI);
}

main();