import { Component, OnInit, Input } from '@angular/core';
import { CodegenComponentFactoryResolver } from '@angular/core/src/linker/component_factory_resolver';

@Component({
  selector: 'app-detail-notification',
  templateUrl: './detail-notification.component.html',
  styleUrls: ['./detail-notification.component.css']
})
export class DetailNotificationComponent implements OnInit {

  notifications:any;

  @Input() set dataNotification(notifications) {
    this.notifications = notifications;
  }

  constructor() { }

  ngOnInit() {
  }

}
