import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Nav } from '../nav';
import { FirstNamePipe } from '../first-name.pipe';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

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
  constructor(private firstName: FirstNamePipe) {
    this.page = 'index';
    this.selectedUser = { name: 'Simona Cotin' };
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
}
