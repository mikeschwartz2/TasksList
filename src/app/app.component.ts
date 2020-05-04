import { Component } from '@angular/core';
import { Task } from './interfaces/task';

import {Pipe, PipeTransform} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    newTask:string = "";
    hasTask:boolean = true;
    showEdit:boolean = false;
    editedTask:string = "";
    editId:number;
    searchTasks:string = "";
    
  tasks:Task[] = [
    {
        taskName: "Example Task",
        completed: false
    },
    {
        taskName: "Complete Dev Build Labs",
        completed: false
    },
    {
        taskName: "Actually get out of bed",
        completed: false
    },
    {
        taskName: "Get Diamond in Siege",
        completed: false
    },
    {
        taskName: "Eat an entire pizza",
        completed: false
    },
    {
        taskName: "Do a backflip",
        completed: false
    },
    {
        taskName: "Get a COD Warzone Win",
        completed: true
    },
    {
        taskName: "Do a backflip",
        completed: true
    }
  ];


  updateComplete = function(i:number) {
    if(this.tasks[i].completed == false){
        this.tasks[i].completed = true;
    }
    else {
        this.tasks[i].completed = false;
    }
 
}


addTask = function(input) {
    //let i = this.tasks.length;
    //console.log(i);
    this.tasks.push( { taskName: input, completed: false } )

    this.hasTask = true;
}
displayEdit(i){
    this.showEdit = true;
    this.editId = i;
}
editTask = function(i, input) {
    this.tasks[i].taskName = (input);
    this.showEdit = false;

}
deleteTask = function(i){
    this.tasks.splice(i, 1);
    let count = this.tasks.length;
    console.log(count);
    if (count <=0) {
        this.hasTask = false;
    }
    console.log(this.hasTask);
}


}







