import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../environments/environment';
import { PhotoModel } from './models/photo.model';

@Injectable()
export class PhotosService {

  constructor(private http: Http) { }

  getVideos() {
    return this.http.get('https://jsonplaceholder.typicode.com/videos')
                    .map(res => res.json().data);
  }
 // : Observable<Array<PhotoModel>>
  getPhotoListings(): Observable<Array<PhotoModel>> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos', {
    })
      .map((res) => res.json())
      .catch(this.handleError);
  }

  // Treat the error
  handleError(error: any) {
    return Observable.throw(error);
  }



}
