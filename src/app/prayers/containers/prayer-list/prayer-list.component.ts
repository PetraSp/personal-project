import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';



// import { MessageActionService } from '../../services';
import {Observable} from 'rxjs';
import { IMessage } from '../../models/message.model';

@Component({
    selector: 'prayer-list',
    templateUrl: './prayer-list.component.html',
    styleUrls: ['./prayer-list.component.scss']
  })
  export class PrayerListComponent implements OnInit {
  pageTitle: string = "Prayers";
  imageWidth: number = 60;
  imageMargin: number = 2;
  showImage: boolean = false;
  

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMessages = this.listFilter ? this.performFilter(this.listFilter) : this.messages;
  }
  
  filteredMessages: IMessage[];
  messages: IMessage[] = [
    {
      "id": '1',
      "description": "If you knew your potential to feel good, you would ask no one to be different so that you can feel good. You would free yourself of all of that cumbersome impossibility of needing to control the world, or control your mate, or control your child. You are the only one who creates your reality. For no one else can think for you, no one else can do it. It is only you, every bit of it you.",
      "imageUrl": "https://mindworks.org/wp-content/uploads/2017/08/meditation-positions-lying-down.jpg"
    },
    {
      "id": '2',
      "description": "Look around less, imagine more.",
      "imageUrl": "https://mindworks.org/wp-content/uploads/2017/08/meditation-positions-lying-down.jpg"
    },
    {
      "id": '3',
      "description": "Stop talking about the things that are bothering you so much.",
      "imageUrl": "https://mindworks.org/wp-content/uploads/2017/08/meditation-positions-lying-down.jpg"
    },
    {
      "id": '4',
      "description": "There is so much more that is going right in your world than wrong.",
      "imageUrl": "https://mindworks.org/wp-content/uploads/2017/08/meditation-positions-lying-down.jpg"
    }
  ];
  // public loading$: Observable<boolean>;
  // public projectId: string;

  constructor() {
    this.filteredMessages = this.messages;
    this.listFilter = '';
  }

  ngOnInit() {
    // this.loading$ = this.messageSelectors.getMessageLoading();
    // this.projectId = this.route.snapshot.params.projectId;
    console.log('hello i am inside of init')
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IMessage[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.messages.filter((message: IMessage) =>
     message.description.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

//   createFolder(form: any) {
//     console.log('messageListComponent', form);
//     this.messageActions.createFolder(form);
//   }

}

  