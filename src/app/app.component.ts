import { Component } from "@angular/core";
import {
  Router,
  Event,
  NavigationEnd,
  RouterOutlet,
  RouterModule,
} from "@angular/router";
import { StoreService } from "./store.service";
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: "app-root",
  template: `
    <div>
      <app-navigation></app-navigation>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `,
  styles: [],
  standalone: true,
  imports: [NavigationComponent, RouterModule, RouterOutlet, FooterComponent],
})
export class AppComponent {
  constructor(public router: Router, private storeService: StoreService) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === "/") {
          this.storeService.updatePage("index");
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
