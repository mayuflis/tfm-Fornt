import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  zoom: number = 7;
  center: google.maps.LatLng = new google.maps.LatLng(40, -3); //Latitud de Pinto
  girona: google.maps.LatLng = new google.maps.LatLng(42, 2.8);
  bcn: google.maps.LatLng = new google.maps.LatLng(41.5, 2.2);
  myPosition: google.maps.LatLng | any;
  markerOptions = {
    animation: google.maps.Animation.DROP,
  };

  @ViewChild(MapInfoWindow) myInfoWindow: MapInfoWindow | any;

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      this.myPosition = new google.maps.LatLng(latitude, longitude)
    })
  }

  openInfoWindow(myMarker: MapMarker) {
    this.myInfoWindow.open(myMarker)
  }
}
