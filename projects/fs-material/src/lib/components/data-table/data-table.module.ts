import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { DataTableComponent } from './data-table.component';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule
  ],
  exports: [DataTableComponent]
})
export class DataTableComponentModule { }