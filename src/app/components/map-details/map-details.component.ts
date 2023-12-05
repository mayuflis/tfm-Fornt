import { Component, QueryList, ViewChild, ViewChildren, inject } from '@angular/core';
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
  @ViewChild(MapInfoWindow) myInfoWindow: MapInfoWindow | any;
  router = inject(Router);
  activateRoute = inject(ActivatedRoute);
  teachersService = inject(TeachersService);
  zoom: number = 6;
  center: google.maps.LatLng | any;
  markerOptions = {
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
      label: {
        color: 'green',
        text: 'You'
      },
      title: "Usted esta aqui"
    },
  };
  infoContent: string = 'Usted esta aqui'
  teacher: TeacherCard | any;
  position: google.maps.LatLng | any;
  userPosition: google.maps.LatLng | any;



  async ngOnInit(): Promise<void> {

    //To get the position of the user
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      this.userPosition = new google.maps.LatLng(latitude, longitude)
    })

    //To get the position of the teacher
    this.activateRoute.params.subscribe(async (params: any) => {
      let id: number = params.idTutor
      try {
        const response = await this.teachersService.getTeacherInfoById(id)
        if (response === undefined) {
          alert("No existe el profesor")
          this.router.navigate(['/home'])
        }
        else {
          this.teacher = response
          this.position = new google.maps.LatLng(this.teacher[0].latitude, this.teacher[0].longitude)
        }
      } catch (error) {
        console.log(error)
      }
    })
  }
}

