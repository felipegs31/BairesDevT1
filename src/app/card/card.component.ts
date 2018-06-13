import { Component, OnInit } from '@angular/core';
import { PhotoModel } from '../models/photo.model';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  title = 'app';
  photos: Array<PhotoModel>;
  constructor(private photoService: PhotosService) {}

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
