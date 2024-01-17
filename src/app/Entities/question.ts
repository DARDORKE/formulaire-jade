import {QuestionInterface} from "../Interfaces/question.interface";
import {ResponseInterface} from "../Interfaces/response.interface";

export class Question implements QuestionInterface {
  content: string;
  responses: ResponseInterface[];

  constructor(content: string, responses: ResponseInterface[]) {
    this.content = content;
    this.responses = responses;
  }
}
