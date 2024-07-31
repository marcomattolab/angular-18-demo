import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap
} from "rxjs/operators";
import { of } from "rxjs";
import { Meteo, ShortMeteo } from "../models/meteo";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../utils/config";

@Component({
  selector: 'app-meteo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit{
  cityInput: FormControl = new FormControl();
  meteo!: ShortMeteo;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cityInput.valueChanges
      .pipe(
        debounceTime(1000),
        filter(city => city.length >= 3),
        distinctUntilChanged(),
        switchMap(city =>
          this.http
            .get<Meteo>(
              WEATHER_API_URL + city + "&units=metric&APPID=" + WEATHER_API_KEY
            )
            .pipe(
              map((result: Meteo) => ({
                temperature: result.main.temp,
                icon: `http://openweathermap.org/img/w/${
                  result.weather[0].icon
                }.png`,
                error: false
              })),
              catchError(() => of({ error: true }))
            )
        )
      )
      .subscribe(obj => {this.meteo = obj;});

    this.cityInput.setValue("Palermo");
  }
}
