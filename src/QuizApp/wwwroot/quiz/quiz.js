"use strict";
var Quiz = (function () {
    function Quiz(mQuestions) {
        this._score = 0;
        this.questions = mQuestions;
    }
    Quiz.prototype.getScore = function () {
        return this._score;
    };
    Quiz.prototype.runQuiz = function () {
        var _this = this;
        this.questions.forEach(function (question) {
            var ans = prompt(question.getQuestion() + question.getAnswers());
            if (question.checkAnswer(ans)) {
                _this._score += 10;
            }
        });
        console.log("Final Score: " + this._score);
    };
    return Quiz;
}());
exports.Quiz = Quiz;
//# sourceMappingURL=quiz.js.map