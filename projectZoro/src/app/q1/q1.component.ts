import { Component, OnInit } from '@angular/core';
//import { TestService } from '../test.service';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component implements OnInit {
  name:string=localStorage.getItem("name");
  done:boolean=false;
  done1:boolean=false;
  //test:string="abcd";
  //svc:any;
  constructor()  {}
  submit(){
    //this.svc.setName(name);
    //this.test=this.svc.getName();
    localStorage.setItem("name",this.name);
    localStorage.setItem("total",""+1);
    if(this.name!=""){
      this.done=true;
      this.done1=false;
    } 
    else{
      this.done1=true;
      this.done=false;
    } 
   // this.test=localStorage.getItem("name");
  }

  ngOnInit() {
  }


}
