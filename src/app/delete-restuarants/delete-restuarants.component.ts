import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-delete-restuarants',
  templateUrl: './delete-restuarants.component.html',
  styleUrls: ['./delete-restuarants.component.css']
})
export class DeleteRestuarantsComponent implements OnInit {
 restId:any
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((result)=>{
     //console.log(result['id']);
     this.restId=result['id']
    })

    this.api.DeleteResturant(this.restId)
    .subscribe(()=>{
      alert(" resturant hase been removed");
      this.router.navigateByUrl('')
    })
  }

}
