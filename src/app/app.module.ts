import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppRoutingModule } from './app.routing.module';
import {BookModule} from './book/booklist/book.module';
import {AppComponent} from './app.component';
import {ImpressionService} from './impr/impression.service';
import {LoginRoutingModule} from './login/login.routing.module';
import {LoginComponent} from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BookModule,
    LoginRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [
    ImpressionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
