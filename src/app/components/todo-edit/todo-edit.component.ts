import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { TodoData } from 'src/app/todo-data';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent {

  id:any;
  data:any;
  newTodo = new TodoData();

  constructor(private activatedRoute:ActivatedRoute, private dataService:TodoDataService, private router:Router) {}

  ngOnInit() : void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getTodoById();
  }

  getTodoById(){

    this.dataService.getDataById(this.id).subscribe(res => {

     this.data = res;
     this.newTodo = this.data;

    });

  }

  updateTodo(){
    this.dataService.editData(this.newTodo,this.id).subscribe(res => {
      return this.router.navigate(['/']);
    })
  }

}
