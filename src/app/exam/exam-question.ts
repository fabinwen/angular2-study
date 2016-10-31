/**
 * Created by fabin on 2016-10-13.
 */
import {QuestionOption} from './question-option';

export class ExamQuestion{
  questionId:number;
  correctResponse:string;
  prompt:string;
  options:QuestionOption[];
}
