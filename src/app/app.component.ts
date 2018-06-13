import { Component, OnInit } from '@angular/core';
import { PhotoService } from './app.service';
import { PhotoModel } from './models/photo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  photos: PhotoModel;
  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.photoService.getPhotoListings()
    .subscribe( data => {
      console.log(data);
      this.photos = data;
    },
    error => {
      console.log('error');
    });
  }


}
