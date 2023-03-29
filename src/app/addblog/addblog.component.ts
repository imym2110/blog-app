import { Component } from '@angular/core';
import { FormControl, FormGroup, FormRecord, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { __values } from 'tslib';
import { FakeService } from '../fake.service';
import { enableProdMode } from '@angular/core';

enableProdMode();

@Component({                                                                                                   
  selector: 'app-addblog',                                                                                                   
  templateUrl: './addblog.component.html',                                                                                                   
  styleUrls: ['./addblog.component.scss']                                                                                                   
})                                                                                                   
export class AddblogComponent {                                                                                                   
  blogdetails:any[]=[];                                                                                                   
  public addblogform: FormGroup;                                                                                                   
  name: any = "";                                                                                                   
  email: any = "";                                                                                                   
  description: any = "";                                                                                                   
  id: any;
  tempdata = this._fake.y;
                                                     
  constructor(private detail: FormBuilder, private _fake: FakeService, private toast : ToastrService) {                                                                                                   
    this.addblogform = this.detail.group({                                                                                                   
      name: '',                                                                                                   
      email: '',                                                                                                   
      description: ''                                                                                                   
    });                                                                                                   
  }                                                                                                 
  onSubmit(): void {     
    
    console.log(this.addblogform.value, 'dddd')

    this._fake.submitForm(this.addblogform.value).subscribe(resp=>{
      console.log(resp, 'RESP')
    })
    console.log('Your details have been submitted', this.addblogform.value);                                                                                                   
    this.blogdetails.push(this.addblogform.value)                                                                                                   
    console.log('this.blogdetails',this.blogdetails)                                                                                                   
    this.addblogform.reset();                                                                     
  }    
  
  // setValue(){
  //   console.log(this.tempdata, "API")
  //   this._fake.submitForm().subscribe(x => {
  //   }) 
  // }

  testdata()
  {
    this._fake.sendCredential().subscribe(x=>{
      console.log(x, 'Resp')
    })
  }
                                                                                               
  remove(id: any) {                                                                                                   
    let index = this.blogdetails.findIndex(e => e.id === id);                                                                                                   
      this.blogdetails.splice(index,1);                                                                                                   
  }                                                                                                   
}                                                                                                   
