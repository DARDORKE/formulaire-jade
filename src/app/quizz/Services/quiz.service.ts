import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions = [
    {
      id: 1,
      questionText: "Pour votre séjour en baie de Somme, vous venez en mode :",
      options: [
        {id: 1, answerText: "Explorateur culturel", nextQuestionId: 2},
        {id: 2, answerText: "Slow life", nextQuestionId: 2},
        {id: 3, answerText: "Sportif de compet’", nextQuestionId: 2},
      ]
    },
    {
      id: 2,
      questionText: "Vous passerez vos vacances :",
      options: [
        {id: 1, answerText: "Entre amis", nextQuestionId: 3},
        {id: 2, answerText: "En famille", nextQuestionId: 3},
        {id: 3, answerText: "Avec votre amoureux/euse", nextQuestionId: 3},
      ]
    },
    {
      id: 3,
      questionText: "Pendant votre séjour vous préférez :",
      options: [
        {id: 1, answerText: "Être en pleine nature, la pluie ne vous fait pas peur", nextQuestionId: 4},
        {id: 2, answerText: "Être dans un milieu urbain, visiter des musées", nextQuestionId: 4},
        {id: 3, answerText: "Remonter le temps, découvrir le passé…", nextQuestionId: 4},
      ]
    },
    // autres questions...
  ];

  getQuestion(id: number) {
    return this.questions.find(question => question.id === id);
  }

  getNumberOfQuestions(): number {
    return this.questions.length;
  }
}
