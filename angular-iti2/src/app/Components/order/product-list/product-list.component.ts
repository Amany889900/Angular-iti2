import { Component } from '@angular/core';
import { IProduct } from '../../../Models/IProduct';
import { ICategory } from '../../../Models/ICategory';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
prdList: IProduct[];
TotalPrice:number=0;
catlist:ICategory[];
selectedCatID:number=0;
constructor(){
  this.catlist=[
    {id:1, name:'Laptops'},
    {id:2, name:'Tablets'},
    {id:3, name:'mobiles'}
  ];
  this.prdList=[
   {id:100, name:'Lenovo launchpad', price:50000, quantity:1, imgURL:'https://fakeimg.pl/250x100', categoryID:1},
   {id:200, name:'Apple MackBook', price:60000, quantity:0, imgURL:'https://fakeimg.pl/250x100', categoryID:1},
   {id:300, name:'Lenovo Tablet', price:5000, quantity:10, imgURL:'https://fakeimg.pl/250x100', categoryID:2},
   {id:400, name:'Samsung Tablet', price:6500, quantity:2, imgURL:'https://fakeimg.pl/250x100', categoryID:2},
   {id:500, name:'Samsung Note 10', price:5500, quantity:0, imgURL:'https://fakeimg.pl/250x100', categoryID:3},
   {id:600, name:'Samsung S22', price:6000, quantity:1, imgURL:'https://fakeimg.pl/250x100', categoryID:3},
  ];
}
reduceQuant(selectedItem:IProduct, count:any, prdPrice:number):void{
  if(selectedItem.quantity-<number>count>=0) {selectedItem.quantity-=<number>count;
    this.TotalPrice+=+count*prdPrice;
  }
  else alert("The product is not available with this quantity");
}
changeCat(){
  this.selectedCatID=1;
}

}
