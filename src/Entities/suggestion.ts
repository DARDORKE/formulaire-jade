import {SuggestionInterface} from "../Interfaces/suggestion.interface";

export class Suggestion implements SuggestionInterface {
  name: string;
  url: string;
  infos: string;
  score: number;

  constructor(name: string, url: string, infos: string, score: number) {
    this.name = name;
    this.url = url;
    this.infos = infos;
    this.score = score;
  }

}
