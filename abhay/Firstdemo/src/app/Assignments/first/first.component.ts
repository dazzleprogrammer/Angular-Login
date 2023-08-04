import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirstModelComponent } from 'src/app/Model/first-model/first-model.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{

  constructor(public dialog: MatDialog, private route:ActivatedRoute){}

  data:any=[]

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    
     this.data=localStorage.getItem('data')
     this.data=JSON.parse(this.data) 
  }

  openDialog() {
    this.dialog.open(FirstModelComponent,
      {
        height:"30%",
        width:"35%"
      }
      ).afterClosed().subscribe((result)=>{
        //console.log(result);
        
        if(result=='Add'){
          this.ngOnInit()
        }
      })
  }
     
  deleteInfo(id:number){
    this.data.splice(id,1)
    localStorage.setItem('data',JSON.stringify(this.data)
    )
  } 

}
