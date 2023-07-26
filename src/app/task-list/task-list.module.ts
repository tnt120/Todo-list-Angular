import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';


import { TaskListComponent } from './task-list.component';



@NgModule({
  declarations: [
    TaskListComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatDatepickerModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class TaskListModule { }
