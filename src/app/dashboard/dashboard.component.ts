import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  message: any;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getChatMessage();
  }

  getChatMessage(): void {
    this.heroService.getChatMessage().subscribe(
      (response) => {
        this.message = response;
        console.log(this.message);
      },
      (error) => {
        console.error('# Error fetching data', error);
      }
    );
  }
}