import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule , Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

const appRoutes:Routes = [
  {path:'' , component: HomeComponent},
  {path:'listings' , component: ListingsComponent},
  {path:'listing/:id' , component: ListingComponent},
  {path:'add-listing' , component: AddListingComponent},
  {path:'edit/:id' , component: EditListingComponent},
];

const firbaseConf = {
    apiKey: 'AIzaSyBVdCpZROEH-JAhT-HqAHslFUx1RIUc0KI',
    authDomain: 'proplistings-24206.firebaseapp.com',
    databaseURL: 'https://proplistings-24206.firebaseio.com',
    projectId: 'proplistings-24206',
    storageBucket: 'proplistings-24206.appspot.com',
    messagingSenderId: '997614402221'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firbaseConf, firebaseAuthConfig),
    FlashMessagesModule.forRoot()
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
