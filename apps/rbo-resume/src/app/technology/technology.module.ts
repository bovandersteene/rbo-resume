import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyComponent } from './technology.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [TechnologyComponent],
  exports: [TechnologyComponent],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class TechnologyModule { }
