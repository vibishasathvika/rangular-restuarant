import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-restuarants',
  templateUrl: './add-restuarants.component.html',
  styleUrls: ['./add-restuarants.component.css']
})
export class AddRestuarantsComponent implements OnInit {
  id:any;
  nighbourhood:any;
  image:any;
  monday:any;
  tuesday:any;
  wednesday:any;
  thirsday:any;
  friday:any;
  saturday:any;
  sunday:any;
  rname:any;
  address:any;
  cusine:any;
  cname:any;
  date:any;
  rating:any;
  comments:any;
  latitude:any;
  lonjitude:any;

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
  }
  addproduct(){
    let newrestuarant = {
      id:this.id,
      name:this.rname,
      neighborhood:this.nighbourhood,
      photograph:this.image,
      address:this.address,
      latlng:{
        lat:this.latitude,
        lng:this.lonjitude,
      },
      cuisine_type:this.cusine,
      operating_hours:{
        Monday:this.monday,
        Tuesday:this.tuesday,
        Wednesday:this.wednesday,
        Thursday:this.thirsday,
        Friday:this.friday,
        Saturday:this.saturday,
        Sunday:this.sunday
      },
      reviews:[
        {
          name:this.cname,
          date:this.date,
          rating:this.rating,
          comments:this.comments
        }

      ]
 }
    console.log(newrestuarant);
    this.api.addreturant(newrestuarant)
    .subscribe(()=>{
      alert("resturent details successfully added!!!")
      this.router.navigateByUrl('')
    })


    
    
  }

}
