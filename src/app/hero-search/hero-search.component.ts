import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  private searchTerms = new Subject<string>();
  responseContent = '';

  constructor(private heroService: HeroService) {}


  ngOnInit(): void {
    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(1000),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    ).subscribe(
      (responseChat) => {
        console.log(" responseChat => ", responseChat);
        this.responseContent = responseChat.content;
      }
    );
  }

    // Push a search term into the observable stream.
    search(term: string): void {
      this.searchTerms.next(term);
    }
  
}
