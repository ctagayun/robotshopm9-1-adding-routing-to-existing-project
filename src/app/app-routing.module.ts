import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Routes array. We will use this array to define our routes
const routes: Routes = [];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, // no need because app.module imorts it already
    RouterModule //add this
  ],
  exports: [RouterModule] //add this
})
export class AppRoutingModule { }
