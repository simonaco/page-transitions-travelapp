import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  </div>

  `,
  styles: []
})
export class AppComponent {
  constructor(public router: Router, private storeService: StoreService) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this.storeService.updatePage('index');
        } else {
          this.storeService.updatePage(event.url.substring(1));
        }
      }
    });
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
