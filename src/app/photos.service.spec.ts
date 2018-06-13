import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';

import { HttpModule,
         Http,
         BaseRequestOptions,
         XHRBackend,
         ResponseOptions,
         Response,
         RequestOptions} from '@angular/http';

import { MockBackend } from '@angular/http/testing';
import { PhotosService } from './photos.service';
fdescribe('PhotosService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        PhotosService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  xit('should be created', async(inject([PhotosService], (service: PhotosService) => {
    console.log(service);
    expect(service).toBeTruthy();
  })));

  it('should return an Observable<Array<Photo>>',
    inject([PhotosService, XHRBackend], (photosService, mockBackend) => {

    const mockResponse = [
      {
        albumId: 1,
        id: 0,
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        url: 'http://placehold.it/600/92c952',
        thumbnailUrl: 'http://placehold.it/150/92c952'
      },
      {
        albumId: 1,
        id: 1,
        title: 'reprehenderit est deserunt velit ipsam',
        url: 'http://placehold.it/600/771796',
        thumbnailUrl: 'http://placehold.it/150/771796'
      }
    ];

    // const mockResponse = {
    //   data: [
    //     { id: 0, name: 'Video 0' },
    //     { id: 1, name: 'Video 1' },
    //     { id: 2, name: 'Video 2' },
    //     { id: 3, name: 'Video 3' },
    //   ]
    // };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });

    photosService.getPhotoListings().subscribe((photos) => {
        console.log(photos);
        expect(photos.length).toBe(2);
        expect(photos[0].id).toEqual(0);
        expect(photos[1].id).toEqual(1);
      });

  }));

});
