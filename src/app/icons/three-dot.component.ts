import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[icon-three-dot]',
  template: `
  <svg:g>
    <svg:circle class="first" #first cx="3" cy="12" r="3" />
    <svg:circle class="middle" #middle cx="12" cy="12" r="3" />
    <svg:circle class="last" #last cx="21" cy="12" r="3" />
  </svg:g>
  `,
  styles: []
})
export class ThreeDotComponent implements OnInit {
  @ViewChild('first')
  public first: ElementRef<HTMLElement>;

  @ViewChild('middle')
  public middle: ElementRef<HTMLElement>;

  @ViewChild('last')
  public last: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit() {}
}
