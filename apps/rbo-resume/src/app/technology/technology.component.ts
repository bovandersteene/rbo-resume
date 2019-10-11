import { Component, OnInit } from '@angular/core';
import { TechnologyService } from './technology.service';

@Component({
  selector: 'rbo-resume-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  technologies$ = this.technologyService.getAll()

  constructor(private technologyService: TechnologyService) { }

  ngOnInit() {
  }

}
