import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [SummaryComponent],
  exports: [SummaryComponent],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class SummaryModule { }
