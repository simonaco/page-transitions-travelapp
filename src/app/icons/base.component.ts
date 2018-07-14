import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'icon-base',
  template: `
  <svg xmlns="http://www.w3.org/2000/svg"
    [attr.width]="width"
    [attr.height]="height"
    viewBox="0 0 24 24"
    [attr.aria-labelledby]="iconName"
    role="presentation">
    <title [id]="iconName" lang="en">{{iconName}} icon</title>
    <svg:g [attr.fill]="iconColor">
      <ng-content></ng-content>
    </svg:g>
  </svg>
  `,
  styles: [
    `svg {
    display: inline-block;
    vertical-align: baseline;
    margin-bottom: -2px; /* yes, I'm that particular about formatting */
  }`
  ]
})
export class BaseComponent implements OnInit {
  @Input() iconName: string;
  @Input() width: string;
  @Input() height: string;
  @Input() iconColor: string;
  constructor() {
    this.iconName = 'box';
    this.width = '18';
    this.height = '18';
    this.iconColor = 'currentColor';
  }

  ngOnInit() {}
}
