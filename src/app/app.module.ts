import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { MessageModule } from './message/message.module';

const routes: Routes = [ 
  { path: '', redirectTo: '/morning-compass', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule,
    MessageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
