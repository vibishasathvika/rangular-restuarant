import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-restuarants-list',
  templateUrl: './restuarants-list.component.html',
  styleUrls: ['./restuarants-list.component.css']
})
export class RestuarantsListComponent implements OnInit {
//property
restname  ="list of Restuarants"
 restuarantlist:any = []

 //to hold serchterm
 searchterm = ""

//dependancy injection
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    //apiservice call - to get all resturant list -it is a asyncronuse funtion call
    this.apiService.getRestuarantslist()
    .subscribe((result)=>{

      this.restuarantlist = result
      console.log(this.restuarantlist);
      

    })

    //to get search  term from api service
    this.apiService.search.subscribe((data)=>{
      console.log(data);
      this.searchterm = data
      
    })
  }

}

