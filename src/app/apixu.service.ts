import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

/*Get key from apixu website where you have singedup */
private KEY = 'c61b4d1d1b5d4aa9a7d201811190108';
private url = "https://api.apixu.com/v1/current.json?key="+this.KEY+"&q=";

  constructor(private _http : HttpClient) { }

  getWeather(location : string) {
    return this._http.get(this.url+location);
  }
}
