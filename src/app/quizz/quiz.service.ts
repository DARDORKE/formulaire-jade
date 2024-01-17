import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private history: { questionId: number, selectedOption: any }[] = [];
  private questions = [
    {
      id: 1,
      questionText: "Question 1 : De quelle couleur est la mer ?",
      options: [
        {answerText: "Réponse A1", nextQuestionId: 2},
        {answerText: "Réponse A2", nextQuestionId: 2},]
    },
    {
      id: 2,
      questionText: "Question 2 : Comment sont vont les vaches ?",
      options: [
        {answerText: "Réponse B1", nextQuestionId: 1},
        {answerText: "Réponse B2", nextQuestionId: 1},]
    },
    // autres questions...
  ];

  addResponse(questionId: number, selectedOption: any) {
    this.history.push({ questionId, selectedOption });
  }

  getPreviousQuestion() {
    if (this.history.length > 1) {
      this.history.pop(); // Enlève la question actuelle
      return this.history[this.history.length - 1]; // Retourne la question précédente
    }
    return null;
  }

  getHistory() {
    return this.history;
  }

  getQuestion(id: number) {
    return this.questions.find(question => question.id === id);
  }
}
