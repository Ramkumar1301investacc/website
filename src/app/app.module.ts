import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { HeaderComponent } from './header/header.component';

import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    RightsidebarComponent,
    HeaderComponent,
 
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
