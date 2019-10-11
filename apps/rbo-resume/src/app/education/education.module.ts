import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [EducationComponent],
  exports: [EducationComponent],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class EducationModule { }
