import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';
import { User } from './user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  state;
  pageStream = new BehaviorSubject('index');
  indexedUserStream = new BehaviorSubject(0);
  selectedUser: BehaviorSubject<User>;
  constructor(private users: UserService) {
    this.state = {
      page: 'index',
      indexedUser: 0
    };
    this.selectedUser = new BehaviorSubject(this.users.getUsers()[0]);
  }

  getStreamPage(): BehaviorSubject<string> {
    return this.pageStream;
  }

  getSelectedUser(): BehaviorSubject<User> {
    return this.selectedUser;
  }

  getIndexedStream(): BehaviorSubject<number> {
    return this.indexedUserStream;
  }
  updatePage(pageName) {
    this.state.page = pageName;
    this.pageStream.next(pageName);
  }
  addFollower() {
    this.users.getUsers()[this.state.indexedUser].followers++;
  }
  removeFollower() {
    this.users.getUsers()[this.state.indexedUser].followers--;
  }
  changeUser(i) {
    this.state.indexedUser = i;
    this.indexedUserStream.next(i);
    const newUser = this.users.getUsers()[i];
    this.selectedUser.next(newUser);
  }
}
