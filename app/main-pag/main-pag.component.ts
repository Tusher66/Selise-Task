import { Component, OnInit } from '@angular/core';
import { AddBookComponent } from '../add-book/add-book.component';
import { MatDialog,  } from '@angular/material/dialog';

@Component({
  selector: 'app-main-pag',
  templateUrl: './main-pag.component.html',
  styleUrls: ['./main-pag.component.scss']
})
export class MainPagComponent implements OnInit {
 

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addBookM(){
    this.dialog.open(AddBookComponent, {
      panelClass: ['less-padding-dialog', 'radius-10-dialog'],
      width: '450px',
      
    })
  }

}
