import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCKPjgZbZ2mmUuDseHtx-gIhR3Fd_qgPG8",
      authDomain: "fir-angular-auth-2822d.firebaseapp.com",
      databaseURL: "https://fir-angular-auth-2822d.firebaseio.com",
      projectId: "fir-angular-auth-2822d",
      storageBucket: "fir-angular-auth-2822d.appspot.com",
      messagingSenderId: "234306528370",
      appId: "1:234306528370:web:a6df50f113c2e83094ceeb"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
