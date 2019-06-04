import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordsComponent } from './words/words.component';
import { WordGroupsComponent } from './word-groups/word-groups.component';
import { EnglishWordsComponent } from './english-words/english-words.component';
import { WordDetailComponent } from './word-detail/word-detail.component';
import { WordEditComponent } from './word-edit/word-edit.component';
import { WordListComponent } from './word-list/word-list.component';
import { WordGroupDetailsComponent } from './word-group-details/word-group-details.component';
import { WordGroupEditComponent } from './word-group-edit/word-group-edit.component';
import { WordGroupListComponent } from './word-group-list/word-group-list.component';
import { EnglishWordListComponent } from './english-word-list/english-word-list.component';
import { EnglishWordDetailsComponent } from './english-word-details/english-word-details.component';
import { WordGroupDetailComponent } from './word-group-detail/word-group-detail.component';
import { EnglishWordDetailComponent } from './english-word-detail/english-word-detail.component';
import { EnglishWordEditComponent } from './english-word-edit/english-word-edit.component';

@NgModule({
  declarations: [WordsComponent, WordGroupsComponent, EnglishWordsComponent, WordDetailComponent, WordEditComponent, WordListComponent, WordGroupDetailsComponent, WordGroupEditComponent, WordGroupListComponent, EnglishWordListComponent, EnglishWordDetailsComponent, WordGroupDetailComponent, EnglishWordDetailComponent, EnglishWordEditComponent],
  imports: [
    CommonModule
  ]
})
export class WordsModule { }
