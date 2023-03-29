import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeService } from '../fake.service';

@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.scss']
})
export class Blog1Component {
  
  id: any;
  resp: any[] = [];
  constructor(private _fake: FakeService, private route: ActivatedRoute) { }
  fakes: any;

  ngOnInit() {
    this._fake.getDataWithId(this.id);
    this.large();
  }

  large() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)

    this._fake.getDataWithId(this.id).subscribe((resp) => {
      console.log(resp, 'Res')
      Object.values(resp);
      this.fakes = resp;
    })
  }
}
