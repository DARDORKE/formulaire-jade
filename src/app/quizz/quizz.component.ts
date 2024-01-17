import {Component, OnInit} from '@angular/core';
import {QuizService} from "./quiz.service";
import {NgForOf, NgIf} from "@angular/common";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RadioButtonModule,
    FormsModule
  ],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss'
})
export class QuizzComponent implements OnInit{
  currentQuestionId = 1;
  currentQuestion: any;
  selectedOption: any;  // Ajouté pour gérer l'option sélectionnée

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.loadQuestion(this.currentQuestionId);
  }

  loadQuestion(id: number) {
    this.currentQuestion = this.quizService.getQuestion(id);
    this.selectedOption = null; // Réinitialiser l'option sélectionnée
  }

  onSelectOption() {
    if (this.selectedOption) {
      // Ici, gérer la logique pour passer à la question suivante en fonction de l'option sélectionnée
      this.currentQuestionId = this.selectedOption.nextQuestionId;
      this.loadQuestion(this.currentQuestionId);
    }
  }
}
