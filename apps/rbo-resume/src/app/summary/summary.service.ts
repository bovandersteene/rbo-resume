import { Injectable } from '@angular/core';
import { Job, ROUTES, Summary } from '@rbo-resume/api-interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Summary>(ROUTES.SUMMARY);
  }
}
