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