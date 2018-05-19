import { Component, OnInit } from '@angular/core';
import { TimelineMax, Expo, Sine, Back, TweenMax } from 'gsap';
import { User } from '../user';
import { Nav } from '../nav';
import { FirstNamePipe } from '../first-name.pipe';
import { StoreService } from '../store.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [FirstNamePipe]
})
export class NavigationComponent implements OnInit {
  selectedUser: User;
  page: string;
  nav: Nav[];
  menuOpened: boolean;
  constructor(
    private firstName: FirstNamePipe,
    private storeService: StoreService
  ) {
    this.storeService.getStreamPage().subscribe(val => {
      this.page = val;
    });
    this.menuOpened = false;
    // this.page = this.storeService.getPage();
    this.selectedUser = this.storeService.getSelectedUser();
    this.nav = [
      {
        link: '/',
        name: `${firstName.transform(this.selectedUser.name)}'s Home`,
        exact: true
      },
      {
        link: '/place',
        name: `${firstName.transform(this.selectedUser.name)}'s Places`,
        exact: false
      },
      {
        link: '/group',
        name: `${firstName.transform(this.selectedUser.name)}'s Group Trips`,
        exact: false
      }
    ];
  }

  ngOnInit() {}

  openMenu() {
    TweenMax.to('.first', 0.2, {
      x: 18,
      ease: Sine.easeOut
    });
    TweenMax.to('.last', 0.2, {
      x: -18,
      ease: Sine.easeOut
    });
    TweenMax.staggerTo(
      '.first, .middle, .last',
      0.2,
      {
        fill: '#7eebe6',
        ease: Sine.easeOut
      },
      0.04
    );
  }

  closeMenu() {
    TweenMax.to('.first', 0.2, {
      x: 0,
      ease: Sine.easeIn
    });
    TweenMax.to('.last', 0.2, {
      x: 0,
      ease: Sine.easeIn
    });
    TweenMax.to('.first, .middle, .last', 0.2, {
      fill: '#fff'
    });
  }

  toggleMenuOpened() {
    this.menuOpened = !this.menuOpened;
    if (this.menuOpened) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }
}
