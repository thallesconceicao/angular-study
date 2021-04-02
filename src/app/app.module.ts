import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonModule } from './person/person.module';
import { TitleTestComponent } from './title-test/title-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleTestComponent
  ],
  imports: [
    BrowserModule,
    PersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
