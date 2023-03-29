import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FakeService {
  id: any;
  title: any;
  body: any;
  apiUrl = environment.apiUrl;
  x:object | undefined;
  y ={
    name : "yash",
    email : "thissss@gmail.com",
    description : "hello"
  }

  constructor(private fake: HttpClient) { }

  getFaker(){
    return this.fake.get('https://jsonplaceholder.typicode.com/posts')
  }

  myMethod() {
    return console.log('Hey, what is up!');
  }

  getDataWithId(id:number){
    return this.fake.get('https://jsonplaceholder.typicode.com/posts/' + id)
  }

  getStrapiData(){
    return this.fake.get(this.apiUrl + '/api/restaurants?populate=*')
  }

  // createNewUser()
  // {
  //   this.x = {
     
  //   }
  //   return this.fake.post(this.apiUrl + '/api/forms/' )
  // }


  sendCredential() {
    const url = this.apiUrl + '/api/forms/';
    const body = 
    {
      "data": {
        "name" : "Yash",
        "description" : "Hello",
        "email":"test12344@yopmail.com"
      }
    }
    const headers = new Headers(
        {
            'Content-Type': 'application/json'
        });
        console.log(body, "Service")
    return this.fake.post(url, body); 
}

submitForm(temp:any) {


  console.log(temp, 'Inservice')
   const url = this.apiUrl + '/api/forms/';
   const body = 
   {
    "data": {
      "name" : temp.name,
      "description" : temp.description,
      "email":temp.email
    }
  }

   console.log(body, 'Safety')
   const headers = new Headers(
    {
        'Content-Type': 'application/json'
    });
    console.log(body, "Service")
return this.fake.post(url, body);
}
}
