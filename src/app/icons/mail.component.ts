import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: '[icon-mail]',
    template: `
  <svg:path d="M20 3h-16c-1.7 0-3 1.3-3 3v12c0 1.7
  1.3 3 3 3h16c1.7 0 3-1.3 3-3v-12c0-1.7-1.3-3-3-3zM4
  5h16c0.4 0 0.7 0.2 0.9 0.6l-8.9 6.2-8.9-6.2c0.2-0.4
  0.5-0.6 0.9-0.6zM20 19h-16c-0.6 0-1-0.4-1-1v-10.1l8.4
  5.9c0.2 0.1 0.4 0.2 0.6 0.2s0.4-0.1 0.6-0.2l8.4-5.9v10.1c0
  0.6-0.4 1-1 1z"/>
  `,
    styles: [],
    standalone: true
})
export class MailComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
