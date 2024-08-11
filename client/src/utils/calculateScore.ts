import { ResultQuestion } from "../services/QuestionService";

export const calculateScore = (result: ResultQuestion[]) : number => {
    let numberCorrectAnswer = 0;
    
    result.forEach((question) => {
        if(question.userChoice === question.answer) {
            numberCorrectAnswer++;
        }
    });

    return numberCorrectAnswer;
}