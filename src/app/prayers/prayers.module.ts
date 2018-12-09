import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { StoreModule } from '@ngrx/store';
import { PrayerListComponent } from './containers';

const prayersRoutes: Routes = [
  { path: '', component: PrayerListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule.forChild([{ path: 'prayers', component: PrayerListComponent }]),
    SharedModule,
    MaterialModule,
    RouterModule.forChild(prayersRoutes),
    StoreModule.forFeature('prayers', {})
  ],
    
  declarations: [
    PrayerListComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
  ]
})
export class PrayersModule { }

