import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiniappsComponent } from './components/miniapps/miniapps.component';
import { MiniappComponent } from './components/miniapp/miniapp.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniappsComponent,
    MiniappComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
