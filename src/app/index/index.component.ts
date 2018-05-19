import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { StoreService } from '../store.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  places;
  users;
  page;
  constructor(private store: StoreService) {
    this.page = this.store.getPage();
    this.users = this.store.getUsers();
    this.places = this.store.getPlaces();
  }

  ngOnInit() {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoic2RyYXNuZXIiLCJhIjoiY2pmZzBqZmptMjI1eTMzbWl1bGExMHppZyJ9.diPXryPOiyMuqcV4mpNOlg';
    const map = new mapboxgl.Map({
      container: 'mapcontain',
      style: 'mapbox://styles/sdrasner/cjfg0watl6rkv2sllf6hepdd5'
    });
  }
}
