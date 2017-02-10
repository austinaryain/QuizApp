"use strict";
var Question = (function () {
    function Question(mQuestion, mAnswers, mCorrect) {
        this.question = mQuestion;
        this.answers = mAnswers;
        this.correct = mCorrect;
    }
    Question.prototype.getQuestion = function () {
        return this.question + '\n\n';
    };
    Question.prototype.getAnswers = function () {
        var answers;
        var counter = 0;
        this.answers.forEach(function (ans) {
            answers += String.fromCharCode(65 + counter) + ') ' + ans + '\n';
        });
        return answers;
    };
    Question.prototype.checkAnswer = function (ans) {
        if (ans === this.correct) {
            return true;
        }
        else {
            return false;
        }
    };
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=question.js.map