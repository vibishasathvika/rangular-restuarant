import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-restuarants',
  templateUrl: './view-restuarants.component.html',
  styleUrls: ['./view-restuarants.component.css']
})
export class ViewRestuarantsComponent implements OnInit {
  restId:any;
  restDetails:any;


  constructor(private activatedRoute:ActivatedRoute,private apiservice:ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(result=>{
     // console.log(result['id']);
      this.restId=result['id']
    })
    this.apiservice.viewResturant(this.restId)
    .subscribe((result:any)=>{
      console.log(result);
      this.restDetails=result
      
    })
  }

}
