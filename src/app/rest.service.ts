import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Books } from './Books';
import { Youtube } from './youtube';
import { Games } from './Games';
import { Comedy } from './comedy';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
  linka:string="http://localhost:3000/Books";
  linkb:string="http://localhost:3000/Comedy";
  linkc:string="http://localhost:3000/Youtube";
  linkd:string="http://localhost:3000/Games";
  operate:boolean=false;
  wishList:number[]=[];
  wishEle:Books[]=[];
  user:number=0;
  completed:number[]=[];
  
  addCompleted(completed:number){
    this.completed.push(completed);
  }
  getBooks(){
    return this.http.get<Books[]>(this.linka);

  }
  
  getYoutube(){
    return this.http.get<Youtube[]>(this.linkc);
  }
  getComedy(){
    return this.http.get<Comedy[]>(this.linkb);
  }

  getGames(){
    return this.http.get<Games[]>(this.linkd);
  }
  getMessage(){
    return this.operate;
  }
  setMessage(success:boolean){
    this.operate=success;
  }
  
  
  
  
  
  
}
