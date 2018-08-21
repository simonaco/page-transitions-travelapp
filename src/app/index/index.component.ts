import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';
import mapboxgl, { Map } from 'mapbox-gl';

import { PlaceService } from '../place.service';
import { StoreService } from '../store.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements AfterViewInit, OnDestroy {
  places;
  users;
  page;
  map: Map;

  @ViewChild('mapcontain')
  mapContain: ElementRef<HTMLElement>;

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

  ngAfterViewInit() {
    /*     mapboxgl.accessToken =
      'pk.eyJ1Ijoic2RyYXNuZXIiLCJhIjoiY2pmZzBqZmptMjI1eTMzbWl1bGExMHppZyJ9.diPXryPOiyMuqcV4mpNOlg';
    this.map = new mapboxgl.Map({
      container: this.mapContain.nativeElement,
      style: 'mapbox://styles/sdrasner/cjfg0watl6rkv2sllf6hepdd5'
    }); */
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }
}
