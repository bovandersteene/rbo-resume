import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { JobComponent } from './job.component';



@NgModule({
  declarations: [JobComponent],
  exports: [JobComponent],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class JobModule { }
