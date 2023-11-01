import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from '../icons/calendar.component';
import { BaseComponent } from '../icons/base.component';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss'],
    standalone: true,
    imports: [BaseComponent, CalendarComponent]
})
export class GroupComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
