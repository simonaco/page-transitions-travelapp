import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Sine, TweenMax } from 'gsap';

import { FirstNamePipe } from '../first-name.pipe';
import { Nav } from '../nav';
import { StoreService } from '../store.service';
import { User } from '../user';
import { ThreeDotComponent } from './../icons/three-dot.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [FirstNamePipe],
  animations: [
    trigger('header', [
      transition(':enter', [
        style({ transform: 'scale(1.1) translateZ(0)', opacity: 0 }),
        animate('0.4s ease')
      ])
    ])
  ]
})
export class NavigationComponent implements OnInit {
  selectedUser: User;
  page: string;
  nav: Nav[];
  opened: boolean;
  @ViewChild('threeDots')
  threeDots: ThreeDotComponent;

  constructor(private firstName: FirstNamePipe, private store: StoreService) {
    this.store.getStreamPage().subscribe(val => {
      this.page = val;
    });
    this.store.getSelectedUser().subscribe(val => {
      this.selectedUser = val;
    });
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

  set menuOpened(value) {
    this.opened = value;
    if (this.opened) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }

  get menuOpened() {
    return this.opened;
  }

  openMenu() {
    TweenMax.to(this.threeDots.first.nativeElement, 0.2, {
      x: 18,
      ease: Sine.easeOut
    });
    TweenMax.to(this.threeDots.last.nativeElement, 0.2, {
      x: -18,
      ease: Sine.easeOut
    });
    TweenMax.staggerTo(
      [
        this.threeDots.first.nativeElement,
        this.threeDots.middle.nativeElement,
        this.threeDots.last.nativeElement
      ],
      0.2,
      {
        fill: '#7eebe6',
        ease: Sine.easeOut
      },
      0.04
    );
  }

  closeMenu() {
    TweenMax.to(this.threeDots.first.nativeElement, 0.2, {
      x: 0,
      ease: Sine.easeIn
    });
    TweenMax.to(this.threeDots.last.nativeElement, 0.2, {
      x: 0,
      ease: Sine.easeIn
    });
    TweenMax.to(
      [
        this.threeDots.first.nativeElement,
        this.threeDots.middle.nativeElement,
        this.threeDots.last.nativeElement
      ],
      0.2,
      {
        fill: '#fff'
      }
    );
  }
}
