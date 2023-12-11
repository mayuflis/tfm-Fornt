import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export type idSubject={idsubjects:number};
export type dataClass={fecha:string, hora:string, horaSumada:string, idSubject:number, idTutor:string, idUser:number, nivel:string, selectedAsignatura: string};

@Injectable({
  providedIn: 'root'
})
export class ClassService {
private httpClient = inject(HttpClient)
private baseUrl : string = "http://localhost:3000/api/class/"

  constructor() { }
  selectedIdSubject(selectedAsignatura: string): Promise <idSubject[]> {
    return lastValueFrom (this.httpClient.get<idSubject[]>(`${this.baseUrl}selectedAsignatura/${selectedAsignatura}`))
  } 
  insertClass(formValue: dataClass){
    return lastValueFrom (this.httpClient.post(`${this.baseUrl}insertClass`,formValue))
  }

}
