/**
 * Generic TableData component
 */
import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { TableData } from '@fireflysemantics/cdk'
import { Observable, of } from 'rxjs';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ThemePalette } from '@angular/material/core';

@UntilDestroy()
@Component({
  selector: 'fs-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterViewInit {

  @Input()
  filter$?: Observable<string>

  /**
   * Note that when isProgressComplete$ emits
   * false isDataLoaded$ should emit true
   * in order to hide the `nodata` template.
   */
  @Input()
  isDataLoaded$: Observable<boolean> = of(false)

  @Input()
  noDataMessage: string = ''

  @Input()
  progressMode?: ProgressBarMode

  @Input()
  progressColor?: ThemePalette

  @Input()
  progress$: Observable<number> = of(0)

  /**
   * Note that when isProgressComplete$ emits
   * false isDataLoaded$ should emit true
   * in order to hide the `nodata` template.
   */
  @Input()
  isProgressComplete$:Observable<boolean> = of(true)

  /**
   * This property contains the 
   * default consideration settings
   * for the pager.  This allows the 
   * table to render initially.
   */
  tableData: TableData = new TableData([])

  @Input()
  tableData$: Observable<TableData> = of(this.tableData)

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([])

  constructor() { }

  ngOnInit() {
    this.tableData$.pipe(untilDestroyed(this)).subscribe((td: TableData) => {
      if (td) {
        this.tableData = td
        this.dataSource.data = td.rows
      }
      else {
        this.tableData = new TableData([])
      }
    })
    if (this.filter$) {
      this.filter$.pipe(untilDestroyed(this)).subscribe(f => {
        this.dataSource.filter = f
      })
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  isSticky(column: string): boolean {
    return this.tableData.stickyHeaders.includes(column) ? true : false;
  }
}