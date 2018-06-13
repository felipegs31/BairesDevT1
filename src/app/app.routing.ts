import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';


const APP_ROUTES: Routes = [
   { path: '', component: CardComponent, pathMatch: 'full' },
   // Lazy Loading here
   // { path: 'video-gallery', loadChildren: 'app/videogallery/videos.module#VideosModule' },
   // In case of a unknown path, redirect to Login
   { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
