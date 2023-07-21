import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/todos');
  }

  addData(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/add-todo',data);
  }

  deleteData(id){
    return this.httpClient.delete('http://127.0.0.1:8000/api/delete-todo/'+id);
  }

  getDataById(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/todo/'+id);
  }

  editData(data, id){
    return this.httpClient.put('http://127.0.0.1:8000/api/update-todo/'+id, data);
  }
}
