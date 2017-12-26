import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeacherListDataService {
teachers:Teacher[];

  constructor(public http:Http) {
    console.log("TeacherListDataService constructor executing");
   }

  getTeachers(){
    return this.http.get('http://localhost:9016/api/v1/teachers')
      .map(response=> response.json());
  }
}

export interface Teacher{
  teacherId: string,
  name:string,
  lastname: string,
  title: string,
  age: number,
  isFullTime: boolean,
  updatedOn: Date   
}