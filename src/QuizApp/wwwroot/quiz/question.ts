    class Question {
        question: string;
        answers: string[];
        correct: string;
        public _pointValue: number;

        constructor(mQuestion: string, mAnswers: string[], mCorrect: string, mPointValue: number) {
            this.question = mQuestion;
            this.answers = mAnswers;
            this.correct = mCorrect;
            this._pointValue = mPointValue;
        }

        getQuestion(): string {
            return `${this.question} (Points: ${this._pointValue}) \n\n`;
        }

        getAnswers(): string {
            let answers = "";
            let counter = 0;

            this.answers.forEach((ans) => {
                answers += String.fromCharCode(65 + counter) + ') ' + ans + '\n';
                counter++;
            });

            return answers;
        }


        public setPointValue(val: number) {
            this._pointValue = val;
        }

        decrementPoints() {
            if (this._pointValue <= 1) {
                this.setPointValue(1);
            } else {
                this.setPointValue(--this._pointValue);
            }
        }

        checkAnswer(ans: string): boolean {

            if (ans === this.correct) {
                return true;
            } else {
                this.decrementPoints();
                return false;
            }

        }

    }
