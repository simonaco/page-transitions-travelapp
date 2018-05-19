import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  state;
  pageStream = new BehaviorSubject('index');
  indexedUserStream = new BehaviorSubject(0);
  constructor() {
    this.state = {
      page: 'index',
      indexedUser: 0,
      users: [
        {
          name: 'Sophia Gonzalez',
          img: '/profile2.jpg',
          location: 'San Francisco',
          // tslint:disable-next-line:max-line-length
          bio:
            // tslint:disable-next-line:max-line-length
            'Had a brief careerwith jack-in-the-boxes in Phoenix, AZ. Spent several months managing squirt guns and implementing toy elephants.',
          following: 789,
          followers: 2748,
          photos: 94,
          days: 32,
          trips: ['Honolulu', 'Burmuda', 'Los Cabos', 'San Antonio']
        },
        {
          name: 'Ben Allen',
          img: '/profile3.jpg',
          location: 'Boston',
          bio:
            'Bacon nerd. Freelance twitter practitioner. Social media nerd. Pop culture junkie. Proud alcohol advocate. Food geek.',
          following: 140,
          followers: 789,
          photos: 32,
          days: 5,
          trips: ['Honolulu', 'Peru', 'San Francisco']
        },
        {
          name: 'Jill Fernandez',
          img: '/profile4.jpg',
          location: 'Seattle',
          // tslint:disable-next-line:max-line-length
          bio:
            // tslint:disable-next-line:max-line-length
            'Prone to fits of apathy. Writer. Devoted gamer. Web scholar. Hipster-friendly music advocate. Problem solver. Student. Twitter fanatic.',
          following: 590,
          followers: 1705,
          photos: 45,
          days: 12,
          trips: ['Honolulu', 'Tokyo', 'Osaka']
        },
        {
          name: 'Cynthia Obel',
          img: '/profile5.jpg',
          location: 'Kentucky',
          // tslint:disable-next-line:max-line-length
          bio:
            // tslint:disable-next-line:max-line-length
            'Producing at the fulcrum of modernism and purpose to craft an compelling and authentic narrative. My opinions belong to myself.',
          following: 590,
          followers: 1705,
          photos: 45,
          days: 12,
          trips: ['Honolulu', 'Tokyo', 'Osaka']
        }
      ],
      places: [
        {
          name: 'Honolulu',
          stars: 4,
          rating: 8.9,
          img: '/honolulu.jpg',
          // tslint:disable-next-line:max-line-length
          description:
            // tslint:disable-next-line:max-line-length
            'Ocean breezes rustle palm trees along the harborfront, while in the cool, mist-shrouded Koʻolau Range, forested hiking trails offer postcard city views. At sunset, cool off with an amble around Magic Island or splash in the ocean at Ala Moana Beach.'
        },
        {
          name: 'Santorini',
          stars: 4,
          rating: 7.8,
          img: '/santorini.jpg',
          // tslint:disable-next-line:max-line-length
          description:
            // tslint:disable-next-line:max-line-length
            'With multicoloured cliffs soaring above a sea-drowned caldera, Santorini looks like a giant slab of layered cake. The main island of Thira will take your breath away with its snow-drift of white Cycladic houses lining the cliff tops and, in places, spilling like icy cornices down the terraced rock.'
        },
        {
          name: 'Cusco',
          stars: 3,
          rating: 7.4,
          img: '/peru.jpg',
          // tslint:disable-next-line:max-line-length
          description:
            // tslint:disable-next-line:max-line-length
            'Wandered the cobblestone streets and quaint lanes of the town, which has been designated a UNESCO World Heritage site. A walking tour revealed historic architecture, colonial landmarks and alluring shops and restaurants.'
        }
      ]
    };
  }

  getState() {
    return this.state;
  }

  getPage() {
    return this.state.page;
  }
  getStreamPage(): BehaviorSubject<string> {
    return this.pageStream;
  }

  getIndexedUser() {
    return this.state.indexedUser;
  }

  getIndexedStream() {
    return this.indexedUserStream;
  }

  getUsers() {
    return this.state.users;
  }

  getPlaces() {
    return this.state.places;
  }

  getSelectedUser() {
    return this.state.users[this.state.indexedUser];
  }
  updatePage(pageName) {
    this.state.page = pageName;
    this.pageStream.next(pageName);
  }
  addFollower() {
    this.state.users[this.state.indexedUser].followers++;
  }
  removeFollower() {
    this.state.users[this.state.indexedUser].followers--;
  }
  changeUser(i) {
    this.state.indexedUser = i;
    this.indexedUserStream.next(i);
  }
}
