import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { Games } from '../Games';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private rs:RestService,private router:Router) { }

  games:Games[]=[];
  ngOnInit(): void {
    this.rs.getGames().subscribe(
      (response)=>{
        this.games=response;
      }
    )
}

}
