import { Component, OnInit, Input } from '@angular/core';
import { TweenMax, Sine } from 'gsap';
import { StoreService } from '../store.service';
import { User } from '../user';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-menu-drawer',
  templateUrl: './menu-drawer.component.html',
  styleUrls: ['./menu-drawer.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ opacity: 1, transformOrigin: '100% 0%' }))
    ])
  ]
})
export class MenuDrawerComponent implements OnInit {
  @Input()
  menuOpened: boolean;
  selectedUser: User;
  constructor(private store: StoreService) {
    this.store.getSelectedUser().subscribe(val => {
      this.selectedUser = val;
    });
  }

  ngOnInit() {}

  beforeEnter(el) {
    TweenMax.set(el.element, {
      opacity: 0,
      scale: 0,
      transformOrigin: '100% 0%'
    });
    TweenMax.set(el.element.childNodes, {
      opacity: 0
    });
  }
  enter(el) {
    TweenMax.fromTo(
      el.element,
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
      el.element.childNodes,
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
  }
}
