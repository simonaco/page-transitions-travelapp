import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.scss'],
    standalone: true
})
export class StatsComponent implements OnInit {
  @Input() selectedUser;
  constructor() {}

  ngOnInit() {}
}
