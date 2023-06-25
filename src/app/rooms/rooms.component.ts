import { AfterContentChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild, AfterViewChecked, ViewChildren, QueryList, SkipSelf } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit,  AfterViewChecked {

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = true;
  selectedRoom!: RoomList;


  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  title= 'Room List';

  roomList: RoomList[] = [];

  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error');
  });

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  // roomService = new RoomsService();

  // error$!: Subject<string>;

  // rooms$ = this.roomsService.getRooms$.pipe(catchError((err) => {
  //   console.log(err);
  //   this.error$.next(err);
  //   return of([]);
  // })
  // );

  // priceFilter = new FormControl(0)

  // roomsCount$ = this.roomsService.getRooms$.pipe(map((rooms) => rooms.length))

  // message$ = this.sharedDataService.message$;

  constructor(@SkipSelf() private roomsService: RoomsService, private  configservice: ConfigService) { }


  ngOnInit(): void {

    // this.roomsService.getPhotos().subscribe((event) => {});

    this.stream.subscribe({
      next: (value) => console.log(value), 
      complete: () => console.log('complete'),
      error: (err => console.log(err))
    });
    this.stream.subscribe((data)=>console.log(data));
    this.roomList = this.roomsService.getRooms();
  }

  ngDoCheck(){
    console.log('on changes is called');
  }

  ngAfterViewInit(){
    this.headerComponent.title = "Rooms View";
    console.log(this.headerChildrenComponent.last.title ="Last Title");
  }

  ngAfterViewChecked(){

  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList){
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber:4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/a3vDd8hzuYs',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('11-Nov-2021'),
      rating: 4.5,
    };

   // this.roomList.push(room);
   this.roomList = [...this.roomList, room];
  }

  editRoom() {
    const room: RoomList = {
      roomNumber:3,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/a3vDd8hzuYs',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('11-Nov-2021'),
      rating: 4.5,
    };
 }

 deleteRoom() {
  // this.roomsService.delete('3').subscribe((data )=> {
  //   this.roomList = data;
  // });
  };

}
