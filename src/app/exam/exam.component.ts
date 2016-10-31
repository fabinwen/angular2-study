import { Component, OnInit,Input, ViewChild  } from '@angular/core';
import {NgForm,FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute, Params} from '@angular/router';

import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';

import {ExamQuestion} from './exam-question';
import {ExamService} from './exam.service';
import {ResponseResult} from '../shared';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor(private route:ActivatedRoute, private examService:ExamService) {
    this.examFormGrp = new FormGroup({});
  }

  @ViewChild('waitModal')
    waitModal:ModalDirective;

  bookId:number;
  bookName:string;
  examFormGrp:FormGroup;
  questions:ExamQuestion[];
  alerts:Array<Object> = [];

  ngOnInit() {
    this.initData();
  }

  initData():void {
    this.route.params.forEach((params:Params)=> {
      let name = params['name'];
      this.bookName = name;

      let id = +params['id'];
      this.bookId = id;
      this.examService.getExamQuestion(id, 'book').then(examQuestions=> {
        this.questions = examQuestions;
        this.initFormGroup(examQuestions);
      });
    });
  }

  initFormGroup(questions:ExamQuestion[]):void {
    let group = {};
    questions.forEach(question=> {
      group[question.questionId] = new FormControl('');
    })
    this.examFormGrp = new FormGroup(group);
  }

  onSubmit(examForm:NgForm):void {
    this.showWait();
    let formVal = examForm.value;
    let answers = new Array();
    for(let p in formVal){
      answers.push({"id": p, "response": formVal[p]});
    }
    let submitInfo = {"testSubmit": {"bookId": this.bookId, "studentNo": "802", "answers": answers}};
    this.examService.postAnswers(submitInfo).then(responseResult=> {
      this.hideWait();
      this.addAlert(responseResult);
    });

  }

  addAlert(res:ResponseResult):void {
    if (res.code == 200) {
      this.alerts.push({msg: '成功!', type: 'success', closable: true});
    } else {
      this.alerts.push({msg: res.message, type: 'warning', closable: true});
    }
  }

  closeAlert(i:number):void {
    this.alerts.splice(i, 1);
  }

  showWait():void{
    this.waitModal.show();
  }
  hideWait():void{
    this.waitModal.hide();
  }
}
