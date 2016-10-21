/**
 * Created by zhailiang on 16/9/23.
 */

import {Component, OnInit} from "@angular/core";
import {ListComponent} from "../shared/component/list.component";
import {ActivatedRoute} from "@angular/router";
import {ActivityService} from "./activity.service";

@Component({
    selector: 'activity-list',
    templateUrl: './activity-list.component.html',
    styleUrls: ['./activity.module.css']
})
export class ActivityListComponent extends ListComponent implements OnInit {

    workingActivities: Array < any >;

    finishActivities: Array < any >;

    topActivities: Array < any >;

    condition = {
        finish: 'true',
        top: 'false',
        sort: 'startTime,desc'
    };

    swiperOptions = {
        loop: false,
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        slidesPerView: 1.2,
        watchActiveIndex: true,
    };

    constructor(route: ActivatedRoute, public activityService: ActivityService) {
        super(route);
    }

    ngOnInit() {
        this.activityService.query({
            finish: 'false',
            top: 'false',
            size: 100,
            page: 0,
            sort: 'signEndTime,asc'
        }).subscribe(res => {
            this.workingActivities = res.json().content;
        })

        this.activityService.query(super.buildCondition(this.condition)).subscribe(res => {
            this.finishActivities = res.json().content;
        })

        this.activityService.query({
            top: 'true',
            size: 100,
            page: 0,
            sort: 'topIndex,asc'
        }).subscribe(res => {
            this.topActivities = res.json().content;
        })
    }

}