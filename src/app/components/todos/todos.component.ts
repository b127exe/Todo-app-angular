import { Component } from '@angular/core';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { TodoData } from 'src/app/todo-data';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  data:any;

  newTodo = new TodoData();
   
  constructor(private dataService:TodoDataService) {}

  ngOnInit() : void {
    this.getTodos();
  }

  getTodos(){
    this.dataService.getData().subscribe(res => {
      this.data = res;
    });
  }

  addTodo(){
   this.dataService.addData(this.newTodo).subscribe(res => {
     this.getTodos();
   });
  }

  deleteTodo(id){
    this.dataService.deleteData(id).subscribe(res => {
      this.getTodos();
    });
  }
}
