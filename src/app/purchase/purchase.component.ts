import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FakeService } from '../fake.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent {
  mydata: any[] =[];
  apiUrl = environment.apiUrl;
  
  constructor(private route: ActivatedRoute, private router: Router, private _fake: FakeService) {}
 fakes: any;
 

  ngOnInit(){
    
    this.large();
  }
  
  large() {
    this._fake.getStrapiData().subscribe(data => {
      console.log(data,'data 123')
      // Object.values(data).filter(x=>{
      //   this.mydata = x;
      //   console.log(this.mydata,'x');
      // });
      
      this.fakes = data;
      Object.values(this.fakes.data).filter(x=>{
        console.log(x,'x');
        this.mydata.push(x);
      })
    }
    );
  }
}
