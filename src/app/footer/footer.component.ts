import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer>
    Made by
    <a href="https://twitter.com/simona_cotin" target="_blank">simona_cotin</a>. This project is open source, visit
    <a href="https://github.com/simonaco/page-transitions-travelapp" target="_blank">the repo.</a>
  </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
