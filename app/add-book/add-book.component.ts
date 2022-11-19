import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {  FormControl,FormGroup, FormGroupName } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { catchError, Subject, tap } from 'rxjs';
import {  User1 } from '../user.model';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  // user = new Subject<User1>();

  constructor(public dialogRef: MatDialogRef<AddBookComponent>) { }

  
  loginForm=new FormGroup({
    title:new FormControl(''),
    url:new FormControl(''),
    category:new FormControl('')
  });  
  
  
  


  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }

  // onSubmit(title:string, url:string, category:string){
    
      
  //     console.warn(this.loginForm.value);
  //     // let user=this.loginForm.value;

  //     const user = new User1(title, url, category);
  //     this.user.next(user); 
  //     localStorage.setItem('UserData', JSON.stringify(user));
    
  // }
  onSubmit(){
    console.warn(this.loginForm.value);
  }

}
