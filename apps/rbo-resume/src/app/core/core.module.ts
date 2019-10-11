import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatToolbarModule } from '@angular/material';

const Material = [
  MatToolbarModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...Material
  ],
  exports: Material
})
export class CoreModule {
}
