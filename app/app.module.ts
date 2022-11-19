import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import {MatButtonModule} from '@angular/material/button'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { MainPagComponent } from './main-pag/main-pag.component';
import { AddBookComponent } from './add-book/add-book.component';

import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

// import { MatModuleModule } from './appModule/mat-module/mat-module.module';





@NgModule({
  declarations: [
    AppComponent,
    MainPagComponent,
    AddBookComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    CalendarModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
