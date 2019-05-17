import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.css']
})
export class Q3Component implements OnInit {
  name:string=localStorage.getItem("name");
  exp:string="No-Experience";
  done:boolean=false;
  done1:boolean=false;
  test1:string=localStorage.getItem("status");
  no:number=parseInt(localStorage.getItem("total"));
  update(){
    this.no++;
    localStorage.setItem("exp",this.exp);
    if(this.no == 3){
      if(((localStorage.getItem("status")=="interning"
        || localStorage.getItem("status")=="working"  )&&this.exp=="No-Experience")){
          this.done=false;
          this.done1=true
        }else{
          this.done=true;
          this.done1=false;
        }
      
    }
    else{
      this.done1=true;
      this.done=false;
    }
  }
  constructor() { }


  ngOnInit() {
  }

}
