import { Injectable } from '@angular/core';
import { IWeather } from './IWeather';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherService {

    constructor(private _http: Http) { }

    getWeather(): Observable<IWeather[]> {
        return this._http
            .get('http://www.zaman.es:786/api/office')
            .map((response: Response) => <IWeather[]>response.json());
    }
}
