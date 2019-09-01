import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Word } from '../typings';


@Injectable({
  providedIn: 'root'
})
export class WordService {
  private wordsUrl = 'api/words';

  constructor(private http: HttpClient) {}

  createWord(word: Word): Observable<Word> {
    if (!word) {

    }
    return of(word);
  }

  getWord(id: number): Observable<Word> {
    if (id === 0) {
      return of(this.initializeWord());
    }
    const url = `${this.wordsUrl}/${id}`;
    return this.http.get<Word>(url).pipe(
      tap(data => console.log('getWord: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err) {
    // TODO: send the server to some remote logging infrastructure
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // Backend Eerror
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeWord(): Word {
    // Return an initialized object
    return {
      id: 0,
      name: null,
      description: null,
      imageUrl: null
    };
  }

  deleteWord(id: number): Observable<Word> {
    if (id === 0) {
      return of(this.initializeWord());
    }
    const url = `${this.wordsUrl}/${id}/delete`;
    return this.http.get<Word>(url).pipe(
      tap(data => console.log("deleteWord: " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
}
