import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherSearchForm : FormGroup;
  public weatherData : any;
  
  constructor(private _fb : FormBuilder , 
              private apixuService : ApixuService) { }

  ngOnInit() {
    this.weatherSearchForm = this._fb.group({
      location:['',[<any>Validators.minLength(3)]]
    });
  }

  sendToAPIXU(formValues) {
    this.apixuService.getWeather(formValues.location)
      .subscribe(data=>{
        this.weatherData = data;
        console.log(this.weatherData);
      });
  }

}
