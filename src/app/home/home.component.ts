/*
  There are three things you need to do to implement life  cycle hook:
   1. import lifecycle event interface (e.g. onInit)
   2. implement in your component class
   3. create a method on your class for that lifecycle hook (use ngOnInit())
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bot-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//implement lifecycle hook in your class
export class HomeComponent implements OnInit {
   constructor() {

   }

   //create a method on your class for that lifecycle hook
  ngOnInit(): void {

  }

}
