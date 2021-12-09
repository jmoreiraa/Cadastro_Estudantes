import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListAlunosComponent } from './list-alunos/list-alunos.component';
import { CadAlunoComponent } from './cad-aluno/cad-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAlunosComponent,
    CadAlunoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
