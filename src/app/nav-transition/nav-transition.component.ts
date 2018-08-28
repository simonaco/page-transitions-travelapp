import { Component, OnInit, ViewChildren, Renderer2 } from '@angular/core';
import { TimelineMax, Expo, Sine, Back } from 'gsap';
import { StoreService } from '../store.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav-transition',
  templateUrl: './nav-transition.component.html',
  styleUrls: ['./nav-transition.component.scss']
})
export class NavTransitionComponent implements OnInit {
  @ViewChildren('profile')
  profiles;
  selectedUser: User;
  page: string;
  saved: boolean;
  users: User[];
  indexedUser;

  following = false;
  follow = 'follow';
  followclass = 'active-follow';
  constructor(
    private store: StoreService,
    private userService: UserService,
    private renderer: Renderer2
  ) {
    this.store.getSelectedUser().subscribe(val => {
      this.selectedUser = val;
    });
    this.store.getStreamPage().subscribe(val => {
      this.page = val;
    });
    this.users = this.userService.getUsers();
    this.store.getIndexedStream().subscribe(val => {
      this.indexedUser = val;
    });
  }

  ngOnInit() {}

  getClasses(user, i) {
    const activeClass =
      user.name === this.selectedUser.name
        ? 'profile-photo'
        : 'profile-photo-secondary';
    return `${activeClass} profile-${i}`;
  }
  changeUser(i) {
    this.store.changeUser(i);
    if (this.page === 'group') {
      this.renderer.setStyle(
        this.profiles.toArray()[0]['nativeElement'],
        'transform',
        `translate3d(${-70 + this.indexedUser * 55}px, -70px, 0) scale(0.25)`
      );
    }
  }
  toggleFollow() {
    if (this.following) {
      this.store.removeFollower();
    } else {
      this.store.addFollower();
    }
    this.following = !this.following;
  }

  addPlace() {
    if (!this.saved && this.page !== 'index') {
      this.addAnimation();
      this.saved = true;
    } else {
      this.removeAnimation();
      this.saved = false;
    }
  }

  addAnimation() {
    const tl = new TimelineMax();

    tl.add('start');
    tl.to(
      '.plus',
      0.75,
      {
        rotation: -360,
        transformOrigin: '50% 50%',
        ease: Expo.easeOut
      },
      'start'
    );
    tl.to(
      '.line2',
      0.7,
      {
        scaleY: 0.5,
        x: -2,
        rotation: -45,
        transformOrigin: '50% 100%',
        ease: Expo.easeOut
      },
      'start'
    );
    tl.to(
      '.line1',
      0.7,
      {
        rotation: -50,
        x: 7,
        scaleX: 3,
        transformOrigin: '50% 100%',
        ease: Expo.easeOut
      },
      'start'
    );
    tl.fromTo(
      '.saveinfo',
      0.5,
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1,
        ease: Sine.easeOut
      },
      'start'
    );
    tl.to(
      '.saveinfo',
      0.4,
      {
        autoAlpha: 0,
        ease: Expo.easeIn
      },
      'start+=1'
    );

    return tl;
  }
  removeAnimation() {
    const tl = new TimelineMax();

    tl.add('begin');
    tl.to(
      '.plus',
      0.75,
      {
        rotation: 0,
        transformOrigin: '50% 50%',
        ease: Expo.easeOut
      },
      'begin'
    );
    tl.to(
      '.line2',
      0.7,
      {
        scaleY: 1,
        x: 0,
        rotation: 0,
        transformOrigin: '50% 100%',
        ease: Expo.easeOut
      },
      'begin'
    );
    tl.to(
      '.line1',
      0.7,
      {
        rotation: 0,
        x: 0,
        scaleX: 1,
        transformOrigin: '50% 100%',
        ease: Back.easeOut
      },
      'begin'
    );

    tl.timeScale(1.2);

    return tl;
  }
}
