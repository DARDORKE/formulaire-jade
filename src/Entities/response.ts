import {ResponseInterface} from "../Interfaces/response.interface";
import {SuggestionInterface} from "../Interfaces/suggestion.interface";

export class Response implements ResponseInterface {
  content: string;
  selected: boolean;
  suggestion: SuggestionInterface;

  constructor(content: string, selected: boolean, suggestion: SuggestionInterface) {
    this.content = content;
    this.selected = selected;
    this.suggestion = suggestion;
  }

}
