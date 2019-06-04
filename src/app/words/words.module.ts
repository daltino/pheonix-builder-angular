import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WordDetailComponent } from './word-detail/word-detail.component';
import { WordEditComponent } from './word-edit/word-edit.component';
import { WordListComponent } from './word-list/word-list.component';
import { WordGroupDetailComponent } from './word-group-detail/word-group-detail.component';
import { WordGroupEditComponent } from './word-group-edit/word-group-edit.component';
import { WordGroupListComponent } from './word-group-list/word-group-list.component';
import { EnglishWordListComponent } from './english-word-list/english-word-list.component';
import { EnglishWordDetailComponent } from './english-word-detail/english-word-detail.component';
import { EnglishWordEditComponent } from './english-word-edit/english-word-edit.component';

@NgModule({
  declarations: [WordListComponent, WordGroupListComponent, EnglishWordListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'words', component: WordListComponent },
      { path: 'words/:id', component: WordDetailComponent },
      { path: 'words/:id/edit', component: WordEditComponent },
      { path: 'wordgroups', component: WordGroupListComponent },
      { path: 'wordgroups/:id', component: WordGroupDetailComponent },
      { path: 'wordgroups/:id/edit', component: WordGroupEditComponent },
      { path: 'englishwords', component: EnglishWordListComponent },
      { path: 'englishwords/:id', component: EnglishWordDetailComponent },
      { path: 'englishwords/:id/edit', component: EnglishWordEditComponent }
    ])
  ]
})
export class WordsModule {}
