/**
 * Created by zhailiang on 16/9/24.
 */
import {Component, OnInit} from "@angular/core";
import {CommentService} from "./comment.service";
import {ActivatedRoute} from "@angular/router";
import {LoadingService} from "../shared/service/loading.service";
import {environment} from "../shared/config/env.config";

@Component({
  moduleId: module.id,
  selector: 'comment-input',
  templateUrl: 'comment-input.component.html',
  styleUrls: ['comment.module.css']
})
export class CommentInputComponent implements OnInit {

  defaultContent: string = '写点什么吧......';

  comment: string = this.defaultContent;

  target: string;

  targetId: number;

  replyToId: number;

  title: string;

  constructor(route: ActivatedRoute, public commentService: CommentService, public loadingService: LoadingService) {
    if (!environment.userToken) {
      commentService.login();
    }
    this.target = route.snapshot.queryParams['target'];
    this.targetId = route.snapshot.queryParams['targetId'];
    this.replyToId = route.snapshot.queryParams['replyToId'];
    this.title = route.snapshot.queryParams['title'];
    if (this.replyToId) {
      this.title = "写回复";
    } else {
      if (this.target == 'activity') {
        this.title = '活动咨询';
      } else {
        this.title = '写评论';
      }
    }
  }

  ngOnInit() {

  }

  saveComment() {
    if(this.comment == null || this.comment.length == 0){
      toastr.warning('请填写内容');
      return;
    }
    this.loadingService.loadingEvent.emit(true);
    this.commentService.create({
      target: this.target,
      targetId: this.targetId,
      replyToId: this.replyToId,
      content: this.comment
    }, () => {
      this.comment = this.defaultContent;
      this.loadingService.loadingEvent.emit(false);
      this.back();
      if (this.target == 'activity') {
        toastr.success('咨询信息提交成功');
      } else {
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
