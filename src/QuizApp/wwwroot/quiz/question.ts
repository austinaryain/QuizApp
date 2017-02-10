    export class Question {
        question: string;
        answers: string[];
        correct: string;

        constructor(mQuestion: string, mAnswers: string[], mCorrect: string) {
            this.question = mQuestion;
            this.answers = mAnswers;
            this.correct = mCorrect;
        }

        getQuestion(): string {
            return this.question + '\n\n';
        }

        getAnswers(): string {
            let answers;
            let counter = 0;

            this.answers.forEach((ans) => {
                answers += String.fromCharCode(65 + counter) + ') ' + ans + '\n';
            });

            return answers;
        }

        checkAnswer(ans: string): boolean {

            if (ans === this.correct) {
                return true;
            } else {
                return false;
            }

        }

    }
