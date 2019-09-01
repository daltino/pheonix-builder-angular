import { Component, OnInit } from '@angular/core';
import { WordService } from '../word.service';
import { Word } from '../../typings';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.scss']
})
export class WordDetailComponent implements OnInit {
  pageTitle = 'Word Detail';
  word: Word;
  errorMessage: string;

  constructor(
    private wordService: WordService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.getWord(id);
    } else {
      this.word = {
        id: 1,
        name: 'Amabibi',
        description: 'Amabibi means my mother tongue',
      };
      // this.router.navigate(['/words/list']);
    }
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
}
