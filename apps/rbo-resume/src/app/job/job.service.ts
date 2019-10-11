import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job, ROUTES } from '@rbo-resume/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Job[]>(ROUTES.JOB);
  }
}
