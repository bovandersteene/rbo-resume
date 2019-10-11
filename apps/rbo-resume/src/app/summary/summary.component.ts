import { Component, OnInit } from '@angular/core';
import { SummaryService } from './summary.service';

@Component({
  selector: 'rbo-resume-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  summary$ = this.summaryService.getAll();

  constructor(private summaryService: SummaryService) { }

  ngOnInit() {
  }

}
