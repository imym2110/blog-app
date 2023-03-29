import { Component, OnInit } from '@angular/core';
import { BrewService } from '../brew.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews:any[]=[];


  constructor(private _brew: BrewService) { }

  ngOnInit() {
    this._brew.myMethod();
    this.large()
  }

  large() {
    this.brews=[];
    this._brew.getBeer().subscribe(data => {
      console.log(data,'data')
      Object.values(data).filter(x=>{
       if(x.id.includes(''))
       {
        this.brews.push(x)
       }
      })
    }
    );
  }
}
