import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { TableData } from 'fs-material'
@Component({
  selector: 'app-data-table-demo',
  templateUrl: './data-table-demo.component.html',
  styleUrls: ['./data-table-demo.component.scss']
})
export class DataTableDemoComponent implements OnInit {

  constructor() {
    this.table = new TableData(this.columns, this.data, ['ID'])
    this.table$ = of(this.table)

    this.tableManyColumns = new TableData(
      this.columns,
      this.data,
      ['ID'],
      this.columnsRepeated)
    this.tableManyColumns$ = of(this.tableManyColumns)

    this.tableZeroRows = new TableData(this.columns, [])
    this.tableZeroRows$ = of(this.tableZeroRows)

    this.tableZeroColumns = new TableData([], this.data)
    this.tableZeroColumns$ = of(this.tableZeroColumns)


    this.tableSticky = new TableData(this.stickyDemoColumns, this.stickyDemoData, this.stickyColumns)
    this.tableSticky$ = of(this.tableSticky)
  }

  ngOnInit(): void {
  }

  /*
  ================================
  FILTER DEMO
  ================================
  */
  filter$: BehaviorSubject<string> = new BehaviorSubject('')

  filter(f: string) {
    console.log(f)
    this.filter$.next(f)
  }

  /*
  ================================
  DETERMINATE PROGRESS DEMO
  ================================
  */

  progress$: Observable<number> = of(40)


  /*
  ================================
  NO DATA MESSAGE DEMO
  ================================
  */

  noDataMessage: string = 'No Data'
  isDataLoaded$: Observable<boolean> = of(false)
  isDataLoadedTrue$: Observable<boolean> = of(true)
  isProgressCompleteFalse$: Observable<boolean> = of(false)

  table!: TableData;
  table$!: Observable<TableData>;

  tableManyColumns!: TableData;
  tableManyColumns$!: Observable<TableData>

  tableZeroRows!: TableData;
  tableZeroRows$!: Observable<TableData>;

  tableZeroColumns!: TableData;
  tableZeroColumns$!: Observable<TableData>;

  tableSticky$!: Observable<TableData>;
  tableSticky!: TableData;

  columns: string[] = ['ID', 'TITLE', 'DESCRIPTION']

  columnsRepeated: string[] = ['ID', 'TITLE', 'DESCRIPTION']

  data: any[] = [
    { ID: 1, TITLE: "Lets do this! ", DESCRIPTION: "We really out to do this" },
    { ID: 2, TITLE: "Lets do this!", DESCRIPTION: "We really out to do this" },
    { ID: 3, TITLE: "Lets do this! ", DESCRIPTION: "We really out to do this" },
    { ID: 4, TITLE: "Lets do this!", DESCRIPTION: "We really out to do this" },
    { ID: 5, TITLE: "Lets do this! ", DESCRIPTION: "We really out to do this" },
    { ID: 6, TITLE: "Lets do this!", DESCRIPTION: "We really out to do this" },
    { ID: 7, TITLE: "Lets do this! ", DESCRIPTION: "We really out to do this" },
    { ID: 8, TITLE: "Lets do this!", DESCRIPTION: "We really out to do this" },
    { ID: 9, TITLE: "Lets do this! ", DESCRIPTION: "We really out to do this" },
    { ID: 10, TITLE: "Lets do this!", DESCRIPTION: "We really out to do this" },
    { ID: 11, TITLE: "Lets do this! ", DESCRIPTION: "We really out to do this" },
    { ID: 12, TITLE: "Lets do this!", DESCRIPTION: "We really out to do this" },
    { ID: 13, TITLE: "Lets do this! ", DESCRIPTION: "We really out to do this" },
    { ID: 14, TITLE: "Lets do this!", DESCRIPTION: "We really out to do this" }
  ]

  dataOneRow: any[] = [
    { ID: 1, TITLE: "Lets do this! ", DESCRIPTION: "We really out to do this" }
  ]
  stickyDemoData: any[] = [
    { ID: 1, CUSTOMER: "Candice Bergen", FIRST_NAME: "Candice", LAST_NAME: "Bergen", ADDRESS: "1021 Devon", ZIP: '24423' }
  ]
  stickyDemoColumns: string[] = ['ID', 'CUSTOMER', 'FIRST_NAME', 'LAST_NAME', 'ADDRESS', 'ZIP']
  stickyColumns: string[] = ['ID', 'CUSTOMER']
}