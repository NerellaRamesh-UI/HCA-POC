import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss']
})
export class MainGridComponent implements OnInit {

  constructor() { }
  selectedItems: any = new Set();

  ngOnInit(): void {
  }

}
