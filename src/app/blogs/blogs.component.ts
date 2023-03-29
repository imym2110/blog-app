import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FakeService } from '../fake.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  activatedroute: any;

  constructor(private route: ActivatedRoute, private router: Router, private _fake: FakeService) {
    
   }
  fakes: any;
  
  ngOnInit() {
    this._fake.myMethod();
    this.large();
  }

  large() {
    this._fake.getFaker().subscribe(data => {
      console.log(data,'data')
      Object.values(data);
      
      this.fakes = data;
    }
    );
  }
}
