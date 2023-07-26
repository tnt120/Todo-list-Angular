import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { ActivatedRoute, Route } from '@angular/router';
import { DatePipe } from '@angular/common';

interface Task {
  id: string,
  value: string,
  done: boolean,
  date: string | null
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  datePipe = new DatePipe('en-US');
  currDate: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let date: Date = new Date(this.route.snapshot.params['date']);
    this.currDate = this.datePipe.transform(date, 'dd-MM-yyyy');
    console.log(this.currDate);
  }

  tasks: Task[] = [
    {
      id: uuidv4(),
      value: 'Visit Ann',
      done: false,
      date: '26-04-2021'
    },
    {
      id: uuidv4(),
      value: 'Call dad',
      done: false,
      date: '29-05-2022'
    },
    {
      id: uuidv4(),
      value: 'Go to the gym',
      done: false,
      date: '29-05-2022'
    },
    {
      id: uuidv4(),
      value: 'Wash the dishes',
      done: false,
      date: '29-05-2022'
    },
    {
      id: uuidv4(),
      value: 'Shop for the party',
      done: false,
      date: '30-08-2023'
    },
  ]

  addTask(task: HTMLInputElement) {
    if(task.value) {
      this.tasks.push(
        {
          id: uuidv4(), 
          value: task.value, 
          done: false,
          date: this.currDate
        }
      );
    }
    task.value = '';
  }

  removeTask(task: Task) {
    const confirmation = confirm(`Are you sure to delete this task?\n"${task.value}"`);

    if (confirmation) {
      this.tasks = this.tasks.filter(tsk => tsk.id !== task.id)
    }
  }

  toogleDoneTask(task: Task) {
    task.done = !task.done;
  }
}
