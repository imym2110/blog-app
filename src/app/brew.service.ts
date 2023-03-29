import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class BrewService {

  constructor(private brew: HttpClient) { }

  
  getBeer(){
    return this.brew.get('https://api.openbrewerydb.org/breweries')
  }

  myMethod() {
    return console.log('Hey, what is up!');
  }
}
