import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { Youtube } from '../youtube';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  constructor(private rs:RestService,private router:Router) { }

  
  youtube:Youtube[]=[];
  ngOnInit(): void {
    this.rs.getYoutube().subscribe(
      (response)=>{
        this.youtube=response;
      }
    )
}
}
