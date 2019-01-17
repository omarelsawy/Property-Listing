import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
  id: any; 
  title: any; 
  bedrooms: any; 

  constructor(private firebaseService: FirebaseService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
       this.title = listing.title;
       this.bedrooms = listing.bedrooms;
   });
  }

  onEdit(){
    let listing = {
      title: this.title,
      bedrooms: this.bedrooms,
    }
    
    this.firebaseService.updateListing(this.id , listing);
    this.router.navigate(['/listings']);
   }

   

}

















