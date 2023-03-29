import { Component } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAuthenticate: boolean | undefined;
  constructor(private auth : AuthGuard, private toastr: ToastrService, private authService: AuthService){}
  onClick(){
    if(this.isAuthenticate = true){
      this.toastr.warning("Please Login to access this page")
    }
  }
}
