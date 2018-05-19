import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-drawer',
  templateUrl: './menu-drawer.component.html',
  styleUrls: ['./menu-drawer.component.sass']
})
export class MenuDrawerComponent implements OnInit {
  @Input() menuOpened;
  constructor() {}

  ngOnInit() {}
}
