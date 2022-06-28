import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { Comedy } from '../comedy';
@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.css']
})
export class ComedyComponent implements OnInit {

  constructor(private rs:RestService,private router:Router) { }

  comedy:Comedy[]=[];
  ngOnInit(): void {
    this.rs.getComedy().subscribe(
      (response)=>{
        this.comedy=response;
      }
    )
}

}
