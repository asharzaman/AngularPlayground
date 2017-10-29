import { Component, OnInit } from '@angular/core';
import { IWeather } from './IWeather';
import { WeatherService } from './weather.service';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
    _weather: IWeather[];
    ImageSource: string = 'http://angular.io/assets/images/logos/angular/angular.svg';
    
    constructor(private _weatherService: WeatherService) { }

    ngOnInit() {
        this._weatherService
            .getWeather()
            .subscribe((weatherData) => this._weather = weatherData);
    }

}
