import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ShellComponent } from './home/shell.component';
import { WelcomeComponent } from './home/welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'prayers',
        loadChildren: './prayers/prayers.module#PrayersModule'
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
