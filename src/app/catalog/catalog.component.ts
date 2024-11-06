import { ProductService } from './product.service';
import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  //products: IProduct[]; //changed "product" an array of IProduct
  products: any; //changed to any so that we can test null values
  filter: string = '';  //filter is an empty string

  //Another way of creating an injectable instance of the service
  //private cartSvc: CartService = inject(CartService);

  //inject the service in the constructor. this is the preferred way because
  // it is easier to test. Inject the productservice also
  constructor(private cartSvc: CartService,
             private productSvc: ProductService,
             private router: Router, //first inject the router
             private route: ActivatedRoute) //needed by Angular to determine what route is clicked

  {  }

  //this lifecycle hook runs when CatalogComponent initiaizes.
  //do a subcribe because the returned object from the ProductService
  //is an "observable"
  ngOnInit(){
    this.productSvc.getProducts().subscribe(products => {
      this.products = products;
    });
    //after injecting ActivatedRoute. Let's access the snapshot of the activated route
    //and get the value of the query param which is called "filter"
    //Now when we go to HomeComponent and click Heads only Robot Heads are displayed.
    //If you click "Arms" only Robot Arms are displayed.

    //Note after doing the "ActivatedRoute" when you click Heads, Arms, Torso, Base it is
    // CORRECTLY displaying the filtered products...BUT THE URL IS NOT CHANGING

    //The above is happening because we are linking CatalogComponent to itself
    //CatalogComponent is already LOADED. When you link to a component the CatalogComponent
    //will not reload. Which means smapshot is STALE. Since the component is not
    //re-loaded the ngInit is also not executed
    this.filter = this.route.snapshot.params['filter'];
  }

  //next call navigate method
  addToCart(product: IProduct) {
     this.cartSvc.add(product);
     this.router.navigate(['/cart']) //this means go to Cart after "Buy" button is clicked from the catalog.
  }

  getFilteredProducts(){
    return this.filter === ''
      ? this.products //means if this.filter is empty return all products
      : this.products.filter((product:any) => product.category === this.filter);
  }
}
