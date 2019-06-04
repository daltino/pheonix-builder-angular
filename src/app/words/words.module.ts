import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordsComponent } from './words/words.component';
import { WordGroupsComponent } from './word-groups/word-groups.component';
import { EnglishWordsComponent } from './english-words/english-words.component';

@NgModule({
  declarations: [WordsComponent, WordGroupsComponent, EnglishWordsComponent],
  imports: [
    CommonModule
  ]
})
export class WordsModule { }
