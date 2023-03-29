import { Component } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isAuthenticate: boolean | undefined;
name: any;
constructor(private auth : AuthGuard, private toastr: ToastrService, private authService: AuthService){}
}
