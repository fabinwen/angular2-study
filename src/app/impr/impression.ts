/**
 * Created by fabin on 2016-10-9.
 */
  import {Book} from '../book/booklist/book';
import {User} from '../shared';
import {Comment} from './comment';

export class Impression{
  id:number;
  content:string;
  createTime:string;
  favoringNum:number;
  favored:boolean;
  book:Book;
  user:User;
  comments:Comment[];
}
