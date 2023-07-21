import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';

const routes: Routes = [
  {path: '', component: TodosComponent},
  {path: 'todo-edit/:id', component: TodoEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
