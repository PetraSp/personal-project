import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';

@NgModule({
    imports: [
      MaterialModule,
      RouterModule,
      MatDialogModule,
      ReactiveFormsModule,
      
    ],
    declarations: [
      
    ],
    providers: [
      {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
    entryComponents: [
    
    ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule,
      MatDialogModule,
    ]
  })
  export class SharedModule { }