import { Component, OnInit } from '@angular/core';
import { EducationService } from '../education/education.service';
import { JobService } from './job.service';

@Component({
  selector: 'rbo-resume-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  jobs$ = this.jobService.getAll();

  constructor(private jobService: JobService) {
  }

  ngOnInit() {
  }

}
