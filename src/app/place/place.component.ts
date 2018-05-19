import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  places;
  users;
  page;
  constructor(private store: StoreService) {
    this.page = this.store.getPage();
    this.users = this.store.getUsers();
    this.places = this.store.getPlaces();
  }

  ngOnInit() {}
}
