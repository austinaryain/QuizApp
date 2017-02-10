/// <reference path="quiz.ts"/>
/// <reference path="question.ts"/>

import { Quiz } from './quiz';
import { Question } from './question';

function main() {
    let questions = [
        new Question("What color is the sky?", ["Green", "Blue", "Red"], "B")
    ];

    let quiz = new Quiz(questions);

    quiz.runQuiz();
     
}

main();