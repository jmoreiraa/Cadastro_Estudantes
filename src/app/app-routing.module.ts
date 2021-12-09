import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { CadAlunoComponent  } from './cad-aluno/cad-aluno.component';
import { ListAlunosComponent } from './list-alunos/list-alunos.component';

const routes: Routes = [
  { path: '', redirectTo: '/cad-aluno', pathMatch: 'full' },
  { path: 'cad-aluno', component: CadAlunoComponent },
  { path: 'list-alunos', component: ListAlunosComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }