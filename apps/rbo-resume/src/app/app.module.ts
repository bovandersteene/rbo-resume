import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { EducationModule } from './education/education.module';
import { SummaryModule } from './summary/summary.module';
import { JobModule } from './job/job.module';
import { TechnologyModule } from './technology/technology.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    EducationModule,
    SummaryModule,
    JobModule,
    TechnologyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
