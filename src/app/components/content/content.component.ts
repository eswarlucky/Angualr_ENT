import { Component, OnInit } from '@angular/core';
import { SimpleCellRenderer } from './SimpleCellRenderer';
import {
  ColDef,
  GridReadyEvent,
  RowGroupingDisplayType,
} from 'ag-grid-community';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  
  onGridReady(params: GridReadyEvent) {};
  gridOptions = {
    columnDefs: [
      // one column for showing the groups
      // {
      //   headerName: 'Group',
      //   cellRenderer: 'agGroupCellRenderer',
      //   showRowGroup: true,
      //   minWidth: 10,
      // },
  
      // the first group column
      {field: "make" , 
      cellRenderer: 'agGroupCellRenderer', },
      { field: 'model' },
  
      { field: 'price', minWidth: 200, cellRenderer: function()  {
        return `<button ng-click="functionOnScope(data)">Expand All</button>`;
    } }
    ],
    defaultColDef: {
      flex: 1,
      sortable: true,
      resizable: true,
    },
    groupDisplayType: 'custom',
    enableRangeSelection: true,
    animateRows: true,
  };

  rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];
  ngOnInit(): void {
  }

}
