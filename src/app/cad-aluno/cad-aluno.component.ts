import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-cad-aluno',
  templateUrl: './cad-aluno.component.html',
  styleUrls: ['./cad-aluno.component.css']
})
export class CadAlunoComponent implements OnInit {

    form!: FormGroup;
    submitted = false;

  constructor(private fb: FormBuilder,
              private service: AlunoService ) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      nome: [null],
      email: [null],
      cpf: [null],
      endereco: [null],
      periodo: [null]
    });
  }

  onSubmit(){
    this.submitted=true;
    console.log(this.form.value)
  }

}
