import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { ArticlesComponent } from './pages/articles/articles.component';
import { HistoryComponent } from './pages/history/history.component';
import { ImagesComponent } from './pages/images/images.component';
import { VediosComponent } from './pages/vedios/vedios.component';
import { VoicesComponent } from './pages/voices/voices.component';
import { WritingComponent } from './pages/writing/writing.component';


const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: '',   redirectTo: '/home', pathMatch: 'full' },
{ path: 'articles' , component:ArticlesComponent},
{ path: 'history ' , component:HistoryComponent},
{ path: 'images' , component:ImagesComponent},
{ path: 'videos' , component:VediosComponent},
{ path: 'writings' , component:WritingComponent},
{ path: 'voices' , component:VoicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
