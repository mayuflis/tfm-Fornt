import { Component, QueryList, ViewChildren, inject } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ActivatedRoute } from '@angular/router';
import { TeacherCard } from 'src/app/interfaces/teacher-card.interface';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @ViewChildren(MapInfoWindow) myInfoWindow: QueryList<MapInfoWindow> | any;

  zoom: number = 8;
  userPosition: google.maps.LatLng | any;
   userOptions = {
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
    },
  };
  activateRoute = inject(ActivatedRoute);
  teachersService = inject(TeachersService);
  arrTeachers: TeacherCard[] = []
  arrMapInfo: any = []
  checkToken: boolean = false


  async ngOnInit(): Promise<void> {
    //
    try {
      this.arrTeachers = await this.teachersService.getTeachersInfo()
      this.arrMapInfo = this.arrTeachers.map(teacher => {
        return {
          ...teacher,
          position: new google.maps.LatLng(teacher.latitude, teacher.longitude)
        }
      })
    } catch (error) {
      console.log(error)
    }
     //To get the position of the user
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      this.userPosition = new google.maps.LatLng(latitude, longitude)
    })

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
