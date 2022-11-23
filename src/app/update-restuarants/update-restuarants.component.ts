import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-restuarants',
  templateUrl: './update-restuarants.component.html',
  styleUrls: ['./update-restuarants.component.css']
})
export class UpdateRestuarantsComponent implements OnInit {

   restId:any
   restDetails:any={}
   item:any
  constructor(private activatedRoute:ActivatedRoute,private apiService:ApiService,private router:Router) { }

  ngOnInit(): void {
    //get resturant id to be updated
    this.activatedRoute.params.subscribe((result:any)=>{
      this.restId = result['id']
     // console.log(this.restId);
      
    })
    //2:fetch details of curresponding resturant id
    this.apiService.viewResturant(this.restId)
    .subscribe((result)=>{
      this.restDetails = result
      console.log(this.restDetails);

      
    })
          
  }
  //update resturant
  updateRestuarant(form:any){
   // console.log(form.value);
    let updateRestDetails = {
      id:form.value.id,
      name:form.value.rname,
      neighborhood:form.value.nighbourhood,
      photograph:form.value.photograph,
      address:form.value.address,
      latlng:{
        lat:form.value.lat,
        lng:form.value.lng
      },
      cuisine_type:form.value.cuisine_type,
      operating_hours:{
        Monday:form.value.monday,
        Tuesday:form.value.tuesday,
        Wednesday:form.value.wednesday,
        Thursday:form.value.thirsday,
        Friday:form.value.friday,
        Saturday:form.value.saturday,
        Sunday:form.value.sunday
      },
      reviews:[
        {
          name:form.value.cname,
          date:form.value.date,
          rating:form.value.rating,
          comments:form.value.comments
        }

      ]
    }
    console.log(updateRestDetails);
    
    this.apiService.updatedResturant(this.restId,updateRestDetails)
    .subscribe((data)=>{
    alert('resturant details are successfully updated!!!!')
      this.router.navigateByUrl('')

   })

    
  }

}
