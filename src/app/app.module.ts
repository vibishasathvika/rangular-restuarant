import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestuarantsListComponent } from './restuarants-list/restuarants-list.component';
import { ViewRestuarantsComponent } from './view-restuarants/view-restuarants.component';
import { AddRestuarantsComponent } from './add-restuarants/add-restuarants.component';
import { UpdateRestuarantsComponent } from './update-restuarants/update-restuarants.component';
import { DeleteRestuarantsComponent } from './delete-restuarants/delete-restuarants.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RestuarantsListComponent,
    ViewRestuarantsComponent,
    AddRestuarantsComponent,
    UpdateRestuarantsComponent,
    DeleteRestuarantsComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
