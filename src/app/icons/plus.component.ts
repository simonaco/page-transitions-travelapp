import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[icon-plus]',
  template: `
  <svg:g>
    <svg:line class="line1" x1="0" x2="24" y1="12" y2="12" stroke="#333" stroke-linecap="round" stroke-width="3" />
    <svg:line class="line2" x1="12" x2="12" y1="0" y2="24" stroke="#333" stroke-linecap="round" stroke-width="3" />
  </svg:g>
  `,
  styles: []
})
export class PlusComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
