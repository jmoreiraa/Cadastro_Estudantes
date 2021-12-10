import { Component, OnInit } from '@angular/core';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';


@Component({
  selector: 'list-alunos',
  templateUrl: './list-alunos.component.html',
  styleUrls: ['./list-alunos.component.css']
})
export class ListAlunosComponent implements OnInit {

  alunos$: Observable<Aluno[]> | undefined;

  constructor(private service: AlunoService) { }

  ngOnInit(): void {
    this.getAluno();

  }

  getAluno(){

    this.alunos$ =this.service.list()

  }

}

