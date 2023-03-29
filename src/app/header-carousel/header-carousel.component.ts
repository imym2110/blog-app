import { Component, ViewEncapsulation } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header-carousel',
  standalone: true,
  encapsulation:ViewEncapsulation.None,
	imports: [NgbCarouselModule],
  templateUrl: './header-carousel.component.html',
  styleUrls: ['./header-carousel.component.scss']
})
export class HeaderCarouselComponent {

}
