import { Component } from '@angular/core';
import { PhotoService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app';
  photos
  constructor(private photoService: PhotoService){}

  getPhotos(){
    this.photoService.getPhotoListings()
    .subscribe( data => {
      this.photos = data;
    }
  }


}
