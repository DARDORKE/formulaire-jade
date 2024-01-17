import {QcmInterface} from "../Interfaces/qcm.interface";
import {SuggestionInterface} from "../Interfaces/suggestion.interface";
import {QuestionInterface} from "../Interfaces/question.interface";

export class Qcm implements QcmInterface{

  questions: QuestionInterface[];
  suggestions: SuggestionInterface[];

  constructor(questions: QuestionInterface[], suggestions: SuggestionInterface[]) {
    this.questions = questions;
    this.suggestions = suggestions;
  }

}
