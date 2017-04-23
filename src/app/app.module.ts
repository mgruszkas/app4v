import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// components
import { SidebarComponent, GridComponent, HomeComponent, ItemComponent, DetailComponent}  from './components';

//providers
import { GridDataProvider } from './providers';

//pipes
import { TextOverflowPipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GridComponent,
    HomeComponent,
    ItemComponent,
    DetailComponent,
    TextOverflowPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    GridDataProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
