import {QuestionInterface} from "./question.interface";
import {SuggestionInterface} from "./suggestion.interface";

export interface QcmInterface {
  questions: QuestionInterface[];
  suggestions: SuggestionInterface[];
}
