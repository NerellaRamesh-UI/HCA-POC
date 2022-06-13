import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LeftNavComponent } from './shared/left-nav/left-nav.component';
import { FilterHeaderComponent } from './shared/filter-header/filter-header.component';
import { MainGridComponent } from './shared/main-grid/main-grid.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifiedRecordsComponent } from './modified-records/modified-records.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    FilterHeaderComponent,
    MainGridComponent,
    LoginComponent,
    ModifiedRecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
