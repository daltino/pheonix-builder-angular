import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WordService } from '../word.service';
import { Word } from 'src/app/typings';
import { MessageService } from 'src/app/shared/message/message.service';

@Component({
  selector: 'app-word-edit',
  templateUrl: './word-edit.component.html',
  styleUrls: ['./word-edit.component.scss']
})
export class WordEditComponent implements OnInit {
  pageTitle = 'Word Edit';
  word: Word;
  errorMessage: string;

  constructor(
    private messageService: MessageService,
    private wordService: WordService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getWord(id);
      }
    );
  }

  getWord(id: number) {
    this.wordService
      .getWord(id)
      .subscribe(
        word => this.onWordRetrieved(word),
        error => (this.errorMessage = <any>error)
      );
  }

  onWordRetrieved(word: Word) {
    this.word = word;

    if (this.word) {

    }
  }

  saveWord(): void {
    if(this.word.id === 0) {
      this.wordService.createWord(this.word)
        .subscribe(
          () => this.onSaveComplete(`The new ${this.word.name} was saved`),
          (error: any) => this.errorMessage = <any>error
        );
    }
  }

  onSaveComplete(message: string) {
    if(message) {
      this.messageService.addMessage(message);
    }

    this.router.navigate(['/words']);
  }

  deleteWord(): void {
    if (this.word.id === 0) {
      // Word was never stored
      this.onSaveComplete(`${this.word.id} was deleted`)
    } else {
      if (confirm(`Are you sure you want to delete the word: ${this.word.name}?`)) {
        this.wordService
          .deleteWord(this.word.id)
          .subscribe(() =>
            this.onSaveComplete(`${this.word.id} was deleted`),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }

}
