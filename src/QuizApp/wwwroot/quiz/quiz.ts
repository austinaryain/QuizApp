/// <reference path="./question.ts"/>
import { Question } from './question';

    export class Quiz {

        questions: Question[];

        private _score: number = 0;

        constructor(mQuestions: Question[]) { this.questions = mQuestions; }

        getScore() {
            return this._score;
        }

        runQuiz() {

            this.questions.forEach((question) => {
                var ans = prompt(question.getQuestion() + question.getAnswers());

                if (question.checkAnswer(ans)) {
                    this._score += 10;
                }
            });

            console.log(`Final Score: ${this._score}`);
        }

    }



 