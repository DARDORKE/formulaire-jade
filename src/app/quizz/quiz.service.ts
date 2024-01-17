import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions = [
    {
      id: 1,
      questionText: "Question 1 : De quelle couleur est la mer ?",
      options: [
        {answerText: "Réponse A1", nextQuestionId: 2},
        {answerText: "Réponse A2", nextQuestionId: 3},]
    },
    {
      id: 2,
      questionText: "Question 2 : Comment sont vont les vaches ?",
      options: [
        {answerText: "Réponse B1", nextQuestionId: 4},
        {answerText: "Réponse B2", nextQuestionId: 5},]
    },
    // autres questions...
  ];

  getQuestion(id: number) {
    return this.questions.find(question => question.id === id);
  }
}
