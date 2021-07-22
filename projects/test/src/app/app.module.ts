import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponentModule } from 'fs-material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableDemoComponent } from './components/data-table-demo/data-table-demo.component';
import { CdkColumnDef } from '@angular/cdk/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DataTableDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DataTableComponentModule,
    MatIconModule,
    MatButtonModule
  ],
  providers:[CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
