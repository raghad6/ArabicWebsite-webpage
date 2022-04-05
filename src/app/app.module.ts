import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { VoicesComponent } from './pages/voices/voices.component';
import { VediosComponent } from './pages/vedios/vedios.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { HistoryComponent } from './pages/history/history.component';
import { ImagesComponent } from './pages/images/images.component';
import { WritingComponent } from './pages/writing/writing.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

// import { AngularFireModule } from "@angular/fire";
// import { AngularFirestoreModule } from "@angular/fire/firestore";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoicesComponent,
    VediosComponent,
    ArticlesComponent,
    HistoryComponent,
    ImagesComponent,
    WritingComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    MdbCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
