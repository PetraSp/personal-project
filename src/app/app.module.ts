import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { MorningCompassComponent } from './components/morning-compass/morning-compass.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/morning-compass', pathMatch: 'full' },
  { path: 'morning-compass', component: MorningCompassComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MorningCompassComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
