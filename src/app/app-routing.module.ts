import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';

const routes: Routes = [
  {
    path: 'tasks', component: TaskListComponent
  },
  {
    path: '', component: CalendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
