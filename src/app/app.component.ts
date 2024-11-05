import { Component } from '@angular/core';

//this is the metadata, @component() decorator is a function that adds
//the metadata to a class.

@Component({
  selector: 'bot-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//creating a class - code behind
export class AppComponent { //properties: property name, data type, default value
  pageTitle: string  = 'Acme Product Management';

}
