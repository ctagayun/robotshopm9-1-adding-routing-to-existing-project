import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Routes array. We will use this array to define our routes
const routes: Routes = [];

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
