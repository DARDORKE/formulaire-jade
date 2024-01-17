import {SuggestionInterface} from "./suggestion.interface";

export interface ResponseInterface {
  content: string;
  selected: boolean;
  suggestion: SuggestionInterface;
}
