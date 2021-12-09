import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Aluno } from './aluno'; 
import { take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
 
  private readonly API ='http://localhost:8080/alunos'

  list(){
    return this.http.get<Aluno[]>(this.API)
    .pipe(tap(console.log))
}

  creat(aluno:any){
    return this.http.post(this.API , aluno)
    .pipe(take(1));
  }

  constructor(private http: HttpClient) { }
}
