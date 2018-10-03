import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import {
  ModalFlagContentComponent,
} from '../../../shared/components';


// import { MessageActionService } from '../../services';
import {Observable} from 'rxjs';

@Component({
    selector: 'message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css']
  })
  export class MessageListComponent implements OnInit {
  pageTitle: string = "Prayers";
  messages: Array<any> = [
    {
        "messageId": 1,
        "messageName": "Potential",
        "description": "If you knew your potential to feel good, you would ask no one to be different so that you can feel good. You would free yourself of all of that cumbersome impossibility of needing to control the world, or control your mate, or control your child. You are the only one who creates your reality. For no one else can think for you, no one else can do it. It is only you, every bit of it you."
      },
      {
          "messageId": 2,
          "messageName": "Imagine",
          "description": "Look around less, imagine more."
      },
      {
          "messageId": 3,
          "messageName": "What is",
          "description": "Stop talking about the things that are bothering you so much."
      },
      {
      "messageId": 4,
      "messageName": "All is well",
      "description": "There is so much more that is going right in your world than wrong."
      }
  ];
  public loading$: Observable<boolean>;
  public projectId: string;

  constructor(
    public dialogService: MatDialog,
    // private messageActions: MessageActionService,
    // private messageSelectors: MessageSelectorService,
  ) {}

  ngOnInit() {
    // this.loading$ = this.messageSelectors.getMessageLoading();
    // this.projectId = this.route.snapshot.params.projectId;
    console.log('hello i am inside of init')
  }

  // modal Insights
//   openDialog() {
//     const dialogRef = this.dialogService.open(ModalQuickviewComponent, {
//       width: '310px',
//       panelClass: 'insight-modal'
//     });
//   }

//   createFolder(form: any) {
//     console.log('messageListComponent', form);
//     this.messageActions.createFolder(form);
//   }

  // modal Flag content
  flagContent() {
    const dialogRef = this.dialogService.open(ModalFlagContentComponent, {
      width: '820px',
      panelClass: 'flag-modal',
      data: {
        onSubmit: this.createFolder.bind(this),
        loading$: this.loading$,
        projectId: this.projectId,
      }
    });
  }
}

  