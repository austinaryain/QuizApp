/// <reference path="./question.ts"/>

   class Quiz {

        questions: Question[];

        private _score: number = 0;
        private timesTried: number = 0;

        constructor(mQuestions: Question[]) { this.questions = mQuestions; }

        getScore() {
            return this._score;
        }

        runQuiz = () => {

            for (let i = 0; i < this.questions.length; i++) {
                let ans = prompt(this.questions[i].getQuestion() + this.questions[i].getAnswers());

                if (this.questions[i].checkAnswer(ans)) {
                    this._score += this.questions[i]._pointValue;
                } else {
                    i--;
                }
            }

            console.log(`Final Score: ${this._score}`);
        }

    }



 