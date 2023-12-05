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

  zoom: number = 7;
  myPosition: google.maps.LatLng | any;
  markerOptions = {
    animation: google.maps.Animation.DROP,
  };
  activateRoute = inject(ActivatedRoute);
  teachersService = inject(TeachersService);
  arrTeachers: TeacherCard[] = []
  // TODO: CREAR INTERFACE MapInfo
  arrMapInfo: any = []


  async ngOnInit(): Promise<void> {
    //
    try {
      this.arrTeachers = await this.teachersService.getTeachersInfo()
      this.arrTeachers.forEach(teacher => {
        this.arrMapInfo.push({
          id: teacher.idusers,
          image: teacher.image,
          name: teacher.name,
          description: teacher.title_prof,
          province: teacher.name_province,
          birthday: teacher.birthday,
          position: new google.maps.LatLng(teacher.latitude, teacher.longitude),
          arraySubjects: teacher.arraySubjects,
        })
      })
      console.log(this.arrMapInfo)
    } catch (error) {
      console.log(error)
    }
    //GetCurrentPosition
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      this.myPosition = new google.maps.LatLng(latitude, longitude)
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
