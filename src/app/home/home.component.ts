import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../Books';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rs:RestService,private router:Router) { }
  result=[];
  i:number=0;
  flag:boolean=true;
  operate:boolean=false;
 
 

  

 
  book:Books[]=[];
  ngOnInit(): void {
    this.rs.getBooks().subscribe(
      (response)=>{
        this.book=response;
      }
    )

    
  }
}
