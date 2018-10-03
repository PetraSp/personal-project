import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
      CommonModule,
      FormsModule,
      MaterialModule,
    ]
  })
  export class SharedModule { }