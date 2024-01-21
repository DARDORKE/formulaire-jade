import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {QuizService} from "./Services/quiz.service";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {QuizResultService} from "./Services/quiz-result.service";
@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RadioButtonModule,
    FormsModule,
    ButtonModule,
    NgOptimizedImage
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
    trigger('resultAnimation', [
      state('enter', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(100%)' }), // Démarre du bas de la page
        animate('3s ease-out') // Durée de l'animation
      ]),
    ]),
  ],
})
export class QuizzComponent implements OnInit{
  @ViewChildren('activityElement') activityElements!: QueryList<ElementRef>;
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
  isCalculatingResult = false;
  activities: any[] = [];
  constructor(private quizService: QuizService, private quizResultService: QuizResultService) {}

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
    // Ajout de la dernière sélection à l'historique
    this.questionHistory.push({ questionId: this.currentQuestionId, selectedOption: this.selectedOption });

    // Calcul de la clé de résultat basée sur l'historique des réponses
    const resultKey = this.questionHistory.map(q => q.selectedOption.id).join('.');

    // Début de l'animation de sortie
    this.isCalculatingResult = true;
    this.animationState = 'leave';

    // Attente de la fin de l'animation avant d'afficher les résultats
    setTimeout(() => {
      // Récupération des résultats basés sur la clé calculée
      this.activities = this.quizResultService.getResult(resultKey);

      // Mise à jour de l'état pour afficher les résultats
      this.showQuestions = false;  // Cachez les questions
      this.showResults = true;     // Affichez les résultats
      this.animationState = 'enter'; // Déclenchez l'animation d'entrée pour les résultats
    }, 500); // La durée doit correspondre à celle de votre animation de sortie
  }

  toggleDetails(activityToToggle: any, index: number) {
    this.activities.forEach((activity, i) => {
      if (activity !== activityToToggle) {
        activity.showDetails = false;
        // Assurez-vous de réinitialiser la classe 'active' pour les autres éléments
        this.activityElements.toArray()[i].nativeElement.classList.remove('active');
      }
    });
    activityToToggle.showDetails = !activityToToggle.showDetails;

    if (activityToToggle.showDetails) {
      // Ajoutez la classe 'active' pour déclencher l'animation
      this.activityElements.toArray()[index].nativeElement.classList.add('active');

      setTimeout(() => {
        this.activityElements.toArray()[index].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }


  onAnimationDone() {
    if (this.animationState === 'leave' && this.isCalculatingResult) {
      this.showQuestions = false;
      this.showResults = true;
      this.animationState = 'enter'; // Préparez l'état pour la prochaine animation
      this.isCalculatingResult = false; // Réinitialiser la condition de calcul des résultats
    }
  }
  resetQuiz() {
    this.showResults = false;
    this.currentQuestionId = 1;
    this.currentQuestion = this.quizService.getQuestion(this.currentQuestionId);
    this.currentQuestionNumber = 1;
    this.questionHistory = [];
    this.selectedOption = null;
    this.showQuestions = true;
    this.animationState = 'enter';
    this.isCalculatingResult = false; // Assurez-vous de réinitialiser ce flag
  }
}
