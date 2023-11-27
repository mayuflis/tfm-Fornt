import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  zoom: number = 7;
  //La latitud 40, -3 es Pinto, Madrid
  center: google.maps.LatLng = new google.maps.LatLng(40, -3);
  pinto: google.maps.LatLng = new google.maps.LatLng(40, -3);
  girona: google.maps.LatLng = new google.maps.LatLng(42, 2.8);
  bcn: google.maps.LatLng = new google.maps.LatLng(41.5, 2.2);
  myPosition: google.maps.LatLng | any;
  markerOptions = {
    animation: google.maps.Animation.DROP,

    // icon: {
    //   url: "https://www.pngfind.com/pngs/m/6-62037_check-mark-icon-png-transparent-png.png"
    //  scaledSize: new google.maps.Size(40,40) PARA DEFINIR LAS MEDIDAS DEL ICONO
    // }
  };

  //para crear el info window tenemos que generar una vista html para ello vamos usar un decorador de vista, se llama @ViewChild. Este nos permite crear elementos HTML dentro de componentes de Angular
  @ViewChild(MapInfoWindow) myInfoWindow: MapInfoWindow | any;

  ngOnInit() {
    //Es una propiedad de JS nativa, es lo que salta el boton de permitir en la localizacion
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      this.myPosition = new google.maps.LatLng(latitude, longitude)
      this.center = this.myPosition
    })
  }

  openInfoWindow(myMarker: MapMarker) {
    this.myInfoWindow.open(myMarker)
  }


}
