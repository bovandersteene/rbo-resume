import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education, ROUTES } from '@rbo-resume/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Education[]>(ROUTES.EDUCATION);
  }

}
