/// <reference path="quiz.ts"/>
/// <reference path="question.ts"/>
"use strict";
var quiz_1 = require("./quiz");
var question_1 = require("./question");
function main() {
    var questions = [
        new question_1.Question("What color is the sky?", ["Green", "Blue", "Red"], "B")
    ];
    var quiz = new quiz_1.Quiz(questions);
    quiz.runQuiz();
}
main();
//# sourceMappingURL=main.js.map