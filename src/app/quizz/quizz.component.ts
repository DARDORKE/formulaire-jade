import {Component, OnInit} from '@angular/core';
import {QuizService} from "./quiz.service";
import {NgForOf, NgIf} from "@angular/common";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {animate, state, style, transition, trigger} from "@angular/animations";
@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RadioButtonModule,
    FormsModule,
    ButtonModule
  ],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss',
  animations: [
    trigger('questionAnimation', [
      state('enter', style({ opacity: 1, transform: 'translateX(0)' })),
      state('leave', style({ opacity: 0, transform: 'translateX(-100%)' })),
      transition('* => enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('0.5s ease-out')
      ]),
      transition('* => leave', [
        animate('0.5s ease-in', style({ opacity: 0, transform: 'translateX(-100%)' }))
      ])
    ]),
  ],
})
export class QuizzComponent implements OnInit{
  numberOfQuestions = 0;
  currentQuestionId = 1;
  currentQuestion: any;
  selectedOption: any;  // Ajouté pour gérer l'option sélectionnée
  questionHistory: { questionId: number, selectedOption: any }[] = [];
  currentQuestionNumber: number = 1;
  animationState: 'enter' | 'leave' = 'enter';
  showQuestions = true;
  showResults = false;
  isAnimating = false;
  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.currentQuestion = this.quizService.getQuestion(this.currentQuestionId);
    this.numberOfQuestions = this.quizService.getNumberOfQuestions();
  }

  loadQuestion(id: number, addQuestionNumber: string) {
    this.isAnimating = true; // Activer l'animation
    this.animationState = 'leave'; // Commencez par quitter l'animation pour la question actuelle

    setTimeout(() => {
      this.currentQuestion = this.quizService.getQuestion(id);
      this.selectedOption = null; // Réinitialiser l'option sélectionnée
      this.animationState = 'enter'; // Déclenchez l'animation d'entrée pour la nouvelle question
      if (addQuestionNumber === 'next') {
        this.currentQuestionNumber++;
      } else if(addQuestionNumber === 'previous') {
        this.currentQuestionNumber--;
      }
      this.isAnimating = false; // Désactiver l'animation une fois terminée
    }, 500); // Le délai devrait correspondre à la durée de l'animation
  }

  onSelectOption() {
    if (this.selectedOption) {
      this.questionHistory.push({ questionId: this.currentQuestionId, selectedOption: this.selectedOption });
      this.currentQuestionId = this.selectedOption.nextQuestionId;
      this.loadQuestion(this.currentQuestionId, 'next');
    }
  }

  goToPreviousQuestion() {
    if (this.questionHistory.length > 0) {
      const previous = this.questionHistory.pop(); // Retirer et obtenir la question précédente
      this.currentQuestionId = previous ? previous.questionId : 0;
      this.selectedOption = previous?.selectedOption;
      this.loadQuestion(this.currentQuestionId, 'previous');
    }
  }

  calculateFinalOutcome() {
    const result: any[] = [];
    this.questionHistory.push({ questionId: this.currentQuestionId, selectedOption: this.selectedOption });
    this.questionHistory.forEach(question => {
      result.push(question.selectedOption.id);
    });
    this.animationState = 'leave';
  }

  onAnimationDone() {
    if (this.animationState === 'leave') {
      this.showQuestions = false;
      this.showResults = true;
      this.animationState = 'enter'; // Préparez l'état pour la prochaine animation
      this.isAnimating = false; // Désactiver l'animation lorsque l'animation est terminée
    }
  }
}
