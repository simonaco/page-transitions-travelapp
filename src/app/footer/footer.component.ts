import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer>
  <div>
  Original project by
  <a
    href="https://twitter.com/sarah_edo"
    target="_blank"
    rel="noopener">
    sarah_edo
  </a>, built with
  <a
    href="https://github.com/sdras/page-transitions-travelapp"
    target="_blank"
    rel="noopener"
  >
    Vue & Nuxt (code)
  </a>
</div>
<div>
  You are viewing a fork adapted by
  <a
    href="https://twitter.com/simona_cotin"
    target="_blank"
    rel="noopener">
  simona_cotin
</a>, built with
<a
  href="https://github.com/simonaco/page-transitions-travelapp"
  target="_blank"
  rel="noopener"
>
  Angular & RxJS (code)
</a>
</div>  </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
