import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './http.interceptor';

const Material = [ MatCardModule, MatInputModule,MatToolbarModule, MatListModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...Material],
  exports: Material
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: MyInterceptor,
          multi: true
        }
      ]
    };
  }
}
