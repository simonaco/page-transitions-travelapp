import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { UserService } from '../user.service';
import { PlaceService } from '../place.service';
import { NgFor } from '@angular/common';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
    selector: 'app-place',
    templateUrl: './place.component.html',
    styleUrls: ['./place.component.scss'],
    standalone: true,
    imports: [StarRatingComponent, NgFor]
})
export class PlaceComponent implements OnInit {
  places;
  users;
  page;
  constructor(
    private store: StoreService,
    private userService: UserService,
    private placeService: PlaceService
  ) {
    this.store.getStreamPage().subscribe(val => {
      this.page = val;
    });
    this.users = this.userService.getUsers();
    this.places = this.placeService.getPlaces();
  }

  ngOnInit() {}
}
