import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';

//Routes array. We will use this array to define our routes
const routes: Routes = [
  {path: 'home', component: HomeComponent, title: "Home - Robot Shop"},

  //:filter is the name of the query parameter
  {path: 'catalog/:filter', component: CatalogComponent, title: "Catalog - Robot Shop"},

  {path: 'cart', component: CartComponent, title: "Cart - Robot Shop"},
  {path: '', redirectTo: 'home', pathMatch: 'full'}, //default. Pathmach=full
   // This tells angular how to match the route against the URL. The default pathMatch
   //property for all routes is prefix, which means that angular will inspect the URL provided
   //from the browser from left  to right until it finds a match.
   //With "redirectTo" we want to use "full". Which means we only want to use
   //this path only if the entire URL is empty like: localhost:8081

   //Note: The order of your route matters

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, // no need because app.module imorts it already
    RouterModule.forRoot(routes) //add this. this syntax allows us to pass our "routes"
                                 //array to the router. forRoot because we are providing the
                                 //routes to our application.
                                 //Contrast that with forChild. We will use this later on
                                 //when we create a child modules with its own routes

                                 //The last thing to do is add a <router-outlet> in
                                 //AppComponent
  ],
  exports: [RouterModule] //add this
})
export class AppRoutingModule { }
