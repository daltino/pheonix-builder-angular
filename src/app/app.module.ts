import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
<<<<<<< Updated upstream
import { WordsModule } from './words/words.module';
=======
import { ButtonsModule } from 'ngx-foundation/buttons/buttons.module';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
<<<<<<< Updated upstream
    WordsModule
=======
    ButtonsModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
