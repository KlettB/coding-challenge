import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SortPipe } from './pipes/sort.pipe';
import { DriverListComponent } from './components/driver-list/driver-list.component';
import { MobieViewStateComponent } from './components/mobie-view-state/mobie-view-state.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    NavigationComponent,
    SortPipe,
    DriverListComponent,
    MobieViewStateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    GoogleMapsModule,
  ],
  providers: [
    HttpClientModule
  ],
  exports: [
    FilterPipe,
    SortPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
