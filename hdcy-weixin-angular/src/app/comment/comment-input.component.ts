/**
 * Created by zhailiang on 16/9/24.
 */
import {Component, OnInit} from "@angular/core";
import {CommentService} from "./comment.service";
import {ActivatedRoute} from "@angular/router";
import {HttpRestService} from "../shared/service/http-rest.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment.module.css']
})
export class CommentInputComponent implements OnInit {

  private defaultContent: string = '写点什么吧......';

  comment: string = this.defaultContent;

  target: string;

  targetId: number;

  replyToId: number;

  constructor(route: ActivatedRoute, private commentService: CommentService) {
    this.target = route.snapshot.queryParams['target'];
    this.targetId = route.snapshot.queryParams['targetId'];
    this.replyToId = route.snapshot.queryParams['replyToId'];
    if (!environment.userToken) {
      commentService.login();
    }
  }

  ngOnInit() {

  }

  saveComment() {
    this.commentService.create({
      target: this.target,
      targetId: this.targetId,
      replyToId: this.replyToId,
      content: this.comment
    }, () => {
      this.comment = this.defaultContent;
      this.back();
      if(this.target == 'activity') {
        toastr.success('咨询信息提交成功');
      }else{
        toastr.success('评论发布成功');
      }
    });
  }

  back() {
    window.history.back();
  }

  cleanComment() {
    if (this.comment == this.defaultContent) {
      this.comment = '';
    }
  }

}
