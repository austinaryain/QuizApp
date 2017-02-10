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
}
/// <reference path="./question.ts"/>
class Quiz {
    constructor(mQuestions) {
        this._score = 0;
        this.timesTried = 0;
        this.runQuiz = () => {
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
        };
        this.questions = mQuestions;
    }
    getScore() {
        return this._score;
    }
}
/// <reference path="quiz.ts"/>
/// <reference path="question.ts"/>
function main() {
    let questions = [
        new Question("What color is the sky?", ["Orange", "Green", "Blue", "Red"], "C", 20),
        new Question("What color is grass?", ["Orange", "Green", "Blue", "Red"], "B", 10),
        new Question("How many legs does a dog have?", ["1", "2", "3", "4"], "D", 5),
        new Question("What is the capital of Texas?", ["Houston", "Dallas", "Austin", "San Antonio"], "C", 50),
        new Question("Is TypeScript awesome?", ["Yes", "No", "Not Sure", "Possibly"], "A", 15)
    ];
    let quiz = new Quiz(questions);
    quiz.runQuiz();
}
main();
//# sourceMappingURL=main.js.map