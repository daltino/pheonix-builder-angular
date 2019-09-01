import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordDetailComponent } from './word-detail/word-detail.component';
import { WordEditComponent } from './word-edit/word-edit.component';
import { WordListComponent } from './word-list/word-list.component';
import { WordGroupEditComponent } from './word-group-edit/word-group-edit.component';
import { WordGroupListComponent } from './word-group-list/word-group-list.component';
import { EnglishWordListComponent } from './english-word-list/english-word-list.component';
import { WordGroupDetailComponent } from './word-group-detail/word-group-detail.component';
import { EnglishWordDetailComponent } from './english-word-detail/english-word-detail.component';
import { EnglishWordEditComponent } from './english-word-edit/english-word-edit.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';

const routes = [
  {
    canActivate: [AuthGuard],
    path: '',
    children: [
      { path: 'list', component: WordListComponent },
      { path: ':id/detail', component: WordDetailComponent },
      { path: ':id/edit', component: WordEditComponent },
      { path: 'group/list', component: WordGroupListComponent },
      { path: 'group/:id/detail', component: WordGroupDetailComponent },
      { path: 'group/:id/edit', component: WordGroupEditComponent },
      { path: 'english/list', component: EnglishWordListComponent },
      { path: 'english/:id/detail', component: EnglishWordDetailComponent },
      { path: 'english/:id/edit', component: EnglishWordEditComponent },
    ]
  }
];
@NgModule({
  declarations: [
    WordListComponent,
    WordDetailComponent,
    WordEditComponent,
    WordGroupListComponent,
    WordGroupEditComponent,
    WordGroupDetailComponent,
    EnglishWordListComponent,
    EnglishWordDetailComponent,
    EnglishWordEditComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class WordsModule {}
