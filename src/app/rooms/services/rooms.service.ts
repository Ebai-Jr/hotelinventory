import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpRequest } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/a3vDd8hzuYs',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV. Bathroom, Kitchen',
      price: 1000,
      photos: 'https://unsplash.com/photos/a3vDd8hzuYs',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 3.45654,
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV. Bathroom, Kitchen',
      price: 15000,
      photos: 'https://unsplash.com/photos/a3vDd8hzuYs',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 2.6,
    }
  ];
  getRooms$: any;

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log(this.config.apiEndpoint);
    console.log('Rooms Service Initialized...');
  }

  getRooms() {
    const headers = new HttpHeaders({'token': '12345564654sdgfg'});
    return this.roomList;
  }

  addRoom(room: RoomList) {
    return this.roomList;
  }

  editRoom(room: RoomList) {
    return this.roomList;
  }

  delete(id: string) {
    return this.roomList;
  }

//   getPhotos() {
//     const request = new HttpRequest(
//       'GET',
//        `https://jsonplaceholder.typicode.com/photos`,
//        {
//         reportProgress: true,
//       }
//     );
//   return this.http.request(request);
// }
}
