import { Component } from '@angular/core';
import { StoreData } from '../../ViewModels/store-data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
storeInfo: StoreData;
constructor(){
  this.storeInfo= new StoreData('ITI Store', 'https://picsum.photos/350/200', ['Cairo','Alex','Qena']);
}
}
