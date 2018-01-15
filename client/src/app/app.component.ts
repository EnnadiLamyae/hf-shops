import { Component , OnInit , OnDestroy } from '@angular/core';
import { AuthenticationService } from './authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy{
  
  
  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.authentication.signout()
  }
}
