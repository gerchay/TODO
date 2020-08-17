import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// FIREBASE
import { AngularFireModule } from 'angularfire2'; // BConectarse a los servicios de firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
// ENVIRONMENT Config
import { environment } from '../environments/environment';
//COMPONENTS
import { TodoComponent } from './components/todo/todo.component';
// SERVICES
import { TodoService }  from './services/todo.service'
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
