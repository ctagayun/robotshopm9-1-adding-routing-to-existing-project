import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  //The exclamation point tells Angular to ignore that it is not initialized
  @Input() product!: IProduct;

  //create an event emitter called "buy"
  @Output() buy = new EventEmitter()

  getImageUrl(product: IProduct){
    if(!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  buyButtonClick(product: IProduct)
  {
    //when button is clicked raise  @Output() event emitter we created called "buy"
    //This event is being listened to in CatalogComponent.ts
    this.buy.emit();
  }
}
