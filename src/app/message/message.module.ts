import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageListComponent } from './message-list/message-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: 'morning-compass', component: MessageListComponent }]),
    SharedModule,
  ],
    
  declarations: [
    MessageListComponent,
  ],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class MessageModule { }