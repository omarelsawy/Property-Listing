import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  title: any;
  bedrooms: any;
  image: any;

  constructor(private firebaseService: FirebaseService,
              private router: Router,) { }

  ngOnInit() {
  }

  onAdd(){
    let lesting = {
      title: this.title,
      bedrooms: this.bedrooms,
    }

    this.firebaseService.addListing(lesting);
    this.router.navigate(['/listings']);
  }

}
