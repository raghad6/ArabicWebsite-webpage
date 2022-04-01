import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { ArticlesComponent } from './pages/articles/articles.component';
import { HistoryComponent } from './pages/history/history.component';
import { ImagesComponent } from './pages/images/images.component';
import { VediosComponent } from './pages/vedios/vedios.component';
import { WritingComponent } from './pages/writing/writing.component';


const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: '',   redirectTo: '/home', pathMatch: 'full' },
{ path: 'مقالات' , component:ArticlesComponent},
{ path: 'تاريخ و سيرة' , component:HistoryComponent},
{ path: 'صور' , component:ImagesComponent},
{ path: 'فيديوهات' , component:VediosComponent},
{ path: 'مؤلفات' , component:WritingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
