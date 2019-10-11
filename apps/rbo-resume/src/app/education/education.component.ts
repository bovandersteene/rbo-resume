import { Component, OnInit } from '@angular/core';
import { TechnologyService } from '../technology/technology.service';
import { EducationService } from './education.service';

@Component({
  selector: 'rbo-resume-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations$ = this.educationService.getAll();

  constructor(private educationService: EducationService) {
  }


  ngOnInit() {
  }

}
