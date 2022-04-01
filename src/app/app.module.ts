import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VoicesComponent } from './pages/voices/voices.component';
import { VediosComponent } from './pages/vedios/vedios.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { HistoryComponent } from './pages/history/history.component';
import { ImagesComponent } from './pages/images/images.component';
import { WritingComponent } from './pages/writing/writing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoicesComponent,
    VediosComponent,
    ArticlesComponent,
    HistoryComponent,
    ImagesComponent,
    WritingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
