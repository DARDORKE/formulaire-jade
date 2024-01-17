import {ResponseInterface} from "./response.interface";

export interface QuestionInterface {
  content: string;
  responses: ResponseInterface[];
}
