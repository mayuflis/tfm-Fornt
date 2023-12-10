import { Time } from '@angular/common';

export interface TeacherCard {
  idusers: number;
  name: string;
  last_name: string;
  email: string;
  role: string;
  latitude: number;
  longitude: number;
  birthday: Date;
  name_province: string;
  image: string;
  description_prof: string;
  title_prof: string;
  description_class?: string;
  position?: google.maps.LatLng;
  arraySubjects: [
    {
      level: number;
      free_class?: number;
      subject_name: string;
    }
  ];
}

export interface ListOfTeachers {
  idusers: number;
  name: string;
  last_name: string;
  subject: string;
  email: string;
  mobile: string;
  class_date: Date;
  start_time: Time;
}

export interface MyTutors {
  idusers: number;
  user_name: string;
  last_name: string;
  email: string;
  mobile: string;
  subject_name: string;
}
