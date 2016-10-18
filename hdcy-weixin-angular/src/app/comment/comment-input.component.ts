/**
 * Created by zhailiang on 16/9/24.
 */
import {Component, OnInit} from "@angular/core";
import {CommentService} from "./comment.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment.module.css']
})
export class CommentInputComponent implements OnInit {

  private defaultContent:string = '写点什么吧......';

  comment: string = this.defaultContent;

  target: string;

  targetId: number;

  constructor(route: ActivatedRoute, private router: Router, private commentService: CommentService) {
    this.target = route.snapshot.queryParams['target'];
    this.targetId = route.snapshot.queryParams['targetId'];
  }

  ngOnInit() {

  }

  saveComment() {
    this.commentService.create({
      target: this.target,
      targetId: this.targetId,
      content: this.comment
    }, () => {
      this.comment = this.defaultContent;
      this.back();
    });
  }

  back(){
    window.history.back();
  }

  cleanComment() {
    if (this.comment == this.defaultContent) {
      this.comment = '';
    }
  }

}
