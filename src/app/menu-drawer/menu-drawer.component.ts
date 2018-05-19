import { Component, OnInit, Input } from '@angular/core';
import { TimelineMax, Expo, Sine, Back, TweenMax } from 'gsap';
import { StoreService } from '../store.service';
import { User } from '../user';

@Component({
  selector: 'app-menu-drawer',
  templateUrl: './menu-drawer.component.html',
  styleUrls: ['./menu-drawer.component.css']
})
export class MenuDrawerComponent implements OnInit {
  @Input() menuOpened: boolean;
  selectedUser: User;
  constructor(private storeService: StoreService) {
    this.selectedUser = storeService.getSelectedUser();
  }

  ngOnInit() {}

  beforeEnter(el) {
    TweenMax.set(el, {
      opacity: 0,
      scale: 0,
      transformOrigin: '100% 0%'
    });
    TweenMax.set(el.childNodes, {
      opacity: 0
    });
  }
  enter(el, done) {
    TweenMax.fromTo(
      el,
      0.2,
      {
        opacity: 0,
        scale: 0
      },
      {
        opacity: 1,
        scale: 1,
        ease: Sine.easeOut
      }
    );
    TweenMax.staggerFromTo(
      el.childNodes,
      0.45,
      {
        opacity: 0
      },
      {
        delay: 0.1,
        opacity: 1,
        ease: Sine.easeOut
      },
      0.04
    );
    done();
  }
}
