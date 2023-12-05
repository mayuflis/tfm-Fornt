import { Component, QueryList, ViewChildren, inject } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherCard } from 'src/app/interfaces/teacher-card.interface';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.css']
})
export class MapDetailsComponent {
  @ViewChildren(MapInfoWindow) myInfoWindow: QueryList<MapInfoWindow> | any;
  router = inject(Router);
  zoom: number = 7;
  center: google.maps.LatLng | any;
  markerOptions = {
    animation: google.maps.Animation.DROP,
  };
  activateRoute = inject(ActivatedRoute);
  teachersService = inject(TeachersService);
  teacher: any;


  ngOnInit(): void {
  }

  openInfoWindow(myMarker: MapMarker, index: number) {
    let counter = 0;
    this.myInfoWindow.forEach((window: MapInfoWindow) => {
      if (index === counter) {
        window.open(myMarker)
        counter++
      }
      else {
        window.close()
        counter++
      }
    })
  }
}

