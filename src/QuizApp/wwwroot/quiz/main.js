class Question {
    constructor(mQuestion, mAnswers, mCorrect, mPointValue) {
        this.question = mQuestion;
        this.answers = mAnswers;
        this.correct = mCorrect;
        this._pointValue = mPointValue;
    }
    getQuestion() {
        return `${this.question} (Points: ${this._pointValue}) \n\n`;
    }
    getAnswers() {
        let answers = "";
        let counter = 0;
        this.answers.forEach((ans) => {
            answers += String.fromCharCode(65 + counter) + ') ' + ans + '\n';
            counter++;
        });
        return answers;
    }
    setPointValue(val) {
        this._pointValue = val;
    }
    decrementPoints() {
        if (this._pointValue <= 1) {
            this.setPointValue(1);
        }
        else {
            this.setPointValue(--this._pointValue);
        }
    }
    checkAnswer(ans) {
        if (ans === this.correct) {
            return true;
        }
        else {
            this.decrementPoints();
            return false;
        }
    }
    toJSON() {
        let a = "[";
        this.answers.forEach((ans) => {
            a += `"${ans}",`;
        });
        a = a.slice(0, -1);
        a += "]";
        return `{"question": "${this.question}", "answers": ${a}}`;
    }
}
/// <reference path="./question.ts"/>
class Quiz {
    constructor(title, mQuestions) {
        this._score = 0;
        this.timesTried = 0;
        this.questions = mQuestions;
        this.quizTitle = title;
    }
    getScore() {
        return this._score;
    }
    runQuiz() {
        for (let i = 0; i < this.questions.length; i++) {
            let ans = prompt(this.questions[i].getQuestion() + this.questions[i].getAnswers());
            if (this.questions[i].checkAnswer(ans)) {
                this._score += this.questions[i]._pointValue;
            }
            else {
                i--;
            }
        }
        console.log(`Final Score: ${this._score}`);
    }
    toJSON() {
        let q = "[";
        this.questions.forEach((question) => {
            q += `${question.toJSON()},`;
        });
        q = q.slice(0, -1);
        q += "]";
        let json = `{"title": "${this.quizTitle}", "questions": ${q}}`;
        return json;
    }
}
/// <reference path="quiz.ts"/>
/// <reference path="question.ts"/>
const fadeInSpeed = 500;
const fadeOutSpeed = 1000;
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
//# sourceMappingURL=main.js.map