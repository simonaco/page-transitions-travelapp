import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icon-three-dot',
  template: `
  <svg:g>
    <svg:circle class="first" cx="3" cy="12" r="3" />
    <svg:circle class="middle" cx="12" cy="12" r="3" />
    <svg:circle class="last" cx="21" cy="12" r="3" />
  </svg:g>
  `,
  styles: []
})
export class ThreeDotComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
