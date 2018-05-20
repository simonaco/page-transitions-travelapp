import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}
  getUsers() {
    return [
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
    ];
  }
}
