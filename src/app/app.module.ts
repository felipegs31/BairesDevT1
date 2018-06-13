import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PhotosService } from './photos.service';
import { HttpModule } from '@angular/http';
import { CardComponent } from './card/card.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
