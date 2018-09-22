import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
      MaterialModule,
      RouterModule,
    ],
    declarations: [
    ],
    providers: [
    ],
    exports: [
    ]
  })
  export class SharedModule { }