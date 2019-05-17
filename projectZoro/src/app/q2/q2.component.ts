import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css']
})
export class Q2Component implements OnInit {
  test:string;
  done:boolean=false;
  done1:boolean=false;
  test1:string=localStorage.getItem("name");
  no1:number=parseInt(localStorage.getItem("total"));
  no2:number=parseInt(localStorage.getItem("total"));
  no3:number=parseInt(localStorage.getItem("total"));
  constructor() { 
    this.test="nothing"
  }
  studying(){
    localStorage.setItem("status","studying");
    this.no1++;
    localStorage.setItem("total",""+this.no1);
    this.test=localStorage.getItem("status");
    if(this.test1!=""){
      this.done=true;
      this.done1=false;
    } 
      else{
        this.done1=true;
        this.done=false;
      }
  }
  interning(){
    localStorage.setItem("status","interning");
    this.no2++;
    localStorage.setItem("total",""+this.no2);
    this.test=localStorage.getItem("status");
    if(this.test1!=""){
      this.done=true;
      this.done1=false;
    } 
      else{
        this.done1=true;
        this.done=false;
      }
  }
  working(){
    localStorage.setItem("status","working");
    this.no2++;
    localStorage.setItem("total",""+this.no2);
    this.test=localStorage.getItem("status");
    if(this.test1!=""){
      this.done=true;
      this.done1=false;
    } 
      else{
        this.done1=true;
        this.done=false;
      }
  }

  ngOnInit() {
  }

}
